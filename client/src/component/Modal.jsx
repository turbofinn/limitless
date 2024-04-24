import phone from "../assests/images/phone.png";
import query from "../assests/images/query.png";
import { useState, useEffect } from "react";
import axios from 'axios';
const Modal = () => {
    const [firstName, setFirstName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [msg, setMsg] = useState('');
    const [packages, setPackage] = useState('');

    // useEffect(()=>{
    // },[]);
    const submitHandler = async (e) => {
        console.log("fn", firstName);
        console.log("email", Email);
        console.log("phone", Phone);
        e.preventDefault();
        // try {
        //     console.log("aaya");
        //     const response = await axios.post('https://www.zohoapis.in/crm/v6/Leads', {
        //         "data": [
        //             {
        //                 Last_Name: "rweew",
        //                 First_Name: "firstName",
        //                 Email: "akash@gmail.com"
        //             }
        //         ],
        //         trigger: ["approval", "workflow", "blueprint"]
        //     }, {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': 'Zoho-oauthtoken 1000.3cbae78b78ba973b3d473292fe3132f0.f76c69d158253eeab75a8cbb040387a7'
        //         }
        //     });

        //     console.log(response.data);
        //     setFirstName('');
        //     setEmail('');
        //     setPhone('');

        // } catch (error) {
        //     console.error('Error:', error);
        // }
        try {
            const response = await axios.post('http://localhost:5000/submit-form', {
                Last_Name: "",
                First_Name: firstName,
                Email: Email,
                Phone:Phone,
                Description:msg,
                Fax:packages
            });
            console.log('Response:', response.data);
            setFirstName('');
            setEmail('');
            setPhone('');
            setPackage('Select your preferred package');
            setMsg('');
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div className=" font-inter w-full mt-8 md:mt-64 lg:mt-2">
            <div className=" mx-h-[420px]">
                <h1 className=" text-center text-2xl lg:text-[28px] font-semibold lg:font-bold text-gray-800 mt-10 lg:mt-0">Get Your Study Material </h1>
                <h2 className="text-[18px] lg:text-[22px] font-semibold text-gray-700 md:max-w-[80%] lg:max-w-[70%] mx-auto text-center mt-3 lg:mt-0">At Your Doorstep</h2>

                <h3 className="text-[14px] lg:text-[16px] font-semibold text-gray-700 md:max-w-[80%] lg:max-w-[70%] mx-auto text-center mt-3 lg:mt-0 ">Share your info for expert guidance on choosing the right package.</h3>


                <form class=" max-w-sm lg:max-w-md mt-3  mx-auto">

                    <div class="relative ">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </div>
                        <input type="text" id="email-address-icon" class="bg-gray-50 border-2 border-[#ed653b] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-3 text-gray-700 placeholder-gray-500  " placeholder="Name" onChange={(e) => {
                            setFirstName(e.target.value)
                        }} value={firstName} />
                    </div>
                    <div class="relative mt-3">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-700 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                            </svg>
                        </div>
                        <input type="text" id="email-address-icon" class="bg-gray-50 border-2 border-[#ed653b] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  text-gray-700 placeholder-gray-500 ps-10 p-3 " placeholder="E-mail" onChange={(e) => { setEmail(e.target.value) }} value={Email} />
                    </div>
                    <div class="relative mt-3 ">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <img src={phone} alt="phone" className=" w-4" />
                        </div>
                        <input type="text" id="email-address-icon" class="bg-gray-50 border-2 border-[#ed653b] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-3 placeholder-gray-500 " placeholder="Phone" onChange={(e) => { setPhone(e.target.value) }} value={Phone} />
                    </div>


                    <select id="countries" class="bg-gray-50 border-2 border-[#ed653b] mt-3 text-gray-500 text-sm rounded-lg block w-full p-3 " onChange={(e)=>{setPackage(e.target.value)}} >

                        <option className=" text-indigo-600 font-medium ">Select your preferred package</option>
                        <option className=" text-indigo-600 font-medium ">Paper 1 UGC NET</option>
                        <option className=" text-indigo-600 font-medium ">Paper 2 English Literature</option>
                        <option className=" text-indigo-600 font-medium ">3000+ Topic-Wise MCQs for Practice</option>
                        <option className=" text-indigo-600 font-medium ">Ultimate 1000+ Literary Theory MCQs</option>
                    </select>

                    <div class="relative mt-3 ">
                        <textarea type="text" id="email-address-icon" class="bg-gray-50 border-2 border-[#ed653b] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 h-[150px] lg:h-[110px] placeholder-gray-500 " placeholder="Ask your query here..." onChange={(e)=>{setMsg(e.target.value)}} value={msg} />
                    </div>
                </form>
                <div className=" text-center mt-6 lg:mt-3">
                    <button className=" px-8 py-3 bg-[#ed653b] rounded-md  text-white" onClick={submitHandler}>Submit</button>
                </div>


            </div>
        </div>
    )
}
export default Modal;