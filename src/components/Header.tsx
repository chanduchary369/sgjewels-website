import { ArrowLeft, Menu, X } from 'lucide-react';
import { useState } from 'react';

type Section =
  | 'home'
  | 'gold'
  | 'silver'
  | 'finance'
  | 'knowledge'
  | 'calculator';

interface HeaderProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
  onBack: () => void;
  canGoBack: boolean;
}

function Header({
  activeSection,
  onNavigate,
  onBack,
  canGoBack,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems: { label: string; section: Section }[] = [
    { label: 'Home', section: 'home' },
    { label: 'Gold', section: 'gold' },
    { label: 'Silver', section: 'silver' },
    { label: 'Customer Services', section: 'finance' },
    { label: 'Gold Value', section: 'calculator' },
    { label: 'Knowledge', section: 'knowledge' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#521014] border-b border-[#E8D8B0]/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP BAR */}
        <div className="flex items-center justify-between py-4">
          {/* Back Button */}
          {canGoBack ? (
            <button
              onClick={onBack}
              className="p-2 rounded-lg text-[#D9A538] hover:bg-[#D9A538]/10 transition"
              aria-label="Go back"
            >
              <ArrowLeft size={24} />
            </button>
          ) : (
            <div className="w-10" />
          )}

          {/* LOGO + BRAND */}
         <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
  <img
    src="https://res.cloudinary.com/dzjuo6uxx/image/upload/ChatGPT_Image_Jan_12_2026_at_12_16_45_AM_gxzqxh.jpg"
    alt="Sri Ganesh Jewellers Logo"
    className="h-14 sm:h-16 lg:h-20 w-auto object-contain"
  />

  <div className="leading-tight">
    <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#D9A538] font-serif whitespace-nowrap">
      Sri Ganesh Jewellers
    </h1>
    <p className="text-[#D9A538]/80 text-xs sm:text-sm italic">
      Where trust meets tradition
    </p>
  </div>
</div>


          {/* MOBILE MENU ICON */}
          <div className="sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#D9A538]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden sm:flex justify-center gap-6 pb-4">
          {menuItems.map((item) => (
            <button
              key={item.section}
              onClick={() => onNavigate(item.section)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeSection === item.section
                  ? 'bg-[#D9A538] text-[#380106] shadow-md shadow-[#D9A538]/40'
                  : 'text-[#D9A538] hover:bg-[#D9A538]/10 hover:scale-105'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* MOBILE MENU DROPDOWN */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-[#D9A538]/20 pb-4">
            <div className="flex flex-col items-center gap-3 mt-4">
              {menuItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => {
                    onNavigate(item.section);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-11/12 py-3 rounded-lg font-medium transition ${
                    activeSection === item.section
                      ? 'bg-[#D9A538] text-[#380106]'
                      : 'text-[#D9A538] hover:bg-[#D9A538]/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
