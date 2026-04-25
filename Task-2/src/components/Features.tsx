import { useState } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';

export const Features = () => {
  const [activeItem, setActiveItem] = useState('Public Health');
  
  const listItems = [
    'Public Health',
    'Public Finance',
    'Local Governance',
    'Water & Sanitation',
    'Justice Delivery'
  ];

  return (
    <section className="bg-white rounded-[24px] py-16 px-12 relative z-20 -mt-[100px] lg:mx-[100px] mx-4 shadow-[11px_11px_26px_1px_rgba(0,0,0,0.16)] animate-target" id="features">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          
          {/* Left: Title + List */}
          <div className="w-full lg:w-1/3 animate-target">
            <h2 className="text-[2.2rem] mb-8 leading-[1.3] text-secondary font-light">
              Big problems need <strong className="font-extrabold">bold approaches</strong>
            </h2>
            <ul className="list-none p-0 m-0">
              {listItems.map((item) => (
                <li 
                  key={item}
                  onClick={() => setActiveItem(item)}
                  className={`text-base font-semibold py-3 px-6 mb-3 rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center border-2 border-secondary text-center ${activeItem === item ? 'bg-secondary text-white' : 'bg-transparent text-secondary hover:bg-secondary hover:text-white'}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Center: Feature Card 1 */}
          <div className="w-full md:w-1/2 lg:w-1/3">
            <article className="rounded-2xl overflow-hidden transition-all duration-300 h-[340px] flex flex-col relative group hover:-translate-y-1.5 hover:shadow-2xl bg-gradient-to-br from-[#3ecfcf] to-[#29b5b5] animate-target">
              <div className="p-6 text-left relative z-10 flex flex-col items-start h-full">
                <h3 className="text-5xl text-white font-extrabold mb-1 leading-none">210+</h3>
                <p className="text-[0.95rem] text-white/90 font-medium mb-6 max-w-[55%]">cities LIVE with 10BedICU across India</p>
                <a href="#" className="font-semibold text-sm inline-flex items-center gap-1.5 bg-white/95 text-secondary px-5 py-2 rounded-full mt-auto transition-colors hover:bg-white">
                  Read More <BiRightArrowAlt className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
              <div className="absolute bottom-0 right-0 w-[75%] h-[75%] flex items-end justify-end overflow-hidden">
                <img src="/assets/ICU-Equipment.G16.2k-1-3.png" alt="10 Bed ICU" className="w-full h-full object-contain object-bottom-right transition-transform duration-300 group-hover:scale-105" />
              </div>
            </article>
          </div>

          {/* Right: Feature Card 2 */}
          <div className="w-full md:w-1/2 lg:w-1/3">
            <article className="rounded-2xl overflow-hidden transition-all duration-300 h-[340px] flex flex-col relative group hover:-translate-y-1.5 hover:shadow-2xl bg-gradient-to-br from-[#3b9fe8] to-[#1a7dd4] animate-target">
              <div className="p-6 text-left relative z-10 flex flex-col items-start h-full">
                <h3 className="text-5xl text-white font-extrabold mb-1 leading-none">2 Bn</h3>
                <p className="text-[0.95rem] text-white/90 font-medium mb-6 max-w-[55%]">COVID-19 vaccination certificates issued</p>
                <a href="#" className="font-semibold text-sm inline-flex items-center gap-1.5 bg-white/95 text-secondary px-5 py-2 rounded-full mt-auto transition-colors hover:bg-white">
                  Read More <BiRightArrowAlt className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
              <div className="absolute bottom-0 right-0 w-[75%] h-[75%] flex items-end justify-end overflow-hidden">
                <img src="/assets/covid-vaccine-1.png" alt="Health Campaign Management" className="w-full h-full object-contain object-bottom-right transition-transform duration-300 group-hover:scale-105" />
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
};
