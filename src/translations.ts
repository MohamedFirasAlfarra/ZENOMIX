import { ServiceItem, FleetVehicle, Testimonial, TrackingData } from './types';

export const enTranslations = {
  // nav
  nav_home: 'Home',
  nav_services: 'Services',
  nav_tracking_tech: 'Tracking & Tech',
  nav_calculator: 'Cost Calculator',
  nav_tracker: 'Track Shipment',
  nav_fleet: 'Fleet & Tech',
  nav_about: 'About Us',
  nav_faq: 'FAQ',
  nav_contact: 'Contact',
  nav_track_btn: 'Track Package',

  // hero
  hero_badge: 'GLOBAL MULTI-MODAL NETWORKS',
  hero_title_1: 'Next-generation autonomous &',
  hero_title_2: 'low-emission enterprise logistics',
  hero_subtitle: 'We connect heavy-haul highway corridors, custom airport transfers, and smart urban distribution centres under one end-to-end telemetry system.',
  hero_btn_calc: 'Costing Calculator',
  hero_btn_track: 'Track Live Package',
  hero_stat_transits: 'ACTIVE TRANSITS',
  hero_stat_countries: 'COUNTRIES CONNECTED',
  hero_stat_cargo: 'ANNUAL CARGO BULK',
  hero_stat_status: 'DIAGNOSTIC STATUS',
  hero_stat_status_val: 'SYSTEMS NOMINAL',

  // services
  services_badge: 'Bespoke Delivery Channels',
  services_title: 'Engineered logistics workflows',
  services_subtitle: 'Explore our specialized shipping and cargo channels, each optimized with encrypted GPS telemetry, climate controls, and dynamic routing.',
  services_transit_time: 'Transit Time',
  services_capacity: 'Capacity',
  services_coverage: 'Global Coverage',
  services_btn_view: 'View Detailed Specs',

  // calculator
  calc_badge: 'TRANSIT COSTING ENGINE',
  calc_title: 'Real-time quote estimation',
  calc_subtitle: 'Configure your shipment metrics to view standard transit costing rates, energy efficiency, and estimated fuel emissions.',
  calc_weight: 'Cargo Weight (lbs)',
  calc_volume: 'Cargo Volume (cu ft)',
  calc_distance: 'Distance (miles)',
  calc_urgency: 'Transit Urgency',
  calc_urgency_standard: 'Standard Ground Freight',
  calc_urgency_premium: 'Premium Air & Sea Relay',
  calc_urgency_express: 'Instant Express Courier',
  calc_feat_route: 'Dynamic route calculation',
  calc_feat_fees: 'No hidden port fee bookings',
  calc_feat_billing: 'Instant billing dispatch',
  calc_matrix_title: 'Costing & Efficiency Matrix',
  calc_total_rate: 'ESTIMATED TOTAL RATE',
  calc_eco_rating: 'FUEL ECO RATING',
  calc_co2_offset: 'CO2 CARBON OFFSET',
  calc_est_dur: 'ESTIMATED TRANSIT',
  calc_est_dur_val: 'Pending parameters',
  calc_hours: 'Hours',
  calc_days: 'Days',

  // tracker
  tracker_badge: 'Live Telemetry Terminal',
  tracker_title: 'Real-time shipment tracking',
  tracker_subtitle: 'Enter your active freight bill or dispatch reference to audit coordinates, transit checkpoints, and dynamic ETAs.',
  tracker_search_title: 'Telemetry Search',
  tracker_search_placeholder: 'e.g. ZN-982-A3',
  tracker_active_routes: 'Active Mock Routes',
  tracker_routes_desc: 'Click any pre-configured tracking ID to load its dynamic logistics stream in the telemetry viewer:',
  tracker_copy_id: 'Copy ID',
  tracker_copied: 'Copied',
  tracker_no_manifest: 'No active manifest loaded',
  tracker_no_manifest_desc: 'Use the left presets panel to load cargo transit timelines, or enter a valid tracking key in the search field above.',
  tracker_manifest_bill: 'Active Manifest Bill',
  tracker_progress: 'TRANSIT PROGRESS',
  tracker_complete: 'COMPLETE',
  tracker_origin: 'Origin Dispatcher',
  tracker_destination: 'Destination Target',
  tracker_sender: 'Sender',
  tracker_receiver: 'Receiver',
  tracker_class: 'Dispatch Class',
  tracker_eta: 'Estimated Delivery ETA',
  tracker_checkpoint_title: 'Transit Checkpoint Timeline Audit',
  tracker_status_delivered: 'Delivered',
  tracker_status_out_delivery: 'Out for Delivery',
  tracker_status_in_transit: 'In Transit',
  tracker_status_pending: 'Pending',

  // fleet
  fleet_badge: 'Zenomix Fleet Tech',
  fleet_title: 'Low-emission smart fleet infrastructure',
  fleet_subtitle: 'We operate fully audited line-haul and localized cargo assets running intelligent eco-routing algorithms to minimize supply chain delays and environmental impact.',
  fleet_tab_all: 'All Assets',
  fleet_tab_heavy: 'Heavy Duty',
  fleet_tab_medium: 'Medium Duty',
  fleet_tab_light: 'Electric / Micro',
  fleet_active_assets: 'Active Fleet Assets',
  fleet_diag_console: 'Diagnostics Console',
  fleet_class: 'CLASS',
  fleet_max_payload: 'Max Payload',
  fleet_cargo_vol: 'Cargo Vol',
  fleet_propulsion: 'Propulsion',
  fleet_max_range: 'Max Range',
  fleet_telemetry_title: 'Engineered Telemetry Systems',
  fleet_satellite_disclaimer: 'All telemetry is routed through encrypted GPS satellites on the 5.8GHz block.',
  fleet_btn_request: 'Request Dispatch Log',

  // about
  about_badge: 'Company Profile',
  about_title_1: 'Pioneering the future of',
  about_title_2: 'frictionless transit',
  about_subtitle_1: 'Established in 2018, Zenomix was founded on a simple truth: legacy supply chains are slow, opaque, and highly carbon-inefficient. By unifying premium transport assets with real-time tracking, we built an elite logistics platform.',
  about_subtitle_2: 'Today, Zenomix coordinates dry-van line hauls, temp-controlled pharmaceutical couriers, and same-hour micro-dispatches across an interstate corridor. Our commitment remains absolute: safe cargo handling, rapid routing schedules, and professional, reliable service every mile of the way.',
  about_stat_assets: 'Fleet assets registered',
  about_stat_offset: 'Carbon-neutral offset standard',
  about_standards_title: 'Operational Standards',
  about_pillar1_title: 'Active Security Guard',
  about_pillar1_desc: 'All container seals, vehicle latch states, and transit lockers are monitored with real-time biometric alarms and RFID keys.',
  about_pillar2_title: 'Green Footprint Priority',
  about_pillar2_desc: 'By investing in hybrid-assist long-haulers and solid-state EV vans, we actively reduce CO2 emissions across our networks by 40%.',
  about_pillar3_title: 'Radical On-Time Integrity',
  about_pillar3_desc: 'With redundant driver relay schedules and predictive maintenance alerts, we maintain a flawless 99.8% on-time dispatch rating.',

  // contact
  contact_badge: 'Get in Touch',
  contact_title: 'Connect with a dispatch desk',
  contact_subtitle: 'Whether you need bespoke enterprise logistics pricing, heavy-freight custom quotes, or last-mile route setup, we are ready to assist.',
  contact_hq: 'Corporate Headquarters',
  contact_office_loc: 'Office Location',
  contact_office_val: 'Speditionsallee 42, 80331 Munich, Germany',
  contact_inquiries: 'Operational Inquiries',
  contact_reply_time: 'Average reply timeline: Under 45 minutes',
  contact_hotline: 'Support Hotline',
  contact_hotline_val: '+49 89 4200 1188',
  contact_hotline_hours: 'Mon - Sat: 24h operational coverage',
  contact_iso_rating: 'ISO RATING',
  contact_eco_license: 'ECO LICENSE',
  contact_fleet_status: 'FLEET STATUS',
  contact_fleet_status_val: 'AUDITED SECURE',
  contact_form_title: 'Route & Transit Inquiry Ticket',
  contact_fullname: 'Full Name',
  contact_email: 'Corporate Email',
  contact_topic: 'Inquiry Topic',
  contact_msg: 'Message Detail',
  contact_topic_general: 'General Operations Inquiry',
  contact_topic_highval: 'Bespoke High-Value Cargo Transport',
  contact_topic_relay: 'Interstate Fleet Relay Contracts',
  contact_topic_carbon: 'Carbon Neutral Consultation',
  contact_placeholder_name: 'Jane Doe',
  contact_placeholder_email: 'jane.doe@company.com',
  contact_placeholder_msg: 'Provide detailed cargo weight, transit hubs, and timing constraints...',
  contact_btn_submitting: 'Validating Secure Channels...',
  contact_btn_transmit: 'Transmit Inquiry Ticket',
  contact_success_title: 'Inquiry Transmitted Successfully',
  contact_success_desc: 'Thank you! Your ticket was compiled on the client, simulated, and logged locally. A logistics representative has been mock-assigned to review your route specs.',
  contact_success_btn: 'Dismiss Confirmation',
  contact_ledger_title: 'Local Session Ledger',
  contact_ledger_remove: 'Remove log entry',

  // faq
  faq_badge: 'COMMON INQUIRIES',
  faq_title: 'Frequently Asked Questions',
  faq_subtitle: 'Find answers to key questions about Zenomix operations, tracking technology, fleet sustainability, and more.',
  faq_q1: 'How are Zenomix shipping and transit rates calculated?',
  faq_a1: 'Rates are calculated dynamically based on cargo weight, volume, route distance, and selected urgency. You can use our real-time Transit Costing Engine above for an instant estimate, including CO2 offset data.',
  faq_q2: 'What technologies ensure the safety of high-value cargo?',
  faq_a2: 'All our cargo compartments are secured with RFID container seals, biometric locking systems, and encrypted 5.8GHz satellite GPS telemetry. Any unauthorized activity triggers immediate alarms in our dispatch center.',
  faq_q3: 'How does the driver relay system guarantee on-time transit?',
  faq_a3: 'For interstate corridors, fresh drivers take over at designated relay hubs. This prevents rest-stop delays, ensuring cargo moves continuously and allowing us to maintain a 99.8% on-time dispatch rate.',
  faq_q4: 'What makes the Zenomix fleet low-emission and sustainable?',
  faq_a4: 'Our fleet comprises hybrid-assist long-haulers, solid-state EV cargo vans, and urban cargo e-bikes. Combined with AI-driven eco-routing algorithms, we reduce average carbon emissions by 40% compared to legacy logistics.',
  faq_q5: 'Can I integrate my corporate platform with Zenomix warehouses?',
  faq_a5: 'Yes, our smart warehouses offer custom developer API integrations for real-time inventory updates, automated picking schedules, and immediate shipping label generation.',

  footer_legal_title: 'Legal',
  footer_imprint: 'Imprint',
  footer_privacy: 'Privacy Policy',

  // footer
  footer_slogan: 'Connecting enterprises to high-capacity cargo lanes through smart multi-modal routing, premium hybrid-relays, and encrypted satellite trackers.',
  footer_map_title: 'Cargo Network Map',
  footer_ops_title: 'Core Operations',
  footer_ops_email: 'Dispatch Email',
  footer_ops_hotline: 'Hotline support',
  footer_ops_hours: 'Support windows',
  footer_ops_hours_val: '24 Hours Daily',
  footer_digest_title: 'Weekly Telemetry Digest',
  footer_digest_desc: 'Subscribe to receive route density reports, fleet tech updates, and green transport optimizations.',
  footer_digest_placeholder: 'news@company.com',
  footer_digest_success: 'Subscription recorded dynamically!',
  footer_copy: '© 2026 Zenomix Inc. All rights reserved. Built as a fully functional frontend single-page application.',
  footer_cert: 'CERTIFICATION: SCS-GREEN-902 & ISO-9001:2015 REGISTERED | CARRIER-ID: ZN-LC-4567',
  footer_secured: 'SECURED SYSTEM',
  footer_green: 'GREEN AUDITED'
};

