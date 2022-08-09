import React, { Component } from "react";
import SortingComparatorNav from "./SortingComparatorNav";
import LeftCompare from "./LeftCompare";
import RightComparision from "./RightComparision";
import "./SortingComparator.css";
import * as bubble from "../Sortingalgo/Bubblesort.js";
import * as quick from "../Sortingalgo/Quicksort.js";
import * as merge from "../Sortingalgo/Mergesort.js";
import * as insert from "../Sortingalgo/Insertsort.js";
import * as heap from "../Sortingalgo/Heapsort.js"


let len=30;

export default class SortingComparator extends Component {

  constructor(props) {
    super(props);
    this.state = { array1: [],array2: []  };
  }

  componentDidMount() {
    this.generateArray();
  }

  generateArray() {
    const arr1 = [];
    const arr2 = [];
    while (arr1.length < len) {
      var r = Math.floor(Math.random() * 700) + 1;
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
      bars1[j].style.backgroundColor = "blue";
      bars2[j].style.backgroundColor = "blue";
    }
  }

  BubbleSort2() {
    let elem = document.getElementsByClassName("right-arrayElement");
    let bar = Array.prototype.slice.call(elem)
    bubble.bubblesort(this.state.array2, bar);
  }
  QuickSort2() {
    let bar = document.getElementsByClassName("right-arrayElement");
    quick.quicksort(this.state.array2, bar, (arr) =>
    this.setState({ array2: arr })
    );
  }
  MergeSort2() {
    let bar = document.getElementsByClassName("right-arrayElement");
    merge.mergesort(this.state.array2, bar,(arr) =>{
      this.setState({ array2: arr })
    });
  }
  InsertSort2() {
    let bar = document.getElementsByClassName("right-arrayElement");
    insert.insertSort(this.state.array2, bar,(arr) =>{
      this.setState({ array2: arr })
    });
  }
  HeapSort2() {
    let elem = document.getElementsByClassName("right-arrayElement");
    let bar = Array.prototype.slice.call(elem)
    let array = this.state.array2
    heap.heapSort(array, bar,(arr) =>{
    this.setState({ array2: arr })
  }
    );
  }

  BubbleSort1() {
    let elem = document.getElementsByClassName("left-arrayElement");
    let bar = Array.prototype.slice.call(elem);
    let array = this.state.array1
    bubble.bubblesort(array, bar,(arr) =>{
    this.setState({ array1: arr })
  }
    );
  }
  QuickSort1() {
    let bar = document.getElementsByClassName("left-arrayElement");
    quick.quicksort(this.state.array1, bar,(arr) =>{
      this.setState({ array1: arr })
    });
  }
  MergeSort1() {
    let bar = document.getElementsByClassName("left-arrayElement");
    merge.mergesort(this.state.array1, bar,(arr) =>{
      this.setState({ array1: arr })
    });
  }
  InsertSort1() {
    let bar = document.getElementsByClassName("left-arrayElement");
    insert.insertSort(this.state.array1, bar,(arr) =>{
      this.setState({ array1: arr })
    });
  }
  HeapSort1() {
    let bar = document.getElementsByClassName("left-arrayElement");
    heap.heapSort(this.state.array1, bar,(arr) =>{
      this.setState({ array1: arr })
    });
  }

  render() {
    const {array1,array2}=this.state
    return (
      <>
        <SortingComparatorNav
          onResetArray={() => {
            this.resetArray();
          }}
          onBubbleSort1={() => {
            this.BubbleSort1();
          }}
          onQuickSort1={() => {
            this.QuickSort1();
          }}
          onMergeSort1={() => {
            this.MergeSort1();
          }}
          onInsertSort1={() => {
            this.InsertSort1();
          }}
          onHeapSort1={() => {
            this.HeapSort1();
          }}
          onBubbleSort2={() => {
            this.BubbleSort2();
          }}
          onQuickSort2={() => {
            this.QuickSort2();
          }}
          onMergeSort2={() => {
            this.MergeSort2();
          }}
          onInsertSort2={() => {
            this.InsertSort2();
          }}
          onHeapSort2={() => {
            this.HeapSort2();
          }}
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
                marginLeft: "2px",
                marginRight: "2px",
                width: "7px",
                backgroundColor: "blue",
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
                    marginLeft: "2px",
                    marginRight: "2px",
                    width: "7px",
                    backgroundColor: "blue",
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
