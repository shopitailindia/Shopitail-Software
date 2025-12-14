import { Send } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function LeadGenForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    orgType: '',
    seats: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', orgType: '', seats: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[var(--color-neutral-900)] mb-4">Get a Quote for Your Setup</h2>
            <p className="text-neutral-600">
              Fill out the form below and our team will get back to you within 24 hours with a custom quote
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-xl p-8 md:p-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div 
                className="text-center py-12"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring", bounce: 0.6 }}
                >
                  <Send className="text-green-600" size={32} />
                </motion.div>
                <h3 className="text-[var(--color-neutral-900)] mb-2">Thank You!</h3>
                <p className="text-neutral-600">
                  We've received your request. Our team will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <label htmlFor="name" className="block text-sm text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-trust-blue)] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <label htmlFor="phone" className="block text-sm text-neutral-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-trust-blue)] focus:border-transparent"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <label htmlFor="orgType" className="block text-sm text-neutral-700 mb-2">
                    Organization Type *
                  </label>
                  <select
                    id="orgType"
                    name="orgType"
                    value={formData.orgType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-trust-blue)] focus:border-transparent"
                  >
                    <option value="">Select organization type</option>
                    <option value="school">School / Educational Institute</option>
                    <option value="office">Office / Business</option>
                    <option value="cafe">Cyber Cafe / CSC</option>
                    <option value="bpo">Call Center / BPO</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <label htmlFor="seats" className="block text-sm text-neutral-700 mb-2">
                    Number of Seats Needed *
                  </label>
                  <select
                    id="seats"
                    name="seats"
                    value={formData.seats}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-trust-blue)] focus:border-transparent"
                  >
                    <option value="">Select number of seats</option>
                    <option value="2-4">2-4 Seats</option>
                    <option value="5-8">5-8 Seats</option>
                    <option value="9-12">9-12 Seats</option>
                    <option value="12+">More than 12 Seats</option>
                  </select>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-[var(--color-alert-orange)] text-white rounded-lg hover:bg-[var(--color-alert-orange-dark)] transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  Get Pricing Now
                </motion.button>

                <p className="text-xs text-neutral-500 text-center">
                  By submitting this form, you agree to be contacted by ASTER India regarding your inquiry.
                </p>
              </form>
            )}
          </motion.div>

          {/* Additional Contact Info */}
          <motion.div 
            className="mt-8 grid md:grid-cols-3 gap-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {['Email', 'Phone', 'WhatsApp'].map((type, index) => (
              <motion.div 
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -3, shadow: "lg" }}
              >
                <p className="text-sm text-neutral-600">{type}</p>
                <p className="text-[var(--color-trust-blue)]">
                  {type === 'Email' ? 'info@asterindia.com' : 
                   type === 'Phone' ? '+91 XXXXX XXXXX' : 'Chat Now'}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}