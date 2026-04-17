import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Mail, Linkedin, BookOpenText } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-28">
        <section className="py-16">
          <div className="container-max px-6">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold tracking-widest text-gray-500">
                CONTACT
              </span>
              <h1 className="mt-4 text-5xl font-bold text-gray-900">
                Let’s Connect
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Interested in data science, technical writing, analytics, or a
                potential collaboration? I’d be glad to hear from you.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Contact Details
                </h2>

                <div className="mt-8 space-y-6">
                  <a
                    href="mailto:shaibu.samuel@yahoo.com"
                    className="flex items-center gap-4 text-gray-700 hover:text-black"
                  >
                    <Mail className="h-5 w-5" />
                    <span>shaibu.samuel@yahoo.com</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/samuel-shaibu/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 text-gray-700 hover:text-black"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://aaboutdata.substack.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 text-gray-700 hover:text-black"
                  >
                    <BookOpenText className="h-5 w-5" />
                    <span>Substack</span>
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-neutral-50 p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Quick Note
                </h2>
                <p className="mt-4 leading-8 text-gray-600">
                  Replace the email above with your preferred contact address.
                  Later, you can also connect this page to a real form service
                  like Formspree, Resend, or EmailJS.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}