import React, { useState, useEffect } from 'react';
import { businessConfig } from '../data/businessConfig';

export default function OpenStatusBadge({ className = '' }) {
  const [isOpen, setIsOpen] = useState(true);
  const [closingTime, setClosingTime] = useState('11:00 PM');

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 is Sunday, 6 is Saturday
      const isWeekend = day === 0 || day === 6;
      const currentDecimalHour = now.getHours() + now.getMinutes() / 60;

      const openHour = isWeekend 
        ? businessConfig.openHoursConfig.weekendOpen 
        : businessConfig.openHoursConfig.weekdayOpen;

      const closeHour = isWeekend 
        ? businessConfig.openHoursConfig.weekendClose 
        : businessConfig.openHoursConfig.weekdayClose;

      const open = currentDecimalHour >= openHour && currentDecimalHour < closeHour;
      setIsOpen(open);
      setClosingTime(isWeekend ? '11:45 PM' : '11:00 PM');
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md transition-all ${
        isOpen
          ? 'bg-emerald-500/15 text-emerald-800 border border-emerald-400/30'
          : 'bg-rose-500/15 text-rose-800 border border-rose-400/30'
      } ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            isOpen ? 'bg-emerald-500' : 'bg-rose-500'
          }`}
        ></span>
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            isOpen ? 'bg-emerald-600' : 'bg-rose-600'
          }`}
        ></span>
      </span>
      <span>
        {isOpen ? (
          <>
            <strong className="font-bold">Open Now</strong> • Closes {closingTime}
          </>
        ) : (
          <>
            <strong className="font-bold">Closed Now</strong> • Opens 11:00 AM
          </>
        )}
      </span>
    </div>
  );
}
