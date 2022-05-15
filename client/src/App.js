import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

import { Auth, Home } from "./pages";

function App() {
  const [clickDl, setClickDl] = useState(true)
  const btnStl = {display: clickDl ? 'block': 'none'};  

  return (
    <div className="wrapper">
      <div><Link style={btnStl} onClick={() => setClickDl(!clickDl)} to="/dialog">Диалоги</Link>
      </div>
      <Routes>
          <Route exact path="/*" element={<Auth />}/>
          <Route path="/dialog/*" element={<Home />} exact/>
      </Routes>
    </div>
  )
};

export default App;
