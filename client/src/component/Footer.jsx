import logoWhite from "../assests/images/logowhite.png";
// import yt from "../assests/images/Syt.png";
// import facebook from "../assests/images/Sfacebook.png";
// import insta from "../assests/images/Sinsta.png";
// import whatsaap from "../assests/images/Swhatsapp.png";
const Footer = (props) => {
    return (
        <div className=" bg-[#ED653B] font-inter p-2 text-white ">
            <div className=" grid grid-cols-8 lg:grid-cols-2 place-content-center items-center mt-10">
                <div className=" col-span-5 lg:col-span-1">
                    <img src={logoWhite} className="  lg:w-[300px]" />
                </div>
                <div className=" mx-auto text-end mt-8 lg:mt-0 hidden lg:block ">
                    <ul className=" space-y-4 lg:space-y-0 lg:flex lg:flex-row lg:space-x-10">
                        <li onClick={()=>{props.handleClick(0)}} className=" cursor-pointer ">Home</li>
                        <li onClick={()=>{props.handleClick(1550)}} className=" cursor-pointer ">Packages</li>
                        <li onClick={()=>{props.handleClick(2950)}} className=" cursor-pointer ">Benefits</li>
                        <li onClick={()=>{props.handleClick(3800)}} className=" cursor-pointer ">Why Us</li>
                        <li onClick={()=>{props.handleClick(6760)}} className=" cursor-pointer ">FAQs</li>
                    </ul>
                </div>
                <div className=" mx-auto text-start lg:hidden col-span-3">
                    <ul className=" space-y-4 ">
                        <li onClick={()=>{props.handleClick(0)}} className=" cursor-pointer ">Home</li>
                        <li onClick={()=>{props.handleClick(2450)}} className=" cursor-pointer ">Packages</li>
                        <li onClick={()=>{props.handleClick(5100)}} className=" cursor-pointer ">Benefits</li>
                        <li onClick={()=>{props.handleClick(6350)}} className=" cursor-pointer ">Why Us</li>
                        <li onClick={()=>{props.handleClick(10400)}} className=" cursor-pointer ">FAQs</li>
                    </ul>
                </div>
            </div>
            <hr className=" mt-10"></hr>

            <div className=" grid lg:grid-cols-2 mt-8 lg:mt-12 items-center text-sm lg:text-base text-pretty ">
                <div className="">
                    {/* <h2>© 2024 Turbofinn AI (Whatsapp: +91-8960880615)</h2> */}
                    <h2>Designed by Turbofinn AI</h2>
                </div>
                <div className=" lg:text-end">
                    <h2>Free shipping across India</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer