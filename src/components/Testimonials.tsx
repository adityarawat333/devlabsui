import React from 'react'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Your testimonials data
const testimonials = [
  {
    name: 'Anil Santhapuri',
    role: 'Director, L&D',
    company: 'CGI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/CGI_logo.svg/2560px-CGI_logo.svg.png',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    content:
      'Simplilearn has been a great partner for us and our employee skills development program. Their catalog of training content covers a wide range of digital domains and functions, which we appreciate.',
  },
  {
    name: 'Luiza Muller',
    role: 'HR Director',
    company: 'Orange',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Orange_logo.svg/2560px-Orange_logo.svg.png',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    content:
      'Simplilearn’s expertise is a great advantage in this challenge represented by digitization. Orange is committed towards training its employees in emerging technologies.',
  },
  {
    name: 'John Doe',
    role: 'CTO',
    company: 'TechGlobal',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Google-flutter-logo.svg/512px-Google-flutter-logo.svg.png',
    image: 'https://randomuser.me/api/portraits/men/85.jpg',
    content:
      'Amazing programs! The AI & ML bootcamp helped us level up our capabilities and save time on big projects. Highly recommend.',
  },
  {
    name: 'Sarah Lee',
    role: 'Head of Training',
    company: 'HealthTech',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/HEALTH_logo.svg/512px-HEALTH_logo.svg.png',
    image: 'https://randomuser.me/api/portraits/women/20.jpg',
    content:
      'A fantastic training partner — the practical approach and instructor quality exceeded our expectations. Our teams are more confident now.',
  },
]

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768, // show 1 slide on small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section className="bg-white py-20" id="testimonials">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Hear It From Our Customers
        </motion.h2>

        <Slider {...settings} className="relative">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-4"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col justify-between">
                <div className="flex items-center mb-6">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-bold">{t.name}</h4>
                    <p className="text-sm text-gray-600">{t.role}</p>
                    <img src={t.logo} alt={t.company} className="h-6 mt-2" />
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">“{t.content}”</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
