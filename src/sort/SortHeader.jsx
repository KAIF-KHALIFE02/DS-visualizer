import React, { Component } from "react";
import "./sortHeader.css";
import { Link } from "react-router-dom";
import { FormGroup, FormControlLabel } from "@mui/material";
import Switch from "@mui/material/Switch";
import { Slider, Typography, Tooltip, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Modal from "@mui/material/Modal";
import SelectUnstyled, {
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import BubbleSortTutorial from "../SortingTutorials/BubbleSortTutorial";
import QuickSortTutorial from "../SortingTutorials/QuickSortTutorial";
import HeapSortTutorial from "../SortingTutorials/HeapSortTutorial";
import InsertSortTutorial from "../SortingTutorials/InsertSortTutorial";
import MergeSortTutorial from "../SortingTutorials/MergeSortTutorial";


const theme = createTheme({
  palette: {
    slidercolor: {
      main: "#122726",
      contrastText: "#fff",
    },
  },
});
const Algorithms = [
  "Bubble Sort",
  "Quick Sort",
  "Heap Sort",
  "Insert Sort",
  "Merge Sort",
];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default class SortHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arraySize: 40,
      openMenu: false,
      selectedIndex: 1,
      openModal: false,
      tutorial: "Quick",
      speed: "slow",
      // isRunning: (this.props.isrunning||this.props.istutorial)
    };
    this.onhandleSizeChange = this.onhandleSizeChange.bind(this);
    this.onhandleSpeedChange = this.onhandleSpeedChange.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    // this.haltFunction = this.haltFunction.bind(this);
    this.anchorRef = React.createRef();
  }

  // ************ unused functions *************
  // ValueLabelComponent(props) {
  //   const { children, value } = props;
  //   return (
  //     <Tooltip enterTouchDelay={0} placement="top" title={value}>
  //       {children}
  //     </Tooltip>
  //   );
  // }

  // valuetext2(value) {
  //   console.log(value)
  //   return 0;
  // }

  //   haltFunction() {

  //  }

  // ************ unused functions *************

  // Modal Functions start *****************
  handleModalOPen() {
    this.setState({ openModal: true });
  }

  handleModalClose() {
    this.setState({ openModal: false });
  }
  // Modal Functions end *******************

  // Button for Modal Start ******************
  handleButtonClick = () => {
    this.handleModalOPen();
  };

  handleMenuItemClick(event, index) {
    let newTutorial = Algorithms[index].split(" ")[0];
    console.log(newTutorial);
    this.setState({
      selectedIndex: index,
      openMenu: false,
      tutorial: newTutorial,
    });
  }

  handleToggle = () => {
    let newOpen = !this.state.openMenu;
    this.setState({ openMenu: newOpen });
  };

  handleClose = (event) => {
    if (
      this.anchorRef.current &&
      this.anchorRef.current.contains(event.target)
    ) {
      return;
    }
    this.setState({ open: false });
  };
  // Button for Modal end ********************

  // Animation Speed Slider start ***************
  onhandleSpeedChange(slider) {
    let value = slider.target.value;
    this.props.handleSpeedChange(value);
  }
  // Animation Speed Slider end ****************

  // Size slider start *********************
  PrettoSlider = styled(Slider)({
    color: "#122726",
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#122726",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#122726",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });

  valuetext1(value) {
    return value;
  }
  valuetext2(value) {
    // console.log(typeof(value))
    return parseInt(value);
  }

  onhandleSizeChange(slider) {
    let value = slider.target.value;
    this.setState({ arraySize: value });
    this.props.handleSizeChange(value);
  }
  // Size slider end *******************************


  /********Switch start ****************************/

  Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
      backgroundColor:'#38615f',
      borderRadius: 22 / 2,
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 16,
        height: 16,
      },
      '&:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      '&:after': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        color: '#122726 !important',
        right: 12,
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: 18,
      height: 18,
      margin: 2,
    },
  }));

  /********Switch end ******************************/

  render() {
    const {
      arraySize,
      selectedIndex,
      openMenu,
      openModal,
      tutorial,
      
    } = this.state;
    const {
      onResetArray,
      onTestArray,
      onBubbleSort,
      onQuickSort,
      onMergeSort,
      onInsertSort,
      onHeapSort,
      onTutorialChange,
      istutorial,
      isrunning,
      onStop,
      onPause,
      onPlay,
    } = this.props;
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
    const isRunning = (this.props.isRunning||this.props.istutorial)
    return (
      <div className="sortheader">
        <div className="header-sliders">
          <div className="size-slider">
            <div className="slider-text">Size: {arraySize}</div>
            <this.PrettoSlider
              disabled={isRunning}
              key="slider"
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={40}
              min={10}
              getAriaValueText={this.valuetext1}
              onChange={this.onhandleSizeChange}
            />
          </div>
          <div className="animation-slider">
            <div className="slider-text">Animation speed: </div>
            <ThemeProvider theme={theme}>
              <Slider
                color="slidercolor"
                disabled={isRunning}
                aria-label="Always visible"
                defaultValue={0}
                step={1}
                marks={speed}
                max={2}
                onChange={this.onhandleSpeedChange}
              />
            </ThemeProvider>
          </div>
        </div>
        <div className="all-buttons">
          <div className="btn-group">
            <button
              className="btn-group__item"
              onClick={() => onResetArray()}
              disabled={isrunning}
            >
              Generate array
            </button>
            <button
              className="btn-group__item"
              onClick={() => onBubbleSort()}
              disabled={isrunning}
            >
              Bubble sort
            </button>
            <button
              className="btn-group__item"
              onClick={() => onQuickSort()}
              disabled={isrunning}
            >
              Quick sort
            </button>
            <button
              className="btn-group__item"
              onClick={() => onMergeSort()}
              disabled={isrunning}
            >
              Merge sort
            </button>
            <button
              className="btn-group__item"
              onClick={() => onInsertSort()}
              disabled={isrunning}
            >
              Insert sort
            </button>
            <button
              className="btn-group__item"
              onClick={() => onHeapSort()}
              disabled={isrunning}
            >
              Heap sort
            </button>
          </div>
          <div className="other-buttons">
            <div className="tutorial">
              <div className="tutorial-button">
                <ButtonGroup
                  disabled={isRunning}
                  variant="contained"
                  ref={this.anchorRef}
                  aria-label="split button"
                >
                  <Button
                    className="tutorial-btn"
                    onClick={this.handleButtonClick}
                  >
                    {Algorithms[selectedIndex]}
                  </Button>
                  <Button
                    className="tutorial-btn-arrow"
                    size="small"
                    aria-controls={openMenu ? "split-button-menu" : undefined}
                    aria-expanded={openMenu ? "true" : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={this.handleToggle}
                  >
                    <ArrowDropDownIcon />
                  </Button>
                </ButtonGroup>
                <Popper
                  sx={{
                    zIndex: 1,
                  }}
                  open={openMenu}
                  anchorEl={this.anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom"
                            ? "center top"
                            : "center bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={this.handleClose}>
                          <MenuList id="split-button-menu" autoFocusItem >
                            {Algorithms.map((option, index) => (
                              <MenuItem
                                className="MenuItems"
                                key={option}
                                // disabled={index === 2}
                                selected={index === selectedIndex}
                                onClick={(event) =>
                                  this.handleMenuItemClick(event, index)
                                }
                              >
                                {option}
                              </MenuItem>
                            ))}
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
              <div className="modal">
                <Modal
                  open={openModal}
                  onClose={this.handleModalClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    {tutorial === "Bubble" ? (
                      <BubbleSortTutorial />
                    ) : tutorial === "Quick" ? (
                      <QuickSortTutorial />
                    ) : tutorial === "Heap" ? (
                      <HeapSortTutorial />
                    ) : tutorial === "Insert" ? (
                      <InsertSortTutorial />
                    ) : tutorial === "Merge" ? (
                      <MergeSortTutorial />
                    ) : (
                      <h6>Select an algorithm</h6>
                    )}
                  </Box>
                </Modal>
              </div>
            </div>
            <div className="switch-btn">
              <FormGroup>
                <FormControlLabel
                id="switch"
                  disabled={isrunning}
                  control={<this.Android12Switch id="tutSwitch" onClick={onTutorialChange} />}
                  label="Tutorial"
                />
              </FormGroup>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
