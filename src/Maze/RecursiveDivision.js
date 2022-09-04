let horizontalVisited =[]
let verticalVisited =[]

export async function recursiveDivisoin(
  Nodes,
  startNode,
  endNode,
  setNodes,
  orientation
) {
  let x1 = startNode.row;
  let x2 = endNode.row;
  let y1 = startNode.col;
  let y2 = endNode.col;
  // await buildBorders(Nodes,x1,x2,y1,y2,(nodes)=>{
  //     setNodes(nodes)
  // })
  // setNodes(Nodes)
  let possibleRows = [];
  let possibleCols = [];
  for (let i = 1; i < Nodes.length; i += 2) {
    possibleRows.push(i);
  }
  for (let i = 1; i < Nodes[0].length; i += 2) {
    possibleCols.push(i);
  }
  // console.log(possibleRows);
  // console.log(possibleCols);
  await addInnerWalls( Nodes, 1, y2-2, 1, x2-2, (nodes) => {
    setNodes(nodes);
  });
  setNodes(Nodes);
}

async function addInnerWalls( nodes, x1, x2, y1, y2, setNodes) {
  // x2-x2 => cols
  // y2-y1 => rows
  // console.log(x2-x1,y2-y1)
  if ((x2 - x1) <= 2|| (y2-y1)<= 2 || x2<x1 || y2<y1){
    // console.log('return')
    return;
  }
  if((x2-x1)>(y2-y1)){
    // console.log('cols')
    // new col
    let x = Math.ceil((Math.random() * randomNumber(x1, x2)) / 2) * 2;
    // console.log('cols',x1,x2,x-1)
    await addVWall(nodes,y1,y2,x,setNodes)
    await addInnerWalls(nodes,x1,x-1,y1,y2,setNodes)
    await addInnerWalls(nodes,x+1,x2,y1,y2,setNodes)
  }
  else{
    // console.log('rows')
    let y = Math.ceil((Math.random() * randomNumber(y1, y2)) / 2) * 2;
    // console.log('rows',y1,y2,y-1)
    await addHWall(nodes,x1,x2,y,setNodes)
    await addInnerWalls(nodes,x1,x2,y1,y-1,setNodes)
    await addInnerWalls(nodes,x1,x2,y+1,y2,setNodes)
  }
  // if (horizontal) {
  //   console.log('h',x1,x2)
  //   if (x2 - x1 < 2){
  //     return;
  //   } 
  //   let y = Math.ceil((Math.random() * randomNumber(y1, y2)) / 2) * 2;
  //   console.log('h',y)
  //   await addHWall(nodes, x1, x2, y, setNodes);

  //   await addInnerWalls( nodes, x1, x2, y1, y - 1, setNodes);
  //   await addInnerWalls(nodes, x1, x2, y + 1, y2, setNodes);
  // } else {
  //   console.log('v',y1,y2)
  //   if (y2 - y1 < 2){
  //     return;
  //   } 
    // let x = Math.ceil((Math.random() * randomNumber(x1, x2)) / 2) * 2;
    // console.log('v',x)
    // await addVWall(nodes, y1, y2, x, setNodes);
    // await addWalls(horizontal, nodes, y1, y2, x, setNodes);
    // await addInnerWalls( nodes, x1, x - 1, y1, y2, setNodes);
    // await addInnerWalls( nodes, x + 1, x2, y1, y2, setNodes);
  // }
}
// async function addInnerWalls(horizontal, nodes, x1, x2, y1, y2, setNodes) {
//   if (horizontal) {
//     console.log('h',x1,x2)
//     if (x2 - x1 < 2){
//       return;
//     } 
//     let y = Math.ceil((Math.random() * randomNumber(y1, y2)) / 2) * 2;
//     console.log('h',y)
//     await addHWall(nodes, x1, x2, y, setNodes);
//     // await addWalls(horizontal, nodes, x1, x2, y, setNodes);
//     // if((x2-x1)<(y2-y1)) horizontal = true
//     // else horizontal = false

