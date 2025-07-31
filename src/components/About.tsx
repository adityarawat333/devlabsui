"use client";

import React from "react";
import { motion } from "framer-motion";

const resources = [
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    tag: "Training",
    time: "5 min read",
    title: "Maximizing Your IT Training ROI",
    excerpt:
      "Discover proven strategies to enhance your IT training investments and boost ROI effectively.",
    link: "#"
  },
  {
    image:
      "https://images.unsplash.com/photo-1581091870620-4480b6dc0e3a?auto=format&fit=crop&w=900&q=80",
    tag: "Trends",
    time: "5 min read",
    title: "The Future of IT Training",
    excerpt:
      "Explore the upcoming trends shaping the enterprise IT training landscape in 2025 and beyond.",
    link: "#"
  },
  {
    image:
      "https://images.unsplash.com/photo-1590608897129-79da98d159f8?auto=format&fit=crop&w=900&q=80",
    tag: "Insights",
    time: "5 min read",
    title: "Effective Learning Paths for IT Professionals",
    excerpt:
      "Learn how to choose the right learning path for your career advancement and skill growth.",
    link: "#"
  }
];

export default function Resources() {
  return (
    <section className="py-20 bg-blue-50" id="resources">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-5xl font-bold mb-4"
            >
              Latest Resources
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-xl"
            >
              Stay updated with in-depth guides, industry trends, and training
              insights.
            </motion.p>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="mt-6 md:mt-0 bg-gradient-to-r from-[#73c2fb] to-[#0f52ba] text-white px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg transition-all"
          >
            View all
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 bg-white">
                <div className="flex items-center gap-4 text-sm mb-2">
                  <span className="bg-[#0f52ba]/10 text-[#0f52ba] px-3 py-1 rounded-full font-medium">
                    {item.tag}
                  </span>
                  <span className="text-gray-500">{item.time}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#0f52ba] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a
                  href={item.link}
                  className="inline-flex items-center text-[#0f52ba] font-semibold hover:underline"
                >
                  Read more &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
