import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is ASTER difficult to install and set up?',
      answer: 'Not at all! ASTER is designed for easy installation. Our step-by-step guide and video tutorials make it simple even for non-technical users. Plus, we offer free installation support over phone/video call. Most setups are complete in under 2 hours.'
    },
    {
      question: 'Will all applications work with ASTER?',
      answer: 'Yes! ASTER supports all Windows applications including MS Office, browsers, educational software, accounting tools, and even graphics applications. Each user gets their own independent Windows session with full functionality.'
    },
    {
      question: 'What if one user\'s work affects others?',
      answer: 'ASTER provides complete isolation between users. Each workplace is independent—if one crashes or has issues, others continue working normally. You can also set different permissions and restrictions for each user.'
    },
    {
      question: 'Can I play videos and use graphics software?',
      answer: 'Absolutely! Unlike thin clients, ASTER utilizes your PC\'s full GPU power. All users can watch HD videos, use Photoshop, AutoCAD, and other graphics-intensive applications without lag.'
    },
    {
      question: 'What happens if the main PC crashes?',
      answer: 'If the host PC has issues, all workstations will be affected. That\'s why we recommend quality hardware. However, you can set up multiple host PCs (e.g., 2 PCs for 8 users) for redundancy in critical environments.'
    },
    {
      question: 'Is this legal? Are there any licensing issues?',
      answer: 'Yes, ASTER is completely legal. However, you need proper Windows licenses for commercial use. We provide guidance on licensing compliance during setup. Many businesses save so much on hardware that licensing costs are easily covered.'
    },
    {
      question: 'Can I try before buying?',
      answer: 'Yes! We offer a fully functional free trial so you can test ASTER with your specific applications and workflow. If you\'re not satisfied within 30 days of purchase, we offer a full refund—no questions asked.'
    },
    {
      question: 'How much does ASTER cost?',
      answer: 'Pricing depends on the number of workplaces you need (2-12 per license). Contact us for a custom quote. Remember, you\'re saving ₹40,000+ per additional workstation, so ASTER typically pays for itself within 6-8 months.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm mb-4">
            Common Questions
          </span>
          <h2 className="text-neutral-900 mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-xl text-neutral-600">
            Still have questions? Call us at +91 98765 43210
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-neutral-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
              >
                <h4 className="text-neutral-900 pr-8">{faq.question}</h4>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="text-orange-600" size={24} />
                  ) : (
                    <Plus className="text-neutral-400" size={24} />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 pt-2">
                      <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl p-8 text-white"
        >
          <h4 className="text-white mb-2">Still Have Questions?</h4>
          <p className="text-blue-100 mb-5">
            Our expert team is ready to help you make the right decision
          </p>
          <motion.button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Talk to an Expert
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}