//     await addInnerWalls(!horizontal, nodes, x1, x2, y1, y - 1, setNodes);
//     await addInnerWalls(!horizontal, nodes, x1, x2, y + 1, y2, setNodes);
//   } else {
//     console.log('v',y1,y2)
//     if (y2 - y1 < 2){
//       return;
//     } 
//     let x = Math.ceil((Math.random() * randomNumber(x1, x2)) / 2) * 2;
//     console.log('v',x)
//     await addVWall(nodes, y1, y2, x, setNodes);
//     // await addWalls(horizontal, nodes, y1, y2, x, setNodes);
//     // if((x2-x1)<(y2-y1)) horizontal = true
//     // else horizontal = false
//     await addInnerWalls(!horizontal, nodes, x1, x - 1, y1, y2, setNodes);
//     await addInnerWalls(!horizontal, nodes, x + 1, x2, y1, y2, setNodes);
//   }
// }

async function addWalls(horizontal, nodes, start, end, division, setNodes) {
  let hole = Math.floor((Math.random() * randomNumber(start, end)) / 2) * 2 + 1;
  if (horizontal) {
    for (let i = start; i <= end; i += 1) {
      if (i === hole) continue;
      await setWall(nodes[i][division]);
      setNodes(nodes);
    }
  } else {
    for (let i = start; i <= end; i += 1) {
      if (i === hole) continue;
      await setWall(nodes[division][i]);
      setNodes(nodes);
    }
  }
}

async function addHWall(nodes, minX, maxX, y, setNodes) {
  // let z = horizontalVisited.find(x=>{
  //   return (x.min === minX && x.max === maxX) 
  // })
  // if(z){
  //   console.log(z,'returning from wall')
  //   return;
  // }
  // horizontalVisited.push({min:minX,max:maxX})
  var hole = Math.ceil(randomNumber(minX, maxX) / 2) * 2 - 1;
  console.log('h',hole,minX,maxX)
  
  for (var i = minX; i <= maxX; i++) {
    if (i === hole) nodes[y][i].isWall = false
    else await setWall(nodes[y][i]);
    setNodes(nodes);
  }
}

async function addVWall(nodes, minY, maxY, x, setNodes) {
  // let z = verticalVisited.find(x=>{
  //   return (x.min === minY && x.max === maxY) 
  // })
  // if(z){
  //   console.log(z,'returning from wall')
  //   return;
  // }
  // verticalVisited.push({min:minY,max:maxY})
  var hole = Math.ceil(randomNumber(minY, maxY) / 2) * 2 - 1;
  console.log('v',hole,minY,maxY)
  for (var i = minY; i <= maxY; i++) {
    if (i == hole) nodes[i][x].isWall = false
    else await setWall(nodes[i][x]);
    setNodes(nodes);
  }
}

async function buildBorders(nodes, x1, x2, y1, y2, setNodes) {
  for (let i = x1; i <= y2; i++) {
    await setWall(nodes[x1][i]);
    setNodes(nodes);
  }
  for (let i = x1; i <= x2; i++) {
    await setWall(nodes[i][y2]);
    setNodes(nodes);
  }
  for (let i = y2; i >= y1; i--) {
    await setWall(nodes[x2][i]);
    setNodes(nodes);
  }
  for (let i = x2; i >= x1; i--) {
    await setWall(nodes[i][y1]);
    setNodes(nodes);
  }
}

function setWall(node) {
  node.isWall = true;
  return new Promise((resolve) => setTimeout(resolve, 5));
}

function randomNumber(min, max) {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random
}

// export async function recursiveDivisoin(Nodes,startNode,endNode,setNodes,orientation){
//   let rows = Nodes[0].length
//   let cols = Nodes.length
//   let minX = startNode.row;
//   let maxX = endNode.row;
//   let minY = startNode.col;
//   let maxY = endNode.col;
//   getRecursiveDivision(true,Nodes,minX,maxX,minY,maxY,(nodes)=>{
//     setNodes(nodes)
//   })
// }

// function getRecursiveDivision(horizontal,nodes,minX,maxX,minY,maxY,setNodes){

// }
