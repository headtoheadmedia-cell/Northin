import React, { useState } from 'react';
import { Mail, Send, Award, Key, MapPin } from 'lucide-react';
import BrandLogo from './BrandLogo';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onShowNotification: (msg: string, type: 'success' | 'info') => void;
}

export default function Footer({ setActiveTab, onShowNotification }: FooterProps) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    onShowNotification(`Thank you! ${email} has been subscribed to Northin luxury updates.`, 'success');
    setEmail('');
  };

  return (
    <footer className="bg-stone-100 dark:bg-stone-900 text-stone-800 dark:text-stone-200 w-full py-16 px-6 md:px-10 border-t border-stone-200 dark:border-stone-800 transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto items-start">
        {/* Brand Column */}
        <div className="md:col-span-1 space-y-4">
          <div className="bg-white/80 dark:bg-stone-800/80 p-2.5 rounded-lg shadow-sm border border-stone-200/30 dark:border-stone-700/30 inline-block">
            <BrandLogo height={56} className="h-14" />
          </div>
          <p className="text-stone-500 dark:text-stone-400 font-sans text-sm leading-relaxed max-w-xs">
            Redefining luxury celebrations and prestigious corporate assemblies at the heart of the city since 2012.
          </p>
          <div className="flex gap-4 pt-2">
            <span className="p-2 bg-white dark:bg-stone-800 rounded-full text-brand-secondary shadow-sm">
              <Award className="w-5 h-5" />
            </span>
            <span className="p-2 bg-white dark:bg-stone-800 rounded-full text-brand-secondary shadow-sm">
              <Key className="w-5 h-5" />
            </span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-4">
          <h5 className="text-stone-800 dark:text-stone-100 font-sans text-xs uppercase tracking-widest font-bold">
            Navigation
          </h5>
          <ul className="space-y-3">
            {[
              { id: 'home', label: 'Home Experience' },
              { id: 'spaces', label: 'Luxury Spaces' },
              { id: 'corporate', label: 'Corporate Solutions' },
              { id: 'gallery', label: 'Gallery Portfolio' },
            ].map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => setActiveTab(link.id)}
                  className="text-stone-500 dark:text-stone-400 hover:text-brand-secondary text-sm font-sans tracking-wide hover:underline decoration-brand-secondary underline-offset-8 transition-all text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Localized Hotel */}
        <div className="space-y-4">
          <h5 className="text-stone-800 dark:text-stone-100 font-sans text-xs uppercase tracking-widest font-bold">
            Hotel Location
          </h5>
          <p className="text-stone-500 dark:text-stone-400 font-sans text-sm leading-relaxed max-w-xs uppercase tracking-wider">
            176 Pulin Avenue, Near Kolkata Airport.<br />
            Kolkata – 700081, West Bengal, India.
          </p>
          <div className="flex items-center gap-2 text-brand-secondary text-sm pt-2">
            <MapPin className="w-4 h-4" />
            <span className="font-semibold text-xs tracking-widest uppercase">Airport District</span>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="space-y-4">
          <h5 className="text-stone-800 dark:text-stone-100 font-sans text-xs uppercase tracking-widest font-bold">
            Luxe Newsletter
          </h5>
          <p className="text-stone-500 dark:text-stone-400 font-sans text-xs leading-relaxed italic">
            Subscribe for exclusive booking priority, season discounts, and menu highlights.
          </p>
          <form onSubmit={handleSubscribe} className="flex border-b border-stone-300 dark:border-stone-700 py-2">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-none focus:ring-0 text-stone-800 dark:text-stone-100 text-sm w-full font-sans outline-none focus:outline-none"
              placeholder="Email Address"
              type="email"
              required
            />
            <button type="submit" className="text-brand-secondary hover:text-brand-primary dark:hover:text-stone-100 transition-colors p-1">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Copy alignment bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-200 dark:border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-stone-400 dark:text-stone-500 font-sans text-[11px] uppercase tracking-[0.2em] text-center md:text-left">
          © {new Date().getFullYear()} Northin Hotel Banquets. All rights reserved. Registered in West Bengal, India.
        </p>
        <div className="flex gap-6">
          <span className="text-stone-400 dark:text-stone-500 font-sans text-[11px] uppercase tracking-[0.2em]">
            A Landmark of Elegant Traditions
          </span>
        </div>
      </div>
    </footer>
  );
}
