"use client";

import { useEffect, useState } from "react";
import { Server, Globe, GitBranch, Database } from "lucide-react";

const ARTICLE =
  "active bg-card sketch-border p-6 lg:p-8 transition-all duration-500 relative z-10 block animate-[fadeIn_0.4s_ease_forwards]";
const SECTION_TITLE =
  "text-3xl lg:text-4xl font-signature font-bold mb-6 text-foreground flex items-center gap-3";

const ICON_MAP = {
  Server: <Server size={32} />,
  Globe: <Globe size={32} />,
  GitBranch: <GitBranch size={32} />,
  Database: <Database size={32} />,
};

const STATIC = {
  name: "Kamran Hossain Topu",
  title: "Software Engineer",
  bio: [
    "I always asked God for superpowers. He introduced me to coding.",
    "I am a passionate Software Engineer with a strong focus on backend development and a solid understanding of full-stack technologies.",
    "I build scalable REST APIs, GraphQL services, and backend systems using Node.js, NestJS, Express.js, TypeScript, and Go (Gin & Chi).",
    "I have hands-on experience with PostgreSQL, MongoDB, MySQL, Prisma, Redis, Docker, and I am familiar with authentication, authorization, RBAC, caching, payment integrations, and third-party APIs.",
    "As a Computer Science Engineer, I have strong fundamentals in Data Structures & Algorithms, Operating Systems, Networking, Databases, and system Design. I regularly solve LeetCode problems in Java to strengthen my problem-solving skills.",
    "On the frontend, I work with HTML, CSS, Tailwind, JavaScript, React.js, and Next.js, which helps me understand complete application flows and collaborate effectively.",
    "I am good in Java, C, C++, C#, JavaScript/TypeScript, and Go, and ",
    "what I may lack in experience, I make up for with discipline, consistency, and an unstoppable drive to learn.",
    "I aim to build reliable, scalable software and grow by solving real-world challenges.",
  ],
  services: [
    {
      title: "Backend Engineering",
      text: "Building robust and scalable backend systems and APIs using Node.js, NestJS, Express.js, Go, and TypeScript to deliver seamless user experiences. Currently learning Go to develop high-performance services, microservices architectures, and distributed systems.",
      icon: "Server",
    },
    {
      title: "DevOps",
      text: "Implementing cloud-ready and scalable backend infrastructures using Docker, Redis, and PostgreSQL. Learning in containerization, environment configuration, and deploying applications on modern cloud platforms with a focus on performance, reliability, and maintainability",
      icon: "Globe",
    },
    {
      title: "CI/CD & Automation",
      text: "Designing automated pipelines with GitHub Actions and Jenkins, enabling rapid and confident daily releases.",
      icon: "GitBranch",
    },
    {
      title: "Observability",
      text: "Learning and applying monitoring, logging, and alerting best practices using Prometheus, Grafana, and ELK stack to ensure system reliability and performance.",
      icon: "Database",
    },
  ],
  techStack: [
    { label: "Languages", value: "Golang, TypeScript, Python, Bash" },
    { label: "Containers", value: "Docker, Kubernetes, K3s, Helm, EKS" },
    { label: "IaC", value: "Terraform, AWS CDK, Kustomization" },
    { label: "Cloud", value: "AWS, DigitalOcean, Hetzner" },
    { label: "Observe", value: "Prometheus, Grafana, Logging, Alerting" },
    { label: "Databases", value: "PostgreSQL, MySQL, MongoDB, Redis" },
    { label: "Networking", value: "Caddy, Nginx, Tailscale, Headscale" },
    { label: "Frontend", value: "React.js, Next.js, Tailwind CSS" },
  ],
  github: "https://github.com/MuhammadTopu",
  // githubOrg: "https://github.com/nesohq",
  linkedin: "https://linkedin.com/in/kamranhossaintopu",
};

export function About() {
  const [data, setData] = useState(STATIC);

  useEffect(() => {
    fetch("/api/about")
      .then((r) => r.json())
      .then((j) => {
        if (j.data && (j.data.bio?.length || j.data.services?.length)) {
          setData({ ...STATIC, ...j.data });
        }
      })
      .catch(() => {});
  }, []);

  return (
    <article className={ARTICLE}>
      <header className="mb-8">
        <h2 className="text-4xl lg:text-5xl font-signature font-bold capitalize relative pb-3 text-foreground flex items-center gap-4">
          About me
          <div className="w-[30px] h-[3px] bg-foreground mt-2" />
        </h2>
      </header>

      {/* Bio */}
      <section className="text-muted text-base lg:text-lg leading-relaxed space-y-6 font-light mb-12">
        {(data.bio?.length ? data.bio : STATIC.bio).map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      {/* Services */}
      {data.services?.length > 0 && (
        <section className="mb-12">
          <h3 className={SECTION_TITLE}>
            <span className="text-2xl">✦</span> What I&apos;m doing
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.services.map((s, idx) => (
              <li
                key={idx}
                className="bg-card p-6 sketch-border flex flex-col gap-4 hover:translate-x-1 hover:translate-y-1 transition-all duration-300 group hover:bg-primary-light"
              >
                <div className="w-12 h-12 flex items-center justify-center text-foreground group-hover:scale-110 transition-transform duration-500">
                  {ICON_MAP[s.icon] ?? <Server size={32} />}
                </div>
                <div>
                  <h4 className="font-signature font-bold text-2xl text-foreground mb-2">
                    {s.title}
                  </h4>
                  <p className="text-sm lg:text-base text-muted leading-relaxed font-light">
                    {s.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Open Source */}

      {/* Tech Stack */}
      {data.techStack?.length > 0 && (
        <section>
          <h3 className={SECTION_TITLE}>
            <span className="text-2xl">✦</span> Tech Stack
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.techStack.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 items-start sketch-border bg-card px-4 py-3 hover:bg-primary-light transition-all duration-200"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-muted shrink-0 w-24 pt-[2px]">
                  {item.label}
                </span>
                <span className="text-sm text-foreground font-medium leading-snug">
                  {item.value}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
