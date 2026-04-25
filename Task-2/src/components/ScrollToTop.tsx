import { useState, useEffect } from 'react';
import { BiUpArrowAlt } from 'react-icons/bi';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const featuresSection = document.getElementById('features');
      if (featuresSection) {
        // Calculate the bottom of the features section
        const featuresBottom = featuresSection.offsetTop + featuresSection.offsetHeight;
        if (window.scrollY > featuresBottom) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else if (window.scrollY > 800) {
        // Fallback
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    // Initial check
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 bg-[#00c2cb] text-white rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(0,194,203,0.4)] transition-all duration-500 z-[999] hover:bg-[#00aeb6] hover:-translate-y-1 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      aria-label="Scroll to top"
    >
      <BiUpArrowAlt size={28} />
    </button>
  );
};
