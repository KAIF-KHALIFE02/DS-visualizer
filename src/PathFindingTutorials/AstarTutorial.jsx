import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";
import image0 from "./../Astar/Astar0.png";
import image1 from "./../Astar/Astar1.png";
import image2 from "./../Astar/Astar2.png";
import image3 from "./../Astar/Astar4.png";
import image4 from "./../ColorsPic/Green.png";
import image5 from "./../ColorsPic/red.png";
import image6 from "./../ColorsPic/yellow.png";
import image7 from "./../Astar/Astar3.png";
import image8 from "./../Astar/Astar5.png";
import image9 from "./../Astar/Astar6.png";
import image10 from "./../Astar/Astar7.png";
import image11 from "./../ColorsPic/Blue.png";
import image12 from "./../Astar/Astar8.png";
import Video from "./../Astar/AstarWorking.mp4";
import "../StyleSheets/Carousals.css";

export default class AstarTutorial extends Component {
  render() {
    const videoSrc = Video;

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
        <div className="carousel-topic">A Star Algorithm</div>
        <Carousel className="main-carousel">
          <Carousel.Item className="carousel-item">
            <CardHeader>
              <div className="color-black astar-child-1">
                <h2 id="h2">What is Astar Algorithm?</h2>
                <ul>
                  <li>
                    Astar algorithm is a searching algorithm that searches for
                    the shortest path between the initial and the final state.
                  </li>
                  <li>
                    This algorithm relies on closed set and open set to find a
                    path.
                  </li>
                  <li>
                    The "Open set" is the set of nodes that contains all the
                    nodes we might be interested in looking at next.
                  </li>
                  <li>
                    The "Closed set" is the set of nodes we've already
                    considered.
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
                    Formula for calculating the total distance - f(n) = g(n) +
                    h(n)<br></br>
                    <b>
                      Here,f(n) - Total distance ,g(n) - distance between
                      initial node and node (n), h(n) - Heuristic
                      value(estimated value)
                    </b>
                  </li>
                  <img className="astar-img-1" src={image0} alt="First slide" />
                  Here, S is the start node and G is the goal node(end node),
                  and numbers which are underlined with blue are the heuristic
                  value.
                  <li>Some Steps are explained to understand more easily</li>
                </ul>
                <div className="astar-child-2">
                  <img
                    className="astar-img-2"
                    src={image12}
                    alt="First slide"
                  />
                  First total distance is calculated between initial node and
                  their neighbour nodes.
                  <div class="vr"></div>
                  <img className="astar-img-2" src={image1} alt="First slide" />
                  After that between node A and Node D ,node A is choosen
                  because its total distance is less than node D This process is
                  repeated until the last node
                </div>
              </div>
            </CardHeader>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <CardHeader>
              <div className="astar-child-3 color-black">
                <h2 id="h2">Working of the Astar algorithm </h2>
                <img className="astar-img-3" src={image3} alt="First slide" />
                Here, we have two nodes one is start node which is in green and
                other one is end node which is in red color.<br></br>
                <div className="astar-img-div-1">
                  <img
                    className="astar-img-sm"
                    src={image4}
                    alt="First slide"
                  />
                  <h5 className="mar-0">Start Node</h5>

                  <img
                    className="astar-img-sm"
                    src={image5}
                    alt="First slide"
                  />
                  <h5 className="mar-0">End Node</h5>

                  <img
                    className="astar-img-sm"
                    src={image6}
                    alt="First slide"
                  />
                  <h5 className="mar-0">Visited Nodes</h5>
                  <img
                    className="astar-img-sm"
                    src={image11}
                    alt="First slide"
                  />
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
                    <img
                      className="astar-img-3"
                      src={image7}
                      alt="First slide"
                    />
                    As you can see it is yellow in color.
                  </li>
                  <li>
                    This algorithm will check total distance(f(n) = g(n) + h(n))
                    of node than it will proceed to that node which is smaller.
                    <img
                      className="astar-img-3"
                      src={image8}
                      alt="First slide"
                    />
                  </li>
                </ul>
              </div>
            </CardHeader>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <CardHeader>
              <div className="astar-child-4">
                <ul className="color-black">
                  <li>
                    After that every node total distance(f(n) = g(n) + h(n)) is
                    checked until it cannot find the shortest path for the end
                    node.
                  </li>
                  <img className="astar-img-4" src={image9} alt="First slide" />
                  Here green dot represents start node(first node)
                  position.(only for understanding purpose)
                  <li>
                    Finally shortest path from Start node to End node is done.
                    <br></br>
                    Here,nodes which are green in color represents the shortest
                    path.<br></br>
                    Astar performs "Backtracing",In which every node stores
                    their previous node so that it can backtracked and hence
                    find the shortest path.<br></br>
                    So basically Astar can find shortest path for every node it
                    visits.<br></br>
                    <img
                      className="astar-img-4"
                      src={image10}
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
                {" "}
                This video represents the complete process
              </h5>
              <div className="astar-video-div">
                <video
                  src={videoSrc}
                  controls={false}
                  className="astar-video"
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