export const arTranslations: typeof enTranslations = {
  // nav
  nav_home: 'الرئيسية',
  nav_services: 'خدماتنا',
  nav_tracking_tech: 'التتبع والتقنيات',
  nav_calculator: 'حاسبة التكلفة',
  nav_tracker: 'تتبع الشحنة',
  nav_fleet: 'الأسطول والتقنيات',
  nav_about: 'من نحن',
  nav_faq: 'الأسئلة الشائعة',
  nav_contact: 'اتصل بنا',
  nav_track_btn: 'تتبع الطرد',

  // hero
  hero_badge: 'شبكات عالمية متعددة الوسائط',
  hero_title_1: 'الجيل القادم من الحلول اللوجستية',
  hero_title_2: 'المستقلة ومنخفضة الانبعاثات',
  hero_subtitle: 'نربط بين ممرات النقل البري الثقيل، والنقل الجوي المخصص، ومراكز التوزيع الحضرية الذكية تحت مظلة نظام تتبع موحد ومتكامل.',
  hero_btn_calc: 'حاسبة تكلفة النقل',
  hero_btn_track: 'تتبع الشحنة مباشرة',
  hero_stat_transits: 'الشحنات النشطة',
  hero_stat_countries: 'البلدان المتصلة',
  hero_stat_cargo: 'حجم الشحن السنوي',
  hero_stat_status: 'حالة نظام التشغيل',
  hero_stat_status_val: 'الأنظمة تعمل بكفاءة',

  // services
  services_badge: 'قنوات نقل مخصصة ومصممة بدقة',
  services_title: 'سير عمل لوجستي متكامل',
  services_subtitle: 'اكتشف قنوات الشحن والنقل المتخصصة لدينا، والمحسّنة بالكامل عبر القياس عن بعد المشفّر بنظام GPS، والتحكم بالحرارة والتوجيه الديناميكي.',
  services_transit_time: 'وقت العبور',
  services_capacity: 'السعة الاستيعابية',
  services_coverage: 'التغطية الجغرافية',
  services_btn_view: 'عرض المواصفات التفصيلية',

  // calculator
  calc_badge: 'محرك حساب تكلفة النقل',
  calc_title: 'تقدير فوري للتكلفة والأسعار',
  calc_subtitle: 'قم بتهيئة قياسات شحنتك لعرض تكلفة النقل القياسية، وكفاءة الطاقة، والانبعاثات الكربونية المتوقعة.',
  calc_weight: 'وزن الشحنة (رطل)',
  calc_volume: 'حجم الشحنة (قدم مكعب)',
  calc_distance: 'المسافة (ميل)',
  calc_urgency: 'درجة الاستعجال',
  calc_urgency_standard: 'شحن بري قياسي',
  calc_urgency_premium: 'نقل جوي وبحري ممتاز',
  calc_urgency_express: 'توصيل سريع فوري',
  calc_feat_route: 'حساب ديناميكي لمسار الرحلة',
  calc_feat_fees: 'حجز بدون رسوم ميناء خفية',
  calc_feat_billing: 'إرسال الفواتير الفورية',
  calc_matrix_title: 'مصفوفة الكفاءة والتكلفة',
  calc_total_rate: 'التكلفة الإجمالية التقديرية',
  calc_eco_rating: 'كفاءة استهلاك الوقود',
  calc_co2_offset: 'الحد من انبعاثات الكربون CO2',
  calc_est_dur: 'مدة العبور المتوقعة',
  calc_est_dur_val: 'بانتظار تحديد البيانات',
  calc_hours: 'ساعات',
  calc_days: 'أيام',

  // tracker
  tracker_badge: 'محطة القياس والمتابعة الحية',
  tracker_title: 'تتبع الشحنات في الوقت الفعلي',
  tracker_subtitle: 'أدخل رقم الشحنة النشط أو مرجع الإرسال لمراجعة الإحداثيات، ونقاط التفتيش، ووقت الوصول المتوقع.',
  tracker_search_title: 'البحث والتحقق عن بعد',
  tracker_search_placeholder: 'مثال: ZN-982-A3',
  tracker_active_routes: 'مسارات المحاكاة النشطة',
  tracker_routes_desc: 'اضغط على أي رقم تتبع مهيأ مسبقاً لعرض مسار الشحنة اللوجستي الديناميكي في شاشة التتبع:',
  tracker_copy_id: 'نسخ الرقم',
  tracker_copied: 'تم النسخ',
  tracker_no_manifest: 'لا توجد شحنة محملة حالياً',
  tracker_no_manifest_desc: 'استخدم لوحة المسارات المسبقة على اليسار لتحميل تفاصيل العبور، أو أدخل رمز تتبع صالحاً في حقل البحث أعلاه.',
  tracker_manifest_bill: 'وثيقة الشحنة النشطة',
  tracker_progress: 'مستوى تقدم الشحنة',
  tracker_complete: 'مكتملة',
  tracker_origin: 'مصدر الشحنة',
  tracker_destination: 'الوجهة المستهدفة',
  tracker_sender: 'المرسل',
  tracker_receiver: 'المستلم',
  tracker_class: 'فئة الشحن',
  tracker_eta: 'موعد الوصول المتوقع',
  tracker_checkpoint_title: 'سجل تدقيق وفحص نقاط العبور',
  tracker_status_delivered: 'تم التسليم',
  tracker_status_out_delivery: 'خارج للتسليم',
  tracker_status_in_transit: 'قيد الانتقال',
  tracker_status_pending: 'معلق',

  // fleet
  fleet_badge: 'تقنيات أسطول زينوميكس',
  fleet_title: 'بنية تحتية لأسطول ذكي منخفض الانبعاثات',
  fleet_subtitle: 'نقوم بتشغيل مركبات نقل بري خاضعة للتدقيق الكامل ومركبات شحن محلية تعمل بخوارزميات توجيه ذكية لتقليل التأخير والأثر البيئي.',
  fleet_tab_all: 'جميع الأصول',
  fleet_tab_heavy: 'المهام الثقيلة',
  fleet_tab_medium: 'المهام المتوسطة',
  fleet_tab_light: 'كهربائي / صغير',
  fleet_active_assets: 'أصول الأسطول النشطة',
  fleet_diag_console: 'لوحة التحكم بالتشخيص والاتصالات',
  fleet_class: 'الفئة',
  fleet_max_payload: 'الحمولة القصوى',
  fleet_cargo_vol: 'حجم الحمولة',
  fleet_propulsion: 'نظام الدفع',
  fleet_max_range: 'المدى الأقصى',
  fleet_telemetry_title: 'أنظمة القياس والتحكم المطورة',
  fleet_satellite_disclaimer: 'تتم مشاركة وتوجيه جميع بيانات القياس عبر أقمار صناعية مشفرة بنظام الـ GPS بتردد 5.8 جيجاهرتز.',
  fleet_btn_request: 'طلب سجل التوجيه',

  // about
  about_badge: 'ملف الشركة',
  about_title_1: 'ريادة وتطوير مستقبل',
  about_title_2: 'عمليات النقل الانسيابي',
  about_subtitle_1: 'تأسست شركة زينوميكس في عام 2018 بناءً على حقيقة بسيطة: سلاسل الإمداد التقليدية بطيئة، وغير شفافة، وغير كفؤة في استهلاك الكربون. من خلال دمج أصول النقل المتميزة مع التتبع في الوقت الفعلي، قمنا ببناء منصة لوجستية رائدة.',
  about_subtitle_2: 'واليوم، تنسق زينوميكس عمليات النقل البري بالشاحنات الكبيرة، وخدمات النقل المبرد المخصصة للأدوية والمستلزمات الطبية، والتوصيل السريع الصغير داخل المدن. التزامنا مطلق: مناولة آمنة للحمولات، وجداول توجيه سريعة، وخدمة احترافية موثوقة في كل ميل.',
  about_stat_assets: 'أصول الأسطول المسجلة',
  about_stat_offset: 'معيار موازنة الكربون المحايد',
  about_standards_title: 'المعايير التشغيلية والمهنية',
  about_pillar1_title: 'حراسة أمنية نشطة',
  about_pillar1_desc: 'تتم مراقبة جميع أختام الحاويات، وحالة أقفال المركبات، وخزائن النقل عبر إنذارات بيومترية حية ومفاتيح RFID.',
  about_pillar2_title: 'أولوية البصمة البيئية',
  about_pillar2_desc: 'من خلال الاستثمار في الشاحنات الهجينة للمسافات الطويلة وسيارات النقل الكهربائية، نعمل بنشاط على تقليل انبعاثات ثاني أكسيد الكربون عبر شبكاتنا بنسبة 40%.',
  about_pillar3_title: 'نزاهة المواعيد والدقة المطلقة',
  about_pillar3_desc: 'بفضل جداول التناوب الاحتياطية للسائقين وتنبيهات الصيانة التنبؤية، نحافظ على نسبة انضباط مثالية في المواعيد تبلغ 99.8%.',

  // contact
  contact_badge: 'تواصل معنا',
  contact_title: 'اتصل بمكتب التوجيه والعمليات',
  contact_subtitle: 'سواء كنت بحاجة إلى أسعار مخصصة للخدمات اللوجستية للمؤسسات، أو عروض أسعار للشحن الثقيل، أو إعداد مسارات الميل الأخير، فنحن جاهزون لمساعدتك.',
  contact_hq: 'المقر الرئيسي للشركة',
  contact_office_loc: 'موقع المكتب',
  contact_office_val: 'شبيديتسيونس أليه 42، 80331 ميونخ، ألمانيا',
  contact_inquiries: 'الاستفسارات التشغيلية',
  contact_reply_time: 'متوسط وقت الرد: أقل من 45 دقيقة',
  contact_hotline: 'الخط الساخن للدعم',
  contact_hotline_val: '+49 89 4200 1188',
  contact_hotline_hours: 'الإثنين - السبت: تغطية تشغيلية على مدار 24 ساعة',
  contact_iso_rating: 'شهادة الآيزو',
  contact_eco_license: 'الترخيص البيئي',
  contact_fleet_status: 'حالة الأسطول',
  contact_fleet_status_val: 'خاضع للتدقيق والأمان',
  contact_form_title: 'تذكرة طلب واستفسار عن مسار الشحن',
  contact_fullname: 'الاسم الكامل',
  contact_email: 'البريد الإلكتروني للشركة',
  contact_topic: 'موضوع الاستفسار',
  contact_msg: 'تفاصيل الرسالة',
  contact_topic_general: 'استفسار عام عن العمليات',
  contact_topic_highval: 'نقل البضائع الثمينة والمخصصة',
  contact_topic_relay: 'عقود ترحيل وتناوب الأسطول عبر الولايات',
  contact_topic_carbon: 'استشارة حول الحياد الكربوني',
  contact_placeholder_name: 'سارة أحمد',
  contact_placeholder_email: 'sarah@company.com',
  contact_placeholder_msg: 'يرجى تقديم تفاصيل وزن الشحنة، ومراكز العبور، والقيود الزمنية المتوقعة...',
  contact_btn_submitting: 'جاري التحقق من القنوات الآمنة...',
  contact_btn_transmit: 'إرسال تذكرة الاستفسار',
  contact_success_title: 'تم إرسال الاستفسار بنجاح',
  contact_success_desc: 'شكرًا لك! تم تجميع تذكرتك محلياً ومحاكاتها بنجاح. تم تعيين ممثل لوجستي افتراضياً لمراجعة مواصفات مسارك والتواصل معك.',
  contact_success_btn: 'إغلاق التأكيد',
  contact_ledger_title: 'سجل الجلسة المحلي',
  contact_ledger_remove: 'حذف السجل',

  // faq
  faq_badge: 'الاستفسارات الشائعة',
  faq_title: 'الأسئلة الأكثر شيوعاً',
  faq_subtitle: 'اعثر على إجابات سريعة للأسئلة المتكررة حول حساب المسارات، ومواصفات الأسطول، والتتبع في الوقت الفعلي، ومقاييس خفض الانبعاثات.',
  faq_q1: 'كيف تقوم زينوميكس بحساب تكلفة وأسعار الشحن؟',
  faq_a1: 'يتم احتساب التكلفة ديناميكياً بناءً على وزن الشحنة، وحجمها، ومسافة المسار، ودرجة الاستعجال المطلوبة. يمكنك استخدام محرك حساب تكلفة النقل المباشر أعلاه للحصول على عرض أسعار فوري، بما في ذلك تقديرات انبعاثات الكربون ومدة التوصيل.',
  faq_q2: 'ما هي التقنيات المستخدمة لضمان أمان الشحنات الثمينة؟',
  faq_a2: 'جميع أصول الشحن لدينا مجهزة بأختام حاويات ذكية تدعم تقنية RFID، وأنظمة قفل بيومترية، ونظام قياس وتتبع مشفر عبر الأقمار الصناعية بتردد 5.8 جيجاهرتز. أي محاولة فتح غير مصرح بها تطلق إنذاراً فورياً في مركز التحكم والعمليات الرئيسي.',
  faq_q3: 'كيف يعمل نظام التناوب والترحيل الثنائي للسائقين؟',
  faq_a3: 'في ممرات النقل البري الطويلة، نعتمد نظام تناوب مستمر للسائقين حيث يتسلم سائقون بدلاء ومهيأون الشاحنة عند نقاط عبور مخصصة. يلغي هذا فترات التوقف الإلزامية للراحة، مما يضمن حركة الشحن المستمرة وتحقيق دقة مواعيد بنسبة 99.8%.',
  faq_q4: 'ما الذي يجعل أسطول زينوميكس منخفض الانبعاثات وصديقاً للبيئة؟',
  faq_a4: 'نحن نشغل شاحنات نقل ثقيلة هجينة، وسيارات توصيل حضرية كهربائية بالكامل تعمل ببطاريات الحالة الصلبة، ودراجات شحن كهربائية صغيرة ذات بطاريات مزدوجة. بالتعاون مع خوارزميات التوجيه الصديقة للبيئة المدعومة بالذكاء الاصطناعي، نخفض انبعاثات الكربون بمعدل 40% مقارنة بالشبكات التقليدية.',
  faq_q5: 'هل يمكنني ربط منصة التجارة الإلكترونية الخاصة بشركتي مع مستودعات زينوميكس الذكية؟',
  faq_a5: 'نعم، توفر مستودعاتنا الذكية واجهات برمجة تطبيقات (API) مخصصة للمطورين. تتيح هذه الواجهات سحب الطلبات تلقائياً، وتحديث المخزون في الوقت الفعلي، وتوليد بوليصات الشحن فوراً عند تحديث مستويات المخزون.',

  footer_legal_title: 'الشؤون القانونية',
  footer_imprint: 'بيانات الشركة (Impressum)',
  footer_privacy: 'سياسة الخصوصية (Datenschutz)',

  // footer
  footer_slogan: 'ربط الشركات بممرات الشحن عالية السعة من خلال التوجيه الذكي متعدد الوسائط، وأنظمة التناوب الهجينة، وأجهزة التتبع المشفرة عبر الأقمار الصناعية.',
  footer_map_title: 'خريطة شبكة الشحن',
  footer_ops_title: 'العمليات اللوجستية',
  footer_ops_email: 'البريد الإلكتروني للتوجيه',
  footer_ops_hotline: 'الدعم الساخن',
  footer_ops_hours: 'نوافذ الدعم',
  footer_ops_hours_val: 'على مدار الساعة يومياً',
  footer_digest_title: 'نشرة المتابعة والقياس الأسبوعية',
  footer_digest_desc: 'اشترك لتلقي تقارير كثافة المسارات، وتحديثات تقنيات الأسطول، وحلول النقل الأخضر.',
  footer_digest_placeholder: 'news@company.com',
  footer_digest_success: 'تم تسجيل الاشتراك تلقائياً بنجاح!',
  footer_copy: '© 2026 شركة زينوميكس. جميع الحقوق محفوظة. تم التطوير ك تطبيق ويب تفاعلي متكامل.',
  footer_cert: 'الترخيص: مسجلة بموجب شهادات SCS-GREEN-902 و ISO-9001:2015 | معرف الناقل: ZN-LC-4567',
  footer_secured: 'نظام آمن ومحمي بالكامل',
  footer_green: 'مدقق وصديق للبيئة'
};

