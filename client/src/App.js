import './App.css';
import Home from './component/Home';
import Success from './component/Success';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Packages from './component/Packages';

function App() {
  function checkFormat(inputString) {
    const vowels = 'aeiou';
    if (inputString.length !== 36) {
      return false;
    }

    if (inputString[2] !== 't' || inputString[8] !== 't' || inputString[34] !== 't') {
      return false;
    }

    const lastChar = inputString[inputString.length - 1];
    if (!vowels.includes(lastChar)) {
      return false;
    }

    return true;
  }
  
  // const [packages, setPackages] = useState(false);
  // useEffect(()=>{
  //      const path = window.location.pathname;
  //      console.log("path", path);
  // },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {localStorage.getItem("DeviceID") && checkFormat(localStorage.getItem("DeviceID")) ? (
            <Route path="/success" element={<Success />} />
          ) : (
            <Route path="/success" element={<Navigate to="/" replace />} />
          )}
          <Route path="/packages" element={<Packages/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
