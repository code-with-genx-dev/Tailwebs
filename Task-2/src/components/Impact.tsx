export const Impact = () => {
  return (
    <section className="p-0 bg-secondary relative animate-target" id="impact">
      <div 
        className="py-[120px] lg:py-[210px] relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/Map-Hover-1.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#4b4b4d4e] to-[#3c3e41d9]"></div>
        
        <div className="container mx-auto relative z-10 text-center text-white px-4">
          <h2 className="text-5xl lg:text-[5rem] font-extrabold text-primary mb-0 leading-none drop-shadow-md">
            1,000,000,000
          </h2>
          <p className="text-lg lg:text-[1.2rem] font-medium mb-[48px] opacity-90">
            Citizens availing public services through eGov's Digital Public Goods (DPG)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/10 pt-8">
            <div className="animate-target">
              <div className="text-[2.5rem] font-bold text-white mb-1">1.1 Billion+</div>
              <p className="text-white/70 text-base">Public services delivered</p>
            </div>
            <div className="animate-target">
              <div className="text-[2.5rem] font-bold text-white mb-1">50+ Partners</div>
              <p className="text-white/70 text-base">From technology, governments and NGOs</p>
            </div>
            <div className="animate-target">
              <div className="text-[2.5rem] font-bold text-white mb-1">210+ Cities</div>
              <p className="text-white/70 text-base">Across multiple states in India</p>
            </div>
            <div className="animate-target">
              <div className="text-[2.5rem] font-bold text-white mb-1">2 Bn+</div>
              <p className="text-white/70 text-base">Digital transactions processed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