// Localized services list
export const servicesData_ar: ServiceItem[] = [
  {
    id: 'express',
    title: 'التوصيل السريع للميل الأخير',
    shortDesc: 'عمليات إرسال محلية فائقة السرعة، ومسارات توصيل عند الطلب، وشحن طرود مجهز بتنبيهات حية للموقع.',
    longDesc: 'تستفيد شبكتنا السريعة للميل الأخير من التوجيه الرقمي بالكامل وأسطول شاحنات التوصيل الحضرية منخفضة الانبعاثات لضمان وصول المستلزمات الطبية الطارئة والوثائق وشحنات التجزئة الحساسة للحرارة في غضون ساعات قليلة. يتم دمج مسارات التوصيل ديناميكياً لتقليل البصمة الكربونية مع الالتزام التام بالمواعيد.',
    iconName: 'Zap',
    features: [
      'ضمانات التوصيل في نفس اليوم أو صباح اليوم التالي',
      'دمج ديناميكي للمسارات الحضرية متعددة المحطات',
      'التحقق اللاملامس للتوقيعات البيومترية المعقدة',
      'تدقيق سلسلة التبريد وتسجيل درجات الحرارة باستمرار'
    ],
    specs: {
      transitTime: '1 - 6 ساعات',
      capacity: 'حتى 2,500 رطل لكل شاحنة',
      globalCoverage: 'مناطق المحيط الحضري والمترو'
    }
  },
  {
    id: 'freight',
    title: 'الشحن الثقيل والنقل البري',
    shortDesc: 'عمليات شحن بري كاملة (FTL) ومجتزأة (LTL) تسير عبر مسارات وطنية وطرق سريعة سلسة.',
    longDesc: 'تستخدم عمليات الشحن الثقيل في زينوميكس أسطول الجرارات والمقطورات الفاخرة للمسافات الطويلة. مجهزة بمستشعرات تتبع الشحنات المتقدمة، واعتمادات تجاوز محطات الوزن المؤتمتة، ونظام تبديل وتناوب السائقين، نحافظ على وتيرة مستقرة وسريعة عبر ممرات التوزيع الحيوية.',
    iconName: 'Truck',
    features: [
      'شحن مرن للحمولات الكاملة والجزئية',
      'أقفال ذكية ومستشعرات فتح الأبواب مراقبة بالاقمار الصناعية',
      'تناوب السائقين على المسافات الطويلة لمنع فترات التوقف والانتظار',
      'خيارات النقل متعدد الوسائط في العقد والموانئ الكبرى'
    ],
    specs: {
      transitTime: '24 - 72 ساعة',
      capacity: 'حتى 45,000 رطل لكل مقطورة',
      globalCoverage: 'عبر الولايات والمناطق الحدودية'
    }
  },
  {
    id: 'air-ocean',
    title: 'الشحن الجوي والبحري السريع',
    shortDesc: 'توجيه دولي متعدد الوسائط، وتخليص جمركي متكامل للاستيراد والتصدير، ونقل استراتيجي من المطار إلى الباب.',
    longDesc: 'من أجل التجارة العالمية، تربط زينوميكس سلاسل التوريد عبر القنوات الملاحية الكبرى وممرات الطيران السريعة. نتولى إدارة المستندات من البداية للنهاية، والنقل الجمركي الآمن، وجداول حاويات الملاحة، وحجوزات الطائرات على مدار الساعة لخدمة الشحنات العاجلة.',
    iconName: 'Globe',
    features: [
      'حجوزات طائرات شحن ممتازة للآليات والمعدات عالية القيمة',
      'شحن بحري للحاويات الكاملة (FCL) والحمولات المشتركة (LCL)',
      'تخليص جمركي كامل، وحسابات التعرفة الجمركية والرسوم',
      'شحن ومناولة البضائع الخطرة والمعتمدة من إياتا (IATA)'
    ],
    specs: {
      transitTime: '2 - 7 أيام عالمياً',
      capacity: 'لا توجد قيود على الحجم',
      globalCoverage: 'عالمي (أكثر من 220 دولة)'
    }
  },
  {
    id: 'warehousing',
    title: 'المستودعات الذكية وسلاسل الإمداد',
    shortDesc: 'مرافق تخزين ذكية ومؤمنة بالكامل، وتجديد مؤتمت للمخزون، وأنظمة فرز وتعبئة انسيابية.',
    longDesc: 'تعتبر مراكزنا اللوجستية بمثابة العقل المدبر للتخزين لأعمالك. مجهزة بأنظمة تتبع الباركود الفورية، ورفوف التقاط المنتجات الآلية، والخزائن البيئية المؤمنة، تتعامل مستودعات زينوميكس مع الفرز والتعبئة والربط البرمجي لتقديم الشحنات فور تغير مستويات المخزون.',
    iconName: 'Shield',
    features: [
      'أرفف مخزون مميزة ببطاقات RFID لدقة البحث الفوري',
      'خزائن مكيفة ومحكمة للمنتجات الدوائية والإلكترونيات الدقيقة',
      'سرعة المناولة والعبور في أقل من 45 دقيقة',
      'ربط برمجي مخصص ومباشر مع منصات التجارة الإلكترونية للتجزئة'
    ],
    specs: {
      transitTime: 'إرسال وتجهيز فوري',
      capacity: 'أكثر من 4.5 مليون قدم مربع عالمياً',
      globalCoverage: 'المراكز والمحاور الإقليمية الكبرى'
    }
  }
];

