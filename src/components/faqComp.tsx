import { useState } from "react"

type faqprops= {
    question : string
    answer : string
}
export default function Faq({question, answer}: faqprops){
    const [showAnswer, setShowAnswer]= useState<boolean>(false)

    const showBtn =()=>{
        setShowAnswer(prev =>!prev)
    }
    return(
        <div className="p-4 border-b-[1px] border-b-[#D9D9D91A] flex justify-between ">
            <div>
                <p className="text-[#FFFFFF] font-raleway text-[18px] font-[500] max-sm:text-[12px]">{question}</p>
                {showAnswer &&<p className="text-[#BAB8B8] text-[12px] font-raleway font-[400] ">{answer}</p>}
            </div>

            <button onClick={showBtn} className="w-[45px] h-[45px] rounded-[50%] bg-[#D9D9D91A] flex items-center justify-center  hover:bg-[#E4B40D]"><img src={showAnswer? "/down.png" :"/plus.png"} alt="accordion" /></button>
        </div>
    )
}