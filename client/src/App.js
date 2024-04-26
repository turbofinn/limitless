import './App.css';
import Home from './component/Home';
import Success from './component/Success';
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import { useState, useEffect} from 'react';

function App() {
  const [isAPIsuccess, setisAPIsuccess] = useState(false);
  useEffect(()=>{
      if(window.location.href.split('/')[3] === "success" && !isAPIsuccess ){
            window.location.href = '/';
      }
      // const temp = "http://localhost:3000/success";
      // console.log("split",temp.split('/')); 
  },[window.location.href])
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home   setisAPIsuccess = {setisAPIsuccess}/>} /> 

         {isAPIsuccess && ( <Route path="/success" element={<Success/>} />) }
         {/* <Redirect from="/" to="/" /> */}
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
