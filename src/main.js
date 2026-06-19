import './styles.css';

const profile = {
  name: 'Théo Cristofari',
  role: 'B2B marketing specialist',
  location: 'Haslemere, UK',
  email: 'theo.cristofari@gmail.com',
  intro:
    'I bring strategy, storytelling and hands-on execution together to make brands, campaigns and ideas clearer, stronger and more visible.',
  availability:
    'Currently Head of PR & Marketing at Business Expert Ltd, leading integrated marketing across four financial-services websites.',
};

const work = [
  {
    title: 'Business Expert',
    type: 'STRATEGY',
    year: '2021 - Present',
    status: 'Head of PR & Marketing',
    tags: ['B2B', 'Content', 'Lead Gen'],
    image: '/business-expert-card-native-1x.png',
    imageSrcSet:
      '/business-expert-card-native-1x.png 1x, /business-expert-card-native-2x.png 2x',
    hasLink: true,
    url: 'https://www.businessexpert.co.uk/',
    summary:
      'Leading Business Expert’s 360 marketing approach, spanning content strategy, PR, social, email, YouTube, UX and lead-generation journeys.',
  },
  {
    title: 'YouTube Channel',
    type: 'Acquisition',
    year: 'Ongoing',
    status: '~25k monthly views',
    tags: ['Video', 'Content', 'Growth'],
    image: '/youtube-impact.png',
    hasLink: true,
    url: 'https://www.youtube.com/@BusinessExpertOfficial/videos',
    summary:
      'Built and scaled a YouTube channel into a major acquisition route through positioning, scripts, topic planning and promotion.',
  },
  {
    title: 'LinkedIn Audience',
    type: 'SOCIAL MEDIA',
    year: 'Ongoing',
    status: '0 to 7,000+ followers',
    tags: ['LinkedIn', 'Thought Leadership', 'Growth'],
    image: '/linkedin-audience-card-native-1x.png',
    imageSrcSet:
      '/linkedin-audience-card-native-1x.png 1x, /linkedin-audience-card-native-2x.png 2x',
    hasLink: true,
    url: 'https://www.linkedin.com/company/business-expert/',
    summary:
      'Developed clear content themes and publishing rhythms that improved reach, traffic and qualified engagement.',
  },
  {
    title: 'Currency Expert',
    type: 'STRATEGY',
    year: 'Ongoing',
    status: 'SEO, CRO and content',
    tags: ['SEO', 'CRO', 'Lead Gen'],
    image: '/currency-expert-card-native-1x.png',
    imageSrcSet:
      '/currency-expert-card-native-1x.png 1x, /currency-expert-card-native-2x.png 2x',
    hasLink: true,
    url: 'https://www.currencyexpert.com/',
    summary:
      'Designed the Currency Expert website from scratch, shaping the structure, UX, positioning and educational content.',
  },
  {
    title: 'AABRS',
    type: 'Design & Content',
    year: 'Ongoing',
    status: 'Website redesign',
    tags: ['Design', 'Content', 'UX'],
    image: '/aabrs-impact.png',
    hasLink: true,
    url: 'https://www.aabrs.com/',
    summary:
      'Overseeing the redesign of AABRS, a regulated insolvency advice website.',
  },
  {
    title: 'Company Debt',
    type: 'CONTENT',
    year: 'Ongoing',
    status: 'SEO, AEO and UX',
    tags: ['SEO', 'AEO', 'Content'],
    image: '/company-debt-impact-1x.png',
    imageSrcSet: '/company-debt-impact-1x.png 1x, /company-debt-impact-2x.png 2x',
    hasLink: true,
    url: 'https://www.companydebt.com/',
    summary:
      'Overseeing SEO, AEO and content actualisation, leading the UX and conversion efforts, overseeing the production of motion design didactic video content.',
  },
  {
    title: 'Save the Pub',
    type: 'CAMPAIGN',
    year: '2021',
    status: 'PR campaign',
    tags: ['PR', 'Campaign', 'Press'],
    image: '/pub-campaign-impact-1x.png',
    imageSrcSet: '/pub-campaign-impact-1x.png 1x, /pub-campaign-impact-2x.png 2x',
    hasLink: true,
    url: 'https://www.mirror.co.uk/news/uk-news/brit-punters-need-drink-124-24116194',
    summary:
      'Launched a PR campaign for CompanyDebt, stating every Brit would need to drink 124 pints to help save the pub industry after COVID. It earned thousands of shares and hundreds of press coverages, including the Daily Star homepage.',
  },
  {
    title: 'Banks as Dogs',
    type: 'VIRAL',
    year: '2023',
    status: 'Social campaign',
    tags: ['Social', 'Viral', 'AI'],
    image: '/ai-banks-dogs-impact-1x.png',
    imageSrcSet: '/ai-banks-dogs-impact-1x.png 1x, /ai-banks-dogs-impact-2x.png 2x',
    hasLink: true,
    url: 'https://www.linkedin.com/posts/business-expert_ai-ai-midjourney-activity-7075391110017118208-dSkh?utm_source=share&utm_medium=member_desktop&rcm=ACoAABho9KIB6NcHE9oS93VUr47GFYL_KRMML3k',
    summary:
      'Jumped on the rising generative AI trend to picture our banking partners as dogs. Around 20,000 reactions and 1,000 reposts over two posts boosted our audience from about 300 followers to more than 7,000 almost overnight.',
  },
];

