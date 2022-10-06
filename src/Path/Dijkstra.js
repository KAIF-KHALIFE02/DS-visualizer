export async function dijkstra(nodes,startNode,endNode,grid,nodesState,speed){
  // document.getElementById('captions').innerText = "Let's find path using Dijkstra's algorithm";
  await pauseIt();
    startNode.distance = 0;
    let unvisitedNodes = getAllNodes(nodes)
    while (!!unvisitedNodes.length) {
        sortNodes(unvisitedNodes);
        const closestNode = unvisitedNodes.shift();
        if (closestNode.isWall){
          // document.getElementById('captions').innerText = "Since this is a wall we will not consider this node"
          // await pauseIt();
          continue;
        } 
        if (closestNode.distance === Infinity){
             console.log('i am at infity') 
             return ;
        }
       await colorNeighbour(closestNode,speed)
        nodesState(nodes)
        if (closestNode === endNode){
            return;
        } 
        await updateUnvisitedNeighbors(closestNode, nodes);
    }
}

function colorNeighbour(node,speed){
    node.isVisited = true
    // gridnode.classList.add('node-visited')
    return new Promise(resolve => setTimeout(resolve,speed))
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

async function updateUnvisitedNeighbors(node, nodes) {
  // document.getElementById('captions').innerText = "Incrementing the distance of neighbour nodes by 1";
  // await pauseIt();
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

  function pauseIt() {
    return new Promise((resolve) => setTimeout(resolve, 100));
  }

  export async function getNodesInShortestPathOrder(finishNode) {
    // document.getElementById('captions').innerText = "We have found the end node. Now let's create a shortest path!!!!"
    // await pauseIt();
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
  }