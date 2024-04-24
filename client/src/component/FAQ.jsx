import React, { useState } from 'react';
import plus from "../assests/images/plus.svg";
import minus from "../assests/images/min.svg";
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 font-inter">
            <button className="w-full px-6 py-3 text-left " onClick={() => setIsOpen(!isOpen)}>
                <div className="flex items-center justify-between">
                    <span className=' md:text-lg font-medium'>{question}</span>
                    <span>{isOpen ? <img src={minus} alt='minus' className=' w-6' /> : <img src={plus} alt='plus' />}</span>
                </div>
            </button>
            <div
                className={`transition-all duration-500 ease-linear ${isOpen ? 'max-h-[500px]' : 'max-h-0 overflow-hidden'
                    }`}>
                <div className="px-6 pb-6 md:w-[95%]">
                    <p className='  text-sm md:text-base'>{answer}</p>
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        { question: 'Is there a free trial available?', answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.' },
        { question: 'Can I change my plan later?', answer: 'Improved access, better engagement, better retention, improved performance and better quality of content are some of the benefits of digital learning solutions.' },
        { question: 'What is your cancellation policy?', answer: 'Smart classrooms, virtual classrooms, massive open online courses, game based learning and adaptive learning are some of the common examples of digital learning solutions.' },
        { question: 'Can other info be added to an invoice?', answer: 'Improved access, better engagement, better retention, improved performance and better quality of content are some of the benefits of digital learning solutions.' },
        { question: 'How does billing work?', answer: 'Improved access, better engagement, better retention, improved performance and better quality of content are some of the benefits of digital learning solutions.' },
        { question: 'How do I change my account email?', answer: 'Improved access, better engagement, better retention, improved performance and better quality of content are some of the benefits of digital learning solutions.' },
    ];

    return (
        <div className=' font-inter mt-32'>
            <h1 className=" text-center  text-2xl lg:text-[40px] font-semibold lg:font-bold text-gray-800">Frequently asked Questions</h1>
            <div className="w-full md:w-[95%] p-4 mx-auto bg-white rounded-xl shadow-md space-y-4">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    );
};

export default FAQ;
