import React from "react";

const Testimonial = ({ quote, author }: { quote: string; author: string }) => (
  <blockquote className="p-6 rounded-lg bg-white border border-gray-100 shadow-sm">
    <p className="text-gray-700">“{quote}”</p>
    <cite className="block mt-4 text-sm text-gray-500">— {author}</cite>
  </blockquote>
);

export default function Testimonials() {
  return (
    <div>
      <h2 className="text-3xl font-bold">What clients say</h2>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <Testimonial
          quote="Practical, clear and immediately useful coaching — helped me level up my BA skills."
          author="Client A"
        />
        <Testimonial
          quote="Great frameworks for stakeholder work and requirements. Highly recommended."
          author="Client B"
        />
      </div>
    </div>
  );
}
