import { Calendar, ChevronRight, Award, Flame, Star, Sparkles, Heart, Cake, Users, Gift } from 'lucide-react';
import heroBgImage from '../../assets/hero-bg.jpg';

interface HomeProps {
  onNavigate: (tab: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const customHighlights = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Luxury Banquet Spaces",
      description: "Architecturally stunning halls with versatile premium configurations tailored to reflect your milestones.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOkI729HWbfbX1FsIV8QlP6Z1r5fzCUok4pHxg6a9nxYV2SdWakeOwqlixXpuDf5nKSmgmFQoH6pqPiPkVrXzJZ7E41HYoURdOxr3vvFcmCIVzxexJNuIkDYg2blUNa8bwGlKjoSCDB_mr5IFvveyZxr3gnn2nxIzjpDqYgMHc9dU9PjQgIlAkeh3fo_N2vkvLi7WumO8a568KmtnmQCorhF_4f_0TjuXtPZHwQVSssQhJyvF-G-ee0iW6RU4-yqGwyAMHC_LaDQ"
    },
    {
      icon: <Flame className="w-6 h-6" />,
      title: "Customized Master Catering",
      description: "Gourmet multi-course legacy menus curated by award-winning chefs to delight refined culinary palates.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoazaul_EXF5uxHhpIz3nXnhl1BLLO9Os4c2V9A2Jd7Is5w4cgWyC2a1KNVl7ghyiZFeDd5dloSrcQbIfCxcPqjeZRkgJ9QztkFP_B4JGWUICa6sb28TRy31pp7zIPCE11_1D3KyUL0zrkffpzUTNfVC1ik5otHwz_twfwYjvGgkMEYAX8ho8R_8hfw4FaRtb8pDIpt7VTajDp2gj1dktjJBbi6PrDu4gBvqkX8Z2SPBxRfY7en9mUTQUQZ5spuqDqOhNJy6adTw"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "VIP Coordination Service",
      description: "Dedicated master event directors handling logistical flows, decorators, florals, and AV setups.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqAAXmL750tapeZtYvBfailbmjlB-UBk1DT8TQCJXWJQelPHiGXuwhzEPdT3efyQrU7dcXCNl3KzuBVnXI8nVWxplV-khk0fFDxRpacIq_qaPcVrHKbuv-z1J3n5dDLi7_ahg5AfW_8FoyN0W0rxEiyvsquUHq3_GbMfSp-TRtteb9RiV89_1_PI0T2KFkLZ51VZ6_C4cebHrTsUml2nVULuwbClZcSMqF_Xmd8smYEpSkmkFPs3UuZ9Flg_Xpx1wjcuUmy1xXdA"
    }
  ];

  const occasions = [
    {
      className: "md:col-span-8",
      icon: <Heart className="w-6 h-6 text-brand-accent" />,
      title: "Weddings & Receptions",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_-21Rq19mHUcCK7CqecF2YnqcYKPJvRS2UnQ9SsyzQu4a_5siMMGZPjkaSml655hMNpsSDbijCRgOsXMWC0Cio7KLkp8eZeU1HQRGb0xSVVCGcLJs-gMXuKG98Isf7SznASAIE7zZPcxXY52PsIO5K-o3z1L2_8LO1IR3puUsRaSZ8OpfQvBhiO9qYBdabtH5pFJUt2nWtwZKYjg1hyj1YCoPKq6kRJGJOTZmw0nrPvLOgvzAmL-NjYI47hICiP8yHPkZz3SdEA",
      desc: "Crafting timeless, exquisite love stories in our majestic gold-trimmed and crystal grand halls."
    },
    {
      className: "md:col-span-4",
      icon: <Sparkles className="w-6 h-6 text-brand-accent" />,
      title: "Engagement ceremonies",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoSCGAsU7A0BJJ8-CVeW5gUFPiRhgNYn7iq70Y8SU2Pp9CIXzeZSR1a97Lsa4IpJj1r3dqd3UJtQmvzts2wxiH5bDgN9FH0nhQyoo3-RKKILc866W4RuDAJ1yP3BE-g454W0hoi4Fe5O4xe6Hp5rHFO9SNcV_SPUwazkPU4E8jIvjPW0icHa8qHDSaGngV6eH-4fkB0lrM_AEcWsPssU0DzGubOlwBSJWyRcaNNGFMKQCD8Hx2rqQNBVPIT5bsSqdUASfDAH5kgA",
      desc: "A prelude to elegance under atmospheric lighting configurations with bespoke champagne toasts."
    },
    {
      className: "md:col-span-4",
      icon: <Cake className="w-6 h-6 text-brand-accent" />,
      title: "Birthday Parties",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0owWSXR-p4j6ZwI0rvV2wf1E--54aQo6PEzi16NyjMxbUUHAiyUxNbxlxJoj3tYeucfUVD4_l5k52CIzG9urrtYlzm0U4xARvbE4lUQict23I1wAkUpKkSXrT2WvhD6OkG6ia5EsRm9JIywGYY1EvVEVUVkQgPP_TizIUrzwQEklAa8rOfGN4aGHF0z66vwIGB2eLz5Gj0ZeetCyUQ7L3ZVHhDnjqkL_UKaqdKH-mJTFaDXs0lLuRrBREqEHKYpMjaDyNOGjsFA",
      desc: "Celebrate vibrant youth and milestones in a chic, decorated customized banquet layout."
    },
    {
      className: "md:col-span-4",
      icon: <Gift className="w-6 h-6 text-brand-accent" />,
      title: "Anniversary Celebrations",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuV6bXahX0CcISSPrpkdrO-SEj3cPDvbpSdPBHpXOEW5DcSD0PTZjd1CFbPpClPYv3F2JWUq4FO9OdMmCd3W1dlts6N3H-dsN1pkXEv86jmfpcYIljDZnS92POxX_kCOUSBDgHipzrpy0MuwsFwZmOLV0duuevnO09Dd5YpkVfxZNqU3ZtnyfEWYhpKHHeuH-Ti_NMSwwB9Rzb7opN4FI4wn8R30NCyxA3ZYeZejT5bi96IHiYnzyRcqoLR8_e7v0lSYYgKN2UpQ",
      desc: "Honor dedication and deep partnerships with candlelit velvet dinner tables and personalized entertainment."
    },
    {
      className: "md:col-span-4",
      icon: <Users className="w-6 h-6 text-brand-accent" />,
      title: "Private Gatherings",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCujTv-6TobHKHZIkI1jcQHqVI5fJFrCEHyYmrFHAVq9ufLIwn4iJ4CUIMl3-J5OsAG_XuzeorVUmE1RC4hk3EfcODOXxOXLa7r_yDzRSrt73ryG-4i-VVZY_CVLHjxEov5PROinynOvHvakxeWPQVKtzjevKN99-X5XYTPvdLItoLxQnEmkvRfFkBEkAJUbSWGZC7DAZKFj7wX2PO9Qo4sc9P-Lfv6ew0Zn7op4Mv_Xnhj47ndDd-46Kx6s2Ux6fxymY7ISd8WMQ",
      desc: "Intimate elite lounges offering customized spaces and full privacy guard configurations."
    }
  ];

  return (
    <div className="fade-in-section">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[580px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBgImage}
            alt="Luxury Banquet Setup"
            className="w-full h-full object-cover brightness-[0.7] scale-102 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-brand-primary/45 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full text-white">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs md:text-sm font-sans font-bold uppercase tracking-[0.3em] text-brand-accent bg-brand-primary/50 py-1.5 px-4 rounded-full border border-brand-accent/30 inline-block">
              Exclusivity Defined
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-light leading-none tracking-tight">
              Celebrate Every <br />
              <span className="font-semibold text-brand-accent">Moment in Style</span>
            </h1>
            <p className="text-lg md:text-2xl font-light text-stone-200/90 tracking-wide">
              Weddings &bull; Birthdays &bull; Corporate Prominences &bull; Banquets
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => window.open('https://wa.me/918777800166?text=Hello%20Northin%20Hotel%2C%20I%20would%20like%20to%20book%20an%20event.', '_blank')}
                className="bg-brand-secondary hover:bg-brand-primary text-white border border-brand-secondary px-8 py-3.5 rounded-md text-sm uppercase tracking-widest font-bold hover:scale-[1.02] transition-all shadow-lg active:scale-95"
              >
                Book Now
              </button>
              <button
                onClick={() => onNavigate('spaces')}
                className="border border-white/40 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-md text-sm uppercase tracking-widest font-bold transition-all"
              >
                Explore Venues
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Experience Overview */}
      <section className="py-24 px-6 md:px-10 bg-brand-cream text-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 border-b border-stone-200 pb-12">
            <div className="md:w-1/2 space-y-4">
              <span className="text-xs font-sans text-brand-secondary tracking-widest uppercase font-bold block">
                The Northin Experience
              </span>
              <h2 className="text-3xl md:text-5xl font-display text-brand-primary leading-tight font-bold">
                Where Every Celebration <br />Comes to Life
              </h2>
            </div>
            <div className="md:w-1/3">
              <p className="text-stone-600 font-sans text-sm md:text-base leading-relaxed">
                From intimate candlelit vows to majestic corporate product rollouts, our grand venues deliver a canvas of sophisticated luxury tailored purely to maximize your prestige.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customHighlights.map((hl, idx) => (
              <div 
                key={idx}
                className="group relative overflow-hidden rounded-xl bg-white p-7 border border-stone-100 transition-all hover:shadow-xl hover:-translate-y-1 duration-500"
              >
                <div className="mb-6 h-12 w-12 flex items-center justify-center bg-brand-secondary/15 rounded-full text-brand-secondary transition-colors group-hover:bg-brand-primary group-hover:text-white">
                  {hl.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-brand-primary">
                  {hl.title}
                </h3>
                <p className="text-stone-500 text-sm mb-6 leading-relaxed">
                  {hl.description}
                </p>
                <div className="relative h-44 w-full overflow-hidden rounded-lg">
                  <img
                    alt={hl.title}
                    src={hl.img}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions / Extraordinary moments */}
      <section className="py-24 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-sans text-brand-secondary tracking-[0.25em] uppercase font-bold block">
              Special Ceremonies
            </span>
            <h2 className="text-3xl md:text-5xl font-display text-brand-primary font-bold">
              Designed for Extraordinary Moments
            </h2>
            <div className="w-16 h-1 bg-brand-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {occasions.map((occ, idx) => (
              <div
                key={idx}
                className={`${occ.className} group relative h-[380px] overflow-hidden rounded-xl shadow-md transition-all duration-500 hover:shadow-lg`}
              >
                <img
                  alt={occ.title}
                  src={occ.img}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/20 to-transparent opacity-80" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="p-2 bg-brand-primary/60 rounded-full border border-brand-accent/25">
                      {occ.icon}
                    </span>
                    <h4 className="text-xl md:text-2xl font-display font-medium text-brand-accent">
                      {occ.title}
                    </h4>
                  </div>
                  <p className="text-stone-200 text-xs md:text-sm max-w-lg leading-relaxed pt-1 font-light opacity-90 transition-opacity duration-300">
                    {occ.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
