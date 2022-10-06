import React, { Component } from "react";
import SortHeader from "./SortHeader";
import "./Sortbody.css";
import $ from "jquery";
import * as bubble from "../Sortingalgo/Bubblesort.js";
import * as quick from "../Sortingalgo/Quicksort.js";
import * as merge from "../Sortingalgo/Mergesort.js";
import * as insert from "../Sortingalgo/Insertsort.js";
import * as heap from "../Sortingalgo/Heapsort.js";
import * as bubbleWOA from "../SortWithoutAnimate/BubbleSort.js";
import * as quickWOA from "../SortWithoutAnimate/QuickSort.js";
import * as heapWOA from "../SortWithoutAnimate/HeapSort.js";
import * as insertWOA from "../SortWithoutAnimate/InsertSort.js";
import * as mergeWOA from "../SortWithoutAnimate/MergeSort.js";
import Worker from "../worker/worker";
import WorkerBuilder from "../worker/worker-builder";
import { Helmet } from "react-helmet";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import * as SortingAnimations from "../StyleJS/animation.js";

let instance = new WorkerBuilder(Worker);

export default class Sortbody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      arrayWOA: [],
      isRunning: false,
      isTutorial: false,
      len: 40,
      prevLen: 40,
      Pause: false,
      tutorial: false,
      animationSpeed: 50,
      prevAnimationSpeed: 50,
      stopArray: false,
    };
    this.changeArraySize = this.changeArraySize.bind(this);
    this.isTutorial = this.isTutorial.bind(this);
    // this.myRef = React.createRef();
    let scrollTo = (ref) => {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    };
  }

  componentDidMount() {
    instance.onmessage = (message) => {
      if (message) {
        console.log("Message from worker", message.data);
      }
    };
    this.generateArray();
    setTimeout(() => {
      let bars = document.getElementsByClassName("arrayElement");
      SortingAnimations.animateBarsEntry(bars);
    }, 1000);
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
  }

  generateArray() {
    let length1 = this.state.len;
    console.log(this.state.len);
    const arr = [];
    const arrWOA = [];
    while (arr.length < length1) {
      var r = Math.floor(Math.random() * 700) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
      if (arrWOA.indexOf(r) === -1) arrWOA.push(r);
    }
    this.setState({
      array: arr,
      arrayWOA: arrWOA,
    });
  }

  resetArray() {
    this.generateArray();
    let bars = document.getElementsByClassName("arrayElement");
    // let barsBack = document.getElementsByClassName("eachBarDiv");
    for (var j = 0; j < this.state.array.length; j++) {
      bars[j].classList.remove("compare");
      bars[j].classList.remove("isgreater");
      bars[j].classList.remove("sorted");
      // barsBack[j].style.backgroundColor = "";
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

  async scroll(){
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    return new Promise((resolve) => setTimeout(resolve, 1));
  }

  async BubbleSort(check) {
    // const startMs =
    //   (window.performance.timeOrigin + window.performance.now()) /
    //   0.00000000001;
    // const startNs = startMs.toString().slice(-5);
    // const endMs =
    //   (window.performance.timeOrigin + window.performance.now()) /
    //   0.00000000001;
    // const endNs = endMs.toString().slice(-5);
    // console.log(startMs);
    // console.log(endMs);
    // document.querySelector('#bodyContainer').scrollIntoView({
    //   behavior: 'smooth'
    // });
    // $(window).scrollTop($('#bodyContainer').offset().top);
    this.setState({ isRunning: true });
    let bar = document.getElementsByClassName("arrayElement");
    let newArray = this.state.arrayWOA;
    bubbleWOA.bubblesort(newArray);
    let mySortedArray = await bubble.bubblesort(
      this.state.array,
      bar,
      (arr) => {
        if (this.state.stopArray) {
          this.setState({ array: arr });
        }
      },
      this.state.animationSpeed
    );
    await SortingAnimations.animateBarsSorted(bar);
    this.setState({ isRunning: false });
  }
  async QuickSort() {
    this.setState({ isRunning: true });
    let bar = document.getElementsByClassName("arrayElement");
    let mySortedArray = await quick.quicksort(
      this.state.array,
      bar,
      (arr) => {
        this.setState({ array: arr });
      },
      this.state.animationSpeed
    );
    await SortingAnimations.animateBarsSorted(bar);
    this.setState({ isRunning: false });
  }
  async MergeSort() {
    this.setState({ isRunning: true });
    let bar = document.getElementsByClassName("arrayElement");
    let mySortedArray = await merge.mergesort(
      this.state.array,
      bar,
      (arr) => {
        this.setState({ array: arr });
      },
      this.state.animationSpeed
    );
    await SortingAnimations.animateBarsSorted(bar);
    this.setState({ isRunning: false });
  }
  async InsertSort() {
    this.setState({ isRunning: true });
    let bar = document.getElementsByClassName("arrayElement");
    let mySortedArray = await insert.insertSort(
      this.state.array,
      bar,
      (arr) => {
        this.setState({ array: arr });
      },
      this.state.animationSpeed
    );
    await SortingAnimations.animateBarsSorted(bar);
    this.setState({ isRunning: false });
  }
  async HeapSort() {
    this.setState({ isRunning: true });
    let bar = document.getElementsByClassName("arrayElement");
    let mySortedArray = await heap.heapSort(
      this.state.array,
      bar,
      (arr) => {
        this.setState({ array: arr });
      },
      this.state.animationSpeed
    );
    await SortingAnimations.animateBarsSorted(bar);
    this.setState({ isRunning: false });
  }

  arraysAreEqual(arrayone, arraytwo) {
    if (arrayone.length !== arraytwo.length) return false;
    for (let i = 0; i < arrayone.length; i++) {
      if (arrayone[i] !== arraytwo[i]) return false;
    }
    return true;
  }

  async isTutorial() {
    let checked = String(document.getElementById("tutSwitch").checked);
    this.setState({
      tutorial: checked,
      prevAnimationSpeed: this.state.animationSpeed,
      prevLen: this.state.len,
    });
    let bars = document.getElementsByClassName("arrayElement");
    if (checked === "true") {
      this.setState(
        { animationSpeed: 500, len: 15, isTutorial: true },
        function() {
          this.resetArray();
        }
      );
      document.getElementById("captions").style.display = "flex";
      // SortingAnimations.barsDisplayNone(bars)
      SortingAnimations.slideInClass();
      await SortingAnimations.addBarsEntryAnimation(bars);
    } else {
      this.setState(
        {
          animationSpeed: this.state.prevAnimationSpeed,
          len: this.state.prevLen,
          isTutorial: false,
        },
        function() {
          this.resetArray();
        }
      );
      // SortingAnimations.barsDisplayNone(bars)
      SortingAnimations.slideOutClass();
      await SortingAnimations.addBarsEntryAnimation(bars);
      // document.getElementById('captions').style.display = 'none'
    }
  }

  changeArraySize(value) {
    this.setState({ len: value });
    this.resetArray();
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

  Stop() {
    this.setState({ stopArray: true });
  }
  // Pause(){
  //   console.log('pausing')
  //   process
  // }
  // Play(){
  //   if (this.myVar !== -1) {
  //     clearInterval(this.myVar);
  //     this.myVar = -1;
  //   }
  // }

  render() {
    const { array, isRunning, stopArray, isTutorial } = this.state;

    const numWidth = Math.floor($(document).width() / (array.length * 2.5));
    const width = `${numWidth}px`;
    const numMargin =
      array.length < 5
        ? 12
        : array.length < 8
        ? 10
        : array.length < 11
        ? 8
        : array.length < 20
        ? 6
        : array.length < 50
        ? 4
        : array.length < 100
        ? 3
        : array.length < 130
        ? 2.5
        : 2;
    const margin = `${numMargin}px`;
    const color = numWidth > 20 ? "white" : "transparent";
    const fontSize = "8px";
    return (
      <>
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
          handleSizeChange={(val) => this.changeArraySize(val)}
          handleSpeedChange={(val) => this.changeAnimationSpeed(val)}
          isrunning={isRunning}
          istutorial={isTutorial}
          // onStop = {()=>this.Stop()}
          // onPause = {()=>this.Pause()}
          // onPlay = {()=>this.Play()}
        />
        {/* <button onClick={this.Stop.bind(this)}>Stop </button> */}

        {/* <button onClick={() => instance.postMessage(5)}>Send Message</button> */}
        <div id="bodyContainer" ref={this.scrollTo}>
          <div
            id="captions"
            style={{
              display: "none",
              backgroundColor: "rgba(131, 150, 182, 0.22)",
            }}
          >
            i am captions{" "}
          </div>
          <div className="bars-div">
            {array.map((value, idx) => (
              <div className="eachBarDiv" key={idx}>
                <div
                  className="arrayElement bars-slide-anmimation"
                  key={idx}
                  style={{
                    height: `${value}px`,
                    marginLeft: margin,
                    marginRight: margin,
                    width: width,
                    fontSize: "5px",
                  }}
                >
                  <p className="text"></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
