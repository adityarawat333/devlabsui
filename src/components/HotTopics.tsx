import React from 'react';

const HotTopics: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl font-bold mb-4">Hot Topics</h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>Next.js Routing Strategies</li>
        <li>Authentication with NextAuth.js</li>
        <li>Server Actions & Data Fetching</li>
        <li>Performance Optimization</li>
      </ul>
    </section>
  );
};

export default HotTopics;
