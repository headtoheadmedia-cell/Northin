import { BANQUET_SPACES, AMENITIES } from '../data';
import { Sparkles, ArrowRight, Table2, Layers, Award, Wind } from 'lucide-react';
import { BanquetSpace } from '../types';

interface SpacesProps {
  onSelectSpace: (spaceId: string) => void;
}

export default function Spaces({ onSelectSpace }: SpacesProps) {
  // Focus on the two signature social spaces (NAYRA and NAKSHATRA) for this view
  const socialHalls = BANQUET_SPACES.filter(space => space.id === 'nayra' || space.id === 'nakshatra');

  return (
    <div className="fade-in-section">
      {/* Title Header */}
      <header className="relative pt-20 pb-12 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-stone-200 pb-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-sans text-brand-secondary tracking-[0.2em] uppercase font-bold block">
              Exquisite Event Venues
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-light text-brand-primary leading-tight">
              Our Premium <span className="font-semibold text-brand-secondary">Banquet Venues</span>
            </h1>
          </div>
          <p className="max-w-md text-stone-500 font-sans text-sm md:text-base leading-relaxed">
            Experience the pinnacle of hospitality in our meticulously designed spaces, where architectural elegance meets functional versatility near Kolkata Airport.
          </p>
        </div>
      </header>

      {/* Hall 1: NAYRA Exhibit */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto py-12 space-y-16">
        {socialHalls.map((space, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={space.id}
              id={`space-${space.id}`}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Image side - alternates on desktop */}
              <div className={`lg:col-span-7 group relative overflow-hidden rounded-xl shadow-lg border border-stone-200 ${!isEven ? 'lg:order-2' : ''}`}>
                <img
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  src={space.image}
                  referrerPolicy="no-referrer"
                  alt={`${space.name} Ballroom`}
                />
                <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-4 left-4 bg-brand-primary/80 backdrop-blur-md text-brand-accent px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-widest shadow-md">
                  {space.tagline}
                </div>
              </div>

              {/* Specs and details column */}
              <div className={`lg:col-span-5 flex flex-col justify-center space-y-6 ${!isEven ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-3">
                  <span className="w-12 h-[2px] bg-brand-secondary" />
                  <span className="text-brand-secondary font-sans text-xs uppercase tracking-widest font-bold">
                    Signature Venue
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-primary">
                  {space.name}
                </h2>

                <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
                  {space.description}
                </p>

                {/* Grid specs matching identical specs table */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-stone-50 p-4 border border-stone-100 rounded-lg">
                    <p className="text-[10px] text-brand-secondary font-sans uppercase tracking-widest font-semibold mb-1">
                      Total Space
                    </p>
                    <p className="text-lg font-display font-bold text-brand-primary">
                      {space.sizeSqFt} sq. ft.
                    </p>
                  </div>
                  <div className="bg-stone-50 p-4 border border-stone-100 rounded-lg">
                    <p className="text-[10px] text-brand-secondary font-sans uppercase tracking-widest font-semibold mb-1">
                      Ceiling Height
                    </p>
                    <p className="text-lg font-display font-bold text-brand-primary">
                      {space.ceilingHeight} ft
                    </p>
                  </div>
                  <div className="bg-stone-50 p-4 border border-stone-100 rounded-lg">
                    <p className="text-[10px] text-brand-secondary font-sans uppercase tracking-widest font-semibold mb-1">
                      Theatre Style
                    </p>
                    <p className="text-lg font-display font-bold text-brand-primary">
                      {space.theatreCapacity} Guests
                    </p>
                  </div>
                  <div className="bg-stone-50 p-4 border border-stone-100 rounded-lg">
                    <p className="text-[10px] text-brand-secondary font-sans uppercase tracking-widest font-semibold mb-1">
                      Cluster Style
                    </p>
                    <p className="text-lg font-display font-bold text-brand-primary">
                      {space.clusterCapacity} Guests
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => window.open(`https://wa.me/918777800166?text=Hello%20Northin%20Hotel%2C%20I%20would%20like%20to%20check%20availability%20for%20the%20${space.name}%20venue.`, '_blank')}
                  className={`w-full py-3.5 rounded-lg font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-md ${
                    space.id === 'nayra'
                      ? 'border border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white'
                      : 'bg-brand-primary text-white hover:bg-brand-secondary'
                  }`}
                >
                  Check {space.name} Availability
                </button>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bento Grid - Venue Excellence Amenities Section */}
      <section className="bg-stone-50 border-t border-b border-stone-200/60 py-24 my-10">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="mb-16 text-center space-y-3">
            <span className="text-xs font-sans text-brand-secondary tracking-[0.2em] uppercase font-bold block animate-pulse">
              Features Portfolio
            </span>
            <h3 className="text-3xl font-display font-bold text-brand-primary">
              Venue Excellence &amp; Amenities
            </h3>
            <div className="w-20 h-1 bg-brand-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1 (Gourmet Catering - Double width) */}
            <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-stone-100 flex flex-col md:flex-row items-center gap-6 transition-all hover:shadow-md">
              <div className="bg-brand-secondary/10 p-5 rounded-full text-brand-secondary shrink-0">
                <Table2 className="w-8 h-8" />
              </div>
              <div className="text-center md:text-left space-y-2">
                <h4 className="text-xl font-display font-bold text-brand-primary">Gourmet Catering</h4>
                <p className="text-stone-500 text-sm leading-relaxed">
                  Tailored multi-course cuisines featuring international flavors, Bengali heritage dishes, and custom live counters designed elegantly by premium hotel master chefs.
                </p>
              </div>
            </div>

            {/* Box 2 (AC) */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 flex flex-col items-center text-center justify-center space-y-4 transition-all hover:shadow-md">
              <div className="bg-brand-secondary/10 p-4 rounded-full text-brand-secondary">
                <Wind className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-display font-bold text-brand-primary">Climate Control</h4>
              <p className="text-stone-500 text-xs leading-relaxed">
                Centralized zoning, customized high cooling air ventilation, active air purifiers.
              </p>
            </div>

            {/* Box 3 (Seating) */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 flex flex-col items-center text-center justify-center space-y-4 transition-all hover:shadow-md">
              <div className="bg-brand-secondary/10 p-4 rounded-full text-brand-secondary">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-display font-bold text-brand-primary">Premium Furniture</h4>
              <p className="text-stone-500 text-xs leading-relaxed">
                Classic gold Tiffany seating arrangement, custom linen decorations, crystal table accessories.
              </p>
            </div>

            {/* Box 4 (Indoor/Outdoor Flow) */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 flex flex-col items-center text-center justify-center space-y-4 transition-all hover:shadow-md">
              <div className="bg-brand-secondary/10 p-4 rounded-full text-brand-secondary">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-display font-bold text-brand-primary">Indoor/Outdoor</h4>
              <p className="text-stone-500 text-xs leading-relaxed">
                Flexible layouts allowing open terrace mocktail flow fused directly with ballroom prestige.
              </p>
            </div>

            {/* Box 5 (Valet Parking - Double width) */}
            <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-stone-100 flex flex-col md:flex-row items-center gap-6 transition-all hover:shadow-md">
              <div className="bg-brand-secondary/10 p-5 rounded-full text-brand-secondary shrink-0">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-center md:text-left space-y-2">
                <h4 className="text-xl font-display font-bold text-brand-primary">Valet Parking &amp; Floral Decor</h4>
                <p className="text-stone-500 text-sm leading-relaxed">
                  Ample secure private parking layouts matching active airport corridor safety. Full complimentary valet handlers with custom in-house floral designs, structures, and entry arches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
