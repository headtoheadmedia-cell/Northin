import React, { useState, useEffect } from 'react';
import { BANQUET_SPACES } from '../data';
import { BookingInquiry } from '../types';
import { Calendar, Users, MessageSquare, ArrowRight, CheckCircle2, Award, Utensils, Castle, HelpCircle, History, RefreshCcw } from 'lucide-react';

interface BookingProps {
  selectedSpaceId: string;
  setSelectedSpaceId: (id: string) => void;
  onInquire: (formData: any) => Promise<any>;
  onShowNotification: (msg: string, type: 'success' | 'info') => void;
  bookingList: BookingInquiry[];
  fetchBookings: () => void;
}

export default function Booking({
  selectedSpaceId,
  setSelectedSpaceId,
  onInquire,
  onShowNotification,
  bookingList,
  fetchBookings
}: BookingProps) {
  // Input form state variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('Wedding');
  const [date, setDate] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [message, setMessage] = useState('');
  
  const [pricingEstimate, setPricingEstimate] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Recalculate price when selection changes
  useEffect(() => {
    const chosenSpace = BANQUET_SPACES.find(s => s.id === selectedSpaceId);
    if (!chosenSpace) {
      setPricingEstimate(null);
      return;
    }

    const perHeadRate = 999;
    const parsedGuests = guestCount ? parseInt(guestCount, 10) : 0;
    setPricingEstimate(parsedGuests > 0 ? parsedGuests * perHeadRate : perHeadRate);
  }, [selectedSpaceId, guestCount]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !date) {
      onShowNotification('Please input your name, email, and preferred event date.', 'info');
      return;
    }

    const matchedSpace = BANQUET_SPACES.find(s => s.id === selectedSpaceId);

    setSubmitting(true);
    try {
      await onInquire({
        name,
        email,
        phone,
        eventType,
        preferredDate: date,
        guestCount: guestCount ? parseInt(guestCount, 10) : 100,
        message,
        spaceId: selectedSpaceId || 'general',
        spaceName: matchedSpace ? matchedSpace.name : 'General Enquiry',
        status: 'Pending'
      });

      onShowNotification('Inquiry officially submitted! Connecting to WhatsApp...', 'success');
      
      // WhatsApp redirect with pre-filled details
      const whatsappText = `Hello Northin Hotel, I would like to check availability for the ${matchedSpace ? matchedSpace.name : 'General Venue'}.\n\nDetails:\n- Name: ${name}\n- Email: ${email}\n- Phone: ${phone || 'N/A'}\n- Event Type: ${eventType}\n- Date: ${date}\n- Expected Guests: ${guestCount || 'N/A'}\n- Message: ${message || 'N/A'}`;
      window.open(`https://wa.me/918777800166?text=${encodeURIComponent(whatsappText)}`, '_blank');

      // Reset variables
      setName('');
      setEmail('');
      setPhone('');
      setDate('');
      setGuestCount('');
      setMessage('');
      fetchBookings(); // trigger refresh
    } catch (err) {
      onShowNotification('Network transmission error, please try again.', 'info');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fade-in-section">
      {/* Decorative Editorial Hero Banner */}
      <header className="relative min-h-[440px] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKizIchgJduhiOP2dDJv1rZy6DMjKu2AjBT1lUBHcrIkzKEzWEGQHXIQthRUAmuSmPKf4CQEtPcRgSAIb1L6wXJnDh4Ljq_K0omSu2yozSVLZorAoW_r-nXBMZICNl1TvcwzNL-jmbyQdZFWqunRb-vOo2t6ho6kdm5J1Au3LFR3gAhqf0goZUkjRBFoWdVpYuKTFzFmP9BBE0PO0gEVyru_1kLxiMCCKVxQMlFS5ugKU3V7bEa6KKpLi0aeOLPoi4z8TayHAM_Q"
            alt="Luxury Palace Lobby Chandelier"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale-[15%] scale-[1.03] brightness-75 blur-[1px]"
          />
          <div className="absolute inset-0 bg-brand-primary/75 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full text-white space-y-4">
          <span className="inline-block text-brand-secondary font-sans text-xs tracking-[0.3em] uppercase font-bold">
            The Art of Celebration
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            Reserve Your <br />
            <span className="text-brand-accent">Extraordinary Moment</span>
          </h1>
          <p className="font-sans text-sm md:text-lg text-stone-200/90 max-w-xl leading-relaxed font-light">
            From intimate golden-hour ceremonies to high-stakes corporate symposia, let us coordinate an exquisite environment that transcends standard expectations.
          </p>
        </div>
      </header>

      {/* Main Reservation workspace */}
      <main className="relative z-20 -mt-16 pb-24 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Inquiry Card */}
          <div className="lg:col-span-8 bg-white border border-stone-200/60 shadow-xl rounded-2xl p-6 md:p-12 space-y-8">
            <div className="flex items-center justify-between border-b border-stone-100 pb-5">
              <div className="space-y-1">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-primary">
                  Premium Event Inquiry
                </h2>
                <p className="text-xs text-stone-400 font-sans uppercase tracking-wider">
                  The Palace Editorial Desk
                </p>
              </div>
              <div className="w-12 h-1 bg-brand-secondary rounded-full" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Select Space widget */}
              <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs uppercase tracking-widest text-brand-secondary font-bold">
                    Target Ballroom &amp; Space Configuration
                  </span>
                  <span className="text-xs font-semibold bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full">
                    Step 1 of 2
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {BANQUET_SPACES.map((sp) => (
                    <button
                      key={sp.id}
                      type="button"
                      onClick={() => setSelectedSpaceId(sp.id)}
                      className={`p-3 rounded-lg border text-center transition-all ${
                        selectedSpaceId === sp.id
                          ? 'border-brand-secondary bg-brand-secondary/10 text-brand-secondary font-bold ring-2 ring-brand-secondary/20'
                          : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50 text-xs'
                      }`}
                    >
                      <p className="font-display text-sm font-bold block">{sp.name}</p>
                      <p className="text-[9px] uppercase tracking-wide text-stone-400">{sp.tagline}</p>
                    </button>
                  ))}
                </div>

                {pricingEstimate !== null && (
                  <div className="pt-2 flex justify-between items-center text-xs text-stone-500">
                    <span>Luxe Catering &amp; Rent Estimate:</span>
                    <span className="font-display font-black text-brand-primary text-sm sm:text-base">
                      {guestCount && parseInt(guestCount, 10) > 0 ? (
                        <>₹ {pricingEstimate.toLocaleString('en-IN')}/- onwards <span className="text-[10px] text-stone-500 font-normal">(₹ 999/- Per head)</span>*</>
                      ) : (
                        <>₹ 999/- Per head onwards*</>
                      )}
                    </span>
                  </div>
                )}
              </div>

              {/* Form Input elements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="font-sans text-xs uppercase tracking-widest text-stone-500 font-semibold">
                    Full Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-stone-50 border-0 border-b border-stone-300 focus:border-brand-secondary focus:ring-0 transition-colors py-3 text-stone-800 outline-none text-sm"
                    placeholder="Archibald Sterling"
                    type="text"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-sans text-xs uppercase tracking-widest text-stone-500 font-semibold">
                    Email Address
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-stone-50 border-0 border-b border-stone-300 focus:border-brand-secondary focus:ring-0 transition-colors py-3 text-stone-800 outline-none text-sm"
                    placeholder="concierge@palace.com"
                    type="email"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-1">
                  <label className="font-sans text-xs uppercase tracking-widest text-stone-500 font-semibold">
                    Phone Number
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-stone-50 border-0 border-b border-stone-300 focus:border-brand-secondary focus:ring-0 transition-colors py-3 text-brand-dark outline-none text-sm"
                    placeholder="+91 99999 00000"
                    type="tel"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-sans text-xs uppercase tracking-widest text-stone-500 font-semibold">
                    Event Type
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full bg-stone-50 border-0 border-b border-stone-300 focus:border-brand-secondary focus:ring-0 transition-colors py-3 text-brand-dark outline-none text-sm cursor-pointer"
                  >
                    <option value="Wedding">Wedding</option>
                    <option value="Corporate assembly">Corporate assembly</option>
                    <option value="Birthday Reception">Birthday Reception</option>
                    <option value="Engagement Night">Engagement Night</option>
                    <option value="Milestone Gala">Milestone Gala</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="font-sans text-xs uppercase tracking-widest text-stone-500 font-semibold">
                    Guest Count
                  </label>
                  <input
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full bg-stone-50 border-0 border-b border-stone-300 focus:border-brand-secondary focus:ring-0 transition-colors py-3 text-brand-dark outline-none text-sm"
                    placeholder="e.g. 150"
                    type="number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-1">
                  <label className="font-sans text-xs uppercase tracking-widest text-stone-500 font-semibold">
                    Preferred Milestone Date
                  </label>
                  <input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-stone-50 border-0 border-b border-stone-300 focus:border-brand-secondary focus:ring-0 py-3 text-brand-dark cursor-pointer text-sm"
                    type="date"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-sans text-xs uppercase tracking-widest text-stone-500 font-semibold">
                  Catering or Floral Vision
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-stone-50 border-0 border-b border-stone-300 focus:border-brand-secondary focus:ring-0 py-3 text-brand-dark resize-none text-sm"
                  placeholder="Describe your customized vision or request specific catering menus..."
                  rows={3}
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full md:w-auto px-10 py-4 bg-brand-secondary hover:bg-brand-primary text-white font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-xl flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {submitting ? 'Transmitting Enquiry to Palace...' : 'Check Availability'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Right side benefits panel */}
          <aside className="lg:col-span-4 space-y-8 py-4">
            <div className="relative p-8 bg-brand-primary text-white rounded-2xl overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <h3 className="font-display text-2xl font-bold mb-6 text-brand-accent">
                Why Northin Hotel?
              </h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="text-brand-accent mt-1">
                    <Award className="w-6 h-6 shrink-0" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-brand-accent font-bold mb-1">
                      Bespoke Event Planning
                    </h4>
                    <p className="text-xs text-stone-300 leading-relaxed font-light">
                      Every structural milestone custom supervised by expert hoteliers.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-brand-accent mt-1">
                    <Utensils className="w-6 h-6 shrink-0" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-brand-accent font-bold mb-1">
                      Award-Winning Catering
                    </h4>
                    <p className="text-xs text-stone-300 leading-relaxed font-light">
                      A customized symphony of local Bengali heritage and global gourmet delights.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-brand-accent mt-1">
                    <Castle className="w-6 h-6 shrink-0" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-brand-accent font-bold mb-1">
                      Iconic Scenic Arenas
                    </h4>
                    <p className="text-xs text-stone-300 leading-relaxed font-light">
                      Equipped with high air-conditioning clearances, marble runways, and chandeliers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial card */}
            <div className="p-6 border-l-4 border-brand-secondary bg-stone-50 rounded-r-xl">
              <p className="font-display text-sm italic text-brand-primary leading-relaxed mb-3">
                "The level of service was unparalleled. They didn't just host our gala; they breathed soul into it. Absolute masterclass in luxury coordination."
              </p>
              <cite className="not-italic font-sans text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                — Victoria Vance, Global Corporate Director
              </cite>
            </div>
          </aside>
        </div>

        {/* Live Booking Tracker / Submissions List (Very robust for full-stack feedback!) */}
        <section className="bg-stone-50 p-6 md:p-10 rounded-xl border border-stone-200 mt-12 space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200 pb-4">
            <div className="flex items-center gap-3">
              <History className="w-5 h-5 text-brand-secondary" />
              <h3 className="font-display text-lg font-bold text-brand-primary uppercase tracking-wide">
                Live Enquiry Tracking Board
              </h3>
            </div>
            <button
              onClick={fetchBookings}
              className="text-xs font-semibold text-brand-secondary hover:text-brand-primary flex items-center gap-2 p-1.5 hover:bg-stone-100 rounded transition-all"
              title="Refresh Enquiry Logs"
            >
              <RefreshCcw className="w-3.5 h-3.5" />
              Sync Logs
            </button>
          </div>

          {bookingList.length === 0 ? (
            <div className="text-center py-10 bg-white border border-stone-100 rounded-lg">
              <HelpCircle className="w-8 h-8 text-stone-300 mx-auto mb-2" />
              <p className="text-sm text-stone-500">
                No active enquiries submitted yet in this session. Submit the form above to view your real-time tracking badge!
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 text-stone-400 font-sans uppercase tracking-widest font-extrabold bg-stone-100/60 text-[9px]">
                    <th className="p-3">Client</th>
                    <th className="p-3">Contact</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Luxe Hall</th>
                    <th className="p-3">Target Date</th>
                    <th className="p-3">Guests</th>
                    <th className="p-3 text-center">Status Tracking</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 font-sans">
                  {bookingList.map((bk) => (
                    <tr key={bk.id} className="hover:bg-amber-50/20 bg-white transition-colors">
                      <td className="p-3 font-semibold text-brand-primary">{bk.name}</td>
                      <td className="p-3">
                        <p className="text-[11px] text-stone-600 font-medium">{bk.email}</p>
                        <p className="text-[10px] text-stone-500">{bk.phone || 'N/A'}</p>
                      </td>
                      <td className="p-3">
                        <span className="bg-stone-100 text-stone-600 px-2 py-0.5 rounded text-[10px]">
                          {bk.eventType}
                        </span>
                      </td>
                      <td className="p-3 font-display font-black text-brand-secondary">
                        {bk.spaceName || 'General'}
                      </td>
                      <td className="p-3 tracking-wide">{bk.preferredDate}</td>
                      <td className="p-3 font-mono text-center sm:text-left">{bk.guestCount}</td>
                      <td className="p-3 text-center">
                        <span className={`inline-block px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                          bk.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' :
                          bk.status === 'Contacted' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                          bk.status === 'Declined' ? 'bg-rose-100 text-rose-800 border border-rose-200' :
                          'bg-stone-100 text-stone-700 border border-stone-200 animate-pulse'
                        }`}>
                          {bk.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
