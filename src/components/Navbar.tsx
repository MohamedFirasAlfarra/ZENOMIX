import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
import { Menu, X, ArrowRight, Sun, Moon, Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import syriaFlag from '../assets/syria.png';
import americaFlag from '../assets/amrica.png';
import germanFlag from '../assets/Germane.png';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  isDark: boolean;
  onToggleDark: () => void;
}

type Language = 'en' | 'ar' | 'de';

const languageOptions: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: americaFlag },
  { code: 'de', label: 'Deutsch', flag: germanFlag },
  { code: 'ar', label: 'العربية', flag: syriaFlag },
];

export default function Navbar({ onNavigate, activeSection, isDark, onToggleDark }: NavbarProps) {
  const { language, changeLanguage, t, isRtl } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileLangDropdownOpen, setMobileLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const mobileLangDropdownRef = useRef<HTMLDivElement>(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
      if (mobileLangDropdownRef.current && !mobileLangDropdownRef.current.contains(e.target as Node)) {
        setMobileLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { label: t('nav_home'), id: 'home' },
    { label: t('nav_about'), id: 'about' },
    { label: t('nav_services'), id: 'services' },
    { label: t('nav_tracking_tech'), id: 'tracking-tech' },
    { label: t('nav_faq'), id: 'faq' },
    { label: t('nav_contact'), id: 'contact' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const currentLang = languageOptions.find(l => l.code === language)!;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileMenuOpen
          ? isDark ? 'bg-[#101532] border-b border-slate-700/50 shadow-md py-3.5' : 'bg-[#F7FBFD] border-b border-slate-300/50 shadow-md py-3.5'
          : isScrolled
          ? isDark ? 'bg-[#101532]/95 backdrop-blur-md shadow-md border-b border-slate-700/50 py-3.5' : 'bg-[#F7FBFD]/95 backdrop-blur-md shadow-md border-b border-slate-300/50 py-3.5'
          : isDark ? 'bg-[#101532]/90 backdrop-blur-sm border-b border-slate-700/30 py-5' : 'bg-[#F7FBFD]/90 backdrop-blur-sm border-b border-slate-300/30 py-5'
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
            isDark={isDark}
          />

          {/* Desktop Nav Items */}
          <div className={`hidden lg:flex items-center gap-1.5 rounded-full p-1 shadow-sm ${isDark ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-white/50 border border-slate-300/50'}`}>
            {navItems.map((item) => {
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-bold tracking-normal cursor-pointer ${
                    isDark ? 'text-slate-200' : 'text-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Action Area - Quick Track, Lang Dropdown & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-sm transition-all duration-200 cursor-pointer ${
                  isDark 
                    ? 'bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 text-slate-200 hover:text-blue-400' 
                    : 'bg-white/50 hover:bg-slate-100/50 border border-slate-300/50 text-slate-700 hover:text-blue-600'
                }`}
                aria-label="Select language"
                aria-expanded={langDropdownOpen}
              >
                <Globe className={`h-4 w-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                <img src={currentLang.flag} alt="" className="w-6 h-4 object-cover rounded-sm shadow-sm" />
                <span>{currentLang.label}</span>
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {langDropdownOpen && (
                <div className={`absolute top-full mt-2 right-0 w-48 border rounded-2xl shadow-xl overflow-hidden animate-fade-in z-50 ${
                  isDark ? 'bg-slate-900 border-slate-700/50 shadow-slate-950/50' : 'bg-white border-slate-300/50 shadow-slate-200/50'
                }`}>
                  {languageOptions.map((opt) => {
                    const isActive = language === opt.code;
                    return (
                      <button
                        key={opt.code}
                        onClick={() => {
                          changeLanguage(opt.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-all duration-150 cursor-pointer ${
                          isActive
                            ? isDark ? 'bg-blue-950/40 text-blue-400' : 'bg-blue-50 text-blue-600'
                            : isDark ? 'text-slate-300 hover:bg-slate-800/60' : 'text-slate-700 hover:bg-slate-100/60'
                        }`}
                      >
                        <img src={opt.flag} alt="" className="w-6 h-4 object-cover rounded-sm shadow-sm" />
                        <span className="flex-1 text-left">{opt.label}</span>
                        {isActive && <Check className={`h-4 w-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleDark}
              className={`p-2 rounded-full transition-all duration-200 cursor-pointer ${
                isDark 
                  ? 'bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 text-slate-300 hover:text-blue-400' 
                  : 'bg-white/50 hover:bg-slate-100/50 border border-slate-300/50 text-slate-700 hover:text-blue-600'
              }`}
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
            {/* Mobile Language Dropdown */}
            <div className="relative" ref={mobileLangDropdownRef}>
              <button
                onClick={() => setMobileLangDropdownOpen(!mobileLangDropdownOpen)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer flex items-center gap-1 ${
                  isDark 
                    ? 'text-slate-300 hover:text-blue-400 bg-slate-800/50 border border-slate-700/50' 
                    : 'text-slate-700 hover:text-blue-600 bg-white/50 border border-slate-300/50'
                }`}
                aria-label="Select language"
              >
                <Globe className={`h-3 w-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                <img src={currentLang.flag} alt="" className="w-5 h-3.5 object-cover rounded-sm shadow-sm" />
                <ChevronDown className={`h-2.5 w-2.5 transition-transform duration-200 ${mobileLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mobile Dropdown */}
              {/* {mobileLangDropdownOpen && (
                <div className={`absolute top-full mt-1.5 right-0 w-40 border rounded-xl shadow-xl overflow-hidden z-50 ${
                  isDark ? 'bg-slate-900 border-slate-700/50 shadow-slate-950/50' : 'bg-white border-slate-300/50 shadow-slate-200/50'
                }`}>
                  {languageOptions.map((opt) => {
                    const isActive = language === opt.code;
                    return (
                      <button
                        key={opt.code}
                        onClick={() => {
                          changeLanguage(opt.code);
                          setMobileLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold transition-all duration-150 cursor-pointer ${
                          isActive
                            ? isDark ? 'bg-blue-950/40 text-blue-400' : 'bg-blue-50 text-blue-600'
                            : isDark ? 'text-slate-300 hover:bg-slate-800/60' : 'text-slate-700 hover:bg-slate-100/60'
                        }`}
                      >
                        <img src={opt.flag} alt="" className="w-5 h-3.5 object-cover rounded-sm shadow-sm" />
                        <span className="flex-1 text-left">{opt.label}</span>
                        {isActive && <Check className={`h-3.5 w-3.5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />}
                      </button>
                    );
                  })}
                </div>
              )} */}
            </div>

            {/* Mobile Theme Toggle */}
            <button
              onClick={onToggleDark}
              className={`p-1.5 rounded-lg cursor-pointer ${
                isDark 
                  ? 'text-slate-300 hover:text-blue-400 bg-slate-800/50 border border-slate-700/50' 
                  : 'text-slate-700 hover:text-blue-600 bg-white/50 border border-slate-300/50'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-[18px] w-[18px] text-amber-500" /> : <Moon className="h-[18px] w-[18px] text-slate-600" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 rounded-lg cursor-pointer ${
                isDark 
                  ? 'text-slate-300 hover:text-blue-400 bg-slate-800/50 border border-slate-700/50' 
                  : 'text-slate-700 hover:text-blue-600 bg-white/50 border border-slate-300/50'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isRtl ? 100 : -100 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className={`lg:hidden fixed inset-x-0 bottom-0 top-[58px] z-40 border-t shadow-2xl ${
              isDark ? 'bg-[#101532] border-slate-700/50' : 'bg-[#F7FBFD] border-slate-300/50'
            }`}
          >
            <div className={`flex flex-col h-full -mt-10 overflow-hidden ${isDark ? 'bg-[#101532]' : 'bg-[#F7FBFD]'}`}>
              {/* Header with close button */}
              <div className={`flex items-center justify-between px-6 py-4 border-b ${isDark ? 'border-slate-700/50' : 'border-slate-300/50'}`}>
                <div className={`flex items-center gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <Logo size="sm" isDark={isDark} />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2 rounded-xl cursor-pointer transition-all duration-200 ${
                    isDark ? 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50' : 'bg-white/50 text-slate-700 hover:bg-slate-100/50'
                  }`}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
                {navItems.map((item, index) => {
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full ${isRtl ? 'text-right' : 'text-left'} px-5 py-4 rounded-2xl text-sm font-bold tracking-normal cursor-pointer border ${
                        isDark ? 'bg-slate-800/50 text-slate-200 border-slate-700/50' : 'bg-white/60 text-slate-700 border-slate-300/50'
                      }`}
                    >
                      {item.label}
                    </motion.button>
                  );
                })}
              </div>

              {/* Footer with language and track button */}
              <div className={`p-6 border-t space-y-4 ${isDark ? 'border-slate-700/50 bg-slate-900/50' : 'border-slate-300/50 bg-white/50'}`}>
                {/* Language Switch - Single button with dropdown */}
                <div className="relative" ref={mobileLangDropdownRef}>
                  <button
                    onClick={() => setMobileLangDropdownOpen(!mobileLangDropdownOpen)}
                    className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl text-sm font-bold cursor-pointer border transition-all duration-300 ${
                      isDark ? 'bg-slate-800/50 border-slate-700/50 text-slate-200 hover:bg-slate-700/50' : 'bg-white/60 border-slate-300/50 text-slate-700 hover:bg-white/80'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img src={currentLang.flag} alt="" className="w-6 h-4 object-cover rounded-sm shadow-sm" />
                      <span>{currentLang.label}</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform300 ${mobileLangDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {mobileLangDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute bottom-full mb-2 left-0 right-0 border rounded-2xl shadow-xl overflow-hidden z-50 ${
                          isDark ? 'bg-slate-900 border-slate-700/50' : 'bg-white border-slate-300/50'
                        }`}
                      >
                        {languageOptions.map((opt) => {
                          const isActive = language === opt.code;
                          return (
                            <button
                              key={opt.code}
                              onClick={() => {
                                changeLanguage(opt.code);
                                setMobileLangDropdownOpen(false);
                              }}
                              className={`w-full flex items-center gap-3 px-5 py-3 text-sm font-semibold transition-all duration-150 cursor-pointer ${
                                isActive
                                  ? isDark ? 'bg-blue-950/40 text-blue-400' : 'bg-blue-50 text-blue-600'
                                  : isDark ? 'text-slate-300 hover:bg-slate-800/60' : 'text-slate-700 hover:bg-slate-100/60'
                              }`}
                            >
                              <img src={opt.flag} alt="" className="w-6 h-4 object-cover rounded-sm shadow-sm" />
                              <span className="flex-1 text-left">{opt.label}</span>
                              {isActive && <Check className={`h-4 w-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />}
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => handleItemClick('tracker')}
                  className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-2xl shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                >
                  {t('nav_track_btn')}
                  <ArrowRight className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
