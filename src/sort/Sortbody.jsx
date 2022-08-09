import React, { Component } from "react";
import SortHeader from "./SortHeader";
import "./Sortbody.css";
import $ from "jquery";
import * as bubble from "../Sortingalgo/Bubblesort.js";
import * as quick from "../Sortingalgo/Quicksort.js";
import * as merge from "../Sortingalgo/Mergesort.js";
import * as insert from "../Sortingalgo/Insertsort.js";
import * as heap from "../Sortingalgo/Heapsort.js";


export default class Sortbody extends Component {
  constructor(props) {
    super(props);
    this.state = { array: [],len:40, Pause: false,tutorial: false,animationSpeed:50 };
    this.changeArraySize = this.changeArraySize.bind(this)
  }

  componentDidMount() {
    this.generateArray();
  }

  generateArray() {
    const arr = [];
    while (arr.length < this.state.len) {
      var r = Math.floor(Math.random() * 700) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    this.setState({
      array: arr,
    });
  }

  resetArray() {
    this.generateArray();
    let bars = document.getElementsByClassName("arrayElement");
    let barsBack = document.getElementsByClassName("eachBarDiv");
    for (var j = 0; j < this.state.array.length; j++) {
      bars[j].style.backgroundColor = "blue";
      barsBack[j].style.backgroundColor = "";
    }
  }

  TestSort() {
    let jsSortedArray = [];
    let sortedArray = [];
    let testArray = this.state.array;
    // let bar = document.getElementsByClassName('arrayElement')
    // jsSortedArray = testArray.slice().sort((a,b)=>a-b);
    // sortedArray = bubble.bubblesort(testArray);
    // sortedArray = quick.quicksort(testArray);
    // sortedArray = merge.mergesort(testArray);
    // sortedArray = insert.insertSort(testArray);
    // sortedArray = heap.heapSort(testArray);
    // console.log(this.arraysAreEqual(jsSortedArray, sortedArray));
    // console.log(bar[1].style.height)
  }

  BubbleSort() {
    // console.log(this.state.animationSpeed)
    let bar = document.getElementsByClassName("arrayElement");
    let mySortedArray = bubble.bubblesort(this.state.array, bar, (arr) => {
      this.setState({ array: arr });
    },this.state.animationSpeed);
  }
  QuickSort() {
    let bar = document.getElementsByClassName("arrayElement");
    let mySortedArray = quick.quicksort(this.state.array, bar, (arr) => {
      this.setState({ array: arr });
    },this.state.animationSpeed);
  }
  MergeSort() {
    let bar = document.getElementsByClassName("arrayElement");
    let mySortedArray = merge.mergesort(this.state.array, bar, (arr) => {
      this.setState({ array: arr });
    },this.state.animationSpeed);
  }
  InsertSort() {
    let bar = document.getElementsByClassName("arrayElement");
    let mySortedArray = insert.insertSort(this.state.array, bar, (arr) => {
      this.setState({ array: arr });
    },this.state.animationSpeed);
  }
  HeapSort() {
    let bar = document.getElementsByClassName("arrayElement");
    let mySortedArray = heap.heapSort(this.state.array, bar, (arr) => {
      this.setState({ array: arr });
    },this.state.animationSpeed);
  }

  arraysAreEqual(arrayone, arraytwo) {
    if (arrayone.length !== arraytwo.length) return false;
    for (let i = 0; i < arrayone.length; i++) {
      if (arrayone[i] !== arraytwo[i]) return false;
    }
    return true;
  }

  isTutorial(){
    let checked = String(document.getElementById('tutSwitch').checked);
    console.log(checked)
    this.setState({tutorial: checked})
    if(checked === 'true'){
      this.setState({animationSpeed: 500})
      console.log("500")
    }
    else{
      console.log("1")
      this.setState({animationSpeed: 1})
    }
  }

  changeArraySize(value){
    this.setState({len: value})
    this.generateArray()
  }
  changeAnimationSpeed(value){
    if(value === 2){
      this.setState({animationSpeed:1})
    }
    if(value === 1){
      this.setState({animationSpeed:10})
    }
    if(value === 0){
      this.setState({animationSpeed:50})
    }
  }

  // Pause(){
  //   if(this.state.Pause === true) return;
  //   this.setState({Pause: true})
  // }
  // Play(){
  //   if(this.state.Pause === false) return;
  //   this.setState({Pause: false})
  // }

  render() {
    const { array } = this.state;
    const {
      currentBubbleTwo,
      currentQuickTwo,
      pivot,
      currentSwappers,
      currentHeapThree,
      currentSorted,
      currentMergeX,
    } = this.props;

    const numWidth = Math.floor($(document).width() / (array.length * 3));
    const width = `${numWidth}px`;
    // const numMargin = array.length < 5 ?
    //   10 : array.length < 8 ?
    //     8 : array.length < 11 ?
    //       6 : array.length < 20 ?
    //         4 : array.length < 50 ?
    //           3.5 : array.length < 100 ?
    //             3 : array.length < 130 ?
    //               2.5 : 2;
    // const margin = `${numMargin}px`;
    const margin = "2px";
    const color = numWidth > 20 ? "white" : "transparent";
    // const numFont = numWidth > 70 ?
    //   20 : numWidth > 60 ?
    //     18 : numWidth > 50 ?
    //       16 : numWidth > 40 ?
    //         14 : numWidth > 30 ?
    //           12 : numWidth > 20 ?
    //             10 : 8;
    // const fontSize = `${numFont}px`
    const fontSize = "8px";
    return (
      <>
        {/* <div id="bodyContainer">
        { array.length ? array.map((number, index) => {
          const backgroundColor = currentSwappers.includes(index) ?
              "rgba(219, 57, 57, 0.8)" : currentBubbleTwo.includes(index) ||
              currentQuickTwo.includes(index) || currentHeapThree.includes(index) ||
              currentMergeX.includes(index) ?
                "rgba(78, 216, 96, 0.8)" : pivot === index ?
                  "rgba(237, 234, 59, 0.8)" : currentSorted.includes(index) ?
                    "rgba(169, 92, 232, 0.8)" : "rgba(66, 134, 244, 0.8)";
          return <div
            className="arrayElement"
            key={index}
            style={{height: `${number * 3}px`, width: width, marginLeft: margin, marginRigh: margin, backgroundColor: backgroundColor, color: color, fontSize: fontSize}}
            {number}
          </div>
        }) : null
        }
      </div> */}
        <SortHeader
          onResetArray={() => {
            this.resetArray();
          }}
          onTestArray={() => {
            this.TestSort();
          }}
          onBubbleSort={() => {
            this.BubbleSort();
          }}
          onQuickSort={() => {
            this.QuickSort();
          }}
          onMergeSort={() => {
            this.MergeSort();
          }}
          onInsertSort={() => {
            this.InsertSort();
          }}
          onHeapSort={() => {
            this.HeapSort();
          }}
          onTutorialChange={() => {
            this.isTutorial();
          }}
          handleSizeChange = {(val)=> this.changeArraySize(val)}
          handleSpeedChange = {(val)=> this.changeAnimationSpeed(val)}
          // onPause = {()=>this.Pause()}
          // onPlay = {()=>this.Play()}
        />
        {/* <button onClick={this.resetArray.bind(this)}>generate new array</button> */}
        {/* <button onClick={this.TestSort.bind(this)}>Test sort</button>
        <button onClick={this.BubbleSort.bind(this)}>Bubble sort</button>
        <button onClick={this.QuickSort.bind(this)}>Quick sort</button>
        <button onClick={this.MergeSort.bind(this)}>Merge sort</button>
        <button onClick={this.InsertSort.bind(this)}>Insert sort</button>
        <button onClick={this.HeapSort.bind(this)}>Heap sort</button> */}
        <div id="bodyContainer">
          <div id="captions">i am captions</div>
          <div className="bars-div">
            {array.map((value, idx) => (
              <div className="eachBarDiv" key={idx}>
              <div
                className="arrayElement"
                key={idx}
                style={{
                  height: `${value}px`,
                  marginLeft: "2px",
                  marginRight: "2px",
                  width: "10px",
                  backgroundColor: "blue",
                  fontSize: "5px",
                }}
              >
                <p className="text">
                </p>
              </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
