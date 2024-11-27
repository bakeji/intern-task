export default function Header() {
    return(
        <header className="w-[90%] my-0 mx-[auto] flex items-center justify-between pt-5
          max-md:w-[85%]
           max-lg:w-[95%] ">
            <div>
                <a href="/"><img src="/logo.png" alt="logo" /></a>
            </div>

            <nav className = "max-md:hidden " >
                <ul className=" flex items-center gap-10 text-[#ffffff] 
                font-raleway font-[800] text-[18px] 
                max-xl:gap-4  max-lg:font-[500] max-lg:text-[14px] ">
                    <li className="hover:text-[#E4B40D]"><a href="/">Home</a></li>
                    <li className="hover:text-[#E4B40D]"><a href="#">About Us</a></li>
                    <li className="hover:text-[#E4B40D]"><a href="#">Roadmap</a></li>
                    <li className="hover:text-[#E4B40D]"><a href="#">FAQs</a></li>
                    <li className="hover:text-[#E4B40D]"><a href="#">Contact Us</a></li>
                </ul>
            </nav>

            <div className="max-md:hidden">
                <button className="w-[169px] h-[47px] rounded-[100px] bg-gradient
                 text-[#111111] font-raleway font-[800] text-[14px] hover:text-[white] ">Connect Wallet</button>
            </div>

            <div className="hidden max-md:block ">
                <button className="bg-[transparent]"><img src="/hamburger1.png" alt="menu-button" /></button>
            </div>
        </header>
    )
}