// Localized fleet list
export const fleetData_ar: FleetVehicle[] = [
  {
    id: 'fleet-1',
    name: 'شاحنة زينوميكس للمسافات الطويلة',
    type: 'heavy',
    typeName: 'شاحنة ثقيلة للمسافات الطويلة',
    payload: '44,000 رطل',
    volume: '3,800 قدم مكعب',
    range: '1,200 ميل',
    propulsion: 'ديزل منخفض الانبعاثات (معزز بنظام هجين)',
    imageAlt: 'مقطورة شحن ثقيلة من زينوميكس برسمة موجة زرقاء أنيقة',
    features: ['محيط كابينة إيروديناميكي', 'رادار تجنب الاصطدام المطور', 'تشخيص الصيانة التنبؤية الفوري']
  },
  {
    id: 'fleet-2',
    name: 'شاحنة زينوميكس للتوصيل السريع',
    type: 'medium',
    typeName: 'سيارة توصيل حضرية',
    payload: '4,800 رطل',
    volume: '460 قدم مكعب',
    range: '320 ميل',
    propulsion: 'كهربائي بالكامل (خيار خلايا وقود الهيدروجين)',
    imageAlt: 'سيارة توصيل بيضاء من زينوميكس تتميز برسوماتها الزرقاء اللامعة',
    features: ['هيكل وقاعدة عجلات مرنة للمنعطفات الضيقة', 'بوابة رفع هيدروليكية متكاملة', 'نظام كبح تجددي للمناطق الحضرية']
  },
  {
    id: 'fleet-3',
    name: 'دراجة زينوميكس الكهربائية الفورية',
    type: 'light',
    typeName: 'دراجة شحن كهربائية للمدن',
    payload: '450 رطل',
    volume: '55 قدم مكعب',
    range: '65 ميل',
    propulsion: 'مساعد دواسة ببطارية مزدوجة',
    imageAlt: 'دراجة شحن كهربائية خفيفة من زينوميكس مع مقصورة بضائع مغطاة',
    features: ['توصيل صغير منعدم الانبعاثات بالكامل', 'القدرة على عبور الممرات الضيقة والمزدحمة', 'حزم بطاريات قابلة للفك والاستبدال الفوري']
  },
  {
    id: 'fleet-4',
    name: 'سيارة زينوميكس للأسطول السريع',
    type: 'electric',
    typeName: 'سيارة إشراف وبريد سريع فوري',
    payload: '950 رطل',
    volume: '18 قدم مكعب',
    range: '380 ميل',
    propulsion: 'بطارية الحالة الصلبة EV',
    imageAlt: 'سيارة سيدان لأسطول زينوميكس مغلفة بالفضي والأزرق',
    features: ['نظام توسيط المسار على الطرق السريعة ذاتي القيادة', 'تتبع الملاحة الذكي لتوفير الطاقة', 'خزانة أمان فورية ومؤمنة للمستندات المهمة']
  }
];

