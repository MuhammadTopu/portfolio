"use client";

import { useEffect, useState } from "react";
import { GraduationCap, Briefcase } from "lucide-react";

const ARTICLE =
  "active bg-card sketch-border p-6 lg:p-8 transition-all duration-500 relative z-10 block animate-[fadeIn_0.4s_ease_forwards]";
const SECTION_TITLE =
  "text-3xl lg:text-4xl font-signature font-bold mb-6 text-foreground flex items-center gap-3";

const STATIC = {
  projects: [
    {
      title: "Feed Bird website (clone)",
      // period: "2022 — Present",
      tools: "Next.js, Tailwind CSS, TypeScript",
      text: "Designed and operated private hybrid cloud using self-hosted Headscale and Caddy reverse proxy for cost-efficient, secure networking.",
    },
  ],
  experience: [
    {
      title: "Mid Software Engineer (Backend) ",
      company: "Zalmi Technology",
      period: "Jan 2026 — Present",
      points: [
        "Mid-level backend engineering team and infrastructure architecture for a platform serving 1M+ users.",
        "Architecting cloud-native infrastructure with Docker and Kubernetes, ensuring 99.9% uptime.",
        "Implementing infrastructure-as-code with Terraform for reproducible deployments.",
        "Driving DevOps culture and CI/CD automation for rapid, reliable releases.",
      ],
    },
    {
      title: "Mid Backend Engineer",
      company: "Softvence Delta",
      period: "Jan 2026 — Present",
      points: [
        "Architected and built scalable server-side applications using NestJS and TypeScript, improving code structure and developer productivity.",
        "Developed high-performance, optimized RESTful APIs that served frontend clients, reducing average API response time by 216ms.",
        "Designed robust database schemas, implemented indexing strategies, and utilized transaction rollback models to ensure data integrity and reliability.",
        "Provisioned and managed in-house development servers, enabling seamless collaboration for local and remote teams on a unified database.",
        "Orchestrated end-to-end deployment workflows for both frontend and backend services onto AWS, Hostinger, and VPS infrastructure.",
      ],
    },
  ],

  skills: [
    {
      category: "Databases & Caching",
      tags: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "ElasticSearch"],
    },
  ],
};

export function Resume() {
  const [data, setData] = useState(STATIC);

useEffect(() => {
  let isMounted = true;

  fetch("/api/resume")
    .then((r) => r.json())
    .then((j) => {
      if (!isMounted) return;
      if (j.data) {
        setData({
          projects: j.data.projects?.length ? j.data.projects : STATIC.projects,
          experience: j.data.experience?.length ? j.data.experience : STATIC.experience,
          skills: j.data.skills?.length ? j.data.skills : STATIC.skills,
        });
      }
    })
    .catch(() => {});

  // Fallback: after 3 seconds, show STATIC if backend hasn't responded
  const timeout = setTimeout(() => {
    if (isMounted && !data) setData(STATIC);
  }, 3000);

  return () => {
    isMounted = false;
    clearTimeout(timeout);
  };
}, []);

  return (
    <article className={ARTICLE}>
      <header className="mb-8">
        <h2 className="text-4xl lg:text-5xl font-signature font-bold capitalize relative pb-3 text-foreground flex items-center gap-4">
          Resume
          <div className="w-[30px] h-[3px] bg-foreground mt-2" />
        </h2>
      </header>

  

      {/* Experience */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-card sketch-border flex items-center justify-center text-foreground">
            <Briefcase size={24} />
          </div>
          <h3 className="text-3xl lg:text-4xl font-signature font-bold text-foreground">
            Experience
          </h3>
        </div>
        <ol className="ml-6 border-l-2 border-foreground border-dashed pl-8 space-y-10">
          {data.experience.map((item, idx) => (
            <li key={idx} className="relative group">
              <div className="absolute -left-[41px] top-[6px] w-[18px] h-[18px] bg-background border-[3px] border-foreground group-hover:bg-foreground transition-all duration-300" />
              <h4 className="font-signature font-bold text-2xl text-foreground mb-0.5">
                {item.title}
              </h4>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-foreground text-sm font-bold">
                  {item.company}
                </span>
                <span className="text-muted text-xs">·</span>
                <span className="text-muted text-xs lg:text-sm font-bold tracking-widest uppercase">
                  {item.period}
                </span>
              </div>
              <ul className="space-y-1">
                {item.points.filter(Boolean).map((p, i) => (
                  <li
                    key={i}
                    className="text-muted font-light leading-relaxed text-sm lg:text-base flex gap-2"
                  >
                    <span className="text-foreground shrink-0 mt-1">—</span>
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

          {/*Projects */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-card sketch-border flex items-center justify-center text-foreground">
            <GraduationCap size={24} />
          </div>
          <h3 className="text-3xl lg:text-4xl font-signature font-bold text-foreground">
            Projects
          </h3>
        </div>
        <ol className="ml-6 border-l-2 border-foreground border-dashed pl-8 space-y-10">
          {data.projects.map((item, idx) => (
            <li key={idx} className="relative group">
              <div className="absolute -left-[41px] top-[6px] w-[18px] h-[18px] bg-background border-[3px] border-foreground group-hover:bg-foreground transition-all duration-300" />
              <h4 className="font-signature font-bold text-2xl text-foreground mb-1">
                {item.title}
              </h4>
              <span className="text-muted text-xs lg:text-sm font-bold tracking-widest block mb-2 uppercase">
                <span className="sketch-border bg-card hover:bg-primary-light text-white transition-colors duration-200">Tools</span> - {item.tools}
              </span>
              <p className="text-muted font-light leading-relaxed text-sm lg:text-base">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Skills */}
      <section>
        <h3 className={SECTION_TITLE}>
          <span className="text-2xl">✦</span> My skills
        </h3>
        <div className="space-y-4">
          {data.skills.map((group, idx) => (
            <div
              key={idx}
              className="sketch-border bg-card p-4 hover:bg-primary-light transition-colors duration-200"
            >
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted mb-3">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold px-3 py-1 border-2 border-foreground text-foreground bg-background hover:bg-foreground hover:text-background transition-all duration-200 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
