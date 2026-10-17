export const site = {
  name: 'Adam Ziegler',
  initials: 'AZ',
  role: 'Software Engineer',

  email: 'adam.ziegler1993@gmail.com',

  phoneDisplay: '(281) 475-9927',
  phoneE164: '+12814759927',

  githubUrl: 'https://github.com/ZieglerCodes',

  linkedinUrl: 'https://www.linkedin.com/in/therealadamziegler/',
} as const;

const emailSubject = 'Software Engineering Opportunity';

const emailBody = `Hi Adam,

I came across your software engineering portfolio and wanted to reach out.

`;

export const emailHref =
  `mailto:${site.email}` +
  `?subject=${encodeURIComponent(emailSubject)}` +
  `&body=${encodeURIComponent(emailBody)}`;

export const phoneHref = `tel:${site.phoneE164}`;