// Localized testimonials list
export const testimonialsData_ar: Testimonial[] = [
  {
    id: 'test-1',
    name: 'سارة جينكينز',
    role: 'مديرة سلاسل الإمداد العالمية',
    company: 'ألتاس للتقنيات',
    quote: 'أحدثت زينوميكس ثورة في توجيه سلاسل الإمداد الإقليمية لدينا. ساعدتنا أنظمة تبديل السائقين والترحيل السريع في تقليل فترات النقل عبر الولايات بـ 24 ساعة، وانخفضت معدلات تلف البضائع إلى صفر بالمئة.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'ماركوس فانس',
    role: 'مشرف العمليات',
    company: 'برايم لحلول التجزئة',
    quote: 'تكامل التتبع المباشر للميل الأخير دقيق للغاية ومثير للإعجاب. يعشق عملاؤنا رؤية الشاحنة بالضبط وهي تقترب من مناطقهم التجارية. فريق احترافي للغاية وأسطول نظيف وأنيق.',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'إيلينا روستوفا',
    role: 'مديرة الخدمات اللوجستية',
    company: 'بيو فارما للأدوية',
    quote: 'عندما يتعلق الأمر بالمواد الدوائية والبيولوجية الحساسة للحرارة، فإن زينوميكس هي الناقل الوحيد الموثوق بالنسبة لنا. تدقيق سلسلة التبريد وسرعة التوصيل كانا حاسمين للحفاظ على سلامة منتجاتنا الطبية.',
    rating: 5
  }
];

// Localized tracking database
export const mockTrackingDatabase_ar: Record<string, TrackingData> = {
  'ZN-772-B1': {
    trackingId: 'ZN-772-B1',
    origin: 'مركز ميونيخ (ألمانيا)',
    destination: 'مركز فرز لندن (المملكة المتحدة)',
    sender: 'فانس للإلكترونيات AG',
    receiver: 'ألتاس اللوجستية المحدودة',
    serviceType: 'شحن سريع للحمولات الكاملة (FTL)',
    estimatedDelivery: 'غداً، الساعة 14:30',
    currentStatus: 'In Transit',
    progressPercentage: 65,
    history: [
      { step: 1, location: 'مركز ميونيخ (ألمانيا)', time: '05 يوليو، 08:00', status: 'تم استلام وثيقة الشحن', details: 'تم تسجيل الشحنة، تحميلها، وختمها في المحطة.' },
      { step: 2, location: 'تقاطع ستراسبورغ (فرنسا)', time: '05 يوليو، 14:15', status: 'موافقة العبور الحدودي', details: 'تم اجتياز نقطة التفتيش الحدودية، واكتمل تبديل وتناوب السائق.' },
      { step: 3, location: 'ميناء كاليه (فرنسا)', time: '05 يوليو، 19:40', status: 'تم اجتياز الجمارك', details: 'تم فحص الحاويات متعددة الوسائط، وتحميلها على المكوك البحري.' },
      { step: 4, location: 'محطة دوفر (المملكة المتحدة)', time: 'معلق', status: 'في الطريق إلى مركز الفرز', details: 'تم الانطلاق من محطة الميناء عبر ممر النقل السريع M2.' },
    ]
  },
  'ZN-982-A3': {
    trackingId: 'ZN-982-A3',
    origin: 'محطة الشحن الجوي في نيويورك (أستراليا)',
    destination: 'مطار باريس شارل ديغول (فرنسا)',
    sender: 'مختبرات بيوفارما بنيويورك',
    receiver: 'مستشفى بيتي سالبترير بباريس',
    serviceType: 'نقل جوي مبرد ممتاز وسلس',
    estimatedDelivery: '05 يوليو، 21:00 (اليوم)',
    currentStatus: 'Out for Delivery',
    progressPercentage: 90,
    history: [
      { step: 1, location: 'مطار JFK، نيويورك (أمريكا)', time: '03 يوليو، 22:30', status: 'إنشاء بوليصة الشحن الجوي', details: 'تم التحقق من درجة الحرارة عند 4.2 درجة مئوية، وإغلاق الشحنة في الحاوية الجوية.' },
      { step: 2, location: 'قطاع العبور عبر الأطلسي', time: '04 يوليو، 11:15', status: 'على متن الرحلة CDG-941', details: 'الرحلة الجوية المباشرة نشطة، مؤشرات الحرارة طبيعية ومستقرة تماماً.' },
      { step: 3, location: 'مطار باريس شارل ديغول (فرنسا)', time: '05 يوليو، 06:45', status: 'التخليص الجمركي بنجاح', details: 'تفريغ الحاويات الجوية، فحص درجة الحرارة، وتسليم الشحنة للفريق البري.' },
      { step: 4, location: 'المستودع الرئيسي بباريس', time: '05 يوليو، 15:30', status: 'خارج للتوصيل', details: 'تم الإسناد إلى سيارة التوصيل السريع رقم 14. السائق في طريقه للوجهة.' },
    ]
  },
  'ZN-104-C8': {
    trackingId: 'ZN-104-C8',
    origin: 'ميناء سنغافورة (سنغافورة)',
    destination: 'بوابة روتردام (هولندا)',
    sender: 'مجموعة باسيفيك للآلات والمعدات',
    receiver: 'يوروريل للتجميعات والحلول BV',
    serviceType: 'شحن بحري حاوية كاملة (FCL)',
    estimatedDelivery: '12 يوليو، الساعة 09:00',
    currentStatus: 'In Transit',
    progressPercentage: 40,
    history: [
      { step: 1, location: 'محطة سنغافورة 5 (SG)', time: '28 يونيو، 10:30', status: 'إيداع وتحميل الحاوية', details: 'تم وزن الحاوية الكاملة بطول 40 قدماً وتأمينها وشحنها على متن السفينة.' },
      { step: 2, location: 'عبور المحيط الهندي', time: '02 يوليو، 18:00', status: 'السفينة قيد الملاحة', details: 'عبور مستمر على متن سفينة "زينوميكس ستار". تم تأكيد إشارة الـ GPS بنجاح.' },
      { step: 3, location: 'قناة السويس الملاحية', time: 'معلق', status: 'الاقتراب من قطاع الميناء', details: 'تم تخصيص موعد عبور الممر الملاحي المجدول للمرحلة التالية.' },
    ]
  },
  'ZN-334-D9': {
    trackingId: 'ZN-334-D9',
    origin: 'المستودع المركزي ببرلين (ألمانيا)',
    destination: 'محور توزيع هامبورغ (ألمانيا)',
    sender: 'مراكز إمداد زينوميكس',
    receiver: 'تيك ريتيل لوجستكس هامبورغ',
    serviceType: 'إرسال سريع داخل المدينة',
    estimatedDelivery: '04 يوليو، الساعة 17:00',
    currentStatus: 'Delivered',
    progressPercentage: 100,
    history: [
      { step: 1, location: 'مستودع برلين (ألمانيا)', time: '04 يوليو، 09:00', status: 'إرسال وتوجيه الشحنة', details: 'تم الإسناد لمركبة توصيل متوسطة الحجم وسريعة.' },
      { step: 2, location: 'ممر الطريق السريع B5', time: '04 يوليو، 12:30', status: 'قيد الانتقال والعبور', details: 'عبور بري اعتيادي عبر الطرق السريعة.' },
      { step: 3, location: 'مستودع فرز شمال هامبورغ', time: '04 يوليو، 15:45', status: 'خارج للميل الأخير', details: 'تم النقل وتسهيل المهمة لدراجة شحن كهربائية حضرية.' },
      { step: 4, location: 'محطة تيك ريتيل، هامبورغ', time: '04 يوليو، 16:55', status: 'تم التسليم بنجاح', details: 'تم استلام التوقيع البيومتري بنجاح. تم التحقق من قبل المستلم (جيه ميلر).' },
    ]
  }
};

// ===== GERMAN TRANSLATIONS =====

