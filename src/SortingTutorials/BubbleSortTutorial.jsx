import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "./../BB-SORT/bb-sortslide1.png";
import image2 from "./../BB-SORT/bb-sort-1inall.png";
import image3 from "./../BB-SORT/bb-sort-3.png";
import image4 from "./../BB-SORT/bb-sort-1.png";
import image5 from "./../BB-SORT/bb-sort-2.png";
import image6 from "./../BB-SORT/bb-sort-4.png";
import image7 from "./../BB-SORT/bb-sort-5.png";
import image8 from "./../BB-SORT/bb-sort-6.png";
import image9 from "./../BB-SORT/bb-sort-7.png";
import CardHeader from "react-bootstrap/CardHeader";
import "../StyleSheets/Carousals.css";

export default class BubbleSortTutorial extends Component {
  render() {
    return (
      <>
        <div className="carousel-topic">Bubble Sort</div>
        <Carousel className="main-carousel">
          <Carousel.Item className="carousel-item">
            <CardHeader>
              <div>
                <h2> What is Bubble Sorting?</h2>
                <p className="color-black">
                  Bubble sort is a basic algorithm for arranging a string of
                  numbers or other elements in the correct order. The method
                  works by examining each set of adjacent elements in the array
                  , from left to right, switching their positions if they are
                  out of order.
                </p>
              </div>
            </CardHeader>
            <div className="img-div">
              <img className="carousel-img" src={image1} alt="First slide" />
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <CardHeader>
              <div>
                <h4> Working of Bubble Sort</h4>
                <div className="bubble-child-1 color-black">
                  <div>
                    In Bubble sort, the elements are sorted from left to right
                    or right to left by swapping the elements in their
                    increasing or decreasing order respectively. Basically
                    bubble sort algorithm performs swapping operation.
                    <b> In swapping operation,</b>
                  </div>
                  <div className="bubble-child-list color-black">
                    <ul>
                      <li>
                        Starting from the first index, compare the first and the
                        second elements.
                      </li>
                      <li>
                        If the first element is greater than the second element,
                        they are swapped.
                      </li>
                      <li>
                        Now, compare the second and the third elements. Swap
                        them if they are not in order.
                      </li>
                      <li>The above process goes on until the last element.</li>
                      <li>
                        <b>
                          {" "}
                          Note:- This process perform only when the array is not
                          in a proper order. Also, the sorted elements are never
                          compared again.
                        </b>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bubble-child-2 color-black">
                  <p className="mar-0">
                    To understand the working of bubble sort algorithm more
                    easily,
                  </p>
                </div>
                <div className="bubble-example-1 color-black">
                  <b>Let us take an example</b>
                  <img src={image4} />
                  In the above image,the numbers are not in proper order.<br/>
                  let's sort then in the next slide
                </div>
              </div>
            </CardHeader>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <CardHeader>
              <div className="bubble-child-3 color-black">
                <div className="bubble-list-2 color-black">
                  <ul>
                    <li>
                      Sorting will start from the initial two elements. Let
                      compare them to check which is greater.
                      <img src={image5} />
                    </li>

                    <li>
                      Here, 32 is greater than 13 (32 &gt; 13), so it is already
                      sorted. Now, compare 32 with 26.
                      <img src={image3} />
                    </li>

                    <li>
                      Here, 26 is smaller than 36. So, swapping is required.
                      After swapping new array will look like
                      <img src={image6} />
                    </li>
                  </ul>
                </div>
                <div className="bubble-list-3 color-black">
                  <ul>
                    <li>Now, compare 32 and 35.</li>
                    <img src={image7} />

                    <li>
                      Here, 35 is greater than 32. So, there is no swapping
                      required as they are already sorted.
                    </li>
                    <li>Now, the comparison will be in between 35 and 10.</li>
                    <img src={image8} />

                    <li>
                      Here, 10 is smaller than 35 that are not sorted. So,
                      swapping is required. Now, we reach at the end of the
                      array. After first pass, the array will be -
                    </li>
                    <img src={image9} />
                  </ul>
                </div>
              The above process goes on until the last element.
              </div>
            </CardHeader>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <CardHeader>
            <h2 className="align-header">Summary!</h2>
              <div className="bubble-img-2">
              <img
                src={image2}
                alt="Four Slide"
              />
              </div>
            </CardHeader>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
