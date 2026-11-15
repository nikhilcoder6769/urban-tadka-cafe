import React from 'react';
import { Link } from 'react-router-dom';
import {
  Flame,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import PageMeta from '../components/PageMeta';
import ScrollReveal from '../components/ScrollReveal';

export default function AboutPage() {
  return (
    <div className="pb-24 space-y-20 sm:space-y-28">
      <PageMeta
        title="Our Story & Philosophy | Urban Tadka Café"
        description="Learn the story behind Urban Tadka Café in Bengaluru. Discover our passion for slow-tempered desi tadka, modern Indian street comfort, and an inclusive café culture."
      />

      {/* Hero Header with Ambient Glow */}
      <section className="bg-gradient-to-br from-[#0A111F] via-[#0F1E36] to-[#0A111F] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5722]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 relative z-10">
          <ScrollReveal animation="fade-in" delay={100}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold text-amber-300 border border-white/10">
              <Flame size={13} className="text-[#FF5722]" /> Born in Bengaluru, Loved Everywhere
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={180}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Our Story: The Art of the{' '}
              <span className="text-[#FF5722]">Perfect Tadka</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
              How a longing for street-style midnight snacks and campus café culture brought two culinary enthusiasts together to launch Urban Tadka Café.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Origin Story Section with Split Scroll Animation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <ScrollReveal animation="fade-left" delay={100}>
              <span className="text-xs font-black uppercase tracking-widest text-[#FF5722] bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-100">
                The Genesis (2021)
              </span>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                It all started in a tiny college kitchen with a sizzle of cumin seeds.
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={300}>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  In 2021, our founders were university students who were tired of two extremes: paying astronomical prices for bland European pasta in upscale cafés, or enduring unhygienic oily street food in crowded alleys.
                </p>
                <p>
                  They asked a simple question: <strong className="text-slate-900">Why can't India have its own proud café culture?</strong> A space where you can get a steaming clay pot of authentic ginger-cardamom chai, loaded butter chicken fries with flaky garlic naan, and high-speed Wi-Fi to sit with your laptop for hours without feeling rushed.
                </p>
                <p>
                  Urban Tadka Café was built on that very promise: soulful desi comfort food served in a contemporary, energetic, and design-forward space.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400}>
              <div className="pt-3 flex items-center gap-6 text-slate-800">
                <div>
                  <span className="text-3xl sm:text-4xl font-black text-[#FF5722]">4+</span>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">Years of Magic</p>
                </div>
                <div className="h-8 w-px bg-slate-200"></div>
                <div>
                  <span className="text-3xl sm:text-4xl font-black text-[#FF5722]">180K+</span>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">Happy Diners</p>
                </div>
                <div className="h-8 w-px bg-slate-200"></div>
                <div>
                  <span className="text-3xl sm:text-4xl font-black text-[#FF5722]">4.8★</span>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">Google Rating</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 relative">
            <ScrollReveal animation="fade-right" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=80"
                  alt="Chef preparing tadka"
                  className="rounded-3xl shadow-lg h-64 sm:h-72 w-full object-cover border border-slate-100"
                />
                <img
                  src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=700&q=80"
                  alt="Friends hanging out at Urban Tadka"
                  className="rounded-3xl shadow-lg h-64 sm:h-72 w-full object-cover mt-8 border border-slate-100"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Brand Philosophy Cards with Staggered Scroll Reveal */}
      <section className="bg-slate-50/70 py-16 sm:py-24 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#FF5722] bg-orange-100/70 px-3.5 py-1.5 rounded-full">
                Our Core Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
                The Soul of Every Dish: Tadka (तड़का)
              </h2>
              <p className="text-slate-600 text-sm font-normal">
                In Indian cooking, tempering spices in smoking-hot ghee releases volatile essential oils that transform good ingredients into an unforgettable experience.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm space-y-4 premium-shadow-hover h-full">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FF5722] flex items-center justify-center">
                  <Flame size={24} />
                </div>
                <h3 className="font-bold text-slate-900 text-xl">The Crackle of Spices</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Whole mustard seeds, cumin, hing (asafoetida), and fresh green chilies tempered at precise flash points to infuse maximum aromatic richness without bitterness.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm space-y-4 premium-shadow-hover h-full">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                  <Sparkles size={24} />
                </div>
                <h3 className="font-bold text-slate-900 text-xl">Pure Desi Ghee & Oils</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  No hydrogenated fats or palm oil shortcuts. We use pure A2 cow ghee, cold-pressed mustard oil, and dairy sourced daily from ethical regional farms.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm space-y-4 premium-shadow-hover h-full">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="font-bold text-slate-900 text-xl">100% Unadulterated</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  No synthetic food colorings in our gravies, zero artificial MSG, and vegetables sanitized through UV wash systems before hitting the pans.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Dining Space & Community Experience */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#FF5722] bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-100">
              The Vibe & Space
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              More than a Restaurant — A Neighborhood Living Room
            </h2>
            <p className="text-slate-600 text-sm font-normal">
              Designed for co-working mornings, lively afternoon lunches, and intimate late-night chai chats.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-xs premium-shadow-hover space-y-3 h-full">
              <span className="text-3xl">💻</span>
              <h4 className="font-bold text-slate-900 text-base">Work & Study Haven</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Equipped with high-speed 100 Mbps fiber Wi-Fi and universal charging docks beneath almost every table.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-xs premium-shadow-hover space-y-3 h-full">
              <span className="text-3xl">🎲</span>
              <h4 className="font-bold text-slate-900 text-base">Board Games & Chill</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Over 25 classic board games from Catan to Jenga for screen-free laughs with your favorite squad.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-xs premium-shadow-hover space-y-3 h-full">
              <span className="text-3xl">🎸</span>
              <h4 className="font-bold text-slate-900 text-base">Acoustic Fridays</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Gentle live acoustic indie guitar and Bollywood unplugged sets that elevate the dining vibe without being deafening.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={400}>
            <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-xs premium-shadow-hover space-y-3 h-full">
              <span className="text-3xl">🌿</span>
              <h4 className="font-bold text-slate-900 text-base">Pet-Friendly Patio</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Our breezy outdoor terrace welcomes your four-legged best friends with complimentary water bowls and dog treats!
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Box with Scroll Reveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="scale-up" delay={150}>
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0A1424] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-xl">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Come taste the difference for yourself.
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 font-normal">
                Visit our café at Galleria Boulevard, HSR Layout, Bengaluru or check our live menu.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/menu"
                className="px-6 py-3 bg-[#FF5722] hover:bg-orange-600 text-white font-bold rounded-xl text-xs sm:text-sm transition shadow-md active:scale-95"
              >
                Check Menu
              </Link>
              <Link
                to="/location"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs sm:text-sm transition border border-white/20 active:scale-95"
              >
                Get Directions
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