export const deTranslations: typeof enTranslations = {
  // nav
  nav_home: 'Startseite',
  nav_services: 'Dienstleistungen',
  nav_tracking_tech: 'Tracking & Technik',
  nav_calculator: 'Kostenrechner',
  nav_tracker: 'Sendungsverfolgung',
  nav_fleet: 'Flotte & Technik',
  nav_about: 'Über uns',
  nav_faq: 'FAQ',
  nav_contact: 'Kontakt',
  nav_track_btn: 'Paket verfolgen',

  // hero
  hero_badge: 'GLOBALE MULTIMODALE NETZWERKE',
  hero_title_1: 'Autonome Logistik der nächsten',
  hero_title_2: 'Generation mit niedrigen Emissionen',
  hero_subtitle: 'Wir verbinden Schwerlast-Autobahnkorridore, maßgeschneiderte Flughafentransfers und intelligente städtische Verteilzentren unter einem durchgängigen Telemetriesystem.',
  hero_btn_calc: 'Kostenrechner',
  hero_btn_track: 'Live-Sendung verfolgen',
  hero_stat_transits: 'AKTIVE TRANSPORTE',
  hero_stat_countries: 'VERBUNDENE LÄNDER',
  hero_stat_cargo: 'JÄHRLICHES FRACHTVOLUMEN',
  hero_stat_status: 'DIAGNOSESTATUS',
  hero_stat_status_val: 'SYSTEME NOMINAL',

  // services
  services_badge: 'Maßgeschneiderte Lieferkanäle',
  services_title: 'Entwickelte Logistik-Workflows',
  services_subtitle: 'Entdecken Sie unsere spezialisierten Versand- und Frachtkanäle, die jeweils mit verschlüsselter GPS-Telemetrie, Klimasteuerung und dynamischer Routenführung optimiert sind.',
  services_transit_time: 'Transitzeit',
  services_capacity: 'Kapazität',
  services_coverage: 'Globale Abdeckung',
  services_btn_view: 'Detaillierte Spezifikationen',

  // calculator
  calc_badge: 'TRANSIT-KOSTENRECHNER',
  calc_title: 'Echtzeit-Kostenvoranschlag',
  calc_subtitle: 'Konfigurieren Sie Ihre Sendungsparameter, um Standardtransitkosten, Energieeffizienz und geschätzte Kraftstoffemissionen einzusehen.',
  calc_weight: 'Frachtgewicht (lbs)',
  calc_volume: 'Frachtvolumen (cu ft)',
  calc_distance: 'Entfernung (Meilen)',
  calc_urgency: 'Transportdringlichkeit',
  calc_urgency_standard: 'Standard-Bodenfracht',
  calc_urgency_premium: 'Premium Luft- & Seefracht',
  calc_urgency_express: 'Sofort-Expresskurier',
  calc_feat_route: 'Dynamische Routenberechnung',
  calc_feat_fees: 'Keine versteckten Hafengebühren',
  calc_feat_billing: 'Sofortige Rechnungsstellung',
  calc_matrix_title: 'Kosten- & Effizienzmatrix',
  calc_total_rate: 'GESCHÄTZTER GESAMTPREIS',
  calc_eco_rating: 'KRAFTSTOFF-ÖKO-BEWERTUNG',
  calc_co2_offset: 'CO2-KOMPENSATION',
  calc_est_dur: 'GESCHÄTZTE TRANSITZEIT',
  calc_est_dur_val: 'Parameter ausstehend',
  calc_hours: 'Stunden',
  calc_days: 'Tage',

  // tracker
  tracker_badge: 'Live-Telemetrie-Terminal',
  tracker_title: 'Echtzeit-Sendungsverfolgung',
  tracker_subtitle: 'Geben Sie Ihren aktiven Frachtbrief oder Versandreferenz ein, um Koordinaten, Transitkontrollpunkte und dynamische ETAs zu prüfen.',
  tracker_search_title: 'Telemetrie-Suche',
  tracker_search_placeholder: 'z.B. ZN-982-A3',
  tracker_active_routes: 'Aktive Demo-Routen',
  tracker_routes_desc: 'Klicken Sie auf eine vorkonfigurierte Tracking-ID, um den dynamischen Logistikstrom im Telemetrie-Viewer zu laden:',
  tracker_copy_id: 'ID kopieren',
  tracker_copied: 'Kopiert',
  tracker_no_manifest: 'Kein aktives Manifest geladen',
  tracker_no_manifest_desc: 'Verwenden Sie das linke Preset-Panel, um Frachttransit-Zeitpläne zu laden, oder geben Sie einen gültigen Tracking-Code im Suchfeld oben ein.',
  tracker_manifest_bill: 'Aktiver Frachtbrief',
  tracker_progress: 'TRANSITFORTSCHRITT',
  tracker_complete: 'ABGESCHLOSSEN',
  tracker_origin: 'Herkunftsdisponent',
  tracker_destination: 'Zielbestimmung',
  tracker_sender: 'Absender',
  tracker_receiver: 'Empfänger',
  tracker_class: 'Versandklasse',
  tracker_eta: 'Voraussichtliche Lieferung',
  tracker_checkpoint_title: 'Transit-Kontrollpunkt-Zeitachse',
  tracker_status_delivered: 'Zugestellt',
  tracker_status_out_delivery: 'In Zustellung',
  tracker_status_in_transit: 'Unterwegs',
  tracker_status_pending: 'Ausstehend',

  // fleet
  fleet_badge: 'Zenomix Flottentechnik',
  fleet_title: 'Emissionsarme intelligente Flotteninfrastruktur',
  fleet_subtitle: 'Wir betreiben vollständig geprüfte Fernverkehrs- und lokale Frachtfahrzeuge mit intelligenten Öko-Routing-Algorithmen zur Minimierung von Lieferverzögerungen und Umweltauswirkungen.',
  fleet_tab_all: 'Alle Fahrzeuge',
  fleet_tab_heavy: 'Schwerlast',
  fleet_tab_medium: 'Mittelschwer',
  fleet_tab_light: 'Elektrisch / Mikro',
  fleet_active_assets: 'Aktive Flottenfahrzeuge',
  fleet_diag_console: 'Diagnose-Konsole',
  fleet_class: 'KLASSE',
  fleet_max_payload: 'Max. Nutzlast',
  fleet_cargo_vol: 'Frachtvolumen',
  fleet_propulsion: 'Antrieb',
  fleet_max_range: 'Max. Reichweite',
  fleet_telemetry_title: 'Entwickelte Telemetriesysteme',
  fleet_satellite_disclaimer: 'Alle Telemetriedaten werden über verschlüsselte GPS-Satelliten im 5,8-GHz-Band übertragen.',
  fleet_btn_request: 'Versandprotokoll anfordern',

  // about
  about_badge: 'Unternehmensprofil',
  about_title_1: 'Wegbereiter für die Zukunft',
  about_title_2: 'des reibungslosen Transits',
  about_subtitle_1: 'Zenomix wurde 2018 gegründet, basierend auf einer einfachen Wahrheit: Traditionelle Lieferketten sind langsam, intransparent und hochgradig CO2-ineffizient. Durch die Vereinigung erstklassiger Transportmittel mit Echtzeit-Tracking haben wir eine Elite-Logistikplattform aufgebaut.',
  about_subtitle_2: 'Heute koordiniert Zenomix Trockenfrachtfahrten, temperaturgesteuerte Pharma-Kuriere und Same-Hour-Mikro-Dispatches über ein zwischenstaatliches Korridornetz. Unser Engagement bleibt absolut: sichere Frachtabwicklung, schnelle Routenpläne und professioneller, zuverlässiger Service auf jeder Meile.',
  about_stat_assets: 'Registrierte Flottenfahrzeuge',
  about_stat_offset: 'CO2-neutraler Kompensationsstandard',
  about_standards_title: 'Betriebsstandards',
  about_pillar1_title: 'Aktive Sicherheitsüberwachung',
  about_pillar1_desc: 'Alle Containersiegel, Fahrzeugverriegelungen und Transportschließfächer werden mit biometrischen Echtzeit-Alarmen und RFID-Schlüsseln überwacht.',
  about_pillar2_title: 'Grüner Fußabdruck als Priorität',
  about_pillar2_desc: 'Durch Investitionen in hybridgestützte Langstreckentransporter und Festkörper-EV-Transporter reduzieren wir aktiv die CO2-Emissionen in unseren Netzwerken um 40%.',
  about_pillar3_title: 'Radikale Pünktlichkeitsintegrität',
  about_pillar3_desc: 'Mit redundanten Fahrer-Relay-Plänen und vorausschauenden Wartungsalarmen halten wir eine makellose Pünktlichkeitsrate von 99,8%.',

  // contact
  contact_badge: 'Kontakt aufnehmen',
  contact_title: 'Verbinden Sie sich mit unserem Disponenten',
  contact_subtitle: 'Ob Sie maßgeschneiderte Unternehmenslogistik-Preise, Schwerfracht-Angebote oder Last-Mile-Routeneinrichtung benötigen – wir sind bereit zu helfen.',
  contact_hq: 'Unternehmenszentrale',
  contact_office_loc: 'Bürostandort',
  contact_office_val: 'Speditionsallee 42, 80331 München, Deutschland',
  contact_inquiries: 'Betriebliche Anfragen',
  contact_reply_time: 'Durchschnittliche Antwortzeit: Unter 45 Minuten',
  contact_hotline: 'Support-Hotline',
  contact_hotline_val: '+49 89 4200 1188',
  contact_hotline_hours: 'Mo - Sa: 24h Betriebsbereitschaft',
  contact_iso_rating: 'ISO-BEWERTUNG',
  contact_eco_license: 'ÖKO-LIZENZ',
  contact_fleet_status: 'FLOTTENSTATUS',
  contact_fleet_status_val: 'GEPRÜFT & SICHER',
  contact_form_title: 'Routen- & Transitanfrage-Ticket',
  contact_fullname: 'Vollständiger Name',
  contact_email: 'Firmen-E-Mail',
  contact_topic: 'Anfragethema',
  contact_msg: 'Nachrichtendetails',
  contact_topic_general: 'Allgemeine Betriebsanfrage',
  contact_topic_highval: 'Maßgeschneiderter Hochwert-Frachttransport',
  contact_topic_relay: 'Zwischenstaatliche Flotten-Relay-Verträge',
  contact_topic_carbon: 'CO2-Neutralitätsberatung',
  contact_placeholder_name: 'Max Mustermann',
  contact_placeholder_email: 'max@unternehmen.de',
  contact_placeholder_msg: 'Bitte geben Sie Frachtgewicht, Transithubs und zeitliche Einschränkungen an...',
  contact_btn_submitting: 'Sichere Kanäle werden validiert...',
  contact_btn_transmit: 'Anfrage-Ticket übermitteln',
  contact_success_title: 'Anfrage erfolgreich übermittelt',
  contact_success_desc: 'Vielen Dank! Ihr Ticket wurde clientseitig erstellt, simuliert und lokal protokolliert. Ein Logistikvertreter wurde zur Prüfung Ihrer Routenspezifikationen zugewiesen.',
  contact_success_btn: 'Bestätigung schließen',
  contact_ledger_title: 'Lokales Sitzungsprotokoll',
  contact_ledger_remove: 'Protokolleintrag entfernen',

  // faq
  faq_badge: 'HÄUFIGE FRAGEN',
  faq_title: 'Häufig gestellte Fragen',
  faq_subtitle: 'Finden Sie schnelle Antworten auf häufige Fragen zu unseren Routenberechnungen, Flottenspezifikationen, Echtzeit-Tracking und CO2-Kompensationen.',
  faq_q1: 'Wie berechnet Zenomix die Transport- und Frachtraten?',
  faq_a1: 'Die Raten werden dynamisch basierend auf Frachtgewicht, Volumen, Routenentfernung und der gewählten Dringlichkeit berechnet. Sie können unseren Echtzeit-Transitkostenrechner oben verwenden, um sofort ein Angebot inklusive geschätzter CO2-Kompensation und Transitdauer zu erhalten.',
  faq_q2: 'Welche Technologien gewährleisten die Sicherheit hochwertiger Fracht?',
  faq_a2: 'Alle unsere Frachtgüter sind mit RFID-fähigen Containerversiegelungen, biometrischen Schließsystemen und verschlüsselter 5.8-GHz-Satelliten-GPS-Telemetrie ausgestattet. Jeder unbefugte Zugriff löst sofort Alarm in unserer zentralen Disposition aus.',
  faq_q3: 'Wie funktioniert das Doppelfahrer-Relaysystem?',
  faq_a3: 'Für Fernverkehrsstrecken nutzen wir ein Fahrer-Relaysystem, bei dem frische Fahrer an ausgewiesenen Transitknotenpunkten übernehmen. Dies eliminiert obligatorische Ruhepausenverzögerungen und sorgt für eine kontinuierliche Frachtbewegung bei einer Pünktlichkeitsrate von 99,8 %.',
  faq_q4: 'Was macht die Zenomix-Flotte emissionsarm?',
  faq_a4: 'Wir betreiben hybridgestützte Sattelzüge, städtische Elektrotransporter mit Festkörperbatterien und E-Lastenräder mit Doppelbatterie. In Kombination mit unserer KI-gestützten Routenplanung reduzieren wir die CO2-Emissionen im Vergleich zu herkömmlichen Logistiknetzwerken um durchschnittlich 40 %.',
  faq_q5: 'Kann ich meine E-Commerce-Plattform in die Zenomix-Lagerhaltung integrieren?',
  faq_a5: 'Ja, unsere intelligenten Lagerhäuser bieten Entwicklern maßgeschneiderte API-Integrationen. Dies ermöglicht eine automatisierte Kommissionierung, Bestandsaktualisierungen in Echtzeit und den sofortigen Versandetikettendruck, sobald sich die Lagerbestände ändern.',

  footer_legal_title: 'Rechtliches',
  footer_imprint: 'Impressum',
  footer_privacy: 'Datenschutz',

  // footer
  footer_slogan: 'Verbindung von Unternehmen mit Hochkapazitäts-Frachtrouten durch intelligentes multimodales Routing, Premium-Hybrid-Relays und verschlüsselte Satelliten-Tracker.',
  footer_map_title: 'Frachtnetzwerk-Karte',
  footer_ops_title: 'Kernbetrieb',
  footer_ops_email: 'Versand-E-Mail',
  footer_ops_hotline: 'Hotline-Support',
  footer_ops_hours: 'Supportzeiten',
  footer_ops_hours_val: '24 Stunden täglich',
  footer_digest_title: 'Wöchentlicher Telemetrie-Digest',
  footer_digest_desc: 'Abonnieren Sie Routendichte-Berichte, Flottentechnik-Updates und grüne Transportoptimierungen.',
  footer_digest_placeholder: 'news@unternehmen.de',
  footer_digest_success: 'Abonnement erfolgreich registriert!',
  footer_copy: '© 2026 Zenomix Inc. Alle Rechte vorbehalten. Entwickelt als voll funktionsfähige Frontend-Single-Page-Anwendung.',
  footer_cert: 'ZERTIFIZIERUNG: SCS-GREEN-902 & ISO-9001:2015 REGISTRIERT | CARRIER-ID: ZN-LC-4567',
  footer_secured: 'GESICHERTES SYSTEM',
  footer_green: 'GRÜN GEPRÜFT'
};

