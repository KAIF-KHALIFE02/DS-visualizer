let unvisitedNodesFromStart = [];
let unvisitedNodesFromEnd = [];
let foundByBothTarget = false;
let foundNode = null;
let lastNode = null;
export async function Bidirectionaldijkstra(nodes, startNode, endNode, grid) {
  startNode.distance = 0;
  endNode.distance = 0;
  unvisitedNodesFromStart.push(startNode);
  unvisitedNodesFromEnd.push(endNode);
  while (unvisitedNodesFromStart.length) {
    sortNodes(unvisitedNodesFromStart);
    sortNodes(unvisitedNodesFromEnd);
    const currentNodeFromStart = unvisitedNodesFromStart.shift();
    const currentNodeFromEnd = unvisitedNodesFromEnd.shift();
    if (!currentNodeFromStart.isWall) {
      currentNodeFromStart.isVisited = true;
      await colorNeighbour(
        currentNodeFromStart.row,
        currentNodeFromStart.col,
        grid
      );
      if (currentNodeFromStart.distance === Infinity) {
        console.log("i am at infity");
        return;
      }
      if (foundByBothTarget) {
        console.log(unvisitedNodesFromStart);
        return;
      }
    }
    await updateUnvisitedNeighbors(
      currentNodeFromStart,
      nodes,
      unvisitedNodesFromStart,
      true,
      false,
      grid
    );

    if (!currentNodeFromEnd.isWall) {
      currentNodeFromEnd.isVisited = true;
      await colorNeighbour(
        currentNodeFromEnd.row,
        currentNodeFromEnd.col,
        grid
      );
      if (currentNodeFromEnd.distance === Infinity) {
        console.log("i am at infity");
        return;
      }
      if (foundByBothTarget) {
        console.log(unvisitedNodesFromStart);
        return;
      }
    }
    await updateUnvisitedNeighbors(
      currentNodeFromEnd,
      nodes,
      unvisitedNodesFromEnd,
      false,
      true,
      grid
    );
    if (currentNodeFromStart === endNode || currentNodeFromEnd === startNode) {
      console.log("found");
      return;
    }
  }
}

function colorNeighbour(row, col, grid) {
  grid[0].childNodes[row].childNodes[col].style.backgroundColor = "yellow";
  return new Promise((resolve) => setTimeout(resolve, 1));
}

function sortNodes(unvisitednodes) {
  unvisitednodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

async function updateUnvisitedNeighbors(
  node,
  nodes,
  unvisitedNodes,
  isStart,
  isFinish,
  grid
) {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, nodes);
  for (const neighbor of unvisitedNeighbors) {
    if (neighbor.isWall) continue;
    if (isStart) {
      if (unvisitedNodesFromEnd.includes(neighbor)) {
        foundByBothTarget = true;
        foundNode = neighbor;
        lastNode = node;
        neighbor.isVisited = true;
      await colorNeighbour(
        neighbor.row,
        neighbor.col,
        grid
      );
        return;
      }
    } else if (isFinish) {
      if (unvisitedNodesFromStart.includes(neighbor)) {
        foundByBothTarget = true;
        foundNode = neighbor;
        lastNode = node;
        neighbor.isVisited = true;
      await colorNeighbour(
        neighbor.row,
        neighbor.col,
        grid
      );
        return;
      }
    }
    if (
      !unvisitedNodesFromStart.includes(neighbor) &&
      !unvisitedNodesFromEnd.includes(neighbor)
    ) {
      neighbor.distance = node.distance + 1;
      neighbor.previousNode = node;
      unvisitedNodes.push(neighbor);
    }
  }
}

function getUnvisitedNeighbors(node, nodes) {
  const neighbors = [];
  const { col, row } = node;
  if (row > 0) neighbors.push(nodes[row - 1][col]);
  if (row < nodes.length - 1) neighbors.push(nodes[row + 1][col]);
  if (col > 0) neighbors.push(nodes[row][col - 1]);
  if (col < nodes[0].length - 1) neighbors.push(nodes[row][col + 1]);
  return neighbors.filter((neighbor) => !neighbor.isVisited);
}

export function getBidirectionalShortestPath() {
  let nodesInShortestPathFromStart = [];
  let nodesInShortestPathFromEnd = [];
  let current1 = foundNode;
  let current2 = lastNode;
  console.log(current1);
  console.log(current2);
  while (current1 !== null) {
    nodesInShortestPathFromStart.unshift(current1);
    current1 = current1.previousNode;
  }
  while (current2 !== null) {
    nodesInShortestPathFromStart.push(current2);
    current2 = current2.previousNode;
  }
  return nodesInShortestPathFromStart.concat(nodesInShortestPathFromEnd);
}
