import { ServiceItem, FleetVehicle, Testimonial, TrackingData } from './types';

export const servicesData: ServiceItem[] = [
  {
    id: 'express',
    title: 'Express Last-Mile Delivery',
    shortDesc: 'Hyper-local rapid dispatches, on-demand courier routes, and parcel delivery with real-time location alerts.',
    longDesc: 'Our Express Last-Mile network leverages fully digitized dispatching and our low-emission urban van fleet to ensure that critical medical supplies, documents, retail packages, and temperature-sensitive products reach their destinations within hours. All last-mile delivery routes are dynamically consolidated to minimize carbon footprints while preserving perfect ETA compliance.',
    iconName: 'Zap',
    features: [
      'Same-day and next-morning guarantees',
      'Dynamic urban multi-stop route consolidation',
      'Contactless biometric signature verification',
      'Cold-chain temperature logging and custody audit'
    ],
    specs: {
      transitTime: '1 - 6 Hours',
      capacity: 'Up to 2,500 lbs per van',
      globalCoverage: 'Metro Area Zones'
    }
  },
  {
    id: 'freight',
    title: 'Heavy Freight & Line-Haul',
    shortDesc: 'Full Truckload (FTL) and Less-than-Truckload (LTL) ground operations running seamless interstate routes.',
    longDesc: 'Zenomix heavy freight operations utilize our premium tractor-trailer line-haul fleet. With modern cargo tracking sensors, automated weigh-station bypass credentials, and dual-driver relays, we maintain continuous speed across major distribution arteries. Whether you need standard dry van haulage, flatbeds, or heavy-duty refrigerated freight, we deliver robust volume capacities safely.',
    iconName: 'Truck',
    features: [
      'Flexible FTL (Full) & LTL (Partial) freighting',
      'Satellite-monitored smart locks and door-open sensors',
      'Double-driver long-haul relays for zero idle time',
      'Intermodal transfer options at major port nodes'
    ],
    specs: {
      transitTime: '24 - 72 Hours',
      capacity: 'Up to 45,000 lbs per trailer',
      globalCoverage: 'Interstate & Cross-Border'
    }
  },
  {
    id: 'air-ocean',
    title: 'Air & Ocean Expediting',
    shortDesc: 'Multi-modal international forwarding, custom import/export clearance, and strategic airport-to-door transit.',
    longDesc: 'For global trade, Zenomix connects critical supply chains through major oceanic channels and express aviation lanes. We manage end-to-end documentation, custom bonded transfers, cargo manifesting, and flight-space allocations. Our global freight-forwarding desks operate 24/7/365 to handle urgent oceanic containers and air cargo charter space.',
    iconName: 'Globe',
    features: [
      'Premium air charter bookings for high-value machinery',
      'FCL (Full Container) and LCL (Loose Cargo) ocean shipping',
      'Customs brokerage, duty bonds, and tariff calculations',
      'IATA-certified dangerous and hazardous goods handling'
    ],
    specs: {
      transitTime: '2 - 7 Days Global',
      capacity: 'No volume limits',
      globalCoverage: 'Global (220+ Countries)'
    }
  },
  {
    id: 'warehousing',
    title: 'Smart Warehousing & Supply Chain',
    shortDesc: 'Secured smart stock facilities, automated inventory replenishment, and fluid warehouse picking systems.',
    longDesc: 'Our logistics centers serve as the storage brain of your business. Equipped with real-time barcode telemetry, automated product picking racks, and secure ambient vaults, Zenomix warehouses handle sorting, cataloging, repackaging, and cross-docking seamlessly. Integration with our order APIs provides automated shipping triggers as soon as stock levels shift.',
    iconName: 'Shield',
    features: [
      'RFID-tagged inventory shelves for instant search accuracy',
      'Climate-controlled ambient vaults for bio-pharma/electronics',
      'Cross-docking speeds under 45 minutes',
      'Custom API hooks for direct retail e-commerce syncing'
    ],
    specs: {
      transitTime: 'Immediate Dispatch',
      capacity: 'Over 4.5M sq. ft. globally',
      globalCoverage: 'Regional Hub Centers'
    }
  }
];

