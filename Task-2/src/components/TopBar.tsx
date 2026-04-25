import { useState, useEffect, useRef } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const languages = [
  { label: 'Eng', value: 'en', flag: '🇬🇧' },
  { label: 'हिन्दी', value: 'hi', flag: '🇮🇳' },
  { label: 'ಕನ್ನಡ', value: 'kn', flag: '🇮🇳' },
];

export const TopBar = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 👉 Outside click handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="hidden lg:block bg-[#e6f3fb] py-1 text-sm font-semibold text-[#1577dd]">
      <div className="container mx-auto px-4 flex justify-end items-center">
        <a href="#" className="mr-6 hover:text-[#3f4857]">Events</a>
        <a href="#" className="mr-6 hover:text-[#3f4857]">Contact us</a>

        {/* 👇 Wrap with ref */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 bg-white border border-[#cfe6fb] px-3 py-1 rounded-full text-[13px] min-w-[80px] justify-between hover:bg-[#f5fbff] cursor-pointer"
          >
            <span className="flex items-center gap-1">
              <span>{selected.flag}</span>
              {selected.label}
            </span>

            <BiChevronDown
              className={`transition-transform ${open ? 'rotate-180' : ''}`}
            />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 min-w-[140px] bg-white border border-gray-100 rounded-xl shadow-lg z-1000! cursor-pointer">
              {languages.map((lang) => (
                <button
                  key={lang.value}
                  onClick={() => {
                    setSelected(lang);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-[#f5fbff] ${selected.value === lang.value ? 'bg-[#eef7ff]' : ''
                    }`}
                >
                  <span>{lang.flag}</span>
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};