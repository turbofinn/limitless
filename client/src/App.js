import './App.css';
import Home from './component/Home';
import Success from './component/Success';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/success" element={<Success/>} /> 
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
