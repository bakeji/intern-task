export default function Comp() {
  return (
    <div className="grid w-[100%] grid-cols-3 items-center justify-center border-b-[1px] border-b-[#D9D9D91A]">
      <p className=" p-4 text-[#F0F0F0B2] font-fira-code h-[55px] border-r-[1px] border-r-[#D9D9D91A] max-md:text-[12px] max-sm:text-[10px] ">
        {" "}
        2. Point no two this
      </p>
      <div className=" p-4 flex items-center justify-center h-[55px] border-r-[1px] border-r-[#D9D9D91A]">
        {" "}
        <img src="/check.png" alt="check" />
      </div>
      <div className=" p-4 flex items-center justify-center h-[55px]">
        <img src="/close.png" alt="none" />
      </div>
    </div>
  );
}
