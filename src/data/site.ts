// ─────────────────────────────────────────────────────────────
//  EDIT ME — everything personal on the site lives in this file.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Lilly',
  title: 'Lilly — Front-end Developer',
  description:
    'Front-end developer with a QA mindset, building fast, reliable websites in custom code, WordPress and Webflow.',

  // TODO: your real address on your domain
  email: 'hello@lillywebalchemy.com',

  github: 'https://github.com/LiliLilou',
  // TODO: your LinkedIn profile URL
  linkedin: 'https://www.linkedin.com/in/YOUR-HANDLE/',

  // Put your CV at public/cv.pdf (or change the path). Leave '' to hide the button.
  cv: '/cv.pdf',

  // Put your photo at public/images/portrait.jpg. Leave '' to show the placeholder.
  portrait: '',

  // Contact form endpoint, e.g. a free Formspree form: 'https://formspree.io/f/xxxxxxx'.
  // Leave '' to hide the form and show only the email and links.
  formAction: '',
};

export const pillars = [
  {
    n: '01',
    title: 'Custom front-end',
    text: 'Hand-written HTML, CSS and JavaScript when control, speed or security matter most.',
  },
  {
    n: '02',
    title: 'WordPress',
    text: 'From editor-friendly blogs to server-level debugging, proxies, caching and custom MU plugins.',
  },
  {
    n: '03',
    title: 'Webflow',
    text: 'Rich interactions and responsive layouts, tested across seven breakpoints.',
  },
];

export const jobs = [
  {
    when: 'Aug – Oct 2026',
    role: 'Web Operations Specialist',
    where: 'Bold.one',
    focus: 'E-commerce purchase flows, internal hosting platform, domain cloning, Cloudflare and CDN',
  },
  {
    when: '2024 – 2026',
    role: 'WordPress Developer',
    where: 'Clariness',
    focus: 'WP Engine, site maintenance, troubleshooting, Elementor, DNS configuration',
  },
  {
    when: '2022 – 2024 · freelance 2025 – 2026',
    role: 'Founding team member, Developer + QA',
    where: 'Jungle Creatives',
    focus: 'Websites in WordPress, Webflow and custom code; QA, copy and SEO',
  },
];

export const skills = [
  { sym: 'Fe', n: '01', group: 'Core', tools: 'HTML, CSS, JavaScript, PHP for WordPress' },
  { sym: 'Wp', n: '02', group: 'CMS', tools: 'WordPress (WPML, Gutenberg, REST API, Elementor), Webflow' },
  { sym: 'Hs', n: '03', group: 'Hosting', tools: 'WP Engine, Hostinger, Cloudflare, CDN, DNS, reverse proxies, LiteSpeed' },
  { sym: 'Qa', n: '04', group: 'Quality', tools: 'QA checklists, 7-breakpoint testing, on-page SEO' },
  { sym: 'Db', n: '05', group: 'Debugging', tools: 'curl, HTTP headers, CORS, redirect chains' },
  { sym: 'Ec', n: '06', group: 'E-commerce', tools: 'Purchase and checkout flows' },
  { sym: 'Ai', n: '07', group: 'AI + tooling', tools: 'Claude via WordPress MCP, Git' },
  { sym: 'Cp', n: '08', group: 'Content', tools: 'Copywriting, Klaviyo email campaigns' },
];

export const hobbies = ['piano', 'dance', 'nature', 'books + films', 'running', 'kettlebells'];
