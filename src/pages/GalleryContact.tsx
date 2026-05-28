import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { Mail, Phone, MapPin, CheckCircle, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface GalleryContactProps {
  onInquire: (formData: any) => Promise<void>;
  onShowNotification: (msg: string, type: 'success' | 'info') => void;
}

export default function GalleryContact({ onInquire, onShowNotification }: GalleryContactProps) {
  const categories = ['All', 'Grand Weddings', 'Corporate Excellence', 'Culinary Art', 'Bespoke Galas', 'Arrival Experience'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Contact form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [eventType, setEventType] = useState('Wedding Ceremony');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Filter images
  const filteredImages = selectedCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(img => img.category === selectedCategory);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !date) {
      onShowNotification('Please supply your name, email, and preferred date.', 'info');
      return;
    }

    setSubmitting(true);
    try {
      await onInquire({
        name,
        email,
        phone,
        eventType,
        preferredDate: date,
        guestCount: guests ? parseInt(guests, 10) : 100,
        message: message || `Quick contact message: ${eventType} requested directly.`,
        status: 'Pending'
      });
      onShowNotification('Enquiry transmitted! Connecting to WhatsApp...', 'success');

      // WhatsApp redirect with pre-filled details
      const whatsappText = `Hello Northin Hotel, I would like to check availability.\n\nDetails:\n- Name: ${name}\n- Email: ${email}\n- Phone: ${phone || 'N/A'}\n- Event Category: ${eventType}\n- Date: ${date}\n- Expected Guests: ${guests || 'N/A'}\n- Notes: ${message || 'N/A'}`;
      window.open(`https://wa.me/918777800166?text=${encodeURIComponent(whatsappText)}`, '_blank');
      
      // Reset form variables
      setName('');
      setPhone('');
      setEmail('');
      setDate('');
      setGuests('');
      setMessage('');
    } catch (err) {
      onShowNotification('Connection failed. Please retry.', 'info');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fade-in-section">
      {/* Contact & Inquiry Hero Section */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct estate info and details */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <span className="text-brand-secondary font-sans text-xs uppercase tracking-[0.2em] font-bold block">
                Direct Inquiry
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-brand-primary leading-tight">
                Let's Plan Your <br />
                <span className="font-semibold text-brand-secondary">Next Event</span>
              </h1>
              <p className="text-stone-600 font-sans text-sm md:text-base leading-relaxed max-w-md font-light">
                From luxury intimate tea groupings to massive convention halls, our dedicated VIP hotel concierge team is always here to translate your vision into an unforgettable banquet milestone.
              </p>
            </div>

            <div className="space-y-6 pt-8 border-t border-stone-200">
              <div className="flex items-start gap-5">
                <div className="bg-stone-100 p-3 rounded-full text-brand-secondary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-brand-primary mb-1">Our Estate</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    176 Pulin Avenue, Near Kolkata Airport,<br />
                    Kolkata - 700081, West Bengal, India.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-stone-100 p-3 rounded-full text-brand-secondary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-brand-primary mb-1">Direct Contact</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    <a href="mailto:gm@northinhotel.in" className="hover:text-brand-secondary transition-colors">gm@northinhotel.in</a><br />
                    <a href="https://wa.me/918777800166?text=Hello%20Northin%20Hotel%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20event." target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary transition-colors">+91 87778 00166</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl shadow-stone-100 border border-stone-200/40">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                      Your Name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-transparent border-b border-stone-300 py-2 text-sm focus:border-brand-secondary outline-none focus:ring-0 transition-colors"
                      placeholder="Enter your full name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                      Contact Phone
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-transparent border-b border-stone-300 py-2 text-sm focus:border-brand-secondary outline-none focus:ring-0 transition-colors"
                      placeholder="+91 00000 00000"
                      type="tel"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                      Event Category
                    </label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full bg-transparent border-b border-stone-300 py-2 text-sm focus:border-brand-secondary outline-none focus:ring-0"
                    >
                      <option value="Wedding Ceremony">Wedding Ceremony</option>
                      <option value="Corporate Meeting">Corporate Meeting</option>
                      <option value="Social Gala">Social Gala</option>
                      <option value="Exhibition Booth">Exhibition Booth</option>
                      <option value="Anniversary Assembly">Anniversary Assembly</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                      Preferred Date
                    </label>
                    <input
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-transparent border-b border-stone-300 py-2 text-sm focus:border-brand-secondary outline-none focus:ring-0"
                      type="date"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block font-sans text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                    Expected Guests
                  </label>
                  <input
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-transparent border-b border-stone-300 py-2 text-sm focus:border-brand-secondary outline-none focus:ring-0"
                    placeholder="Expected number of attendees"
                    type="number"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block font-sans text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                    Special Vision &amp; Notes
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-transparent border-b border-stone-300 py-2 text-sm focus:border-brand-secondary outline-none focus:ring-0 resize-none"
                    placeholder="Tell us about your catering, floral decoration, or guest lodging wishes."
                    rows={2}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-brand-secondary text-white py-4 rounded-md font-sans text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-primary transition-all duration-300 shadow-md active:scale-98"
                >
                  {submitting ? 'Transmitting details...' : 'Check Availability'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Showcase Section */}
      <section className="bg-stone-50 border-t border-b border-stone-200/50 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8 border-b border-stone-200 pb-8">
            <div className="space-y-2">
              <span className="text-brand-secondary font-sans text-xs uppercase tracking-[0.2em] font-bold block">
                The Portfolio
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-primary">
                A Vision of Elegance
              </h2>
            </div>
            <p className="text-stone-500 font-sans italic text-sm border-l-2 border-brand-secondary/35 pl-6 max-w-md">
              Capturing authentic historic memories of grand celebrations and conferences across our premium venues.
            </p>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-2 px-4 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-secondary text-white'
                    : 'bg-warm-gray text-stone-600 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-like dynamic styling grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-all duration-500">
            {filteredImages.map((img, idx) => (
              <div 
                key={idx}
                className="group relative overflow-hidden rounded-xl bg-white shadow-md border border-stone-200/50 h-[300px]"
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={img.url}
                  referrerPolicy="no-referrer"
                  alt={img.alt}
                />
                <div className="absolute inset-0 bg-brand-primary/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                  <span className="text-white font-sans uppercase tracking-widest text-xs font-bold border border-white/40 px-5 py-2">
                    {img.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Coordination Segment */}
      <section className="h-[480px] w-full grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-1000 overflow-hidden relative">
        <img
          className="w-full h-full object-cover brightness-95"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBotQ5h-JUIzOpOomojJjVxh5EgFLntlUVoqYGK43ElIgSHeNIhXIuc0QBBocAJozyeTP3oUMKFnT19GkPJP-toyDVRiYwn9-THQthjAUTKAWjPP9SPPIxQBa95xhyjCHAyEHnGxoEMxYG4pMZ6I-8pPUYWVVmWr4cdaQDEEQi8EMIY82SCSps_vHThGjGKGkWZ0m20dIXS6rUoo-eIjNE3Pz70GXzIcgXSv_lenCFZ7h9ANjMmm6Y_Zddd_SIeNDxfNHD5gfACcQ"
          alt="Topographical lookup representation of Kolkata Airport and Pulin Avenue"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-primary/5 pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center">
          <a
            href="https://share.google/BkMMJr1K7YfAP2VZE"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/95 backdrop-blur-md p-6 rounded-xl border border-stone-200 shadow-2xl flex items-center gap-4 hover:scale-105 transition-transform"
          >
            <div className="p-3 bg-brand-secondary/15 rounded-full text-brand-secondary">
              <MapPin className="w-6 h-6 animate-bounce" />
            </div>
            <div className="text-left">
              <h5 className="font-display text-lg font-bold text-brand-primary">
                Northin Hotel
              </h5>
              <p className="text-[10px] font-sans uppercase tracking-wider text-stone-500 font-semibold">
                Click to explore on satellite map
              </p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
