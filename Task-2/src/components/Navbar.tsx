import { useState, useEffect, useRef } from 'react';
import { BiChevronDown, BiSearch, BiMenu, BiX } from 'react-icons/bi';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>('About Us'); // Default open for demonstration
  const [langOpen, setLangOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearch]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle resize to close mobile menu and restore scrolling
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileOpen]);

  const navItems = [
    { title: "About Us", items: ['Who We Are', 'Our Impact', 'Our Approach', 'Our People', 'Awards & Recognition', 'Work with us', 'Contact Us'] },
    { title: "Areas of work", items: ['Local Governance', 'Water & Sanitation', 'Public Health', 'Public Finance', 'Justice Delivery', 'Other Sectors'] },
    { title: "Products & Solutions", wide: true, items: ['Citizen Complaint Resolution', 'Property Tax System', 'Water & Sewerage', 'Health Campaign (HCM)', '10 Bed ICU', 'Social Benefit Delivery'] },
    { title: "Our Platform", items: ['DIGIT'] },
    { title: "Ecosystem", items: ['Partnerships', 'Academy', 'COE', 'Community'] },
    { title: "Resources", items: ['Articles', 'Whitepapers', 'Strategy Papers', 'Case Studies', 'News & Media', 'Videos', 'Newsletters'] },
  ];

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <nav className={`bg-white transition-all duration-300 z-[999] ${scrolled ? 'fixed top-0 left-0 w-full shadow-md animate-[slideDown_0.5s_ease]' : 'relative py-2.5'}`}>
      <div className="container mx-20 px-4 flex justify-between items-center h-[60px]">

        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img src="/assets/eGov-Foundation.png" alt="eGov Foundation" className="h-10 object-contain" />
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-3xl text-secondary"
          onClick={() => setMobileOpen(true)}
        >
          <BiMenu />
        </button>

        {/* Nav Items - Desktop */}
        <div className="hidden lg:flex items-center flex-1 justify-center">
          <ul className="flex flex-row list-none mx-auto p-0 m-0">
            {navItems.map((nav, idx) => (
              <li key={idx} className="relative group mx-1">
                <a href="#" className="flex items-center text-secondary font-medium text-base px-4 py-2.5 transition-colors hover:text-primary relative after:content-[''] after:absolute after:bottom-1 after:left-4 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-[calc(100%-32px)]">
                  {nav.title} <BiChevronDown className="ml-1 text-primary transition-transform duration-300 group-hover:rotate-180" />
                </a>
                <ul className={`absolute top-full left-1/2 -translate-x-1/2 bg-white ${nav.wide ? 'min-w-[280px]' : 'min-w-[220px]'} py-4 shadow-xl opacity-0 invisible translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-[100] list-none`}>
                  {nav.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <a href="#" className="block px-6 py-2.5 text-text-muted text-sm transition-all hover:text-primary hover:pl-7">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          {/* Search Icon */}
          <button className="text-secondary text-xl p-2 transition-colors hover:text-primary mr-10 cursor-pointer">
            <BiSearch onClick={() => setIsSearch(true)} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[1000] overflow-y-auto transition-transform duration-300 lg:hidden ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        {/* Mobile Header */}
        <div className="flex items-center justify-between px-5 h-[76px] border-b-[3px] border-primary">
          <img src="/assets/eGov-Foundation.png" alt="eGov Foundation" className="h-[42px] object-contain" />

          <div className="flex items-center gap-5">
            {/* Lang Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-[#1577dd] font-bold text-[15px]"
              >
                <span className="text-[20px] leading-none">🇬🇧</span> ENG <BiChevronDown className={`text-lg transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <ul className="absolute top-full right-0 bg-white min-w-[120px] shadow-lg rounded mt-2 py-2 list-none z-50 border border-gray-100">
                  <li><a href="#" className="flex items-center gap-2 px-4 py-2 text-[#1577dd] bg-gray-50 text-sm"><span className="text-base">🇬🇧</span> English</a></li>
                  <li><a href="#" className="flex items-center gap-2 px-4 py-2 text-[#1577dd] hover:bg-gray-50 text-sm"><span className="text-base">🇮🇳</span> हिन्दी</a></li>
                  <li><a href="#" className="flex items-center gap-2 px-4 py-2 text-[#1577dd] hover:bg-gray-50 text-sm"><span className="text-base">🇮🇳</span> ಕನ್ನಡ</a></li>
                </ul>
              )}
            </div>

            {/* Close Button */}
            <button
              className="text-2xl text-black bg-[#f4f5f7] hover:bg-gray-200 transition-colors w-10 h-10 flex items-center justify-center rounded-md font-bold"
              onClick={() => setMobileOpen(false)}
            >
              <BiX />
            </button>
          </div>
        </div>

        {/* Mobile Nav Links */}
        <div className="flex flex-col pb-10">
          {navItems.map((nav, idx) => {
            const isOpen = openMobileMenu === nav.title;
            return (
              <div key={idx} className="border-b-[1.5px] border-white">
                <button
                  onClick={() => setOpenMobileMenu(isOpen ? null : nav.title)}
                  className={`w-full flex items-center justify-between px-6 py-4 text-left font-medium transition-colors ${isOpen ? 'bg-[#f6f8fb] text-primary' : 'bg-[#f6f8fb] text-black'}`}
                >
                  <span className="text-[17px] tracking-wide">{nav.title}</span>
                  <BiChevronDown className={`text-2xl transition-transform ${isOpen ? 'rotate-180 text-primary' : 'text-primary'}`} />
                </button>

                {/* Mobile Submenu */}
                {isOpen && (
                  <ul className="list-none m-0 py-3 bg-white">
                    {nav.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <a href="#" className="block px-8 py-[10px] text-[15px] text-[#333333] hover:text-primary transition-colors">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {isSearch && (
        <div
          className="fixed inset-0 bg-black/40 flex flex-col justify-center items-center z-[9999] backdrop-blur-sm transition-all duration-300 animate-popup"
          onClick={() => setIsSearch(false)}
        >
          <div
            className="w-full max-w-3xl px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              ref={inputRef}
              placeholder="Search..."
              type="text"
              className="w-full bg-transparent text-white text-2xl placeholder-white/70 border-b border-white outline-none pb-3 tracking-wide"
            />
          </div>
        </div>
      )}
    </nav>
  );
};