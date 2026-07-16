import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Calculator from './components/Calculator';
import Tracker from './components/Tracker';
import Fleet from './components/Fleet';
import About from './components/About';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import Footer from './components/Footer';
import { ChevronUp, ArrowRight, Shield } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState<'home' | 'impressum' | 'datenschutz'>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top on page navigation switch
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Apply dark mode class to html element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Intersection Observer for scroll spy
  useEffect(() => {
    if (currentPage !== 'home') {
      if (currentPage === 'tracking-tech') {
        setActiveSection('tracking-tech');
      } else {
        setActiveSection('');
      }
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // trigger when section occupies focal center
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const sections = ['home', 'about', 'services', 'faq', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [currentPage]);

  // Monitor scroll for back-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const trackingTechSections = ['tracking-tech', 'calculator', 'tracker', 'fleet'];
    const isTrackingTechTarget = trackingTechSections.includes(sectionId);

    if (isTrackingTechTarget) {
      if (currentPage !== 'tracking-tech') {
        setCurrentPage('tracking-tech');
        setTimeout(() => {
          if (sectionId === 'tracking-tech') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveSection('tracking-tech');
          } else {
            const element = document.getElementById(sectionId);
            if (element) {
              const offset = 70;
              const bodyRect = document.body.getBoundingClientRect().top;
              const elementRect = element.getBoundingClientRect().top;
              const elementPosition = elementRect - bodyRect;
              const offsetPosition = elementPosition - offset;
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              setActiveSection('tracking-tech');
            }
          }
        }, 100);
      } else {
        if (sectionId === 'tracking-tech') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setActiveSection('tracking-tech');
        } else {
          const element = document.getElementById(sectionId);
          if (element) {
            const offset = 70;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            setActiveSection('tracking-tech');
          }
        }
      }
    } else {
      // Home page targets: 'home', 'about', 'services', 'faq', 'contact'
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const offset = 70;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            setActiveSection(sectionId);
          }
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 70;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          setActiveSection(sectionId);
        }
      }
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans select-text selection:bg-blue-100 dark:selection:bg-blue-900/50 selection:text-blue-900 dark:selection:text-blue-100">
      
      {/* Dynamic Navigation */}
      <Navbar 
        onNavigate={handleNavigate} 
        activeSection={activeSection} 
        isDark={isDark} 
        onToggleDark={() => setIsDark(!isDark)} 
      />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            {/* 1. Hero Entrance Section */}
            <Hero onNavigate={handleNavigate} />

            {/* 2. Company Narrative, Values & Testimonials */}
            <About />

            {/* 3. Core Logistics Services */}
            <Services />

            {/* 4. FAQ Dynamic Accordion Section */}
            <Faq />

            {/* 5. Route Inquiry Form Ticket Dispatch */}
            <Contact />
          </>
        )}

        {currentPage === 'tracking-tech' && (
          <div className="pt-16">
            {/* 1. Interactive Pricing & Route Costing Calculator */}
            <Calculator />

            {/* 2. Live Shipment Telemetry Terminal */}
            <Tracker />

            {/* 3. Low-Emission Fleet Specs & Tech */}
            <Fleet />
          </div>
        )}

        {currentPage === 'impressum' && (
          <Impressum onBack={() => setCurrentPage('home')} />
        )}

        {currentPage === 'datenschutz' && (
          <Datenschutz onBack={() => setCurrentPage('home')} />
        )}
      </main>

      {/* Footer & Compliance Details */}
      <Footer 
        onNavigate={handleNavigate} 
        onNavigatePage={setCurrentPage} 
        isDark={isDark} 
      />

      {/* Back to Top floating micro-control */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 text-white shadow-lg shadow-slate-900/10 dark:shadow-blue-500/10 border border-slate-800 dark:border-blue-500 transition-all duration-300 hover:scale-110 active:scale-95 animate-fade-in cursor-pointer"
          aria-label="Scroll back to top"
          id="back-to-top-btn"
        >
          <ChevronUp className="h-5 w-5 stroke-[2.5]" />
        </button>
      )}

    </div>
  );
}
