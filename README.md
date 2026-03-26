# Topu — Personal Portfolio

A full-stack, self-hosted personal portfolio built with Next.js 16. Fully dynamic with an admin panel, markdown blog, image uploads, and Docker-based deployment.


---

## LIVE

> 

---

## Preview

>

---

## Features

- **Dynamic content** — all sections (about, resume, projects, blog, contact) are managed via a built-in admin panel and stored in MongoDB
- **Markdown blog** — rich markdown editor with GFM support, live preview, syntax highlighting, and dedicated post pages (`/blog/[id]`)
- **Image uploads** — drag-and-drop or URL paste, uploaded to any S3-compatible storage (RustFS, MinIO, AWS S3)
- **Admin panel** — protected by JWT session, full CRUD for all content
- **Email validation** — contact form only accepts verified providers (Gmail, Outlook, Yahoo, iCloud, ProtonMail, etc.)
- **Sketch/dashed theme** — hand-drawn aesthetic with dark/light mode toggle
- **Static fallbacks** — all sections fall back to static data if the API is unavailable
- **Docker ready** — multi-arch image (`amd64` + `arm64`) published to GHCR on every push to `main`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | JavaScript (React 19) |
| Database | MongoDB via Mongoose |
| Auth | JWT + HTTP-only cookies |
| Storage | S3-compatible (RustFS / MinIO / AWS S3) |
| Styling | Tailwind CSS v4 |
| Forms | React Hook Form + Zod |
| Markdown | react-markdown + remark-gfm |
| Container | Docker (node:20-alpine) |
| CI/CD | GitHub Actions → GHCR |

---

## Getting Started

### Prerequisites

- Node.js 20+
- MongoDB (local or Atlas)
- An S3-compatible storage bucket (optional — image uploads won't work without it)

### Local Development

```bash
# 1. Clone the repo
git clone https://github.com/MuhammadTopu/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your values

# 4. Start MongoDB (Docker)
docker run -d \
  --name mongodb \
  -p 27017:27017 \
  -e MONGO_INITDB_DATABASE=portfolio \
  -v mongodb_data:/data/db \
  mongo:7

# 5. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the portfolio.  
Admin panel is at [http://localhost:3000/admin](http://localhost:3000/admin).

---

## Docker

### Build and run locally

```bash
docker build -t portfolio .
docker run -p 3000:3000 --env-file .env.local portfolio
```

```bash
git tag v1.0.0
git push origin v1.0.0
```

---

## Project Structure

```
src/
├── app/
│   ├── admin/          # Admin panel pages
│   ├── api/            # REST API routes
│   ├── blog/[id]/      # Dedicated blog post pages
│   └── page.js         # Main portfolio page
├── components/
│   ├── admin/          # Admin UI components + markdown editor
│   ├── sections/       # Portfolio sections (About, Resume, Blog, etc.)
│   └── Sidebar.js      # Profile sidebar
└── lib/
    ├── db/             # Mongoose models + connection
    ├── api/            # JWT, auth middleware, response helpers
    └── storage.js      # S3 upload utility
```

---

## Use This Template

Want to use this as your own portfolio? Click **"Use this template"** on the sidebar or:

1. Fork / use as template on GitHub
2. Update `.env.local` with your credentials
3. Edit the static fallback data in each section component
4. Deploy via Docker or Vercel

---

## License

MIT — free to use, modify, and distribute.
