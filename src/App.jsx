
import { useState } from "react";
import "./App.css";
import Contact from "./Contact";

const projects = [
  {
    number: "01",
    title: "CampusConnect",
    category: "FULL STACK WEB DEVELOPMENT",
    description:
      "A student-focused platform designed to bring campus connections, communication, and learning resources together.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    symbol: "🎓",
    color: "violet",
  },
  {
    number: "02",
    title: "Online Voting System",
    category: "WEB DEVELOPMENT",
    description:
      "A web-based voting project focused on providing a simple interface for participating in elections.",
    tags: ["HTML", "CSS", "JavaScript"],
    symbol: "🗳️",
    color: "pink",
  },
  {
    number: "03",
    title: "ChangeGuard AI",
    category: "AI / DEVELOPER TOOLS",
    description:
      "A concept for understanding the potential impact of code changes, affected files, and testing requirements before release.",
    tags: ["AI", "Code Analysis", "Testing"],
    symbol: "🛡️",
    color: "blue",
  },
  {
    number: "04",
    title: "Digital Thermometer",
    category: "HARDWARE / EMBEDDED SYSTEMS",
    description:
      "A temperature measurement project. Add your actual hardware, sensor, and implementation details here.",
    tags: ["Electronics", "Temperature", "Measurement"],
    symbol: "🌡️",
    color: "orange",
  },
];

const skills = [
  { name: "C++", level: "Programming" },
  { name: "Python", level: "Programming" },
  { name: "HTML", level: "Web development" },
  { name: "CSS", level: "Web development" },
  { name: "JavaScript", level: "Web development" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-icon">M</span>
          <span>
            manusha<span className="purple-text">.dev</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a href={href} key={label} onClick={closeMenu}>
              {label}
            </a>
          ))}

          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's connect ↗
          </a>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              B.TECH CSE STUDENT · CLASS OF 2028
            </div>

            <p className="eyebrow">HELLO, WORLD! I'M</p>

            <h1>
              Manusha
              <br />
              <span className="gradient-text">VM.</span>
            </h1>

            <h2 className="hero-role">
              Student Developer <span className="role-divider">/</span>{" "}
              <span className="muted-text">Future Engineer</span>
            </h2>

            <p className="hero-description">
              Exploring the world of technology, building web projects, and
              turning ideas into meaningful digital experiences.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                Explore my work <span>↗</span>
              </a>

              <a href="#about" className="button button-secondary">
                More about me
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/vmmanusha-beep"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <span>·</span>

              <a
                href="https://www.linkedin.com/in/manusha-v-m-b04348334/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <span>·</span>

              <a href="mailto:vmmanusha@gmail.com">Email ↗</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="profile-card">
              <div className="profile-top">
                <span className="window-dot red" />
                <span className="window-dot yellow" />
                <span className="window-dot green" />
                <span className="profile-label">ABOUT_ME.exe</span>
              </div>

              <div className="profile-art">
                {!photoError ? (
                  <img
                    src="/profile.jpg"
                    alt="Portrait of Manusha VM"
                    className="profile-photo"
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  <div className="avatar-placeholder">
                    <span>MV</span>
                    <small>YOUR PHOTO HERE</small>
                  </div>
                )}
              </div>

              <div className="profile-info">
                <span className="code-label">&lt;developer /&gt;</span>
                <h3>Manusha VM</h3>
                <p>Learning · Building · Growing</p>
              </div>

              <div className="floating-badge badge-top">
                <span>✦</span> Creative thinker
              </div>

              <div className="floating-badge badge-bottom">
                <span>⌘</span> Code with curiosity
              </div>
            </div>

            <div className="decorative-star star-one">✳</div>
            <div className="decorative-star star-two">✦</div>
          </div>

          <a href="#about" className="scroll-indicator">
            <span className="scroll-line" />
            SCROLL TO EXPLORE
          </a>
        </section>

        {/* ABOUT SECTION */}
        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 — GET TO KNOW ME</p>
            <h2>
              A little about <span className="gradient-text">myself.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p className="large-copy">
                I'm a Computer Science student who loves exploring how
                technology can turn ideas into real-world solutions.
              </p>

              <p>
                Currently pursuing my B.Tech in Computer Science and
                Engineering at CMR University, Bangalore. I'm developing my
                programming and web development skills through hands-on
                projects and continuous learning.
              </p>

              <p>
                My goal is to keep learning, create useful digital experiences,
                and grow into a skilled software professional.
              </p>
            </div>

            <div className="education-card">
              <span className="card-icon">🎓</span>
              <p className="eyebrow">MY EDUCATION</p>
              <h3>B.Tech in CSE</h3>
              <p className="muted-text">CMR University</p>

              <div className="education-divider" />

              <div className="education-details">
                <span>Location</span>
                <strong>Bangalore, India</strong>
              </div>

              <div className="education-details">
                <span>Graduation</span>
                <strong>2028</strong>
              </div>

              <div className="education-details">
                <span>Current role</span>
                <strong>Student Developer</strong>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">02 — WHAT I WORK WITH</p>
            <h2>
              My tech <span className="gradient-text">toolkit.</span>
            </h2>

            <p className="section-subtitle">
              Languages and technologies I'm learning and practising.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill.name}>
                <span className={`skill-number skill-${index + 1}`}>
                  0{index + 1}
                </span>

                <div>
                  <h3>{skill.name}</h3>
                  <p>{skill.level}</p>
                </div>

                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>

          <div className="learning-note">
            <span className="learning-icon">✳</span>
            <p>
              <strong>Always learning.</strong> Every project is an opportunity
              to understand something new and improve my skills.
            </p>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="section projects-section" id="projects">
          <div className="projects-heading">
            <div className="section-heading">
              <p className="eyebrow">03 — THINGS I'VE WORKED ON</p>
              <h2>
                Selected <span className="gradient-text">projects.</span>
              </h2>
            </div>

            <span className="project-count">04 PROJECTS</span>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`project-card project-${project.color}`}
                key={project.number}
              >
                <div className="project-card-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-symbol">{project.symbol}</span>
                </div>

                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-card-bottom">
                  <span>PERSONAL / ACADEMIC WORK</span>
                  <span className="project-arrow">↗</span>
                </div>
              </article>
            ))}
          </div>

          <p className="projects-footnote">
            Project descriptions and technology tags can be updated to reflect
            your actual implementations.
          </p>
        </section>

        {/* CONTACT SECTION */}
        <section className="section" id="contact">
          <Contact />

          <div className="contact-links">
            <a href="mailto:vmmanusha@gmail.com">
              <span>Email</span>
              <strong>vmmanusha@gmail.com ↗</strong>
            </a>

            <a
              href="https://github.com/vmmanusha-beep"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              <strong>vmmanusha-beep ↗</strong>
            </a>

            <a
              href="https://www.linkedin.com/in/manusha-v-m-b04348334/"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <strong>Connect with me ↗</strong>
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="brand footer-brand">
          <span className="brand-icon">M</span>
          <span>
            manusha<span className="purple-text">.dev</span>
          </span>
        </a>

        <p>Designed & built with curiosity by Manusha VM.</p>

        <a href="#home" className="back-to-top">
          BACK TO TOP ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
