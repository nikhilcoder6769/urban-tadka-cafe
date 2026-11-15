import { useEffect } from 'react';
import { businessConfig } from '../data/businessConfig';

export default function PageMeta({ title, description }) {
  useEffect(() => {
    const fullTitle = title 
      ? `${title} | ${businessConfig.name} — ${businessConfig.tagline}`
      : `${businessConfig.name} — ${businessConfig.tagline} | Modern Indian Dining`;
    
    document.title = fullTitle;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
}
