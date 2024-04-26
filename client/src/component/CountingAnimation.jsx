import React, { useState, useEffect } from 'react';
const CountingAnimation = ({ targetCount, value }) =>{
    const [count, setCount] = useState(0);
    useEffect(()=>{
      if(value === "student") setCount(4000);
      if(value === "cleared") setCount(200);
    },[]);
    useEffect(() => {
      let animationInterval;
      let timer = 1;
      if(value == ("view"))  timer = 20;
      if(value == ("subscriber"))  timer = 20;
      if(value == ("cleared"))  timer = 10;
      if (count < targetCount) {
        animationInterval = setInterval(() => {
          setCount(prevCount => prevCount + 1);
        }, timer); 
      }
  
      return () => clearInterval(animationInterval);
    }, [count, targetCount]); 
  
    return (
      <div className=" text-3xl text-[#ED653B] font-bold mt-5 ">
         {count}
         {
           value === ("view") && (
            <span className="font-extrabold">K</span>
           )
         }
         {
           value === ("subscriber") && (
            <span className="font-extrabold">M</span>
           )
         }
         <span className="font-extrabold">+</span>
      </div>
    );
}
export default CountingAnimation;