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

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Main Sticky Navbar styled like reference */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080E1A]/95 backdrop-blur-md shadow-md py-3 border-b border-white/10'
            : 'bg-[#080E1A]/85 backdrop-blur-md py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo matching Reference Design */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center text-[#FF5722] group-hover:scale-105 transition-transform">
              <svg
                className="w-8 h-8 sm:w-9 sm:h-9"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Chef Hat */}
                <path
                  d="M10 13c-2.2 0-3.5-1.8-3-4 .5-2 2.5-3 4.5-2.5C12.5 4.5 15 3 17 3s4.5 1.5 5.5 3.5c2-.5 4 .5 4.5 2.5.5 2.2-.8 4-3 4"
                  stroke="#FF5722"
                />
                {/* Cup / Bowl Base */}
                <path
                  d="M7 16h18v4a6 6 0 0 1-6 6h-6a6 6 0 0 1-6-6v-4z"
                  stroke="#FF5722"
                />
                {/* Cup Handle */}
                <path d="M25 18a2.5 2.5 0 0 1 0 5" stroke="#FF5722" />
                {/* Base Saucer Line */}
                <path d="M9 28h14" stroke="#FF5722" strokeWidth="2" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight leading-tight text-white">
                Urban
              </span>
              <span className="font-bold text-[11px] sm:text-xs tracking-wider text-[#FF5722] leading-tight">
                Tadka Café
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors hover:text-[#FF5722] ${
                    isActive ? 'text-[#FF5722] font-semibold' : 'text-slate-300'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <ThemeToggle className="bg-white/5 border-white/10 text-white" />

            {/* Quick Order Tray Drawer Trigger */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="relative p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white transition border border-white/10"
              aria-label="View Order Tray"
            >
              <ShoppingBag size={18} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#FF5722] text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Orange "Reservation" Pill Button from Reference */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center px-6 py-2.5 bg-[#FF5722] hover:bg-orange-600 text-white font-bold text-xs sm:text-sm rounded-full shadow-md shadow-orange-500/25 transition-all hover:scale-103 active:scale-97"
            >
              Reservation
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/5 text-white hover:bg-white/10 transition border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#0B1323] text-white shadow-2xl flex flex-col justify-between p-6 border-l border-white/10">
            <div>
              {/* Drawer Top */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="text-[#FF5722]">
                    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M10 13c-2.2 0-3.5-1.8-3-4 .5-2 2.5-3 4.5-2.5C12.5 4.5 15 3 17 3s4.5 1.5 5.5 3.5c2-.5 4 .5 4.5 2.5.5 2.2-.8 4-3 4" stroke="#FF5722"/>
                      <path d="M7 16h18v4a6 6 0 0 1-6 6h-6a6 6 0 0 1-6-6v-4z" stroke="#FF5722"/>
                      <path d="M25 18a2.5 2.5 0 0 1 0 5" stroke="#FF5722"/>
                      <path d="M9 28h14" stroke="#FF5722" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Urban Tadka Café</h3>
                    <p className="text-[11px] text-[#FF5722]">{businessConfig.tagline}</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="mt-5 space-y-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition ${
                        isActive
                          ? 'bg-[#FF5722]/20 text-[#FF5722]'
                          : 'text-slate-200 hover:bg-white/5'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-slate-500">→</span>
                  </NavLink>
                ))}
                <NavLink
                  to="/location"
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition ${
                      isActive
                        ? 'bg-[#FF5722]/20 text-[#FF5722]'
                        : 'text-slate-200 hover:bg-white/5'
                    }`
                  }
                >
                  <span>Location & Map</span>
                  <span className="text-xs text-slate-500">→</span>
                </NavLink>
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <Link
                to="/contact"
                className="w-full py-3 bg-[#FF5722] text-white rounded-full text-xs font-bold shadow-md flex items-center justify-center gap-2"
              >
                Reservation
              </Link>

              <a
                href={`tel:${businessConfig.contact.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-white/5 text-slate-200 rounded-xl text-xs font-semibold hover:bg-white/10 transition border border-white/10"
              >
                <Phone size={14} className="text-[#FF5722]" /> Call {businessConfig.contact.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
