import React, { useState } from 'react';
import plus from "../assests/images/plus.svg";
import minus from "../assests/images/min.svg";
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 font-inter">
            <button className="w-full px-6 py-3 text-left " onClick={() => setIsOpen(!isOpen)}>
                <div className="flex items-center justify-between">
                    <span className=' md:text-lg font-medium  lowercase '>{question}</span>
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
        { question: ' HOW MANY BOOKLETS ARE THERE IN THE STUDY MATERIAL?', answer: 'Fourteen booklets include all the subjects required for a student to crack any English literature examination, including TGTIPGTIGATE| MA Entrance and UGC-NET.' },
        { question: ' WILL THIS STUDY MATERIAL WORK FOR ME?', answer: 'The material has worked for many students. Indeed, it will work for you. The power of bold steps and dedication will ultimately help you crack any examination. Everything starts with you, and I will be there to guide you in the right direction through WhatsApp Messages, Calls, and any medium you want me to connect with you.' },
        { question: 'HOW IS YOUR STUDY MATERIAL DIFFERENT FROM OTHER COURSES AND LECTURES?', answer: 'I prepared this material with the mindset of helping the students crack the exam as soon as possible. Why waste time listening to the boring lectures? The rules of 21st Century studies have changed a long time back. We cannot remain stick to traditional learning. The study material belongs to the 21st Century smart students.' },
        { question: 'WHAT EXTRA WILL I GET AFTER PURCHASING THE STUDY MATERIAL?', answer: 'I will personally solve your queries and guide you in the right direction. I am 24x7 available to the students on WhatsApp. Last week I spent 35+ hours solving the doubts and guiding them with the best of my experience. Also, you will get access to unlimited flashcards that you can play around with to digest the subject.' },
        { question: 'WHEN BE THE STUDY MATERIAL WILL DISPATCH?', answer: 'As soon as you place the order, we will dispatch the order. We will also share with you the tracking ID. You can use it to track your consignment.' },
        { question: 'DOES THIS STUDY MATERIAL INCLUDE PAPER 1 ALSO?', answer: 'No, the study material only includes Paper 2, English Literature.' },
        { question: 'I NEED TO BUY THE STUDY MATERIAL. WHERE SHOULD I MAKE THE PAYMENT?', answer: 'Please WhatsApp us: +91 78914-10858' },
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
