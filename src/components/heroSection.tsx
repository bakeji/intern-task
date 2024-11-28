export default function HeroSection() {
    return(
        <section className="mt-[350px] w-[83%] my-0 mx-[auto] max-lg:mt-[120px] max-md:mt-[30px] max-sm:mt-[70px]   ">
            <h1 className="text-[#ffffff] font-fira-code font-[700] 
            text-[75px] w-[70%] leading-[0.85] max-md:text-[25px] max-sm:w-[100%] max-sm:text-center 
            max-xl:text-[60px] max-xl:w-[80%] max-lg:text-[50px]  ">Trusted Multi-Chain <span className="text-[#F9D423]">DEX</span> Platform</h1>
            <p className="text-[#9E9E9E] mt-3 text-[25px] font-[400] font-fira-code 
            lg:text-[18px] max-md:text-[12px]  max-sm:text-center  ">Trade, earn, and own crypto on the all-in-one multi-chain DEX</p>
            <div className="mt-6 flex items-center gap-[20px] max-sm:justify-center">
                <button className="bg-gradient w-[159px] h-[47px] rounded-[100px] text-[#111111] text-[14px] font-raleway font-[800] hover:text-[white] 
                max-md:w-[120px] max-md:text-[12px] max-md:h-[37px] max-md:font-[500] ">Connect Wallet</button>
                <button className="bg-transparent border-[2px] border-[#E4B40D] w-[159px] h-[47px] rounded-[100px] text-[#E4B40D] text-[14px] font-raleway font-[800] hover:bg-gradient hover:text-[#111111]
                max-md:w-[120px] max-md:text-[12px] max-md:h-[37px] max-md:font-[500]">Trade Crypto</button>
            </div>
        </section>
    )
} 