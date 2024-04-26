import success from "../assests/images/success.png";
import logo from "../assests/images/logo_01.png";
import Footer from "./Footer";
const Success = () => {
    function generateRandomString(length) {
        const vowels = 'aeiou';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        let randomString = '';
        for (let i = 0; i < length; i++) {
            let randomChar = '';
            if (i === 2 || i === 8 || i === length - 2) {
                randomChar = 't'; // Ensure 't' at specific positions
            } else if (i === length - 1) {
                randomChar = vowels[Math.floor(Math.random() * vowels.length)]; // Last digit is a vowel
            } else {
                randomChar = characters[Math.floor(Math.random() * characters.length)];
            }
            randomString += randomChar;
        }
        return randomString;
    }
    localStorage.setItem("DeviceID", generateRandomString(37))

    return (
        <div className=" font-inter min-h-screen ">
            <img src={logo} alt="logo" className=" w-[13%] flex justify-start m-3" />
            <img src={success} alt="success" className=" mx-auto w-[8%]" />
            <h1 className=" text-center text-3xl text-gray-800 font-semibold mt-5 " >We've received your inquiry!</h1>
            <p className=" text-center lg:max-w-[50%] mx-auto mt-5 ">Within the next 24 hours, one of our dedicated team members will personally connect with you. Your patience is greatly appreciated as we ensure the best guidance for your exam preparation.</p>
            <p className=" text-center lg:max-w-[50%] mx-auto mt-5 ">Thank you for choosing us. We're excited to embark on this journey with you!</p>
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