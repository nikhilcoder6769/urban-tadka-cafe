import React from 'react';
import {
  Navigation,
  Compass,
  Car,
  Train,
  Clock,
  Phone,
  MessageCircle,
  ExternalLink,
  Check,
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import OpenStatusBadge from '../components/OpenStatusBadge';
import PageMeta from '../components/PageMeta';
import ScrollReveal from '../components/ScrollReveal';

export default function LocationPage() {
  return (
    <div className="pb-24 space-y-16 sm:space-y-20">
      <PageMeta
        title="Find Us & Location Guide | Urban Tadka Café"
        description="Visit Urban Tadka Café at Galleria Boulevard, Sector 4, HSR Layout, Bengaluru. Directions, parking guide, nearest metro station, and Google Maps embed."
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-br from-[#0A111F] via-[#0F1E36] to-[#0A111F] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 relative z-10">
          <ScrollReveal animation="fade-in" delay={100}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold text-amber-300 border border-white/10">
              <Compass size={13} /> Prime HSR Layout Location
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={180}>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Visit Urban Tadka Café
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal">
              Conveniently situated on the buzzing Galleria Boulevard with ample parking, easy metro access, and high-energy café aesthetics.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={350}>
            <div className="pt-2">
              <OpenStatusBadge />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive Map & Core Address Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="scale-up" delay={100}>
          <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-sm border border-slate-100/90 space-y-6">
            {/* Top Address & One-Tap Directions Action */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="space-y-1">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#FF5722]">
                  Official Address
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  {businessConfig.location.fullAddress}
                </h2>
                <p className="text-xs text-slate-500 font-normal">
                  Landmark: {businessConfig.location.landmarks}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={businessConfig.location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#FF5722] hover:bg-orange-600 text-white font-bold rounded-2xl shadow-lg shadow-orange-500/20 text-xs sm:text-sm flex items-center gap-2 transition hover:scale-102 active:scale-98"
                >
                  <Navigation size={16} />
                  <span>Get Driving Directions</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Embedded Google Maps Container */}
            <div className="w-full h-80 sm:h-[480px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 relative shadow-inner">
              <iframe
                title="Urban Tadka Café Google Maps Location Embed"
                src={businessConfig.location.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Access & Logistics Details: Transit, Parking, Delivery with Staggered Scroll Reveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Metro & Public Transit */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-sm space-y-4 premium-shadow-hover h-full">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Train size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">By Metro & Bus</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {businessConfig.location.nearestMetro}. Frequent direct feeder buses connect from Silk Board, Koramangala, and Bellandur tech parks.
              </p>
              <div className="text-xs font-semibold text-blue-600 flex items-center gap-1.5 pt-1">
                <Check size={14} /> 3-minute walking distance
              </div>
            </div>
          </ScrollReveal>

          {/* Parking Logistics */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-sm space-y-4 premium-shadow-hover h-full">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Car size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Parking & Valet</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {businessConfig.location.parkingInfo}
              </p>
              <div className="text-xs font-semibold text-amber-600 flex items-center gap-1.5 pt-1">
                <Check size={14} /> Free 2-wheeler spots & Valet
              </div>
            </div>
          </ScrollReveal>

          {/* Online Delivery Partners */}
          <ScrollReveal animation="fade-up" delay={300}>
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-sm space-y-4 premium-shadow-hover h-full">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Compass size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Delivery Coverage</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                We deliver fresh hot orders within an 8 km radius across HSR Layout, Koramangala, BTM Layout, and Bellandur via Swiggy, Zomato, and direct WhatsApp takeaway.
              </p>
              <div className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5 pt-1">
                <Check size={14} /> Hot insulated packaging
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hours & Contact Strip with Scroll Reveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Operating Hours Box */}
          <ScrollReveal animation="fade-left" delay={150}>
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0F1E36] text-white space-y-4 shadow-lg border border-slate-800 h-full">
              <div className="flex items-center gap-2 text-amber-400">
                <Clock size={20} />
                <h3 className="font-black text-lg text-white">Café Operating Hours</h3>
              </div>
              <div className="space-y-3 text-xs text-slate-300">
                {businessConfig.hours.map((h, i) => (
                  <div key={i} className="pb-2 border-b border-white/10 last:border-0 flex justify-between items-center">
                    <span className="font-semibold text-white">{h.days}</span>
                    <span className="font-mono text-amber-300 font-bold">{h.time}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 pt-2 font-normal">
                Kitchen closes 30 minutes prior to café closing. Chai and desserts served until late night.
              </p>
            </div>
          </ScrollReveal>

          {/* Quick Connect Box */}
          <ScrollReveal animation="fade-right" delay={250}>
            <div className="p-6 sm:p-8 rounded-3xl bg-orange-50/80 border border-orange-200/80 space-y-4 flex flex-col justify-between h-full">
              <div className="space-y-2">
                <span className="text-xs font-black text-[#FF5722] uppercase tracking-wider">
                  Immediate Assistance
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  Need Help Locating Us?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Call our front desk for landmark guidance, table bookings, or takeaway pickups.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href={`tel:${businessConfig.contact.phoneRaw}`}
                  className="flex-1 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition active:scale-95"
                >
                  <Phone size={15} />
                  <span>Call {businessConfig.contact.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${businessConfig.contact.whatsapp}?text=${encodeURIComponent(
                    'Hi Urban Tadka! I am on my way to your café and need help with directions.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition active:scale-95"
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp Directions</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
