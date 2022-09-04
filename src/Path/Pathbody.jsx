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
import * as Randomdsf from "../Maze/Random-DFS";
import * as RecursiveDivision from "../Maze/RecursiveDivision";
import Worker from "../worker/worker";
import WorkerBuilder from "../worker/worker-builder";
import { Slider, Typography, Tooltip, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Modal from "@mui/material/Modal";
import DijkstraTutorial from "../PathFindingTutorials/DijkstraTutorial";
import AstarTutorial from "../PathFindingTutorials/AstarTutorial";
import DFSTutorial from "../PathFindingTutorials/DFSTutorial";
import BFSTutorial from "../PathFindingTutorials/BFSTutorial";
import BiDijkstraTutorial from "../PathFindingTutorials/BiDijkstraTutorial";

let instance = new WorkerBuilder(Worker);

const theme = createTheme({
  palette: {
    slidercolor: {
      main: "#1C172C",
      contrastText: "#fff",
    },
  },
});

const Algorithms = ["Dijkstra", "Astar", "BFS", "DFS", "BiDijkstra"];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  isRunning: false,
};

let rows = 23;
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
      openMenu: false,
      selectedIndex: 1,
      openModal: false,
      tutorial: "Astar",
      speed: "slow",
      animationSpeed: 250,
    };
    this.onhandleSpeedChange = this.onhandleSpeedChange.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.anchorRef = React.createRef();
  }

  componentDidMount() {
    // instance.onmessage = (message) => {
    //   if (message) {
    //     console.log("Message from worker", message.data);
    //   }
    // };
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
      mazeVisited: false,
      isPath: false,
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
    if (
      !this.state.isMouseDown &&
      !this.state.isFinishMoveable &&
      !this.state.isStartMoveable
    ) {
      return;
    }
    if (this.state.isMouseDown === true) {
      let newNode = this.toggleNode(this.state.nodes, row, col);
      this.setState({ nodes: newNode });
      return;
    } else if (this.state.isStartMoveable) {
      this.setState({ startrow: row, startcol: col });
      // const nodeGrid = this.state.nodes;
      // const startNode = nodeGrid[this.state.startrow][this.state.startcol];
      // const endNode = nodeGrid[this.state.finishrow][this.state.finishcol];
      // let messageArray = ['dijkstra',nodeGrid,startNode,endNode]
      // instance.terminate()
      // this.clearPath()
      // instance.postMessage(messageArray)
      // let shortestPath = dijkstraNA.getNodesInShortestPathOrderNA(endNode);
      // let grid = document.getElementsByClassName("gridbox1");
      // console.log(shortestPath)
      // if (shortestPath.length > 1) {
      //   this.clearPath();
      //   dijkstraNA.dijkstraNA(nodeGrid, startNode, endNode,(newNodes)=>{
      //     this.setState({nodes: newNodes})
      //   });
      // instance.onmessage=(message)=>{
      //   let shortestPath = dijkstraNA.getNodesInShortestPathOrderNA(endNode);
      //   this.animateShortestPathNA(shortestPath);
      // }
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

  clearPath() {
    let newNodes = this.state.nodes;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (newNodes[i][j].isPath) newNodes[i][j].isPath = false;
        if (newNodes[i][j].isVisited) newNodes[i][j].isVisited = false;
        newNodes[i][j].previousNode = null;
      }
    }
    this.setState({ nodes: newNodes });
  }
  clearWalls() {
    let newNodes = this.state.nodes;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (newNodes[i][j].isWall) newNodes[i][j].isWall = false;
        newNodes[i][j].previousNode = null;
      }
    }
    this.setState({ nodes: newNodes });
  }
  clearGrid() {
    let Nodes = this.state.nodes;
    let grid = document.getElementsByClassName("gridbox1");
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (Nodes[i][j].isVisited) Nodes[i][j].isVisited = false;
        if (Nodes[i][j].isPath) Nodes[i][j].isPath = false;
        if (Nodes[i][j].isWall) Nodes[i][j].isWall = false;
        Nodes[i][j].previousNode = null;
      }
    }
    this.setState({ startrow: 9, startcol: 10, finishrow: 9, finishcol: 15 });
    this.getNodes();
    // this.setState({nodes:Nodes})
  }

  // removeBackgroundColor(row, col, grid) {
  //   if (
  //     (row === this.state.startrow && col === this.state.startcol) ||
  //     (row === this.state.finishrow && col === this.state.finishcol)
  //   ) {
  //     return;
  //   }
  //   grid[0].childNodes[row].childNodes[col].style.backgroundColor =
  //     "transparent";
  // }

  async visualizeDijkstra() {
    this.setState({isRunning:true})
    let grid = document.getElementsByClassName("gridbox1");
    const nodeGrid = this.state.nodes;
    const startNode = nodeGrid[this.state.startrow][this.state.startcol];
    const endNode = nodeGrid[this.state.finishrow][this.state.finishcol];
    await dijkstra.dijkstra(
      nodeGrid,
      startNode,
      endNode,
      grid,
      (newNodes) => {
        this.setState({ nodes: newNodes });
      },
      this.state.animationSpeed
    );
    let shortestPath = await dijkstra.getNodesInShortestPathOrder(endNode);
    this.animateShortestPath(shortestPath, grid);
    this.setState({isRunning:false})
  }
  async visualizeAstar() {
    this.setState({isRunning:true})
    let grid = document.getElementsByClassName("gridbox1");
    const nodeGrid = this.state.nodes;
    const startNode = nodeGrid[this.state.startrow][this.state.startcol];
    const endNode = nodeGrid[this.state.finishrow][this.state.finishcol];
    await astar.astar(
      nodeGrid,
      startNode,
      endNode,
      grid,
      (newNodes) => {
        this.setState({ nodes: newNodes });
      },
      this.state.animationSpeed
    );
    let shortestPath = astar.getNodesInShortestPathOrder(endNode);
    this.animateShortestPath(shortestPath, grid);
    this.setState({isRunning:false})
  }
  async visualizeBFS() {
    this.setState({isRunning:true})
    let grid = document.getElementsByClassName("gridbox1");
    const nodeGrid = this.state.nodes;
    const startNode = nodeGrid[this.state.startrow][this.state.startcol];
    const endNode = nodeGrid[this.state.finishrow][this.state.finishcol];
    await bfs.breadthfs(
      nodeGrid,
      startNode,
      endNode,
      grid,
      (newNodes) => {
        this.setState({ nodes: newNodes });
      },
      this.state.animationSpeed
    );
    let shortestPath = astar.getNodesInShortestPathOrder(endNode);
    this.animateShortestPath(shortestPath, grid);
    this.setState({isRunning:false})
  }
  async visualizeDFS() {
    this.setState({isRunning:true})
    let grid = document.getElementsByClassName("gridbox1");
    const nodeGrid = this.state.nodes;
    const startNode = nodeGrid[this.state.startrow][this.state.startcol];
    const endNode = nodeGrid[this.state.finishrow][this.state.finishcol];
    await dfs.depthfs(
      nodeGrid,
      startNode,
      endNode,
      grid,
      (newNodes) => {
        this.setState({ nodes: newNodes });
      },
      this.state.animationSpeed
    );
    let shortestPath = astar.getNodesInShortestPathOrder(endNode);
    this.animateShortestPath(shortestPath, grid);
    this.setState({isRunning:false})
  }
  async visualizeBiDiDijkstra() {
    this.setState({isRunning:true})
    let grid = document.getElementsByClassName("gridbox1");
    const nodeGrid = this.state.nodes;
    const startNode = nodeGrid[this.state.startrow][this.state.startcol];
    const endNode = nodeGrid[this.state.finishrow][this.state.finishcol];
    await bdd.Bidirectionaldijkstra(
      nodeGrid,
      startNode,
      endNode,
      grid,
      (newNodes) => {
        this.setState({ nodes: newNodes });
      },
      this.state.animationSpeed
    );
    let shortestPath = bdd.getBidirectionalShortestPath();
    this.animateShortestPath(shortestPath, grid);
    this.setState({isRunning:false})
  }

  async animateShortestPath(shortestPath, grid) {
    let nodesPath = this.state.nodes;
    for (let i = 0; i < shortestPath.length; i++) {
      await this.colorShortestPath(
        nodesPath[shortestPath[i].row][shortestPath[i].col]
      );
      this.setState({ nodes: nodesPath });
    }
  }

  animateShortestPathNA(shortestPath, grid) {
    let nodesPath = this.state.nodes;
    for (let i = 0; i < shortestPath.length; i++) {
      nodesPath[shortestPath[i].row][shortestPath[i].col].isPath = true;
    }
    this.setState({ nodes: nodesPath });
  }

  colorShortestPath(node) {
    node.isPath = true;
    return new Promise((resolve) => setTimeout(resolve, 500));
  }

  randomMaze() {
    this.setState({isRunning:true})
    let Nodes = this.state.nodes;
    Randomdsf.RandomDSF(
      Nodes,
      Nodes[0][0],
      Nodes[rows - 1][columns - 1],
      (newNodes) => {
        this.setState({ nodes: newNodes });
      }
    );
    this.setState({isRunning:false})
  }
  recursiveDivision() {
    let Nodes = this.state.nodes;
    RecursiveDivision.recursiveDivisoin(
      Nodes,
      Nodes[0][0],
      Nodes[rows - 1][columns - 1],
      (newNodes) => {
        this.setState({ nodes: newNodes });
      },
      "Horizontal"
    );
  }

  // Modal Functions start *****************
  handleModalOPen() {
    this.setState({ openModal: true });
  }

  handleModalClose() {
    this.setState({ openModal: false });
  }
  // Modal Functions end *******************

  // Button for Modal Start ******************
  handleButtonClick = () => {
    this.handleModalOPen();
  };

  handleMenuItemClick(event, index) {
    let newTutorial = Algorithms[index];
    console.log(newTutorial);
    this.setState({
      selectedIndex: index,
      openMenu: false,
      tutorial: newTutorial,
    });
  }

  handleToggle = () => {
    let newOpen = !this.state.openMenu;
    this.setState({ openMenu: newOpen });
  };

  handleClose = (event) => {
    if (
      this.anchorRef.current &&
      this.anchorRef.current.contains(event.target)
    ) {
      return;
    }
    this.setState({ open: false });
  };
  // Button for Modal end ********************

  // Animation Speed Slider start ***************
  onhandleSpeedChange(slider) {
    let value = slider.target.value;
    if (value === 2) {
      this.setState({ animationSpeed: 1 });
    }
    if (value === 1) {
      this.setState({ animationSpeed: 100 });
    }
    if (value === 0) {
      this.setState({ animationSpeed: 250 });
    }
  }
  // Animation Speed Slider end ****************

  render() {
    let {
      nodes,
      isMouseDown,
      isMoveable,
      startrow,
      startcol,
      finishrow,
      finishcol,
      selectedIndex,
      openMenu,
      openModal,
      tutorial,
      isRunning
    } = this.state;

    const speed = [
      {
        value: 0,
        label: "Slow",
      },
      {
        value: 1,
        label: "Medium",
      },
      {
        value: 2,
        label: "Fast",
      },
    ];
    return (
      <>
        <div className="path-header">
          <div className="path-other-btns">
            <div className="path-animation-slider">
              <div className="slider-text">Animation speed: </div>
              <ThemeProvider theme={theme}>
                <Slider
                  color="slidercolor"
                  disabled={isRunning}
                  aria-label="Always visible"
                  defaultValue={0}
                  step={1}
                  marks={speed}
                  max={2}
                  onChange={this.onhandleSpeedChange}
                />
              </ThemeProvider>
            </div>
            <div className="path-grid-other-btns">
              <button
              disabled={isRunning}
                className="grid-other-btns"
                onClick={this.clearGrid.bind(this)}
              >
                <span>Clear grid</span>
              </button>
              <button
                className="grid-other-btns"
                disabled={isRunning}
                onClick={this.clearPath.bind(this)}
              >
                <span>Clear path</span>
              </button>
              <button
                className="grid-other-btns"
                disabled={isRunning}
                onClick={this.clearWalls.bind(this)}
              >
                <span>Clear walls</span>
              </button>
              <button
                className="grid-other-btns"
                disabled={isRunning}
                onClick={this.randomMaze.bind(this)}
              >
                <span>Random Walls</span>
              </button>
            </div>
            <div className="path-tutorial">
              <div className="tutorial-Button">
                <ButtonGroup
                  disabled={isRunning}
                  variant="contained"
                  ref={this.anchorRef}
                  aria-label="split Button"
                >
                  <Button
                    className="tutorial-btn2"
                    onClick={this.handleButtonClick}
                  >
                    {Algorithms[selectedIndex]}
                  </Button>
                  <Button
                    className="tutorial-btn2-arrow"
                    size="small"
                    aria-controls={openMenu ? "split-Button-menu" : undefined}
                    aria-expanded={openMenu ? "true" : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={this.handleToggle}
                  >
                    <ArrowDropDownIcon />
                  </Button>
                </ButtonGroup>
                <Popper
                  sx={{
                    zIndex: 1,
                  }}
                  open={openMenu}
                  anchorEl={this.anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom"
                            ? "center top"
                            : "center bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={this.handleClose}>
                          <MenuList id="split-button-menu-2" autoFocusItem>
                            {Algorithms.map((option, index) => (
                              <MenuItem
                                className="MenuItems"
                                key={option}
                                // disabled={index === 2}
                                selected={index === selectedIndex}
                                onClick={(event) =>
                                  this.handleMenuItemClick(event, index)
                                }
                              >
                                {option}
                              </MenuItem>
                            ))}
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
              <div className="modal">
                <Modal
                  open={openModal}
                  onClose={this.handleModalClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    {tutorial === "Dijkstra" ? (
                      <DijkstraTutorial />
                    ) : tutorial === "Astar" ? (
                      <AstarTutorial />
                    ) : tutorial === "BFS" ? (
                      <BFSTutorial />
                    ) : tutorial === "DFS" ? (
                      <DFSTutorial />
                    ) : tutorial === "BiDijkstra" ? (
                      <BiDijkstraTutorial />
                    ) : (
                      <h6>Select an algorithm</h6>
                    )}
                  </Box>
                </Modal>
              </div>
            </div>
          </div>
          <div className="path-gird-main-btns">
            <Button
              className="gird-main-btns"
              disabled={isRunning}
              onClick={this.visualizeDijkstra.bind(this)}
            >
              <span class="box2">Dijkstra</span>
              <div class="top"></div>
              <div class="left"></div>
              <div class="bottom"></div>
              <div class="right"></div>
            </Button>
            <Button
              className="gird-main-btns"
              disabled={isRunning}
              onClick={this.visualizeAstar.bind(this)}
            >
              <span class="box2">A Star</span>
              <div class="top"></div>
              <div class="left"></div>
              <div class="bottom"></div>
              <div class="right"></div>
            </Button>
            <Button
              className="gird-main-btns"
              disabled={isRunning}
              onClick={this.visualizeBFS.bind(this)}
            >
              <span class="box2">BFS</span>
              <div class="top"></div>
              <div class="left"></div>
              <div class="bottom"></div>
              <div class="right"></div>
            </Button>
            <Button
              className="gird-main-btns"
              disabled={isRunning}
              onClick={this.visualizeDFS.bind(this)}
            >
              <span class="box2">DFS</span>
              <div class="top"></div>
              <div class="left"></div>
              <div class="bottom"></div>
              <div class="right"></div>
            </Button>
            <Button
              className="gird-main-btns"
              disabled={isRunning}
              onClick={this.visualizeBiDiDijkstra.bind(this)}
            >
              <span class="box2">Bi dijkstra</span>
              <div class="top"></div>
              <div class="left"></div>
              <div class="bottom"></div>
              <div class="right"></div>
            </Button>
          </div>
        </div>
        {/* <div id="captions"></div> */}
        <div className="gridbox1">
          {nodes.map((row, rowidx) => {
            return (
              <div key={rowidx} className="row1">
                {row.map((node, nodeidx) => {
                  const {
                    row,
                    col,
                    isWall,
                    isVisited,
                    mazeVisited,
                    isPath,
                  } = node;
                  return (
                    <Nodes
                      Row={row}
                      Col={col}
                      isstart={startrow === row && startcol === col}
                      isfinish={finishrow === row && finishcol === col}
                      iswall={isWall}
                      isvisited={isVisited}
                      mazevisited={mazeVisited}
                      ispath={isPath}
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
