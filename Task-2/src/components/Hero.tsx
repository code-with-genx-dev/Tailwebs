export const Hero = () => {
  return (
    <section className="p-0 overflow-hidden bg-bg-white" id="hero">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-stretch">

          <div
            className="w-full lg:w-1/2 order-1 lg:order-2 bg-cover bg-top bg-no-repeat min-h-[400px] lg:min-h-[520px]"
            style={{ backgroundImage: "url('/assets/New-Home-Page-Banner-Image.png')" }}
          ></div>

          <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center py-20 px-8 lg:px-12 xl:pl-[160px] xl:pr-12 lg:-mt-10">
            <h1 className="text-[32px] lg:text-[42px] font-light text-secondary tracking-wide leading-tight">
              20 years of digital transformation in<br className="hidden lg:block" />public service delivery
            </h1>
            <span className="text-secondary text-[48px] lg:text-[60px] block font-bold mb-2">
              It's possible.
            </span>
            <p className="text-[1.05rem] text-text-muted max-w-[90%]">
              Catalysts. Ecosystem enablers. Problem Solvers. At eGov, we're driven by the power of open digital
              infrastructure and ecosystems to enable governments deliver accessible, inclusive and transparent services
              to every citizen.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <a href="#" className="btn-hero-primary">Our Approach</a>
              <a href="#" className="btn-hero-outline">Our Impact</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};