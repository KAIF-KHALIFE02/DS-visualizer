import React, { Component } from 'react'
import './SortingComparator.css';
import * as bubble from "../Sortingalgo/Bubblesort.js";
import * as quick from "../Sortingalgo/Quicksort.js";
import * as merge from "../Sortingalgo/Mergesort.js";
import * as insert from "../Sortingalgo/Insertsort.js";
import * as heap from "../Sortingalgo/Heapsort.js";

let len = 30;

export default class 
 extends Component {

    constructor(props) {
        super(props);
        this.state = { array1: [] };
      }
    
      componentDidMount() {
        this.generateArray();
      }
    
      generateArray() {
        const arr = [];
        while (arr.length < len) {
          var r = Math.floor(Math.random() * 700) + 1;
          if (arr.indexOf(r) === -1) arr.push(r);
        }
        this.setState({
          array1: arr,
        });
      }
    
      resetArray() {
        this.generateArray();
        let bars1 = document.getElementsByClassName("left-arrayElement");
        for (var j = 0; j < this.state.array1.length; j++) {
          bars1[j].style.backgroundColor = "blue";
        }
      }

      BubbleSort1() {
        let elem = document.getElementsByClassName("left-arrayElement");
        let bar = Array.prototype.slice.call(elem)
        bubble.bubblesort(this.state.array1, bar);
      }
      QuickSort1() {
        let bar = document.getElementsByClassName("left-arrayElement");
        quick.quicksort(this.state.array1, bar);
      }
      MergeSort1() {
        let bar = document.getElementsByClassName("left-arrayElement");
        merge.mergesort(this.state.array1, bar);
      }
      InsertSort1() {
        let bar = document.getElementsByClassName("left-arrayElement");
        insert.insertSort(this.state.array1, bar);
      }
      HeapSort1() {
        let bar = document.getElementsByClassName("left-arrayElement");
        heap.heapSort(this.state.array1, bar);
      }

  render() {
    const { array1 } = this.state;
    return (
      <>
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
      </>
    )
  }
}
