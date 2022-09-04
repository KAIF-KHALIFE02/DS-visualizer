import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import image0 from "./../Insert-sort/insert-sort-0.png";
import image1 from "./../Insert-sort/insert-sort-1.png";
import image2 from "./../Insert-sort/insert-sort-2.png";
import image3 from "./../Insert-sort/insert-sort-3.png";
import image4 from "./../Insert-sort/insert-sort-4.png";
import image5 from "./../Insert-sort/insert-sort-5.png";
import image6 from "./../Insert-sort/insert-sort-6.png";
import image7 from "./../Insert-sort/insert-sort-7.png";
import image8 from "./../Insert-sort/insert-sort-8.png";
import image9 from "./../Insert-sort/insert-sort-9.png";
import image10 from "./../Insert-sort/insert-sort-10.png";
import image11 from "./../Insert-sort/insert-sort-11.png";
import image12 from "./../Insert-sort/insert-sort-12.png";
import image13 from "./../Insert-sort/insert-sort-13.png";
import image14 from "./../Insert-sort/insert-sort-14.png";
import image15 from "./../Insert-sort/insert-sort-15.png";
import image16 from "./../Insert-sort/insert-sort-16.png";
import image17 from "./../Insert-sort/insert-sort-17.png";
import image18 from "./../Insert-sort/insert-sort-1inall.png";
import "../StyleSheets/Carousals.css";

export default class InsertSortTutorial extends Component {
  render() {
    return (
      <>
        <div className="carousel-topic">Insert Sort</div>
        <Carousel className="main-carousel">
          <Carousel.Item className="carousel-item">
            <CardHeader>
              <div className="color-black insert-child-1">
                <h2> What is Insert Sorting?</h2>
                Insertion sort is a sorting algorithm that insert an unsorted
                element at its suitable place in each iteration. For every next
                element we will search for a correct position in the sorted part
                of the array and will "Insert it in that array".
              </div>
              <div className="insert-img-div">
                <img className="" src={image0} alt="First slide" />
              </div>
            </CardHeader>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <CardHeader>
              <div className="color-black">
                <h4> Working of Insert Sort</h4>
                Let us take an example of unsorted array -
                <ul className="insert-list">
                  <li>
                    <img className="insert-img " src={image1} alt="Third slide" />
                    Initially, the first two elements are compared in insertion
                    sort.
                  </li>
                  <li>
                    <img className="insert-img" src={image2} alt="Third slide" />
                    Here, 31 is greater than 12. That means both elements are
                    already in ascending order. So, for now, 12 is stored in a
                    sorted sub-array.
                  </li>

                  <li>
                    <img className="insert-img " src={image3} alt="Third slide" />
                    Now, move to the next two elements and compare them with the
                    already sorted elements of the array and insert at the
                    correct position
                  </li>

                  <li>
                    <img className="insert-img" src={image4} alt="Third slide" />
                    Here, 25 is smaller than 31. So, 31 is not at correct
                    position. Now, swap 31 with 25. Along with swapping,
                    insertion sort will also check it with all elements in the
                    sorted array. For now, the sorted array has only one
                    element, i.e. 12. So, 25 is greater than 12. Hence, the
                    sorted array remains sorted after swapping.
                    <img className="d-block " src={image5} alt="Third slide" />
                  </li>
                </ul>
              </div>
            </CardHeader>
          </Carousel.Item>

          {/* 3rd slide */}
          <Carousel.Item className="carousel-item">
            <ul className="insert-list color-black">
              <li>
                Now, two elements in the sorted array are 12 and 25. Move
                forward to the next elements that are 31 and 8.
                <img className="insert-img " src={image6} alt="Third slide" />
              </li>
              <li>
                Both 31 and 8 are not sorted. So, swap them.
                <img className="insert-img" src={image7} alt="Third slide" />
              </li>
              <li>
                After swapping, elements 25 and 8 are unsorted.
                <img className="insert-img" src={image8} alt="Third slide" />
              </li>
              <li>
                So, swap them.
                <img className="insert-img" src={image9} alt="Third slide" />
              </li>
              <li>
                Now, elements 12 and 8 are unsorted.
                <img className="insert-img" src={image10} alt="Third slide" />
              </li>
              <li>
                So, swap them too.
                <img className="insert-img" src={image11} alt="Third slide" />
              </li>
             
            </ul>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <CardHeader>
            <ul className="insert-list color-black">
              <li>
                Now, the sorted array has three items that are 8, 12 and 25.
                Move to the next items that are 31 and 32.
                <img className="insert-img" src={image12} alt="Third slide" />
              </li>
                <li>
                  Hence, they are already sorted. Now, the sorted array includes
                  8, 12, 25 and 31.
                  <img className="insert-img" src={image13} alt="Third slide" />
                </li>
                <li>
                  Move to the next elements that are 32 and 17.
                  <img className="insert-img" src={image14} alt="Third slide" />
                </li>
                <li>
                  17 is smaller than 32. So, swap them.
                  <img className="insert-img" src={image15} alt="Third slide" />
                </li>
                <li>
                  Swapping makes 31 and 17 unsorted. So, swap them too.
                  <img className="insert-img" src={image16} alt="Third slide" />
                </li>
                <li>
                  Now, swapping makes 25 and 17 unsorted. So, perform swapping
                  again.
                  <img className="insert-img" src={image17} alt="Third slide" />
                  Now, the array is completely sorted.
                </li>
              </ul>
            </CardHeader>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <CardHeader>
              <h2 className="align-header">Summary!</h2>
              <div className="insert-img-div">
              <img className="" src={image18} alt="Third slide" />
              </div>
            </CardHeader>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