// German localized services list
export const servicesData_de: ServiceItem[] = [
  {
    id: 'express',
    title: 'Express Last-Mile-Lieferung',
    shortDesc: 'Hyperlokal-schnelle Versendungen, On-Demand-Kurierrouten und Paketzustellung mit Echtzeit-Standortbenachrichtigungen.',
    longDesc: 'Unser Express-Last-Mile-Netzwerk nutzt volldigitalisierte Disposition und unsere emissionsarme urbane Lieferwagenflotte, um sicherzustellen, dass kritische medizinische Versorgungsgüter, Dokumente und temperaturempfindliche Einzelhandelslieferungen innerhalb weniger Stunden eintreffen. Alle Lieferrouten werden dynamisch konsolidiert, um den CO2-Fußabdruck zu minimieren.',
    iconName: 'Zap',
    features: [
      'Same-Day- und Next-Morning-Garantien',
      'Dynamische urbane Mehrstopp-Routenkonsolidierung',
      'Kontaktlose biometrische Signaturverifizierung',
      'Kühlketten-Temperaturprotokollierung und Verwahrungsaudit'
    ],
    specs: {
      transitTime: '1 - 6 Stunden',
      capacity: 'Bis zu 2.500 lbs pro Transporter',
      globalCoverage: 'Großstadtregionen'
    }
  },
  {
    id: 'freight',
    title: 'Schwerfracht & Fernverkehr',
    shortDesc: 'Komplettladungen (FTL) und Teilladungen (LTL) im Bodenverkehr auf nahtlosen zwischenstaatlichen Routen.',
    longDesc: 'Die Schwerfrachtoperationen von Zenomix nutzen unsere erstklassige Sattelzugflotte für den Fernverkehr. Ausgestattet mit modernen Frachtverfolgungssensoren, automatisierten Wiegestationsumgehungen und Doppelfahrer-Relays halten wir eine kontinuierliche Geschwindigkeit über die wichtigsten Verteilungsarterien aufrecht.',
    iconName: 'Truck',
    features: [
      'Flexible FTL- (Komplett-) & LTL- (Teil-) Frachten',
      'Satellitenüberwachte Smart-Locks und Türöffnungssensoren',
      'Doppelfahrer-Fernverkehr-Relays für Null-Standzeiten',
      'Intermodale Umschlagoptionen an wichtigen Hafenknoten'
    ],
    specs: {
      transitTime: '24 - 72 Stunden',
      capacity: 'Bis zu 45.000 lbs pro Trailer',
      globalCoverage: 'Zwischenstaatlich & grenzüberschreitend'
    }
  },
  {
    id: 'air-ocean',
    title: 'Luft- & Seefracht-Express',
    shortDesc: 'Multimodaler internationaler Versand, maßgeschneiderte Import-/Export-Zollabfertigung und strategischer Flughafen-bis-Tür-Transit.',
    longDesc: 'Für den globalen Handel verbindet Zenomix kritische Lieferketten über wichtige ozeanische Kanäle und Express-Luftverkehrskorridore. Wir verwalten End-to-End-Dokumentation, Zoll-Bonded-Transfers, Frachtmanifeste und Flugplatz-Zuweisungen rund um die Uhr.',
    iconName: 'Globe',
    features: [
      'Premium-Luftcharter-Buchungen für hochwertige Maschinen',
      'FCL- (Vollcontainer-) und LCL- (Stückgut-) Seefracht',
      'Zollmakler, Zollbürgschaften und Tarifberechnungen',
      'IATA-zertifizierte Gefahrgut-Abwicklung'
    ],
    specs: {
      transitTime: '2 - 7 Tage weltweit',
      capacity: 'Keine Volumenbegrenzung',
      globalCoverage: 'Global (220+ Länder)'
    }
  },
  {
    id: 'warehousing',
    title: 'Intelligente Lagerhaltung & Lieferkette',
    shortDesc: 'Gesicherte intelligente Lagereinrichtungen, automatisierte Bestandsauffüllung und fließende Lagerkommissionierungssysteme.',
    longDesc: 'Unsere Logistikzentren dienen als Lagerhirn Ihres Unternehmens. Ausgestattet mit Echtzeit-Barcode-Telemetrie, automatisierten Produktkommissionierregalen und sicheren Klimatresoren übernehmen Zenomix-Lager die Sortierung, Katalogisierung, Umverpackung und Cross-Docking nahtlos.',
    iconName: 'Shield',
    features: [
      'RFID-gekennzeichnete Inventarregale für sofortige Suchgenauigkeit',
      'Klimatisierte Tresorräume für Pharma/Elektronik',
      'Cross-Docking-Geschwindigkeiten unter 45 Minuten',
      'Benutzerdefinierte API-Hooks für direkten E-Commerce-Sync'
    ],
    specs: {
      transitTime: 'Sofortiger Versand',
      capacity: 'Über 4,5 Mio. m² weltweit',
      globalCoverage: 'Regionale Hub-Zentren'
    }
  }
];

