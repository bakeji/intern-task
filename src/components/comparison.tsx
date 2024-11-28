import Comp from "./comp";

export default function Comparison() {
  return (
    <section className="w-[90%]  my-0 mx-[auto] mt-[10px]  ">
      <h1 className="ml-10 text-[45px] font-fira-code text-[#ffffff] font-[700] mb-[20px]">
        Why <span>MoonEX</span> ?
      </h1>
      <div className="flex flex-col bg-[#FFFFFF05] rounded-[20px] p-10 max-sm:p-4">
        <div className="grid w-[100%] grid-cols-3 items-center justify-center border-b-[1px] border-b-[#D9D9D91A]">
          <div
            className="p-5 flex items-center justify-center h-[82px] font-raleway 
                   border-r-[1px] border-r-[#D9D9D91A] max-sm:p2"
          >
            <h1 className="font-[600] text-[28px] text-[#E4B40D] max-md:font-[500] max-md:text-[24px] max-sm:text-[15px]">
              Comparison
            </h1>
          </div>
          <div className=" border-r-[1px] border-r-[#D9D9D91A] flex items-center justify-center h-[82px]">
            <img src="/mnx.png" alt="Moonex" />
          </div>
          <div className=" items-center justify-center flex h-[82px]">
            {" "}
            <img src="/uni.png" alt="uniwap" />
          </div>
        </div>

        <div className="grid w-[100%] grid-cols-3 items-center justify-center  border-b-[1px] border-b-[#D9D9D91A]">
          <p className=" p-4 text-[#F0F0F0B2] font-fira-code h-[55px] border-r-[1px] border-r-[#D9D9D91A] max-sm:text-[10px] ">
            {" "}
            1. Point no one
          </p>
          <div className=" p-4 flex items-center justify-center h-[55px] border-r-[1px] border-r-[#D9D9D91A]">
            {" "}
            <img src="/check.png" alt="check" />
          </div>
          <div className=" p-4 flex items-center justify-center h-[55px]">
            <img src="/close.png" alt="none" />
          </div>
        </div>
        <Comp />
        <Comp />
        <Comp />
        <Comp />
      </div>
    </section>
  );
}
