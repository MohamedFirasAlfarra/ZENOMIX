import React, { useState } from 'react';
import Logo from './Logo';
import { useLanguage } from '../LanguageContext';
import { Mail, Send, Linkedin, Twitter, Github, Youtube, CheckCircle, Shield, Award } from 'lucide-react';

interface FooterProps {
  onNavigate: (id: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { t, isRtl } = useLanguage();
  const [newsEmail, setNewsEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsEmail.trim()) {
      setSubscribed(true);
      setNewsEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const menuLinks = [
    { label: t('nav_home'), id: 'home' },
    { label: t('nav_services'), id: 'services' },
    { label: t('nav_calculator'), id: 'calculator' },
    { label: t('nav_tracker'), id: 'tracker' },
    { label: t('nav_fleet'), id: 'fleet' },
    { label: t('nav_about'), id: 'about' },
    { label: t('nav_contact'), id: 'contact' },
  ];

  return (
    <footer className={`bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-16 relative overflow-hidden ${isRtl ? 'text-right' : 'text-left'}`}>
      
      {/* Background visual highlight */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50/40 dark:bg-blue-950/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-200 dark:border-slate-800 ${isRtl ? 'flex-row-reverse' : ''}`}>
          
          {/* Logo & Slogan Column */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            <div className={`flex ${isRtl ? 'justify-end' : 'justify-start'}`}>
              <Logo size="md" />
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-sm font-sans">
              {t('footer_slogan')}
            </p>
            
            {/* Social Icons */}
            <div className={`flex items-center gap-3 ${isRtl ? 'justify-end' : 'justify-start'}`}>
              {[
                { icon: <Twitter className="h-[18px] w-[18px]" />, href: '#' },
                { icon: <Linkedin className="h-[18px] w-[18px]" />, href: '#' },
                { icon: <Github className="h-[18px] w-[18px]" />, href: '#' },
                { icon: <Youtube className="h-[18px] w-[18px]" />, href: '#' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900/40 transition-all duration-300 cursor-pointer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Sitemaps Column */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-xs font-sans font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-widest">
              {t('footer_map_title')}
            </h4>
            <ul className="grid grid-cols-1 gap-2.5">
              {menuLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Core info */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-xs font-sans font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-widest">
              {t('footer_ops_title')}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              <p>
                <strong className="text-slate-800 dark:text-slate-200 font-bold block">{t('footer_ops_email')}:</strong>
                info@zenomix.com
              </p>
              <p>
                <strong className="text-slate-800 dark:text-slate-200 font-bold block">{t('footer_ops_hotline')}:</strong>
                {t('contact_hotline_val')}
              </p>
              <p>
                <strong className="text-slate-800 dark:text-slate-200 font-bold block">{t('footer_ops_hours')}:</strong>
                {t('footer_ops_hours_val')}
              </p>
            </div>
          </div>

          {/* Newsletter signup column */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-xs font-sans font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-widest">
              {t('footer_digest_title')}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed font-sans">
              {t('footer_digest_desc')}
            </p>

            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                required
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
                placeholder={t('footer_digest_placeholder')}
                className={`w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-3 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-600 placeholder-slate-400 dark:placeholder-slate-500 font-medium ${
                  isRtl ? 'pl-10 pr-4 text-right' : 'pr-10 pl-4'
                }`}
              />
              <button
                type="submit"
                className={`absolute top-1 p-2 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white transition-all cursor-pointer ${
                  isRtl ? 'left-1' : 'right-1'
                }`}
                aria-label="Subscribe"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>

            {subscribed && (
              <div className={`p-2 bg-green-50 dark:bg-green-950/40 border border-green-100 dark:border-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-[10px] flex items-center gap-1.5 animate-fade-in font-semibold ${isRtl ? 'flex-row-reverse text-right' : ''}`}>
                <CheckCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{t('footer_digest_success')}</span>
              </div>
            )}
          </div>

        </div>

        {/* Corporate bottom info */}
        <div className={`pt-8 flex flex-col md:flex-row justify-between items-center gap-4 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
          <div className={`flex flex-col items-center space-y-1 ${isRtl ? 'md:items-end' : 'md:items-start'}`}>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium font-sans">
              {t('footer_copy')}
            </p>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono font-bold">
              {t('footer_cert')}
            </p>
          </div>

          <div className={`flex items-center gap-6 text-[10px] font-mono text-slate-500 dark:text-slate-400 font-bold shrink-0 ${isRtl ? 'flex-row-reverse' : ''}`}>
            <div className={`flex items-center gap-1 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <Shield className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              <span>{t('footer_secured')}</span>
            </div>
            <div className={`flex items-center gap-1 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <Award className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              <span>{t('footer_green')}</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
