import {
    Mail,
    MapPin,
    Globe,
    Linkedin,
    Twitter,
    Mail as MailIcon,
  } from "lucide-react";
  
  export default function Contact() {
    return (
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
            <div className="h-1 w-20 mx-auto bg-orange-400 mt-3 rounded-full" />
            <p className="mt-4 text-gray-600 text-lg">
              Have questions? Want to learn more? We&apos;d love to hear from you!
            </p>
          </div>
  
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column — Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-lg text-[#fabb54]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">hello@businessanalysiscircle.com</p>
                  </div>
                </li>
  
                <li className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-lg text-[#fabb54]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Location</p>
                    <p className="text-gray-600">
                      Vilnius, Lithuania — Serving analysts worldwide
                    </p>
                  </div>
                </li>
  
                <li className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-lg text-[#fabb54]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Global Reach</p>
                    <p className="text-gray-600">Working with clients across 50+ countries</p>
                  </div>
                </li>
              </ul>
  
              {/* Social Icons */}
              <div className="mt-10">
                <p className="font-medium text-gray-800 mb-3">Follow Us</p>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="p-2 rounded-md bg-white border border-gray-200 hover:bg-gray-100 transition"
                  >
                    <Linkedin className="w-5 h-5 text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-md bg-white border border-gray-200 hover:bg-gray-100 transition"
                  >
                    <Twitter className="w-5 h-5 text-gray-600" />
                  </a>
                  <a
                    href="mailto:hello@businessanalysiscircle.com"
                    className="p-2 rounded-md bg-white border border-gray-200 hover:bg-gray-100 transition"
                  >
                    <MailIcon className="w-5 h-5 text-gray-600" />
                  </a>
                </div>
              </div>
            </div>
  
            {/* Right Column — Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-md border-gray-300 focus:border-orange-400 focus:ring-orange-400"
                  />
                </div>
  
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full rounded-md border-gray-300 focus:border-orange-400 focus:ring-orange-400"
                  />
                </div>
  
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full rounded-md border-gray-300 focus:border-orange-400 focus:ring-orange-400"
                  />
                </div>
  
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us more about your needs..."
                    className="w-full rounded-md border-gray-300 focus:border-orange-400 focus:ring-orange-400"
                  ></textarea>
                </div>
  
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#fbbb53] to-[#fbcc82] hover:bg-[#fabb54] text-white font-medium py-3 rounded-md transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
