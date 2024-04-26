import profile from "../assests/images/profile.png";
import medal from "../assests/images/medal.png";
import arpita from "../assests/images/arpita1.jpg";
import amit from "../assests/images/amrit.jpg";
import gurunath from "../assests/images/gurunath1.jpg";
import bharat from "../assests/images/bharat1.jpeg";
import muskan from "../assests/images/muskan.jpg";
import piyush from "../assests/images/piyush1.jpg";
import sohailM from "../assests/images/sohailM1.jpg";
import harica from "../assests/images/harica1.jpg";
import akashmita from "../assests/images/akashmita1.png";
import ria from "../assests/images/ria1.jpg";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HallofFrame = () => {
    const data = [
        {
            name: "Arpita",
            img: arpita,
            category: "JRF",
            percentage: "76.45%",
            university: "Savitribai Phule Pune University",
            address: "Delhi",

        },
        {
            name: "Amrit Ranjan Arora ",
            img: amit,
            category: "JRF",
            percentage: "76.45%",
            university: "Savitribai Phule Pune University",
            address: "Assam",

        },
        {
            name: "GURUNATH PATRO",
            img: gurunath,
            category: "Odissa Government Lecturer",
            percentage: "76.45%",
            university: "Savitribai Phule Pune University",
            address: "Orissa",

        },
        {
            name: "Bharat Ramnani",
            img: bharat,
            category: "NET",
            percentage: "76.45%",
            university: "Savitribai Phule Pune University",
            address: "Rajasthan",

        },
        {
            name: "Piyush Jangir",
            img: piyush,
            category: "NET",
            percentage: "76.45%",
            university: "Savitribai Phule Pune University",
            address: "Rajasthan",

        },
        {
            name: "Muskan Gupta",
            img: muskan,
            category: "NET",
            percentage: "76.45%",
            university: "Savitribai Phule Pune University",
            address: "Jammu",

        },
        {
            name: "Sohail Khan",
            img: sohailM,
            category: "MPSET",
            percentage: "76.45%",
            university: "Savitribai Phule Pune University",
            address: "Madhya Pradesh",

        },
        {
            name: "Harica Ninavarapu",
            img: harica,
            category: "NET",
            percentage: "76.45%",
            university: "Savitribai Phule Pune University",
            address: "Andhra Pradesh",

        },
        {
            name: "Akashmita Majumder",
            img: akashmita,
            category: "NET",
            percentage: "76.45%",
            university: "Savitribai Phule Pune University",
            address: "Karnataka",

        },
        {
            name: "Ria Anuj",
            img: ria,
            category: "NET",
            percentage: "76.45%",
            university: "Savitribai Phule Pune University",
            address: "Uttar Pradesh",

        },
    ]
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    cssEase: "linear"
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    cssEase: "linear"
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    cssEase: "linear"
                }
            }
        ]
    };
    return (
        <div className=" h-[450px] lg:h-[550px] bg-gray-50 mt-20 lg:p-6 font-inter">
            <h1 className=" text-center  text-2xl lg:text-[40px] font-semibold lg:font-bold text-gray-800 pt-8 pb-4">Every Students Excels with Us!</h1>
            <h2 className="text-[20px] lg:text-[24px] font-semibold text-gray-500 md:max-w-[80%] lg:max-w-[60%] mx-auto text-center ">Hall of Fame</h2>

            <div className="  flex justify-center items-center place-content-center mt-3 md:mt-4 ">
                <div className=" w-[90%] lg:w-[97%] m-auto py-8 ">
                    <Slider {...settings}>
                        {
                            data.map((data, index) => {
                                return (
                                    <div className=" bg-white rounded-2xl w-[30%] flex flex-col justify-center  items-center place-content-center text-pretty px-10 py-6 shadow-xl mb-10 ">
                                        <div className=" flex flex-row justify-between">
                                            <div className="">
                                                <img src={data.img} alt="profile" className=" w-[90px] h-[90px] rounded-full" />
                                                <h1 className=" uppercase font-semibold mt-3 text-base ">{data.name}</h1>
                                            </div>
                                            <img src={medal} alt="medal" className=" mt-[-20px] mr-[-15px]" />
                                        </div>
                                        <div className="">
                                            <h2 className=" text-base mt-1 font-bold text-indigo-700 ">{data.category}</h2>
                                            {/* <h2 className=" text-sm mt-0 font-bold text-indigo-700 italic">{data.percentage}</h2> */}
                                            {/* <h2 className=" text-sm mt-4 text-gray-800 font-medium italic">{data.university}</h2> */}
                                            <h2 className=" text-base mt-1 text-gray-800 font-medium italic">{data.address}</h2>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default HallofFrame;