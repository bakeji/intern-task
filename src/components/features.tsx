import Feat from "./feat";

export default function Features() {
  return (
    <section className="mt-[50px] w-[90%] my-0 mx-[auto] ">
      <h1 className="text-center text-[#ffffff] font-fira-code text-[45px] font-[800]">
        Our <span className="text-[#E4B40D]">Features</span>
      </h1>
      <div className="mt-[30px] flex items-center justify-between gap-8 max-lg:flex-col">
        <Feat
          img="/Dollar.png"
          heading="Cheapest TXs"
          text="Exchange popular digital currencies at the cheapest possible transaction price"
        />

        <Feat
          img="/Shield.png"
          heading="CerTIK"
          text="We are Audited by Certik. CertiK is the leading security-focused ranking platform to "
        />

        <Feat
          img="/phone.png"
          heading="No Contract Sells"
          text="No contract sells to fund the marketing wallets"
        />

        <Feat
          img="/options.png"
          heading="CrossDex Support"
          text="Exchange popular digital currencies at the cheapest possible transaction price"
        />
      </div>
    </section>
  );
}
