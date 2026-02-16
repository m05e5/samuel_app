import React from "react";

const Card = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="p-6 rounded-xl border border-gray-100 shadow-sm bg-white relative transition hover:translate-y-[-3px]">
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="mt-3 text-gray-600">{children}</p>
  </div>
);

export default function Services() {
  return (
    <div>
      <h2 className="text-3xl font-bold">Services & Programs</h2>
      <p className="text-gray-600 mt-3">
        Blended programs and consulting for individuals and teams.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <Card title="Coaching & Mentoring" >
          One-on-one coaching to accelerate career growth and improve BA skills.
        </Card>
        <Card title="Training Programs">
          Short and long-form courses on requirements, modeling, and stakeholder
          engagement.
        </Card>
        <Card title="Consulting">
          Process improvement, requirements definition, and project support for
          teams.
        </Card>
      </div>
    </div>
  );
}
