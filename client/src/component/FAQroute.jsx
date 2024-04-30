import { useEffect } from "react";
import Home from "./Home";
const FAQroute = () =>{
    useEffect(() => {
        const scrollHeight = 6300;
        window.scrollTo({
            top: scrollHeight,
            behavior: 'smooth'
        });
    }, [])
    return(
        <div>
           <Home/>   
        </div>
    )
}
export default FAQroute;