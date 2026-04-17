import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-28">
        <section className="py-16">
          <div className="container-max px-6">
            <div className="mb-14">
              <h1 className="text-5xl font-light uppercase tracking-[0.18em] text-gray-900">
                About
              </h1>
              <p className="mt-3 text-3xl font-serif italic text-gray-800">
                Samuel Shaibu
              </p>
            </div>

            <div className="grid gap-14 lg:grid-cols-[420px_1fr] lg:items-start">
              <div>
                <div className="overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src="/samuel_pic3.jpg"
                    alt="Samuel Shaibu portrait"
                    width={420}
                    height={540}
                    className="h-auto w-full object-cover"
                  />
                </div>

                <p className="mt-3 text-sm italic text-gray-500">
                  Samuel Shaibu — Data Scientist and Technical Writer
                </p>
              </div>

              <div>
                <div className="rounded-2xl bg-gray-50 p-8">
                  <p className="text-xl italic leading-8 text-gray-700">
                    I use data and writing to turn technical complexity into
                    useful, practical insight.
                  </p>
                </div>

                <div className="mt-10 space-y-6 text-base leading-8 text-gray-700">
                  <p>
                    I am a data scientist and technical writer with experience
                    spanning analytics, experimentation, dashboarding, business
                    intelligence, and applied machine learning. My work focuses
                    on building useful solutions and communicating them clearly.
                  </p>

                  <p>
                    Alongside my industry experience, I write educational
                    content on topics such as Python, SQL, Excel, statistics,
                    and machine learning. I care deeply about making technical
                    concepts easier to understand, more practical to apply, and
                    more accessible to wider audiences.
                  </p>

                  <p>
                    This website serves as a central place for my professional
                    work — bringing together my background in data, my public
                    writing, my experience, and the projects and ideas I am
                    continuing to develop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}