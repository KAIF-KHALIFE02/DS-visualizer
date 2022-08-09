import React from 'react'

export default function Sortnav() {
  return (
    <div id="toolbar">
        <div
          id={!isRunning ? "generateArray" : "generateArrayX"}
          style={{color: color, cursor: cursor}}
          onClick={!isRunning ? () => generateArray(array.length) : null}>
          Generate New Array
        </div>
        <div className="separator"></div>
        <div
          id="arraySize"
          style={{color: color}}>
          Change Array Size & Sorting Speed
        </div>
        <input
          id="changeSize"
          type="range"
          min="0"
          max="100"
          style={{background: color, cursor: cursor}}
          disabled={isRunning ? "disabled" : null}
          onChange={this.handleChange}
          />
        <div className="separator"></div>
        <div
          className={algorithm === "mergeSort" ? "currentAlgorithmButton" : "algorithmButton"}
          onClick={() => this.handleClick("mergeSort")}>
          Merge Sort
        </div>
        <div
          className={algorithm === "quickSort" ? "currentAlgorithmButton" : "algorithmButton"}
          onClick={() => this.handleClick("quickSort")}>
          Quick Sort
        </div>
        <div
          className={algorithm === "heapSort" ? "currentAlgorithmButton" : "algorithmButton"}
          onClick={() => this.handleClick("heapSort")}>
          Heap Sort
        </div>
        <div
          className={algorithm === "bubbleSort" ? "currentAlgorithmButton" : "algorithmButton"}
          onClick={() => this.handleClick("bubbleSort")}>
          Bubble Sort
        </div>
        <div className="separator"></div>
        { algorithm ? <div
            id="sort"
            style={{color: color, cursor: cursor}}
            onClick={!isRunning ? () => sort(algorithm, array, speed) : null}>
            Sort!
          </div> : null
        }
      </div>
  )
}
