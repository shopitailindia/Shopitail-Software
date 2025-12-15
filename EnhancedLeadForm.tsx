import { Send, Phone, Mail, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            Our team will call you within 2 hours to show ASTER live
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          {/* LEFT */}
          <div className="md:col-span-2 space-y-5">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
              <h3 className="text-white mb-5">Prefer to Talk Directly?</h3>

              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 p-3 bg-white bg-opacity-10 rounded-xl mb-3"
              >
                <div className="w-11 h-11 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-blue-100">Call Us</p>
                  <p className="text-lg">+91 98765 43210</p>
                </div>
              </a>

              <a
                href="https://wa.me/919876543210"
                className="flex items-center gap-3 p-3 bg-white bg-opacity-10 rounded-xl mb-3"
              >
                <div className="w-11 h-11 bg-green-500 rounded-xl flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-sm text-blue-100">WhatsApp</p>
                  <p className="text-lg">Chat Now</p>
                </div>
              </a>

              <a
                href="mailto:info@asterindia.com"
                className="flex items-center gap-3 p-3 bg-white bg-opacity-10 rounded-xl"
              >
                <div className="w-11 h-11 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-blue-100">Email</p>
                  <p className="text-lg">info@asterindia.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT – NETLIFY FORM */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-neutral-900">

              {/* 🔥 NETLIFY FORM */}
              <form
                name="aster-leads"
                method="POST"
                data-netlify="true"
                action="/thank-you"
                netlify-honeypot="bot-field"
              >
                {/* REQUIRED */}
                <input type="hidden" name="form-name" value="aster-leads" />

                {/* HONEYPOT */}
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <h3 className="mb-5 text-xl font-semibold">
                  Request Your Free Demo
                </h3>

                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    name="name"
                    required
                    placeholder="Full Name *"
                    className="input"
                  />
                  <input
                    name="phone"
                    required
                    placeholder="Phone Number *"
                    className="input"
                  />
                </div>

                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="input mt-4"
                />

                <div className="grid md:grid-cols-2 gap-5 mt-4">
                  <select name="orgType" required className="input">
                    <option value="">Organization Type *</option>
                    <option>School</option>
                    <option>Office</option>
                    <option>Cyber Cafe</option>
                    <option>BPO</option>
                    <option>Training Institute</option>
                    <option>Other</option>
                  </select>

                  <select name="seats" required className="input">
                    <option value="">Seats Needed *</option>
                    <option>2–4</option>
                    <option>5–8</option>
                    <option>9–12</option>
                    <option>12+</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  rows={3}
                  className="input mt-4"
                  placeholder="Additional requirements (optional)"
                />

                <button
                  type="submit"
                  className="w-full mt-6 px-8 py-4 bg-orange-500 text-white rounded-xl flex items-center justify-center gap-3 text-lg"
                >
                  <Send size={22} />
                  Get My Free Demo & Quote
                </button>

                <p className="text-xs text-center text-neutral-500 mt-3">
                  🔒 Your information is safe & never shared
                </p>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
