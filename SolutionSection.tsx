import { Lightbulb, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function SolutionSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm mb-4"
            whileHover={{ scale: 1.05 }}
          >
            The Game-Changing Solution
          </motion.span>
          <h2 className="text-neutral-900 mb-4">
            Introducing ASTER: The Smart Way to Multiply Your Computing Power
          </h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            What if you could turn ONE powerful computer into 12 independent workstations? 
            No extra CPUs. No extra motherboards. No complexity.
          </p>
        </motion.div>

        {/* Main Concept Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-8 md:p-10 mb-12 border-2 border-blue-200 shadow-xl"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* ONE CPU */}
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-blue-600 w-28 h-28 md:w-32 md:h-32 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-2xl cursor-pointer"
              >
                <div className="text-white">
                  <div className="text-4xl mb-2">🖥️</div>
                  <p className="text-sm">1 CPU</p>
                </div>
              </motion.div>
              <h4 className="text-neutral-900 mb-2">One Powerful Computer</h4>
              <p className="text-neutral-700">Your existing PC or a new one</p>
            </div>

            {/* ARROW */}
            <div className="text-center">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-5xl md:text-6xl text-orange-500"
              >
                →
              </motion.div>
              <p className="text-sm text-neutral-700 mt-2">ASTER Magic</p>
            </div>

            {/* MULTIPLE USERS */}
            <div className="text-center">
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.05, type: 'spring' }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="bg-orange-500 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center shadow-lg cursor-pointer"
                  >
                    <span className="text-white text-xs">👤</span>
                  </motion.div>
                ))}
              </div>
              <h4 className="text-neutral-900 mb-2">2-12 Workstations</h4>
              <p className="text-neutral-700">Each user works independently</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 text-center bg-white rounded-xl p-5 shadow-lg"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Lightbulb className="text-orange-500" size={24} />
              <h4 className="text-neutral-900">The Secret? Advanced Software Architecture</h4>
            </div>
            <p className="text-neutral-700 leading-relaxed">
              ASTER intelligently divides your computer's resources among multiple users. Each person gets their own desktop, 
              files, and applications—completely isolated and secure.
            </p>
          </motion.div>
        </motion.div>

        {/* How It Solves Each Problem */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              problem: 'Hardware Costs Too High',
              solution: 'Buy ONE Powerful PC Instead of 10',
              savings: 'Just add monitors, keyboards, and mice. Save ₹40,000+ per workstation.',
              color: 'blue'
            },
            {
              problem: 'Electricity Bills Crushing You',
              solution: 'Run 1 CPU Instead of 10',
              savings: '75% less power consumption = ₹12,000+ monthly savings',
              color: 'green'
            },
            {
              problem: 'Maintenance is a Nightmare',
              solution: 'Manage 1 Computer Instead of 10',
              savings: 'One update, one backup, one antivirus. Simple.',
              color: 'purple'
            },
            {
              problem: 'Cannot Scale Your Business',
              solution: 'Add Users Without New CPUs',
              savings: 'Expand from 2 to 12 users anytime—just plug in.',
              color: 'orange'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)' }}
              className="bg-gradient-to-br from-white to-neutral-50 rounded-xl p-5 border-2 border-neutral-200 hover:border-orange-300 transition-all cursor-pointer"
            >
              <motion.div 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="flex-shrink-0 w-7 h-7 bg-red-100 rounded-full flex items-center justify-center text-red-600 mt-1 text-sm">
                  ✗
                </div>
                <div className="flex-1">
                  <p className="text-sm text-red-600 line-through mb-2">{item.problem}</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-3 mt-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="text-green-600" size={22} />
                </div>
                <div className="flex-1">
                  <h4 className="text-neutral-900 mb-2">{item.solution}</h4>
                  <p className="text-neutral-700 leading-relaxed">{item.savings}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}