const capabilities = [
  'Marketing Strategy & Execution',
  'Go-to-Market Planning',
  'Brand Positioning & Messaging',
  'Audience Segmentation & Insights',
  'Customer & Funnel Analysis',
  'Conversion & Performance',
  'Landing Page & CRO Strategy',
  'PR & Media Relations',
  'Stakeholder & Reputation',
  'Cross-Channel Campaign',
  'Content Strategy & Editorial Planning',
  'Copywriting & Brand Voice',
  'Digital Marketing & Funnel',
  'Marketing Performance & Analytics',
  'Marketing Operations & KPI',
  'CRM & Marketing Automation',
  'Email Marketing Strategy',
  'SEO & Content Strategy',
  'SEO Tools (Ahrefs, SEMrush)',
  'CMS & Website Management',
  'Paid Media Strategy & Execution',
  'Cross-Channel Campaign Delivery',
];

const publicRelations = [
  {
    title: "Toulouse's 3rd Tube Line",
    type: 'STRATEGY',
    image: '/toulouse-tube-line-impact-1x.jpg',
    imageSrcSet:
      '/toulouse-tube-line-impact-1x.jpg 1x, /toulouse-tube-line-impact-2x.jpg 2x',
    summary:
      'Supported the project management team for two years on communication and consultation matters.',
  },
  {
    title: 'Media Coverage',
    type: 'Coming Soon',
    summary: 'Placeholder for a media coverage story.',
  },
  {
    title: 'Campaign Narrative',
    type: 'Coming Soon',
    summary: 'Placeholder for a campaign narrative.',
  },
];

const metrics = [
  { value: '4', label: 'Financial Services Websites Managed' },
  { value: '25,000+', label: 'Monthly YouTube Views' },
  { value: '7,000+', label: 'Social Media Audience Built From Scratch' },
];

const app = document.querySelector('#app');

function renderCards(items) {
  return items
    .map(
      (item) => `
        <article class="project-card">
          <div class="project-card__media" aria-hidden="true">
            ${
              item.image
                ? `<img src="${item.image}" ${item.imageSrcSet ? `srcset="${item.imageSrcSet}"` : ''} alt="" />`
                : ''
            }
          </div>
          <div class="project-card__body">
            <p class="project-card__brow">${item.type}</p>
            <h3>${item.title}</h3>
            <p>${item.summary}</p>
          </div>
          <div class="project-card__footer">
            ${
              item.hasLink
                ? `<a href="${item.url || '#'}" target="_blank" rel="noopener noreferrer" aria-label="Check out ${item.title}">CHECK IT OUT</a>`
                : ''
            }
          </div>
        </article>
      `,
    )
    .join('');
}

function render() {
  app.innerHTML = `
    <header class="site-header">
      <div class="site-header__inner">
        <a class="brand" href="#top" aria-label="${profile.name} home">
          <img src="/theocristofari-logo.png" alt="${profile.name}" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Marketing</a>
          <a href="#public-relations">Public Relations</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>

    <main id="top">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero__content">
          <p class="eyebrow">Marketing and Public Relations Specialist</p>
          <h1 id="hero-title">
            <span>PR Instincts.</span>
            <span class="hero-title__line">Marketing Engine.</span>
          </h1>
          <p class="hero__intro">${profile.intro}</p>
          <div class="hero__actions">
            <a class="button button--primary" href="#work">My Work</a>
            <a class="button button--secondary" href="#contact">Contact</a>
          </div>
        </div>
        <aside class="hero-aside" aria-label="Profile portrait">
          <div class="hero-portrait">
            <img src="/theo-cristofari.jpg" alt="Portrait of ${profile.name}" />
          </div>
        </aside>
      </section>

      <section class="hero-support" aria-label="Current focus and next steps">
        <div class="hero-panel">
          <span>Current focus</span>
          <strong>360 Marketing for Trust-Led Sectors</strong>
          <p>${profile.availability}</p>
        </div>
      </section>

      <section class="metrics" aria-label="Selected marketing results">
        ${metrics
          .map(
            (item) => `
              <div class="metric">
                <strong>${item.value}</strong>
                <span>${item.label}</span>
              </div>
            `,
          )
          .join('')}
      </section>

      <section class="section section--work" id="work" aria-labelledby="work-title">
        <div class="section__header">
          <p class="eyebrow">MARKETING</p>
          <h2 id="work-title">Turning Expertise into Demand.</h2>
        </div>
        <div class="project-grid" id="project-grid">
          ${renderCards(work)}
        </div>
      </section>

      <section class="section section--work" id="public-relations" aria-labelledby="public-relations-title">
        <div class="section__header">
          <p class="eyebrow">PUBLIC RELATIONS</p>
          <h2 id="public-relations-title">Shaping the Narrative.</h2>
        </div>
        <div class="project-grid">
          ${renderCards(publicRelations)}
        </div>
      </section>

      <section class="section split-section" aria-labelledby="capabilities-title">
        <div>
          <p class="eyebrow">Skills</p>
          <h2 id="capabilities-title">Strategy, Planning and Content. All in One Loop.</h2>
        </div>
        <div class="capability-list">
          ${capabilities.map((item) => `<span>${item}</span>`).join('')}
        </div>
      </section>

      <section class="contact" id="contact" aria-labelledby="contact-title">
        <p class="eyebrow">Contact</p>
        <h2 id="contact-title">So, Let's Work Together?</h2>
        <a class="button button--primary" href="mailto:${profile.email}">${profile.email}</a>
      </section>
    </main>
  `;

}

render();
