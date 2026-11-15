# Urban Tadka Café — Modern Indian Café & Casual Dining

> **Business Saathi Demonstration Project**  
> Representing the **₹700/month Business Subscription Plan** offered by Business Saathi.

---

## 🌶️ Brand Overview

- **Business Name**: Urban Tadka Café
- **Tagline**: *"Good Food. Great Vibes."*
- **Industry**: Modern Indian Café & Casual Dining
- **Location**: Galleria Boulevard, Sector 4, HSR Layout, Bengaluru, Karnataka
- **Target Audience**: Students, young professionals, families, and friend groups
- **Brand Palette**:
  - **Deep Navy** (`#0F1E36` / `#0A1424`): Bold, grounding, premium casual feel
  - **Vibrant Orange** (`#FF5722`): Energetic, warm, spicy tadka excitement
  - **Warm Cream** (`#FFFDF7`): Inviting café coziness
  - **Subtle Charcoal** (`#1E293B`): Crisp contemporary typography
  - **Golden Amber** (`#F59E0B`): Warm accent lighting & star ratings

---

## 🌐 6-Page Website Architecture

1. **Page 1: Home (`/`)**
   - High-impact photographic hero section with live rating and opening badge.
   - Catchy headline: *"Where Desi Tadka Meets Modern Café Vibes"*.
   - Quick amenity perks: Free 100Mbps Wi-Fi, 15% Student Discount, Artisan Kulhad Chai.
   - Restaurant highlights & ghee-tempered culinary story.
   - Popular dishes grid with direct WhatsApp ordering.
   - Featured offers & combo boxes with instant WhatsApp redemption.
   - Verified customer testimonials (students, techies, vloggers, families).
   - Event and table booking call-to-action strip.

2. **Page 2: Menu (`/menu`)**
   - 24 signature dishes across 6 categories (Chaats, Baos & Burgers, Mains & Biryani Bowls, Loaded Fries & Naanizzas, Artisan Chai & Coolers, Desserts).
   - Real-time search bar (by dish name or ingredients).
   - Dietary toggles: All / Pure Veg / Non-Veg.
   - Sorting options: Popularity, Rating, Price Low-to-High, Price High-to-Low.
   - Veg / Non-Veg indicators, spice level meters (1-3 chilies), and badges (Chef Special, Bestseller).
   - Interactive Order Basket Drawer: tallies selected items and sends an itemized order directly to WhatsApp!

3. **Page 3: About Us (`/about`)**
   - The origin story: From college kitchen cravings to Bengaluru's favorite modern Indian café.
   - Brand philosophy: The science and art of the slow-tempered *Ghee Tadka*.
   - Commitment to farm-fresh, unadulterated ingredients (zero artificial food coloring or fake additives).
   - The dining experience: Co-working hubs, 25+ board games, acoustic unplugged sessions, and pet-friendly terrace.

4. **Page 4: Gallery (`/gallery`)**
   - Responsive photo showcase featuring food, drinks, cozy interiors, and celebration moments.
   - Filter tabs: All, Food & Street Bites, Café Interiors, Chai & Coolers, Hangouts & Moments.
   - Fullscreen Lightbox Modal with zoom, image counter, next/previous controls, and keyboard navigation (`←`, `→`, `Esc`).

5. **Page 5: Contact & Enquiries (`/contact`)**
   - Direct contact buttons: Click-to-call, WhatsApp chat, email, and address.
   - Interactive table reservation & event enquiry form with real-time field validation.
   - Instant submission feedback with booking reference ID.
   - LocalStorage persistence demonstrating recent submissions.
   - 1-click option to forward the completed enquiry directly to WhatsApp.
   - Embedded Google Maps with responsive frame.
   - Detailed developer guide on connecting Formspree, EmailJS, or custom APIs.

6. **Page 6: Location (`/location`)**
   - Dedicated location & logistics hub.
   - Full address, landmarks (Opposite Cyber Heights, Next to City Bookstore).
   - One-tap "Get Driving Directions" linking to Google Maps navigation.
   - Public transit breakdown (Silk Board / HSR Metro Station Gate 3).
   - Free 2-wheeler parking & Valet 4-wheeler parking information.
   - Real-time dynamic "Open Now / Closed" status indicator.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite 6
- **Routing**: React Router 7 (`BrowserRouter`)
- **Styling**: Tailwind CSS v4 + Modern Modular Design
- **Icons**: Lucide React
- **Fonts**: Outfit (display) & Plus Jakarta Sans (body)
- **State Management**: React Context (`CartContext` with localStorage sync)

---

## ⚙️ Centralized Business Configuration

All restaurant operational details, contact numbers, hours, and map coordinates are located in a single editable file:

```
src/data/businessConfig.js
```

To customize for another restaurant, update:
- `businessConfig.name`: Restaurant Name
- `businessConfig.contact.phone`: Calling number
- `businessConfig.contact.whatsapp`: WhatsApp phone number for instant messages
- `businessConfig.location.fullAddress`: Street address
- `businessConfig.location.mapsEmbedUrl`: Google Maps embed iframe URL
- `businessConfig.hours`: Operating schedule

---

## 🚀 Running the Project

### Development Server
```bash
pnpm run dev
```

### Production Build
```bash
pnpm run build
```

### Preview Production Build
```bash
pnpm run preview
```
