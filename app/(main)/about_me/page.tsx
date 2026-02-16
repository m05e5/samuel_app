import Navbar from "@/app/components/Navbar";
import Image from "next/image";

export default function Page() {
  return (
    <section className="bg-white py-24">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl tracking-widest font-light uppercase">
            About
          </h1>
          <p className="mt-2 text-3xl italic font-serif">Samuel Shaibu</p>
        </div>

        <div className="flex flex-col gap-14">
          {/* Content 1*/}
          <div className="flex flex-col lg:flex-row gap-16">
            {/* LEFT COLUMN */}
            <div className="w-full lg:w-5/12">
              {/* Image placeholder */}
              <div className="w-fit h-fit md:h-[520px] bg-gray-200 flex items-center justify-center text-gray-500 italic overflow-hidden">
                <Image
                  src="/samuel_pic3.jpg"
                  alt="Illustration"
                  width={400}
                  height={300}
                  className="object-contain"
                />
              </div>

              {/* Caption */}
              <p className="mt-3 text-sm italic text-gray-600">
                Samuel Shaibu , Still-Life Photographer
              </p>
            </div>

            {/* RIGHT COLUMN */}
            <div className="w-full lg:w-7/12">
              {/* Quote box */}
              <div className="bg-gray-100 p-8 mb-10">
                <p className="italic text-gray-700 leading-7">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.”
                </p>
              </div>

              {/* Long text */}
              <div className="space-y-6 text-sm leading-7 text-gray-700">
                <p>
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae sint
                  et molestiae non recusandae. Itaque earum rerum hic tenetur a
                  sapiente delectus, ut aut reiciendis voluptatibus maiores
                  alias consequatur aut perferendis doloribus asperiores
                  repellat.
                </p>

                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>

                <p>
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae sint
                  et molestiae non recusandae.
                </p>
              </div>
            </div>
          </div>
          {/* Content 2*/}
          <div className="flex flex-col lg:flex-row gap-16">
            {/* LEFT COLUMN */}

            {/* RIGHT COLUMN */}
            <div className="w-full lg:w-7/12">
              {/* Long text */}
              <div className="space-y-6 text-sm leading-7 text-gray-700">
                <p>
                  <span className="float-left text-7xl pr-3">T</span>emporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae sint
                  et molestiae non recusandae. Itaque earum rerum hic tenetur a
                  sapiente delectus, ut aut reiciendis voluptatibus maiores
                  alias consequatur aut perferendis doloribus asperiores
                  repellat. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>

                <p>
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae sint
                  et molestiae non recusandae.
                </p>

                <p>
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae sint
                  et molestiae non recusandae. Itaque earum rerum hic tenetur a
                  sapiente delectus, ut aut reiciendis voluptatibus maiores
                  alias consequatur aut perferendis doloribus asperiores
                  repellat. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-5/12">
              {/* Image placeholder */}
              <div className="w-fit h-fit md:h-[520px] bg-gray-200 flex items-center justify-center text-gray-500 italic overflow-hidden">
                <Image
                  src="/samuel_pic4.jpg"
                  alt="Illustration"
                  width={400}
                  height={300}
                  className="object-contain"
                />
              </div>

              {/* Caption */}
              <p className="mt-3 text-sm italic text-gray-600">
                Samuel Shaibu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
