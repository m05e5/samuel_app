import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AWS Survey & Ad-Awareness ETL Pipeline",
    label: "Data Engineering",
    problem:
      "Survey and ad-awareness data needed repeatable ingestion, transformation, validation, and query-ready outputs.",
    solution:
      "Built a Terraform-managed AWS workflow with Glue, S3, Athena, IAM, EventBridge Scheduler, and Step Functions.",
    impact:
      "Created an automated, reviewable pipeline across bronze and silver layers with documented resource flow and data checks.",
    stack: ["Python", "AWS Glue", "S3", "Athena", "Step Functions", "Terraform"],
  },
  {
    title: "Legacy Integration Pipeline Modernization",
    label: "Python Engineering",
    problem:
      "A large legacy integration workflow created operational friction and required too much manual handling.",
    solution:
      "Modernized the Python codebase, added multi-format ingestion, SFTP/FTPS handling, S3 delivery, logging, and monitoring.",
    impact:
      "Reduced manual operations workload by about 40% and improved consistency for downstream reporting datasets.",
    stack: ["Python", "SQL", "pandas", "SFTP", "AWS S3", "pytest"],
  },
  {
    title: "AI Ethics Personalized Budget Predictor",
    label: "Responsible AI",
    problem:
      "A recommender-style model needed transparency around bias, fairness trade-offs, and threshold decisions.",
    solution:
      "Built a reproducible scikit-learn pipeline with MLflow tracking, fairness metrics, reweighing, threshold sweeps, and a Streamlit app.",
    impact:
      "Produced governance-ready artifacts including a model card, data sheet, risk assessment, and trade-off summary.",
    stack: ["Python", "Scikit-learn", "MLflow", "Streamlit", "Fairness metrics"],
    href: "https://github.com/samietex/AI_Ethics_Personalized_Budget_Prediction_Model",
  },
  {
    title: "Brand Tracking & Pricing Analytics",
    label: "Data Science",
    problem:
      "Global brand teams needed clearer pricing, perception, and campaign-performance insights across multiple markets.",
    solution:
      "Delivered Power BI dashboards, SQL models, CVI/CBI computations, MaxDiff, Van Westendorp, and key driver analysis.",
    impact:
      "Supported client-facing decision-making with 95%+ data accuracy targets and 15-20% pricing strategy precision improvements.",
    stack: ["Power BI", "SQL", "Python", "DAX", "MaxDiff", "Van Westendorp"],
  },
];

function ArchitectureDiagram() {
  const nodes = [
    { x: 14, y: 18, w: 108, h: 70, label: "Sources", sub: "Files · APIs · DBs", color: "rgba(94,234,212,0.10)" },
    { x: 157, y: 18, w: 108, h: 70, label: "Glue ETL", sub: "PySpark · Crawlers", color: "rgba(96,165,250,0.10)" },
    { x: 300, y: 18, w: 108, h: 70, label: "S3 Storage", sub: "Bronze → Gold", color: "rgba(94,234,212,0.10)" },
    { x: 443, y: 18, w: 108, h: 70, label: "Athena + ML", sub: "SQL · scikit-learn", color: "rgba(96,165,250,0.10)" },
    { x: 586, y: 18, w: 108, h: 70, label: "BI / Docs", sub: "Power BI · Reports", color: "rgba(94,234,212,0.10)" },
  ];

  const arrowY = 18 + 35;

  return (
    <div className="card overflow-hidden p-5">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <div className="text-sm font-bold text-white">Pipeline pattern</div>
          <div className="mt-1 text-xs text-[var(--muted)]">
            How I architect data products: reliable flow, visible decisions, useful outputs.
          </div>
        </div>
        <span className="tag">Architecture</span>
      </div>

      <svg
        viewBox="0 0 712 220"
        role="img"
        aria-label="Data pipeline: Sources to Glue ETL to S3 Storage to Athena and ML to BI and Docs, with orchestration, validation, and infrastructure cross-cutting concerns"
        className="h-auto w-full"
      >
        <defs>
          <marker id="arch-arr" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4">
            <path d="M0,0 L8,4 L0,8 Z" fill="#5eead4" />
          </marker>
        </defs>

        {/* Arrows between pipeline stages */}
        {nodes.slice(0, -1).map((node, index) => {
          const next = nodes[index + 1];
          return (
            <line
              key={`${node.label}-arrow`}
              x1={node.x + node.w + 8}
              y1={arrowY}
              x2={next.x - 12}
              y2={arrowY}
              stroke="#5eead4"
              strokeOpacity="0.75"
              strokeWidth="2"
              markerEnd="url(#arch-arr)"
            />
          );
        })}

        {/* Pipeline stage nodes */}
        {nodes.map((node) => (
          <g key={node.label}>
            <rect x={node.x} y={node.y} width={node.w} height={node.h} rx="8" fill={node.color} stroke="rgba(255,255,255,0.18)" />
            <text x={node.x + node.w / 2} y={node.y + 30} textAnchor="middle" fill="#f8fafc" fontSize="13" fontWeight="700">
              {node.label}
            </text>
            <text x={node.x + node.w / 2} y={node.y + 50} textAnchor="middle" fill="#9aa4b2" fontSize="10">
              {node.sub}
            </text>
          </g>
        ))}

        {/* Cross-cutting concerns band */}
        <rect x="14" y="108" width="680" height="72" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
        <line x1="240" y1="108" x2="240" y2="180" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <line x1="467" y1="108" x2="467" y2="180" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

        {/* ORCHESTRATE */}
        <text x="127" y="126" textAnchor="middle" fill="#5eead4" fontSize="8" fontWeight="700" letterSpacing="0.12em">ORCHESTRATE</text>
        <text x="127" y="146" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="600">Step Functions</text>
        <text x="127" y="161" textAnchor="middle" fill="#9aa4b2" fontSize="10">EventBridge Scheduler</text>

        {/* VALIDATE */}
        <text x="353" y="126" textAnchor="middle" fill="#60a5fa" fontSize="8" fontWeight="700" letterSpacing="0.12em">VALIDATE</text>
        <text x="353" y="146" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="600">Quality Checks</text>
        <text x="353" y="161" textAnchor="middle" fill="#9aa4b2" fontSize="10">Logging · Monitoring</text>

        {/* INFRASTRUCTURE */}
        <text x="580" y="126" textAnchor="middle" fill="#fbbf24" fontSize="8" fontWeight="700" letterSpacing="0.12em">INFRASTRUCTURE</text>
        <text x="580" y="146" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="600">Terraform · IAM</text>
        <text x="580" y="161" textAnchor="middle" fill="#9aa4b2" fontSize="10">Policies · Secrets</text>
      </svg>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad border-t border-white/10">
      <div className="container-max px-4 sm:px-6">
        <div>
          <div className="kicker">Featured projects</div>
          <h2 className="section-title mt-5">Case studies, not just repository links.</h2>
        </div>

        <div className="mt-12">
          <ArchitectureDiagram />
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="card p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="tag">{project.label}</span>
                  <h3 className="mt-5 text-2xl font-bold leading-tight text-white">
                    {project.title}
                  </h3>
                </div>

                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title}`}
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/15 text-[var(--muted)] transition hover:border-[var(--teal)] hover:text-white"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>

              <div className="mt-7 grid gap-5">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--rose)]">
                    Problem
                  </div>
                  <p className="copy mt-2 text-sm">{project.problem}</p>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--blue)]">
                    Solution
                  </div>
                  <p className="copy mt-2 text-sm">{project.solution}</p>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--teal)]">
                    Impact
                  </div>
                  <p className="copy mt-2 text-sm">{project.impact}</p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
