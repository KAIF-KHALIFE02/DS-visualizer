import React, { Component } from "react";
import Nodes from "./nodes";
import * as dijkstra from "./Dijkstra.js";
import * as astar from "./Astar.js";
import * as bfs from "./BFS.js";
import * as dfs from "./DFS.js";
import * as bdd from "./BiDirectionalDijkstra";
import * as dijkstraNA from "./Functions without animations/Dijkstra.js";
import * as astarNA from "./Functions without animations/Astar.js";
import * as bfsNA from "./Functions without animations/BFS.js";
import * as dfsNA from "./Functions without animations/DFS.js";
import * as bddNA from "./Functions without animations/BiDirectionalDijkstra.js";
import "./pathbody.css";

let rows = 18;
let columns = 45;
// let startrow = 9;
// let startcol = 10;
// let finishrow = 9;
// let finishcol = 40;
export default class Pathbody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
      startrow: 9,
      startcol: 10,
      finishrow: 9,
      finishcol: 15,
      isMouseDown: false,
      isStartMoveable: false,
      isFinishMoveable: false,
    };
  }

  componentDidMount() {
    this.getNodes();
  }

  getNodes() {
    let Nodes = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < columns; j++) {
        row.push(this.createNodes(i, j));
      }
      Nodes.push(row);
    }
    this.setState({
      nodes: Nodes,
    });
  }

  createNodes(row, col) {
    return {
      col,
      row,
      isStart: row === this.state.startrow && col === this.state.startcol,
      isFinish: row === this.state.finishrow && col === this.state.finishcol,
      isWall: false,
      isVisited: false,
      distance: Infinity,
      totalDistance: 0,
      heuristic: 0,
      previousNode: null,
    };
  }

  handleMouseDown(row, col, isStart, isFinish) {
    if (isStart !== true && isFinish !== true) {
      let newNode = this.toggleNode(this.state.nodes, row, col);
      this.setState({ nodes: newNode, isMouseDown: true });
    } else if (isStart === true) {
      this.setState({ isStartMoveable: true });
    } else if (isFinish === true) {
      this.setState({ isFinishMoveable: true });
    }
  }
  handleMouseEnter(row, col) {
    if (!this.state.isMouseDown && !this.state.isFinishMoveable && !this.state.isStartMoveable){
      return;
    }
    if (this.state.isMouseDown === true) {
      let newNode = this.toggleNode(this.state.nodes, row, col);
      this.setState({ nodes: newNode });
      return;
    } else if (this.state.isStartMoveable) {
      this.setState({ startrow: row, startcol: col });
    //   const nodeGrid = this.state.nodes;
    //   const startNode = nodeGrid[this.state.startrow][this.state.startcol];
    //   const endNode = nodeGrid[this.state.finishrow][this.state.finishcol];
    //   let shortestPath = dijkstra.getNodesInShortestPathOrder(endNode);
    //   if(shortestPath.length > 1){
    //     this.clearGrid();
    // let grid = document.getElementsByClassName("gridbox");
    //   dijkstraNA.dijkstraNA(nodeGrid,startNode,endNode,grid)
    //   this.animateShortestPathNA(shortestPath, grid);
      // }
      return;
    } else if (this.state.isFinishMoveable === true) {
      this.setState({ finishrow: row, finishcol: col });
      return;
    }
  }
  handleMouseUp() {
    this.setState({ isMouseDown: false });
    this.setState({ isStartMoveable: false });
    this.setState({ isFinishMoveable: false });
  }

  clearGrid(){
    let nodes = this.state.nodes;
    let grid = document.getElementsByClassName("gridbox");
    for(let i=0;i<rows;i++){
    for(let j=0;j<columns;j++){
      if(!nodes[i][j].isVisited) continue;
      nodes[i][j].isVisited= false;
      this.removeBackgroundColor( nodes[i][j].row,nodes[i][j].col,grid)
    }
    }
      // this.removeBackgroundColor(node.row,node.col,grid)
   }

   removeBackgroundColor(row,col,grid){
    if((row === this.state.startrow && col === this.state.startcol)||(row === this.state.finishrow && col === this.state.finishcol)){
       return;
    }
    grid[0].childNodes[row].childNodes[col].style.backgroundColor = 'transparent'
   }

  async visualizeDijkstra() {
    let grid = document.getElementsByClassName("gridbox");
    const nodeGrid = this.state.nodes;
    const startNode = nodeGrid[this.state.startrow][this.state.startcol];
    const endNode = nodeGrid[this.state.finishrow][this.state.finishcol];
    await dijkstra.dijkstra(nodeGrid, startNode, endNode, grid);
    let shortestPath = await dijkstra.getNodesInShortestPathOrder(endNode);
    this.animateShortestPath(shortestPath, grid);
  }
  async visualizeAstar() {
    let grid = document.getElementsByClassName("gridbox");
    const nodeGrid = this.state.nodes;
    const startNode = nodeGrid[this.state.startrow][this.state.startcol];
    const endNode = nodeGrid[this.state.finishrow][this.state.finishcol];
    await astar.astar(nodeGrid, startNode, endNode, grid);
    let shortestPath = astar.getNodesInShortestPathOrder(endNode);
    this.animateShortestPath(shortestPath, grid);
  }
  async visualizeBFS() {
    let grid = document.getElementsByClassName("gridbox");
    const nodeGrid = this.state.nodes;
    const startNode = nodeGrid[this.state.startrow][this.state.startcol];
    const endNode = nodeGrid[this.state.finishrow][this.state.finishcol];
    await bfs.breadthfs(nodeGrid, startNode, endNode, grid);
    let shortestPath = astar.getNodesInShortestPathOrder(endNode);
    this.animateShortestPath(shortestPath, grid);
  }
  async visualizeDFS() {
    let grid = document.getElementsByClassName("gridbox");
    const nodeGrid = this.state.nodes;
    const startNode = nodeGrid[this.state.startrow][this.state.startcol];
    const endNode = nodeGrid[this.state.finishrow][this.state.finishcol];
    await dfs.depthfs(nodeGrid, startNode, endNode, grid);
    let shortestPath = astar.getNodesInShortestPathOrder(endNode);
    this.animateShortestPath(shortestPath, grid);
  }
  async visualizeBiDiDijkstra() {
    let grid = document.getElementsByClassName("gridbox");
    const nodeGrid = this.state.nodes;
    const startNode = nodeGrid[this.state.startrow][this.state.startcol];
    const endNode = nodeGrid[this.state.finishrow][this.state.finishcol];
    await bdd.Bidirectionaldijkstra(nodeGrid, startNode, endNode, grid);
    let shortestPath = bdd.getBidirectionalShortestPath();
    this.animateShortestPath(shortestPath, grid);
  }

  async animateShortestPath(shortestPath, grid) {
    for (let i = 0; i < shortestPath.length; i++) {
      await this.colorShortestPath(
        shortestPath[i].row,
        shortestPath[i].col,
        grid
      );
    }
  }

   animateShortestPathNA(shortestPath, grid) {
    for (let i = 0; i < shortestPath.length; i++) {
      this.colorShortestPathNA(
        shortestPath[i].row,
        shortestPath[i].col,
        grid
      );
    }
  }

  colorShortestPath(row, col, grid) {
    grid[0].childNodes[row].childNodes[col].style.backgroundColor = "green";
    return new Promise((resolve) => setTimeout(resolve, 50));
  }
  colorShortestPathNA(row, col, grid) {
    grid[0].childNodes[row].childNodes[col].style.backgroundColor = "green";
  }

  render() {
    let {
      nodes,
      isMouseDown,
      isMoveable,
      startrow,
      startcol,
      finishrow,
      finishcol,
    } = this.state;
    return (
      <>
        <div>
          <button onClick={this.visualizeDijkstra.bind(this)}>Dijkstra</button>
          <button onClick={this.visualizeAstar.bind(this)}>A Star</button>
          <button onClick={this.visualizeBFS.bind(this)}>BFS</button>
          <button onClick={this.visualizeDFS.bind(this)}>DFS</button>
          <button onClick={this.visualizeBiDiDijkstra.bind(this)}>
            Bi dijkstra
          </button>
        </div>
        <div id="captions">
          I am captions
        </div>
        <div className="gridbox">
          {nodes.map((row, rowidx) => {
            return (
              <div key={rowidx} className="row">
                {row.map((node, nodeidx) => {
                  const { row, col, isWall, isVisited } = node;
                  return (
                    <Nodes
                      Row={row}
                      Col={col}
                      isstart={startrow === row && startcol === col}
                      isfinish={finishrow === row && finishcol === col}
                      iswall={isWall}
                      isvisited={isVisited}
                      mouseIsPressed={isMouseDown}
                      moveability={isMoveable}
                      onmousedown={(row, col, isStart, isFinish) =>
                        this.handleMouseDown(row, col, isStart, isFinish)
                      }
                      onmouseenter={(row, col) =>
                        this.handleMouseEnter(row, col)
                      }
                      onmouseup={() => this.handleMouseUp()}
                      key={nodeidx}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }

  toggleNode(nodes, row, col) {
    let newNodes = nodes.slice();
    let node = newNodes[row][col];
    let newNode = {
      ...node,
      isWall: !node.isWall,
    };
    nodes[row][col] = newNode;
    return nodes;
  }
}
