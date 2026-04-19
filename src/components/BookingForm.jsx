import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Loader2, MessageCircle } from 'lucide-react';

const BookingForm = ({ isOpen, onClose, initialService = '' }) => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: initialService || 'Bridal Makeup',
    message: ''
  });

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const services = [
    'Bridal Makeup',
    'Bridal Makeup (Venue Change)',
    'Engagement Makeup',
    'Pre-Wedding Shoot',
    'Party Makeup HD',
    'Party Makeup Basic'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Build WhatsApp Message
    const whatsappMsg = `Hey Guneet! I'd like to book an appointment.
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Date: ${formData.date}
Time: ${formData.time}
Service: ${formData.service}
Notes: ${formData.message || 'None'}`;

    const whatsappUrl = `https://wa.me/919896813111?text=${encodeURIComponent(whatsappMsg)}`;

    try {
      // Still send to Formspree as a backup record
      const response = await fetch('https://formspree.io/guneetvig07@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // Show success and redirect
      setStatus('success');
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1500);
      
    } catch (error) {
      // Even if email fails, we can still redirect to WhatsApp
      setStatus('success');
      window.open(whatsappUrl, '_blank');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative w-full max-w-xl bg-white shadow-2xl overflow-hidden rounded-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-primary p-6 text-center relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-white/60 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
          <h3 className="font-heading text-2xl text-secondary">Reserve Your Date</h3>
          <p className="text-white/60 text-xs uppercase tracking-widest mt-1">Guneet Vig Makeup Studio</p>
        </div>

        <div className="p-8 max-h-[85vh] overflow-y-auto custom-scrollbar">
          {status === 'success' ? (
            <div className="py-12 text-center">
              <CheckCircle className="mx-auto text-secondary mb-4" size={48} />
              <h4 className="font-heading text-2xl mb-2">Details Saved!</h4>
              <p className="text-warm-gray text-sm mb-6">
                Redirecting you to WhatsApp to finalize your booking...
              </p>
              <Loader2 className="animate-spin mx-auto text-secondary" size={24} />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-warm-gray font-medium">Full Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-b border-gray-200 py-2 focus:border-secondary outline-none transition-colors text-sm font-body"
                    placeholder="e.g. Anjali Sharma"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-warm-gray font-medium">Email Address</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b border-gray-200 py-2 focus:border-secondary outline-none transition-colors text-sm font-body"
                    placeholder="anjali@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-warm-gray font-medium">Phone</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-b border-gray-200 py-2 focus:border-secondary outline-none transition-colors text-sm font-body"
                    placeholder="+91 XXXX..."
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-warm-gray font-medium">Date</label>
                  <input
                    required
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full border-b border-gray-200 py-2 focus:border-secondary outline-none transition-colors text-sm font-body"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-warm-gray font-medium">Time</label>
                  <input
                    required
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full border-b border-gray-200 py-2 focus:border-secondary outline-none transition-colors text-sm font-body"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-warm-gray font-medium">Select Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border-b border-gray-200 py-2 focus:border-secondary outline-none transition-colors text-sm font-body bg-white cursor-pointer"
                >
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-warm-gray font-medium">Additional Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="2"
                  className="w-full border-b border-gray-200 py-2 focus:border-secondary outline-none transition-colors text-sm font-body resize-none"
                  placeholder="Tell us about your event..."
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="flex flex-col gap-1 text-red-500 text-xs bg-red-50 p-3">
                  <div className="flex items-center gap-2">
                    <AlertCircle size={14} />
                    <span className="font-semibold">Technical Note</span>
                  </div>
                  <p className="mt-1">While we couldn't log the backup email, you can still proceed to WhatsApp.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-luxury btn-luxury-gold w-full mt-4 flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Preparing WhatsApp...
                  </>
                ) : (
                  <>
                    <MessageCircle size={18} />
                    Confirm & Open WhatsApp
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BookingForm;
