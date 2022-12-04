import React, { useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar.js";
import Pageroute from "./Pages/pageroute";
import ReadMore from "./Pages/Readmore/ReadMore";

function App() {
  const home = useRef(null);
  const mywork = useRef(null);
  const contact = useRef(null);
  const tech = useRef(null);

  const pagescroll = (elementRef, e) => {
    e.preventDefault();
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/MyPortfolio" element={<Pageroute />} />
          <Route path="/readmore" element={<ReadMore />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