export const fleetData: FleetVehicle[] = [
  {
    id: 'fleet-1',
    name: 'Zenomix Line-Haul Tractor',
    type: 'heavy',
    typeName: 'Heavy Long-Haul Truck',
    payload: '44,000 lbs',
    volume: '3,800 cu ft',
    range: '1,200 miles',
    propulsion: 'Ultra-Low Emission Diesel (Hybrid-Assisted)',
    imageAlt: 'Zenomix heavy logistics trailer with sleek blue wave graphics',
    features: ['Aerodynamic cabin fairings', 'Collision avoidance radar', 'Predictive maintenance diagnostics']
  },
  {
    id: 'fleet-2',
    name: 'Zenomix Express Carrier',
    type: 'medium',
    typeName: 'Urban Delivery Van',
    payload: '4,800 lbs',
    volume: '460 cu ft',
    range: '320 miles',
    propulsion: 'All-Electric (Hydrogen Fuel Cell Option)',
    imageAlt: 'Zenomix white delivery van featuring the signature cyan and blue graphics',
    features: ['Short-turn radius chassis', 'Integrated lift-gate', 'Regenerative urban braking']
  },
  {
    id: 'fleet-3',
    name: 'Zenomix Quad Dispatcher',
    type: 'light',
    typeName: 'Electric Urban Cargo Bike',
    payload: '450 lbs',
    volume: '55 cu ft',
    range: '65 miles',
    propulsion: 'Dual-Battery Pedal Assist',
    imageAlt: 'Zenomix light electric quad dispatcher with covered freight compartment',
    features: ['Zero-emission micro-delivery', 'Narrow lane access', 'Removable swappable battery packs']
  },
  {
    id: 'fleet-4',
    name: 'Zenomix Fleet Sedan',
    type: 'electric',
    typeName: 'Supervisor & Express Courier Car',
    payload: '950 lbs',
    volume: '18 cu ft',
    range: '380 miles',
    propulsion: 'Solid-State Battery EV',
    imageAlt: 'Zenomix corporate fleet sedan in silver and blue wrapping',
    features: ['Autonomous highway lane centering', 'Eco-routing GPS tracking', 'Immediate document security locker']
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Jenkins',
    role: 'Global Supply Chain Director',
    company: 'Altas Tech Corp',
    quote: 'Zenomix transformed our regional supply routing. Their dynamic line-haul double relays cut our interstate transport cycles by 24 hours, and our stock damage rate fell to absolute zero.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Marcus Vance',
    role: 'Operations Lead',
    company: 'Prime Retail Solutions',
    quote: 'The real-time last-mile tracking integration is incredibly precise. Our customers love seeing exactly when the delivery van enters their commercial zone. Extremely professional team and spotless clean fleet.',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    role: 'Logistics Manager',
    company: 'BioPharma Global',
    quote: 'For temperature-controlled pharmaceutical materials, Zenomix is our only trusted carrier. Their cold-chain auditing and prompt courier service have been critical in maintaining absolute product safety.',
    rating: 5
  }
];

