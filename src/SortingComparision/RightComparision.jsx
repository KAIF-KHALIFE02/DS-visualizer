import React, { Component } from 'react'
import './SortingComparator.css'
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
        this.state = { array2: [] };
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
          array2: arr,
        });
      }
    
      resetArray() {
        this.generateArray();
        let bars1 = document.getElementsByClassName("right-arrayElement");
        for (var j = 0; j < this.state.array2.length; j++) {
          bars1[j].style.backgroundColor = "blue";
        }
      }

      BubbleSort2() {
        let elem = document.getElementsByClassName("right-arrayElement");
        let bar = Array.prototype.slice.call(elem)
        bubble.bubblesort(this.state.array2, bar);
      }
      QuickSort2() {
        let bar = document.getElementsByClassName("right-arrayElement");
        quick.quicksort(this.state.array2, bar);
      }
      MergeSort2() {
        let bar = document.getElementsByClassName("right-arrayElement");
        merge.mergesort(this.state.array2, bar);
      }
      InsertSort2() {
        let bar = document.getElementsByClassName("right-arrayElement");
        insert.insertSort(this.state.array2, bar);
      }
      HeapSort2() {
        let bar = document.getElementsByClassName("right-arrayElement");
        heap.heapSort(this.state.array2, bar);
      }

  render() {
    const { array2 } = this.state;
    return (
      <>
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
      </>
    )
  }
}
