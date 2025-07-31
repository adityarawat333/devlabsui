import React from 'react';
import { motion } from 'framer-motion';

const ClientLogos: React.FC = () => {
  const clients = [
    'Microsoft', 'Google', 'Amazon', 'IBM', 'Oracle', 'Salesforce',
    'Adobe', 'VMware', 'Cisco', 'Intel', 'Dell', 'HP'
  ];

  // Duplicate logos for seamless looping
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-white" id="clients">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 uppercase tracking-widest mb-4"
          >
            Trusted by Industry Leaders Worldwide
          </motion.p>
          <h2 className="text-3xl font-bold text-gray-800">
            Our Esteemed Clients
          </h2>
        </div>

        <div className="overflow-hidden relative">
          <motion.div
            className="flex whitespace-nowrap gap-12"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: 'linear',
            }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                }}
                className="flex-shrink-0 px-6 py-4 bg-white rounded-lg border border-gray-200 shadow-sm flex items-center justify-center min-w-[160px] hover:border-blue-400 transition"
              >
                <span className="text-xl font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                  {client}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
