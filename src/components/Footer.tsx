import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Useful Links',
      links: [
        'Link One',
        'Link Two',
        'Link Three',
        'Link Four',
        'Link Five'
      ]
    },
    {
      title: 'Services',
      links: [
        'Link Six',
        'Link Seven',
        'Link Eight',
        'Link Nine',
        'Link Ten'
      ]
    },
    {
      title: 'Company Info',
      links: [
        'Link Eleven',
        'Link Twelve',
        'Link Thirteen',
        'Link Fourteen',
        'Link Fifteen'
      ]
    },
    {
      title: 'Connect with Us',
      links: [
        'Facebook',
        'Instagram',
        'LinkedIn',
        'Twitter',
        'YouTube'
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { icon: Youtube, href: '#', color: 'hover:text-red-600' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3"
            >
              <span className="text-3xl font-bold text-white">
                Devlabs
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 leading-relaxed"
            >
              Devlabs is responsible for the most advanced on Webflow and 
              Framer. We help businesses grow with our comprehensive IT training solutions.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-[#73c2fb]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-[#73c2fb]" />
                <span>info@devlabs.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-[#73c2fb]" />
                <span>456 Innovation Ave, Sydney NSW 2000 AU</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 hover:bg-gray-700`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-[#73c2fb] transition-all duration-200 text-sm block"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Stay Updated with Tech Trends
              </h3>
              <p className="text-gray-300 text-sm">
                Get the latest insights on emerging technologies, training best practices, 
                and industry trends delivered to your inbox.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#73c2fb] focus:border-transparent transition-all duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 whitespace-nowrap ml-2"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-6 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div className="text-gray-400 text-sm">
              © {currentYear} Devlabs. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              {[
                'Privacy Policy',
                'Terms of Service',
                'Cookie Policy',
                'Accessibility',
                'Sitemap'
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -1 }}
                  className="text-gray-400 hover:text-[#73c2fb] transition-colors duration-200"
                >
                  {link}
                </motion.a>
              ))}
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Made with ❤️ by Devlabs</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;