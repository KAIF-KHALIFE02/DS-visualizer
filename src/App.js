import logo from "./logo.svg";
import React, { Component }  from 'react';
import "./App.css";
import Sortbody from "./sort/Sortbody";
import Pathbody from "./Path/Pathbody";
import SortingComparator from "./SortingComparision/SortingComparator";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Blankurl from "./Header/Blankurl";
import Navbar from "./Header/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="Sortbody" element={<Sortbody isCompare='false' />} />
          <Route path="Pathbody" element={<Pathbody />} />
          <Route path="SortCompare" element={<SortingComparator />}/>
          <Route path="/" element={<Blankurl />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
