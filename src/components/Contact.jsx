import React, { useState } from 'react';
import { User, Phone, MapPin, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import { motion } from 'framer-motion';

export const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const next = {};
    if (!formData.fullName.trim()) next.fullName = 'Please fill out this field.';
    if (!formData.email.trim()) next.email = 'Please fill out this field.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) next.email = 'Please enter a valid email address.';
    if (!formData.phone.trim()) next.phone = 'Please fill out this field.';
    if (!formData.message.trim()) next.message = 'Please fill out this field.';
    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      company: '',
      phone: '',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section className="pt-16 md:pt-20 pb-16 md:pb-20 bg-brand-cream border-t border-brand-creamDarker overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left: Contact Details Column */}
          <motion.div 
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <SectionHeading 
                eyebrow="GET IN TOUCH"
                title="Speak directly with our advisory&nbsp;team."
                subtitle="We respond promptly to all corporate and personal inquiries with direct, tailored&nbsp;counsel."
                className="mb-6"
              />

              <div className="space-y-3.5 text-xs text-stone-700">
                {/* Contact Person */}
                <div className="flex items-start space-x-3 p-3 bg-white border border-stone-200/70">
                  <User className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase text-stone-400 block font-semibold font-sans">
                      Managing Director
                    </span>
                    <span className="font-medium text-stone-800">
                      Nguyen Thi Thao Uyen
                    </span>
                  </div>
                </div>

                {/* Phone / Hotline */}
                <div className="flex items-start space-x-3 p-3 bg-white border border-stone-200/70">
                  <Phone className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase text-stone-400 block font-semibold font-sans">
                      Direct Hotline
                    </span>
                    <a href="tel:+84334095326" className="hover:text-brand-gold font-mono font-medium transition duration-200">
                      +84 33 409 5326
                    </a>
                  </div>
                </div>

                {/* Address Location */}
                <div className="flex items-start space-x-3 p-3 bg-white border border-stone-200/70">
                  <MapPin className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase text-stone-400 block font-semibold font-sans">
                      Office Address
                    </span>
                    <span>Le Van Tho, Go Vap, Ho Chi Minh City, Vietnam</span>
                  </div>
                </div>

                {/* Social Facebook */}
                <div className="flex items-start space-x-3 p-3 bg-white border border-stone-200/70">
                  <i className="fa-brands fa-facebook-f text-brand-gold mt-0.5 w-4 text-center shrink-0"></i>
                  <div>
                    <span className="text-[10px] uppercase text-stone-400 block font-semibold font-sans">
                      Social Network
                    </span>
                    <a 
                      href="https://www.facebook.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-brand-gold transition duration-200 truncate block text-brand-goldDark font-medium flex items-center space-x-1"
                    >
                      <span>Visit Facebook Page</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>

                {/* Google Maps link */}
                <div className="flex items-start space-x-3 p-3 bg-white border border-stone-200/70">
                  <i className="fa-solid fa-map-location-dot text-brand-gold mt-0.5 w-4 text-center shrink-0"></i>
                  <div>
                    <span className="text-[10px] uppercase text-stone-400 block font-semibold font-sans">
                      Google Maps Direction
                    </span>
                    <a 
                      href="https://maps.app.goo.gl/VLi6LK91YNqnUDEs6" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-brand-gold transition duration-200 truncate block text-brand-goldDark font-medium flex items-center space-x-1"
                    >
                      <span>Open Google Maps Location</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Inquiry Form Column */}
          <motion.div 
            className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-10 shadow-sm border border-stone-200/80 relative flex flex-col justify-between h-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} noValidate className="flex flex-col justify-between h-full space-y-5">
              <div className="space-y-4 flex-1 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-stone-600 uppercase mb-1 font-sans" htmlFor="fullName">
                      Full Name *
                    </label>
                    <input 
                      id="fullName"
                      name="fullName"
                      type="text" 
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Johnathan Smith"
                      className="w-full text-xs p-3.5 bg-stone-50 border border-stone-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition duration-200"
                    />
                    {errors.fullName && <p className="mt-1 text-[11px] text-red-600 font-sans">{errors.fullName}</p>}
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-stone-600 uppercase mb-1 font-sans" htmlFor="email">
                      Business Email *
                    </label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@enterprise.com"
                      className="w-full text-xs p-3.5 bg-stone-50 border border-stone-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition duration-200"
                    />
                    {errors.email && <p className="mt-1 text-[11px] text-red-600 font-sans">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-stone-600 uppercase mb-1 font-sans" htmlFor="company">
                      Company / Organization
                    </label>
                    <input 
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Global Holdings Ltd"
                      className="w-full text-xs p-3.5 bg-stone-50 border border-stone-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-stone-600 uppercase mb-1 font-sans" htmlFor="phone">
                      Phone / WhatsApp *
                    </label>
                    <input 
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +84 33 409 5326"
                      className="w-full text-xs p-3.5 bg-stone-50 border border-stone-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition duration-200"
                    />
                    {errors.phone && <p className="mt-1 text-[11px] text-red-600 font-sans">{errors.phone}</p>}
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <label className="block text-[11px] font-semibold tracking-wider text-stone-600 uppercase mb-1 font-sans" htmlFor="message">
                    What can we help you with? *
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your requirements, timeline, and scope..."
                    className="w-full flex-1 min-h-[130px] text-xs p-3.5 bg-stone-50 border border-stone-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition duration-200 resize-none"
                  />
                  {errors.message && <p className="mt-1 text-[11px] text-red-600 font-sans">{errors.message}</p>}
                </div>
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-brand-gold hover:bg-brand-goldLight text-brand-navyDark text-xs font-bold tracking-luxury uppercase transition duration-300 shadow hover:-translate-y-0.5 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                      <span>SENDING...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND INQUIRY</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Success notification overlay */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-white/98 backdrop-blur flex flex-col items-center justify-center text-center p-8 transition-all animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-goldDark text-2xl mb-4">
                  <CheckCircle className="w-8 h-8 text-brand-goldDark" />
                </div>
                <h4 className="font-luxury-serif text-2xl text-brand-charcoal font-bold mb-2">
                  Inquiry Received
                </h4>
                <p className="text-xs text-stone-600 max-w-sm mb-6 leading-relaxed font-light">
                  Thank you for reaching out to ALICE &amp; CO. Our executive advisory team will review your inquiry and get back to you shortly.
                </p>
                <button 
                  onClick={handleReset}
                  className="px-6 py-2.5 border border-brand-gold text-brand-charcoal text-xs font-semibold tracking-luxury uppercase hover:bg-brand-gold hover:text-brand-navyDark transition"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
