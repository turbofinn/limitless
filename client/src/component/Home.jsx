import pic_01 from "../assests/images/pic01.png";
import shipping from "../assests/images/shipping.png";
import degree from "../assests/images/degree.png";
import check from "../assests/images/check2.png";
import card_01 from "../assests/images/card_01.png";
import student from "../assests/images/student01.png";
import video from "../assests/images/video.png";
import yt from "../assests/images/yt.png";
import graduate from "../assests/images/graduate.png";
import rupee from "../assests/images/rupee1.png";
import timer from "../assests/images/timer.png";
import youtube from "../assests/images/youTube2.png"
import Vector from "../assests/images/Vector.png";
import guidance from "../assests/images/guidance.png";
import cash from "../assests/images/cash.png";
import productivity from "../assests/images/productivity.png";
import group from "../assests/images/Group.png";
import pic_02 from "../assests/images/pic_02.png";
import pic_03 from "../assests/images/pic_03.png";
import pic_04 from "../assests/images/pic_05.png";
import video1 from "../assests/images/video1.png";
import pg from "../assests/images/pg1.png";
import section2_01 from "../assests/images/section2_01.jpg"
import section2_02 from "../assests/images/section2_02.jpg"
import language from "../assests/images/language.jpeg"
import british from "../assests/images/british.jpeg"
import dictionary from "../assests/images/dictionary.jpeg"
import Book from "../assests/images/book.png"
import modalbg from "../assests/images/modalbg.jpg";



