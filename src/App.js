import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sortbody from "./sort/Sortbody";
import Pathbody from "./Path/Pathbody";
import SortingComparator from "./SortingComparision/SortingComparator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blankurl from "./Header/Blankurl";
import Navbar from "./Header/Navbar";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <script src="https://unpkg.com/animejs@3.0.1/lib/anime.min.js"></script>
        <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
      </Helmet>
      <Router>
        <Navbar />
        <Routes>
          <Route path="Sortbody" element={<Sortbody isCompare="false" />} />
          <Route path="Pathbody" element={<Pathbody />} />
          <Route path="SortCompare" element={<SortingComparator />} />
          <Route path="/" element={<Blankurl />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
