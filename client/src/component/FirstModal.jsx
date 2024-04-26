import modalbg from "../assests/images/modalbg.jpg";
import timer from "../assests/images/timer.png";
import { useEffect, useState } from "react";
const FirstModal = () => {
    const [reverseTime, setReverseTime] = useState('');
    useEffect(() => {
        const updateReverseTime = () => {
            const currentTime = new Date().getTime();
            const reverseDate1 = new Date(currentTime);
            const hour = reverseDate1.getHours().toString().padStart(2, '0');
            let temp = 0;
            if (hour < 6) {
                temp = 0;
            } else if (hour > 6 && hour < 12) {
                temp = 6;
            } else if (hour > 12 && hour < 18) {
                temp = 12;
            } else if (hour > 18 && hour < 24) {
                temp = 18;
            }
            const reverseDate = new Date(currentTime - temp * 60 * 60 * 1000);
            const hours = (Math.abs(reverseDate.getHours().toString().padStart(2, '0') - 6)).toString().padStart(2, '0');
            const minutes = (Math.abs(reverseDate.getMinutes().toString().padStart(2, '0') - 60)).toString().padStart(2, '0');
            const seconds = (Math.abs(reverseDate.getSeconds().toString().padStart(2, '0') - 60)).toString().padStart(2, '0');
            setReverseTime(`${hours}:${minutes}:${seconds}`);
        };

        // Update the reverse time immediately and then every second
        updateReverseTime();
        const intervalId = setInterval(updateReverseTime, 1000);

        // Clean up function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures the effect runs only once
    return (
        <div>
            <div className=" p-10 font-inter my-auto">
                <img src={modalbg} alt=" modalbg" className=" lg:w-[90%] mx-auto" />
                <h2 className=" text-center text-3xl lg:text-4xl font-extrabold mt-10 lg:mt-0">Hurry up before it's too late!</h2>
                <div className=" flex flex-row items-center justify-center mt-7 lg:mt-5">
                    <img src={timer} alt="timer" className=" w-8 mr-2" />
                    <h3 className=" text-[#FB0A0A] font-bold text-center text-lg lg:text-xl "><span>{reverseTime}</span>  Hours Left at this price</h3>
                </div>
            </div>
        </div>
    )
}
export default FirstModal;