// data/villas.js
export const villas = [
  {
    id: 1,
    title: "Villa Luna",
    country: "Greece",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum esse
            consequuntur eius, sed quos, itaque earum eos dolor minima delectus
            sequi exercitationem dolorem illo dicta provident voluptatem nihil nam.`,
    link: 240,
    tag: "Excel",
    image: "/samuel_pic.jpg",
  },
  {
    id: 2,
    title: "Villa Tosco",
    country: "Italy",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum esse
            consequuntur eius, sed quos, itaque earum eos dolor minima delectus
            sequi exercitationem dolorem illo dicta provident voluptatem nihil nam.`,
    link: 300,
    tag: "Python",
    image: "/samuel_pic.jpg",
  },
  {
    id: 3,
    title: "Aphrodite",
    country: "Greece",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum esse
            consequuntur eius, sed quos, itaque earum eos dolor minima delectus
            sequi exercitationem dolorem illo dicta provident voluptatem nihil nam.`,
    link: 200,
    tag: "Python",
    image: "/samuel_pic.jpg",
  },
];


import Image from "next/image";
import { Users, BedDouble, Bath, Square } from "lucide-react";

export default function Articles() { 
  return (
    <section className="cursor-pointer">
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-serif font-semibold tracking-wide">
            SOME ARTICLES
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum esse
            consequuntur eius, sed quos, itaque earum eos dolor minima delectus
            sequi exercitationem dolorem illo dicta provident voluptatem nihil nam.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {villas.map((villa) => (
            <div
              key={villa.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="relative h-64">
                <Image
                  src={villa.image}
                  alt={villa.title}
                  fill
                  className="object-cover"
                />

                {/* link badge */}
                <span className="absolute top-4 left-4 bg-[#f7ead7] text-sm px-4 py-2 rounded-md font-medium">
                  {villa.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-1">
                  {villa.country} 
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  {villa.title}
                </h3>

                <p className="text-sm text-gray-500 mb-1">
                   {villa.description}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