export const mockTrackingDatabase: Record<string, TrackingData> = {
  'ZN-772-B1': {
    trackingId: 'ZN-772-B1',
    origin: 'Munich Hub (DE)',
    destination: 'London Sort Center (UK)',
    sender: 'Vance Electronics AG',
    receiver: 'Altas Logistics Ltd',
    serviceType: 'Express Freight (FTL)',
    estimatedDelivery: 'Tomorrow, 14:30',
    currentStatus: 'In Transit',
    progressPercentage: 65,
    history: [
      { step: 1, location: 'Munich Hub (DE)', time: '05 July, 08:00', status: 'Cargo Manifest Received', details: 'Shipment registered, loaded, and sealed at terminal.' },
      { step: 2, location: 'Strasbourg Junction (FR)', time: '05 July, 14:15', status: 'Border Clearance OK', details: 'Passed transit checkpoint, driver relay swap complete.' },
      { step: 3, location: 'Calais Port (FR)', time: '05 July, 19:40', status: 'Customs Passed', details: 'Intermodal freight scanned, loaded onto channel shuttle.' },
      { step: 4, location: 'Dover Terminal (UK)', time: 'Pending', status: 'In Route to Sorting', details: 'Dispatched from port terminal via M2 line-haul.' },
    ]
  },
  'ZN-982-A3': {
    trackingId: 'ZN-982-A3',
    origin: 'New York Air Cargo Terminal (US)',
    destination: 'Paris Charles de Gaulle (FR)',
    sender: 'BioPharma Laboratories NY',
    receiver: 'Hôpital de la Pitié-Salpêtrière',
    serviceType: 'Premium Cold-Chain Air',
    estimatedDelivery: '05 July, 21:00 (Today)',
    currentStatus: 'Out for Delivery',
    progressPercentage: 90,
    history: [
      { step: 1, location: 'JFK Airport, NY (US)', time: '03 July, 22:30', status: 'Air Waybill Created', details: 'Temperature validated at 4.2°C, cargo locked in air-bunker.' },
      { step: 2, location: 'Atlantic Transit Sector', time: '04 July, 11:15', status: 'In Flight CDG-941', details: 'Direct air transport flight active, temperature monitors normal.' },
      { step: 3, location: 'Paris CDG Airport (FR)', time: '05 July, 06:45', status: 'Customs Clear', details: 'Air container discharged, temperature checked, passed to ground team.' },
      { step: 4, location: 'Paris Central Depot', time: '05 July, 15:30', status: 'Out for Delivery', details: 'Assigned to Express Delivery Van #14. Carrier driver on route.' },
    ]
  },
  'ZN-104-C8': {
    trackingId: 'ZN-104-C8',
    origin: 'Singapore Port (SG)',
    destination: 'Rotterdam Gateway (NL)',
    sender: 'Pacific Machinery Group',
    receiver: 'EuroRail Assemblies BV',
    serviceType: 'Ocean Freight (FCL)',
    estimatedDelivery: '12 July, 09:00',
    currentStatus: 'In Transit',
    progressPercentage: 40,
    history: [
      { step: 1, location: 'Singapore Terminal 5 (SG)', time: '28 June, 10:30', status: 'Container Lodged', details: 'Full 40ft container weighed, locked, and stowed on vessel.' },
      { step: 2, location: 'Indian Ocean Transit', time: '02 July, 18:00', status: 'Vessel in Transit', details: 'Continuous transit aboard MS Zenomix Star. GPS ping confirmed.' },
      { step: 3, location: 'Suez Canal Pass', time: 'Pending', status: 'Approaching Port Sector', details: 'Scheduled channel passage slot assigned for next phase.' },
    ]
  },
  'ZN-334-D9': {
    trackingId: 'ZN-334-D9',
    origin: 'Berlin Central Warehouse (DE)',
    destination: 'Hamburg Distribution Hub (DE)',
    sender: 'Zenomix Supply Centers',
    receiver: 'TechRetail Logistics Hamburg',
    serviceType: 'Urban Courier Dispatch',
    estimatedDelivery: '04 July, 17:00',
    currentStatus: 'Delivered',
    progressPercentage: 100,
    history: [
      { step: 1, location: 'Berlin Warehouse (DE)', time: '04 July, 09:00', status: 'Order Dispatched', details: 'Assigned to medium-duty express carrier.' },
      { step: 2, location: 'B5 Highway Corridor', time: '04 July, 12:30', status: 'In Transit', details: 'Routine highway transit.' },
      { step: 3, location: 'Hamburg North sorting hub', time: '04 July, 15:45', status: 'Out for Last Mile', details: 'Transferred to electric urban delivery bike.' },
      { step: 4, location: 'TechRetail Terminal, Hamburg', time: '04 July, 16:55', status: 'Delivered Successfully', details: 'Biometric sign-off received. Verified by recipient (J. Miller).' },
    ]
  }
};
