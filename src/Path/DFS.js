export async function depthfs(nodes,startnode,endnode,grid,nodesState,speed){
    let stack = [];
    let unvisitedNodes = [];
    let visitedNodes = [];
    unvisitedNodes.push(startnode);
    while(unvisitedNodes){
        let currentNode = unvisitedNodes.shift();
        if(currentNode.isWall) continue;
        if(currentNode === endnode) return visitedNodes;
        visitedNodes.push(currentNode)
        await colorNeighbour(currentNode,speed)
        nodesState(nodes)
        currentNode.isVisited = true;
        let unvisitedNeighbors = getUnvisitedNeighbors(currentNode,nodes)
        for(let unvisitedNeighbor of unvisitedNeighbors){
            unvisitedNeighbor.previousNode = currentNode;
            unvisitedNodes.unshift(unvisitedNeighbor)
        }
    }
    return visitedNodes;
}

function colorNeighbour(node,speed){
    node.isVisited = true
    return new Promise(resolve => setTimeout(resolve,speed))
}


// function colorNeighbour(row,col,grid){
//     grid[0].childNodes[row].childNodes[col].style.backgroundColor = 'yellow';
//     return new Promise(resolve => setTimeout(resolve,1))
// }

function getUnvisitedNeighbors(node, nodes) {
    const neighbors = [];
    const {col, row} = node;
    if (col > 0) neighbors.push(nodes[row][col - 1]);
    if (row > 0) neighbors.push(nodes[row - 1][col]);
    if (row < nodes.length - 1) neighbors.push(nodes[row + 1][col]);
    if (col < nodes[0].length - 1) neighbors.push(nodes[row][col + 1]);
    return neighbors.filter(neighbor => !neighbor.isVisited);
  }