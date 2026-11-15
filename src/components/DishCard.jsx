import React, { useState } from 'react';
import { Flame, Star, Plus, Check, MessageSquareQuote } from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { useCart } from '../context/CartContext';

export default function DishCard({ dish }) {
  const { addToCart, cartItems } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const cartQuantity = cartItems.find((i) => i.id === dish.id)?.quantity || 0;

  const handleAdd = () => {
    addToCart(dish);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  const handleDirectWhatsApp = (e) => {
    e.stopPropagation();
    const text = businessConfig.whatsappMessages.dishOrder(dish.name, `₹${dish.price}`);
    const url = `https://wa.me/${businessConfig.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const fallbackImage = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80';

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100/80 flex flex-col h-full premium-shadow-hover">
      {/* Image Container with Smooth Scale */}
      <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-100">
        <img
          src={imgError ? fallbackImage : dish.image}
          alt={dish.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
          loading="lazy"
          decoding="async"
        />

        {/* Ambient Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-black/20" />

        {/* Veg / Non-Veg Indicator Badge */}
        <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg shadow-sm border border-slate-100">
          <span
            className={`w-3.5 h-3.5 border flex items-center justify-center rounded-xs ${
              dish.isVeg ? 'border-emerald-600' : 'border-rose-600'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                dish.isVeg ? 'bg-emerald-600' : 'bg-rose-600'
              }`}
            ></span>
          </span>
          <span className="text-[10px] font-black tracking-widest uppercase text-slate-700">
            {dish.isVeg ? 'VEG' : 'NON-VEG'}
          </span>
        </div>

        {/* Feature Badges */}
        <div className="absolute top-3.5 right-3.5 z-10 flex flex-col gap-1 items-end">
          {dish.isBestseller && (
            <span className="bg-[#FF5722] text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md backdrop-blur-sm">
              Bestseller
            </span>
          )}
          {dish.isChefSpecial && !dish.isBestseller && (
            <span className="bg-amber-400 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md backdrop-blur-sm">
              Chef Special
            </span>
          )}
          {dish.isRecommended && !dish.isBestseller && !dish.isChefSpecial && (
            <span className="bg-blue-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md backdrop-blur-sm">
              Recommended
            </span>
          )}
        </div>

        {/* Rating and Prep Time pill */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <div className="flex items-center gap-1 bg-black/55 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            <Star size={12} className="fill-amber-400 text-amber-400" />
            <span className="font-bold text-white">{dish.rating}</span>
            <span className="text-white/70 text-[11px]">({dish.reviewsCount})</span>
          </div>

          <span className="bg-black/55 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-white/90 border border-white/10">
            ⏳ {dish.prepTime}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
        <div>
          {/* Title and Spice Level */}
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#FF5722] transition-colors leading-snug">
              {dish.name}
            </h3>
            {dish.spiceLevel > 0 && (
              <div
                className="flex items-center text-rose-500 shrink-0 pt-0.5"
                title={`Spice Level: ${dish.spiceLevel} of 3`}
              >
                {Array.from({ length: dish.spiceLevel }).map((_, i) => (
                  <Flame key={i} size={14} className="fill-rose-500 text-rose-500 -ml-0.5" />
                ))}
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-slate-500 text-xs sm:text-sm line-clamp-2 leading-relaxed font-normal">
            {dish.description}
          </p>
        </div>

        {/* Pricing & Order Actions */}
        <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] text-slate-400 block font-semibold uppercase tracking-wider">Price</span>
            <div className="flex items-baseline gap-0.5">
              <span className="text-xs font-bold text-[#FF5722]">₹</span>
              <span className="text-xl font-black text-slate-900">{dish.price}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick WhatsApp Link */}
            <button
              onClick={handleDirectWhatsApp}
              type="button"
              className="p-2.5 text-emerald-700 bg-emerald-50/80 hover:bg-emerald-100 rounded-xl transition-all border border-emerald-200/80 active:scale-95"
              title="Order on WhatsApp"
              aria-label={`Order ${dish.name} on WhatsApp`}
            >
              <MessageSquareQuote size={17} />
            </button>

            {/* Add to Cart Drawer Button */}
            <button
              onClick={handleAdd}
              type="button"
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 active:scale-95 shadow-sm ${
                justAdded
                  ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                  : 'bg-slate-900 hover:bg-[#FF5722] text-white shadow-slate-900/10 hover:shadow-orange-500/25'
              }`}
            >
              {justAdded ? (
                <>
                  <Check size={16} /> Added
                </>
              ) : (
                <>
                  <Plus size={16} />
                  <span>{cartQuantity > 0 ? `Add (${cartQuantity})` : 'Add'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
