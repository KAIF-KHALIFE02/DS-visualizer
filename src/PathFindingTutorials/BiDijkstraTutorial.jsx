import React, { Component } from 'react'
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Carousel } from "react-bootstrap";
import image1 from "./../Dijkstra/dijkstra.png";
import image2 from "./../BiDijkstra/Bidijkstra1.png";
import image3 from "./../BiDijkstra/Bidijkstra2.png";
import image4 from "./../BiDijkstra/Bidijkstra3.png";
import image5 from "./../BiDijkstra/Bidijkstra4.png";
import image6 from "./../BiDijkstra/Bidijkstra5.png";
import image7 from "./../ColorsPic/Green.png";
import image8 from "./../ColorsPic/red.png";
import image9 from "./../ColorsPic/yellow.png";
import Video from "./../BiDijkstra/BiDijkstraWorking.mp4";
import "../StyleSheets/Carousals.css";

export default class BiDijkstraTutorial extends Component {
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
        <div className="carousel-topic">Bi-Dijkstra's Algorithm</div>
        <Carousel className="main-carousel">
          <Carousel.Item className="carousel-item">
            <CardHeader>
              <div className='bi-child-1 color-black'>
                <h4>What is Bi-Dijkstra Algorithm</h4>
                <ul>
                  <li>
                    Bi-Dijkstra's algorithm allows us to find the shortest path
                    between any two nodes of a graph. Where we need to find a
                    shortest path from a given source to all other nodes.
                  </li>
                  <li>
                    <b>
                      Note - In this algorithm, process starts from start node
                      as well as from end node. So Basically Dijkstra algorithm
                      is started from start node(initial node) as well end node.
                    </b>
                  </li>
                  <li>
                    Also ,this algorithm uses "weights" of the edges to find the
                    path that minimizes the total distance (weight) between the
                    source node and all other nodes.
                  </li>
                  <li>
                    Sometimes, ∞ can also be allowed as a weight, which in
                    optimization problems generally means we must (or may not)
                    use that edge.
                  </li>
                </ul>
                <div className="bi-img-div-1">
                <img className="bi-img-1" src={image1} alt="First slide" />
                </div>
              </div>
            </CardHeader>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <CardHeader>
              <div className='color-black bi-child-2'>
                <h4>Working of Bi-Dijkstra algorithm</h4>
                <img cclassName="bi-img-2" src={image2} alt="First slide" />
                Here, we have two nodes one is start node which is in green and
                other one is end node which is in red color.<br></br>
                <div className="bi-img-div-2">
                  <img src={image7} alt="First slide" />
                  <h5 className="mar-0">Start Node</h5>

                  <img src={image8} alt="First slide" />
                  <h5 className="mar-0">End Node</h5>

                  <img src={image9} alt="First slide" />
                  <h5 className="mar-0">Visited Nodes</h5>
                </div>
                <ul>
                  <li>
                    Let us Consider start node distance(weight) as zero(0) and
                    as well as end node distance(weight) as zero(0) for rest of
                    the nodes as inifinite(∞).
                  </li>
                  <li>
                    Here we will pick start node and end node as a initial node
                    as it has a value of zero(0) and it is minimum from other
                    nodes.
                    <img
                      className="bi-img-2"
                      src={image3}
                      alt="First slide"
                    />
                    As you can see they are yellow in color.
                  </li>
                  <li>
                    First ,from start node to it's closest(neighbour node) the
                    distance is incremented by one(1), Than from end node to
                    it's closest(neighbour node) the distance is incremented by
                    one(1) at a same time.
                    <img
                      className="bi-img-2"
                      src={image4}
                      alt="First slide"
                    />
                  </li>
                </ul>
              </div>
            </CardHeader>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <CardHeader>
              <div className="bi-child-3 color-black">
              <ul>
                <li>
                  After that every node distance(neigbour to neigbour) is than
                  incremented by one(1) on both start and end node.
                  <img
                    className="bi-img-3"
                    src={image5}
                    alt="First slide"
                  />
                  Here, green dot represents start node(first node) and red dot
                  represents end node positions.(only for understanding purpose)
                  <b>
                    Note - distance of every node = previous node distance + 1
                  </b>
                </li>
                <li>
                  Finally shortest path from Start node to End node is done.
                  Here,nodes which are green in color represents the shortest
                  path.
                  In below image Bi-Dijkstra performs "Backtracing" from both
                  side and they meet at some point. That point and path where
                  they came from becomes the shortest path.
                  In "Backtracing" every node stores their previous node so that
                  it can backtracked and hence find the shortest path. So
                  basically Bi-Dijkstra can find shortest path for every node it
                  visits.
                  <img
                    className="bi-img-3"
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
              <h5  className="align-header"> This video represents the complete process</h5>
              <div className="bi-video-div">
              <video
                src={Video}
                controls={false}
                className="bi-video"
                autoPlay={true}
                loop={true}
              />
              </div>
            </CardHeader>
          </Carousel.Item>
        </Carousel>
      </>
    )
  }
}
