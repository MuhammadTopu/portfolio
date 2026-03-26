// import About from './models/About';
// import Resume from './models/Resume';

// const ABOUT_SEED = {
//   name: 'Kamran Hossain Topu',
//   title: 'Software Engineer',
//   avatar: '/Topu',
//   bio: [
//     "I always asked God for superpowers. He introduced me to coding.",
//     "I am a passionate Software Engineer with a strong focus on backend development and a solid understanding of full-stack technologies.",
//     "I build scalable REST APIs, GraphQL services, and backend systems using Node.js, NestJS, Express.js, TypeScript, and Go (Gin & Chi).",
//     "I have hands-on experience with PostgreSQL, MongoDB, MySQL, Prisma, Redis, Docker, and I am familiar with authentication, authorization, RBAC, caching, payment integrations, and third-party APIs.",
//     "As a Computer Science Engineer, I have strong fundamentals in Data Structures & Algorithms, Operating Systems, Networking, Databases, and system Design. I regularly solve LeetCode problems in Java to strengthen my problem-solving skills.",
//     "On the frontend, I work with HTML, CSS, Tailwind, JavaScript, React.js, and Next.js, which helps me understand complete application flows and collaborate effectively.",
//     "I am good in Java, C, C++, C#, JavaScript/TypeScript, and Go, and ",
//     "what I may lack in experience, I make up for with discipline, consistency, and an unstoppable drive to learn.",
//     "I aim to build reliable, scalable software and grow by solving real-world challenges.",
//   ],
//   email: 'kamranhossaintopu.me@gmail.com',
//   phone: '+880 1646302958',
//   location: 'Dhaka-1230, Bangladesh',
//   linkedin: 'https://linkedin.com/in/kamranhossaintopu',
//   github: 'https://github.com/MuhammadTopu',
//   // githubOrg: 'https://github.com/nesohq',
//   services: [
//     { title: 'Backend Engineering', icon: 'Server', text: 'Building scalable, distributed systems in Golang and TypeScript with a focus on reliability and performance.' },
//     { title: 'Cloud & DevOps', icon: 'Globe', text: 'Architecting cloud-native infrastructure with Kubernetes, Docker, and Terraform for automated, reproducible deployments.' },
//     { title: 'CI/CD & Automation', icon: 'GitBranch', text: 'Designing automated pipelines with GitHub Actions and Jenkins, enabling rapid and confident daily releases.' },
//     { title: 'Observability', icon: 'Database', text: 'Implementing full observability stacks with Prometheus and Grafana for real-time monitoring and alerting.' },
//   ],
//   techStack: [
//     { label: 'Languages',   value: 'Golang, TypeScript, Python, Bash' },
//     { label: 'Containers',  value: 'Docker, Kubernetes, K3s, Helm, EKS' },
//     { label: 'IaC',         value: 'Terraform, AWS CDK, Kustomization' },
//     { label: 'Cloud',       value: 'AWS, DigitalOcean, Hetzner' },
//     { label: 'Observe',     value: 'Prometheus, Grafana, Logging, Alerting' },
//     { label: 'Databases',   value: 'PostgreSQL, MySQL, MongoDB, Redis' },
//     { label: 'Networking',  value: 'Caddy, Nginx, Tailscale, Headscale' },
//     { label: 'Frontend',    value: 'React.js, Next.js, Tailwind CSS' },
//   ],
// };

