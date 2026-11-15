import React from 'react';
import { Link } from 'react-router-dom';
import { Home, UtensilsCrossed } from 'lucide-react';
import PageMeta from '../components/PageMeta';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 text-center">
      <PageMeta title="Page Not Found | Urban Tadka Café" />
      <div className="max-w-md space-y-6">
        <div className="text-6xl font-black text-[#FF5722]">404</div>
        <div className="w-16 h-16 bg-orange-100 text-[#FF5722] rounded-3xl flex items-center justify-center text-3xl mx-auto">
          🌶️
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-black text-slate-900">Oops! Table Not Found</h1>
          <p className="text-slate-500 text-xs sm:text-sm">
            It looks like this page wandered off looking for extra butter chicken and kulhad chai. Let's get you back to the feast!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold rounded-xl shadow-md flex items-center justify-center gap-2 transition"
          >
            <Home size={15} /> Back to Home
          </Link>
          <Link
            to="/menu"
            className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-md flex items-center justify-center gap-2 transition"
          >
            <UtensilsCrossed size={15} /> Explore Menu
          </Link>
        </div>
      </div>
    </div>
  );
}
