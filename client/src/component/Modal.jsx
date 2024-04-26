import phone from "../assests/images/phone.png";
import query from "../assests/images/query.png";
import { useState, useEffect } from "react";
import { LineWave, TailSpin } from 'react-loader-spinner'
// import { useNavigate } from "react-router-dom";
import moment from "moment";
import axios from 'axios';
const Modal = (props) => {
    // const Navigate=useNavigate();
    const [firstName, setFirstName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [msg, setMsg] = useState('');
    const [packages, setPackage] = useState('');
    const [loader, setLoader] = useState(false);
    const [validationError, setvalidationError] = useState(false);

    // useEffect(()=>{
    // },[]);
    const [values, setValues] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        selectOption: 'Select your preferred package',
    });
    const [errors, setErrors] = useState({});
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
    const validate = () => {
        if ((firstName.length === 0) || (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email))) || (!(/^\d{10}$/.test(Phone))) || packages.length === 0 || msg.length === 0) {
            return true;
        } else {
            return false;
        }
    };

    const submitHandler = async (e) => {

        setLoader(true);
        // console.log("time", timeDifferenceHours);
        console.log("fn", firstName);
        console.log("email", Email);
        console.log("phone", Phone);
        // e.preventDefault();
        setErrors(validate(values));
        try {
            const response = await axios.post('https://backend.limitlessliterature.com/submit-form', {
                Last_Name: firstName.split(' ')[1] ? firstName.split(' ')[1] : firstName.split(' ')[0],
                First_Name: firstName.split(' ')[1] ? firstName.split(' ')[0] : '',
                Email: Email,
                Phone: Phone,
                Description: msg,
                packages: packages
            }).then((res) => {
                console.log("res", res);
                if (res.data.code === 1001) {
                    // Navigate('/https://limitlessliterature.com/');
                    setLoader(false);
                    // window.location.replace('https://limitlessliterature.com/');
                    // props.setisAPIsuccess(true);
                    localStorage.setItem("deviceID",true);
                    

                }
            });
            // console.log('Response:', response.data);
            setFirstName('');
            setEmail('');
            setPhone('');
            setPackage('Select your preferred package');
            setMsg('');
        } catch (error) {
            console.error('Error:', error.message);
        }
        window.location.href = '/success';
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
                        <input type="text" id="email-address-icon" class="bg-gray-50 border-2 border-[#ed653b] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-3 text-gray-700 placeholder-gray-500  " name="name" placeholder="Name" onChange={
                            (e) => {
                                setFirstName(e.target.value);
                                handleChange(e);
                                setvalidationError(false)
                            }} value={firstName} />
                    </div>
                    {errors.name && <p>{errors.name}</p>}

                    <div class="relative mt-3">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-700 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                            </svg>
                        </div>
                        <input type="text" id="email-address-icon" class="bg-gray-50 border-2 border-[#ed653b] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  text-gray-700 placeholder-gray-500 ps-10 p-3 " name="email" placeholder="E-mail" onChange={(e) => {
                            setEmail(e.target.value);
                            handleChange(e);
                            setvalidationError(false)
                        }} value={Email} />
                    </div>
                    {errors.email && <p>{errors.email}</p>}

                    <div class="relative mt-3 ">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <img src={phone} alt="phone" className=" w-4" />
                        </div>
                        <input type="text" id="email-address-icon" class="bg-gray-50 border-2 border-[#ed653b] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-3 placeholder-gray-500 " placeholder="Phone" name="phoneNumber" onChange={(e) => {
                            setPhone(e.target.value);
                            handleChange(e)
                            setvalidationError(false)
                        }} value={Phone} />
                    </div>
                    {errors.phoneNumber && <p>{errors.phoneNumber}</p>}

                    <select id="countries" class="bg-gray-50 border-2 border-[#ed653b] mt-3 text-gray-500 text-sm rounded-lg block w-full p-3 " onChange={
                        (e) => {
                            setPackage(e.target.value);
                            handleChange(e)
                            setvalidationError(false)
                        }} name="selectOption" value={packages} >

                        <option className=" text-indigo-600 font-medium ">Select your preferred package</option>
                        <option className=" text-indigo-600 font-medium ">Paper 1 UGC NET(&#x20B9; 8900)</option>
                        <option className=" text-indigo-600 font-medium ">Paper 2 English Literature(&#x20B9; 4399)</option>
                        <option className=" text-indigo-600 font-medium ">3000+ Topic-Wise MCQs for Practice(&#x20B9; 1100)</option>
                        <option className=" text-indigo-600 font-medium ">Ultimate 1000+ Literary Theory MCQs(&#x20B9; 799)</option>
                    </select>
                    {errors.selectOption && <p>{errors.selectOption}</p>}
                    <div class="relative mt-3 ">
                        <textarea type="text" id="email-address-icon" class="bg-gray-50 border-2 border-[#ed653b] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 h-[150px] lg:h-[110px] placeholder-gray-500 " placeholder="Ask your query here..." onChange={(e) => {
                            setMsg(e.target.value)
                            setvalidationError(false)
                        }} value={msg} />
                    </div>
                </form>
                {validationError && <p style={{ fontSize: "0.8rem", marginTop: "2%", color: "red", textAlign: "center" }}>Please enter valid details *</p>}
                <div className=" text-center mt-6 lg:mt-8">
                    <a className=" px-8 py-3 bg-[#ed653b] rounded-md text-lg hover:cursor-pointer  text-white"
                        onClick={() => {
                            if (validate()) {
                                setvalidationError(true)
                            } else {
                                submitHandler()
                            }
                        }}
                    // onClick={handleSubmit}
                    >submit</a>

                </div>
                {loader && (<div className="fixed inset-0  z-[99999] flex items-center justify-center backdrop-blur-sm ">
                    <div className={`fixed inset-0 bg-white flex max-w-[8%] lg:max-h-[8%] my-auto mx-auto items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none shadow-2xl ${loader ? 'opacity-100' : 'opacity-0'} bg-opacity-0`}>
                        <div className="relative mx-auto  ">
                            <TailSpin
                                visible={true}
                                height="50"
                                width="50"
                                color="#FB0A0A"
                                ariaLabel="tail-spin-loading"
                                radius="2"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />
                        </div>

                    </div>
                </div>)}

            </div>


        </div>
    )
}
export default Modal;
