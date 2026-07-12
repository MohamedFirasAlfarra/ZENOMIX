import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { TrackingData } from '../types';
import { Search, MapPin, AlertCircle, ChevronRight, Copy, Check } from 'lucide-react';

export default function Tracker() {
  const { t, isRtl, trackingDb } = useLanguage();
  const [trackingId, setTrackingId] = useState<string>('ZN-982-A3');
  const [searchError, setSearchError] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Derive active tracking dynamically from trackingDb so it updates automatically on language changes!
  const activeTracking = trackingDb[trackingId] || null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = trackingId.trim().toUpperCase();
    
    if (trackingDb[cleanId]) {
      setTrackingId(cleanId);
      setSearchError(null);
    } else {
      setSearchError(
        isRtl
          ? `رمز التتبع "${cleanId}" غير مسجل في النظام. يرجى التحقق من المدخلات.`
          : `Tracking ID "${cleanId}" not found in local registries. Verify and re-enter.`
      );
    }
  };

  const handleCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const selectPreset = (id: string) => {
    setTrackingId(id);
    setSearchError(null);
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'Delivered':
        return t('tracker_status_delivered');
      case 'Out for Delivery':
        return t('tracker_status_out_delivery');
      case 'In Transit':
        return t('tracker_status_in_transit');
      default:
        return t('tracker_status_pending');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/45 text-emerald-700 dark:text-emerald-400';
      case 'Out for Delivery':
        return 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900/45 text-blue-700 dark:text-blue-400';
      case 'In Transit':
        return 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/45 text-amber-700 dark:text-amber-400';
      default:
        return 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400';
    }
  };

  return (
    <section id="tracker" className="py-24 relative bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
      
      {/* Background radial overlays */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-blue-50/40 dark:bg-blue-950/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-indigo-50/30 dark:bg-indigo-950/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 px-4 py-1 rounded-full mb-4">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
              {t('tracker_badge')}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t('tracker_title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-base font-normal">
            {t('tracker_subtitle')}
          </p>
        </div>

        {/* Outer Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Form Controls & Presets */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            
            {/* Search Card */}
            <div className={`bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm ${isRtl ? 'text-right' : 'text-left'}`}>
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-4">
                {t('tracker_search_title')}
              </h3>

              <form onSubmit={handleSearch} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    placeholder={t('tracker_search_placeholder')}
                    className={`w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-900 rounded-2xl py-3.5 text-sm text-slate-900 dark:text-white font-mono placeholder-slate-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-500 transition-all ${
                      isRtl ? 'pl-12 pr-4 text-right' : 'pr-12 pl-4'
                    }`}
                  />
                  <button
                    type="submit"
                    className={`absolute top-2 p-2 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white transition-all cursor-pointer animate-none ${
                      isRtl ? 'left-2' : 'right-2'
                    }`}
                  >
                    <Search className="h-[18px] w-[18px]" />
                  </button>
                </div>

                {searchError && (
                  <div className={`p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/30 text-red-700 dark:text-red-400 rounded-xl text-xs flex items-start gap-2 animate-fade-in font-normal ${isRtl ? 'flex-row-reverse text-right' : ''}`}>
                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-red-500" />
                    <span>{searchError}</span>
                  </div>
                )}
              </form>
            </div>

            {/* Mock Presets Index */}
            <div className={`bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm ${isRtl ? 'text-right' : 'text-left'}`}>
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-3">
                {t('tracker_active_routes')}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4 font-normal">
                {t('tracker_routes_desc')}
              </p>

              <div className="space-y-3">
                {(Object.values(trackingDb) as TrackingData[]).map((preset) => (
                  <div
                    key={preset.trackingId}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                      activeTracking?.trackingId === preset.trackingId
                        ? 'bg-white dark:bg-slate-950 border-blue-600 dark:border-blue-500 shadow-sm dark:shadow-none text-slate-900 dark:text-white'
                        : 'bg-white dark:bg-slate-950 border-slate-200/80 dark:border-slate-900 text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                    onClick={() => selectPreset(preset.trackingId)}
                  >
                    <div className={`flex items-center justify-between ${isRtl ? 'flex-row-reverse' : ''}`}>
                      <span className="font-mono text-xs font-bold tracking-wide text-blue-600 dark:text-blue-400">{preset.trackingId}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase border ${
                        preset.currentStatus === 'Delivered'
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/30'
                          : preset.currentStatus === 'Out for Delivery'
                          ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border-blue-100 dark:border-blue-900/30'
                          : 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border-amber-100 dark:border-amber-900/30'
                      }`}>
                        {getStatusText(preset.currentStatus)}
                      </span>
                    </div>

                    <div className={`flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-2 font-medium ${isRtl ? 'flex-row-reverse' : ''}`}>
                      <span className="truncate max-w-[120px]">{preset.origin}</span>
                      <ChevronRight className={`h-3 w-3 shrink-0 text-slate-400 dark:text-slate-500 ${isRtl ? 'rotate-180' : ''}`} />
                      <span className="truncate max-w-[120px]">{preset.destination}</span>
                    </div>

                    {/* Copy Utility Button */}
                    <div className={`mt-3.5 pt-2 border-t border-slate-100 dark:border-slate-900 flex items-center justify-between ${isRtl ? 'flex-row-reverse' : ''}`}>
                      <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase font-bold">{preset.serviceType}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(preset.trackingId);
                        }}
                        className={`flex items-center gap-1 text-[10px] text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer font-bold font-sans ${isRtl ? 'flex-row-reverse' : ''}`}
                      >
                        {copiedId === preset.trackingId ? (
                          <>
                            <Check className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                            <span className="text-emerald-600 dark:text-emerald-400">{t('tracker_copied')}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" />
                            <span>{t('tracker_copy_id')}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Active Progress Stepper Card */}
          <div className="lg:col-span-8">
            {activeTracking ? (
              <div className={`bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm dark:shadow-none relative overflow-hidden animate-scale-up ${isRtl ? 'text-right' : 'text-left'}`}>
                
                {/* Glow Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 dark:bg-blue-900/10 rounded-full filter blur-3xl pointer-events-none" />

                {/* Tracking Progress Header */}
                <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-slate-200 dark:border-slate-900 mb-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <div>
                    <span className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider block font-bold">
                      {t('tracker_manifest_bill')}
                    </span>
                    <h3 className={`text-2xl font-extrabold font-display text-slate-900 dark:text-white mt-1 flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
                      {activeTracking.trackingId}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${getStatusColor(activeTracking.currentStatus)}`}>
                      {getStatusText(activeTracking.currentStatus)}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                  <div className={`flex justify-between text-xs text-slate-500 dark:text-slate-400 font-mono mb-2 font-bold ${isRtl ? 'flex-row-reverse' : ''}`}>
                    <span>{t('tracker_progress')}</span>
                    <span className="text-blue-600 dark:text-blue-400 font-bold">
                      {isRtl ? (
                        <span>تم بنسبة {activeTracking.progressPercentage}% ({t('tracker_complete')})</span>
                      ) : (
                        <span>{activeTracking.progressPercentage}% {t('tracker_complete')}</span>
                      )}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${activeTracking.progressPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Route Overview Grid */}
                <div className="grid sm:grid-cols-2 gap-6 bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-900 rounded-2xl p-5 mb-8">
                  <div className={isRtl ? 'text-right' : 'text-left'}>
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase block tracking-wider font-bold">
                      {t('tracker_origin')}
                    </span>
                    <div className={`text-sm font-bold text-slate-800 dark:text-slate-200 mt-1 flex items-center gap-1.5 ${isRtl ? 'flex-row-reverse' : ''}`}>
                      <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      {activeTracking.origin}
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mt-1 font-sans">
                      {isRtl ? `المرسل: ${activeTracking.sender}` : `Sender: ${activeTracking.sender}`}
                    </span>
                  </div>

                  <div className={isRtl ? 'text-right' : 'text-left'}>
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase block tracking-wider font-bold">
                      {t('tracker_destination')}
                    </span>
                    <div className={`text-sm font-bold text-slate-800 dark:text-slate-200 mt-1 flex items-center gap-1.5 ${isRtl ? 'flex-row-reverse' : ''}`}>
                      <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      {activeTracking.destination}
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mt-1 font-sans">
                      {isRtl ? `المستلم: ${activeTracking.receiver}` : `Receiver: ${activeTracking.receiver}`}
                    </span>
                  </div>

                  <div className={`sm:col-span-2 pt-4 border-t border-slate-100 dark:border-slate-900 grid grid-cols-2 gap-4 ${isRtl ? 'text-right' : 'text-left'}`}>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase block tracking-wider font-bold">{t('tracker_class')}</span>
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block mt-1 uppercase">{activeTracking.serviceType}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase block tracking-wider font-bold">{t('tracker_eta')}</span>
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400 block mt-1">{activeTracking.estimatedDelivery}</span>
                    </div>
                  </div>
                </div>

                {/* Stepper Timeline */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-6">
                    {t('tracker_checkpoint_title')}
                  </h4>
                  <div className={`relative space-y-6 ${isRtl ? 'pr-6' : 'pl-6'}`}>
                    
                    {/* Vertical Line */}
                    <div className={`absolute top-[10px] bottom-[10px] w-[2px] bg-slate-200 dark:bg-slate-800 ${isRtl ? 'right-[7px]' : 'left-[7px]'}`} />

                    {activeTracking.history.map((hist, idx) => {
                      const isComplete = hist.time !== 'Pending';
                      const isCurrent = isComplete && (idx === activeTracking.history.filter(h => h.time !== 'Pending').length - 1);
                      
                      return (
                        <div key={idx} className="relative group">
                          
                          {/* Dot indicator */}
                          <div className={`absolute h-[10px] w-[10px] rounded-full border-2 transition-all ${
                            isRtl ? 'right-[-23px]' : 'left-[-23px]'
                          } ${
                            isCurrent
                              ? 'bg-blue-600 border-blue-600 scale-125 shadow-lg shadow-blue-500/20 ring-4 ring-blue-100 dark:ring-blue-950/50'
                              : isComplete
                              ? 'bg-emerald-500 border-emerald-500'
                              : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700'
                          }`} />

                          <div className={`p-4 rounded-2xl border transition-all ${
                            isCurrent
                              ? 'bg-blue-50/50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900/50'
                              : isComplete
                              ? 'bg-white dark:bg-slate-950 border-slate-100 dark:border-slate-900'
                              : 'bg-transparent border-dashed border-slate-200 dark:border-slate-900 opacity-60'
                          }`}>
                            <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 ${isRtl ? 'sm:flex-row-reverse text-right' : 'text-left'}`}>
                              <span className={`text-xs font-mono font-bold uppercase ${isCurrent ? 'text-blue-600 dark:text-blue-400' : isComplete ? 'text-emerald-600' : 'text-slate-400 dark:text-slate-500'}`}>
                                {getStatusText(hist.status)}
                              </span>
                              <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 font-semibold">
                                {hist.time}
                              </span>
                            </div>

                            <div className={`text-sm font-bold text-slate-800 dark:text-slate-200 mt-1.5 ${isRtl ? 'text-right' : 'text-left'}`}>
                              {hist.location}
                            </div>
                            
                            <p className={`text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium leading-relaxed font-sans ${isRtl ? 'text-right' : 'text-left'}`}>
                              {hist.details}
                            </p>
                          </div>
                        </div>
                      );
                    })}

                  </div>
                </div>

              </div>
            ) : (
              <div className="bg-slate-50/60 dark:bg-slate-900/30 border border-dashed border-slate-300 dark:border-slate-800 rounded-3xl p-16 text-center h-full flex flex-col items-center justify-center min-h-[500px]">
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 text-slate-400 dark:text-slate-500 mb-4 border border-slate-200 dark:border-slate-900 shadow-sm animate-pulse">
                  <Search className="h-10 w-10" />
                </div>
                <h4 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">
                  {t('tracker_no_manifest')}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed font-normal">
                  {t('tracker_no_manifest_desc')}
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
