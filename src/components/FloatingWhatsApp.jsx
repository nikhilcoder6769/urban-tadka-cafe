import React from 'react';
import { MessageCircle } from 'lucide-react';
import { businessConfig } from '../data/businessConfig';

export default function FloatingWhatsApp() {
  const defaultMessage = encodeURIComponent(
    `Hi Urban Tadka Café! I'm browsing your website and would like to reserve a table / place an inquiry.`
  );
  const whatsappUrl = `https://wa.me/${businessConfig.contact.whatsapp}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-5 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Urban Tadka Café on WhatsApp"
        className="flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg shadow-emerald-950/20 transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none border-2 border-white/20"
      >
        <MessageCircle size={24} className="fill-white" />
      </a>
    </div>
  );
}
