import { useState } from "react"
import MobileNav from "./mobileNav"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('/')
    
    const openMenu = () => {
        setIsOpen(true)
    }
    const handleActiveLink = (link:string) => {
        setActiveLink(link)
    }
    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '#about', label: 'About Us' },
        { href: '#roadmap', label: 'Roadmap' },
        { href: '#faqs', label: 'FAQs' },
        { href: '#contact', label: 'Contact Us' }
      ];
    
    return(
        <header className="w-[90%] my-0 mx-[auto] flex items-center justify-between pt-5
          max-md:w-[85%]
           max-lg:w-[95%] ">
            <div>
                <a href="/"><img src="/logo.png" alt="logo" /></a>
            </div>

            <nav className = "max-md:hidden " >
                <ul className=" flex items-center gap-10 
                font-raleway font-[800] text-[18px] 
                max-xl:gap-4  max-lg:font-[500] max-lg:text-[14px] ">
                    {navLinks.map((link, index) => (
                        <li key={index} >
                            <a onClick={()=>{handleActiveLink(link.href)}}
                            className={`hover:text-[#E4B40D] ${activeLink === link.href? "text-[#E4B40D]":"text-[#ffffff] "  } `}
                             href={link.href}>{link.label}</a></li>
                    ))}
                </ul>
            </nav>

            <div className="max-md:hidden">
                <button className="w-[169px] h-[47px] rounded-[100px] bg-gradient
                 text-[#111111] font-raleway font-[800] text-[14px] hover:text-[white] ">Connect Wallet</button>
            </div>

            <div className="hidden max-md:block ">
                <button onClick={openMenu} className="bg-[transparent]"><img src="/hamburger1.png" alt="menu-button" /></button>
            </div>

            <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    )
}