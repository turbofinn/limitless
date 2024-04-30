import { useEffect } from "react";
import Home from "./Home";
const Benefits = () => {
    useEffect(() => {
        const scrollHeight = 3050;
        window.scrollTo({
            top: scrollHeight,
            behavior: 'smooth'
        });
    }, [])
    return (
        <div>
            <Home />
        </div>
    )
}

export default Benefits