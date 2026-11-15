import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Code,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import PageMeta from '../components/PageMeta';
import ScrollReveal from '../components/ScrollReveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: 'Table Reservation',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [submissionHistory, setSubmissionHistory] = useState([]);
  const [showDevDocs, setShowDevDocs] = useState(false);

  // Load submissions from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('urban_tadka_enquiries');
      if (stored) {
        setSubmissionHistory(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name (at least 2 letters).';
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/\D/g, '').slice(-10);
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      errs.phone = 'Please provide a valid 10-digit Indian mobile number.';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (formData.enquiryType === 'Table Reservation' || formData.enquiryType === 'Party/Celebration') {
      if (!formData.date) {
        errs.date = 'Please pick a preferred date.';
      }
      if (!formData.time) {
        errs.time = 'Please select a preferred dining time slot.';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Realistic frontend demonstration
    setTimeout(() => {
      const newSubmission = {
        id: `UT-${Date.now().toString().slice(-6)}`,
        timestamp: new Date().toLocaleString(),
        ...formData,
      };

      const updatedHistory = [newSubmission, ...submissionHistory].slice(0, 5);
      setSubmissionHistory(updatedHistory);
      try {
        localStorage.setItem('urban_tadka_enquiries', JSON.stringify(updatedHistory));
      } catch (err) {
        console.error(err);
      }

      setSubmittedData(newSubmission);
      setIsSubmitting(false);

      // Reset form fields
      setFormData({
        name: '',
        phone: '',
        email: '',
        enquiryType: 'Table Reservation',
        date: '',
        time: '',
        guests: '2',
        message: '',
      });
      setErrors({});
    }, 900);
  };

  const handleWhatsAppForward = (submission) => {
    const text = `*NEW ENQUIRY (Ref: ${submission.id})*\n\nName: ${submission.name}\nPhone: ${submission.phone}\nType: ${submission.enquiryType}\nGuests: ${submission.guests}\nDate: ${submission.date || 'Flexible'}\nTime: ${submission.time || 'Flexible'}\nNotes: ${submission.message || 'None'}\n\nPlease confirm availability!`;
    const url = `https://wa.me/${businessConfig.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pb-24 space-y-16 sm:space-y-20">
      <PageMeta
        title="Contact & Enquiries | Urban Tadka Café"
        description="Book a table, plan an event, or connect with Urban Tadka Café. Call +91 98765 43210 or chat on WhatsApp. Located at Galleria Boulevard, HSR Layout, Bengaluru."
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-br from-[#0A111F] via-[#0F1E36] to-[#0A111F] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 relative z-10">
          <ScrollReveal animation="fade-in" delay={100}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold text-amber-300 border border-white/10">
              💬 Table Reservations & Inquiries
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={180}>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Contact & Inquiries
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal">
              Reserve your favorite corner booth, enquire about birthday celebrations, or order customized bulk catering for your campus society or team.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Direct Contact Grid with Staggered Scroll Reveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Phone */}
          <ScrollReveal animation="fade-up" delay={100}>
            <a
              href={`tel:${businessConfig.contact.phoneRaw}`}
              className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group block h-full hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF5722] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone size={22} />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Call Us Directly</h3>
              <p className="text-xs text-slate-500 mt-1 font-normal">Direct café hotline</p>
              <span className="font-bold text-sm text-[#FF5722] mt-2 block">
                {businessConfig.contact.phone}
              </span>
            </a>
          </ScrollReveal>

          {/* WhatsApp */}
          <ScrollReveal animation="fade-up" delay={180}>
            <a
              href={`https://wa.me/${businessConfig.contact.whatsapp}?text=${encodeURIComponent(
                businessConfig.whatsappMessages.general
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group block h-full hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle size={22} />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">WhatsApp Chat</h3>
              <p className="text-xs text-slate-500 mt-1 font-normal">Instant chats & menu queries</p>
              <span className="font-bold text-sm text-emerald-600 mt-2 block">
                +91 98765 43210
              </span>
            </a>
          </ScrollReveal>

          {/* Email */}
          <ScrollReveal animation="fade-up" delay={260}>
            <a
              href={`mailto:${businessConfig.contact.email}`}
              className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group block h-full hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail size={22} />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Email Inquiries</h3>
              <p className="text-xs text-slate-500 mt-1 font-normal">Corporate & bulk orders</p>
              <span className="font-bold text-xs sm:text-sm text-blue-600 mt-2 block truncate">
                {businessConfig.contact.email}
              </span>
            </a>
          </ScrollReveal>

          {/* Address */}
          <ScrollReveal animation="fade-up" delay={340}>
            <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <MapPin size={22} />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Café Location</h3>
              <p className="text-xs text-slate-500 mt-1 font-normal">HSR Layout, Bengaluru</p>
              <span className="text-xs text-slate-700 mt-2 block line-clamp-2 font-medium">
                Galleria Boulevard, Sector 4
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Split: Enquiry Form & Hours/Info with Scroll Reveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT: Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal animation="fade-left" delay={150}>
              <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-100/90 space-y-6">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#FF5722] bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-100">
                    Interactive Form
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                    Send an Enquiry or Table Booking
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                    Fill out the details below. Our reservation team will confirm your table and send you a confirmation.
                  </p>
                </div>

                {/* Success Feedback Card */}
                {submittedData && (
                  <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3 animate-fade-in">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
                      <h4 className="font-bold text-sm">
                        Enquiry Received Successfully! (Demo Reference #{submittedData.id})
                      </h4>
                    </div>
                    <p className="text-xs text-emerald-800 leading-relaxed font-normal">
                      Thank you, <strong className="font-bold">{submittedData.name}</strong>! We've registered your request for{' '}
                      <strong>{submittedData.enquiryType}</strong> ({submittedData.guests} guests) on{' '}
                      <strong>{submittedData.date || 'your chosen date'}</strong> at{' '}
                      <strong>{submittedData.time || 'your requested slot'}</strong>.
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => handleWhatsAppForward(submittedData)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition active:scale-95"
                      >
                        <MessageCircle size={15} /> Send Directly to WhatsApp Now
                      </button>
                      <button
                        onClick={() => setSubmittedData(null)}
                        className="text-xs text-emerald-700 hover:underline font-semibold"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  </div>
                )}

                {/* The Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full p-3 rounded-xl border text-xs sm:text-sm transition focus:outline-none focus:ring-1 ${
                          errors.name
                            ? 'border-rose-400 bg-rose-50/50 focus:ring-rose-400'
                            : 'border-slate-200 bg-slate-50 focus:border-[#FF5722] focus:ring-[#FF5722]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Mobile Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="10-digit mobile (e.g. 98765 43210)"
                        className={`w-full p-3 rounded-xl border text-xs sm:text-sm transition focus:outline-none focus:ring-1 ${
                          errors.phone
                            ? 'border-rose-400 bg-rose-50/50 focus:ring-rose-400'
                            : 'border-slate-200 bg-slate-50 focus:border-[#FF5722] focus:ring-[#FF5722]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Enquiry Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm focus:outline-none focus:border-[#FF5722]"
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Enquiry Type
                      </label>
                      <select
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:border-[#FF5722]"
                      >
                        <option value="Table Reservation">Table Reservation (Casual Dine-in)</option>
                        <option value="Party/Celebration">Birthday / Society Celebration</option>
                        <option value="Bulk Catering">Corporate / Bulk Catering</option>
                        <option value="Co-Working Desk">All-Day Co-Working Pass</option>
                        <option value="General Query">General Feedback / Query</option>
                      </select>
                    </div>
                  </div>

                  {/* Date, Time, Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className={`w-full p-3 rounded-xl border text-xs sm:text-sm ${
                          errors.date ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200 bg-slate-50'
                        }`}
                      />
                      {errors.date && (
                        <p className="text-[11px] text-rose-500 mt-1">{errors.date}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Time Slot
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className={`w-full p-3 rounded-xl border text-xs sm:text-sm ${
                          errors.time ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200 bg-slate-50'
                        }`}
                      >
                        <option value="">Select Slot</option>
                        <option value="12:00 PM - 01:30 PM">Lunch (12:00 PM – 1:30 PM)</option>
                        <option value="01:30 PM - 03:00 PM">Lunch (1:30 PM – 3:00 PM)</option>
                        <option value="04:00 PM - 06:00 PM">Evening Chai & Bites (4 PM – 6 PM)</option>
                        <option value="07:00 PM - 09:00 PM">Dinner (7:00 PM – 9:00 PM)</option>
                        <option value="09:00 PM - 11:00 PM">Late Night (9:00 PM – 11:00 PM)</option>
                      </select>
                      {errors.time && (
                        <p className="text-[11px] text-rose-500 mt-1">{errors.time}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Guests Count
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm"
                      >
                        <option value="1">1 Person (Solo / Co-Work)</option>
                        <option value="2">2 Guests (Couple / Friends)</option>
                        <option value="3-4">3 – 4 Guests (Small Group)</option>
                        <option value="5-8">5 – 8 Guests (Family / Gang)</option>
                        <option value="10+">10+ Guests (Party Booking)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Special Requests */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Special Notes or Dietary Requests
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="E.g., high chair needed, celebrating anniversary, quiet table for interview..."
                      className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm focus:outline-none focus:border-[#FF5722]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 bg-[#FF5722] hover:bg-orange-600 disabled:bg-slate-300 text-white font-bold rounded-2xl shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 transition active:scale-98 text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Submit Enquiry Demo</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    🔒 We protect your data and will never spam your phone.
                  </p>
                </form>

                {/* Developer Backend Integration Notice (Collapsible) */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setShowDevDocs(!showDevDocs)}
                    className="w-full flex items-center justify-between text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-50 p-3 rounded-xl"
                  >
                    <span className="flex items-center gap-2">
                      <Code size={15} className="text-[#FF5722]" />
                      <span>Developer Note: Connecting a Real Backend Service</span>
                    </span>
                    {showDevDocs ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>

                  {showDevDocs && (
                    <div className="mt-3 p-4 rounded-xl bg-slate-900 text-slate-300 text-xs space-y-2.5 font-mono">
                      <p className="text-amber-400 font-bold">
                        ℹ️ Current Status: Frontend Demonstration Mode
                      </p>
                      <p className="text-slate-300 font-sans text-xs">
                        This form demonstrates complete client-side validation, error handling, state management, and localStorage caching without mocking a fake remote server.
                      </p>
                      <p className="text-slate-300 font-sans text-xs font-semibold">
                        To connect a live submission backend for production:
                      </p>
                      <ol className="list-decimal list-inside space-y-1 text-slate-400 font-sans text-xs">
                        <li>
                          <strong>Option 1 (Formspree / Web3Forms):</strong> Replace `handleSubmit` with a simple fetch POST to your Formspree endpoint (`https://formspree.io/f/your_form_id`).
                        </li>
                        <li>
                          <strong>Option 2 (EmailJS):</strong> Integrate `@emailjs/browser` to receive instant table booking emails directly in your Gmail inbox.
                        </li>
                        <li>
                          <strong>Option 3 (Direct WhatsApp API):</strong> Use the WhatsApp button provided above to send prefilled reservation messages directly to the café manager's WhatsApp phone.
                        </li>
                      </ol>
                    </div>
                  )}
                </div>

                {/* Recent Submissions History (localStorage preview) */}
                {submissionHistory.length > 0 && (
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Recent Submissions (Stored in Browser LocalStorage)
                    </span>
                    <div className="space-y-2">
                      {submissionHistory.slice(0, 2).map((item) => (
                        <div
                          key={item.id}
                          className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs flex items-center justify-between"
                        >
                          <div>
                            <span className="font-bold text-slate-800">{item.name}</span>{' '}
                            <span className="text-slate-500">({item.enquiryType})</span>
                            <p className="text-[10px] text-slate-400">{item.timestamp}</p>
                          </div>
                          <button
                            onClick={() => handleWhatsAppForward(item)}
                            className="text-[11px] font-bold text-emerald-600 hover:underline flex items-center gap-1"
                          >
                            <MessageCircle size={12} /> WhatsApp
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: Hours, Map & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal animation="fade-right" delay={200}>
              {/* Opening Hours Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0F1E36] text-white space-y-5 shadow-lg border border-slate-800">
                <div className="flex items-center gap-2 text-amber-400">
                  <Clock size={20} />
                  <h3 className="font-black text-lg text-white">Opening & Service Hours</h3>
                </div>

                <div className="space-y-3.5 text-xs text-slate-300">
                  {businessConfig.hours.map((h, i) => (
                    <div key={i} className="pb-2.5 border-b border-white/10 last:border-0">
                      <p className="font-bold text-white text-sm">{h.days}</p>
                      <p className="text-amber-300 font-mono text-xs mt-0.5">{h.time}</p>
                      <span className="text-[11px] text-slate-400 font-normal">{h.notes}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-xs text-slate-300 bg-white/5 p-3 rounded-xl border border-white/10">
                  ✨ <strong>Walk-ins Welcome:</strong> We always preserve 30% of tables for spontaneous walk-in guests!
                </div>
              </div>
            </ScrollReveal>

            {/* Embedded Google Maps Box */}
            <ScrollReveal animation="fade-right" delay={300}>
              <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 space-y-3">
                <div className="flex items-center justify-between px-2">
                  <span className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <MapPin size={16} className="text-[#FF5722]" /> Live Map Location
                  </span>
                  <a
                    href={businessConfig.location.directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-[#FF5722] hover:underline"
                  >
                    Open in Maps →
                  </a>
                </div>

                {/* Map Iframe */}
                <div className="w-full h-64 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                  <iframe
                    title="Urban Tadka Café Google Maps Location"
                    src={businessConfig.location.mapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <p className="text-xs text-slate-500 px-2 leading-relaxed font-normal">
                  📍 {businessConfig.location.fullAddress}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
