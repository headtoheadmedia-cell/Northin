import React, { useState } from 'react';
import { BANQUET_SPACES } from '../data';
import { Briefcase, ArrowRight, ShieldCheck, Users2, Presentation, CalendarRange } from 'lucide-react';
import corporateHeroImage from '../../assets/corporate.jpg';

interface CorporateProps {
  onInquire: (formData: any) => Promise<void>;
  onShowNotification: (msg: string, type: 'success' | 'info') => void;
}

export default function Corporate({ onInquire, onShowNotification }: CorporateProps) {
  // Focus on boardroom, seminar, and convention spaces
  const corporateSpaces = BANQUET_SPACES.filter(
    space => space.type === 'boardroom' || space.type === 'seminar' || space.type === 'convention'
  );

  const [companyName, setCompanyName] = useState('');
  const [eventType, setEventType] = useState('Conference');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName || !email || !date) {
      onShowNotification('Please pack the core fields (Company Name, Email, Preferred Date).', 'info');
      return;
    }

    setSubmitting(true);
    try {
      await onInquire({
        name: `Corporate Representative (${companyName})`,
        email,
        phone,
        eventType: `Corporate - ${eventType}`,
        preferredDate: date,
        guestCount: 50, // default corporate estimate
        message: `Inquiry placed from Enterprise Portfolio page by ${companyName}.`
      });
      onShowNotification(`Your Corporate proposal request was registered! Our concierge plans to call or email within 3 hours.`, 'success');
      
      // Reset form
      setCompanyName('');
      setEmail('');
      setPhone('');
      setDate('');
    } catch (err) {
      onShowNotification('Failed to submit, please try again.', 'info');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fade-in-section">
      {/* Hero Section */}
      <section className="relative min-h-[580px] flex items-center pt-10 pb-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block font-sans text-xs md:text-sm uppercase tracking-[0.2em] text-brand-secondary font-bold">
              Prestige Corporate Venues
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-brand-primary leading-tight font-light tracking-tight">
              Designed for <br />
              <span className="italic font-normal text-brand-secondary">Business Excellence</span>
            </h1>
            <p className="font-sans text-sm md:text-lg text-stone-600 max-w-xl leading-relaxed">
              Host highly productive and professional events in our modern conference halls, where architectural sophistication meets cutting-edge enterprise collaboration technology.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#reserve-form"
                className="bg-brand-primary text-white border border-brand-primary px-8 py-3.5 rounded-lg font-sans text-xs uppercase tracking-widest font-bold hover:bg-brand-secondary hover:border-brand-secondary transition-all shadow-md"
              >
                Request a Proposal
              </a>
              <button
                onClick={() => onShowNotification('3D Interactive tours are packing! Check back in standard booking mode.', 'info')}
                className="group flex items-center gap-3 font-sans text-xs uppercase tracking-widest font-bold text-brand-dark py-4 px-6 hover:text-brand-secondary transition-all"
              >
                View 3D Tours
                <span className="w-8 h-[2px] bg-brand-secondary group-hover:w-12 transition-all" />
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative z-10 border border-stone-200">
              <img
                src={corporateHeroImage}
                alt="Corporate conference room setup"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-accent/30 rounded-xl -z-10 backdrop-blur-2xl" />
          </div>
        </div>
      </section>

      {/* Venues Showcase Section */}
      <section className="bg-stone-50 border-t border-b border-stone-200/60 py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl space-y-3">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-primary">
                Distinguished Meeting Spaces
              </h2>
              <p className="text-stone-500 font-sans text-sm md:text-base leading-relaxed">
                Each venue is meticulously engineered with clean acoustics, presentation platforms, and custom modular configurations to foster seamless enterprise collaboration.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporateSpaces.map((space) => (
              <div 
                key={space.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100 hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    alt={space.name}
                    src={space.image}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-brand-secondary text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {space.tagline}
                  </div>
                </div>
                <div className="p-7 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-display text-2xl font-bold text-brand-primary">
                      {space.name}
                    </h3>
                    <span className="text-[10px] font-sans font-semibold tracking-wider bg-stone-100 p-1 px-3 text-stone-600 rounded">
                      CLASS: {space.type.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed min-h-[60px]">
                    {space.description}
                  </p>
                  <div className="pt-5 border-t border-stone-100 grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-sans text-[10px] uppercase text-stone-400 tracking-widest">
                        Floor Area
                      </p>
                      <p className="font-sans text-brand-primary font-bold text-sm">
                        {space.sizeSqFt} sq. ft.
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-[10px] uppercase text-stone-400 tracking-widest">
                        Capacity
                      </p>
                      <p className="font-sans text-brand-primary font-bold text-sm">
                        Up to {space.theatreCapacity} guests
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Solutions Section */}
      <section className="py-24 px-6 md:px-10 bg-brand-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img
            alt="Office Facade overlay"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhcKSaAHqFxUl5HcDL2zhLr6zT5oV44qC9_slX8zbBJaTYEl-U_OnVXvNZ5KCLmnGvenqejUb8eLRToYL6s1Uf5x_tVSnfu6VzAijRj5xZSElqQiFB57UIwDjF_8nNwrHBEm0XodomBjYwcxfH68CgGPpV0WRljYoLd_PyLri1MqvqnljWpPYsZW0_uJoalKBZFFR8Y1ylGDGAuzoDMMcpQRrZe7_8z9d0gHKDQL3QBRMEEMblqyCAmOAOcMm5LRBi6tfdVco3ng"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <span className="font-sans text-xs md:text-sm uppercase tracking-[0.2em] text-brand-accent font-bold">
                Strategic Partnerships
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">
                Corporate Solutions for <br />the Modern Enterprise
              </h2>
              <p className="text-stone-300 font-sans text-sm md:text-base leading-relaxed max-w-xl">
                Experience seamless business execution near Kolkata Airport with fully digital presentation spaces, high-fidelity acoustics, and professional hotel catering support.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              <div className="flex gap-4">
                <div className="text-brand-accent p-2 rounded-lg bg-white/10 shrink-0 h-10 w-10 flex items-center justify-center">
                  <CalendarRange className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-white font-bold text-lg mb-1">MICE Programs</h4>
                  <p className="text-stone-300 text-xs md:text-sm leading-relaxed">
                    Comprehensive Meeting, Incentive, Conference, and Exhibition sequence designs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-brand-accent p-2 rounded-lg bg-white/10 shrink-0 h-10 w-10 flex items-center justify-center">
                  <Users2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-white font-bold text-lg mb-1">Dealers' Meets</h4>
                  <p className="text-stone-300 text-xs md:text-sm leading-relaxed">
                    Prestigious corporate galas designed to motivate your network and launch initiatives.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-brand-accent p-2 rounded-lg bg-white/10 shrink-0 h-10 w-10 flex items-center justify-center">
                  <Presentation className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-white font-bold text-lg mb-1">Training Sessions</h4>
                  <p className="text-stone-300 text-xs md:text-sm leading-relaxed">
                    Air-conditioned, quiet environments equipped with specialized presentation screens.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-brand-accent p-2 rounded-lg bg-white/10 shrink-0 h-10 w-10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-white font-bold text-lg mb-1">Conferences</h4>
                  <p className="text-stone-300 text-xs md:text-sm leading-relaxed">
                    Large-scale symposia equipped with high fidelity microphones and bespoke breaks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div id="reserve-form" className="lg:col-span-5 bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 space-y-6">
            <h3 className="font-display text-2xl font-bold text-white">
              Reserve Your Dates
            </h3>
            <div className="w-12 h-0.5 bg-brand-accent rounded" />
            
            <form onSubmit={handleSubmit} className="space-y-4 text-stone-200">
              <div className="space-y-1">
                <label className="font-sans text-[10px] uppercase text-stone-300 tracking-widest font-semibold">
                  Company Name
                </label>
                <input
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full bg-stone-900/40 border border-stone-700 rounded-lg text-white px-3 py-2 text-sm focus:ring-1 focus:ring-brand-accent focus:border-brand-accent transition-colors"
                  placeholder="Enterprise Global Ltd"
                  type="text"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-sans text-[10px] uppercase text-stone-300 tracking-widest font-semibold">
                    Event Type
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full bg-stone-900/40 border border-stone-700 rounded-lg text-white px-3 py-2 text-sm focus:ring-1 focus:ring-brand-accent focus:border-brand-accent"
                  >
                    <option className="bg-stone-900" value="Conference">Conference</option>
                    <option className="bg-stone-900" value="Dealer Meet">Dealer Meet</option>
                    <option className="bg-stone-900" value="Board Meeting">Board Meeting</option>
                    <option className="bg-stone-900" value="Product Launch">Product Launch</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-sans text-[10px] uppercase text-stone-300 tracking-widest font-semibold">
                    Preferred Date
                  </label>
                  <input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-stone-900/40 border border-stone-700 rounded-lg text-white px-3 py-2 text-sm focus:ring-1 focus:ring-brand-accent focus:border-brand-accent"
                    type="date"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-sans text-[10px] uppercase text-stone-300 tracking-widest font-semibold">
                    Corporate Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-stone-900/40 border border-stone-700 rounded-lg text-white px-3 py-2 text-sm focus:ring-1 focus:ring-brand-accent"
                    placeholder="coordinator@company.com"
                    type="email"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-sans text-[10px] uppercase text-stone-300 tracking-widest font-semibold">
                    Contact Phone
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-stone-900/40 border border-stone-700 rounded-lg text-white px-3 py-2 text-sm focus:ring-1 focus:ring-brand-accent"
                    placeholder="+91 98765 43210"
                    type="tel"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 mt-4 bg-brand-secondary text-white font-sans text-xs uppercase tracking-[0.2em] rounded-lg hover:bg-brand-accent hover:text-brand-primary transition-colors font-bold disabled:opacity-50"
              >
                {submitting ? 'Submitting Proposal...' : 'Inquire Now'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
