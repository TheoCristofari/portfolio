import './styles.css';

const profile = {
  name: 'Théo Cristofari',
  role: 'B2B marketing specialist',
  location: 'Haslemere, UK',
  email: 'theo.cristofari@gmail.com',
  intro:
    'I turn complex specialist knowledge into clear campaigns, content and channels that build authority, engagement and qualified demand.',
  availability:
    'Currently Head of PR & Marketing at Business Expert Ltd, leading integrated marketing across four financial-services websites.',
};

const work = [
  {
    title: 'Business Expert Ltd',
    type: 'Current role',
    year: '2021 - Present',
    status: 'Head of PR & Marketing',
    tags: ['B2B', 'Content', 'Lead Gen'],
    summary:
      'Lead integrated marketing and PR across four financial services websites, shaping content, campaigns, social, email and lead-generation journeys.',
  },
  {
    title: 'YouTube Growth Channel',
    type: 'Acquisition',
    year: 'Ongoing',
    status: '~25k monthly views',
    tags: ['Video', 'Content', 'Growth'],
    summary:
      'Built and scaled a YouTube channel into a major acquisition route through positioning, scripts, topic planning and promotion.',
  },
  {
    title: 'LinkedIn Audience Build',
    type: 'Social strategy',
    year: 'Ongoing',
    status: '0 to 7,000+ followers',
    tags: ['LinkedIn', 'Thought Leadership', 'Growth'],
    summary:
      'Developed clear content themes and publishing rhythms that improved reach, traffic and qualified engagement.',
  },
  {
    title: 'Currency Expert Lifecycle',
    type: 'Website marketing',
    year: 'Ongoing',
    status: 'SEO, CRO and content',
    tags: ['SEO', 'CRO', 'Lead Gen'],
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
    title: 'Public Stakeholder Comms',
    type: 'Previous experience',
    year: '2015 - 2020',
    status: 'PR and reputation',
    tags: ['PR', 'Stakeholders', 'Messaging'],
    summary:
      'Led communications for high-visibility public projects, translating technical, regulatory and sensitive topics into clear narratives.',
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
  { value: '4', label: 'Financial-services websites led' },
  { value: '~25k', label: 'Monthly YouTube views built' },
  { value: '7,000+', label: 'LinkedIn audience grown from zero' },
];

const app = document.querySelector('#app');

function renderWork(filter = 'All') {
  const filtered = filter === 'All' ? work : work.filter((item) => item.tags.includes(filter));
  return filtered
    .map(
      (item) => `
        <article class="project-card">
          <div class="project-card__meta">
            <span>${item.type}</span>
            <span>${item.year}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <div class="project-card__footer">
            <span>${item.status}</span>
            <span>${item.tags.slice(0, 2).join(' / ')}</span>
          </div>
        </article>
      `,
    )
    .join('');
}

function render() {
  const tags = ['All', ...new Set(work.flatMap((item) => item.tags))];

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
          <h1 id="hero-title">PR Instincts. Marketing Engine.</h1>
          <p class="hero__intro">${profile.intro}</p>
          <div class="hero__actions">
            <a class="button button--primary" href="#work">View impact</a>
            <a class="button button--secondary" href="mailto:${profile.email}">Start a conversation</a>
          </div>
        </div>
        <aside class="hero-aside" aria-label="Profile and current focus">
          <div class="hero-portrait">
            <img src="/theo-cristofari.jpg" alt="Portrait of ${profile.name}" />
          </div>
          <div class="hero-panel">
            <span>Current focus</span>
            <strong>Integrated B2B marketing for complex, trust-led sectors.</strong>
            <p>${profile.availability}</p>
          </div>
        </aside>
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
          <p class="eyebrow">Selected impact</p>
          <h2 id="work-title">Marketing work that turns complexity into demand.</h2>
        </div>
        <div class="filter-bar" role="group" aria-label="Filter projects">
          ${tags
            .map(
              (tag, index) => `
                <button class="filter-button${index === 0 ? ' is-active' : ''}" type="button" data-filter="${tag}">
                  ${tag}
                </button>
              `,
            )
            .join('')}
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

  document.querySelectorAll('.filter-button').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter-button').forEach((item) => item.classList.remove('is-active'));
      button.classList.add('is-active');
      document.querySelector('#project-grid').innerHTML = renderWork(button.dataset.filter);
    });
  });
}

render();
