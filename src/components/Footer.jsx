import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  Send,
  CheckCircle2,
  ExternalLink,
  Heart,
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3500);
    }
  };

  return (
    <footer className="bg-[#0A1424] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Bio (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#FF5722] to-amber-500 text-white flex items-center justify-center shadow-md">
                <span className="text-xl">🌶️</span>
              </div>
              <div>
                <span className="font-black text-xl text-white tracking-tight">
                  Urban Tadka
                </span>
                <span className="text-[#FF5722] text-xs font-bold uppercase ml-1.5 px-1.5 py-0.5 bg-[#FF5722]/10 rounded">
                  Café
                </span>
                <p className="text-xs text-slate-400 font-medium">{businessConfig.tagline}</p>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Modern Indian café & casual dining where street flavors meet cozy aesthetics. Serving slow-tempered artisanal dishes, stone-crust naanizzas, and hand-brewed kulhad chai to students, foodies, and families.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={businessConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#FF5722] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={businessConfig.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#FF5722] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={businessConfig.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#FF5722] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>

            {/* Business Saathi Plan Badge */}
            <div className="mt-4 p-3 rounded-xl bg-slate-900/80 border border-slate-700/60 inline-flex flex-col gap-1 max-w-sm">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] uppercase tracking-wider font-bold text-amber-400">
                  Business Saathi Website Solution
                </span>
                <span className="text-[10px] font-extrabold bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full">
                  ₹700 / Month
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Showcasing the complete 6-page digital menu, WhatsApp ordering, Google Maps, and enquiry setup.
              </p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-slate-400 hover:text-[#FF5722] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-slate-400 hover:text-[#FF5722] transition">
                  Our Menu & Specials
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-[#FF5722] transition">
                  About Our Story
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-[#FF5722] transition">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-[#FF5722] transition">
                  Contact & Enquiries
                </Link>
              </li>
              <li>
                <Link to="/location" className="text-slate-400 hover:text-[#FF5722] transition">
                  Find Us & Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Timings */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-1.5">
              <Clock size={15} className="text-[#FF5722]" /> Hours
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              {businessConfig.hours.map((h, i) => (
                <div key={i} className="pb-1.5 border-b border-slate-800/60 last:border-0">
                  <p className="font-semibold text-slate-200">{h.days}</p>
                  <p className="text-amber-400/90 font-mono text-[11px]">{h.time}</p>
                  <span className="text-[10px] text-slate-500">{h.notes}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-1.5">
              <MapPin size={15} className="text-[#FF5722]" /> Visit Us
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="leading-snug">{businessConfig.location.fullAddress}</p>
              
              <div className="pt-1">
                <a
                  href={`tel:${businessConfig.contact.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 text-slate-200 hover:text-[#FF5722] transition"
                >
                  <Phone size={13} className="text-[#FF5722]" />
                  <span>{businessConfig.contact.phone}</span>
                </a>
              </div>

              <div>
                <a
                  href={`mailto:${businessConfig.contact.email}`}
                  className="inline-flex items-center gap-1.5 text-slate-200 hover:text-[#FF5722] transition"
                >
                  <Mail size={13} className="text-[#FF5722]" />
                  <span>{businessConfig.contact.email}</span>
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={businessConfig.location.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#FF5722] hover:underline"
                >
                  Get Driving Directions <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Urban Tadka Café. All rights reserved.</p>

          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <Heart size={13} className="fill-[#FF5722] text-[#FF5722]" />
            <span>for Business Saathi ₹700/mo Plan Demo</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <Link to="/contact" className="hover:text-slate-300">
              Privacy & Hygiene
            </Link>
            <Link to="/contact" className="hover:text-slate-300">
              Table Reservation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
