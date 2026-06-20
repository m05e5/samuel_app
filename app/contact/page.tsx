import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { BookOpenText, Github, Linkedin, Mail, Newspaper } from "lucide-react";

const contactLinks = [
  {
    href: "mailto:shaibu.samuel@yahoo.com",
    label: "shaibu.samuel@yahoo.com",
    icon: Mail,
  },
  {
    href: "https://www.linkedin.com/in/samuel-shaibu/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://github.com/samietex",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://medium.com/@Samietex",
    label: "Medium",
    icon: Newspaper,
  },
  {
    href: "https://aaboutdata.substack.com/",
    label: "All About Data & More",
    icon: BookOpenText,
  },
];

const collaborationTypes = [
  "Data science or data engineering roles",
  "Technical writing and editorial collaborations",
  "Analytics dashboards, ETL workflows, and BI consulting",
  "Workshops on Python, SQL, machine learning, or responsible AI",
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="light-page pt-32">
        <section className="section-pad">
          <div className="container-max px-4 sm:px-6">
            <div className="max-w-3xl">
              <div className="kicker">Contact</div>
              <h1 className="section-title mt-5">Let&apos;s talk about useful data work.</h1>
              <p className="subhead mt-6">
                I am open to roles and collaborations where data needs to be
                engineered, modeled, visualized, explained, or taught clearly.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-white">Contact details</h2>

                <div className="mt-8 space-y-5">
                  {contactLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                        rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                        className="flex items-center gap-4 text-[var(--muted-strong)] transition hover:text-white"
                      >
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[var(--teal)]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span>{item.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold text-white">Good reasons to reach out</h2>

                <div className="mt-8 grid gap-3">
                  {collaborationTypes.map((item) => (
                    <div
                      key={item}
                      className="border-l-2 border-[var(--teal)] pl-4 text-sm leading-7 text-[var(--muted-strong)]"
                    >
                      {item}
                    </div>
                  ))}
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