// German localized fleet list
export const fleetData_de: FleetVehicle[] = [
  {
    id: 'fleet-1',
    name: 'Zenomix Fernverkehrs-Sattelzug',
    type: 'heavy',
    typeName: 'Schwerer Fernverkehrs-Lkw',
    payload: '44.000 lbs',
    volume: '3.800 cu ft',
    range: '1.200 Meilen',
    propulsion: 'Ultra-emissionsarmer Diesel (Hybrid-gestützt)',
    imageAlt: 'Zenomix Schwerlast-Logistik-Trailer mit elegantem blauem Wellengrafik-Design',
    features: ['Aerodynamische Kabinenverkleidungen', 'Kollisionsvermeidungsradar', 'Prädiktive Wartungsdiagnostik']
  },
  {
    id: 'fleet-2',
    name: 'Zenomix Express-Transporter',
    type: 'medium',
    typeName: 'Städtischer Lieferwagen',
    payload: '4.800 lbs',
    volume: '460 cu ft',
    range: '320 Meilen',
    propulsion: 'Vollelektrisch (Wasserstoff-Brennstoffzellen-Option)',
    imageAlt: 'Zenomix weißer Lieferwagen mit charakteristischem Cyan- und Blaudesign',
    features: ['Kurzwenderadius-Fahrgestell', 'Integrierte Hubladebühne', 'Regeneratives urbanes Bremssystem']
  },
  {
    id: 'fleet-3',
    name: 'Zenomix Quad-Dispatcher',
    type: 'light',
    typeName: 'Elektrisches Stadtfracht-Lastenrad',
    payload: '450 lbs',
    volume: '55 cu ft',
    range: '65 Meilen',
    propulsion: 'Dual-Batterie-Pedalunterstützung',
    imageAlt: 'Zenomix leichter elektrischer Quad-Dispatcher mit überdachtem Frachtfach',
    features: ['Emissionsfreie Mikro-Zustellung', 'Zugang zu engen Gassen', 'Austauschbare Wechsel-Akkupacks']
  },
  {
    id: 'fleet-4',
    name: 'Zenomix Flotten-Limousine',
    type: 'electric',
    typeName: 'Aufsichts- & Express-Kurierwagen',
    payload: '950 lbs',
    volume: '18 cu ft',
    range: '380 Meilen',
    propulsion: 'Festkörperbatterie-EV',
    imageAlt: 'Zenomix Firmenflotten-Limousine in silber-blauer Folierung',
    features: ['Autonome Autobahnspurzentrierung', 'Öko-Routing-GPS-Tracking', 'Sofort-Dokumentensicherheitsschließfach']
  }
];

// German localized testimonials list
export const testimonialsData_de: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Jenkins',
    role: 'Globale Lieferketten-Direktorin',
    company: 'Altas Tech Corp',
    quote: 'Zenomix hat unsere regionale Lieferkettenführung transformiert. Ihre dynamischen Fernverkehrs-Doppelrelays verkürzten unsere zwischenstaatlichen Transportzyklen um 24 Stunden, und unsere Warenbeschädigungsrate sank auf absolut null.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Marcus Vance',
    role: 'Betriebsleiter',
    company: 'Prime Retail Solutions',
    quote: 'Die Echtzeit-Last-Mile-Tracking-Integration ist unglaublich präzise. Unsere Kunden lieben es zu sehen, wann genau der Lieferwagen ihre Geschäftszone betritt. Äußerst professionelles Team und makellose, saubere Flotte.',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    role: 'Logistik-Managerin',
    company: 'BioPharma Global',
    quote: 'Für temperaturkontrollierte pharmazeutische Materialien ist Zenomix unser einziger vertrauenswürdiger Frachtführer. Ihre Kühlkettenprüfung und der schnelle Kurierdienst waren entscheidend für die Aufrechterhaltung der absoluten Produktsicherheit.',
    rating: 5
  }
];

// German localized tracking database
export const mockTrackingDatabase_de: Record<string, TrackingData> = {
  'ZN-772-B1': {
    trackingId: 'ZN-772-B1',
    origin: 'München Hub (DE)',
    destination: 'London Sortierzentrum (UK)',
    sender: 'Vance Electronics AG',
    receiver: 'Altas Logistics Ltd',
    serviceType: 'Express-Komplettladung (FTL)',
    estimatedDelivery: 'Morgen, 14:30 Uhr',
    currentStatus: 'In Transit',
    progressPercentage: 65,
    history: [
      { step: 1, location: 'München Hub (DE)', time: '05. Juli, 08:00', status: 'Frachtmanifest eingegangen', details: 'Sendung registriert, verladen und am Terminal versiegelt.' },
      { step: 2, location: 'Knotenpunkt Straßburg (FR)', time: '05. Juli, 14:15', status: 'Grenzfreigabe OK', details: 'Transitkontrollpunkt passiert, Fahrerwechsel abgeschlossen.' },
      { step: 3, location: 'Hafen Calais (FR)', time: '05. Juli, 19:40', status: 'Zoll passiert', details: 'Intermodalfracht gescannt, auf Kanaltunnel-Shuttle verladen.' },
      { step: 4, location: 'Terminal Dover (UK)', time: 'Ausstehend', status: 'Auf dem Weg zur Sortierung', details: 'Vom Hafenterminal über M2-Fernverkehr versandt.' },
    ]
  },
  'ZN-982-A3': {
    trackingId: 'ZN-982-A3',
    origin: 'New York Luftfrachtterminal (US)',
    destination: 'Paris Charles de Gaulle (FR)',
    sender: 'BioPharma Laboratories NY',
    receiver: 'Hôpital de la Pitié-Salpêtrière',
    serviceType: 'Premium Kühlketten-Luftfracht',
    estimatedDelivery: '05. Juli, 21:00 Uhr (Heute)',
    currentStatus: 'Out for Delivery',
    progressPercentage: 90,
    history: [
      { step: 1, location: 'JFK Flughafen, NY (US)', time: '03. Juli, 22:30', status: 'Luftfrachtbrief erstellt', details: 'Temperatur bei 4,2°C validiert, Fracht im Luft-Bunker gesichert.' },
      { step: 2, location: 'Atlantik-Transitsektor', time: '04. Juli, 11:15', status: 'Im Flug CDG-941', details: 'Direkter Lufttransportflug aktiv, Temperaturmonitore normal.' },
      { step: 3, location: 'Flughafen Paris CDG (FR)', time: '05. Juli, 06:45', status: 'Zollfreigabe', details: 'Luftcontainer entladen, Temperatur geprüft, an Bodenteam übergeben.' },
      { step: 4, location: 'Paris Zentraldepot', time: '05. Juli, 15:30', status: 'In Zustellung', details: 'Zugewiesen an Express-Lieferwagen #14. Kurierfahrer unterwegs.' },
    ]
  },
  'ZN-104-C8': {
    trackingId: 'ZN-104-C8',
    origin: 'Hafen Singapur (SG)',
    destination: 'Rotterdam Gateway (NL)',
    sender: 'Pacific Machinery Group',
    receiver: 'EuroRail Assemblies BV',
    serviceType: 'Seefracht (FCL - Vollcontainer)',
    estimatedDelivery: '12. Juli, 09:00 Uhr',
    currentStatus: 'In Transit',
    progressPercentage: 40,
    history: [
      { step: 1, location: 'Singapur Terminal 5 (SG)', time: '28. Juni, 10:30', status: 'Container eingelagert', details: 'Voller 40-Fuß-Container gewogen, gesichert und auf Schiff verladen.' },
      { step: 2, location: 'Indischer Ozean Transit', time: '02. Juli, 18:00', status: 'Schiff unterwegs', details: 'Kontinuierlicher Transit an Bord der MS Zenomix Star. GPS-Ping bestätigt.' },
      { step: 3, location: 'Suezkanal-Passage', time: 'Ausstehend', status: 'Annäherung an Hafensektor', details: 'Geplanter Kanaldurchfahrts-Slot für die nächste Phase zugewiesen.' },
    ]
  },
  'ZN-334-D9': {
    trackingId: 'ZN-334-D9',
    origin: 'Berlin Zentrallager (DE)',
    destination: 'Hamburg Verteilzentrum (DE)',
    sender: 'Zenomix Versorgungszentren',
    receiver: 'TechRetail Logistics Hamburg',
    serviceType: 'Städtischer Kurierversand',
    estimatedDelivery: '04. Juli, 17:00 Uhr',
    currentStatus: 'Delivered',
    progressPercentage: 100,
    history: [
      { step: 1, location: 'Berlin Lager (DE)', time: '04. Juli, 09:00', status: 'Auftrag versandt', details: 'Zugewiesen an mittelgroßen Express-Transporter.' },
      { step: 2, location: 'B5 Autobahn-Korridor', time: '04. Juli, 12:30', status: 'Unterwegs', details: 'Routinemäßiger Autobahn-Transit.' },
      { step: 3, location: 'Hamburg Nord Sortierzentrum', time: '04. Juli, 15:45', status: 'Letzte Meile', details: 'Übergabe an elektrisches urbanes Lastenrad.' },
      { step: 4, location: 'TechRetail Terminal, Hamburg', time: '04. Juli, 16:55', status: 'Erfolgreich zugestellt', details: 'Biometrische Unterschrift erhalten. Verifiziert durch Empfänger (J. Müller).' },
    ]
  }
};
