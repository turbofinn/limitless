import profile from "../assests/images/profile.png";
import like from "../assests/images/like1.png";
import liked from "../assests/images/liked.png";
import plus from "../assests/images/plus.png";
import { useState } from "react";
const Comments = () => {
    const data = [
        {
            name: "Mariyam Ashraf Siddiqui",
            comment: "Honestly speaking, I have never been so much at peace with the study material I have for my studies. Being a student with commerce background it was not easy to switch the subject and especially preparing for NET. But Nakul Sir have really helped in each and every way. He is a blessing in disguise for me. The material is so expertly framed and love the way it becomes easy to study and learn. Appreciate it Sir... Thank you for being with us",
            like: "12",
            reply: [
                {
                    name: "Nakul Grove",
                    comment: "Thanks Mariyam. It's not easy to change career, I admire you for that. I know how difficult it is to start everything from the beginning. Requires patience and courage! You have that. Wish you all the best.😊"
                }
            ]
        },
        {
            name: "Mahaling Ammanagi",
            comment: "Simple language and valuable information Easy to understand the subject without any complication...",
            like: "6",
            reply: [
                {
                    name: "Nakul Grove",
                    comment: "Thanks for the feedback, Mahaling. Best of luck for your career.😊"
                }
            ]
        },
        {
            name: "Loverpreet Kaur",
            comment: "Study material is very helpful in my preparation. It follows proper pattern and divided into different booklets. Sir regularly giving me topics and answer to my every question on same day. His guidance helping me to understand Literature in a good way. I am truly satisfied with study material and thankful for the guidence.",
            like: "7",
            reply: [
            ]
        },
        {
            name: "Wani Uzma Rani",
            comment: "I like your study material, it is easy to understand. I suggest you to increase your knowledge through this study material order now if want to crack NTA UGC NET JRF in first attempt. Make your career better, build something that you will be proud of ok. I'm thankful to my dear Nakul Sir who make my life better in English literature field. Thanks again dear Sir ® May God bless you and your family Ameen",
            like: "17",
            reply: [
            ]
        },
        {
            name: "Hari Krishnan K U",
            comment: "I should say the study material is nothing less than top-notch. The way Nakul sir has organized the material, it is really easy to follow. Hats off sir to your dedication and solemnity towards preparing this material and for that matter in Literature itself 😊. I promise I'll utilize the maximum out of the material, which is the product of your commitment and devotedness.",
            like: "13",
            reply: [
                {
                    name: "Nakul Grove",
                    comment: "Thanks for the feedback, Mahaling. Best of luck for your career.😊"
                }
            ]
        },
        {
            name: "Vaidehi",
            comment: "If someone really wanted to clear this exam, and wanted a full guidance, then they should directly come here and make MR.NAKUL GROVER their mentor.My decision to start with him was absolutely right. It all worth it.The study material is so well planned that you dont have to waste your time anywhere collecting the outlook information. You'll get all the information of each and every subject in this compact study material.Apart from study material you'll be also getting the full time guidance and support which every student wants.I am glad that he is a part of my preparation.Thankyou so much sir. I am glad to be here.",
            like: "19",
            reply: [

            ]
        },
        {
            name: "Sonam",
            comment: "I have been preparing for UGC-NET for 2years but I couldn't find any well versed source or teacher. And After Joining Nakul sir all my doubts have gone.His study material is crisp and clear. One can't find such brief notes with so much clarity. He personally guides his students throughout the preparation He regularly assign you some work and immediately solve all the queries. I highly appreciate his efforts.He is really a superhuman for English Literature students. His way of teaching is practical and authentic. His course is really effective if you want to give a boost to your preparation. Thanku so much Nakul Sir.",
            like: "21",
            reply: [
                {
                    name: "Nakul Grove",
                    comment: "Thanks for the feedback, Mahaling. Best of luck for your career.😊"
                }
            ]
        },
        {
            name: "B GURUNATH PATRO",
            comment: "Absolutely amazing materials,in my previous exam, I got 17-18 direct answers from these materials and I scored 2 times more than from my previous attempts and the Guiadance of NAKUL SIRE(can not explain in words honestly), I am fortunate to have a guide like him. One meassage from my side, If you are wandering there in literature(what to do or what not to do kind of dillema), then please go through these material made by NAKUL SIR.",
            like: "3",
            reply: [
                {
                    name: "Nakul Grove",
                    comment: "This is amazing! Congratulations to you for getting selected in PGT. Hope you are enjoying your new job. My wishes to you and your family."
                }
            ]
        },
        {
            name: "Sankalp Goswami",
            comment: "The study material by Nakul sir has helped me streamline my preparation for UGC NET and GATE English literature.The booklets' content, language, and clarity in presenting conceptual things are like a cherry on the cake. The best part is that I don't lose interest while going through the booklet I pick up to study; instead, it raises my curiosity to read more. The way Nakul sir has been helping me via WhatsApp communication is rare in today's world. I mean, who gives personal attention to the queries of aspirants, hardly anyone? This quintessential trait of his distinguishes him from others. I can vouch for him. Overall, it has been a wonderful experience with Nakul, sir. I am sure under his guidance, I will pass with flying colours because he is one of the teachers who constantly challenges his students to come out of their comfort zone and set new benchmarks for themselves. Thank you, sir, for what you have been doing for the students' fraternity.",
            like: "21",
            reply: [
                {
                    name: "Nakul Grove",
                    comment: "This is amazing! Congratulations to you for getting selected in PGT. Hope you are enjoying your new job. My wishes to you and your family."
                }
            ]
        },
        {
            name: "MAITHREE ROY",
            comment: "The study materials are well-organized and cover all of the major topics. The notes are simple to recall. They were quite useful in helping me prepare for my NET, WBSET, and GATE exams. Craked WBSET, now looking forward to upcoming exam. This is something I would recommend to any aspiring English Literature students who want to succeed in any competitive exams.",
            like: "22",
            reply: [
                {
                    name: "Nakul Grove",
                    comment: "Many many congratulations for cracking WBSET exam... More power to you... Wish you all the best for your career!"
                }
            ]
        },
        {
            name: "Rashmi Tiwari",
            comment: "I was so clueless when it came to English Literature. Having a background in computers and then changing it to English was the best decision but not easy as it is said. In this vast ocean of confusion, I got support from Nakul sir and his study materials that helped me to sail through multiple achievements. When I look back, just in 8-9 months with Sir's guidance I was able to learn so many things. I was able to qualify for the GATE exam, get enrolled in a Ph.D.course at State University, and on top of that, I got a job as a Lecturer. I believe It would not have been possible without Nakul sir and his guidance. His study material is so lucid and concise that it gives you enough knowledge on the subject and you are ready with the content to speak on. Thank you so much, sir, I dedicate every bit of success in this field to you.",
            like: "32",
            reply: [
                {
                    name: "Nakul Grove",
                    comment: "Hope your job and phd is going well. Time to excel in career. Wish you lots and lots of luck. Thanks for sparing time to leave this wonderful feedback. Rashmi.😊 "
                }
            ]
        },
        {
            name: "BHARAT RAMNANI",
            comment: "The material is very lucid, short and easily digestible. Once you start studying, you kind of enjoy it. I cracked NET in the very first attempt even without completing post-graduation. Nakul sir is easily available on his WhatsApp and very down-to-earth nature wise. so overall its a full package to quality NET in first attempt. Don't think much, just go for it. All the best..",
            like: "13",
            reply: [
                {
                    name: "Nakul Grove",
                    comment: "congratulations on cracking UGC-NET in first attempt. Way to go.Many many thanks for this beautiful feedback😊 "
                }
            ]
        },

    ]
    const [commentlength, setCommentlength] = useState(8);
    const commentHandler = () => {
        let temp = commentlength;
        temp = temp + 2;
        setCommentlength(temp);
    }

    const [likedIndex, setlikedIndex] = useState([]);

    console.log("likedIndex", likedIndex)
    return (
        <div className="">
            <h1 className=" text-center mt-10 text-3xl lg:text-[40px] font-semibold lg:font-bold text-gray-800 leading-10 my-5" >Students Feedback</h1>

            <div class=" mx-auto max-w-screen-xl mt-5 p-4">
                {
                    data.map((data, index) => {
                        return (

                            <div class="space-y-4 my-5">
                                {
                                    index < commentlength && (
                                        <div class="flex">
                                            <div class="flex-shrink-0 mr-3">
                                                <img class="mt-2 rounded-full w-8 md:w-10 lg:w-12 " src={profile} alt="" />
                                            </div>
                                            <div class="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                                <strong>{data.name}</strong>
                                                <p class="text-sm">{data.comment}</p>
                                                <div className=" flex flex-row items-center space-x-6">
                                                    <div className=" flex flex-row my-5 items-center space-x-2">
                                                        <img src={likedIndex.includes(index) ? liked : like} onClick={() => {
                                                            var temp = [...likedIndex]
                                                            if (!temp.includes(index)) {
                                                                temp.push(index)
                                                                setlikedIndex(temp)
                                                            } else {
                                                                temp.pop(index)
                                                                setlikedIndex(temp)
                                                            }

                                                            console.log("clicked", index)
                                                        }} alt="like" className=" w-5" />
                                                        <h4 class=" tracking-wide text-gray-500 font-bold text-sm">helpful</h4>
                                                    </div>
                                                    <div className=" flex flex-row my-5 items-center">
                                                        <svg class="mr-1.5 w-3.5 h-3.5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                                                        </svg>
                                                        <h4 class="  tracking-wide text-gray-500 font-bold text-sm">Replies</h4>
                                                    </div>
                                                    <div className=" border-l-2 border-gray-600">
                                                        <h4 class=" tracking-wide text-gray-500 font-bold text-sm pl-4">{likedIndex.includes(index) ? parseInt(data.like) + 1 : data.like} Likes</h4>
                                                    </div>

                                                </div>
                                                {
                                                    data.reply.length != 0 && (
                                                        data.reply.map((replydata, index) => {
                                                            return (
                                                                <div class="space-y-4">
                                                                    <div class="flex">
                                                                        <div class="flex-shrink-0 mr-3">
                                                                            <img class="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8" src={profile} alt="" />
                                                                        </div>
                                                                        <div class="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                                                            <strong>{replydata.name}</strong>
                                                                            <p class="text-xs sm:text-sm">{replydata.comment}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })

                                                    )
                                                }

                                            </div>
                                        </div>
                                    )}
                            </div>
                        )
                    })
                }
                {commentlength <= data.length && (
                    <div className=" flex flex-row items-center justify-center animate-pulse">
                        <img src={plus} alt="plus" className=" w-6 h-6 mr-2 cursor-pointer" />
                        <h1 className=" text-center font-medium cursor-pointer" onClick={commentHandler} >read more ...</h1>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Comments;