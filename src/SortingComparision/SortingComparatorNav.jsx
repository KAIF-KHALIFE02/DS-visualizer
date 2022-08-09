import React, { Component } from "react";

export default class SortingComparatorNav extends Component {

  constructor(props){
      super(props);
      this.state ={algorithm1 : 'bubble',algorithm2: 'quick'}
  }

  handleSelect1(){
    console.log(this.value)
  }
  handleSelect2(){
    console.log(this.value)
  }
  render() {
     const { onResetArray,onBubbleSort1,onQuickSort1,onMergeSort1,onInsertSort1,onHeapSort1,onBubbleSort2,onQuickSort2,onMergeSort2,onInsertSort2,onHeapSort2} = this.props;
    return (
      <>
        <select onChange={this.handleSelect1(this)}>
          <option value="bubble">Bubble</option>
          <option value="quick">Quick</option>
          <option value="merge">Merge</option>
          <option value="heap">heap</option>
          <option value="insert">Insert</option>
        </select>
        <select onChange={this.handleSelect2(this)}>
          <option value="bubble">Bubble</option>
          <option value="quick">Quick</option>
          <option value="merge">Merge</option>
          <option value="merge">Merge</option>
          <option value="heap">heap</option>
          <option value="insert">Insert</option>
        </select>
      </>
      // <div>
      //   <button onClick={() => {
      //       onResetArray()
      //   }}>generate new array</button>
      //   <button onClick={() =>{
      //     onMergeSort2()
      //     onQuickSort1()
      //     // onBubbleSort2()
      //   }}>Bubble sort</button>
      //   <button onClick={() =>{
      //        onQuickSort1()
      //        onQuickSort2()
      //   }}>Quick sort</button>
      //   <button onClick={() =>{
      //        onMergeSort1()
      //        onMergeSort2()
      //        }}>Merge sort</button>
      //   <button onClick={() =>{
      //        onInsertSort1()
      //        onInsertSort2()
      //   }}>Insert sort</button>
      //   <button onClick={() => {
      //       onHeapSort1()
      //       onHeapSort2()
      //   }}>Heap sort</button>
      // </div>
    );
  }
}
