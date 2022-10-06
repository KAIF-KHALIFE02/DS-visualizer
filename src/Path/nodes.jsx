import "./nodes.css";
import 'animate.css';
import React, { Component } from "react";

export default class Nodes extends Component {

shouldComponentUpdate(nextProps){
  if(nextProps.iswall !== this.props.iswall) return true
  if(nextProps.isvisited !== this.props.isvisited) return true
  if(nextProps.isstart !== this.props.isstart ) return true
  if(nextProps.isfinish !== this.props.isfinish) return true
  if(nextProps.ispath !== this.props.ispath) return true
  if(nextProps.row !== this.props.row) return true
  if(nextProps.col !== this.props.col) return true
  return false
}

  render() {
    const { Row,Col, isstart,isfinish,iswall,isvisited,mazevisited,ispath,onmousedown,onmouseenter,onmouseup} = this.props;
    const extraClass = 
    isfinish && ispath? 'node-finish node-path'
    :isstart && ispath? 'node-start node-path'
    :isfinish? 'node-finish'
    : isstart ? 'node-start'
    :ispath? 'node-path'
    : iswall ? 'node-wall'
    : isvisited ? 'node-visited'
    : '';
    return <div 
    onMouseDown={()=>onmousedown(Row,Col,isstart,isfinish)}
    onMouseEnter={()=>onmouseenter(Row,Col)}
    onMouseUp={()=>onmouseup()}
    className={`node ${extraClass}`}
    >
    </div>;
  }
}
