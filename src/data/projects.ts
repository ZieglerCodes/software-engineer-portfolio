export type PreviewMode = 'iframe' | 'link';

export interface Project {
  name: string;
  eyebrow: string;
  status: string;

  description: string;

  businessProblem: string;
  solution: string;

  technologies: string[];

  liveUrl: string;
  previewUrl?: string;

  repoUrl?: string;
  repoLabel?: string;

  previewMode: PreviewMode;

  note?: string;

  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: 'Sales Copilot',

    eyebrow: 'Desktop AI Application',

    status: 'Complete',

    featured: true,

    description:
      'A completed desktop AI application that listens during live sales conversations and gives salespeople real-time guidance when objections, buying signals, and other important moments occur.',

    businessProblem:
      "I've spent most of my career in sales and have trained other salespeople along the way. One problem came up constantly. A prospect would raise an objection and the salesperson would freeze, give a weak response, or only think of the right thing to say after the conversation was already over.",

    solution:
      'I built Sales Copilot to run alongside the salesperson during the call. It listens to the conversation, identifies objections and important sales signals, and uses AI to surface a recommended response while the salesperson still has an opportunity to act on it.',

    technologies: [
      'Electron',
      'React',
      'TypeScript',
      'Supabase',
      'AI / LLM APIs',
      'Real-Time Transcription',
    ],

    liveUrl: 'https://salescopilot2026.netlify.app/',

    previewUrl: 'https://salescopilot2026.netlify.app/',

    repoUrl: 'https://github.com/ZieglerCodes/sales-copilot-website',

    repoLabel: 'Website Source',

    previewMode: 'iframe',

    note: 'The Sales Copilot desktop application is complete and ready to use. The linked website is the public product experience for the application.',
  },

  {
    name: 'DoorwayPrep',

    eyebrow: 'Full Stack AI Application',

    status: 'Live Demo',

    description:
      'An AI-assisted credit readiness platform designed to help renters and future homebuyers understand what they can work on before applying for housing.',

    businessProblem:
      'As a Realtor, I regularly work with people who want to rent or purchase a home but run into credit problems. Many of them know their credit needs work, but they do not know which issues matter most, what they should address first, or how to create a practical plan for becoming more housing ready.',

    solution:
      'I built DoorwayPrep so I can send a client one link and give them a structured starting point. The application collects self-reported information, evaluates key credit readiness factors, creates prioritized next steps, and can use AI to explain those recommendations in plain language.',

    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'OpenAI',
      'Zod',
      'Tailwind CSS',
    ],

    liveUrl: 'https://doorwayprep.netlify.app/',

    previewUrl: 'https://doorwayprep.netlify.app/demo',

    repoUrl: 'https://github.com/ZieglerCodes/doorwayprep',

    repoLabel: 'Source Code',

    previewMode: 'iframe',

    note: 'The public deployment uses fictional demo data. DoorwayPrep is an engineering portfolio project and does not guarantee credit improvement, rental approval, or mortgage approval.',
  },

  {
    name: 'Lead Scraper',

    eyebrow: 'Full Stack Lead Generation Application',

    status: 'Live Demo',

    description:
      'A full stack lead generation application created to make niche business prospecting faster and more organized.',

    businessProblem:
      'My wife worked in investment real estate and regularly needed lists of local businesses such as contractors, roofers, builders, and other potential buyers for distressed properties. Finding those prospects manually was repetitive and time consuming.',

    solution:
      'I originally built Lead Scraper around a Google Maps prospecting workflow so we could search a niche and location, collect potential leads, and turn them into an outreach list. The current application expands that idea with authentication, lead management, CSV importing, cleaning, deduplication, background jobs, storage, and export workflows.',

    technologies: [
      'React',
      'TypeScript',
      'Python',
      'FastAPI',
      'Supabase',
      'PostgreSQL',
      'Netlify',
      'Render',
    ],

    liveUrl: 'https://leadscraper2026.netlify.app/',

    previewUrl: 'https://leadscraper2026.netlify.app/',

    repoUrl: 'https://github.com/ZieglerCodes/lead-scraper',

    repoLabel: 'Source Code',

    previewMode: 'iframe',

    note: 'The current public search experience uses synthetic demo records. A licensed live data source would be required before using the application commercially.',
  },
];
