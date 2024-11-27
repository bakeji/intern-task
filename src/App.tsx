import Comparison from "./components/comparison";
import Faqs from "./components/faqs";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import HeroSection from "./components/heroSection";


export default function App() {
  return(
    <div className="bg-[#071624]">
      <div className="bg-[url('/bg.png')] bg-no-repeat bg-cover h-[1068px] bg-center w-[100%]
      max-sm:h-[320px] max-md:h-[420px]
       max-lg:bg-contain max-lg:bg-top max-lg:h-[580px] max-xl:bg-[url('/bg-tab.png')]" >
      <Header />
      <HeroSection />
      </div>
      <Comparison />
      <Features />
      <Faqs />
      <Footer />
      
    </div>
  )
}