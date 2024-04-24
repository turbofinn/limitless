import React, { useState } from 'react';
import logo from "../assests/images/logo_01.png";
const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <nav className="bg-white sticky top-0 z-[9999] shadow-sm  font-inter ">
            <div className="max-w-8xl mx-auto px-4 sm:px-4 lg:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <div className="flex items-center">
                            <img src={logo} alt='logo' className=' w-[150px] lg:w-[200px] ' />
                    </div>
                    <div className="hidden text-[#ed653b] lg:block ">
                        <div className="ml-4 flex items-center flex-wrap space-x-3 justify-end">
                            <a  className="text-lg font-medium py-2 text-[#ed653b] hover:border-b-2  hover:border-[#ed653b] cursor-pointer" onClick={()=>{props.handleClick(0)}}>Home</a>
                            <a className="text-lg font-medium py-2 text-black px-4 cursor-pointer" onClick={()=>{props.handleClick(1550)}}>Packages</a>
                            <a className="text-lg font-medium py-2 text-black px-4 cursor-pointer" onClick={()=>{props.handleClick(2950)}}>Benefits</a>
                            <a className="text-lg font-medium py-2 text-black px-4 cursor-pointer" onClick={()=>{props.handleClick(3800)}}>Why Us</a>
                            <a className="text-lg font-medium py-2 text-black px-4 cursor-pointer" onClick={()=>{props.handleClick(6760)}}>FAQs</a>
                        </div>
                    </div>
                    <div className="-mr-2 flex lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden `}>
                <div className="text-white ">
                    <div className=" flex flex-col pl-4 ">
                    <a  className="text-lg font-medium py-2 text-[#ed653b] cursor-pointer px-4" onClick={()=>{
                        props.handleClick(0);
                        toggleMenu()}}>Home</a>
                            <a className="text-lg font-medium py-2 text-black px-4 cursor-pointer" onClick={()=>{props.handleClick(2450);
                            toggleMenu();}}>Packages</a>
                            <a className="text-lg font-medium py-2 text-black px-4 cursor-pointer" onClick={()=>{props.handleClick(5100);
                            toggleMenu();}}>Benefits</a>
                            <a className="text-lg font-medium py-2 text-black px-4 cursor-pointer" onClick={()=>{props.handleClick(6350);
                            toggleMenu();}}>Why Us</a>
                            <a className="text-lg font-medium py-2 text-black px-4 cursor-pointer" onClick={()=>{props.handleClick(10400);
                            toggleMenu();}}>FAQs</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;