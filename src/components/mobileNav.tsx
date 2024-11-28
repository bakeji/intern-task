type mobileNavProps = {
    isOpen : boolean,
    setIsOpen : (isOpen:boolean) => void
}
export default function MobileNav({isOpen, setIsOpen}:mobileNavProps){
    const closeMenu = () => {
        setIsOpen(false)
        
    }

    return(
    <div className={`
          fixed inset-0 bg-[#071624] z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex mt-5  items-center justify-between  p-4 ">
            <a href="/"><img src="/logo.png" alt="logo" /></a>
            <button 
            onClick={closeMenu} 
            className="z-50 p-2 focus:outline-none "
            > <img src="/close.png" alt="" />
            </button>
        </div>


        <nav className="flex flex-col h-full  pt-20 px-6 space-y-6">
          <ul className="space-y-6">
            {[
              { href: '/', label: 'Home' },
              { href: '#', label: 'About Us' },
              { href: '#', label: 'Roadmap' },
              { href: '#', label: 'FAQs' },
              { href: '#', label: 'Contact Us' }
            ].map((link, index) => (
              <li 
                key={link.href}
                className={`
                  opacity-0 transform transition-all duration-500 ease-out
                  ${isOpen ? 'opacity-100 translate-y-0' : 'translate-y-10'}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a 
                  href={link.href} 
                  className="text-2xl font-bold text-[#ffffff] hover:text-[#E4B40D] transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

    )
}