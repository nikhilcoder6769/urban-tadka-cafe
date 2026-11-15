import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  Flame,
  Star,
  ShoppingBag,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { menuCategories, menuItems } from '../data/menuData';
import { businessConfig } from '../data/businessConfig';
import { useCart } from '../context/CartContext';
import DishCard from '../components/DishCard';
import PageMeta from '../components/PageMeta';
import ScrollReveal from '../components/ScrollReveal';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [dietFilter, setDietFilter] = useState('all'); // 'all', 'veg', 'non-veg'
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular'); // 'popular', 'price-low', 'price-high', 'rating'
  const { totalItems, totalPrice, setIsDrawerOpen } = useCart();

  // Filtered and Sorted items
  const filteredDishes = useMemo(() => {
    return menuItems.filter((dish) => {
      // Category filter
      if (activeCategory !== 'all' && dish.category !== activeCategory) {
        return false;
      }

      // Dietary filter
      if (dietFilter === 'veg' && !dish.isVeg) return false;
      if (dietFilter === 'non-veg' && dish.isVeg) return false;

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = dish.name.toLowerCase().includes(query);
        const matchesDesc = dish.description.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      // Default: bestsellers & chef specials first
      return (b.isBestseller ? 2 : b.isChefSpecial ? 1 : 0) - (a.isBestseller ? 2 : a.isChefSpecial ? 1 : 0);
    });
  }, [activeCategory, dietFilter, searchQuery, sortBy]);

  return (
    <div className="pb-24 space-y-10">
      <PageMeta
        title="Digital Menu & Specials | Urban Tadka Café"
        description="Explore our full modern Indian café menu. From loaded butter chicken fries and tandoori baos to clay handi biryani bowls and earthen kulhad chai."
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-br from-[#0A111F] via-[#0F1E36] to-[#0A111F] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5722]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-3 sm:space-y-4">
          <ScrollReveal animation="fade-in" delay={100}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold text-amber-300 border border-white/10">
              <Sparkles size={13} /> Prepared Fresh to Order
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={180}>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Our Digital Menu
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={260}>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-normal leading-relaxed">
              Explore our fusion of slow-tempered Indian spices with modern street comfort food. Tap any dish to order on WhatsApp or add to your order tray.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter and Search Bar Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-sm border border-slate-100/90 space-y-5">
            {/* Top Row: Search & Diet Toggles */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Search Input */}
              <div className="relative w-full md:w-96">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search dishes (e.g. Biryani, Burger, Chai)..."
                  className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#FF5722] focus:bg-white transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-200/60 px-2 py-0.5 rounded-full"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Diet Filters & Sorting */}
              <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-between md:justify-end">
                {/* Diet segmented control */}
                <div className="inline-flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200/80 text-xs font-bold">
                  <button
                    onClick={() => setDietFilter('all')}
                    className={`px-3 py-1.5 rounded-xl transition ${
                      dietFilter === 'all'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    All ({menuItems.length})
                  </button>
                  <button
                    onClick={() => setDietFilter('veg')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition ${
                      dietFilter === 'veg'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-emerald-700 hover:bg-white/50'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-300"></span> Veg
                  </button>
                  <button
                    onClick={() => setDietFilter('non-veg')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition ${
                      dietFilter === 'non-veg'
                        ? 'bg-rose-600 text-white shadow-xs'
                        : 'text-rose-700 hover:bg-white/50'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-rose-300"></span> Non-Veg
                  </button>
                </div>

                {/* Sort By Dropdown */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#FF5722]"
                  >
                    <option value="popular">Sort: Most Popular</option>
                    <option value="rating">Sort: Highest Rated</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Category Tabs Scroll with smooth hover/active transitions */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-slate-100">
              {menuCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                const count = cat.id === 'all' 
                  ? menuItems.length 
                  : menuItems.filter((i) => i.category === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-300 shrink-0 flex items-center gap-2 active:scale-95 ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                        isActive ? 'bg-[#FF5722] text-white' : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Results Counter and Filter Summary */}
        <div className="flex items-center justify-between text-xs text-slate-500 px-2">
          <span>
            Showing <strong className="text-slate-900 font-bold">{filteredDishes.length}</strong> items
            {searchQuery && ` matching "${searchQuery}"`}
          </span>

          <span className="text-[11px] text-slate-400">
            💡 Tap "Order on WhatsApp" for instant ordering
          </span>
        </div>

        {/* Dishes Grid with Staggered Entrance */}
        {filteredDishes.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-3xl border border-slate-100 space-y-4">
            <div className="text-4xl">🔍</div>
            <h3 className="font-bold text-slate-800 text-lg">No dishes found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              We couldn't find any dishes matching your current filter. Try clearing the search or switching categories!
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setDietFilter('all');
              }}
              className="px-5 py-2.5 bg-[#FF5722] text-white font-bold text-xs rounded-xl shadow-md hover:bg-orange-600 transition"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDishes.map((dish, idx) => (
              <ScrollReveal
                key={dish.id}
                animation="fade-up"
                delay={Math.min(300, (idx % 6) * 60)}
              >
                <DishCard dish={dish} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </section>

      {/* Sticky Bottom Order Bar with Smooth Floating Glow */}
      {totalItems > 0 && (
        <div className="fixed bottom-20 left-4 right-4 max-w-md mx-auto z-30 animate-bounce duration-1000">
          <div
            onClick={() => setIsDrawerOpen(true)}
            className="cursor-pointer bg-slate-950 text-white p-3.5 rounded-2xl shadow-2xl border border-white/10 flex items-center justify-between hover:scale-102 transition-transform"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FF5722] text-white flex items-center justify-center font-bold text-sm shadow-md">
                {totalItems}
              </div>
              <div>
                <p className="text-xs font-bold leading-none">Order Tray Active</p>
                <p className="text-xs text-slate-400 mt-1">₹{totalPrice} estimated total</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-[#FF5722] bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10">
              <span>View Tray</span>
              <ArrowRight size={14} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