import FAQ from "./FAQ";
import Testimonial from "./Testimonial";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Modal from "./Modal";
import CountingAnimation from "./CountingAnimation";
import HallofFrame from "./HallofFrame";
import Comments from "./Comments";
import FirstModal from "./FirstModal";
import Packages from "./Packages";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [permission, setpermission] = useState(false);
    

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (!permission) {
                setShow(true);
            }
        }, 30000);
        return () => clearTimeout(timeoutId);
    }, [permission]);
    const handleClick = (height) => {
        const scrollHeight = height;
        window.scrollTo({
            top: scrollHeight,
            behavior: 'smooth'
        });
    };

    useEffect(()=>{
        if(localStorage.getItem("packages") == "true" && localStorage.getItem("packages")!== undefined && localStorage.getItem("packages")!== null){
             handleClick(1550);
             localStorage.setItem("packages",false);
        }
    },[])
    const [timeLeft, setTimeLeft] = useState(5 * 60 * 60); // 5 hours in seconds
    useEffect(() => {
        if (!timeLeft) return;

        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
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

    // Format the current time as desired
    // const formattedTime = currentTime.toLocaleTimeString();
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
    }
    return (
        <div className={`font-inter ${isOpen ? " opacity-100" : ""}`}>
            <Navbar handleClick={handleClick} />
            {/* <Packages packages = {packages} setPackages={setPackages}/> */}
            <div className=" w-[95%] mx-auto ">
                {/* section 1 */}
                <div className=" lg:grid lg:grid-cols-11 lg:items-center mt-4 lg:mx-auto">
                    <div className=" lg:col-span-7 lg:max-w-[90%] lg:mx-auto text-justify lg:text-start animate-slideFromLeft ">
                        <h1 className=" text-center lg:text-start text-3xl lg:text-[40px] font-semibold lg:font-bold text-gray-800 leading-10 mb-5" >UGC-NET English Literature Study Material</h1>
                        <h2 className=" text-lg lg:text-xl font-medium text-gray-800" >Apart from spending three years studying the subject, I spent another six months creating the exact course material that a student requires to study</h2>
                        <h2 className=" text-lg lg:text-xl font-medium text-gray-800 mt-6" >Don't waste thousands of hours making notes get our study material!</h2>
                        <div className=" grid lg:grid-cols-3 grid-cols-2 mt-8 gap-4 text-sm text-center">
                            <div className=" flex flex-row items-center mr-2 ">
                                <img src={video1} alt="shipping" className=" w-9 mr-2" />
                                <h2 className=" text-gray-800 font-bold text-md text-start"><span className=" text-[#ed653b]">14 Booklets</span><span> Included</span></h2>
                            </div>
                            {/* <div className=" flex flex-row items-center">
                                <img src={pg} alt="shipping" className=" w-9 mr-2" />
                                <h2 className=" text-gray-800 font-bold text-md  text-start"><span className=" text-[#ed653b]">Everyday 1:1</span><span> Personal Guidance</span></h2>
                            </div> */}
                            <div className=" flex flex-row items-center ">
                                <img src={shipping} alt="shipping" className=" w-9 mr-2" />
                                <h2 className=" text-gray-800 font-bold text-md text-start"><span className=" text-[#ed653b]">Free Booklets</span><span> Shiping</span></h2>
                            </div>
                            <div className=" flex flex-row items-center ">
                                <img src={degree} alt="degree" className=" w-9 mr-2" />
                                <h2 className=" text-gray-800 font-bold text-md text-start"><span className=" text-[#ed653b]">5165</span><span> Sold Study Material</span></h2>
                            </div>
                        </div>
                        <div className=" text-center lg:text-start mt-10">
                            <button className=" text-xl text-white bg-[#ed653b] h-12 font-medium  w-[302px] rounded-md shadow-2xl hover:text-[#ed653b] hover:bg-white hover:border-2 hover:border-[#ed653b] transition-all ease-linear duration-300 " onClick={() => {
                                setIsOpen(true);
                                handleClick();
                                setpermission(true);
                            }}>Get Our Study Material
                            </button>
                        </div>
                    </div>
                    <div className=" col-span-4 animate-slideFromRight">
                        <img src={pic_01} alt="person" className="w-[60%] lg:w-[100%] mx-auto " />
                    </div>
                </div>


                {/* section 2 */}

                <div className=" bg-[#ECEFEE] p-4 lg:p-10 rounded-2xl shadow-2xl mb-10 animate-slideFromLeft">
                    <h1 className=" text-center text-2xl lg:text-[40px] font-semibold lg:font-bold text-gray-800 leading-10 mb-5">Why you need our study material to crack UGC NET?</h1>
                    <div className=" lg:grid lg:grid-cols-2 gap-x-2 mt-10">
                        <div className=" w-[100%] md:w-[65%] lg:w-[95%] mx-auto">
                            <Slider {...settings} className=" mx-auto">
                                <img src={language} alt="card" className=" shadow-xl shadow-black rounded-md mx-auto my-auto h-[270px] md:h-[320px] lg:h-[350px]" />
                                <img src={Book} alt="card" className=" shadow-xl rounded-md mx-auto my-auto h-[270px] md:h-[320px] lg:h-[350px]" />
                                {/* <img src={dictionary} alt="card" className=" shadow-xl rounded-md mx-auto my-auto h-[270px] md:h-[320px] lg:h-[350px]" /> */}
                            </Slider>
                        </div>
                        <div className=" text-gray-600 md:max-w-[62%] lg:max-w-[100%] md:mx-auto mt-10 lg:mt-0 my-auto">
                            <h2 className="text-[18px] lg:text-[24px] font-semibold text-gray-800 mb-5">If you have trouble with any of the following:</h2>
                            <div className=" flex flex-row items-center mb-3 ">
                                <img src={check} alt="check" className=" bg-white rounded-full p-1 w-7 mr-3 " />
                                <h3 className=" text-lg font-semibold">Proper notes & strategy to follow</h3>
                            </div>
                            <div className=" flex flex-row items-center mb-3">
                                <img src={check} alt="check" className=" bg-white rounded-full p-1 w-7 mr-3 " />
                                <h3 className=" text-lg font-semibold">Absence of comprehensive list of writers & novels</h3>
                            </div>
                            <div className=" flex flex-row items-center mb-3">
                                <img src={check} alt="check" className=" bg-white rounded-full p-1 w-7 mr-3 " />
                                <h3 className=" text-lg font-semibold">Memorization challenges to retain the information</h3>
                            </div>
                            <div className=" flex flex-row items-center mb-3">
                                <img src={check} alt="check" className=" bg-white rounded-full p-1 w-7 mr-3 " />
                                <h3 className=" text-lg font-semibold">Lack of personal mentorship</h3>
                            </div>
                            <div className=" flex flex-row items-center mb-3">
                                <img src={check} alt="check" className=" bg-white rounded-full p-1 w-7 mr-3 " />
                                <h3 className=" text-lg font-semibold">Uncertain directional confusion</h3>
                            </div>
                            <div className=" lg:text-center mt-8 text-center">
                                <button className=" text-xl text-white bg-[#ed653b] h-[52px] font-medium w-[302px] rounded-md shadow-2xl hover:text-[#ed653b] hover:bg-white hover:border-2 hover:border-[#ed653b] transition-all ease-linear duration-300  " onClick={() => {
                                    setIsOpen(true);
                                    setpermission(true);
                                }}>Get Our Study Material</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* section 3 */}
            <div className=" bg-[#FCE7E1] p-4 lg:p-10 mb-10 mt-24 animate-slideFromRight">
                <h1 className=" text-center text-3xl lg:text-[40px] font-semibold lg:font-bold text-gray-800 leading-10 mb-5">Our Numbers Speaks for Themselves</h1>

                <div className=" grid grid-cols-2 gap-y-5 lg:gap-y-0 lg:grid-cols-4 mt-10">
                    <div className=" mx-auto text-center">
                        <div className=" rounded-full h-[120px] w-[120px] flex justify-center items-center bg-[#EAEAEA] border-b-2 border-gray-200 shadow-2xl transition-all ease-linear duration-400 hover:scale-105 mx-auto ">
                            <img src={student} alt="student" className="mx-auto w-[60%]" />
                        </div>

                        <CountingAnimation targetCount={5165} value="student" />
                        <h1 className=" text-gray-900 text-lg font-medium mt-2">Enrolled Students</h1>
                    </div>
                    <div className=" mx-auto text-center">
                        <div className=" rounded-full h-[120px] w-[120px] flex justify-center items-center bg-[#EAEAEA] border-b-2 border-gray-200 shadow-2xl transition-all ease-linear duration-400 hover:scale-105 mx-auto">
                            <img src={graduate} alt="graduate" className="mx-auto" />
                        </div>

                        <CountingAnimation targetCount={456} value="cleared" />
                        <h1 className=" text-gray-900 text-lg font-medium mt-2">Cleared UGC NET</h1>
                    </div>
                    <div className=" mx-auto text-center">
                        <div className=" rounded-full h-[120px] w-[120px] flex justify-center items-center bg-[#EAEAEA] border-b-2 border-gray-200 shadow-2xl transition-all ease-linear duration-400 hover:scale-105 mx-auto">
                            <img src={yt} alt="yt" className="mx-auto" />
                        </div>

                        <CountingAnimation targetCount={3} value="subscriber" />
                        <h1 className=" text-gray-900 text-lg font-medium mt-2">Video View’s</h1>
                    </div>
                    <div className=" mx-auto text-center">
                        <div className=" rounded-full h-[120px] w-[120px] flex justify-center items-center bg-[#EAEAEA] border-b-2 border-gray-200 shadow-2xl transition-all ease-linear duration-400 hover:scale-105 mx-auto">
                            <img src={video} alt="video" className="mx-auto" />
                        </div>

                        <CountingAnimation targetCount={50} value="view" />
                        <h1 className=" text-gray-900 text-lg font-medium mt-2">YouTube Subscribers</h1>
                    </div>

                </div>
            </div>

            {/* section 4 */}
            <div className=" w-[95%] mx-auto mt-20 lg:mt-28">

                <h1 className="  text-center text-3xl lg:text-[40px] font-semibold lg:font-bold text-gray-800 leading-10 mb-5">Our Bestselling Study Material</h1>
                <h2 className="text-[18px] lg:text-[24px] font-semibold text-gray-700 md:max-w-[80%] lg:max-w-[60%] mx-auto text-center ">Take UGC-NET English Literature Prep To The Next Level</h2>

                <div className=" md:grid md:grid-cols-1 lg:grid-cols-2 lg:gap-x-0 lg:gap-y-10 mt-16 space-y-8 lg:space-y-0">

                    {/* card 1  */}
                    <div className="w-full lg:w-[450px]  bg-[#FCF1E1] rounded-xl shadow-xl mx-auto pb-5">
                        <div className=" bg-[#FFAA05] p-4 text-white text-center shadow-lg  rounded-xl">
                            <h1 className=" text-[28px] font-bold">Paper 2</h1>
                            <h1 className="text-[28px] font-bold">English Literature</h1>
                            <h2 className=" text-[22px] font-semibold">(Complete Study Material)</h2>
                        </div>
                        <ul class=" p-6 md:p-8 font-medium">
                            <li class="mb-2 flex flex-row items-center">
                                <img src={check} className=" w-6 mr-2" alt="check" />
                                <h2>14 booklets that cover all the subject</h2>
                            </li>
                            <li class="mb-2 flex flex-row items-center">
                                <img src={check} className=" w-6 mr-2" alt="check" />
                                <h2>3000+ Topic-Wise MCQs for Practice</h2>
                            </li>
                            <li class="mb-2 flex flex-row items-center">
                                <img src={check} className=" w-6 mr-2" alt="check" />
                                <h2>1000+ Literary Theory MCQs</h2>
                            </li>
                            <li class="mb-2 flex flex-row items-center">
                                <img src={check} className=" w-6 mr-2" alt="check" />
                                <h2>Avoid the tedious process of making notes</h2>
                            </li>
                            <li class="mb-2 flex flex-row items-center">
                                <img src={check} className=" w-6 mr-2" alt="check" />
                                <h2>Access To Private Video Lectures</h2>
                            </li>
                            <li class="mb-2 flex flex-row items-center">
                                <img src={check} className=" w-6 mr-2" alt="check" />
                                <h2>Get in touch with Nakul on call or WhatsApp</h2>
                            </li>
                            <li class="mb-2 flex flex-row items-center">
                                <img src={check} className=" w-6 mr-2" alt="check" />
                                <h2>Free delivery at your doorstep</h2>
                            </li>
                        </ul>
                        <div className=" flex flex-row items-center justify-center">
                            <img src={rupee} alt="rupee" className=" w-6" />
                            <h1 className=" text-[22px] font-bold mr-4">8900/-</h1>
                            <h1 className=" text-[18px] font-bold mr-4 line-through">18999/</h1>
                            <h1 className=" text-[22px] font-bold mr-4 ">53% off</h1>
                        </div>
                        <div className=" flex flex-row items-center justify-center mt-2">
                            <img src={timer} alt="timer" className=" w-8 mr-2" />
                            <h3 className=" text-[#FB0A0A] font-bold"><span>{reverseTime}</span>  Hours Left at this price</h3>
                        </div>
                        <div className=" text-center mt-5">
                            <button className=" text-xl text-white bg-[#ed653b] h-12 font-medium  w-[302px] rounded-md shadow-2xl hover:text-[#ed653b] hover:bg-white hover:border-2 hover:border-[#ed653b] transition-all ease-linear duration-300  " onClick={() => {
                                setIsOpen(true);
                                setpermission(true);
                            }}>Get Our Study Material</button>
                        </div>
                    </div>


                    {/* card 2  */}
                    <div className="w-full lg:w-[450px]  bg-[#FCF1E1] rounded-xl shadow-xl mx-auto pb-5">
                        <div className=" bg-[#FFAA05] p-4 flex flex-col justify-center h-[150px] text-white text-center shadow-lg  rounded-xl">
                            <h1 className=" text-[28px] font-bold">Paper 1</h1>
                            <h1 className="text-[28px] font-bold">UGC NET</h1>
                        </div>
                        <ul class=" list-decimal list-inside p-6 md:p-8 font-medium">
                            <li class="mb-2 flex flex-row items-center">
                                <img src={check} className=" w-6 mr-2" alt="check" />
                                <h2>Easy to understand language</h2>
                            </li>
                            <li class="mb-2 flex flex-row items-center">
                                <img src={check} className=" w-6 mr-2" alt="check" />
                                <h2>Covers all the 10 units of Paper 1 UGC-NET</h2>
                            </li>
                            <li class="mb-2 flex flex-row items-center">
                                <img src={check} className=" w-6 mr-2" alt="check" />
                                <h2>Recent topics on the updated syllabus</h2>
                            </li>
                            <li class="mb-2 flex flex-row items-center">
                                <img src={check} className=" w-6 mr-2" alt="check" />
                                <h2>Avoid the tedious process of making note</h2>
                            </li>
                            <li class="mb-2 flex flex-row items-center">
                                <img src={check} className=" w-6 mr-2" alt="check" />
                                <h2>Topic-Wise MCQs for Practice</h2>
                            </li>
                            <li class="mb-2 flex flex-row items-center">
                                <img src={check} className=" w-6 mr-2" alt="check" />
                                <h2>Get in touch with Nakul on call or WhatsApp</h2>
                            </li>
                            <li class="mb-2 flex flex-row items-center">
                                <img src={check} className=" w-6 mr-2" alt="check" />
                                <h2>Free delivery at your doorstep</h2>
                            </li>
                        </ul>
                        <div className=" flex flex-row items-center justify-center">
                            <img src={rupee} alt="rupee" className=" w-6" />
                            <h1 className=" text-[22px] font-bold mr-4">4399/-</h1>
                            <h1 className=" text-[18px] font-bold mr-4 line-through">7099/</h1>
                            <h1 className=" text-[22px] font-bold mr-4 ">38% off</h1>
                        </div>
                        <div className=" flex flex-row items-center justify-center mt-2">
                            <img src={timer} alt="timer" className=" w-8 mr-2" />
                            <h3 className=" text-[#FB0A0A] font-bold"><span>{reverseTime}</span>  Hours Left at this price</h3>
                        </div>
                        <div className=" text-center mt-5">
                            <button className=" text-xl text-white bg-[#ed653b] h-12 font-medium  w-[302px] rounded-md shadow-2xl hover:text-[#ed653b] hover:bg-white hover:border-2 hover:border-[#ed653b] transition-all ease-linear duration-300 " onClick={() => {
                                setIsOpen(true);
                                setpermission(true);
                            }}>Get Our Study Material</button>
                        </div>
                    </div>

                    {/* card 3 */}
                    <div className="w-full lg:w-[450px]  bg-[#FCF1E1] rounded-xl shadow-xl mx-auto pb-5">
                        <div className=" bg-[#FFAA05] p-4  text-white text-center shadow-lg  rounded-xl">
                            <h1 className="text-[28px] font-bold">3000+ Topic-Wise MCQs for Practice</h1>
                        </div>
                        <h2 className=" text-center mt-10 text-cyan-600 text-lg font-semibold"><span className=" text-xl">* Already Included </span> In Complete Study Material Package</h2>
                        <ul class=" list-decimal list-inside p-6 md:p-6 font-medium ">
                            <li class="mb-2 flex flex-row items-center">
                                <img src={check} className=" w-6 mr-2" alt="check" />
                                <h2>3000+ Topic-Wise MCQs</h2>
                            </li>
                            <li class="mb-2 flex flex-row items-center">
                                <img src={check} className=" w-6 mr-2" alt="check" />
                                <h2>Covers past 14 years of questions</h2>
                            </li>
                            <li class="mb-2 flex flex-row items-center">
                                <img src={check} className=" w-6 mr-2" alt="check" />
                                <h2>British, American, African... all subjects</h2>
                            </li>
                            <li class="mb-2 flex flex-row items-center">
                                <img src={check} className=" w-6 mr-2" alt="check" />
                                <h2>Hardcopy format</h2>
                            </li>
                            <li class="mb-2 flex flex-row items-center">
                                <img src={check} className=" w-6 mr-2" alt="check" />
                                <h2>Free delivery at your doorstep</h2>
                            </li>
                        </ul>
                        <div className=" flex flex-row items-center justify-center mt-10">
                            <img src={rupee} alt="rupee" className=" w-6" />
                            <h1 className=" text-[22px] font-bold mr-4">1100/-</h1>
                            <h1 className=" text-[18px] font-bold mr-4 line-through">1499/</h1>
                            <h1 className=" text-[22px] font-bold mr-4 ">26% off</h1>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-3">
                            <img src={timer} alt="timer" className=" w-8 mr-2" />
                            <h3 className=" text-[#FB0A0A] font-bold"><span>{reverseTime}</span>  Hours Left at this price</h3>
                        </div>
                        <div className=" text-center">
                            <button className="mt-6 text-xl text-white bg-[#ed653b] h-12 font-medium w-[302px] rounded-md shadow-2xl hover:text-[#ed653b] hover:bg-white hover:border-2 hover:border-[#ed653b] transition-all ease-linear duration-300 " onClick={() => {
                                setIsOpen(true);
                                setpermission(true);
                            }}>Get Our Study Material</button>
                        </div>
                    </div>


                    {/* card 4 */}
                    <div className="w-full lg:w-[450px]  bg-[#FCF1E1] rounded-xl shadow-xl mx-auto pb-5">
                        <div className=" bg-[#FFAA05] p-4 text-white text-center shadow-lg  rounded-xl">
                            <h1 className="text-[28px] font-bold">Ultimate 1000+ Literary Theory MCQs</h1>
                        </div>
                        <h2 className=" text-center mt-10 text-cyan-600 text-lg font-semibold"><span className=" text-xl">* Already Included </span> In Complete Study Material Package</h2>
                        <ul class=" list-decimal list-inside p-6 md:p-8 font-medium">
                            <li class="mb-2 flex flex-row items-center">
                                <img src={check} className=" w-6 mr-2" alt="check" />
                                <h2>1000+ MCQs</h2>
                            </li>
                            <li class="mb-2 flex flex-row items-center">
                                <img src={check} className=" w-6 mr-2" alt="check" />
                                <h2>1000+ Literary Theory MCQs</h2>
                            </li>
                            <li class="mb-2 flex flex-row items-center">
                                <img src={check} className=" w-6 mr-2" alt="check" />
                                <h2>Past Ph.D., NET, GATE, SET, PGT questions</h2>
                            </li>
                            <li class="mb-2 flex flex-row items-center">
                                <img src={check} className=" w-6 mr-2" alt="check" />
                                <h2>Structuralism, Deconstruction... every topic</h2>
                            </li>
                            <li class="mb-2 flex flex-row items-center">
                                <img src={check} className=" w-6 mr-2" alt="check" />
                                <h2>Hardcopy format</h2>
                            </li>
                            <li class="mb-2 flex flex-row items-center">
                                <img src={check} className=" w-6 mr-2" alt="check" />
                                <h2>Free delivery at your doorstep</h2>
                            </li>
                        </ul>
                        <div className=" flex flex-row items-center justify-center">
                            <img src={rupee} alt="rupee" className=" w-6" />
                            <h1 className=" text-[22px] font-bold mr-4">799/-</h1>
                            <h1 className=" text-[18px] font-bold mr-4  line-through">999/</h1>
                            <h1 className=" text-[22px] font-bold mr-4 ">20% off</h1>
                        </div>
                        <div className=" flex flex-row items-center justify-center mt-2">
                            <img src={timer} alt="timer" className=" w-8 mr-2" />
                            <h3 className=" text-[#FB0A0A] font-bold"><span>{reverseTime}</span>  Hours Left at this price</h3>
                        </div>
                        <div className=" text-center mt-5">
                            <button className=" text-xl text-white bg-[#ed653b] h-12 font-medium  w-[302px] rounded-md shadow-2xl hover:text-[#ed653b] hover:bg-white hover:border-2 hover:border-[#ed653b] transition-all ease-linear duration-300  " onClick={() => { setIsOpen(true); setpermission(true); }}>Get Our Study Material</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 5 */}
            <div>
                <h1 className=" text-center mt-20 text-2xl lg:text-[40px] font-semibold lg:font-bold text-gray-800 leading-10">Reap The Benefits </h1>
                <h2 className="text-[18px] lg:text-[24px] font-semibold text-gray-700 md:max-w-[80%] lg:max-w-[60%] mx-auto text-center mt-3 lg:mt-5 ">Trusted By 5165+ Literature Students</h2>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-16 lg:gap-8 mt-16">
                    <div className="">
                        <img src={youtube} alt="youtube" className=" mx-auto w-24 h-24" />
                        <h1 className=" text-center font-semibold text-gray-800 text-xl mt-3">SMART</h1>
                        <h2 className=" text-center w-[90%] md:w-[70%] lg:w-[50%] font-medium text-gray-800 mx-auto mt-3">Now, no need to listen to boring lectures, and give pain to your hands</h2>
                    </div>
                    <div className="">
                        <img src={group} alt="group" className=" mx-auto w-28 h-24" />
                        <h1 className=" text-center font-semibold text-gray-800 text-xl mt-3">SAVES TIME</h1>
                        <h2 className=" text-center w-[90%] md:w-[70%]  lg:w-[50%] font-medium text-gray-800 mx-auto mt-3">The material covers everything that might take a student minimum of eight months to write it down</h2>
                    </div>
                    <div className="">
                        <img src={cash} alt="cash" className=" mx-auto w-24 h-24" />
                        <h1 className=" text-center font-semibold text-gray-800 text-xl pt-3">SAVES MONEY</h1>
                        <h2 className=" text-center w-[90%] md:w-[70%]   lg:w-[50%] font-medium text-gray-800 mx-auto mt-3">Why pay the fees of coaching again and again for the same lectures? This material comes with lifetime validity</h2>
                    </div>
                    <div className=" my-auto">
                        <img src={Vector} alt="vector" className=" mx-auto w-24 h-24" />
                        <h1 className=" text-center font-semibold text-gray-800 text-xl mt-3">VIDEO LECTURES</h1>
                        <h2 className=" text-center w-[90%] md:w-[70%]  lg:w-[50%] font-medium text-gray-800 mx-auto mt-3">Unable to understand any topic? Simply WhatsApp us and we will update a video in our private playlist for premium user</h2>
                    </div>
                    <div className="">
                        <img src={guidance} alt="guidance" className=" mx-auto w-24 h-24" />
                        <h1 className=" text-center font-semibold text-gray-800 text-xl mt-3">GUIDANCE</h1>
                        <h2 className=" text-center  w-[90%] md:w-[70%] lg:w-[50%] font-medium text-gray-800 mx-auto mt-3">Recorded Video Sessions on often-asked doubts: quick to guide the students in the right direction</h2>
                    </div>
                    <div className="">
                        <img src={productivity} alt="productivity" className=" mx-auto w-24 h-24" />
                        <h1 className=" text-center font-semibold text-gray-800 text-xl mt-3">PRODUCTIVITY</h1>
                        <h2 className=" text-center w-[90%] md:w-[70%]   lg:w-[50%] font-medium text-gray-800 mx-auto mt-3">Featured on top 10 Success Websites, Nakul Grover is considered Zen of productivity. He knows how to amplify your growth.</h2>
                    </div>
                </div>
            </div>

            {/* section 6 */}
            {/* <div className=" bg-[#ECEFEE] p-8 rounded-2xl shadow-2xl mt-32 mb-10 max-w-[95%] mx-auto">
                <div className=" lg:grid lg:grid-cols-7">
                    <div className="col-span-3">
                        <img src={pic_02} alt=" pic_02" className=" mx-auto" />
                    </div>
                    <div className=" col-span-4 lg:p-8 mt-10 lg:mt-0 lg:text-start">
                        <h1 className=" text-2xl lg:text-[40px] font-semibold lg:font-bold text-gray-700">Why You Should Enroll With Us?</h1>
                        <h2 className=" md:text-lg font-base text-justify  mt-5">If you commit to our books & courses for a couple of months, you will see a drastic improvement in your preparation. I’ve worked very hard to organize the course in the best possible way. </h2>
                        <h2 className=" md:text-lg  text-justify font-base  mt-5">The study material works 100%, only if you let it work. All you just have to do is spend a few hours every day reading the material. If any doubt pops up, I’m just a call away. Call me and I will let you in the right direction.</h2>
                        <div className=" text-center lg:text-start">
                            <button className=" text-xl text-white bg-[#ed653b] h-12 font-medium  w-[302px] rounded-md shadow-2xl mt-5 hover:text-[#ed653b] hover:bg-white hover:border-2 hover:border-[#ed653b] transition-all ease-linear duration-300 " onClick={() => { setIsOpen(true); setpermission(true); }}>Get Our Study Material</button>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* section 7  */}
            <HallofFrame />
            {/* <div className=" bg-[#ECEFEE] p-8 rounded-2xl shadow-2xl mt-32 mb-10 max-w-[95%] mx-auto">
                <h1 className=" text-2xl text-center lg:text-[40px] font-semibold lg:font-bold text-gray-800">Your UGC-NET Certificate is Priceless</h1>
                <div className=" lg:grid lg:grid-cols-10">
                    <div className=" col-span-6 lg:p-8 mt-10 lg:mt-0 lg:text-start ">
                        <h2 className=" md:text-lg font-semibold text-justify  mt-5">Look, studying English Literature for UGC-NET without following a process gets you nowhere. Every student needs an organized system.</h2>
                        <h2 className=" md:text-lg font-semibold text-justify  mt-5">There are things that we cannot do by ourselves.</h2>
                        <ul className=" list-disc text-justify text-sm lg:text-base p-4 text-gray-800 font-medium">
                            <li>proper study material to follow</li>
                            <li>a list of writers to look at</li>
                            <li>a list of important novels to study them, poems to analyze</li>
                            <li>a glossary to memorize</li>
                            <li>quizzes to practice</li>
                            <li>previous year questions to test the knowledge</li>
                            <li>and above all guidance to stay in the right direction.</li>
                        </ul>
                        <div className=" text-center lg:text-end ">
                            <button className=" text-xl text-white bg-[#ed653b] h-12 font-medium  w-64 rounded-md shadow-2xl mt-5 " onClick={() => { setIsOpen(true) }}>Get Our Study Material</button>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <img src={pic_03} alt=" pic_02" className=" mx-auto lg:scale-110 lg:w-full" />
                    </div>
                </div>
                <h2 className=" md:text-lg font-semibold mt-2 text-center">This study material includes everything you have ever desired</h2>
            </div> */}


            {/* section 8 */}
            <div className=" p-8 rounded-2xl shadow-lg mt-4 mb-10 max-w-[95%] mx-auto font-inter">
                <h1 className=" text-2xl text-center lg:text-[40px] font-semibold lg:font-bold text-gray-800">Books & study material that Guarantees UGC-NET Certificate</h1>
                <div className=" grid grid-cols-1 lg:grid-cols-3 bg-[#FCE7E1] text-black p-8 mt-10 rounded-lg">
                    <div>
                        <ul className=" space-y-4 lg:space-y-6">
                            <li>1. British Literature</li>
                            <li>2. British Novel Summaries</li>
                            <li>3. Important British Poetry Text</li>
                            <li>4. Literary Theory</li>
                            <li>5. Literary Criticism</li>
                        </ul>
                    </div>
                    <div>
                        <ul className=" space-y-4  lg:space-y-6 mt-3 lg:mt-0">
                            <li>6. Language, Linguistics, Prosody</li>
                            <li>7. British Diaspora, Canadian Literature</li>
                            <li>8. Australian Literature, European Literature</li>
                            <li>9. American Literature</li>
                            <li>10. English Education in India</li>
                        </ul>
                    </div>
                    <div>
                        <ul className=" space-y-3 lg:space-y-6 mt-3 lg:mt-0">
                            <li>11. Indian Literature, Dalit Writers, Indian Modern Theatre</li>
                            <li>12. Miscellaneous (Magazine, Best Lines, Bible, Awards And Winners)</li>
                            <li>13. 1000+ Literary Theory MCQs</li>
                            <li>14. 3000+ Previous Year NET | SET | PhD</li>
                        </ul>
                    </div>
                </div>
                <div className=" text-center ">
                    <button className=" text-xl text-white bg-[#ed653b] h-12 font-medium  w-[302px] rounded-md shadow-2xl mt-10 hover:text-[#ed653b] hover:bg-white hover:border-2 hover:border-[#ed653b] transition-all ease-linear duration-300 " onClick={() => {
                        setIsOpen(true);
                        setpermission(true);
                    }}>Get Our Study Material</button>
                </div>
                <h2 className=" md:text-lg font-semibold mt-4 text-center">This study material includes everything you have ever desired</h2>
            </div>
            {/* section 9 */}
            <div className=" mb-10 max-w-[95%] mx-auto">
                <div className=" lg:grid lg:grid-cols-7">
                    <div className="col-span-3 my-auto">
                        <img src={pic_04} alt=" pic_04" className=" mx-auto  md:w-[60%] lg:w-full" />
                    </div>

                    <div className=" col-span-4 lg:p-8 mt-10 lg:mt-0 lg:text-start">
                        <h1 className=" text-center text-2xl lg:text-[40px] font-semibold lg:font-bold text-gray-800 my-4 lg:my-8">Why Waste Time?</h1>
                        <div className=" text-gray-800">
                            <h2 className=" md:text-lg font-medium text-justify  mt-5">Over the years, my knowledge and understanding of English Literature exams have increased drastically. I know the<span className=" font-bold"> exact pattern, exact topics, and exact subjects</span> from where the questions have been repeated over and over again.</h2>
                            <h2 className=" md:text-lg font-medium text-justify  mt-5">I’m continuously sharing everything with my students transparently. They are understanding literature faster than ever before.</h2>
                            <h2 className=" md:text-lg font-medium text-justify  mt-5">The good news is you don’t have to waste hours and hours listening to the tedious lectures and writing the notes. I’m sharing all my study material with you in just one click.</h2>
                            <h2 className=" md:text-lg font-medium text-justify  mt-5">All my investment of <span className=" font-bold">six years in English Literature can be yours.</span> Even if you’re an average student of English Literature, through the same study material I’ve created, you can sit in any exam with full confidence</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Testimonial />

            {isOpen && (
                <div className="fixed inset-0  z-[99999] flex items-center justify-center backdrop-blur-sm animate-slideFromRight">
                    <div className={`fixed inset-0 bg-white flex lg:max-w-[44%] lg:max-h-[90%] my-auto mx-auto items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none shadow-2xl  transition-all ease-linear duration-400 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="relative mx-auto  ">
                            <Modal {...props} />
                        </div>
                        <button className=" absolute top-0 right-0 m-3 text-gray-500 hover:text-gray-900 " onClick={() => { setIsOpen(false) }} >
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>)
            }
            <FAQ />
            <Comments />
            <Footer handleClick={handleClick} />

            {/* <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-sm font-inter  shadow-2xl">
                <div className="bg-cover bg-center rounded-lg w-[95%] lg:w-[40%] lg:h-1/2 " style={{ backgroundImage: `url(${modalbg})` }}>
                    <div className=" bg-black bg-opacity-60 h-full flex items-center justify-center">
                        <div className=" p-8 text-white text-lg ">
                            <h2 className=" text-center text-4xl font-bold leading-normal">5 hours left, Hurry up before its too late!</h2>
                            <div className=" lg:text-center mt-8 text-center">
                                <button className=" text-xl text-white bg-[#ed653b] h-[50px] font-medium w-48 rounded-md shadow-2xl hover:text-[#ed653b] hover:bg-white hover:border-2 hover:border-[#ed653b] transition-all ease-linear duration-300  ">Get Our Study Material</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            {show &&
                (
                    <div className="fixed inset-0  z-[99999] flex items-center justify-center backdrop-blur-sm animate-slideFromLeft">
                        <div className={`fixed inset-0 bg-white flex lg:max-w-[42%] lg:max-h-[90%] my-auto mx-auto items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none shadow-2xl  transition-all ease-linear duration-700 ${show ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="relative mx-auto my-auto">
                                <FirstModal />
                                <div className=" lg:text-center text-center">
                                    <button className=" text-xl text-white bg-[#ed653b] h-[50px] font-medium w-[302px] rounded-md shadow-2xl hover:text-[#ed653b] hover:bg-white hover:border-2 hover:border-[#ed653b] transition-all ease-linear duration-300 mb-10 " onClick={() => {
                                        setShow(false);
                                        setIsOpen(true);
                                        setpermission(true);
                                    }}>Get Our Study Material</button>
                                </div>
                            </div>
                            <button className=" absolute top-0 right-0 m-3 text-gray-500 hover:text-gray-900 " onClick={() => { setShow(false) }}>
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default Home;