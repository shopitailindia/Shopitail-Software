import { Send, Phone, Mail, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export function EnhancedLeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    orgType: '',
    seats: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', orgType: '', seats: '', message: '' });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-orange-500 bg-opacity-20 border border-orange-400 rounded-full text-sm mb-4">
            Ready to Transform Your Setup?
          </span>
          <h2 className="text-white mb-4">
            Get Your Free Demo & Custom Quote
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our team will call you within 2 hours to understand your needs and show you exactly how ASTER works
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          {/* Left: Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-5"
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
              <h3 className="text-white mb-5">Prefer to Talk Directly?</h3>
              
              <div className="space-y-3">
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-3 p-3 bg-white bg-opacity-10 rounded-xl hover:bg-opacity-20 transition-all"
                >
                  <div className="w-11 h-11 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">Call Us Now</p>
                    <p className="text-lg">+91 98765 43210</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-3 p-3 bg-white bg-opacity-10 rounded-xl hover:bg-opacity-20 transition-all"
                >
                  <div className="w-11 h-11 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">WhatsApp Us</p>
                    <p className="text-lg">Chat Now</p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:info@asterindia.com"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-3 p-3 bg-white bg-opacity-10 rounded-xl hover:bg-opacity-20 transition-all"
                >
                  <div className="w-11 h-11 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">Email Us</p>
                    <p className="text-lg">info@asterindia.com</p>
                  </div>
                </motion.a>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-5 border border-white border-opacity-20">
              <h4 className="text-white mb-3">What Happens Next?</h4>
              <div className="space-y-2">
                {[
                  { step: '1', text: 'We call you within 2 hours' },
                  { step: '2', text: 'Understand your specific needs' },
                  { step: '3', text: 'Live demo of ASTER software' },
                  { step: '4', text: 'Custom quote + installation plan' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                      {item.step}
                    </div>
                    <p className="text-blue-100 text-sm">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  className="text-center py-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2, type: 'spring', bounce: 0.6 }}
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5"
                  >
                    <Send className="text-green-600" size={32} />
                  </motion.div>
                  <h3 className="text-neutral-900 mb-2">Thank You! 🎉</h3>
                  <p className="text-neutral-600 mb-3">
                    Your request has been received. Our team will contact you within the next 2 hours.
                  </p>
                  <p className="text-sm text-neutral-500">
                    Check your phone for our call!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-neutral-900 mb-5">Request Your Free Demo</h3>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
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
                        className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-neutral-900"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
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
                        className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-neutral-900"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-neutral-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-neutral-900"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="orgType" className="block text-sm text-neutral-700 mb-2">
                        Organization Type *
                      </label>
                      <select
                        id="orgType"
                        name="orgType"
                        value={formData.orgType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-neutral-900"
                      >
                        <option value="">Select type</option>
                        <option value="school">School / Educational Institute</option>
                        <option value="office">Office / Business</option>
                        <option value="cafe">Cyber Cafe / Gaming Center</option>
                        <option value="bpo">Call Center / BPO</option>
                        <option value="training">Training Institute</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="seats" className="block text-sm text-neutral-700 mb-2">
                        Seats Needed *
                      </label>
                      <select
                        id="seats"
                        name="seats"
                        value={formData.seats}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-neutral-900"
                      >
                        <option value="">Select seats</option>
                        <option value="2-4">2-4 Seats</option>
                        <option value="5-8">5-8 Seats</option>
                        <option value="9-12">9-12 Seats</option>
                        <option value="12-20">12-20 Seats</option>
                        <option value="20+">More than 20 Seats</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-neutral-700 mb-2">
                      Additional Details (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-neutral-900 resize-none"
                      placeholder="Tell us about your specific requirements..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-xl flex items-center justify-center gap-3 text-lg"
                  >
                    <Send size={22} />
                    Get My Free Demo & Quote
                  </motion.button>

                  <p className="text-xs text-neutral-500 text-center">
                    🔒 We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}