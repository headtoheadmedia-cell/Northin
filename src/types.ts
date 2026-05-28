export interface BanquetSpace {
  id: string;
  name: string;
  type: 'signature' | 'social' | 'boardroom' | 'seminar' | 'convention';
  tagline: string;
  description: string;
  sizeSqFt: number;
  ceilingHeight: number;
  theatreCapacity: number;
  clusterCapacity: number;
  image: string;
  basePrice?: number;
}

export interface BookingInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  eventType: string;
  preferredDate: string;
  guestCount: number;
  message: string;
  spaceId?: string;
  spaceName?: string;
  status: 'Pending' | 'Contacted' | 'Confirmed' | 'Declined';
  createdAt: string;
}

export interface Amenity {
  icon: string;
  title: string;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  comment: string;
  rating: number;
}
