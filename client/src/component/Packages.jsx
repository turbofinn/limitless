// import { useState } from "react";
import Home from "./Home";
const Packages = () => {
        localStorage.setItem("packages",true);
        // window.location.href = '/';
    return( 
        <div>          
            <Home/>   
        </div>
    )
}

export default Packages;