// const RESUME_SEED = {
//   experience: [
//     {
//       title: 'Senior Software Engineer & Backend Lead',
//       company: 'Zalmi Technology',
//       period: 'Jan 2026 — Present',
//       points: [
//         'Leading backend engineering team and infrastructure architecture for a platform serving 1M+ users.',
//         'Architecting cloud-native infrastructure with Docker and Kubernetes, ensuring 99.9% uptime.',
//         'Implementing infrastructure-as-code with Terraform for reproducible deployments.',
//         'Driving DevOps culture and CI/CD automation for rapid, reliable releases.',
//       ],
//     },
//     {
//       title: 'Software Engineer',
//       company: 'Technonext (US-Bangla Airlines Concern)',
//       period: 'Apr 2025 — Dec 2025',
//       points: [
//         'Architected Geo Finder Service — a geo-distributed REST API with sub-100ms latency via Redis caching.',
//         'Containerized microservices with Docker & Kubernetes, implementing zero-downtime rolling updates.',
//         'Built CI/CD pipelines with GitHub Actions and Jenkins, reducing deployment time by 70%.',
//       ],
//     },
//     {
//       title: 'Software Engineer',
//       company: 'ShareTrip Ltd.',
//       period: 'Feb 2024 — Mar 2025',
//       points: [
//         'Managed infrastructure for large-scale travel platform with load balancing and auto-scaling.',
//         'Built automated scheduling service using containerized workloads, reducing manual ops by 60%.',
//         'Refactored monolithic workflows into cloud-native microservices.',
//       ],
//     },
//     {
//       title: 'Junior Software Engineer',
//       company: 'Axiata Digital Agency Asia',
//       period: 'Dec 2022 — Jan 2024',
//       points: [
//         'Built omnichannel communication platform handling high-volume transactional messages.',
//         'Developed real-time survey platform serving 10,000+ daily users.',
//       ],
//     },
//   ],
//   infraProjects: [
//     { title: 'Private Hybrid Cloud — NesoHQ', period: '2022 — Present', text: 'Designed and operated private hybrid cloud using self-hosted Headscale and Caddy reverse proxy for cost-efficient, secure networking.' },
//     { title: 'Multi-node K3s Kubernetes Clusters', period: '2023 — Present', text: 'Deployed and managed multi-node K3s clusters across geographically distributed nodes for production-grade lightweight Kubernetes.' },
//     { title: 'Infrastructure-as-Code Pipeline', period: '2024 — Present', text: 'Implemented complete IaC pipeline using Terraform and Kustomization for declarative infrastructure management and automated provisioning.' },
//     { title: 'Observability Platform', period: '2024 — Present', text: 'Built Prometheus and Grafana observability platform for real-time metrics, visualization, and alerting across distributed workloads.' },
//   ],
//   skills: [
//     { category: 'Languages',                  tags: ['Golang', 'TypeScript', 'Python', 'Bash'] },
//     { category: 'Containers & Orchestration', tags: ['Docker', 'Kubernetes', 'K3s', 'Helm', 'EKS', 'Kustomization'] },
//     { category: 'Infrastructure & IaC',       tags: ['Terraform', 'AWS CDK', 'Load Balancing', 'Infrastructure Automation'] },
//     { category: 'Cloud Platforms',            tags: ['AWS', 'DigitalOcean', 'Hetzner', 'EC2', 'S3', 'Route53', 'Lambda'] },
//     { category: 'CI/CD & DevOps',             tags: ['GitHub Actions', 'Jenkins', 'GitLab CI'] },
//     { category: 'Observability',              tags: ['Prometheus', 'Grafana', 'Alerting', 'Metrics Collection'] },
//     { category: 'Databases & Caching',        tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'ElasticSearch'] },
//     { category: 'Networking',                 tags: ['Caddy', 'Nginx', 'Tailscale', 'Headscale', 'TLS/SSL'] },
//     { category: 'Frontend',                   tags: ['React.js', 'Next.js', 'Tailwind CSS'] },
//   ],
// };

// export async function seedAbout() {
//   const existing = await About.findOne().lean();
//   // Only seed if truly empty — no doc at all, or missing all key fields
//   const isEmpty = !existing || (
//     !existing.services?.length &&
//     !existing.techStack?.length &&
//     !existing.bio?.length
//   );
//   if (isEmpty) {
//     await About.deleteMany({});
//     await About.create(ABOUT_SEED);
//   }
// }

// export async function seedResume() {
//   const existing = await Resume.findOne().lean();
//   const isEmpty = !existing || (
//     !existing.experience?.length &&
//     !existing.skills?.length
//   );
//   if (isEmpty) {
//     await Resume.deleteMany({});
//     await Resume.create(RESUME_SEED);
//   }
// }
