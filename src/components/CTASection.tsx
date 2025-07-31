import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Mail, Phone, Calendar, Zap } from 'lucide-react';

const CTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-br from-[#0f52ba] via-[#007fff] to-[#73c2fb] text-white overflow-hidden" id="cta">
      <div className="container mx-auto px-6 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-lg blur-md rotate-45"></div>
        </div>

        <div className="relative z-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Ready to Transform
              <span className="block text-yellow-300">Your Team?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join 500+ leading companies that have accelerated their digital transformation 
              with our expert-led training programs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Action Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group w-full bg-white text-[#0f52ba] p-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <Calendar className="w-8 h-8" />
                    <div className="text-left">
                      <div>Schedule Free Consultation</div>
                      <div className="text-sm font-medium text-gray-600">
                        30-minute strategy session
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group w-full bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white p-6 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <Mail className="w-8 h-8" />
                    <div className="text-left">
                      <div>Get Custom Training Quote</div>
                      <div className="text-sm font-medium text-white/80">
                        Tailored to your needs
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 p-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <Phone className="w-8 h-8" />
                    <div className="text-left">
                      <div>Call Our Experts Now</div>
                      <div className="text-sm font-medium text-gray-700">
                        1-800-TECHFORWARD
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </div>

              {/* Contact Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-lg mb-4">Quick Connect</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4" />
                    <span>1-800-TECHFORWARD (832-4367)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4" />
                    <span>enterprise@techforward.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4" />
                    <span>Available Mon-Fri, 8AM-8PM EST</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Value Proposition */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">What You Get</h3>
                
                <div className="space-y-4">
                  {[
                    'Comprehensive skills assessment and gap analysis',
                    'Custom curriculum designed for your technology stack',
                    'Industry-certified expert instructors',
                    'Hands-on labs with real-world projects',
                    'Post-training support and mentorship',
                    'Measurable ROI tracking and reporting'
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                      <span className="text-white/90">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Guarantee */}
              <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/30">
                <h4 className="font-bold text-yellow-300 mb-2">Our Guarantee</h4>
                <p className="text-white/90 text-sm">
                  100% satisfaction guaranteed or your money back. We're so confident 
                  in our training quality that we offer a full refund if you're not 
                  completely satisfied within the first week.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: '95%', label: 'Satisfaction' },
                  { value: '300%', label: 'Avg ROI' },
                  { value: '30 Days', label: 'Implementation' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                  >
                    <div className="text-2xl font-bold text-yellow-300">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16 pt-12 border-t border-white/20"
          >
            <p className="text-lg text-white/90 mb-4">
              Join the ranks of Fortune 500 companies who trust TechForward
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['Microsoft', 'Google', 'Amazon', 'IBM', 'Oracle', 'Salesforce'].map((company, index) => (
                <span key={index} className="text-white/70 font-medium">
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;