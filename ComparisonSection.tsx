import { Check, X } from 'lucide-react';
import { motion } from 'motion/react';

export function ComparisonSection() {
  const comparisonData = [
    {
      feature: 'Hardware Cost per Seat',
      traditional: '₹35,000+',
      thinClient: '₹15,000+',
      aster: '₹3,000',
      asterWins: true
    },
    {
      feature: 'Extra Hardware Required',
      traditional: 'Full CPU + Components',
      thinClient: 'Thin Client Box',
      aster: 'None',
      asterWins: true
    },
    {
      feature: 'GPU Performance',
      traditional: 'Full',
      thinClient: 'Limited/None',
      aster: 'Full GPU Access',
      asterWins: true
    },
    {
      feature: 'Power Consumption',
      traditional: 'High (300W × 4)',
      thinClient: 'Medium',
      aster: 'Low (1 CPU only)',
      asterWins: true
    },
    {
      feature: 'Setup Complexity',
      traditional: 'Complex',
      thinClient: 'Moderate',
      aster: 'Simple',
      asterWins: true
    },
    {
      feature: 'HD Video Playback',
      traditional: true,
      thinClient: false,
      aster: true,
      asterWins: false
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[var(--color-neutral-900)] mb-4">Why ASTER Wins</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Compare ASTER with traditional solutions and see the difference
          </p>
        </motion.div>

        {/* Desktop Table View */}
        <motion.div 
          className="hidden lg:block overflow-x-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-neutral-100">
                <th className="px-6 py-3 text-left text-neutral-700">Feature</th>
                <th className="px-6 py-3 text-center text-neutral-700">Traditional PC</th>
                <th className="px-6 py-3 text-center text-neutral-700">NComputing/Thin Client</th>
                <th className="px-6 py-3 text-center bg-blue-50 text-[var(--color-trust-blue)]">
                  ASTER ⭐
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <motion.tr 
                  key={index} 
                  className="border-t border-neutral-200"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <td className="px-6 py-3 text-neutral-900">{row.feature}</td>
                  <td className="px-6 py-3 text-center text-neutral-600">
                    {typeof row.traditional === 'boolean' ? (
                      row.traditional ? <Check className="inline text-green-600" size={20} /> : <X className="inline text-red-600" size={20} />
                    ) : (
                      row.traditional
                    )}
                  </td>
                  <td className="px-6 py-3 text-center text-neutral-600">
                    {typeof row.thinClient === 'boolean' ? (
                      row.thinClient ? <Check className="inline text-green-600" size={20} /> : <X className="inline text-red-600" size={20} />
                    ) : (
                      row.thinClient
                    )}
                  </td>
                  <td className="px-6 py-3 text-center bg-blue-50 text-[var(--color-trust-blue)]">
                    {typeof row.aster === 'boolean' ? (
                      row.aster ? <Check className="inline text-green-600" size={20} /> : <X className="inline text-red-600" size={20} />
                    ) : (
                      row.aster
                    )}
                    {row.asterWins && (
                      <span className="ml-2 text-xs text-[var(--color-alert-orange)]">✓ Best</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-4">
          {comparisonData.map((row, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="text-[var(--color-neutral-900)] mb-3">{row.feature}</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600 text-sm">Traditional PC:</span>
                  <span className="text-neutral-900 text-sm">
                    {typeof row.traditional === 'boolean' ? (
                      row.traditional ? <Check className="text-green-600" size={20} /> : <X className="text-red-600" size={20} />
                    ) : (
                      row.traditional
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600 text-sm">Thin Client:</span>
                  <span className="text-neutral-900 text-sm">
                    {typeof row.thinClient === 'boolean' ? (
                      row.thinClient ? <Check className="text-green-600" size={20} /> : <X className="text-red-600" size={20} />
                    ) : (
                      row.thinClient
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-center bg-blue-50 -mx-5 px-5 py-2">
                  <span className="text-[var(--color-trust-blue)] text-sm">ASTER:</span>
                  <span className="text-[var(--color-trust-blue)] text-sm">
                    {typeof row.aster === 'boolean' ? (
                      row.aster ? <Check className="text-green-600" size={20} /> : <X className="text-red-600" size={20} />
                    ) : (
                      row.aster
                    )}
                    {row.asterWins && (
                      <span className="ml-2 text-xs text-[var(--color-alert-orange)]">✓ Best</span>
                    )}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}