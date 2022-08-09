export function dijkstraNA(nodes,startNode,endNode,grid){
    startNode.distance = 0;
    let unvisitedNodes = getAllNodes(nodes)
    while (!!unvisitedNodes.length) {
        sortNodes(unvisitedNodes);
        const closestNode = unvisitedNodes.shift();
        if (closestNode.isWall) continue;
        if (closestNode.distance === Infinity){
             console.log('i am at infity') 
             return ;
        }
        closestNode.isVisited = true;
         colorNeighbour(closestNode.row,closestNode.col,grid)
        if (closestNode === endNode){
            return;
        } 
        updateUnvisitedNeighbors(closestNode, nodes);
    }
}

function colorNeighbour(row,col,grid){
    grid[0].childNodes[row].childNodes[col].style.backgroundColor = 'yellow';
}

function getAllNodes(nodes){
    let nodearray = []
    for(const row of nodes){
        for(const node of row){
            nodearray.push(node)
        }
    }
    return nodearray;
}

function sortNodes(unvisitednodes){
    unvisitednodes.sort((nodeA,nodeB)=> nodeA.distance - nodeB.distance)
}

function updateUnvisitedNeighbors(node, nodes) {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, nodes);
    for (const neighbor of unvisitedNeighbors) {
      neighbor.distance = node.distance + 1;
      neighbor.previousNode = node;
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

  export function getNodesInShortestPathOrder(finishNode) {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
  }