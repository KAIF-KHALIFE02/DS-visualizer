import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Video from "./../DFS/DfsWorking.mp4";
import image1 from "./../DFS/Dfs1.png";
import image2 from "./../DFS/Dfs2.png";
import image3 from "./../DFS/Dfs3.png";
import image4 from "./../DFS/Dfs4.png";
import image5 from "./../ColorsPic/Green.png";
import image6 from "./../ColorsPic/red.png";
import image7 from "./../ColorsPic/yellow.png";
import image8 from "./../ColorsPic/Blue.png";
import image9 from "./../DFS/Dfs5.png";
import image10 from "./../DFS/Dfs6.png";
import image11 from "./../DFS/Dfs7.png";
import image12 from "./../DFS/Dfs8.png";
import image13 from "./../DFS/Dfs9.png";
import "../StyleSheets/Carousals.css";

export default class DFSTutorial extends Component {
  render() {
    const mystyle = {
      display: "flex",
      width: 100,
    };
    const newstyle = {
      display: "flex",
    };
    const instyle = {
      height: 40,
      width: 40,
      margin: "0 20%",
    };
    return (
      <>
        <div className="carousel-topic">Depth First Search Algorithm</div>
        <Carousel className="main-carousel">
          <Carousel.Item className="carousel-item">
            <CardHeader>
              <div className="dfs-child-1 color-black">
                <h2 id="h2">What is DFS?</h2>
                Depth-first search (DFS) is a recursive algorithm for traversing
                a tree or graph data structure. It is called as DFS because it
                starts from the root node and follows each path to its greatest
                depth node before moving to the next.
                In below image, DFS includes Visited and Stack section(LIFO -
                Last in the First Out). Visited section is for the nodes which
                are already processed. Stack section is for the nodes which are
                going to be implemented next.
                <img className="dfs-img-1" src={image1} alt="First slide" />
                Here,from Stack section to Visited section numbers are shifted
                in Last in First Out(LIFO) process. This process goes until the
                last number.
                <div style={newstyle}>
                  <img
                    className="dfs-img-1"
                    src={image2}
                    alt="First slide"
                  />

                  <img
                    className="dfs-img-1"
                    src={image3}
                    alt="First slide"
                  />
                </div>
                As given above, this algorithm uses stack (LIFO) process even
                here 4 came in stack after 3 but it will be out(shifted to
                visited array) first.
                <img className="dfs-img-1" src={image4} alt="First slide" />
              </div>
            </CardHeader>
          </Carousel.Item>
          <Carousel.Item  className="carousel-item">
            <CardHeader>
              <div className="color-black dfs-child-2">
                <h2 id="h2">Working of BFS</h2>
                <img className="dfs-img-2" src={image9} alt="First slide" />
                Here, we have two nodes one is start node which is in green and
                other one is end node which is in red color.<br></br>
                <div className="bfs-img-div-2">
                  <img  src={image5} alt="First slide" />
                  <h5 className="mar-0">Start Node</h5>
                  <img src={image6} alt="First slide" />
                  <h5 className="mar-0">End Node</h5>
                  <img src={image7} alt="First slide" />
                  <h5 className="mar-0">Visited Nodes</h5>
                  <img src={image8} alt="First slide" />
                  <h5 className="mar-0">User walls </h5>
                </div>
                <ul>
                  <li>
                    Let us Consider start node distance(weight) as zero(0) and
                    for rest of the nodes as inifinite(∞).
                  </li>
                  <li>
                    Here we will pick start node as a first node as it has a
                    value of zero(0) and it is minimum from other nodes.
                  </li>
                  <img className="dfs-img-2" src={image10} alt="First slide" />
                  As you can see it is yellow in color.
                  <li>
                    This algorithm will check each path to its greatest depth
                    node before moving to the next.
                    <img className="dfs-img-2" src={image11} alt="First slide" />
                  </li>
                </ul>
              </div>
            </CardHeader>
          </Carousel.Item>
          <Carousel.Item  className="carousel-item">
            <CardHeader>
              <div className="dfs-child-3 color-black">
              <ul>
                <li>After that every node is checked until the end node</li>
                <img className="dfs-img-3" src={image12} alt="First slide" />

                <li>
                  Finally shortest path from Start node to End node is done.
                  <br></br>
                  Here,nodes which are green in color represents the shortest
                  path.<br></br>
                  DFS performs "Backtracing",In which every node stores their
                  previous node so that it can backtracked and hence find the
                  shortest path.<br></br>
                  So basically DFS can find shortest path for every node it
                  visits.<br></br>
                  <img className="dfs-img-3" src={image13} alt="First slide" />
                </li>
              </ul>
              </div>
            </CardHeader>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <CardHeader>
              <h5 className="align-header"> This video represents the complete process</h5>
              <div className="dfs-video-div">
              <video
                src={Video}
                controls={false}
                className="dfs-video"
                autoPlay={true}
                loop={true}
              />
              </div>
            </CardHeader>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
