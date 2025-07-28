import React, { useState, useEffect } from 'react';
// Import the Font Awesome CSS directly.  This makes the icon classes
// available globally without any additional configuration.  If you wish to
// customise which icons are loaded you can import individual SVGs from
// @fortawesome packages instead.
import '@fortawesome/fontawesome-free/css/all.min.css';

// Data used by the various sections of the page.  Feel free to adjust
// these arrays to reflect your own projects, social profiles, etc.
const socialLinks = [
  { icon: 'fa-brands fa-x-twitter', url: '#' },
  { icon: 'fa-brands fa-instagram', url: '#' },
  { icon: 'fa-brands fa-youtube', url: '#' },
  { icon: 'fa-brands fa-github', url: '#' },
];

const experiments = [
  {
    title: 'Generated',
    description: 'Wallpapers for mobile',
    icon: 'fa-solid fa-image',
    url: '#',
  },
  {
    title: 'Awesome AI',
    description: 'AI resource aggregator',
    icon: 'fa-solid fa-robot',
    url: '#',
  },
  {
    title: 'Untick',
    description: 'Tiny Chrome extension',
    icon: 'fa-solid fa-check-double',
    url: '#',
  },
];

const companies = ['Synack', 'Prisma', 'Checkr', 'Bonsly'];

const workItems = [
  {
    title: 'Awesome AI',
    description:
      'Had a stupid itch to build a Hacker News for AI in the style of Windows 95. So I did.',
    url: '#',
  },
  {
    title: 'A‑Barber',
    description:
      'Some branding, marketing design and web development for my dear sister‑in‑law.',
    url: '#',
  },
  {
    title: 'Õunaturg',
    description:
      'Designed, co‑built and sold a marketplace for selling second‑hand Apple products.',
    url: '#',
  },
];

// Greeting component returns a time‑appropriate message.  It only runs
// once on mount because we don’t need the message to update in real time.
function Greeting() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const hour = new Date().getHours();
    let g;
    if (hour >= 5 && hour < 12) {
      g = 'Good morning!';
    } else if (hour >= 12 && hour < 17) {
      g = 'Good afternoon!';
    } else if (hour >= 17 && hour < 22) {
      g = 'Good evening!';
    } else {
      g = 'Good night!';
    }
    setMessage(g);
  }, []);
  return <div className="greeting">{message}</div>;
}

function About() {
  return (
    <div className="card about">
      <h2>
        <span>About me</span>
      </h2>
      <p>
        I’m a nerd from Estonia working as a designer &amp; developer, building all
        sorts of interesting and dumb ideas. I like to play with cameras, nerd
        over cool space rockets and learn more about math and artificial
        intelligence.
      </p>
      {/* Placeholder signature block – you can replace this with an actual image */}
      <div className="signature"></div>
      <div>
        <span style={{ fontWeight: 600 }}>Find me at</span>
        <div className="social-links">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Portrait() {
  // The portrait image lives in src/assets and is imported below.  When using
  // Create React App or a similar bundler, imported images are processed and
  // the resulting URL is substituted at build time.
  // eslint-disable-next-line import/no-webpack-loader-syntax
  const profile = require('./assets/profile.png');
  return (
    <div className="card portrait">
      <img src={profile} alt="Profile portrait" />
    </div>
  );
}

function ExperimentsSection() {
  return (
    <div className="card experiments">
      <h3>
        <i className="fa-solid fa-flask" style={{ color: 'var(--accent)' }}></i>
        <span>Experiments</span>
      </h3>
      {experiments.map((item, idx) => (
        <a
          key={idx}
          href={item.url}
          className="experiment-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={item.icon}></i>
          <div>
            <div className="experiment-title">{item.title}</div>
            <div className="experiment-desc">{item.description}</div>
          </div>
        </a>
      ))}
    </div>
  );
}

function RecentFavorite() {
  return (
    <div className="card">
      <h3>
        <i className="fa-solid fa-music" style={{ color: 'var(--accent)' }}></i>
        <span>Recent favorite</span>
      </h3>
      <iframe
        style={{ borderRadius: '0.5rem' }}
        src="https://open.spotify.com/embed/track/3X1qoE1YRaSXGqG0CEXVey?utm_source=generator&theme=0"
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify embed"
      ></iframe>
    </div>
  );
}

function CompaniesSection() {
  return (
    <div className="card companies">
      <h3>
        <i className="fa-solid fa-building" style={{ color: 'var(--accent)' }}></i>
        <span>Companies I’ve worked with</span>
      </h3>
      <div className="company-logos">
        {companies.map((c, idx) => (
          <div
            key={idx}
            style={{ fontSize: '1rem', fontWeight: 600, opacity: 0.6 }}
          >
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}

function Newsletter() {
  function handleSubmit(e) {
    e.preventDefault();
    // In a real application you’d send the email address to your backend
    // service.  Here we simply show an alert as a placeholder.
    alert('Thank you for subscribing!');
  }
  return (
    <div className="card newsletter">
      <h3>
        <i className="fa-solid fa-newspaper" style={{ color: 'var(--accent)' }}></i>
        <span>Articles coming soon.</span>
      </h3>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input type="email" placeholder="your@email.com" required />
        <button type="submit">Stay up to date</button>
      </form>
    </div>
  );
}

function WorkSection() {
  return (
    <div
      className="card work"
      style={{ backgroundColor: 'transparent', boxShadow: 'none', padding: 0 }}
    >
      <h3>
        <i className="fa-solid fa-briefcase" style={{ color: 'var(--accent)' }}></i>
        <span>Work</span>
      </h3>
      <div className="work-grid">
        {workItems.map((item, idx) => (
          <div key={idx} className="work-item">
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
            <button onClick={() => window.open(item.url, '_blank')}>View more</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      Have an interesting, stupid or crazy idea you’d like some help building?{' '}
      <a href="#">Let’s talk.</a>
      <br />
      2023 © Kuldar Kalvik
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1 className="header-title">
          kuldar
          <span style={{ color: 'var(--accent)' }}>.</span>
        </h1>
        <Greeting />
      </div>
      {/* First row: About, Portrait, Experiments */}
      <div className="section">
        <About />
        <Portrait />
        <ExperimentsSection />
      </div>
      {/* Second row: Recent favorite, Companies, Newsletter */}
      <div className="section">
        <RecentFavorite />
        <CompaniesSection />
        <Newsletter />
      </div>
      {/* Third row: Work */}
      <div className="section">
        <WorkSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;