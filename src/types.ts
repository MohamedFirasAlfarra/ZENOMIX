export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  features: string[];
  specs: {
    transitTime: string;
    capacity: string;
    globalCoverage: string;
  };
}

export interface FleetVehicle {
  id: string;
  name: string;
  type: 'heavy' | 'medium' | 'light' | 'electric';
  typeName: string;
  payload: string;
  volume: string;
  range: string;
  propulsion: string;
  imageAlt: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl?: string;
  quote: string;
  rating: number;
}

export interface ShipmentStatus {
  step: number;
  location: string;
  time: string;
  status: string;
  details: string;
}

export interface TrackingData {
  trackingId: string;
  origin: string;
  destination: string;
  sender: string;
  receiver: string;
  serviceType: string;
  estimatedDelivery: string;
  currentStatus: 'In Transit' | 'Out for Delivery' | 'Delivered' | 'Pending';
  progressPercentage: number;
  history: ShipmentStatus[];
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
