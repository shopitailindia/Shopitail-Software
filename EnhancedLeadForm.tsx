import { Send, Phone, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function EnhancedLeadForm() {
  return (
    <section
      id="contact"
      className="py-16 md:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-4">Get Your Free Demo & Quote</h2>
          <p className="text-blue-100">
            Our team will contact you within 2 hours
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          {/* LEFT */}
          <div className="md:col-span-2 space-y-4">
            <a href="tel:+919876543210" className="flex gap-3 bg-white/10 p-4 rounded-xl">
              <Phone /> +91 98765 43210
            </a>
            <a href="https://wa.me/919876543210" className="flex gap-3 bg-white/10 p-4 rounded-xl">
              <MessageCircle /> WhatsApp
            </a>
            <a href="mailto:info@asterindia.com" className="flex gap-3 bg-white/10 p-4 rounded-xl">
              <Mail /> info@asterindia.com
            </a>
          </div>

          {/* RIGHT – FORM */}
          <div className="md:col-span-3 bg-white text-black rounded-2xl p-6">

            {/* 🚨 NETLIFY FORM (NO JS HANDLER) */}
            <form
              name="aster-leads"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/success"
            >
              {/* REQUIRED */}
              <input type="hidden" name="form-name" value="aster-leads" />

              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              <input name="name" required placeholder="Full Name" className="input" />
              <input name="phone" required placeholder="Phone" className="input mt-3" />
              <input name="email" type="email" placeholder="Email" className="input mt-3" />

              <select name="orgType" required className="input mt-3">
                <option value="">Organization Type</option>
                <option>School</option>
                <option>Office</option>
                <option>Cafe</option>
                <option>BPO</option>
                <option>Other</option>
              </select>

              <select name="seats" required className="input mt-3">
                <option value="">Seats Needed</option>
                <option>2-4</option>
                <option>5-8</option>
                <option>9-12</option>
                <option>12+</option>
              </select>

              <textarea
                name="message"
                className="input mt-3"
                rows={3}
                placeholder="Message (optional)"
              />

              <button
                type="submit"
                className="w-full mt-6 bg-orange-500 text-white py-4 rounded-xl flex justify-center gap-2"
              >
                <Send /> Submit
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
