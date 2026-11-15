import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

export default function LightboxModal({
  isOpen,
  onClose,
  items,
  currentIndex,
  onPrev,
  onNext,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !items || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
        aria-label="Close image viewer"
      >
        <X size={22} />
      </button>

      {/* Navigation - Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all active:scale-95"
        aria-label="Previous photo"
      >
        <ChevronLeft size={26} />
      </button>

      {/* Navigation - Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all active:scale-95"
        aria-label="Next photo"
      >
        <ChevronRight size={26} />
      </button>

      {/* Modal Box */}
      <div
        className="relative z-10 max-w-4xl w-full max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Preview Container */}
        <div className="relative flex-1 min-h-[300px] sm:min-h-[460px] max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-full object-contain max-h-[70vh] select-none"
          />

          {/* Counter pill */}
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/10">
            {currentIndex + 1} / {items.length}
          </div>
        </div>

        {/* Caption & Category Footer */}
        <div className="p-4 sm:p-5 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider uppercase bg-[#FF5722]/20 text-[#FF5722] px-2.5 py-0.5 rounded-full border border-[#FF5722]/30">
                <Tag size={10} /> {currentItem.category}
              </span>
              <h3 className="font-bold text-base sm:text-lg text-white">
                {currentItem.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              {currentItem.caption}
            </p>
          </div>

          <div className="text-xs text-slate-500 whitespace-nowrap self-end sm:self-center">
            Use <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-[11px]">←</kbd>{' '}
            <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-[11px]">→</kbd> to browse
          </div>
        </div>
      </div>
    </div>
  );
}
