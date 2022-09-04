import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import image1 from "./../Quick-sort/quick-sort-3.png";
import image2 from "./../Quick-sort/quick-sort-2.png";
import image3 from "./../Quick-sort/quick-sort-3.png";
import image4 from "./../Quick-sort/quick-sort-4.png";
import image5 from "./../Quick-sort/quick-sort-5.png";
import image6 from "./../Quick-sort/quick-sort-6.png";
import image7 from "./../Quick-sort/quick-sort-7.png";
import image8 from "./../Quick-sort/quick-sort-8.png";
import image9 from "./../Quick-sort/quick-sort-9.png";
import image10 from "./../Quick-sort/quick-sort-10.png";
import image11 from "./../Quick-sort/quick-sort-11.png";
import image12 from "./../Quick-sort/quick-sort-12.png";
import image13 from "./../Quick-sort/quick-sort-13.png";
import "../StyleSheets/Carousals.css";

export default class QuickSortTutorial extends Component {
  render() {
    return (
      <>
        <div className="carousel-topic">Quick Sort</div>
        <Carousel className="main-carousel">
          <Carousel.Item className="carousel-item">
            <CardHeader>
              <div>
                <h2> What is Quick Sorting?</h2>
                <div className="color-black">
                  Quicksort picks an element as pivot, and then it partitions
                  the given array around the picked pivot element. In quick
                  sort, a large array is divided into two arrays in which one
                  holds values that are smaller than the specified value
                  (Pivot), and another array holds the values that are greater
                  than the pivot.
                </div>
              </div>
              <div className="img-div">
                <img className="" src={image1} alt="First slide" />
              </div>
            </CardHeader>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <CardHeader>
              <div className="color-black">
                <h4> Working of Quick Sort Algorithm</h4>
                <div>
                  In Quick sort, the elements are sorted from left to right or
                  right to left by swapping the elements in their increasing or
                  decreasing order respectively. Basically bubble sort algorithm
                  performs swapping operation.
                  <b> In swapping operation,</b>
                </div>
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
                    Now, compare the second and the third elements. Swap them if
                    they are not in order.
                  </li>
                  <li>The above process goes on until the last element.</li>
                  <li>
                    <b>
                      {" "}
                      Note:- This process perform only when the array is not in
                      a proper order. Also, the sorted elements are never
                      compared again.
                    </b>
                  </li>
                </ul>
                To understand the working of insert sort algorithm more easily,
                <br></br>
                Let us take an example -
                <div className="quick-img-div">
                  <img className="quick-img" src={image2} alt="First slide" />
                </div>
                In the above image,the numbers are not in proper order.
              </div>
              <ul className="color-black">
                <li>
                  In the given array, we consider the leftmost element as pivot.
                  So, in this case, a[left] = 24, a[right] = 27 and a[pivot] =
                  24. Since, pivot is at left, so algorithm starts from right
                  and move towards left.
                  <div className="quick-img-div">
                    <img className="quick-img" src={image3} alt="First slide" />
                  </div>
                </li>
              </ul>
            </CardHeader>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <CardHeader>
              <ul className="color-black quick-list">
                <li>
                  Now, a[pivot] &lt; a[right], so algorithm moves forward one
                  position towards left, i.e. -
                  <img className="quick-img" src={image4} alt="First slide" />
                </li>
                <li>
                  Now, a[left] = 24, a[right] = 19, and a[pivot] = 24. Because,
                  a[pivot] &gt; a[right], so, algorithm will swap a[pivot] with
                  a[right], and pivot moves to right, as -
                  <img className="quick-img" src={image5} alt="First slide" />
                </li>

                <br></br>
                <li>
                  Now, a[left] = 19, a[right] = 24, and a[pivot] = 24. Since,
                  pivot is at right, so algorithm starts from left and moves to
                  right. As a[pivot] &gt; a[left], so algorithm moves one
                  position to right as -
                </li>
                <img className="quick-img" src={image6} alt="First slide" />
              </ul>
            </CardHeader>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <CardHeader>
              <ul className="color-black quick-list">
                <li>
                  Now, a[left] = 9, a[right] = 24, and a[pivot] = 24. As
                  a[pivot]&gt;a[left], so algorithm moves one position to right
                  as
                </li>
                <img className="quick-img" src={image7} alt="First slide" />
                <br></br>
                <li>
                  Now, a[left] = 29, a[right] = 24, and a[pivot] = 24. As
                  a[pivot] &lt; a[left], so, swap a[pivot] and a[left], now
                  pivot is at left, i.e. -<br></br>
                </li>
                <img className="quick-img" src={image8} alt="First slide" />
                <li>
                  Since, pivot is at left, so algorithm starts from right, and
                  move to left. Now, a[left] = 24, a[right] = 29, and a[pivot] =
                  24. As a[pivot] &lt; a[right], so algorithm moves one position
                  to left, as -<br></br>
                </li>
                <img className="quick-img" src={image9} alt="First slide" />
              </ul>
            </CardHeader>
          </Carousel.Item>

          {/* 5th slide */}
          <Carousel.Item className="carousel-item">
            <CardHeader>
              <ul className="color-black quick-list">
                <li>
                  Now, a[pivot] = 24, a[left] = 24, and a[right] = 14. As
                  a[pivot] &gt; a[right], so, swap a[pivot] and a[right], now
                  pivot is at right, i.e. -<br></br>
                </li>
                <img className="quick-img" src={image10} alt="First slide" />
                <li>
                  Now, a[pivot] = 24, a[left] = 14, and a[right] = 24. Pivot is
                  at right, so the algorithm starts from left and move to right.
                  <br></br>
                </li>
                <img className="quick-img" src={image11} alt="First slide" />

                <li>
                  Now, a[pivot] = 24, a[left] = 24, and a[right] = 24. So,
                  pivot, left and right are pointing the same element. It
                  represents the termination of procedure. Element 24, which is
                  the pivot element is placed at its exact position.
                </li>
                <img className="quick-img" src={image12} alt="First slide" />
                <li>
                  Now, in a similar manner, quick sort algorithm is separately
                  applied to the left and right sub-arrays. After sorting gets
                  done, the array will be -<br></br>
                </li>
                <img className="quick-img" src={image13} alt="First slide" />
                <p className="color-black">
                  That's how the sorting is done in <b>Quick Sort</b>!!!
                </p>
              </ul>
            </CardHeader>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
