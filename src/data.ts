import { BanquetSpace, Amenity, Review } from './types';
import nayraImage from '../assets/nayra.jpg';
import nakshatraImage from '../assets/nakshatra.jpg';
import novaImage from '../assets/nova.jpg';
import nexusImage from '../assets/nexus.jpg';
import niyashaImage from '../assets/niyasha.jpg';
import galleryWedding1 from '../assets/gallery-wedding-1.jpg';
import galleryWedding2 from '../assets/gallery-wedding-2.jpg';
import galleryWedding3 from '../assets/gallery-wedding-3.jpg';
import galleryWedding4 from '../assets/gallery-wedding-4.jpg';
import galleryWedding5 from '../assets/gallery-wedding-5.jpg';
import galleryWedding6 from '../assets/gallery-wedding-6.jpg';
import galleryWedding7 from '../assets/gallery-wedding-7.jpg';
import galleryWedding8 from '../assets/gallery-wedding-8.jpg';
import galleryWedding9 from '../assets/gallery-wedding-9.jpg';
import galleryWedding10 from '../assets/gallery-wedding-10.jpg';
import galleryWedding11 from '../assets/gallery-wedding-11.jpg';
import galleryWedding12 from '../assets/gallery-wedding-12.jpg';
import galleryWedding13 from '../assets/gallery-wedding-13.jpg';
import corporateImage from '../assets/corporate.jpg';

export const BANQUET_SPACES: BanquetSpace[] = [
  {
    id: 'nayra',
    name: 'NAYRA',
    type: 'signature',
    tagline: 'Signature Venue',
    description: 'A perfect setting for grand weddings and receptions. NAYRA embodies classical luxury with contemporary finishes, designed to create an atmosphere of timeless celebration.',
    sizeSqFt: 1700,
    ceilingHeight: 9,
    theatreCapacity: 100,
    clusterCapacity: 50,
    image: nayraImage,
    basePrice: 75000
  },
  {
    id: 'nakshatra',
    name: 'NAKSHATRA',
    type: 'social',
    tagline: 'Premium Social Space',
    description: 'Ideal for stylish celebrations and premium social events. NAKSHATRA offers a sophisticated, modern palette with state-of-the-art lighting systems.',
    sizeSqFt: 1600,
    ceilingHeight: 9,
    theatreCapacity: 100,
    clusterCapacity: 50,
    image: nakshatraImage,
    basePrice: 65000
  },
  {
    id: 'nova',
    name: 'NOVA',
    type: 'boardroom',
    tagline: 'Executive Room',
    description: 'Perfect for high-stakes board meetings and private executive deliberations with full hardware presentation suites.',
    sizeSqFt: 414,
    ceilingHeight: 10,
    theatreCapacity: 30,
    clusterCapacity: 15,
    image: novaImage,
    basePrice: 20000
  },
  {
    id: 'nexus',
    name: 'NEXUS',
    type: 'seminar',
    tagline: 'Seminar Suite',
    description: 'Ideal for professional seminars, workshops, and immersive training sessions. Fully equipped with multi-channel sound and visual aids.',
    sizeSqFt: 828,
    ceilingHeight: 11,
    theatreCapacity: 50,
    clusterCapacity: 30,
    image: nexusImage,
    basePrice: 35000
  },
  {
    id: 'niyasha',
    name: 'NIYASHA',
    type: 'convention',
    tagline: 'Convention Suite',
    description: 'Best for larger conferences, corporate keynote addresses, gala dinners, and key industrial networking conventions.',
    sizeSqFt: 1070,
    ceilingHeight: 12,
    theatreCapacity: 70,
    clusterCapacity: 45,
    image: niyashaImage,
    basePrice: 50000
  }
];

