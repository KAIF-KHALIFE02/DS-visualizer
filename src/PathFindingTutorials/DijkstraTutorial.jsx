import CardHeader from "react-bootstrap/esm/CardHeader";
import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import image1 from "./../Dijkstra/dijkstra.png";
import image2 from "./../Dijkstra/Dijkstra2.png";
import image3 from "./../Dijkstra/Dijkstra3.png";
import image4 from "./../Dijkstra/Dijkstra4.png";
import image5 from "./../Dijkstra/Dijkstra5.png";
import image6 from "./../Dijkstra/Dijkstra6.png";
import image7 from "./../ColorsPic/Green.png";
import image8 from "./../ColorsPic/red.png";
import image9 from "./../ColorsPic/yellow.png";
import Video from "./../Dijkstra/DijkstraWorking.mp4";
import "../StyleSheets/Carousals.css";

export default class DijkstraTutorial extends Component {
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
    const videoSrc = Video;
    return (
      <>
        <div className="carousel-topic">Dijkstra's Algorithm</div>
        <Carousel className="main-carousel">
          <Carousel.Item className="carousel-item">
            <CardHeader>
              <div className="dijkstra-child-1 color-black">
                <h2 id="h2">What is Dijkstra Algorithm</h2>
                Dijkstra's algorithm allows us to find the shortest path between
                any two vertices of a graph. Where we need to find a shortest
                path from a given source to all other vertices. Also ,this
                algorithm uses "weights" of the edges to find the path that
                minimizes the total distance (weight) between the source node
                and all other nodes. Sometimes, ∞ can also be allowed as a
                weight, which in optimization problems generally means we must
                (or may not) use that edge.
                <div className="dijkstra-img-div-1">
                  <img
                    className="dijkstra-img-1"
                    src={image1}
                    alt="First slide"
                  />
                </div>
              </div>
            </CardHeader>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <CardHeader>
              <div className="dijkstra-child-2 color-black">
                <h2 id="h2">Working of Dijkstra algorithm</h2>
                <img
                  className="dijkstra-img-2"
                  src={image2}
                  alt="First slide"
                />
                Here, we have two nodes one is start node which is in green and
                other one is end node which is in red color.<br></br>
                <div className="dijkstra-img-div-2">
                  <img
                    className="dijkstra-img-sm"
                    src={image7}
                    alt="First slide"
                  />
                  <h5 className="mar-0">Start Node</h5>

                  <img
                    className="dijkstra-img-sm"
                    src={image8}
                    alt="First slide"
                  />
                  <h5 className="mar-0">End Node</h5>

                  <img
                    className="dijkstra-img-sm"
                    src={image9}
                    alt="First slide"
                  />
                  <h5 className="mar-0">Visited Nodes</h5>
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
                      className="dijkstra-img-2"
                      src={image4}
                      alt="First slide"
                    />
                    As you can see it is yellow in color.
                  </li>
                  <li>
                    First ,from start node to it's closest(neighbour node) the
                    distance is incremented by one(1).
                    <img
                      className="dijkstra-img-2"
                      src={image3}
                      alt="First slide"
                    />
                  </li>
                </ul>
              </div>
            </CardHeader>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <CardHeader>
              <div className="dijkstra-child-3 color-black">
                <ul>
                  <li>
                    After that every node distance(neigbour to neigbour) is than
                    incremented by one(1).
                    <img
                      className="dijkstra-img-3"
                      src={image5}
                      alt="First slide"
                    />
                    Here green dot represents start node(first node)
                    position.(only for understanding purpose) <br></br>
                    <b>
                      Note - distance of every node = previous node distance + 1
                    </b>
                  </li>
                  <li>
                    Finally shortest path from Start node to End node is done.
                    <br></br>
                    Here,nodes which are green in color represents the shortest
                    path.<br></br>
                    Dijkstra performs "Backtracing",In which every node stores
                    their previous node so that it can backtracked and hence
                    find the shortest path.<br></br>
                    So basically Dijkstra can find shortest path for every node
                    it visits.<br></br>
                    <img
                      className="dijkstra-img-4"
                      src={image6}
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
              <h5 className="align-header">This video represents the complete process</h5>
              <div className="dijkstra-video-div">
                <video
                  src={videoSrc}
                  controls={false}
                  className="dijkstra-video"
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
