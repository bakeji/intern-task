type featuresProps = {
    img : string,
    heading : string,
    text : string
}

export default function Feat({img, heading, text}:featuresProps){

    return(
        <div className="h-[270px] w-[296px] py-[30px] pr-[30px] pl-[28px] bg-[#FFFFFF05] backdrop-blur-[100px] rounded-[18px] 
        max-xl:h-[290px] max-xl:py-[24px] max-xl:px-[24px] max-xl:w-[302px] max-md:w-[350px] max-sm:h-250px ">
            <div className="mb-8 flex items-center justify-center h-[68px] w-[68px] box-content rounded-[50%]  bg-[#D9D9D91A]
                                max-xl:mb-3">
                <img src={img} alt="" />
            </div>
            <h4 className="font-raleway text-[20px] font-[600] text-[#ECF1F0] mb-[12px]">{heading}</h4>
            <p className ="font-roboto text-[16px] font-[400] text-[#B6B6B6] ">{text}</p>
        </div>
    )
}