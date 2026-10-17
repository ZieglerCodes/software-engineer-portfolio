# Adam Ziegler | Software Engineer Portfolio

A production software engineering portfolio built to showcase real products, real business problems, and the engineering decisions behind them.

**Live Portfolio:**  
https://zieglercodes.netlify.app/

## Why I Built This

I wanted my portfolio to demonstrate more than a list of technologies.

My background is in sales, real estate, mortgage, and business development. That experience exposed me to inefficient workflows and recurring problems that software could solve.

The projects featured here came directly from those experiences:

- **Sales Copilot** came from watching salespeople struggle to handle objections in real time.
- **DoorwayPrep** came from working with renters and future homebuyers who needed a clearer path toward credit readiness.
- **Lead Scraper** came from an investment real estate prospecting workflow that required repeatedly finding niche local businesses.

Rather than creating tutorial projects, I focused on turning real problems into working software.

## Featured Projects

### Sales Copilot

A completed desktop AI application designed to help salespeople respond more effectively during live conversations.

The application listens alongside the salesperson, identifies objections and important conversational signals, and surfaces AI generated coaching while the conversation is still happening.

**Product Website:**  
https://salescopilot2026.netlify.app/

Technologies include:

- Electron
- React
- TypeScript
- Supabase
- AI and LLM APIs
- Real time transcription

### DoorwayPrep

A full stack credit readiness application created around a problem I regularly encounter as a Realtor.

DoorwayPrep helps renters and future homebuyers turn self reported financial information into prioritized next steps.

The system combines deterministic financial rules with optional AI explanations to make the recommendations easier to understand.

**Live Demo:**  
https://doorwayprep.netlify.app/

**Source:**  
https://github.com/ZieglerCodes/doorwayprep

Technologies include:

- Next.js
- React
- TypeScript
- Supabase
- PostgreSQL
- OpenAI
- Zod
- Tailwind CSS

### Lead Scraper

A full stack lead generation application created from an investment real estate prospecting workflow.

The project grew from the need to quickly identify local businesses such as contractors, roofers, builders, and other potential buyers for distressed properties.

The current application includes lead management, CSV workflows, authentication, background processing, storage, cleaning, deduplication, and export functionality.

**Live Demo:**  
https://leadscraper2026.netlify.app/

**Source:**  
https://github.com/ZieglerCodes/lead-scraper

Technologies include:

- React
- TypeScript
- Python
- FastAPI
- Supabase
- PostgreSQL
- Netlify
- Render

## Portfolio Technology

The portfolio itself is also a software project.

### Front End

- Astro
- TypeScript
- React
- Tailwind CSS

### Quality

- ESLint
- Prettier
- Astro type checking
- Vitest
- Playwright

### Deployment

- Git
- GitHub
- Netlify

## Architecture

The site uses Astro as the primary rendering layer.

Most portfolio content is rendered statically, which keeps the application fast and minimizes unnecessary client side JavaScript.

React is available for functionality that requires client interaction without requiring the entire portfolio to become a single page application.

The project structure intentionally separates:

```text
src/
├── components/
├── data/
├── pages/
└── styles/
```

Project information is stored separately from presentation components so product content can be updated without duplicating it throughout the interface.

## Live Product Previews

The portfolio can display deployed products inside browser style preview frames.

This allows visitors to see a real running application rather than relying entirely on screenshots.

Projects also include direct links so visitors can open and explore the production deployment.

## Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

The site is available locally at:

```text
http://localhost:4321
```

## Quality Checks

Run formatting:

```bash
npm run format
```

Run the complete verification pipeline:

```bash
npm run verify
```

The verification process includes:

```text
ESLint
Prettier check
Astro type checking
Production build
```

## Production Build

```bash
npm run build
```

Astro generates the production site in:

```text
dist/
```

## Deployment

The production workflow is:

```text
Local Development
      ↓
Git
      ↓
GitHub
      ↓
Netlify Build
      ↓
Production
```

Production:

https://zieglercodes.netlify.app/

## What This Project Demonstrates

This portfolio was designed to demonstrate how I approach software development beyond individual coding exercises.

Areas represented throughout the project include:

- Product thinking
- Front end engineering
- TypeScript
- Component architecture
- Responsive UI development
- Accessibility
- AI application development
- Full stack product development
- Automated quality checks
- Git workflows
- Production deployment

Most importantly, the portfolio connects the software I build to the real problems that motivated it.

## About Me

I'm Adam Ziegler, a software engineer with a background in sales, real estate, mortgage, and business development.

That background influences how I approach engineering.

I tend to start with the workflow and the user problem, then work backward toward the architecture and implementation required to solve it.

**Portfolio:**  
https://zieglercodes.netlify.app/

**GitHub:**  
https://github.com/ZieglerCodes

**LinkedIn:**  
https://www.linkedin.com/in/therealadamziegler/
