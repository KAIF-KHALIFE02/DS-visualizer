import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.svg";
import Pathbody from "../Path/Pathbody";
import Sortbody from "../sort/Sortbody";
import '../StyleSheets/Landing.css'

export default function Navbar() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="site-header-inner">
            <div className="brand header-brand">
              <h1 className="m-0">
                <a href="#">
                  <img className="header-logo-image" src={logo} alt="Logo" />
                </a>
              </h1>
            </div>
            <div className="navigators">
              <Link to="/Sortbody">Sorting</Link>
              <Link to="/Pathbody">Path Finding</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
