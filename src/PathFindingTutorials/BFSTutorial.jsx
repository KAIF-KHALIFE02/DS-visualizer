import { Carousel } from "react-bootstrap";
import React, { Component } from "react";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Video from "./../BFS/BfsWorking.mp4";
import image1 from "./../BFS/Bfs1.png";
import image2 from "./../BFS/Bfs2.png";
import image3 from "./../ColorsPic/Green.png";
import image4 from "./../ColorsPic/red.png";
import image5 from "./../ColorsPic/yellow.png";
import image6 from "./../ColorsPic/Blue.png";
import image7 from "./../BFS/Bfs3.png";
import image8 from "./../BFS/Bfs4.png";
import image9 from "./../BFS/Bfs6.png";
import image10 from "./../BFS/Bfs5.png";
import image11 from "./../BFS/Bfs7.png";
import "../StyleSheets/Carousals.css";

export default class BFSTutorial extends Component {
  render() {
    const mystyle = {
      display: "flex",
      width: 100,
    };
    const instyle = {
      height: 40,
      width: 40,
      margin: "0 20%",
    };
    return (
      <>
        <div className="carousel-topic">Breadth First Search Algorithm</div>
        <Carousel className="main-carousel">
          <Carousel.Item className="carousel-item">
            <CardHeader>
              <div className="bfs-child-1 color-black">
                <h2>What is BFS?</h2>
                <ul>
                  <li>
                    Breadth-first search is a graph traversal algorithm that
                    starts traversing the graph from the start node and visit
                    all the neighbour nodes. Then, it selects the nearest node
                    and visit all the unvisited nodes.
                  </li>

                  <li>
                    Also,this algorithm uses heuristic values of the nodes to
                    find the shortest path.
                  </li>
                  <li>
                    Heuristic- It estimates how close that node is to final node
                    and calculates the cost between them. It is also added to
                    the total distance.
                  </li>
                  <li>
                    Bfs uses heuristic values means- f(n) = h(n)<br></br>
                    <b>
                      Here,f(n) - Distance , h(n) - Heuristic value(estimated
                      value)
                    </b>
                  </li>
                </ul>
                In below image, BFS includes Visited and Queue section(FIFO -
                First in the First Out). Visited section is for the nodes which
                are already processed. Queue section is for the nodes which are
                going to be implemented next.
                <img className="bfs-img-1" src={image1} alt="First slide" />
                Here,from Queue section to Visited section numbers are shifted
                in First in First Out(FIFO) process. This process goes until the
                last number.
                <img className="bfs-img-1" src={image8} alt="First slide" />
              </div>
            </CardHeader>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <CardHeader>
              <div className="color-black bfs-child-2">
                <h5>Working of BFS</h5>
                <img className="bfs-img-2" src={image2} alt="First slide" />
                Here, we have two nodes one is start node which is in green and
                other one is end node which is in red color.
                <div className="bfs-img-div-2">
                  <img className="bfs-img-sm" src={image3} alt="First slide" />
                  <h5 className="mar-0">Start Node</h5>

                  <img className="bfs-img-sm" src={image4} alt="First slide" />
                  <h5 className="mar-0">End Node</h5>

                  <img className="bfs-img-sm" src={image5} alt="First slide" />
                  <h5 className="mar-0">Visited Nodes</h5>
                  <img className="bfs-img-sm" src={image6} alt="First slide" />
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
                  <img className="bfs-img-2" src={image7} alt="First slide" />
                  As you can see it is yellow in color.
                  <li>
                    This algorithm will check distance i.e heuristic value(f(n)
                    = h(n)) of node than it will proceed to that node which is
                    smaller.
                    <img className="bfs-img-2" src={image9} alt="First slide" />
                  </li>
                </ul>
              </div>
            </CardHeader>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <CardHeader>
              <div className="bfs-child-3 color-black">
                <ul>
                  <li>
                    After that every node distance(f(n) = h(n)) i.e heuristic
                    value is checked until it cannot find the shortest path for
                    the end node.
                  </li>
                  <img className="bfs-img-3" src={image10} alt="First slide" />
                  Here green dot represents start node(first node)
                  position.(only for understanding purpose)
                  <li>
                    Finally shortest path from Start node to End node is done.
                    Here,nodes which are green in color represents the shortest
                    path. BFS performs "Backtracing",In which every node stores
                    their previous node so that it can backtracked and hence
                    find the shortest path. So basically BFS can find shortest
                    path for every node it visits.
                    <img
                      className="bfs-img-3"
                      src={image11}
                      alt="First slide"
                    />
                    Also,red dot in last node of green path represents End node.
                  </li>
                </ul>
              </div>
            </CardHeader>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <CardHeader>
              <h5 className="align-header">
                This video represents the complete process
              </h5>
              <div className="bfs-video-div">
                <video
                  src={Video}
                  controls={false}
                  className="bfs-video"
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
