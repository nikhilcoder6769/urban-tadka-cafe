import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Star,
  Users,
  Sparkles,
  Flame,
  Coffee,
  Heart,
  MessageCircle,
  ShoppingBag,
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { menuItems } from '../data/menuData';
import { testimonialsData } from '../data/testimonialsData';
import DishCard from '../components/DishCard';
import PageMeta from '../components/PageMeta';
import ScrollReveal from '../components/ScrollReveal';

export default function HomePage() {
  const [activeHighlightTab, setActiveHighlightTab] = useState('All');

  // Highlights categories matching reference
  const highlightTabs = ['All', 'Pizzas', 'Burgers', 'Pastas', 'Drinks'];

  // 4 curated dishes directly corresponding to the reference tabs
  const highlightDishes = [
    {
      id: 'hl-1',
      name: 'Tandoori Paneer Naanizza',
      category: 'Pizzas',
      price: 259,
      description: 'Garlic naan crust topped with charred paneer, spiced makhani coulis, and bubbly mozzarella.',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80',
      isVeg: true,
      spiceLevel: 2,
      rating: 4.8,
      reviewsCount: 195,
      prepTime: '15 mins',
      isBestseller: true,
    },
    {
      id: 'hl-2',
      name: 'Butter Chicken Brioche Burger',
      category: 'Burgers',
      price: 279,
      description: 'Juicy pulled tandoori chicken tossed in rich satin makhani gravy on toasted buttery brioche.',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80',
      isVeg: false,
      spiceLevel: 2,
      rating: 4.9,
      reviewsCount: 320,
      prepTime: '15 mins',
      isBestseller: true,
    },
    {
      id: 'hl-3',
      name: 'Creamy Tadka Makhani Pasta',
      category: 'Pastas',
      price: 249,
      description: 'Italian al dente pasta tossed in slow-tempered cashew cream, ghee tadka, and fresh basil.',
      image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80',
      isVeg: true,
      spiceLevel: 1,
      rating: 4.8,
      reviewsCount: 210,
      prepTime: '14 mins',
      isChefSpecial: true,
    },
    {
      id: 'hl-4',
      name: 'Kokum Mint Sparkler & Cold Brew',
      category: 'Drinks',
      price: 129,
      description: 'Tart coastal kokum nectar infused with crushed mint, roasted jeera, and bubbly fizz.',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80',
      isVeg: true,
      spiceLevel: 0,
      rating: 4.9,
      reviewsCount: 185,
      prepTime: '5 mins',
      isRecommended: true,
    },
  ];

  const filteredHighlights = activeHighlightTab === 'All'
    ? highlightDishes
    : highlightDishes.filter((d) => d.category === activeHighlightTab);

  const defaultWhatsAppUrl = `https://wa.me/${businessConfig.contact.whatsapp}?text=${encodeURIComponent(
    businessConfig.whatsappMessages.general
  )}`;

  return (
    <div className="pb-20 space-y-16 sm:space-y-24 bg-[#FFFDF9] dark:bg-[#0A111F] transition-colors">
      <PageMeta
        title="Urban Tadka Café | Dine • Share • Enjoy"
        description="A modern café for food lovers, friends and families. Experience our famous naanizzas, brioche burgers, loaded fries, and artisan chai in HSR Layout, Bengaluru."
      />

      {/* 1. HERO SECTION - MATCHING REFERENCE DESIGN */}
      <section className="relative bg-[#0B1323] text-white pt-10 sm:pt-16 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(255,87,34,0.12)_0%,transparent_65%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
          {/* Main Hero Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              {/* Tagline from Reference */}
              <ScrollReveal animation="fade-in" delay={100}>
                <p className="text-xs sm:text-sm font-bold text-[#FF5722] tracking-wider uppercase">
                  Good Food. Great Vibes.
                </p>
              </ScrollReveal>

              {/* Main Headline from Reference: Dine • Share • Enjoy */}
              <ScrollReveal animation="fade-up" delay={180}>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
                  Dine <span className="text-[#FF5722]">•</span> Share <span className="text-[#FF5722]">•</span>{' '}
                  <span className="text-[#FF5722]">Enjoy</span>
                </h1>
              </ScrollReveal>

              {/* Subheadline from Reference */}
              <ScrollReveal animation="fade-up" delay={260}>
                <p className="text-slate-300 text-sm sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                  A modern café for food lovers, friends and families.
                </p>
              </ScrollReveal>

              {/* Call-to-Action Pill Buttons from Reference */}
              <ScrollReveal animation="fade-up" delay={340}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
                  <Link
                    to="/menu"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#FF5722] hover:bg-orange-600 text-white font-bold rounded-full text-sm sm:text-base shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 transition-all hover:scale-103 active:scale-97"
                  >
                    <span>View Menu</span>
                    <ArrowRight size={17} />
                  </Link>

                  <Link
                    to="/contact"
                    className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-white/10 text-white font-semibold rounded-full border border-white/35 text-sm sm:text-base flex items-center justify-center transition-all hover:scale-103 active:scale-97"
                  >
                    Book a Table
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Food Hero Visual from Reference */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <ScrollReveal animation="scale-up" delay={200}>
                <div className="relative group w-full max-w-md mx-auto">
                  {/* Outer Glow */}
                  <div className="absolute inset-0 bg-[#FF5722]/15 rounded-full blur-2xl group-hover:scale-105 transition-transform duration-700 pointer-events-none" />

                  {/* Food Platter Showcase matching reference */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 bg-slate-900/60 aspect-4/3 sm:aspect-square flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80"
                      alt="Signature Tadka Bowl Platter"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="eager"
                      decoding="async"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1323]/80 via-transparent to-black/10" />

                    {/* Quality Floating Badge */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/15">
                      <div className="flex items-center gap-1.5 font-bold text-amber-400">
                        <Star size={14} className="fill-amber-400" />
                        <span className="text-white">4.8 Rating</span>
                      </div>
                      <span className="text-slate-300 font-medium">Chef's Signature Dish</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* 4 Feature Pods matching reference design */}
          <ScrollReveal animation="fade-up" delay={250}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-white/10">
              {/* Pod 1: Delicious Food */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 hover:bg-white/8 backdrop-blur-sm border border-white/10 flex flex-col items-center text-center transition-all group">
                <div className="w-11 h-11 rounded-full bg-[#FF5722]/15 text-[#FF5722] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                  <Flame size={22} className="fill-[#FF5722]" />
                </div>
                <h4 className="font-bold text-white text-xs sm:text-sm">Delicious Food</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Authentic desi recipes</p>
              </div>

              {/* Pod 2: Great Ambience */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 hover:bg-white/8 backdrop-blur-sm border border-white/10 flex flex-col items-center text-center transition-all group">
                <div className="w-11 h-11 rounded-full bg-[#FF5722]/15 text-[#FF5722] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                  <Sparkles size={22} />
                </div>
                <h4 className="font-bold text-white text-xs sm:text-sm">Great Ambience</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Warm & cozy aesthetics</p>
              </div>

              {/* Pod 3: Group Friendly */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 hover:bg-white/8 backdrop-blur-sm border border-white/10 flex flex-col items-center text-center transition-all group">
                <div className="w-11 h-11 rounded-full bg-[#FF5722]/15 text-[#FF5722] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                  <Users size={22} />
                </div>
                <h4 className="font-bold text-white text-xs sm:text-sm">Group Friendly</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Booths & long tables</p>
              </div>

              {/* Pod 4: Special Offers */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 hover:bg-white/8 backdrop-blur-sm border border-white/10 flex flex-col items-center text-center transition-all group">
                <div className="w-11 h-11 rounded-full bg-[#FF5722]/15 text-[#FF5722] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                  <Coffee size={22} />
                </div>
                <h4 className="font-bold text-white text-xs sm:text-sm">Artisan Chai</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Slow-brewed in clay</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. OUR MENU HIGHLIGHTS SECTION - MATCHING REFERENCE DESIGN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Heading matching reference */}
        <ScrollReveal animation="fade-up">
          <div className="text-center space-y-1.5">
            <div className="flex items-center justify-center gap-3">
              <span className="h-0.5 w-10 sm:w-16 bg-[#FF5722] rounded-full opacity-80" />
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Our Menu Highlights
              </h2>
              <span className="h-0.5 w-10 sm:w-16 bg-[#FF5722] rounded-full opacity-80" />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-[#FF5722] tracking-wide">
              Tasty. Fresh. Always.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Pill Buttons matching reference */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            {highlightTabs.map((tab) => {
              const isActive = activeHighlightTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveHighlightTab(tab)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95 ${
                    isActive
                      ? 'bg-[#FF5722] text-white shadow-md shadow-orange-500/25'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* 4 Cards Showcase Grid matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredHighlights.map((dish, idx) => (
            <ScrollReveal
              key={dish.id}
              animation="fade-up"
              delay={100 + idx * 70}
            >
              <div className="group bg-white dark:bg-[#111C2E] rounded-2xl overflow-hidden border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
                {/* Photo matching reference card style */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Veg / Non-Veg dot */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md p-1 rounded-md shadow-xs">
                    <span
                      className={`block w-2.5 h-2.5 rounded-full ${
                        dish.isVeg ? 'bg-emerald-600' : 'bg-rose-600'
                      }`}
                    />
                  </div>

                  {/* Category tag */}
                  <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white px-2.5 py-0.5 rounded-full border border-white/10">
                    {dish.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-[#FF5722] transition-colors leading-snug">
                      {dish.name}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-2 mt-1 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">
                        Price
                      </span>
                      <span className="text-lg font-black text-slate-900 dark:text-white">
                        ₹{dish.price}
                      </span>
                    </div>

                    <Link
                      to="/menu"
                      className="px-4 py-2 bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold rounded-full shadow-sm transition active:scale-95"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center pt-2">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-[#FF5722] text-white font-bold rounded-full text-xs sm:text-sm transition-all shadow-md active:scale-95"
          >
            <span>Explore Complete Menu (24 Items)</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* 3. STORY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <ScrollReveal animation="fade-left" delay={100} className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-sm h-52 sm:h-64 border border-slate-100 dark:border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=80"
                  alt="Chef preparing tadka"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 rounded-2xl bg-[#0F1E36] text-white space-y-1.5 shadow-sm">
                <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                  <Sparkles size={14} /> The Ghee Tadka Secret
                </span>
                <p className="text-xs text-slate-300 font-normal leading-relaxed">
                  Whole spices crackled in pure desi ghee at flash heat to preserve deep aroma.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200} className="space-y-4 pt-4">
              <div className="p-5 rounded-2xl bg-orange-50/70 dark:bg-white/5 border border-orange-100 dark:border-white/10 space-y-1.5">
                <span className="text-xs font-bold text-slate-900 dark:text-white">☕ Nostalgic Kulhad</span>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                  Natural earthen clay cups that infuse authentic earthy aroma into hot chai.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-sm h-52 sm:h-64 border border-slate-100 dark:border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=700&q=80"
                  alt="Café Ambience"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <ScrollReveal animation="fade-right" delay={100}>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF5722] bg-orange-50 dark:bg-white/5 px-3.5 py-1.5 rounded-full border border-orange-100 dark:border-white/10">
                Our Story
              </span>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={180}>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Authentic Indian soul in a contemporary café space.
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={260}>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                Urban Tadka Café bridges the best of both worlds: unpretentious street-style recipes crafted with ethical farm ingredients, served in an aesthetic, airy space with comfortable seating, acoustic music, and welcoming staff.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={320}>
              <div className="pt-2 flex items-center gap-6 text-slate-800 dark:text-slate-200 border-t border-slate-100 dark:border-white/10">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#FF5722]">4+</span>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">Years of Taste</p>
                </div>
                <div className="h-6 w-px bg-slate-200 dark:bg-white/10"></div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#FF5722]">180K+</span>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">Guests Welcomed</p>
                </div>
                <div className="h-6 w-px bg-slate-200 dark:bg-white/10"></div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#FF5722]">4.8★</span>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">Google Score</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={380}>
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5722] hover:underline pt-1"
              >
                Read our full story <ArrowRight size={13} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. GUEST REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF5722] bg-orange-50 dark:bg-white/5 px-3 py-1 rounded-full border border-orange-100 dark:border-white/10">
              Community Love
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Loved by Friends & Families
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonialsData.map((test, idx) => (
            <ScrollReveal
              key={test.id}
              animation="fade-up"
              delay={100 + idx * 70}
            >
              <div className="p-6 rounded-2xl bg-white dark:bg-[#111C2E] border border-slate-100 dark:border-white/10 shadow-xs flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <div className="flex items-center text-amber-400">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} size={13} className="fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed italic font-normal">
                    "{test.comment}"
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-2.5">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-xs text-slate-900 dark:text-white">{test.name}</h4>
                    <p className="text-[10px] text-slate-400 font-normal">{test.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 5. RESERVATION STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1323] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 shadow-xl">
            <div className="space-y-1.5 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Planning a Visit to Urban Tadka?
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-normal">
                Reserve your favorite corner table or check opening timings. Walk-ins are always warmly welcomed.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="px-6 py-3 bg-[#FF5722] hover:bg-orange-600 text-white font-bold rounded-full text-xs sm:text-sm transition shadow-md active:scale-95"
              >
                Reservation
              </Link>
              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-medium rounded-full text-xs sm:text-sm border border-white/20 transition flex items-center gap-1.5 active:scale-95"
              >
                <MessageCircle size={15} className="text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
