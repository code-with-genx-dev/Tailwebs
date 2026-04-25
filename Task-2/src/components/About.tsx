import { BiRightArrowAlt } from 'react-icons/bi';

export const About = () => {
  return (
    <section className="py-[120px]" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left: Images */}
          <div className="w-full lg:w-1/2 animate-target">
            <div className="relative min-h-[400px]">
              <img 
                src="/assets/Elected-Representative-Thumb.webp" 
                alt="Elected Representatives" 
                className="w-[75%] absolute top-0 left-0 z-10 rounded-2xl shadow-xl" 
              />
              <img 
                src="/assets/Map-Hover-1.png" 
                alt="Impact Map" 
                className="w-[50%] absolute -bottom-8 right-0 z-20 rounded-2xl shadow-xl border-[8px] border-white" 
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 animate-target mt-12 lg:mt-0">
            <h2 className="text-[2.5rem] mb-6 font-light">
              20 years of reimagining for citizens and <strong className="text-primary font-bold">sustaining change</strong>
            </h2>
            <p className="text-[1.1rem] text-text-muted mb-6">
              Technology is powerful, but is only one piece of the puzzle, when it comes to enhancing the quality of
              life for every citizen. To have sustainable impact at scale, the collective energy of local networks to
              solve local problems needs to be tapped into.
            </p>
            <p className="text-[1.1rem] text-text-muted mb-6">
              Our partners &amp; networks bring this collective energy to life. The ecosystem already exists; our task
              is to facilitate and amplify their efforts. For 20 years, we've been turning small steps into lasting,
              meaningful change.
            </p>
            <a href="#" className="btn-text">
              About Us <BiRightArrowAlt />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
