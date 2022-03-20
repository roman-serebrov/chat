import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import { Auth, Home } from "./pages";

function App() {
  return (
    <div className="wrapper">
      <Routes>
          <Route exact path="/*" element={<Auth />}/>
          <Route path="/" element={<Home />}/>

      </Routes>
    </div>
  )
};

export default App;
