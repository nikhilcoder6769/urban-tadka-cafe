import React, { useEffect, useRef, useState } from 'react';

// High-performance shared IntersectionObserver singleton
let sharedObserver = null;
const callbacks = new Map();

function getSharedObserver() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return null;
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cb = callbacks.get(entry.target);
            if (cb) {
              cb();
              callbacks.delete(entry.target);
              sharedObserver.unobserve(entry.target);
            }
          }
        });
      },
      {
        rootMargin: '0px 0px -20px 0px',
        threshold: 0.05,
      }
    );
  }
  return sharedObserver;
}

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = getSharedObserver();
    if (!observer) {
      setIsVisible(true);
      return;
    }

    callbacks.set(node, () => setIsVisible(true));
    observer.observe(node);

    return () => {
      callbacks.delete(node);
      observer.unobserve(node);
    };
  }, []);

  const animationClass = {
    'fade-up': '',
    'fade-in': 'fade-in',
    'scale-up': 'scale-up',
    'fade-left': 'fade-left',
    'fade-right': 'fade-right',
  }[animation] || '';

  const delayStyle = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={elementRef}
      style={delayStyle}
      className={`reveal-init ${animationClass} ${
        isVisible ? 'reveal-active' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
