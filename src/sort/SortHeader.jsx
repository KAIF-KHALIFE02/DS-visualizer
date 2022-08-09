import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormGroup, FormControlLabel } from "@mui/material";
import Switch from "@mui/material/Switch";
import { Slider, Typography, Tooltip, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Modal from '@mui/material/Modal';
import BubbleSortTutorial from "../SortingTutorials/BubbleSortTutorial";

const options = [
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
    this.state = { arraySize: 40, openMenu: false, selectedIndex: 1,openModal: false };
    this.onhandleSizeChange = this.onhandleSizeChange.bind(this);
    this.onhandleSpeedChange = this.onhandleSpeedChange.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
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
// ************ unused functions *************

// Modal Functions start *****************
handleModalOPen(){
  this.setState({openModal: true})
}

handleModalClose(){
  this.setState({openModal: false})
}
// Modal Functions end *******************



// Button for Modal Start ******************
handleButtonClick = () => {
  this.handleModalOPen();
};

handleMenuItemClick(event, index) {
  this.setState({ selectedIndex: index, openMenu: false });
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
    color: "#52af77",
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#52af77",
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

  onhandleSizeChange(slider) {
    let value = slider.target.value;
    this.setState({ arraySize: value });
    this.props.handleSizeChange(value);
  }
// Size slider end *******************************



  render() {
    const { arraySize, selectedIndex, openMenu,openModal } = this.state;
    const {
      onResetArray,
      onTestArray,
      onBubbleSort,
      onQuickSort,
      onMergeSort,
      onInsertSort,
      onHeapSort,
      onTutorialChange,
      onPause,
      onPlay,
    } = this.props;
    const marks = [
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
      <div>
        <div className="compare">
          <Link to="/SortCompare">Compare</Link>
        </div>
        <div>
          <button onClick={() => onResetArray()}>generate new array</button>
          <button onClick={() => onTestArray()}>Test sort</button>
          <button onClick={() => onBubbleSort()}>Bubble sort</button>
          <button onClick={() => onQuickSort()}>Quick sort</button>
          <button onClick={() => onMergeSort()}>Merge sort</button>
          <button onClick={() => onInsertSort()}>Insert sort</button>
          <button onClick={() => onHeapSort()}>Heap sort</button>
        </div>
        <div className="helpers">
          <div className="size-slider">
            <Typography gutterBottom>Size: {arraySize} </Typography>
            <this.PrettoSlider
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={arraySize}
              min={10}
              getAriaValueText={this.valuetext1}
              onChange={this.onhandleSizeChange}
              onMouseUp={this.onhandleSizeChange}
            />
          </div>
          <div className="animation-slider">
            <Slider
              aria-label="Always visible"
              defaultValue={0}
              step={1}
              marks={marks}
              max={2}
              onChange={this.onhandleSpeedChange}
            />
          </div>
          <div className="switch">
            <FormGroup>
              <FormControlLabel
                control={<Switch id="tutSwitch" onClick={onTutorialChange} />}
                label="Tutorial"
              />
            </FormGroup>
          </div>
          {/* <div className="pause-play">
          <button className="pause" onClick={()=>{onPause()}}>Pause</button>
          <button className="play" onClick={()=>{onPlay()}}>PLay</button>
        </div> */}
        <div className="tutorial">
          <div className="button">
            <ButtonGroup
              variant="contained"
              ref={this.anchorRef}
              aria-label="split button"
            >
              <Button onClick={this.handleButtonClick}>
                {options[selectedIndex]}
              </Button>
              <Button
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
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={this.handleClose}>
                      <MenuList id="split-button-menu" autoFocusItem>
                        {options.map((option, index) => (
                          <MenuItem
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
              <BubbleSortTutorial />
                {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography> */}
              </Box>
            </Modal>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
