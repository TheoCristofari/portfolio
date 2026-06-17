import './styles.css';

const profile = {
  name: 'Theo',
  role: 'Product-minded builder',
  location: 'London',
  email: 'hello@example.com',
  intro:
    'I design and build small, sharp digital products that make complex work feel calmer, faster, and more human.',
  availability: 'Available for select product, design, and frontend collaborations.',
};

const work = [
  {
    title: 'Orbit',
    type: 'Product',
    year: '2026',
    status: 'Live app',
    tags: ['Product', 'Frontend', 'Systems'],
    summary:
      'A focused workspace for organizing private boards, synced state, and lightweight authenticated workflows.',
  },
  {
    title: 'Signal Room',
    type: 'Interface',
    year: '2025',
    status: 'Prototype',
    tags: ['UX', 'Data', 'Prototype'],
    summary:
      'A compact operations dashboard for turning scattered updates into a scan-friendly daily command view.',
  },
  {
    title: 'Atlas Notes',
    type: 'Tool',
    year: '2025',
    status: 'Concept',
    tags: ['Writing', 'Research', 'Frontend'],
    summary:
      'A research notebook concept built around trails, sources, and the quiet satisfaction of finding the thread.',
  },
];

const capabilities = [
  'Frontend prototyping',
  'Product direction',
  'Interface systems',
  'Responsive web apps',
  'Interaction design',
  'AI-assisted workflows',
];

const principles = [
  {
    title: 'Useful first',
    text: 'Every surface should help someone do a real thing with less friction.',
  },
  {
    title: 'Polished, not precious',
    text: 'Details matter most when they make the product clearer, faster, or easier to trust.',
  },
  {
    title: 'Small loops',
    text: 'The best work gets better through visible iterations, not giant reveals.',
  },
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
      <a class="brand" href="#top" aria-label="${profile.name} home">
        <span class="brand__mark">T</span>
        <span>${profile.name}</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#approach">Approach</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero__content">
          <p class="eyebrow">${profile.location} / ${profile.role}</p>
          <h1 id="hero-title">${profile.name} builds thoughtful web products.</h1>
          <p class="hero__intro">${profile.intro}</p>
          <div class="hero__actions">
            <a class="button button--primary" href="#work">View work</a>
            <a class="button button--secondary" href="mailto:${profile.email}">Start a conversation</a>
          </div>
        </div>
        <aside class="hero-panel" aria-label="Current focus">
          <span>Current focus</span>
          <strong>Clean tools, clear systems, and interfaces that feel good to return to.</strong>
          <p>${profile.availability}</p>
        </aside>
      </section>

      <section class="section section--work" id="work" aria-labelledby="work-title">
        <div class="section__header">
          <p class="eyebrow">Selected work</p>
          <h2 id="work-title">Projects with a point of view.</h2>
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
          <h2 id="capabilities-title">From first shape to finished surface.</h2>
        </div>
        <div class="capability-list">
          ${capabilities.map((item) => `<span>${item}</span>`).join('')}
        </div>
      </section>

      <section class="section" id="approach" aria-labelledby="approach-title">
        <div class="section__header">
          <p class="eyebrow">Approach</p>
          <h2 id="approach-title">How the work tends to move.</h2>
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
        <h2 id="contact-title">Have something small, strange, or ambitious to build?</h2>
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
