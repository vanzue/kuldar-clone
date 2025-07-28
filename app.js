/*
 * Main React application for the Kuldar clone.  Each section of the page is
 * implemented as a separate component for clarity.  Data such as the list
 * of experiments, social links and work items is declared up front and
 * passed to the corresponding components.  A simple effect determines
 * the appropriate greeting based on the current hour.
 */

const { useState, useEffect } = React;

/*
 * Compute a greeting based on the current time of day.  The message is
 * calculated once on mount and stored in component state.  If you wanted
 * the greeting to update in real time you could add a timer, but for this
 * static site a single calculation is sufficient.
 */
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

/*
 * A simple list of social links.  Each entry defines an icon and a URL.
 * The icons use Font Awesome classes defined in index.html.  You can
 * replace the hrefs with your actual profiles if desired.
 */
const socialLinks = [
  { icon: 'fa-brands fa-x-twitter', url: '#' },
  { icon: 'fa-brands fa-instagram', url: '#' },
  { icon: 'fa-brands fa-youtube', url: '#' },
  { icon: 'fa-brands fa-github', url: '#' },
];

/*
 * Experiments displayed in the right column of the hero section.  Feel free
 * to adjust the titles, descriptions and icons to suit your own projects.
 */
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

/*
 * Companies the author has worked with.  In the original site these are
 * displayed as greyscale logos.  Here we simply show the company names,
 * but you could replace the strings with <img> tags pointing at your own
 * logo files if you have them available in the assets folder.
 */
const companies = ['Synack', 'Prisma', 'Checkr', 'Bonsly'];

/*
 * Work items that showcase past projects.  Each entry contains a title,
 * description and a URL.  Buttons in the UI link out to these URLs.
 */
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

function About() {
  return (
    <div className="card about">
      <h2>
        <span>About me</span>
      </h2>
      <p>
        I’m a nerd from Estonia working as a designer &amp; developer, building all sorts
        of interesting and dumb ideas. I like to play with cameras, nerd over cool
        space rockets and learn more about math and artificial intelligence.
      </p>
      {/* Placeholder signature block – you can replace this with an actual image */}
      <div className="signature"></div>
      <div>
        <span style={{ fontWeight: 600 }}>Find me at</span>
        <div className="social-links">
          {socialLinks.map((link, idx) => (
            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Portrait() {
  return (
    <div className="card portrait">
      {/* Load the portrait image from the repository root.  We avoid an
         assets subdirectory here because GitHub’s web upload UI makes it
         cumbersome to upload nested folders.  If you later reorganize
         files, update this path accordingly. */}
      <img src="./profile.png" alt="Profile portrait" />
    </div>
  );
}

function Experiments() {
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
      {/* Embed a Spotify player for the track. Replace the src with a track of your choice. */}
      <iframe
        style={{ borderRadius: '0.5rem' }}
        src="https://open.spotify.com/embed/track/3X1qoE1YRaSXGqG0CEXVey?utm_source=generator&theme=0"
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

function Companies() {
  return (
    <div className="card companies">
      <h3>
        <i className="fa-solid fa-building" style={{ color: 'var(--accent)' }}></i>
        <span>Companies I’ve worked with</span>
      </h3>
      <div className="company-logos">
        {companies.map((c, idx) => (
          <div key={idx} style={{ fontSize: '1rem', fontWeight: 600, opacity: 0.6 }}>
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

function Work() {
  return (
    <div className="card work" style={{ backgroundColor: 'transparent', boxShadow: 'none', padding: 0 }}>
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
        <Experiments />
      </div>
      {/* Second row: Recent favorite, Companies, Newsletter */}
      <div className="section">
        <RecentFavorite />
        <Companies />
        <Newsletter />
      </div>
      {/* Third row: Work */}
      <div className="section">
        <Work />
      </div>
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));