import { BiRightArrowAlt, BiLogoTwitter, BiLogoLinkedin, BiLogoYoutube, BiLogoFacebook } from 'react-icons/bi';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-20 pb-0 mt-auto" id="footer">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 mb-12">

          {/* Column 1: Brand */}
          <div className="w-full lg:w-4/12 md:w-6/12 px-4 mb-8 lg:mb-0">
            <div className="mb-6">
              <img src="/assets/eGov-Foundation.png" alt="eGov Foundation" className="h-12 bg-white p-2 rounded mb-4" />
              <p className="text-white/80 text-sm mb-6 leading-relaxed max-w-sm">
                Catalysing digital transformation in public service delivery at speed &amp; scale.
              </p>
              <div className="flex gap-3">
                <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-colors hover:bg-primary">
                  <BiLogoTwitter size={20} />
                </a>
                <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-colors hover:bg-primary">
                  <BiLogoLinkedin size={20} />
                </a>
                <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-colors hover:bg-primary">
                  <BiLogoYoutube size={20} />
                </a>
                <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-colors hover:bg-primary">
                  <BiLogoFacebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="w-full lg:w-3/12 md:w-6/12 px-4 mb-8 lg:mb-0">
            <h5 className="text-xl font-bold mb-6 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-primary">
              Useful Links
            </h5>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors text-sm">Home</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors text-sm">Our Impact</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors text-sm">DIGIT Sandbox</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors text-sm">Our People</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors text-sm">Financials</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Subscribe */}
          <div className="w-full lg:w-5/12 px-4">
            <h5 className="text-xl font-bold mb-6 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-primary">
              Subscribe Now
            </h5>
            <p className="text-white/80 text-sm mb-4">Stay updated with our latest news and insights.</p>
            <form onSubmit={(e) => e.preventDefault()} className="relative max-w-md">
              <div className="flex bg-white/10 rounded-full p-1 border border-white/20 focus-within:border-primary transition-colors">
                <input 
                  type="email" 
                  className="bg-transparent border-none text-white px-4 py-2 w-full focus:outline-none text-sm placeholder:text-white/50" 
                  placeholder="Enter your email address" 
                  aria-label="Email address" 
                />
                <button type="submit" className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-primary-hover shrink-0">
                  <BiRightArrowAlt size={20} />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p className="m-0">&copy; 2024. eGov Foundation. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/60 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-primary transition-colors">Terms and Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
