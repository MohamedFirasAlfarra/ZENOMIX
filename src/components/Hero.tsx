import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface HeroProps {
  onNavigate: (id: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const { t, isRtl } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-16 flex items-center overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Dynamic Grid Background with ambient gradient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-50/50 dark:bg-blue-900/10 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-50/50 dark:bg-indigo-900/10 rounded-full filter blur-[120px]" />
        <div className="absolute inset-0 grid-lines opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className={`lg:col-span-7 flex flex-col space-y-8 ${isRtl ? 'text-right items-start' : 'text-left items-start'}`}>

            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 px-4 py-1.5 rounded-full w-fit">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                {t('hero_badge')}
              </span>
            </div>

            {/* Core Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              {t('hero_title_1')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-300">
                {t('hero_title_2')}
              </span>
            </h1>

            {/* Paragraph Description */}
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed font-normal">
              {t('hero_subtitle')}
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('tracking-tech')}
                className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full shadow-md shadow-blue-500/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                {t('hero_btn_calc')}
                <ArrowRight className={`h-[18px] w-[18px] ${isRtl ? 'rotate-180' : ''}`} />
              </button>

              <button
                onClick={() => onNavigate('tracking-tech')}
                className="flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full shadow-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                {t('hero_btn_track')}
              </button>
            </div>

            {/* Feature Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800 w-full">
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 mt-0.5">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-200">{isRtl ? 'أمان مضمون' : 'Guaranteed Safe'}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{isRtl ? 'مؤمن ومحمي' : 'Locked & Insured'}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 mt-0.5">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-200">{isRtl ? 'سرعة فائقة' : 'Hyper Fast'}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{isRtl ? 'توجيه فوري' : 'On-Demand Dispatch'}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 mt-0.5">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-200">{isRtl ? 'تغطية كاملة' : 'Full Coverage'}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{isRtl ? '٢٢٠+ دولة' : '220+ Countries'}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Graphical Showcase Card */}
          <div className="lg:col-span-5 relative hidden lg:block">
            
            {/* Ambient Background Glow behind container */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-100 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-3xl filter blur-xl opacity-80" />

            {/* Graphic Container with futuristic UI layout */}
            <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl shadow-slate-100 dark:shadow-none backdrop-blur-md overflow-hidden">
              
              {/* Header representing standard telemetry terminal */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-5">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping" />
                  <span className="text-xs font-mono text-blue-600 dark:text-blue-400 tracking-wider uppercase font-semibold">
                    {isRtl ? 'متابعة الشحنة: نشط' : 'SYS-TELEMETRY: ACTIVE'}
                  </span>
                </div>
                <div className="text-xs font-mono text-slate-400 dark:text-slate-500">
                  REF: ZN-TRACKER-2026
                </div>
              </div>

              {/* Graphic Representation of Logistics Route Overlay */}
              <div className="relative h-64 bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between p-4 shadow-inner">
                
                {/* Route Vector Lines */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <path 
                      d="M 50,150 Q 150,30 250,100 T 350,50" 
                      fill="none" 
                      stroke="#3b82f6" 
                      strokeWidth="2" 
                      strokeDasharray="8, 4"
                    />
                    <circle cx="50" cy="150" r="5" fill="#3b82f6" />
                    <circle cx="250" cy="100" r="5" fill="#6366f1" />
                    <circle cx="350" cy="50" r="5" fill="#3b82f6" />
                  </svg>
                </div>

                {/* Simulated Fleet Asset Card */}
                <div className={`flex ${isRtl ? 'flex-row-reverse' : 'flex-row'} items-center justify-between z-10`}>
                  <div className={`bg-slate-800/90 border border-slate-700 rounded-xl p-3 flex ${isRtl ? 'flex-row-reverse' : 'flex-row'} items-center gap-3 shadow-md`}>
                    <div className="h-10 w-10 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-lg flex items-center justify-center font-bold text-white font-display text-sm shadow">
                      Z
                    </div>
                    <div className={isRtl ? 'text-right' : 'text-left'}>
                      <div className="text-xs font-semibold text-white">{isRtl ? 'أسطول النقل البري ZN-04' : 'Line-Haul Fleet ZN-04'}</div>
                      <div className="text-[10px] font-mono text-blue-400">{isRtl ? 'السرعة: ٦٨ م/س | حمولة ثقيلة' : 'SPEED: 68 MPH | HEAVY'}</div>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur border border-slate-700 px-2.5 py-1 rounded-lg text-[10px] font-mono text-slate-300">
                    GPS LAT: 48.8566
                  </div>
                </div>

                {/* Route overlay indicator */}
                <div className={`flex ${isRtl ? 'flex-row-reverse' : 'flex-row'} justify-between items-end z-10`}>
                  <div className={isRtl ? 'text-right' : 'text-left'}>
                    <div className="text-[10px] font-mono text-slate-400">{isRtl ? 'مصدر الشحنة' : 'ROUTE DEPARTURE'}</div>
                    <div className="text-sm font-semibold text-white">{isRtl ? 'مركز ميونيخ' : 'MUNICH HUB'}</div>
                  </div>
                  <div className="text-center font-mono text-xs text-blue-400">
                    <span className="font-semibold">{isRtl ? 'الكفاءة ٩٤٪' : '94% EFFICIENCY'}</span>
                    <div className="w-24 h-1 bg-slate-800 rounded-full mt-1 overflow-hidden">
                      <div className="h-full bg-blue-500 w-[94%]" />
                    </div>
                  </div>
                  <div className={isRtl ? 'text-left' : 'text-right'}>
                    <div className="text-[10px] font-mono text-slate-400">{isRtl ? 'الوجهة المستهدفة' : 'ROUTE TARGET'}</div>
                    <div className="text-sm font-semibold text-white">{isRtl ? 'لندن LHR' : 'LONDON LHR'}</div>
                  </div>
                </div>
              </div>

              {/* Dynamic Stats Panels inside Graphic column */}
              <div className="grid grid-cols-2 gap-4 mt-5">
                <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800 rounded-2xl p-4 text-center">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                    99.8%
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wide font-semibold">
                    {isRtl ? 'التسليم في الموعد' : 'On-Time Delivery'}
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800 rounded-2xl p-4 text-center">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 tracking-tight">
                    &lt; 15m
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wide font-semibold">
                    {isRtl ? 'متوسط تأخير الفرز' : 'Average Sort Delay'}
                  </div>
                </div>
              </div>

              {/* Trust disclaimer */}
              <div className="mt-5 text-center flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {isRtl ? 'ناقل لوجستي أخضر معتمد بشهادة الآيزو 9001 و 14001' : 'ISO 9001 & 14001 Certified Green Logistics Carrier'}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
