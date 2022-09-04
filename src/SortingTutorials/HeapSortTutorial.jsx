import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import image0 from "./../Heap-sort/heap-sort-1inall.png";
import image1 from "./../Heap-sort/heap-sort-1.png";
import image2 from "./../Heap-sort/heap-sort-2.png";
import image3 from "./../Heap-sort/heap-sort-3.png";
import image4 from "./../Heap-sort/heap-sort-4.png";
import image5 from "./../Heap-sort/heap-sort-5.png";
import image6 from "./../Heap-sort/heap-sort-6.png";
import image7 from "./../Heap-sort/heap-sort-7.png";
import image8 from "./../Heap-sort/heap-sort-8.png";
import image9 from "./../Heap-sort/heap-sort-9.png";
import image10 from "./../Heap-sort/heap-sort-10.png";
import image11 from "./../Heap-sort/heap-sort-11.png";
import image12 from "./../Heap-sort/heap-sort-lastans.png";
import image13 from "./../Heap-sort/heap_sort-1inall-1.jpg";
import image14 from "./../Heap-sort/heap_sort-1inall-2.jpg";
import "../StyleSheets/Carousals.css";

export default class HeapSortTutorial extends Component {
  render() {
    return (
      <>
        <div className="carousel-topic">heap Sort</div>
        <Carousel className="main-carousel">
          <Carousel.Item className="carousel-item">
            <CardHeader>
              <div className="color-black">
                <h2> What is Heap Sorting?</h2>
                Heap sort processes the elements by creating the min-heap or
                max-heap using the elements of the given array. Min-heap or
                max-heap represents the ordering of array in which the root
                element represents the minimum or maximum element of the array.
                Every parent node will be greater than their child nodes.
              </div>
            </CardHeader>
            <div className="img-div heap-img-div">
              <img className="heap-img-1" src={image0} alt="First slide" />
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <CardHeader>
              <div className="color-black">
                <h5> Working of Heap sort Algorithm</h5>
                In heap sort, basically, there are two phases involved in the
                sorting of elements. The first step includes the creation of a
                heap by adjusting the elements of the array. After the creation
                of heap, now remove the root element of the heap repeatedly by
                shifting it to the end of the array, and then store the heap
                structure with the remaining elements.
                <h5>Let us take an example</h5>
                <img className="heap-img" src={image1} alt="First slide" />
                <br></br>
                In the above image,the numbers are not in proper order.<br></br>
                <b>According to Heap Sort Algorithm</b>
              </div>

              <ul className="heap-list-1 color-black">
                <li>
                  First, we have to construct a heap from the given array and
                  convert it into max heap.
                  <img className="heap-img" src={image3} />
                </li>
              </ul>
            </CardHeader>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <CardHeader>
              <div className="heap-child">
                <div className="child-list-1 color-black">
                  <ul>
                    <li>
                      Next, we have to delete the root element (89) from the max
                      heap. To delete this node, we have to swap it with the
                      last node, i.e. (11). After deleting the root element, we
                      again have to heapify it to convert it into max heap.
                      <img className="heap-img" src={image4} />
                    </li>
                    <li>
                      In the next step, we have to delete the root element (81)
                      from the max heap. To delete this node, we have to swap it
                      with the last node, i.e. (54). After deleting the root
                      element, we again have to heapify it to convert it into
                      max heap.
                      <img className="heap-img" src={image5} />
                      <br></br>
                    </li>
                  </ul>
                </div>
                <div className="child-list-2 color-black">
                  <ul>
                    <li>
                      In the next step, we have to delete the root element (76)
                      from the max heap again. To delete this node, we have to
                      swap it with the last node, i.e. (9). After deleting the
                      root element, we again have to heapify it to convert it
                      into max heap.
                      <img className="heap-img" src={image6} />
                    </li>
                    <li>
                      In the next step, again we have to delete the root element
                      (54) from the max heap. To delete this node, we have to
                      swap it with the last node, i.e. (14). After deleting the
                      root element, we again have to heapify it to convert it
                      into max heap.
                      <img className="heap-img" src={image7} />
                    </li>
                  </ul>
                </div>
              </div>
            </CardHeader>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <CardHeader>
              <ul className="color-black heap-list-2">
                <li>
                  In the next step, again we have to delete the root element
                  (22) from the max heap. To delete this node, we have to swap
                  it with the last node, i.e. (11). After deleting the root
                  element, we again have to heapify it to convert it into max
                  heap.
                  <img className="heap-img-sm" src={image8} />
                </li>
                <li>
                  In the next step, again we have to delete the root element
                  (14) from the max heap. To delete this node, we have to swap
                  it with the last node, i.e. (9). After deleting the root
                  element, we again have to heapify it to convert it into max
                  heap.
                  <img className="heap-img-sm heap-img-sm-b" src={image9} />
                </li>
                <li>
                  In the next step, again we have to delete the root element
                  (11) from the max heap. To delete this node, we have to swap
                  it with the last node, i.e. (9). After deleting the root
                  element, we again have to heapify it to convert it into max
                  heap.
                  <img className="heap-img-sm" src={image10} />
                </li>
                <li>
                  Now, heap has only one element left. After deleting it, heap
                  will be empty.
                  <img className="heap-img-sm" src={image11} />
                  After completion of sorting, the array elements are -
                  <img className="heap-img-sm" src={image12} />
                  This is how sorting is done in <b>Heap Sort</b>!!
                </li>
              </ul>
            </CardHeader>
          </Carousel.Item>
          {/* <Carousel.Item className="carousel-item">
            <CardHeader>
              <div className="heap-img-flex-div">
              <img className="heap-img-2" src={image13} />
              <img className="heap-img-2" src={image14} />
              </div>
            </CardHeader>
          </Carousel.Item> */}
        </Carousel>
      </>
    );
  }
}
