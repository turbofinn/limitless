import success from "../assests/images/success.png";
import logo from "../assests/images/logo_01.png";
import Footer from "./Footer";
const Success = () => {
    return (
        <div className=" font-inter min-h-screen ">
            <img src={logo} alt="logo" className=" w-[13%] flex justify-start m-3" />
            <img src={success} alt="success" className=" mx-auto w-[8%]" />
            <h1 className=" text-center text-3xl text-gray-800 font-semibold mt-5 " >Your Query has been successfully submitted</h1>
            <p className=" text-center lg:max-w-[50%] mx-auto mt-5 ">Our team is eager to connect with you soon. We value your input and are committed to addressing your needs effectively. Thank you for your patience.</p>
            <div className="   text-center">
                <button className=" text-xl text-white bg-[#ed653b] h-12 font-medium  w-[180px] rounded-md shadow-2xl hover:text-[#ed653b] hover:bg-white hover:border-2 hover:border-[#ed653b] transition-all ease-linear duration-300 mt-5 " onClick={() => {
                    window.location.href = '/';
                }}>Go To Home
                </button>
            </div>
            <div className=" sticky top-[100vh]" >
            <Footer />
            </div>
          </div>
      
    )
}

export default Success;