export const AMENITIES: Amenity[] = [
  {
    icon: 'restaurant',
    title: 'Gourmet Catering',
    description: 'Tailored state menus featuring global fusion and legacy heritage cuisines curated to precision by our luxury master chefs.'
  },
  {
    icon: 'ac_unit',
    title: 'Precision Climate Control',
    description: 'Whisper-quiet multi-zoned high capacity heating and cooling systems to keep your guests custom-served in luxury.'
  },
  {
    icon: 'chair',
    title: 'Bespoke Premium Furnishings',
    description: 'Imported crystal lighting accessories, rich upholstery, custom tableware, plus premium classic/contemporary furniture sets.'
  },
  {
    icon: 'deck',
    title: 'Fluid Indoor & Outdoor Spaces',
    description: 'Sophisticated seamless connection patterns enabling open cocktails, fresh garden breeze flow, or fully enclosed sanctuary settings.'
  },
  {
    icon: 'support_agent',
    title: 'Direct Event VIP Concierge',
    description: 'A personal high-end planner assigned directly to supervise your sequence of milestones, AV transitions, and timeline cues.'
  },
  {
    icon: 'local_parking',
    title: 'Secure Valet Parking & Security',
    description: 'Multi-acre guarded concrete secure surface layout with complimentary premium valet handlers, keeping logistics stress-free.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Victoria Vance',
    role: 'Global Corporate Director',
    comment: "The level of service was unparalleled. They didn't just host our gala; they breathed soul into it. Absolute masterclass in luxury coordination.",
    rating: 5
  },
  {
    id: 'rev-2',
    author: 'Priyesh & Ananya',
    role: 'Wedding Ceremony Couples',
    comment: 'The NAYRA hall was a magical dream. Our guests were mesmerized by the classical luxury and the flawless floral configurations. An unforgettable day!',
    rating: 5
  },
  {
    id: 'rev-3',
    author: 'Dr. Sourav Sen',
    role: 'Medical Association President',
    comment: 'Host precision at its finest. Running the NIYASHA regional convention was smooth, with beautiful acoustics and rapid banquet catering switches.',
    rating: 5
  }
];

export const GALLERY_ITEMS = [
  // Grand Weddings
  {
    url: galleryWedding1,
    category: 'Grand Weddings',
    alt: 'Grand wedding entrance gate archway daytime'
  },
  {
    url: galleryWedding2,
    category: 'Grand Weddings',
    alt: 'Banquet dining hall layout with buffet line'
  },
  {
    url: galleryWedding3,
    category: 'Grand Weddings',
    alt: 'Traditional wedding stage backdrop'
  },
  {
    url: galleryWedding4,
    category: 'Grand Weddings',
    alt: 'Indian wedding reception dinner tables'
  },
  {
    url: galleryWedding5,
    category: 'Grand Weddings',
    alt: 'Stunning illuminated hotel entrance gates at night'
  },
  {
    url: galleryWedding6,
    category: 'Grand Weddings',
    alt: 'Vibrant traditional Indian wedding entrance setup with marigold floral garlands draping pink wooden crates on green turf'
  },
  {
    url: galleryWedding7,
    category: 'Grand Weddings',
    alt: 'Beautiful rooftop Haldi ceremony decor with cascading marigold flower streams, yellow pots, and colorful drapes under bright sunlight'
  },
  {
    url: galleryWedding8,
    category: 'Grand Weddings',
    alt: 'Luxury wedding reception stage backdrop featuring an elegant beige sofa couch surrounded by rich red, orange, and yellow floral arrangements'
  },
  {
    url: galleryWedding9,
    category: 'Grand Weddings',
    alt: 'Elegant table setup at a wedding reception with gorgeous yellow gerbera, white carnation, and green foliage floral centerpiece on a gold tablecloth'
  },
  {
    url: galleryWedding10,
    category: 'Grand Weddings',
    alt: 'A grand and glamorous indoor wedding stage with a majestic gold sofa, shimmering silver sequins wall, neon lighting, warm spotlights, and elaborate yellow floral arrangements on step structures'
  },
  {
    url: galleryWedding11,
    category: 'Grand Weddings',
    alt: 'A vibrant outdoor wedding stage backdrop decorated with dense yellow flowers, pink and orange palm leaf fronds, a modern settee sofa with pink pillows, and a custom pattern floor'
  },
  {
    url: galleryWedding12,
    category: 'Grand Weddings',
    alt: 'Traditional Indian wedding rooftop Haldi decoration with marigold flowers cascading out of clay pots on pink-painted crates'
  },
  {
    url: galleryWedding13,
    category: 'Grand Weddings',
    alt: 'A spectacular outdoor wedding gazebo canopy layout with yellow fabric ceiling drapes, hanging tassels, the bright stage setup beneath, and scenic sky background'
  },
  // Corporate Excellence
  {
    url: corporateImage,
    category: 'Corporate Excellence',
    alt: 'Executive seminar boardroom setup'
  },
  {
    url: novaImage,
    category: 'Corporate Excellence',
    alt: 'Corporate strategy roundtable meeting'
  },
  {
    url: nexusImage,
    category: 'Corporate Excellence',
    alt: 'Professional conference layout with bar chart projection'
  },
  {
    url: niyashaImage,
    category: 'Corporate Excellence',
    alt: 'Annual growth analysis panel discussion'
  }
];
