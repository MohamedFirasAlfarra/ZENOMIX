import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
import { Menu, X, ArrowRight, Sun, Moon, Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import syriaFlag from '../assets/syria.png';
import americaFlag from '../assets/amrica.png';
import germanFlag from '../assets/Germane.png';
import logoDesktop from '../assets/zenomix-logo.png';
import logoMobile from '../assets/zenomix-icon.png';

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
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
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
    setHamburgerOpen(false);
  };

  const handleHamburgerClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setHamburgerOpen(!hamburgerOpen);
  };

  const currentLang = languageOptions.find(l => l.code === language)!;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        mobileMenuOpen
          ? isDark ? 'bg-[#101532] border-b border-slate-700/50 shadow-2xl py-4' : 'bg-[#F7FBFD] border-b border-slate-300/50 shadow-2xl py-4'
          : isScrolled
          ? isDark ? 'bg-[#101532]/95 backdrop-blur-xl shadow-lg border-b border-slate-700/50 py-4' : 'bg-[#F7FBFD]/95 backdrop-blur-xl shadow-lg border-b border-slate-300/50 py-4'
          : isDark ? 'bg-[#101532]/90 backdrop-blur-sm border-b border-slate-700/30 py-6' : 'bg-[#F7FBFD]/90 backdrop-blur-sm border-b border-slate-300/30 py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo - Desktop and Mobile */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleItemClick('home')}>
            <img 
              src={logoDesktop} 
              alt="Zenomix Logo" 
              className="hidden md:block h-12 w-auto transition-transform hover:scale-105 duration-300"
            />
            <img 
              src={logoMobile} 
              alt="Zenomix Logo" 
              className="md:hidden h-10 w-auto transition-transform hover:scale-105 duration-300"
            />
          </div>

          {/* Desktop Nav Items */}
          <div className={`hidden lg:flex items-center gap-2 rounded-2xl p-1.5 shadow-lg ${isDark ? 'bg-slate-800/60 border border-slate-700/60' : 'bg-white/60 border border-slate-300/60'}`}>
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold tracking-normal transition-all duration-300 cursor-pointer relative ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                      : isDark ? 'text-slate-200 hover:text-blue-400 hover:bg-slate-700/50' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div 
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Action Area - Quick Track, Lang Dropdown & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <motion.button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer ${
                  isDark 
                    ? 'bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/60 text-slate-200 hover:text-blue-400' 
                    : 'bg-white/60 hover:bg-slate-100/60 border border-slate-300/60 text-slate-700 hover:text-blue-600'
                }`}
                aria-label="Select language"
                aria-expanded={langDropdownOpen}
              >
                <Globe className={`h-4 w-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                <img src={currentLang.flag} alt="" className="w-6 h-4 object-cover rounded-sm shadow-sm" />
                <span>{currentLang.label}</span>
                <motion.div
                  animate={{ rotate: langDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-3.5 w-3.5" />
                </motion.div>
              </motion.button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-full mt-2 right-0 w-52 border rounded-2xl shadow-2xl overflow-hidden z-50 ${
                      isDark ? 'bg-slate-900 border-slate-700/60 shadow-slate-950/60' : 'bg-white border-slate-300/60 shadow-slate-200/60'
                    }`}
                  >
                    {languageOptions.map((opt) => {
                      const isActive = language === opt.code;
                      return (
                        <motion.button
                          key={opt.code}
                          onClick={() => {
                            changeLanguage(opt.code);
                            setLangDropdownOpen(false);
                          }}
                          whileHover={{ x: 5 }}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                            isActive
                              ? isDark ? 'bg-blue-950/50 text-blue-400' : 'bg-blue-50 text-blue-600'
                              : isDark ? 'text-slate-300 hover:bg-slate-800/70' : 'text-slate-700 hover:bg-slate-100/70'
                          }`}
                        >
                          <img src={opt.flag} alt="" className="w-6 h-4 object-cover rounded-sm shadow-sm" />
                          <span className="flex-1 text-left">{opt.label}</span>
                          {isActive && <Check className={`h-4 w-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />}
                        </motion.button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle Button */}
            <motion.button
              onClick={onToggleDark}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2.5 rounded-xl transition-all duration-300 cursor-pointer ${
                isDark 
                  ? 'bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/60 text-slate-300 hover:text-blue-400' 
                  : 'bg-white/60 hover:bg-slate-100/60 border border-slate-300/60 text-slate-700 hover:text-blue-600'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              <motion.div
                animate={{ rotate: isDark ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {isDark ? <Sun className="h-[20px] w-[20px] text-amber-500" /> : <Moon className="h-[20px] w-[20px] text-slate-600" />}
              </motion.div>
            </motion.button>

            <motion.button
              onClick={() => handleItemClick('tracker')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-700 text-white font-bold text-sm tracking-wide px-6 py-2.5 rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300 cursor-pointer"
            >
              {t('nav_track_btn')}
              <motion.div
                animate={{ x: isRtl ? -5 : 5 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              >
                <ArrowRight className={`h-[18px] w-[18px] ${isRtl ? 'rotate-180' : ''}`} />
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Actions Container */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile Theme Toggle */}
            <motion.button
              onClick={onToggleDark}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-xl cursor-pointer ${
                isDark 
                  ? 'text-slate-300 hover:text-blue-400 bg-slate-800/60 border border-slate-700/60' 
                  : 'text-slate-700 hover:text-blue-600 bg-white/60 border border-slate-300/60'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-[18px] w-[18px] text-amber-500" /> : <Moon className="h-[18px] w-[18px] text-slate-600" />}
            </motion.button>

            {/* Animated Hamburger Menu */}
            <motion.button
              onClick={handleHamburgerClick}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-xl cursor-pointer relative w-10 h-10 flex items-center justify-center ${
                isDark 
                  ? 'text-slate-300 hover:text-blue-400 bg-slate-800/60 border border-slate-700/60' 
                  : 'text-slate-700 hover:text-blue-600 bg-white/60 border border-slate-300/60'
              }`}
              aria-label="Toggle menu"
            >
              <motion.div
                className="relative w-6 h-5 flex flex-col justify-center items-center"
                initial={false}
                animate={hamburgerOpen ? "open" : "closed"}
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 8 }
                  }}
                  className={`absolute w-6 h-0.5 rounded-full transition-colors duration-300 ${
                    isDark ? 'bg-slate-300' : 'bg-slate-700'
                  }`}
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className={`w-6 h-0.5 rounded-full transition-colors duration-300 ${
                    isDark ? 'bg-slate-300' : 'bg-slate-700'
                  }`}
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 }
                  }}
                  className={`absolute w-6 h-0.5 rounded-full transition-colors duration-300 ${
                    isDark ? 'bg-slate-300' : 'bg-slate-700'
                  }`}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <motion.div
            initial opacity={0}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-40"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleHamburgerClick}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: isRtl ? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRtl ? '100%' : '-100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`absolute top-0 ${isRtl ? 'right-0' : 'left-0'} bottom-0 w-full max-w-sm h-full shadow-2xl ${
                isDark ? 'bg-[#101532]' : 'bg-[#F7FBFD]'
              }`}
            >
              <div className="flex flex-col h-full">
                {/* Header with mobile logo and close button */}
                <div className={`flex items-center justify-between px-6 py-5 border-b ${isDark ? 'border-slate-700/50' : 'border-slate-300/50'}`}>
                  <img 
                    src={logoMobile} 
                    alt="Zenomix Logo" 
                    className="h-10 w-auto cursor-pointer"
                    onClick={() => handleItemClick('home')}
                  />
                  <motion.button
                    onClick={handleHamburgerClick}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-xl cursor-pointer ${
                      isDark ? 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60' : 'bg-white/60 text-slate-700 hover:bg-slate-100/60'
                    }`}
                  >
                    <X className="h-5 w-5" />
                  </motion.button>
                </div>

                {/* Scrollable content */}
                <div className="flex-1 overflow-y-auto px-6 py-6 space-y-3">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.id;
                    return (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                        onClick={() => handleItemClick(item.id)}
                        className={`w-full ${isRtl ? 'text-right' : 'text-left'} px-5 py-4 rounded-2xl text-sm font-bold tracking-normal transition-all duration-300 cursor-pointer border ${
                          isActive
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-lg shadow-blue-500/25'
                            : isDark ? 'bg-slate-800/60 text-slate-200 border-slate-700/60 hover:bg-slate-700/60' : 'bg-white/60 text-slate-700 border-slate-300/60 hover:bg-white/80'
                        }`}
                      >
                        {item.label}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Footer with language and track button */}
                <div className={`p-6 border-t space-y-4 ${isDark ? 'border-slate-700/50 bg-slate-900/50' : 'border-slate-300/50 bg-white/50'}`}>
                  {/* Language Switch */}
                  <div className="relative" ref={mobileLangDropdownRef}>
                    <motion.button
                      onClick={() => setMobileLangDropdownOpen(!mobileLangDropdownOpen)}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl text-sm font-bold cursor-pointer border transition-all duration-300 ${
                        isDark ? 'bg-slate-800/60 border-slate-700/60 text-slate-200 hover:bg-slate-700/60' : 'bg-white/60 border-slate-300/60 text-slate-700 hover:bg-white/80'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Globe className={`h-4 w-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                        <img src={currentLang.flag} alt="" className="w-6 h-4 object-cover rounded-sm shadow-sm" />
                        <span>{currentLang.label}</span>
                      </div>
                      <motion.div
                        animate={{ rotate: mobileLangDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {mobileLangDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute bottom-full mb-2 left-0 right-0 border rounded-2xl shadow-2xl overflow-hidden z-50 ${
                            isDark ? 'bg-slate-900 border-slate-700/60' : 'bg-white border-slate-300/60'
                          }`}
                        >
                          {languageOptions.map((opt) => {
                            const isActive = language === opt.code;
                            return (
                              <motion.button
                                key={opt.code}
                                onClick={() => {
                                  changeLanguage(opt.code);
                                  setMobileLangDropdownOpen(false);
                                }}
                                whileHover={{ x: 5 }}
                                className={`w-full flex items-center gap-3 px-5 py-3 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                                  isActive
                                    ? isDark ? 'bg-blue-950/50 text-blue-400' : 'bg-blue-50 text-blue-600'
                                    : isDark ? 'text-slate-300 hover:bg-slate-800/70' : 'text-slate-700 hover:bg-slate-100/70'
                                }`}
                              >
                                <img src={opt.flag} alt="" className="w-6 h-4 object-cover rounded-sm shadow-sm" />
                                <span className="flex-1 text-left">{opt.label}</span>
                                {isActive && <Check className={`h-4 w-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />}
                              </motion.button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.button
                    onClick={() => handleItemClick('tracker')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-2xl shadow-lg shadow-blue-500/25 transition-all duration-300 cursor-pointer"
                  >
                    {t('nav_track_btn')}
                    <ArrowRight className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
