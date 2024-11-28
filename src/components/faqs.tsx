import Faq from "./faqComp";

export default function Faqs() {
  return (
    <section className="mt-[120px] bg-[url(/bg-fq.png)] h-screen bg-no-repeat bg-cover ">
      <div className="w-[50%] my-0 mx-[auto] h-[400px] bg-[#F7F9FF05] rounded-[10px] max-lg:w-[70%] max-md:w-[85%] max-sm:w-[90%]">
        <div className="p-4 border-b-[1px] border-b-[#D9D9D91A]  ">
          <h1 className="text-center font-fira-code text-[#E4B40D] text-[35px]">
            FAQS
          </h1>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          <Faq
            question="How do I get a Referral Code?"
            answer="by sending an email to @examle.com"
          />
          <Faq
            question="Do I get rewarded in tokens or ETH when I refer buyers?"
            answer="You receive your rewards in ETH instantly once someone you refer makes a transaction!"
          />
          <Faq
            question="How do I get a Referral Code?"
            answer="by sending an email to @examle.com"
          />
        </div>
      </div>
    </section>
  );
}
