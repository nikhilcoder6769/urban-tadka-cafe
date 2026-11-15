import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Send, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { businessConfig } from '../data/businessConfig';
import { Link } from 'react-router-dom';

export default function QuickOrderDrawer() {
  const {
    cartItems,
    isDrawerOpen,
    setIsDrawerOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
    sendOrderToWhatsApp,
  } = useCart();

  const [notes, setNotes] = useState('');

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsDrawerOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFDF9] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#FF5722] flex items-center justify-center">
                <ShoppingBag size={18} />
              </div>
              <div>
                <h2 className="font-bold text-slate-900 text-lg">Your Order Tray</h2>
                <p className="text-xs text-slate-500">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {cartItems.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-xs text-slate-400 hover:text-rose-600 transition p-1"
                  title="Clear all items"
                >
                  Clear
                </button>
              )}
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition"
                aria-label="Close tray"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-orange-50 text-orange-400 mx-auto flex items-center justify-center text-2xl">
                  🍽️
                </div>
                <h3 className="font-bold text-slate-800 text-base">Your tray is hungry!</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Browse our vibrant menu and add your favorite street bites, loaded fries, and artisan kulhad chais.
                </p>
                <Link
                  to="/menu"
                  onClick={() => setIsDrawerOpen(false)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF5722] text-white text-xs font-bold rounded-xl shadow-md hover:bg-orange-600 transition"
                >
                  Explore Menu <ArrowRight size={14} />
                </Link>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white p-3.5 rounded-2xl border border-slate-100 flex items-center gap-3 shadow-xs"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-xl object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span
                            className={`w-2.5 h-2.5 rounded-full ${
                              item.isVeg ? 'bg-emerald-600' : 'bg-rose-600'
                            }`}
                          />
                          <h4 className="font-semibold text-slate-800 text-sm truncate">
                            {item.name}
                          </h4>
                        </div>
                        <p className="text-xs font-bold text-slate-900">
                          ₹{item.price * item.quantity}
                          {item.quantity > 1 && (
                            <span className="text-[11px] font-normal text-slate-400 ml-1">
                              (₹{item.price} each)
                            </span>
                          )}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition shadow-2xs"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-bold text-slate-800 w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition shadow-2xs"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-300 hover:text-rose-500 transition p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Notes Input */}
                <div className="pt-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Special Cooking / Delivery Instructions
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="E.g., extra spicy, no onions, pack chutney separately..."
                    rows={2}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#FF5722] focus:ring-1 focus:ring-[#FF5722]"
                  />
                </div>
              </>
            )}
          </div>

          {/* Footer Checkout */}
          {cartItems.length > 0 && (
            <div className="p-5 bg-white border-t border-slate-100 space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-700">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>GST & Service</span>
                  <span className="text-emerald-600 font-medium">Included</span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-1.5 border-t border-slate-100">
                  <span>Estimated Total</span>
                  <span className="text-[#FF5722] text-base">₹{totalPrice}</span>
                </div>
              </div>

              {/* Send Order to WhatsApp Button */}
              <button
                onClick={() => sendOrderToWhatsApp(notes)}
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2.5 transition active:scale-98 text-sm"
              >
                <Send size={16} />
                Send Order to WhatsApp (₹{totalPrice})
              </button>

              <p className="text-[11px] text-center text-slate-400">
                ⚡ Connects directly to our café WhatsApp for instant confirmation & timing.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
