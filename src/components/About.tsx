import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { Award, ShieldCheck, HeartHandshake, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function About() {
  const { t, isRtl, testimonials } = useLanguage();
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  const handlePrevTest = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTest = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const values = [
    {
      title: t('about_pillar1_title'),
      desc: t('about_pillar1_desc'),
      icon: <ShieldCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
    },
    {
      title: t('about_pillar2_title'),
      desc: t('about_pillar2_desc'),
      icon: <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
    },
    {
      title: t('about_pillar3_title'),
      desc: t('about_pillar3_desc'),
      icon: <HeartHandshake className="h-6 w-6 text-blue-600 dark:text-blue-400" />
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
      
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-50/40 dark:bg-blue-950/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-indigo-50/30 dark:bg-indigo-950/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Profile Narrative Grid */}
        <div className={`grid lg:grid-cols-12 gap-12 items-center mb-24 ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Left/Right Column: Mission text */}
          <div className={`lg:col-span-7 space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 px-4 py-1 rounded-full">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
                {t('about_badge')}
              </span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              {t('about_title_1')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                {t('about_title_2')}
              </span>
            </h2>

            <p className="text-slate-600 dark:text-slate-400 font-normal text-base sm:text-lg leading-relaxed">
              {t('about_subtitle_1')}
            </p>

            <p className="text-slate-500 dark:text-slate-400 font-normal text-sm sm:text-base leading-relaxed">
              {t('about_subtitle_2')}
            </p>

            <div className={`grid grid-cols-2 gap-6 pt-6 border-t border-slate-100 dark:border-slate-800 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white">45,000+</div>
                <div className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1 font-bold">
                  {t('about_stat_assets')}
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-blue-600 dark:text-blue-400">100%</div>
                <div className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1 font-bold">
                  {t('about_stat_offset')}
                </div>
              </div>
            </div>
          </div>

          {/* Right/Left Column: Key pillars card list */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className={`text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest px-2 mb-2 ${isRtl ? 'text-right' : 'text-left'}`}>
              {t('about_standards_title')}
            </h4>
            
            {values.map((val, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-700 rounded-2xl p-5 transition-all duration-300 shadow-sm"
              >
                <div className={`flex items-start gap-4 ${isRtl ? 'flex-row-reverse text-right' : 'text-left'}`}>
                  <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-blue-600 dark:text-blue-400 shrink-0 shadow-sm">
                    {val.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-1">{val.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal">{val.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Corporate Endorsement / Testimonial Slider */}
        {testimonials && testimonials.length > 0 && (
          <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-sm animate-none">
            
            {/* Accent decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 dark:bg-blue-900/10 rounded-full filter blur-2xl" />

            {/* Slider Layout */}
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              
              {/* Stars */}
              <div className="flex items-center gap-1.5 text-amber-500 mb-6 justify-center">
                {[...Array(testimonials[activeTestimonial]?.rating || 5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              {/* Testimonial Quote */}
              <blockquote className="text-lg sm:text-xl md:text-2xl font-medium italic text-slate-800 dark:text-slate-300 leading-relaxed mb-8">
                "{testimonials[activeTestimonial]?.quote}"
              </blockquote>

              {/* Testimonial Author */}
              <div className="mb-8">
                <div className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white">
                  {testimonials[activeTestimonial]?.name}
                </div>
                <div className="text-xs font-mono text-blue-600 dark:text-blue-400 mt-1 uppercase tracking-wider font-bold">
                  {testimonials[activeTestimonial]?.role} — {testimonials[activeTestimonial]?.company}
                </div>
              </div>

              {/* Controls */}
              <div className={`flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <button
                  onClick={isRtl ? handleNextTest : handlePrevTest}
                  className="p-3.5 rounded-full bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-all hover:scale-105 shadow-sm cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className={`h-5 w-5 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
                
                <div className="flex items-center gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        activeTestimonial === idx ? 'w-6 bg-blue-600' : 'w-2 bg-slate-200 dark:bg-slate-700'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={isRtl ? handlePrevTest : handleNextTest}
                  className="p-3.5 rounded-full bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-all hover:scale-105 shadow-sm cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className={`h-5 w-5 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
