import { useEffect } from "react";
import Home from "./Home";
const WhyUs = () => {
    useEffect(() => {
        const scrollHeight = 5020;
        window.scrollTo({
            top: scrollHeight,
            behavior: 'smooth'
        });
    }, [])
    return (
        <div>
            <Home/>
        </div>
    )
}

export default WhyUs;