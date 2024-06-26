import profile from "../assests/images/profile.png";
import testi_01 from "../assests/images/testi_01.jpeg";
import testi_02 from "../assests/images/testi_02.jpeg";
import testi_03 from "../assests/images/testi_03.jpeg";
import testi_04 from "../assests/images/testi_04.jpeg";
import testi_05 from "../assests/images/testi_05.jpeg";
import testi_07 from "../assests/images/testi_07.jpeg";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
const Testimonial = () => {
 
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          slidesToScroll: 2,
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
  const data = [
    {
      name: "Kanjani",
      img: testi_01,
      address: "Ahmedabad, Gujarat",
      comment: "I had been searching for a proper course on UGC NET English for the past two years.  It is a one-stop solution for the presentation of the UGC-NET exam When I finally came across your notes, sir, my search came to a perfect end. Thank you so much, sir. 🙏",
      rating: "5.0"
    },
    {
      name: "Aditi Singh",
      img: testi_02,
      address: "Meerut, Uttar Pradesh",
      comment: "Thank you, Nakul Sir, for your consistent guidance and support throughout my journey. Your study materials were targeted and to the point. It is a one-stop solution for the presentation of the UGC-NET exam. I was able to qualify for my NET on my very first attempt, thanks to you, as you kept an eye on your students' progress",
      rating: "4.5"
    },
    {
      name: "Priyal Shrivastava",
      img: testi_03,
      address: "Shivpuri, Madhya Pradesh",
      comment: "His notes are magic and he's a magician. I texted Nakul sir to ask if I could prepare for NET in less than 81 days from zero level, and he assured me. I cleared the last UGC-NET just because of his modules, regular guidance, and daily motivation 🙏 Must Go For It! ",
      rating: "4.6"
    },
    {
      name: "Rahul Sinha",
      img: testi_04,
      address: "Deoghar, Jharkhand",
      comment: "There are an array of books which most of the time confuse students. But the material of Limitless Literature is very relevant, to the point and designed in a way that is ample for all the aspirants. It is a one-stop solution for the presentation of the UGC-NET exam.",
      rating: "5.0"
    },
    {
      name: "Ektabaa Vaghela",
      img: testi_05,
      address: "Mehsana, Gujarat",
      comment: "First, a heartfelt thank you to Nakul Sir for providing such lucid material. When I started preparing for the UGC NET exam, I had no idea how to cover such a vast subject, but the only solution was Limitless Literature. After purchasing the study material and receiving guidance from Nakul Sir, things changed drastically.",
      rating: "4.5"
    },
    {
      name: "Piyush Jangir",
      img: testi_07,
      address: "Bikaner, Rajasthan",
      comment: "Limitless Literature's material solves one key problem of every UGC-NET/JRF aspirant and that is how to cover such a vast syllabus. With increasing competition and dark pathways of study material and lack of guidance, Nakul's notes curate such a deep and significant amount of knowledge in such a concise manner.",
      rating: "4.5"
    },
  ]
  return (  
    <div className="bg-[#FCE7E1] h-[550px] my-20 p-4 font-inter ">
      <h1 className=" text-center  text-2xl lg:text-[40px] font-semibold lg:font-bold text-gray-800 py-8">Student’s Testimonial</h1>
      <div className="  flex justify-center items-center place-content-center mt-3 md:mt-8  ">
        <div className=" w-[90%] m-auto ">
          <Slider {...settings}>
            {
              data.map((data, index) => {
                return (
                  <div className=" bg-white rounded-xl w-[33%] h-[320px] flex flex-col justify-center  items-center place-content-center text-pretty ">
                    <img src={data.img} alt="profile" className=" w-[80px] h-[80px] rounded-full  mx-auto" />
                    <h1 className=" text-center font-semibold">{data.name}</h1>
                    <h2 className=" text-center text-gray-700 text-sm">{data.address}</h2>
                    <h2 className=" text-center text-sm mt-2 font-medium px-4">"{data.comment}"</h2>
                    <span className="flex justify-center w-[20%] bg-yellow-500 text-white mx-auto rounded-2xl mt-2 px-2 ">{data.rating}/5.0</span>
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

export default Testimonial;