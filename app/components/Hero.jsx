"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, FileText } from "lucide-react";

const proofPoints = [
  { value: "4+", label: "years in data roles" },
  { value: "18+", label: "technical tutorials" },
  { value: "40+", label: "students mentored" },
  { value: "95%+", label: "accuracy focus in client insight delivery" },
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen px-4 pb-20 pt-32 sm:px-6 lg:pt-36">
      <div className="container-max">
        <div className="grid min-h-[calc(100vh-9rem)] gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <div className="kicker">Data Engineer | Data Scientist | Technical Writer</div>

            <h1 className="display-title mt-6 max-w-5xl">
              Building data systems people can trust, use, and understand.
            </h1>

            <p className="subhead mt-7 max-w-3xl">
              I build scalable data pipelines, extract actionable insights with
              statistics and machine learning, and document complex systems so
              technical and business teams can make better decisions.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/#projects" className="button-primary">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/articles" className="button-secondary">
                <FileText className="h-4 w-4" />
                Read Articles
              </Link>
              <a href="/Samuel_Shaibu_Resume.pdf" className="button-secondary">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {proofPoints.map((item) => (
                <div key={item.label} className="border-l border-white/15 pl-4">
                  <div className="text-2xl font-black text-white">{item.value}</div>
                  <div className="mt-1 text-sm leading-5 text-[var(--muted)]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="card overflow-hidden">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/samuel_pic.jpg"
                  alt="Samuel Shaibu"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="card-muted p-4">
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--teal)]">
                  Current focus
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--muted-strong)]">
                  Python, SQL, AWS ETL, Power BI, ML modeling, and data
                  education.
                </p>
              </div>
              <div className="card-muted p-4">
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--amber)]">
                  Based in
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--muted-strong)]">
                  Vilnius, Lithuania. Working across analytics, data platforms,
                  and technical writing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
