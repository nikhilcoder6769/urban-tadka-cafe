import React from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '', showLabel = false }) {
  const { theme, cycleTheme, resolvedTheme } = useTheme();

  const getIcon = () => {
    if (theme === 'system') return <Laptop size={17} className="text-[#FF5722]" />;
    if (resolvedTheme === 'dark') return <Moon size={17} className="text-amber-300" />;
    return <Sun size={17} className="text-amber-500" />;
  };

  const getLabel = () => {
    if (theme === 'system') return 'System';
    if (theme === 'dark') return 'Dark';
    return 'Light';
  };

  return (
    <button
      onClick={cycleTheme}
      type="button"
      className={`relative inline-flex items-center gap-1.5 p-2 rounded-xl border transition-all active:scale-95 ${
        resolvedTheme === 'dark'
          ? 'bg-slate-800/80 border-slate-700/80 text-slate-200 hover:bg-slate-700'
          : 'bg-slate-100/90 border-slate-200/80 text-slate-700 hover:bg-slate-200'
      } ${className}`}
      title={`Theme: ${getLabel()} (Click to toggle: System → Dark → Light)`}
      aria-label="Toggle display theme"
    >
      <span className="flex items-center justify-center">{getIcon()}</span>
      {showLabel && (
        <span className="text-xs font-bold uppercase tracking-wider">
          {getLabel()}
        </span>
      )}
    </button>
  );
}
