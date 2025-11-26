import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrollDepth, setScrollDepth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const depth = window.scrollY;
      setScrollDepth(depth);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getDepthZone = () => {
    if (scrollDepth < 800) return 'surface';
    if (scrollDepth < 1600) return 'twilight';
    if (scrollDepth < 2400) return 'midnight';
    if (scrollDepth < 3200) return 'abyssal';
    return 'hadal';
  };

  const zone = getDepthZone();

  return (
    <div className={`ocean-container ${zone}`}>
      {/* Depth Indicator */}
      <div className="depth-indicator">
        <div className="depth-meter">
          <div className="depth-fill" style={{ height: `${Math.min((scrollDepth / 4000) * 100, 100)}%` }}></div>
        </div>
        <span className="depth-label">{Math.round(scrollDepth)}m</span>
      </div>

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      {/* Surface Zone - Hero */}
      <section className="zone surface-zone">
        <div className="sun"></div>
        <div className="waves"></div>
        <div className="content hero-content">
          <h1 className="glitch" data-text="MICHAEL LAM">MICHAEL LAM</h1>
          <p className="subtitle">Computer Science @ RPI</p>
          <div className="contact-bubbles">
            <a href="mailto:lamm3@rpi.edu" className="bubble">📧 Email</a>
            <a href="https://linkedin.com/in/lammiko/" className="bubble">💼 LinkedIn</a>
            <a href="https://github.com/mik0lam" className="bubble">💻 GitHub</a>
          </div>
          <div className="scroll-hint">↓ Dive Deeper ↓</div>
        </div>
      </section>

      {/* Twilight Zone - Education */}
      <section className="zone twilight-zone">
        <div className="content">
          <h2 className="zone-title">🎓 EDUCATION</h2>
          <div className="card">
            <h3>Rensselaer Polytechnic Institute</h3>
            <p className="location">Troy, NY | Aug 2022 - May 2026</p>
            <p><strong>Bachelor of Science in Computer Science</strong> | GPA: 3.60</p>
            <ul>
              <li>Exchange Semester at Nanyang Technological University (NTU), Singapore - Summer 2025</li>
              <li>Studied cybersecurity, design, and systems thinking with cross-cultural collaboration</li>
              <li>Activities: Society of Asian Scientists and Engineers, Hong Kong Students Association (Executive Board)</li>
            </ul>
          </div>
          <div className="fish fish-1">🐟</div>
          <div className="fish fish-2">🐠</div>
        </div>
      </section>

      {/* Midnight Zone - Experience */}
      <section className="zone midnight-zone">
        <div className="content">
          <h2 className="zone-title">💼 EXPERIENCE</h2>
          
          <div className="card">
            <h3>Research Assistant</h3>
            <p className="location">Rensselaer Polytechnic Institute | Aug 2025 - Present</p>
            <ul>
              <li>Developed interactive application for Strength of Materials course using Python and FreeCAD's API</li>
              <li>Programmatically generated 3D models of beams and material shapes</li>
              <li>Integrated stress simulation workflows for visualizing distribution and deformation</li>
            </ul>
          </div>

          <div className="card">
            <h3>Data Analyst Intern</h3>
            <p className="location">Foundation Housing | Aug 2024 - May 2025</p>
            <ul>
              <li>Optimized lead management tracking 400+ tenants</li>
              <li>Performed market research across 4 neighborhoods</li>
              <li>Designed dashboard visualizing 5+ key metrics for data-driven decisions</li>
            </ul>
          </div>

          <div className="card">
            <h3>Summer Intern</h3>
            <p className="location">NYPD Police Academy | July 2022 - Aug 2022</p>
            <ul>
              <li>Organized data for 150+ students in police training</li>
              <li>Partnered with 8 team members on service initiatives</li>
              <li>Coordinated testing materials ensuring smooth examination processes</li>
            </ul>
          </div>

          <div className="jellyfish jellyfish-1">🎐</div>
          <div className="jellyfish jellyfish-2">🎐</div>
        </div>
      </section>

      {/* Abyssal Zone - Projects */}
      <section className="zone abyssal-zone">
        <div className="content">
          <h2 className="zone-title">🚀 PROJECTS</h2>
          
          <div className="card glow">
            <h3>Vaultify</h3>
            <p className="tech-stack">JavaScript, TypeScript, MongoDB, React, Node.js, Spotify API, OpenAI API</p>
            <p className="date">May 2024 - Aug 2024</p>
            <ul>
              <li>Full-stack web app with team of 4 using Agile methodologies</li>
              <li>Implemented Spotify OAuth integration for user account data</li>
              <li>Leveraged OpenAI's API to generate playlist covers based on mood scores</li>
            </ul>
          </div>

          <div className="card glow">
            <h3>Easy App</h3>
            <p className="tech-stack">React, TypeScript, Git</p>
            <p className="date">Sep 2023 - Dec 2023</p>
            <ul>
              <li>Chrome extension with team of 12 to streamline job applications</li>
              <li>Developed backend to parse PDFs and return sorted JSON data</li>
              <li>Automated population of application fields with resume data</li>
            </ul>
          </div>

          <div className="angler-fish">🐟💡</div>
        </div>
      </section>

      {/* Hadal Zone - Skills */}
      <section className="zone hadal-zone">
        <div className="content">
          <h2 className="zone-title">⚡ TECHNICAL SKILLS</h2>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-tags">
                <span>Java</span>
                <span>Python</span>
                <span>C/C++</span>
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>SQL</span>
                <span>HTML/CSS</span>
                <span>R</span>
                <span>MATLAB</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h3>Frameworks & Tools</h3>
              <div className="skill-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>Flask</span>
                <span>MongoDB</span>
                <span>Git</span>
                <span>JUnit</span>
                <span>JavaFX</span>
              </div>
            </div>
          </div>

          <p className="bottom-message">You've reached the depths. Thanks for diving in!</p>
        </div>
      </section>
    </div>
  );
}

export default App;