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
    image: '/business-expert-impact-720.png',
    imageSrcSet:
      '/business-expert-impact-720.png 720w, /business-expert-impact-1080.png 1080w',
    hasLink: true,
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
    summary:
      'Built and scaled a YouTube channel into a major acquisition route through positioning, scripts, topic planning and promotion.',
  },
  {
    title: 'LinkedIn Audience',
    type: 'SOCIAL MEDIA',
    year: 'Ongoing',
    status: '0 to 7,000+ followers',
    tags: ['LinkedIn', 'Thought Leadership', 'Growth'],
    image: '/linkedin-audience-impact.png',
    hasLink: true,
    summary:
      'Developed clear content themes and publishing rhythms that improved reach, traffic and qualified engagement.',
  },
  {
    title: 'Currency Expert Lifecycle',
    type: 'Website marketing',
    year: 'Ongoing',
    status: 'SEO, CRO and content',
    tags: ['SEO', 'CRO', 'Lead Gen'],
    hasLink: true,
    summary:
      'Oversaw positioning, website optimisation, educational assets and product promotion for a specialist financial-services brand.',
  },
  {
    title: 'CRM & Email Automation',
    type: 'Lifecycle',
    year: 'Ongoing',
    status: 'Nurture workflows',
    tags: ['CRM', 'Email', 'Automation'],
    summary:
      'Built segmentation and automation workflows to improve lead nurturing, campaign visibility and follow-up performance.',
  },
  {
    title: 'Paid Search Lead Engine',
    type: 'Performance marketing',
    year: 'Ongoing',
    status: 'Campaign execution',
    tags: ['Paid Media', 'Lead Gen', 'CRO'],
    summary:
      'Planned, launched and refined paid-search campaigns that connect high-intent audiences with clearer landing pages and stronger conversion paths.',
  },
];

const capabilities = [
  'B2B content marketing',
  'Thought leadership',
  'Lead generation',
  'Copywriting and brand voice',
  'Technical topic translation',
  'LinkedIn content strategy',
  'Email nurture strategy',
  'CRM and automation',
  'SEO and content optimisation',
  'Paid media execution',
  'Marketing analytics',
  'PR and media relations',
];

const principles = [
  {
    title: 'Make expertise legible',
    text: 'Specialist knowledge becomes valuable when audiences can understand, trust and act on it.',
  },
  {
    title: 'Connect the channel mix',
    text: 'PR, content, social, video, email and web work best when they reinforce one clear commercial story.',
  },
  {
    title: 'Measure what moves',
    text: 'Strong campaigns balance editorial judgement with visibility into traffic, engagement and conversion quality.',
  },
];

const metrics = [
  { value: '4', label: 'Financial Services Websites Managed' },
  { value: '25,000+', label: 'Monthly YouTube Views' },
  { value: '7,000+', label: 'Social Media Audience Built From Scratch' },
];

const app = document.querySelector('#app');

function renderWork(filter = 'All') {
  const filtered = filter === 'All' ? work : work.filter((item) => item.tags.includes(filter));
  return filtered
    .map(
      (item) => `
        <article class="project-card">
          <div class="project-card__media" aria-hidden="true">
            ${
              item.image
                ? `<img src="${item.image}" ${item.imageSrcSet ? `srcset="${item.imageSrcSet}" sizes="(max-width: 860px) calc(100vw - 2rem), 361px"` : ''} alt="" />`
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
                ? `<a href="#" aria-label="Check out ${item.title}">CHECK IT OUT</a>`
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
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
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
          <strong>360 Marketing Strategy for Trust-Led Sectors</strong>
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
          ${renderWork()}
        </div>
      </section>

      <section class="section split-section" aria-labelledby="capabilities-title">
        <div>
          <p class="eyebrow">Capabilities</p>
          <h2 id="capabilities-title">Strategy, content and channels in one loop.</h2>
        </div>
        <div class="capability-list">
          ${capabilities.map((item) => `<span>${item}</span>`).join('')}
        </div>
      </section>

      <section class="section" id="approach" aria-labelledby="approach-title">
        <div class="section__header">
          <p class="eyebrow">Approach</p>
          <h2 id="approach-title">How the work gets sharper.</h2>
        </div>
        <div class="principle-grid">
          ${principles
            .map(
              (item) => `
                <article class="principle">
                  <h3>${item.title}</h3>
                  <p>${item.text}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="contact" id="contact" aria-labelledby="contact-title">
        <p class="eyebrow">Contact</p>
        <h2 id="contact-title">Need complex expertise turned into clearer marketing?</h2>
        <a class="button button--primary" href="mailto:${profile.email}">${profile.email}</a>
      </section>
    </main>
  `;

}

render();
