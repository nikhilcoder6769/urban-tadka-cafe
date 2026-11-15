import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Menu as MenuIcon,
  X,
  Phone,
  MessageCircle,
  ShoppingBag,
  MapPin,
  Clock,
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { useCart } from '../context/CartContext';
import OpenStatusBadge from './OpenStatusBadge';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems, setIsDrawerOpen } = useCart();
  const location = useLocation();

  // Close mobile drawer on route transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll detection for glassmorphism styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/about', label: 'About Us' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
    { to: '/location', label: 'Location' },
  ];

  const defaultWhatsAppUrl = `https://wa.me/${businessConfig.contact.whatsapp}?text=${encodeURIComponent(
    businessConfig.whatsappMessages.general
  )}`;

  return (
    <>
      {/* Top Bar - Clean, Minimal & Informative */}
      <div className="bg-[#0A111F] text-slate-300 text-[11px] sm:text-xs py-2 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-400">
            <MapPin size={12} className="text-[#FF5722] shrink-0" />
            <span className="font-medium text-slate-300 truncate">
              Galleria Boulevard, HSR Layout, Bengaluru
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300 shrink-0">
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock size={12} className="text-amber-400" />
              <span>11:00 AM – 11:30 PM</span>
            </span>
            <span className="hidden md:inline text-slate-700">•</span>
            <a
              href={`tel:${businessConfig.contact.phoneRaw}`}
              className="hover:text-white flex items-center gap-1.5 transition text-slate-300"
            >
              <Phone size={12} className="text-[#FF5722]" />
              <span className="hidden sm:inline">{businessConfig.contact.phone}</span>
              <span className="sm:hidden font-semibold">Call</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100'
            : 'bg-[#FFFDF9]/95 backdrop-blur-sm py-3.5 border-b border-slate-200/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#FF5722] to-amber-500 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <span className="text-lg">🌶️</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#0F1E36]">
                  Urban Tadka
                </span>
                <span className="text-[10px] font-black uppercase text-[#FF5722] bg-orange-50 px-1.5 py-0.2 rounded border border-orange-100">
                  Café
                </span>
              </div>
              <p className="text-[10px] font-medium text-slate-500 tracking-wide leading-none">
                {businessConfig.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/60 p-1 rounded-xl border border-slate-200/50">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-[#FF5722] shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Theme Toggle (System / Dark / Light) */}
            <ThemeToggle />

            {/* Quick Order Tray Drawer Trigger */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="relative p-2 rounded-xl bg-slate-100/80 hover:bg-orange-50 text-slate-700 hover:text-[#FF5722] transition-colors border border-slate-200/60"
              aria-label="View Order Tray"
            >
              <ShoppingBag size={18} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#FF5722] text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                  {totalItems}
                </span>
              )}
            </button>

            {/* WhatsApp CTA (Desktop) */}
            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow-sm transition active:scale-95"
            >
              <MessageCircle size={14} className="text-emerald-400" />
              <span>Table Inquiry</span>
            </a>

            {/* Hamburger Toggle (Mobile) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl flex flex-col justify-between p-6">
            <div>
              {/* Drawer Top */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🌶️</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Urban Tadka Café</h3>
                    <p className="text-[11px] text-slate-500">{businessConfig.tagline}</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Status & Theme Toggle in Mobile */}
              <div className="mt-4 mb-2 flex items-center justify-between gap-2">
                <OpenStatusBadge />
                <ThemeToggle showLabel={true} />
              </div>

              {/* Mobile Nav Links */}
              <nav className="mt-4 space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition ${
                        isActive
                          ? 'bg-orange-50 text-[#FF5722] font-bold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-slate-400">→</span>
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-slate-100 space-y-2.5">
              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-sm"
              >
                <MessageCircle size={15} /> WhatsApp Inquiries
              </a>

              <a
                href={`tel:${businessConfig.contact.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-100 text-slate-800 rounded-xl text-xs font-semibold hover:bg-slate-200 transition"
              >
                <Phone size={14} className="text-[#FF5722]" /> Call {businessConfig.contact.phone}
              </a>

              <div className="text-center text-[11px] text-slate-400 pt-1">
                HSR Layout, Bengaluru
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
