// Centralized Business Configuration for Urban Tadka Café
// This file centralizes all business information, contact details, coordinates, and branding.
// Anyone can easily update this file to re-brand or update the restaurant's operational information.

export const businessConfig = {
  name: "Urban Tadka Café",
  legalName: "Urban Tadka Hospitality Private Limited",
  tagline: "Good Food. Great Vibes.",
  subTagline: "Modern Indian Café & Casual Dining",
  establishedYear: 2021,

  // Plan Details (Business Saathi Subscription)
  subscription: {
    planName: "Business Plan",
    price: "₹700/month",
    provider: "Business Saathi",
    providerUrl: "https://businesssaathi.com",
  },

  // Contact Details
  contact: {
    phone: "+91 98765 43210",
    phoneRaw: "+919876543210",
    altPhone: "+91 98765 43211",
    whatsapp: "919876543210",
    whatsappDisplay: "+91 98765 43210",
    email: "hello@urbantadkacafe.in",
    reservationsEmail: "bookings@urbantadkacafe.in",
  },

  // Location & Address
  location: {
    addressLine1: "Shop 12–14, Ground Floor, Galleria Boulevard",
    addressLine2: "Opposite Cyber Heights, Near Metro Station Gate 3",
    area: "Sector 4, HSR Layout",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560102",
    country: "India",
    fullAddress: "Shop 12-14, Ground Floor, Galleria Boulevard, Sector 4, HSR Layout, Bengaluru, Karnataka 560102",
    shortAddress: "Galleria Boulevard, HSR Layout, Bengaluru",
    landmarks: "Opposite Cyber Heights, Next to City Bookstore",
    nearestMetro: "Silk Board / HSR Metro Station (Gate 3 - 3 mins walk)",
    parkingInfo: "Dedicated free 2-wheeler parking & Valet 4-wheeler parking available at Galleria Boulevard basement.",
    coordinates: {
      lat: 12.9121,
      lng: 77.6446,
    },
    // Configurable Google Maps Embed URL
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8953573857597!2d77.64202357592476!3d12.914441587395646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae149a463e264f%3A0xb35a3d4f1a6697b8!2sHSR%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    // Configurable Google Maps Directions Link
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=12.914441,77.6446",
  },

  // Operating Hours
  hours: [
    { days: "Monday – Thursday", time: "11:00 AM – 11:00 PM", notes: "Full Menu & Chai Bar" },
    { days: "Friday", time: "11:00 AM – 11:30 PM", notes: "Acoustic Evenings" },
    { days: "Saturday – Sunday", time: "10:30 AM – 11:45 PM", notes: "Weekend Brunch & Late Night" },
  ],
  openHoursConfig: {
    weekdayOpen: 11, // 11 AM
    weekdayClose: 23, // 11 PM
    weekendOpen: 10.5, // 10:30 AM
    weekendClose: 23.75, // 11:45 PM
  },

  // Social Links
  social: {
    instagram: "https://instagram.com/urbantadkacafe",
    facebook: "https://facebook.com/urbantadkacafe",
    youtube: "https://youtube.com/@urbantadkacafe",
    zomato: "https://zomato.com/bangalore/urban-tadka-cafe",
    swiggy: "https://swiggy.com/restaurants/urban-tadka-cafe-hsr-layout",
  },

  // Currency & Branding
  currency: {
    symbol: "₹",
    code: "INR",
  },

  // Ratings & Social Proof
  ratings: {
    googleScore: "4.8",
    googleReviewsCount: "1,420+",
    zomatoScore: "4.7",
    zomatoReviewsCount: "980+",
  },

  // Quick WhatsApp Message Helpers
  whatsappMessages: {
    general: "Hi Urban Tadka Café! I have an enquiry about visiting your café.",
    tableBooking: (name, date, time, guests) => 
      `Hi Urban Tadka Café! I'd like to reserve a table for ${guests} guests on ${date} at ${time}. My name is ${name}. Is there availability?`,
    dishOrder: (dishName, price) => 
      `Hi Urban Tadka! I would like to order "${dishName}" (${price}). Please let me know the preparation time and if delivery/pickup is ready.`,
    claimOffer: (offerCode, offerTitle) =>
      `Hi Urban Tadka! I'd like to claim the "${offerTitle}" offer (Code: ${offerCode}). How do I redeem this?`,
    cartOrder: (itemsText, total) =>
      `Hi Urban Tadka Café! I'd like to place an order from your website menu:\n\n${itemsText}\n*Estimated Total: ₹${total}*\n\nPlease confirm availability and payment options!`,
  },
};
