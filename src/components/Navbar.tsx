import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Rocket, Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`
        fixed w-full z-50 transition-all duration-300 
        ${isScrolled ? "bg-primary-dark/90 backdrop-blur-sm py-4" : "bg-transparent py-6"}
      `}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <Rocket 
              className="w-8 h-8 text-primary transform rotate-45 transition-transform group-hover:-translate-y-1" 
            />
            <div className="absolute -bottom-1 left-1/2 w-4 h-4 bg-primary/20 blur-lg rounded-full transform -translate-x-1/2 group-hover:h-6 transition-all"></div>
          </div>
          <span className="text-2xl font-bold gradient-text tracking-wider">Deepvoid</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {["games", "about", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative text-sm font-medium text-gray-200 hover:text-primary transition-colors duration-200 group"
              >
                {t(`${item}.title`)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <div className="pl-6 border-l border-gray-700">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="relative">
            {isMenuOpen ? (
              <X size={24} className="text-primary animate-in fade-in" />
            ) : (
              <Menu size={24} className="text-primary animate-in fade-in" />
            )}
          </div>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-primary-dark/95 backdrop-blur-sm py-6 md:hidden animate-in fade-in slide-in-from-top">
            <div className="container mx-auto px-4 flex flex-col gap-6">
              {["games", "about", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-lg font-medium text-gray-200 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(`${item}.title`)}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-700">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};