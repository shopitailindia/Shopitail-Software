import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, TrendingDown, Zap, IndianRupee } from 'lucide-react';

export function EnhancedCalculator() {
  const [seats, setSeats] = useState(4);
  const [pcCost, setPcCost] = useState(35000);

  const traditionalSetupCost = seats * pcCost;
  const traditionalPowerCost = seats * 300 * 8 * 30 * 8 / 1000; // 300W per PC, 8hrs/day, 30days, ₹8/unit
  
  const asterSetupCost = Math.ceil(seats / 4) * 50000 + (seats - Math.ceil(seats / 4)) * 3000;
  const asterPowerCost = Math.ceil(seats / 4) * 300 * 8 * 30 * 8 / 1000;
  
  const setupSavings = traditionalSetupCost - asterSetupCost;
  const monthlyPowerSavings = traditionalPowerCost - asterPowerCost;
  const yearlyPowerSavings = monthlyPowerSavings * 12;
  const totalYearlySavings = setupSavings + yearlyPowerSavings;

  return (
    <section id="calculator" className="py-16 md:py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm mb-4">
            Savings Calculator
          </span>
          <h2 className="text-neutral-900 mb-4">
            Calculate Your Exact Savings in 30 Seconds
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Customize the calculator based on your specific needs and see real numbers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-orange-200"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Input Controls */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Calculator className="text-white" size={24} />
                </div>
                <h3 className="text-neutral-900">Your Setup Details</h3>
              </div>

              <div className="space-y-6">
                {/* Number of Seats */}
                <div>
                  <label className="block text-neutral-700 mb-2">
                    How many workstations do you need?
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="2"
                      max="20"
                      value={seats}
                      onChange={(e) => setSeats(Number(e.target.value))}
                      className="w-full h-3 bg-blue-200 rounded-full appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="flex justify-between mt-2 text-sm text-neutral-600">
                      <span>2</span>
                      <span>20</span>
                    </div>
                  </div>
                  <motion.div
                    key={seats}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    className="mt-3 text-center"
                  >
                    <span className="text-5xl text-blue-600">{seats}</span>
                    <span className="text-xl text-neutral-600 ml-2">seats</span>
                  </motion.div>
                </div>

                {/* PC Cost */}
                <div>
                  <label className="block text-neutral-700 mb-2">
                    Cost per traditional PC setup?
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">
                      <IndianRupee size={20} />
                    </span>
                    <input
                      type="number"
                      value={pcCost}
                      onChange={(e) => setPcCost(Number(e.target.value))}
                      className="w-full pl-12 pr-4 py-3 border-2 border-neutral-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                      step="1000"
                    />
                  </div>
                  <p className="text-sm text-neutral-500 mt-2">
                    Average: ₹35,000 (CPU + Monitor + Accessories)
                  </p>
                </div>
              </div>

              {/* Visual Comparison */}
              <div className="mt-6 bg-white rounded-xl p-5 border border-neutral-200">
                <p className="text-sm text-neutral-600 mb-3">You'll need:</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-700">Traditional Setup:</span>
                    <span className="text-red-600">{seats} full PCs</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-700">ASTER Setup:</span>
                    <span className="text-green-600">{Math.ceil(seats / 4)} powerful PC{Math.ceil(seats / 4) > 1 ? 's' : ''}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Results */}
            <div className="bg-gradient-to-br from-orange-50 to-white p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                  <TrendingDown className="text-white" size={24} />
                </div>
                <h3 className="text-neutral-900">Your Savings</h3>
              </div>

              <div className="space-y-5">
                {/* Hardware Savings */}
                <motion.div
                  key={setupSavings}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-5 border-2 border-green-200"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <IndianRupee className="text-green-600" size={16} />
                    </div>
                    <p className="text-sm text-neutral-600">Hardware Cost Savings</p>
                  </div>
                  <p className="text-3xl text-green-600 mb-2">
                    ₹{setupSavings.toLocaleString('en-IN')}
                  </p>
                  <p className="text-xs text-neutral-500">One-time savings on hardware</p>
                </motion.div>

                {/* Power Savings */}
                <motion.div
                  key={monthlyPowerSavings}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="bg-white rounded-2xl p-5 border-2 border-yellow-200"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Zap className="text-yellow-600" size={16} />
                    </div>
                    <p className="text-sm text-neutral-600">Monthly Electricity Savings</p>
                  </div>
                  <p className="text-3xl text-yellow-600 mb-2">
                    ₹{Math.round(monthlyPowerSavings).toLocaleString('en-IN')}
                  </p>
                  <p className="text-xs text-neutral-500">
                    ₹{Math.round(yearlyPowerSavings).toLocaleString('en-IN')}/year in electricity
                  </p>
                </motion.div>

                {/* Total First Year Savings */}
                <motion.div
                  key={totalYearlySavings}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="bg-gradient-to-br from-blue-600 to-orange-600 rounded-2xl p-6 text-white"
                >
                  <p className="text-sm mb-2 text-white/80">Total First Year Savings</p>
                  <p className="text-4xl mb-3">
                    ₹{Math.round(totalYearlySavings).toLocaleString('en-IN')}
                  </p>
                  <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-2 backdrop-blur-sm">
                    <p className="text-sm">
                      That's {Math.round((setupSavings / traditionalSetupCost) * 100)}% cost reduction!
                    </p>
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors shadow-lg"
                >
                  Get Your Custom Quote Now
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 grid md:grid-cols-3 gap-5"
        >
          {[
            { icon: '🎯', text: 'ROI in 6-8 months' },
            { icon: '♻️', text: 'Eco-friendly solution' },
            { icon: '📈', text: 'Scale anytime' }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-5 text-center shadow-md">
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-neutral-700">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}