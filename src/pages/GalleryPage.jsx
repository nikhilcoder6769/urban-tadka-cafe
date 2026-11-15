import React, { useState } from 'react';
import { Sparkles, ZoomIn, Eye, Instagram } from 'lucide-react';
import { galleryCategories, galleryItems } from '../data/galleryData';
import { businessConfig } from '../data/businessConfig';
import LightboxModal from '../components/LightboxModal';
import PageMeta from '../components/PageMeta';
import ScrollReveal from '../components/ScrollReveal';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter items
  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="pb-24 space-y-12">
      <PageMeta
        title="Photo Gallery & Vibe | Urban Tadka Café"
        description="Take a visual tour of Urban Tadka Café. Browse mouth-watering food shots, our cozy lounge interiors, artisan kulhad chai, and memorable community events."
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-br from-[#0A111F] via-[#0F1E36] to-[#0A111F] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5722]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 relative z-10">
          <ScrollReveal animation="fade-in" delay={100}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold text-amber-300 border border-white/10">
              <Sparkles size={13} /> Visual Showcase
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              The Tadka Experience in Frames
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal">
              From sizzling clay handis and steaming kulhad chai to sun-dappled booth corners. Click any photo to view in high resolution.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Tabs with Scroll Animation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 active:scale-95 ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80 shadow-2xs'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Gallery Grid with Staggered Scroll Reveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <ScrollReveal
              key={item.id}
              animation="fade-up"
              delay={Math.min(350, (index % 8) * 50)}
            >
              <div
                onClick={() => openLightbox(index)}
                className="group relative cursor-pointer bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-72 sm:h-80 border border-slate-100/50"
              >
                {/* Photo */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/20 opacity-70 group-hover:opacity-90 transition-opacity" />

                {/* Zoom pill top right */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <ZoomIn size={16} />
                </div>

                {/* Tag pill top left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-black/55 backdrop-blur-md text-white px-2.5 py-1 rounded-full border border-white/10">
                    {item.category}
                  </span>
                </div>

                {/* Caption Bottom */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-bold text-base text-white group-hover:text-[#FF5722] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed opacity-90 font-normal">
                    {item.caption}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye size={12} /> Tap to view full size
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Instagram Banner with Scroll Reveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="scale-up" delay={150}>
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 text-center space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center mx-auto shadow-md">
              <Instagram size={24} />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 text-xl">Tag Us on Instagram!</h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto font-normal">
                Share your reels and photos with <span className="font-bold text-slate-800">#UrbanTadkaCafé</span> and tag <span className="font-bold text-[#FF5722]">@urbantadkacafe</span> for a chance to win a free Kulhad Chai combo every week.
              </p>
            </div>
            <a
              href={businessConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-[#FF5722] text-white font-bold text-xs rounded-xl shadow-md transition active:scale-95"
            >
              <span>Follow @urbantadkacafe</span>
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={filteredItems}
        currentIndex={currentIndex}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
