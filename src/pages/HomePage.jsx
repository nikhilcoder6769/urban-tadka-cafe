import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  ArrowRight,
  Star,
  Wifi,
  Sparkles,
  ShieldCheck,
  Coffee,
  Heart,
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { menuItems } from '../data/menuData';
import { testimonialsData } from '../data/testimonialsData';
import DishCard from '../components/DishCard';
import PageMeta from '../components/PageMeta';
import ScrollReveal from '../components/ScrollReveal';

export default function HomePage() {
  // 6 curated signature dishes for showcase
  const popularDishes = menuItems
    .filter((item) => item.isBestseller || item.isChefSpecial)
    .slice(0, 6);

  const defaultWhatsAppUrl = `https://wa.me/${businessConfig.contact.whatsapp}?text=${encodeURIComponent(
    businessConfig.whatsappMessages.general
  )}`;

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      <PageMeta
        title="Urban Tadka Café | Good Food. Great Vibes."
        description="Experience modern Indian casual dining, artisanal kulhad chai, tandoori brioche burgers, and cozy vibes in HSR Layout, Bengaluru."
      />

      {/* 1. HERO SECTION - CLEAN, SPACIOUS, PREMIUM */}
      <section className="relative min-h-[75vh] sm:min-h-[82vh] flex items-center justify-center overflow-hidden bg-[#0A111F] text-white">
        {/* Zero-cost ambient radial gradient (no blur filter) */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_35%,rgba(255,87,34,0.14)_0%,transparent_65%)]" />

        {/* Optimized Photography */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=75"
            alt="Urban Tadka Café Interior"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A111F] via-[#0A111F]/75 to-[#0A111F]/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center space-y-6 sm:space-y-8">
          {/* Subtle Rating Pill */}
          <ScrollReveal animation="fade-in" delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium text-slate-200 shadow-sm">
              <span className="flex items-center gap-1 text-amber-400 font-bold">
                <Star size={13} className="fill-amber-400" /> 4.8 Rating
              </span>
              <span className="text-white/30">•</span>
              <span className="text-slate-300">Modern Indian Casual Dining</span>
            </div>
          </ScrollReveal>

          {/* Clean Headline */}
          <ScrollReveal animation="fade-up" delay={180}>
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Where Desi Tadka Meets{' '}
                <span className="text-[#FF5722]">Modern Café Vibes</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
                Artisanal slow-tempered curries, tandoori brioche burgers, and slow-brewed kulhad chai served in a warm, welcoming space.
              </p>
            </div>
          </ScrollReveal>

          {/* Clean Dual Action CTAs (No Clutter) */}
          <ScrollReveal animation="fade-up" delay={260}>
            <div className="flex flex-row items-center justify-center gap-3 max-w-md mx-auto pt-1">
              <Link
                to="/menu"
                className="flex-1 sm:flex-none sm:min-w-[170px] px-6 py-3.5 bg-[#FF5722] hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <span>Explore Menu</span>
                <ArrowRight size={15} />
              </Link>

              <Link
                to="/contact"
                className="flex-1 sm:flex-none sm:min-w-[170px] px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-medium rounded-xl border border-white/20 text-xs sm:text-sm transition-all active:scale-95"
              >
                Reserve a Table
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. REFINED AMENITY STRIP (NO OFFERS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-slate-100 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange-50 text-[#FF5722] flex items-center justify-center shrink-0">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Farm Ingredients</h4>
                <p className="text-[11px] text-slate-500 font-normal">Pure ghee & spices</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Coffee size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Artisan Earthen Chai</h4>
                <p className="text-[11px] text-slate-500 font-normal">Slow-brewed Assam tea</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Wifi size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">High-Speed Wi-Fi</h4>
                <p className="text-[11px] text-slate-500 font-normal">Charging at booths</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Heart size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Pet-Friendly Patio</h4>
                <p className="text-[11px] text-slate-500 font-normal">Outdoor open seating</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. RESTAURANT STORY & PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Images */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <ScrollReveal animation="fade-left" delay={100} className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-sm h-52 sm:h-64 border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
                  alt="Signature Dish"
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
              <div className="p-5 rounded-2xl bg-orange-50/70 border border-orange-100 space-y-1.5">
                <span className="text-xs font-bold text-slate-900">☕ Nostalgic Kulhad</span>
                <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  Natural earthen clay cups that infuse authentic earthy aroma into hot chai.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-sm h-52 sm:h-64 border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
                  alt="Café Ambience"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Story Text */}
          <div className="lg:col-span-6 space-y-5">
            <ScrollReveal animation="fade-right" delay={100}>
              <span className="text-xs font-black uppercase tracking-wider text-[#FF5722] bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                Our Story
              </span>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={180}>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Authentic Indian soul in a contemporary café space.
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={260}>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                Urban Tadka Café bridges the best of both worlds: unpretentious street-style recipes crafted with ethical farm ingredients, served in an aesthetic, airy space with comfortable seating, acoustic music, and welcoming staff.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={320}>
              <div className="pt-2 flex items-center gap-6 text-slate-800 border-t border-slate-100">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#FF5722]">4+</span>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">Years of Taste</p>
                </div>
                <div className="h-6 w-px bg-slate-200"></div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#FF5722]">180K+</span>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">Guests Welcomed</p>
                </div>
                <div className="h-6 w-px bg-slate-200"></div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#FF5722]">4.8★</span>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">Google Rating</p>
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

      {/* 4. POPULAR DISHES SHOWCASE */}
      <section className="bg-slate-50/70 py-14 sm:py-20 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Section Header */}
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#FF5722] bg-orange-100/70 px-3 py-1 rounded-full">
                  Curated Favorites
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  Signature Dishes
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm mt-1 max-w-xl font-normal">
                  Our most requested dishes, slow-prepared to order with authentic regional spices.
                </p>
              </div>

              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-900 hover:text-white text-slate-800 text-xs font-bold rounded-xl border border-slate-200 transition-all self-start md:self-auto shadow-2xs"
              >
                <span>Full Menu</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </ScrollReveal>

          {/* Dishes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDishes.map((dish, idx) => (
              <ScrollReveal
                key={dish.id}
                animation="fade-up"
                delay={100 + (idx % 3) * 80}
              >
                <DishCard dish={dish} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CULINARY CRAFT HIGHLIGHTS (REPLACED OFFERS SECTION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#FF5722] bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
              Culinary Ethos
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              The Craft Behind the Flavor
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-normal">
              No shortcuts, no artificial food dyes, and no compromise on ingredient integrity.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="p-7 rounded-2xl bg-white border border-slate-100 shadow-xs space-y-3 h-full">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF5722] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-bold text-base text-slate-900">Fresh Ghee & Cold-Pressed Oils</h3>
              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                We temper our gravies and dals in pure cow ghee and cold-pressed mustard oil, never re-used or blended with cheap palm oils.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="p-7 rounded-2xl bg-white border border-slate-100 shadow-xs space-y-3 h-full">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-bold text-base text-slate-900">Hand-Ground Spices</h3>
              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                Whole cardamom from Idukki, cinnamon from Kerala, and coriander from Rajasthan roasted in-house and ground weekly for peak vibrancy.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <div className="p-7 rounded-2xl bg-white border border-slate-100 shadow-xs space-y-3 h-full">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-bold text-base text-slate-900">Clay Tandoor & Earthen Pots</h3>
              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                Slow-dum cooked biryani handis, charred naan flatbreads, and earthen chai cups that bring rich traditional depth to every dish.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. GUEST REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#FF5722] bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
              Guest Impressions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Loved by Our Community
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
              <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-xs flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <div className="flex items-center text-amber-400">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} size={13} className="fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic font-normal">
                    "{test.comment}"
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-2.5">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">{test.name}</h4>
                    <p className="text-[10px] text-slate-400 font-normal">{test.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 7. RESERVATION STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0A111F] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-lg">
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
                className="px-5 py-2.5 bg-[#FF5722] hover:bg-orange-600 text-white font-bold rounded-xl text-xs transition shadow-sm active:scale-95"
              >
                Book a Table
              </Link>
              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white/10 hover:bg-white/15 text-white font-medium rounded-xl text-xs border border-white/15 transition flex items-center gap-1.5 active:scale-95"
              >
                <MessageCircle size={14} className="text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
