# Vikvar Technologies — Hosting Handoff

## Project

- Framework: Next.js App Router
- Production command: `npm run build`
- Start command: `npm run start`
- Default production port: `3000`
- Repository branch: `main`
- Production domain: `vikvartech.com`

## Required hosting capabilities

The hosting environment must support:

- A supported Node.js LTS release
- `npm install` or `npm ci`
- Next.js server or compatible managed Next.js deployment
- HTTPS
- Environment variables
- Custom domain and redirects
- Build and runtime logs

## Deployment commands

```bash
npm ci
npm run build
npm run start
```

Do not upload:

- `node_modules`
- `.next` from a different machine
- `.git`
- local backups
- development-only secrets

## Domain configuration

Configure:

- `vikvartech.com` as the primary domain
- `www.vikvartech.com` to redirect to the primary domain, or the reverse
- HTTPS for both hostnames
- A single canonical hostname

The website metadata currently expects:

```text
https://vikvartech.com
```

## Required checks after deployment

Open:

- `/`
- `/about`
- `/services`
- `/contact`
- `/careers`
- `/case-studies`
- `/resources`
- `/faq`
- `/robots.txt`
- `/sitemap.xml`
- `/manifest.webmanifest`
- `/opengraph-image`
- `/api/health`
- `/.well-known/security.txt`

## Security

The project contains baseline response headers in:

```text
lib/security-headers.ts
```

The hosting agency must confirm these headers are present in production.

Enable HSTS only after HTTPS is confirmed on every production hostname.

## Forms

Before launch, confirm:

- Which email address receives business enquiries
- Which email address receives career submissions
- Whether the form uses an API, email provider, CRM or hosting function
- Spam protection and validation
- Success and failure handling
- Data retention and privacy wording

## Media

Some homepage photography may still use remote Unsplash URLs. These should remain only if approved. Local optimized assets are preferred for long-term reliability.

## Deployment record

Record:

- Deployment date
- Git commit hash
- Node.js version
- Hosting platform
- Environment variables configured
- DNS change date
- SSL activation date
- Person responsible for rollback
