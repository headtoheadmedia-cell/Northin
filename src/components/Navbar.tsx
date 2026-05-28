import { useState } from 'react';
import { Menu, X, MessageSquare, Calendar } from 'lucide-react';
import BrandLogo from './BrandLogo';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'spaces', label: 'Spaces' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'gallery', label: 'Gallery' },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-stone-200/45 transition-all duration-300">
      <div className="flex justify-between items-center px-6 md:px-10 py-5 max-w-screen-2xl mx-auto">
        {/* Brand Logo & Name */}
        <div 
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <BrandLogo height={64} className="h-14 md:h-16 transition-transform duration-300 group-hover:scale-105" />
          <div className="flex flex-col border-l border-stone-300 pl-3">
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-stone-500 font-extrabold leading-none">
              Banquets
            </span>
            <span className="text-[7px] md:text-[8px] uppercase tracking-[0.2em] text-brand-secondary font-semibold mt-1">
              Kolkata
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`font-display tracking-tight text-sm font-light uppercase tracking-wider relative py-1 transition-all duration-300 hover:text-brand-secondary ${
                activeTab === link.id
                  ? 'text-brand-secondary font-semibold border-b-2 border-brand-secondary'
                  : 'text-stone-600'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          {/* Admin / Live inquiries quick toggle */}
          <button 
            onClick={() => setActiveTab('booking')}
            className={`hidden sm:flex items-center gap-2 p-2 rounded-full cursor-pointer transition-colors ${
              activeTab === 'booking' ? 'text-brand-secondary bg-brand-secondary/10' : 'text-brand-primary hover:bg-stone-100'
            }`}
            title="Check Enquiries & Manage Bookings"
          >
            <MessageSquare className="w-5 h-5 text-brand-secondary" />
            <span className="text-xs font-semibold tracking-wider text-stone-600 uppercase">Inbox</span>
          </button>

          <button
            onClick={() => window.open('https://wa.me/918777800166?text=Hello%20Northin%20Hotel%2C%20I%20would%20like%20to%20book%20an%20event.', '_blank')}
            className="bg-brand-secondary text-white px-5 py-2.5 rounded-md font-sans text-xs uppercase tracking-widest font-semibold hover:bg-brand-primary active:scale-95 transition-all shadow-sm flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            Book Event
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brand-primary hover:bg-stone-100 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-stone-200 shadow-xl py-6 px-6 space-y-4 animate-fadeIn absolute left-0 w-full">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  setIsOpen(false);
                }}
                className={`text-left text-lg font-display py-2 border-b border-stone-100 transition-colors ${
                  activeTab === link.id
                    ? 'text-brand-secondary font-bold'
                    : 'text-stone-600'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                setActiveTab('booking');
                setIsOpen(false);
              }}
              className="flex items-center gap-3 text-left text-lg font-display py-2 text-stone-600 border-b border-stone-100"
            >
              <MessageSquare className="w-5 h-5 text-brand-secondary" />
              Manage Bookings
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
