export async function breadthfs(nodes,startnode,endnode,grid){
    let queue = [];
    let visitedNodes = [];
    startnode.distance=0;
    queue.push(startnode)
    while(queue){
        let currentNode = queue.shift();
        if(currentNode.isWall || currentNode.isVisited) continue
        currentNode.isVisited = true;
        await colorNeighbour(currentNode.row,currentNode.col,grid)
        if(currentNode.distance === Infinity) return visitedNodes
        visitedNodes.push(currentNode);
        if(currentNode === endnode){
             console.log(visitedNodes); 
             return visitedNodes
        }
        updateUnvisitedNeighbors(currentNode,nodes,queue)
    }
}

function colorNeighbour(row,col,grid){
    grid[0].childNodes[row].childNodes[col].style.backgroundColor = 'yellow';
    return new Promise(resolve => setTimeout(resolve,1))
}

function updateUnvisitedNeighbors(node, nodes,queue) {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, nodes);
    for (const neighbor of unvisitedNeighbors) {
      neighbor.distance = node.distance + 1;
      neighbor.previousNode = node;
      queue.push(neighbor)
    }
  }

function getUnvisitedNeighbors(node, nodes) {
    const neighbors = [];
    const {col, row} = node;
    if (row > 0) neighbors.push(nodes[row - 1][col]);
    if (row < nodes.length - 1) neighbors.push(nodes[row + 1][col]);
    if (col > 0) neighbors.push(nodes[row][col - 1]);
    if (col < nodes[0].length - 1) neighbors.push(nodes[row][col + 1]);
    return neighbors.filter(neighbor => !neighbor.isVisited);
  }