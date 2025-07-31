"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

const coursesData = [
  {
    category: "GenAI",
    icon: "🧠",
    skills: [
      "Prompt Engineering",
      "LLM Applications",
      "Deep Learning",
      "AI Ethics",
      "Neural Networks"
    ],
    tools: ["GitHub Copilot", "ChatGPT", "LangChain", "Python"]
  },
  {
    category: "Data Science",
    icon: "📊",
    skills: [
      "Statistics",
      "Machine Learning",
      "Big Data",
      "Data Visualization",
      "SQL & NoSQL"
    ],
    tools: ["TensorFlow", "Python", "R", "Tableau"]
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      "AWS/Azure/GCP",
      "Kubernetes",
      "Serverless",
      "CI/CD Pipelines",
      "Infrastructure as Code"
    ],
    tools: ["Docker", "Terraform", "GitHub Actions"]
  },
  {
    category: "Cybersecurity",
    icon: "🔒",
    skills: [
      "Ethical Hacking",
      "Threat Detection",
      "Risk Management",
      "Incident Response",
      "Compliance"
    ],
    tools: ["Wireshark", "Metasploit", "Kali Linux"]
  },
  {
    category: "Advanced Java",
    icon: "☕",
    skills: [
      "OOP & Design Patterns",
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "Concurrency & Threads"
    ],
    tools: ["Eclipse", "IntelliJ", "Maven"]
  },
  {
    category: "SDET",
    icon: "🧪",
    skills: [
      "Automation Testing",
      "Selenium",
      "API Testing",
      "Performance Testing",
      "TestNG/JUnit"
    ],
    tools: ["Selenium", "Postman", "JMeter"]
  },
  {
    category: "Automation",
    icon: "⚙️",
    skills: [
      "Robotic Process Automation",
      "Workflow Automation",
      "CI/CD",
      "Infrastructure Automation",
      "Monitoring & Alerts"
    ],
    tools: ["Ansible", "Jenkins", "GitLab CI"]
  },
  {
    category: "Database Management",
    icon: "🗄️",
    skills: [
      "SQL/NoSQL",
      "Data Modeling",
      "Performance Tuning",
      "Backup & Recovery",
      "Replication & Sharding"
    ],
    tools: ["MySQL", "PostgreSQL", "MongoDB"]
  }
];

export default function Courses() {
  const [selected, setSelected] = useState(coursesData[0]);

  return (
    <section className="bg-blue-50 py-20">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 px-6">
        {/* Sidebar */}
        <div className="col-span-1">
          {coursesData.map((course) => (
            <button
              key={course.category}
              onClick={() => setSelected(course)}
              className={`w-full text-left px-4 py-4 rounded-lg mb-2 font-medium ${
                selected.category === course.category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-800 hover:bg-blue-100"
              }`}
            >
              {course.category}
            </button>
          ))}
        </div>

        {/* Details Panel */}
        <div className="col-span-3 bg-white rounded-xl p-8 shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.category}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{selected.icon}</div>
                <h2 className="text-3xl font-bold text-gray-800">
                  {selected.category}
                </h2>
              </div>

              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Skills You’ll Gain
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {selected.skills.map((skill, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Tools & Frameworks
              </h3>
              <div className="flex flex-wrap gap-4">
                {selected.tools.map((tool, i) => (
                  <div
                    key={i}
                    className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
