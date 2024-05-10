import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Highlights from "../components/Highlights";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div style={{ backgroundColor: '#f0f0f0' }}>
        <NavBar />
        <Header />
        <Highlights />
        <Outlet />
      </div>
    </Router>
  );
};

export default App;
