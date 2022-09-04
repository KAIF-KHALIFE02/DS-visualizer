import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import image0 from "./../Merge-sort/merge-sort-1stinall.png";
import image1 from "./../Merge-sort/merge-sort-1.png";
import image2 from "./../Merge-sort/merge-sort-2.png";
import image3 from "./../Merge-sort/merge-sort-3.png";
import image4 from "./../Merge-sort/merge-sort-4.png";
import image5 from "./../Merge-sort/merge-sort-5.png";
import image6 from "./../Merge-sort/merge-sort-6.png";
import image7 from "./../Merge-sort/merge-sort-7.png";
import "../StyleSheets/Carousals.css";

export default class MergeSortTutorial extends Component {
  render() {
    return (
      <>
        <div className="carousel-topic">Merge Sort</div>
        <Carousel className="main-carousel">
          <Carousel.Item className="carousel-item">
            <CardHeader>
              <div className="merge-child-1 color-black">
                <h2> What is Merge Sorting?</h2>
                Merge sort is one of the most efficient sorting algorithms. It
                is based on the divide-and-conquer strategy. Merge sort
                continuously cuts down a list into multiple sublists until each
                has only one item, then merges those sublists into a sorted
                list.
                <div className="merge-img-div">
                  <img className="" src={image0} alt="First slide" />
                </div>
              </div>
            </CardHeader>
          </Carousel.Item>

          {/* second slide */}
          <Carousel.Item className="carousel-item">
            <CardHeader>
              <div className="color-black merge-child-2">
                <h4> Working of Merge Sort</h4>
                <ul>
                  <li>
                    Let the elements of array are -
                    <img className="merge-img" src={image1} alt="First slide" />
                  </li>
                  <li>
                    According to the merge sort, first divide the given array
                    Merge sort keeps dividing the list into equal parts until it
                    As there are eight elements in the given array, so it is
                    divided into two arrays of size 4.
                    <img className="merge-img" src={image2} alt="First slide" />
                  </li>
                  <li>
                    Now, again divide these two arrays into halves. As they are
                    of size 4, so divide them into new arrays of size 2.
                    <img className="merge-img" src={image3} alt="First slide" />
                  </li>
                  <li>
                    Now, again divide these arrays to get the atomic value that
                    cannot be further divided.
                    <img className="merge-img" src={image4} alt="First slide" />
                  </li>
                </ul>
              </div>
            </CardHeader>
          </Carousel.Item>

          {/* 3rd slide */}
          <Carousel.Item className="carousel-item">
            <div className="color-black merge-child-2">
              <ul>
                <li>
                  Now, combine them in the same manner they were divided.
                  <br></br>
                  In combining, first compare the element of each array and then
                  combine them into another array in sorted order.
                  <li>
                    So, first compare 12 and 31, both are in sorted positions.
                    <br></br>
                    Then compare 25 and 8, and in the list of two values, put 8
                    first followed by 25. <br></br>
                    Then compare 32 and 17, sort them and put 17 first followed
                    by 32. After that, compare 40 and 42, and place them
                    sequentially.
                  </li>
                  <img
                    className="merge-img"
                    src={image5}
                    alt="First slide"
                  />
                </li>

                <li>
                  In the next iteration of combining, now compare the arrays
                  with two data values and merge them into an array of found
                  values in sorted order.
                  <img
                    className="merge-img"
                    src={image6}
                    alt="First slide"
                  />
                </li>
                <li>
                  Now, there is a final merging of the arrays. After the final
                  merging of above arrays, the array will look like -
                  <img
                    className="merge-img"
                    src={image7}
                    alt="First slide"
                  />
                  This is how sorting is done in <b>Merge Sort</b>!!
                </li>
              </ul>
            </div>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
