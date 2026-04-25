import { BiBuilding, BiGlobe } from 'react-icons/bi';

export const Supporters = () => {
  const partners = [
    { name: 'Govt. of Punjab', icon: <BiBuilding /> },
    { name: 'Govt. of Odisha', icon: <BiBuilding /> },
    { name: 'NIUA', icon: <BiBuilding /> },
    { name: 'Bill & Melinda Gates Foundation', icon: <BiGlobe /> },
    { name: 'USAID', icon: <BiGlobe /> },
    { name: 'AIRAWAT', icon: <BiBuilding /> },
  ];

  return (
    <section className="py-[80px] text-center animate-target" id="supporters">
      <div className="container mx-auto px-4">
        <h2 className="text-[2.2rem] font-bold text-secondary mb-4">Our Partners &amp; Supporters</h2>
        <p className="text-[1.1rem] text-text-muted max-w-2xl mx-auto mb-12">
          Collaborating with governments, NGOs and technology partners to drive digital transformation
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="animate-target">
              <div className="bg-bg-light border border-border p-6 rounded-xl flex flex-col items-center justify-center min-h-[140px] transition-all hover:-translate-y-1 hover:shadow-md hover:border-primary/30 group">
                <div className="text-3xl text-gray-400 mb-3 group-hover:text-primary transition-colors">
                  {partner.icon}
                </div>
                <span className="text-sm font-semibold text-secondary">{partner.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
