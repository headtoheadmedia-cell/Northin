import { useState, useEffect } from 'react';
import { BookingInquiry } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Spaces from './pages/Spaces';
import Corporate from './pages/Corporate';
import GalleryContact from './pages/GalleryContact';
import Booking from './pages/Booking';
import { MessageSquare, Calendar, Sparkles, Heart, Bell, Check, Info, PhoneCall } from 'lucide-react';
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedSpaceId, setSelectedSpaceId] = useState<string>('nayra');
  const [bookings, setBookings] = useState<BookingInquiry[]>([]);
  const [notification, setNotification] = useState<{ msg: string; type: 'success' | 'info' } | null>(null);

  // Fetch bookings lists on load
  const fetchBookings = async () => {
    try {
      const res = await fetch('/api/bookings');
      if (res.ok) {
        const list = await res.json();
        setBookings(list);
      }
    } catch (err) {
      console.warn('Backend endpoint fetch is inactive or launching during build phase:', err);
    }
  };

  useEffect(() => {
    fetchBookings();
    // Poll inquiries occasionally mapping back-end updates
    const interval = setInterval(fetchBookings, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleInquire = async (formData: any) => {
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        const newBooking = await res.json();
        setBookings(prev => [newBooking, ...prev]);
        return newBooking;
      } else {
        throw new Error('Server returned non-200 state');
      }
    } catch (err) {
      console.error('Inquiry transmission failed, using optimistic state insertion:', err);
      // Fallback local memory insertion if server temporarily unreachable (e.g., during startup reboot)
      const mockBooking: BookingInquiry = {
        id: 'b-' + Math.floor(1000 + Math.random() * 9000),
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        eventType: formData.eventType,
        preferredDate: formData.preferredDate,
        guestCount: formData.guestCount,
        message: formData.message || '',
        spaceId: formData.spaceId || 'general',
        spaceName: formData.spaceName || 'General Space',
        status: 'Pending',
        createdAt: new Date().toISOString()
      };
      setBookings(prev => [mockBooking, ...prev]);
      return mockBooking;
    }
  };

  const showNotification = (msg: string, type: 'success' | 'info') => {
    setNotification({ msg, type });
    setTimeout(() => {
      setNotification(null);
    }, 4500);
  };

  // Pre-fill space name and switch straight to booking view
  const handleSelectSpace = (spaceId: string) => {
    setSelectedSpaceId(spaceId);
    setActiveTab('booking');
    showNotification(`Selected space successfully pre-configured inside booking form!`, 'success');
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark flex flex-col font-sans selection:bg-brand-accent selection:text-brand-primary">
      {/* Top sticky glass navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Dynamic Notifications Banner (Toasts) */}
      {notification && (
        <div className="fixed top-24 right-6 z-50 flex items-center gap-3 bg-white border border-stone-200 p-4 rounded-xl shadow-2xl animate-fadeIn max-w-sm">
          <div className={`p-2 rounded-full ${notification.type === 'success' ? 'bg-emerald-100 text-emerald-800' : 'bg-brand-secondary/15 text-brand-secondary'}`}>
            {notification.type === 'success' ? <Check className="w-5 h-5" /> : <Info className="w-5 h-5" />}
          </div>
          <div className="space-y-0.5">
            <p className="text-xs font-sans font-bold text-stone-900 uppercase tracking-widest">
              Notification
            </p>
            <p className="text-xs text-stone-600 font-sans leading-snug">
              {notification.msg}
            </p>
          </div>
        </div>
      )}

      {/* Active screen mapping router */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <Home onNavigate={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} />
        )}

        {activeTab === 'spaces' && (
          <Spaces onSelectSpace={handleSelectSpace} />
        )}

        {activeTab === 'corporate' && (
          <Corporate
            onInquire={handleInquire}
            onShowNotification={showNotification}
          />
        )}

        {activeTab === 'gallery' && (
          <GalleryContact
            onInquire={handleInquire}
            onShowNotification={showNotification}
          />
        )}

        {activeTab === 'booking' && (
          <Booking
            selectedSpaceId={selectedSpaceId}
            setSelectedSpaceId={setSelectedSpaceId}
            onInquire={handleInquire}
            onShowNotification={showNotification}
            bookingList={bookings}
            fetchBookings={fetchBookings}
          />
        )}
      </main>

      {/* Brand Luxe Footer */}
      <Footer setActiveTab={setActiveTab} onShowNotification={showNotification} />

      {/* Floating Action CTA Utilities (WhatsApp Call & Direct Quote popup triggers) */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-3 items-end">
        {/* Mock WhatsApp Callback trigger */}
        <button
          onClick={() => {
            showNotification('Opening direct secure priority support link to Palace Concierge on WhatsApp...', 'success');
            window.open('https://wa.me/918777800166?text=Hello%20Northin%20Hotel%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20event.', '_blank');
          }}
          className="bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
          title="Priority support on WhatsApp"
        >
          {/* Custom vector representation of speech bubbles or phone */}
          <PhoneCall className="w-6 h-6 animate-pulse" />
        </button>

        {/* Quick Quote indicator */}
        <button
          onClick={() => window.open('https://wa.me/918777800166?text=Hello%20Northin%20Hotel%2C%20I%20would%20like%20to%20book%20a%20venue.', '_blank')}
          className="bg-brand-secondary text-white px-5 py-3 rounded-full font-bold text-xs uppercase tracking-widest shadow-2xl flex items-center gap-2 hover:bg-brand-primary hover:scale-[1.02] active:scale-95 transition-all group"
        >
          <Calendar className="w-4 h-4 shrink-0 transition-transform group-hover:rotate-12" />
          <span>Book Venue</span>
        </button>
      </div>
      <SpeedInsights />
    </div>
  );
}
