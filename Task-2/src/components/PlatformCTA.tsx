import { BiRightArrowAlt } from 'react-icons/bi';

export const PlatformCTA = () => {
  return (
    <section className="bg-secondary text-white py-[80px] rounded-[40px] mx-6 animate-target" id="platform">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left: Content */}
          <div className="w-full lg:w-1/2 animate-target">
            <span className="inline-block bg-white/10 px-4 py-1.5 rounded-full text-[0.85rem] font-semibold tracking-wide uppercase mb-6 text-primary">
              Open Source Platform
            </span>
            <h2 className="text-white text-[2.5rem] mb-6 font-bold leading-tight">
              Our open source technology-for-good platform
            </h2>
            <p className="text-[1.1rem] text-white/80 mb-8">
              DIGIT, short for Digital Infrastructure for Governance, Inclusion and Transformation is eGov's open-source
              platform with reusable building blocks and shared data registries that can be used to build solutions in
              multiple sectors.
            </p>
            <a href="#" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 hover:bg-white hover:text-secondary">
              Explore the platform <BiRightArrowAlt />
            </a>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2 text-center animate-target">
            <img src="/assets/DIGIT-Image-Only.png" alt="DIGIT Platform" className="max-w-full h-auto" />
          </div>

        </div>
      </div>
    </section>
  );
};
