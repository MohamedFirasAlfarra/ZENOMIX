import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, ArrowRight, Sun, Moon, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  isDark: boolean;
  onToggleDark: () => void;
}

export default function Navbar({ onNavigate, activeSection, isDark, onToggleDark }: NavbarProps) {
  const { language, changeLanguage, t, isRtl } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav_home'), id: 'home' },
    { label: t('nav_services'), id: 'services' },
    { label: t('nav_calculator'), id: 'calculator' },
    { label: t('nav_tracker'), id: 'tracker' },
    { label: t('nav_fleet'), id: 'fleet' },
    { label: t('nav_about'), id: 'about' },
    { label: t('nav_contact'), id: 'contact' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileMenuOpen
          ? 'bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-md py-3.5'
          : isScrolled
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-800/80 py-3.5'
          : 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm border-b border-slate-100 dark:border-slate-900 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Logo
            size="md"
            className="cursor-pointer"
            onClick={() => handleItemClick('home')}
            lightText={false}
          />

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full p-1 shadow-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-bold tracking-normal transition-all duration-250 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-md shadow-blue-500/15'
                      : 'text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-900/80'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Action Area - Quick Track, Lang Toggle & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => changeLanguage(language === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-sm transition-all duration-200 cursor-pointer"
              title={language === 'en' ? 'تغيير اللغة إلى العربية' : 'Switch to English'}
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleDark}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 cursor-pointer"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-[18px] w-[18px] text-amber-500" /> : <Moon className="h-[18px] w-[18px] text-slate-600" />}
            </button>

            <button
              onClick={() => handleItemClick('tracker')}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm tracking-wide px-5 py-2 rounded-full shadow-md shadow-blue-500/15 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              {t('nav_track_btn')}
              <ArrowRight className={`h-[18px] w-[18px] transition-transform ${isRtl ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Mobile Actions Container */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile Language Toggle */}
            <button
              onClick={() => changeLanguage(language === 'en' ? 'ar' : 'en')}
              className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 cursor-pointer flex items-center gap-1"
              aria-label="Toggle language"
            >
              <Globe className="h-3 w-3 text-blue-500" />
              <span>{language === 'en' ? 'عربي' : 'EN'}</span>
            </button>

            {/* Mobile Theme Toggle */}
            <button
              onClick={onToggleDark}
              className="p-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-[18px] w-[18px] text-amber-500" /> : <Moon className="h-[18px] w-[18px]" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 bottom-0 top-[58px] z-40 bg-white dark:bg-slate-950 animate-fade-in border-t border-slate-200 dark:border-slate-800 shadow-2xl">
          <div className="flex flex-col p-6 space-y-3 h-full overflow-y-auto pb-32 bg-white dark:bg-slate-950">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full ${isRtl ? 'text-right' : 'text-left'} px-5 py-3.5 rounded-2xl text-sm font-bold tracking-normal transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/10'
                      : 'bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-200 border-transparent hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
              {/* Language Switch inside menu */}
              <button
                onClick={() => {
                  changeLanguage(language === 'en' ? 'ar' : 'en');
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs py-3.5 rounded-2xl cursor-pointer"
              >
                <Globe className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>{language === 'en' ? 'التحويل إلى العربية' : 'Switch to English'}</span>
              </button>

              <button
                onClick={() => handleItemClick('tracker')}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-2xl shadow-lg cursor-pointer"
              >
                {t('nav_track_btn')}
                <ArrowRight className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
