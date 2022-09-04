import React, { Component } from "react";
import SortingComparatorNav from "./SortingComparatorNav";
import $ from "jquery";
import "./SortingComparator.css";
import * as bubble from "../Sortingalgo/Bubblesort.js";
import * as quick from "../Sortingalgo/Quicksort.js";
import * as merge from "../Sortingalgo/Mergesort.js";
import * as insert from "../Sortingalgo/Insertsort.js";
import * as heap from "../Sortingalgo/Heapsort.js";

let len = 30;

export default class SortingComparator extends Component {
  constructor(props) {
    super(props);
    this.state = { array1: [], array2: [],isRunning1: false ,isRunning2: false,animationSpeed: 50, };
  }

  componentDidMount() {
    this.generateArray();
  }

  generateArray() {
    const arr1 = [];
    const arr2 = [];
    while (arr1.length < len) {
      var r = Math.floor(Math.random() * 600) + 1;
      if (arr1.indexOf(r) === -1) arr1.push(r);
      if (arr2.indexOf(r) === -1) arr2.push(r);
    }
    this.setState({
      array1: arr1,
      array2: arr2,
    });
  }

  resetArray() {
    this.generateArray();
    let bars1 = document.getElementsByClassName("left-arrayElement");
    let bars2 = document.getElementsByClassName("right-arrayElement");
    for (var j = 0; j < this.state.array1.length; j++) {
      bars1[j].classList.remove('compare');
      bars2[j].classList.remove('compare');
      bars1[j].classList.remove('isgreater');
      bars2[j].classList.remove('isgreater');
      bars1[j].classList.remove('sorted');
      bars2[j].classList.remove('sorted');
    }
  }

  async BubbleSort2() {
    this.setState({isRunning2: true})
    let elem = document.getElementsByClassName("right-arrayElement");
    let bar = Array.prototype.slice.call(elem);
    await bubble.bubblesort(this.state.array2, bar,(arr) =>{
    this.setState({ array2: arr })},
    this.state.animationSpeed
    );
    this.setState({isRunning2: false})
  }
  async QuickSort2() {
    this.setState({isRunning2: true})
    let bar = document.getElementsByClassName("right-arrayElement");
    await quick.quicksort(this.state.array2, bar, (arr) =>{
      this.setState({ array2: arr })
    },this.state.animationSpeed);
      this.setState({isRunning2: false})
  }
  async MergeSort2() {
    this.setState({isRunning2: true})
    let bar = document.getElementsByClassName("right-arrayElement");
    await merge.mergesort(this.state.array2, bar, (arr) => {
      this.setState({ array2: arr });
    },this.state.animationSpeed);
    this.setState({isRunning2: false})
  }
  async InsertSort2() {
    this.setState({isRunning2: true})
    let bar = document.getElementsByClassName("right-arrayElement");
    await insert.insertSort(this.state.array2, bar, (arr) => {
      this.setState({ array2: arr });
    },this.state.animationSpeed);
    this.setState({isRunning2: false})
  }
  async HeapSort2() {
    this.setState({isRunning2: true})
    let elem = document.getElementsByClassName("right-arrayElement");
    let bar = Array.prototype.slice.call(elem);
    let array = this.state.array2;
    await heap.heapSort(array, bar, (arr) => {
      this.setState({ array2: arr });
    },this.state.animationSpeed);
    this.setState({isRunning2: false})
  }

  async BubbleSort1() {
    this.setState({isRunning1: true})
    let elem = document.getElementsByClassName("left-arrayElement");
    let bar = Array.prototype.slice.call(elem);
    let array = this.state.array1;
    await bubble.bubblesort(array, bar, (arr) => {
      this.setState({ array1: arr });
    },this.state.animationSpeed);
    this.setState({isRunning1: false})
  }
  async QuickSort1() {
    this.setState({isRunning1: true})
    let bar = document.getElementsByClassName("left-arrayElement");
    await quick.quicksort(this.state.array1, bar, (arr) => {
      this.setState({ array1: arr });
    },this.state.animationSpeed);
    this.setState({isRunning1: false})
  }
  async MergeSort1() {
    this.setState({isRunning1: true})
    let bar = document.getElementsByClassName("left-arrayElement");
    await merge.mergesort(this.state.array1, bar, (arr) => {
      this.setState({ array1: arr });
    },this.state.animationSpeed);
    this.setState({isRunning1: false})
  }
  async InsertSort1() {
    this.setState({isRunning1: true})
    let bar = document.getElementsByClassName("left-arrayElement");
    await insert.insertSort(this.state.array1, bar, (arr) => {
      this.setState({ array1: arr });
    },this.state.animationSpeed);
    this.setState({isRunning1: false})
  }
  async HeapSort1() {
    this.setState({isRunning1: true})
    let bar = document.getElementsByClassName("left-arrayElement");
    await heap.heapSort(this.state.array1, bar, (arr) => {
      this.setState({ array1: arr });
    },this.state.animationSpeed);
    this.setState({isRunning1: false})
  }

  changeAnimationSpeed(value) {
    if (value === 2) {
      this.setState({ animationSpeed: 1 });
    }
    if (value === 1) {
      this.setState({ animationSpeed: 10 });
    }
    if (value === 0) {
      this.setState({ animationSpeed: 50 });
    }
  }

  render() {
    const { array1, array2,isRunning1,isRunning2 } = this.state;

    const numWidth = (Math.floor($(document).width()/2) / (array1.length * 2));
    const width = `${numWidth}px`;
    const numMargin = array1.length < 5 ?
      12 : array1.length < 8 ?
        10 : array1.length < 11 ?
          8 : array1.length < 20 ?
            6 : array1.length < 50 ?
              4 : array1.length < 100 ?
                3 : array1.length < 130 ?
                  2.5 : 2;
    const margin = `${numMargin}px`;

    return (
      <>
        <SortingComparatorNav
          onResetArray={() => {
            this.resetArray();
          }}
          BubbleSort1={() => {
            this.BubbleSort1();
          }}
          QuickSort1={() => {
            this.QuickSort1();
          }}
          MergeSort1={() => {
            this.MergeSort1();
          }}
          InsertSort1={() => {
            this.InsertSort1();
          }}
          HeapSort1={() => {
            this.HeapSort1();
          }}
          BubbleSort2={() => {
            this.BubbleSort2();
          }}
          QuickSort2={() => {
            this.QuickSort2();
          }}
          MergeSort2={() => {
            this.MergeSort2();
          }}
          InsertSort2={() => {
            this.InsertSort2();
          }}
          HeapSort2={() => {
            this.HeapSort2();
          }}
          isrunning = {isRunning1||isRunning2}
          handleSpeedChange={(val) => this.changeAnimationSpeed(val)}
        />
        <div className="main-compare">
          <div className="left-compare">
            <div id="left-bodyContainer">
              {array1.map((value, idx) => (
                <div
                  className="left-arrayElement"
                  key={idx}
                  style={{
                    height: `${value}px`,
                    marginLeft: margin,
                    marginRight: margin,
                    width: width,
                    fontSize: "5px",
                  }}
                ></div>
              ))}
            </div>
          </div>
          <div className="right-compare">
            <div id="right-bodyContainer">
              {array2.map((value, idx) => (
                <div
                  className="right-arrayElement"
                  key={idx}
                  style={{
                    height: `${value}px`,
                    marginLeft: margin,
                    marginRight: margin,
                    width: width,
                    fontSize: "5px",
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
