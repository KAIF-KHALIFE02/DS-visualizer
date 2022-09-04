import React, { Component } from "react";
import Select from "react-select";
import "./SortingComparator.css";
import { Slider, Typography, Tooltip, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SelectUnstyled, {
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";

const algorithms1 = [
  { value: "BubbleSort1", label: "Bubble Sort", disabled: false },
  { value: "QuickSort1", label: "Quick Sort", disabled: true },
  { value: "HeapSort1", label: "Heap Sort", disabled: false },
  { value: "InsertSort1", label: "Insert Sort", disabled: false },
  { value: "MergeSort1", label: "Merge Sort", disabled: false },
];
const algorithms2 = [
  { value: "BubbleSort2", label: "Bubble Sort", disabled: true },
  { value: "QuickSort2", label: "Quick Sort", disabled: false },
  { value: "HeapSort2", label: "Heap Sort", disabled: false },
  { value: "InsertSort2", label: "Insert Sort", disabled: false },
  { value: "MergeSort2", label: "Merge Sort", disabled: false },
];

const theme = createTheme({
  palette: {
    slidercolor: {
      main: "#097cb1",
      contrastText: "#fff",
    },
  },
});

export default class SortingComparatorNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      algorithm1: this.props.BubbleSort1,
      algorithm2: this.props.QuickSort2,
      algorithmValue1: "BubbleSort1",
      algorithmValue2: "QuickSort2",
    };
    this.handleSelect1 = this.handleSelect1.bind(this);
    this.handleSelect2 = this.handleSelect2.bind(this);
    this.startCompareSort = this.startCompareSort.bind(this);
    this.onhandleSpeedChange = this.onhandleSpeedChange.bind(this);
  }

  handleSelect1(value) {
    let newValue = value.value;
    let newAlgorithm;
    switch (newValue) {
      case "BubbleSort1":
        newAlgorithm = this.props.BubbleSort1;
        this.setState({ algorithm1: newAlgorithm });
        break;
      case "QuickSort1":
        newAlgorithm = this.props.QuickSort1;
        this.setState({ algorithm1: newAlgorithm });
        break;
      case "HeapSort1":
        newAlgorithm = this.props.HeapSort1;
        this.setState({ algorithm1: newAlgorithm });
        break;
      case "InsertSort1":
        newAlgorithm = this.props.InsertSort1;
        this.setState({ algorithm1: newAlgorithm });
        break;
      case "MergeSort1":
        newAlgorithm = this.props.MergeSort1;
        this.setState({ algorithm1: newAlgorithm });
        break;
    }
    let prevValue = this.state.algorithmValue1;
    let disable = algorithms2.find(
      (o) => o.value === newValue.slice(0, -1) + "2"
    );
    let enable = algorithms2.find(
      (o) => o.value === prevValue.slice(0, -1) + "2"
    );
    disable.disabled = true;
    enable.disabled = false;
    this.setState({ algorithm1: newAlgorithm, algorithmValue1: newValue });
  }
  handleSelect2(value) {
    let newValue = value.value;
    let newAlgorithm;
    switch (newValue) {
      case "BubbleSort2":
        newAlgorithm = this.props.BubbleSort2;
        this.setState({ algorithm2: newAlgorithm });
        break;
      case "QuickSort2":
        newAlgorithm = this.props.QuickSort2;
        this.setState({ algorithm2: newAlgorithm });
        break;
      case "HeapSort2":
        newAlgorithm = this.props.HeapSort2;
        this.setState({ algorithm2: newAlgorithm });
        break;
      case "InsertSort2":
        newAlgorithm = this.props.InsertSort2;
        this.setState({ algorithm2: newAlgorithm });
        break;
      case "MergeSort2":
        newAlgorithm = this.props.MergeSort2;
        this.setState({ algorithm2: newAlgorithm });
        break;
    }
    let prevValue = this.state.algorithmValue2;
    let disable = algorithms1.find(
      (o) => o.value === newValue.slice(0, -1) + "1"
    );
    let enable = algorithms1.find(
      (o) => o.value === prevValue.slice(0, -1) + "1"
    );
    disable.disabled = true;
    enable.disabled = false;
    this.setState({ algorithm2: newAlgorithm, algorithmValue2: newValue });
  }

  async startCompareSort() {
    this.state.algorithm1();
    this.state.algorithm2();
  }

  // Animation Speed Slider start ***************
  onhandleSpeedChange(slider) {
    let value = slider.target.value;
    this.props.handleSpeedChange(value);
  }
  // Animation Speed Slider end ****************

  render() {
    const { onResetArray, isrunning, handleSpeedChange } = this.props;

    const speed = [
      {
        value: 0,
        label: "Slow",
      },
      {
        value: 1,
        label: "Medium",
      },
      {
        value: 2,
        label: "Fast",
      },
    ];
    return (
      <>
        <div className="sort-compare-header">
          <div className="sort-compare-header-child">
            <div className="generate-array">
              <button
                className="generate-array-button"
                onClick={() => onResetArray()}
                disabled={isrunning}
              >
                generate new array
              </button>
            </div>
            <div className="animation-slider" id="animation-slider">
              <div className="slider-text">Animation speed: </div>
              <ThemeProvider theme={theme}>
                <Slider
                  color="slidercolor"
                  disabled={isrunning}
                  aria-label="Always visible"
                  defaultValue={0}
                  step={1}
                  marks={speed}
                  max={2}
                  onChange={this.onhandleSpeedChange}
                />
              </ThemeProvider>
            </div>
            <div className="select-options">
              <div className="select-1">
                <Select
                  id="select1"
                  options={algorithms1}
                  onChange={this.handleSelect1}
                  isOptionDisabled={(algorithms1) => algorithms1.disabled}
                  defaultValue={algorithms1[0]}
                />
              </div>
              <div className="select-2">
                <Select
                  id="select2"
                  options={algorithms2}
                  onChange={this.handleSelect2}
                  isOptionDisabled={(algorithms2) => algorithms2.disabled}
                  defaultValue={algorithms2[1]}
                />
              </div>
            </div>
          </div>
          <div className="sort-compare">
            <button className="sort-btn" onClick={this.startCompareSort}>
              Compare
            </button>
          </div>
        </div>
      </>
    );
  }
}
