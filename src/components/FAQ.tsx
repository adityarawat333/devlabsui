import React from 'react';

const FAQ: React.FC = () => {
  return (
    <section className="bg-blue-50 py-20 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">FAQs</h2>
        <p className="text-gray-600">
          Find answers to common questions about our IT training services and processes.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <summary className="font-semibold cursor-pointer flex justify-between items-center">
            <span>What services do you offer?</span>
            <span className="text-xl">+</span>
          </summary>
          <p className="mt-2 text-gray-700">
            We provide a range of IT training services, including software development,
            cloud computing, and cybersecurity courses. Programs are designed for businesses
            looking to upskill their teams.
          </p>
        </details>

        <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <summary className="font-semibold cursor-pointer flex justify-between items-center">
            <span>How can I enroll?</span>
            <span className="text-xl">+</span>
          </summary>
          <p className="mt-2 text-gray-700">
            Enrollment is simple! You can sign up directly through our website or contact
            our sales team for assistance. We’ll guide you through the process to ensure
            a smooth experience.
          </p>
        </details>

        <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <summary className="font-semibold cursor-pointer flex justify-between items-center">
            <span>What is the duration?</span>
            <span className="text-xl">+</span>
          </summary>
          <p className="mt-2 text-gray-700">
            Course durations vary based on the program selected. Typically, sessions range
            from a few days to several weeks. Detailed schedules are provided upon enrollment.
          </p>
        </details>

        <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <summary className="font-semibold cursor-pointer flex justify-between items-center">
            <span>Do you offer certifications?</span>
            <span className="text-xl">+</span>
          </summary>
          <p className="mt-2 text-gray-700">
            Yes, upon successful completion, participants receive certificates. Credentials
            are recognized in the industry and help validate your team’s skills.
          </p>
        </details>

        <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <summary className="font-semibold cursor-pointer flex justify-between items-center">
            <span>What is your pricing?</span>
            <span className="text-xl">+</span>
          </summary>
          <p className="mt-2 text-gray-700">
            Pricing is competitive and varies by training program. We offer flexible payment
            options for different budgets. For exact pricing, reach out to our sales team.
          </p>
        </details>
      </div>

      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
        <p className="text-gray-600 mb-4">We're here to help you!</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
          Contact
        </button>
      </div>
    </section>
  );
};

export default FAQ;
