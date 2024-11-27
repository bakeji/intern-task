export default function Footer(){
    return(
        <footer className="flex items-center justify-between w-[100%] p-24 box-border mt-[120px] max-lg:p-10 ">
            <div className="logo">
                <img className="max-sm:w-[124px] max-sm:h-[]" src="/logo.png" alt="logo" />
            </div>

            <nav>
               <ul className="flex items-center gap-10 text-[#ffffff] font-raleway font-[800] text-[14px] max-xl:gap-2 max-md:flex-col max-sm:text-[12px] max-sm:font-[500]">
                    <li className="hover:text-[#E4B40D]"><a href="#">About Us</a></li>
                    <li className="hover:text-[#E4B40D]"><a href="#">Roadmap</a></li>
                    <li className="hover:text-[#E4B40D]"><a href="#">FAQs</a></li>
                    <li className="hover:text-[#E4B40D]"><a href="#">Contact Us</a></li>
               </ul>
            </nav>

            <div className="flex flex-col items-center justify-center gap-[12px]  ">
                <h3 className="text-[#ffffff] text-[30px] font-raleway font-[800] max-lg:text-[14px] max-sm:text-[12px] max-sm:font-[500]">Contact <span className="text-[#E4B40D]">Us</span> </h3>
                <div className="flex items-center gap-10 max-lg:gap-2 max-sm:flex-col">
                    <a href="#"><img src="/tg.png" alt="" /></a>
                    <a href="#"><img src="/sm.png" alt="" /></a>
                    <a href="#"><img src="/Twitter.png" alt="" /></a>
                </div>
            </div>
        </footer>
    )
}