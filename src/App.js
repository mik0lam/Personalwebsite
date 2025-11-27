import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrollDepth, setScrollDepth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const depth = window.scrollY + (windowHeight / 2);
      setScrollDepth(depth);
    };

    handleScroll(); // Initialize on mount
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
      {/* Fishing Line */}
      <div className="fishing-line-container">
        <div className="fishing-rod"></div>
        <svg className="fishing-line" style={{ height: `${scrollDepth + 100}px` }}>
          <line 
            x1="100" 
            y1="0" 
            x2="100" 
            y2={scrollDepth + 100}
            stroke="rgba(139, 69, 19, 0.6)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>
        <div 
          className="fishing-hook" 
          style={{ 
            top: `${scrollDepth + 80}px`,
            left: '100px'
          }}
        >
          <div className="hook-shape"></div>
        </div>
      </div>

      {/* Depth Indicator */}
      <div className="depth-indicator">
        <div className="depth-display">
          <div className="depth-number">{Math.round(scrollDepth)}m</div>
          <div className="depth-zone-label">{zone.toUpperCase()} ZONE</div>
        </div>
        <div className="depth-meter">
          <div className="depth-markers">
            <div className="marker" style={{ top: '0%' }}><span>0m</span></div>
            <div className="marker" style={{ top: '20%' }}><span>800m</span></div>
            <div className="marker" style={{ top: '40%' }}><span>1600m</span></div>
            <div className="marker" style={{ top: '60%' }}><span>2400m</span></div>
            <div className="marker" style={{ top: '80%' }}><span>3200m</span></div>
            <div className="marker" style={{ top: '100%' }}><span>4000m</span></div>
          </div>
          <div className="depth-fill" style={{ height: `${Math.min((scrollDepth / 4000) * 100, 100)}%` }}>
            <div className="depth-indicator-dot"></div>
          </div>
        </div>
        <div className="depth-stats">
          <div className="stat">
            <div className="stat-label">Pressure</div>
            <div className="stat-value">{Math.round(scrollDepth * 0.1)} atm</div>
          </div>
          <div className="stat">
            <div className="stat-label">Light</div>
            <div className="stat-value">{Math.max(0, 100 - Math.round(scrollDepth * 0.05))}%</div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 500}vh`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}></div>
        ))}
      </div>

      {/* Surface Zone - Hero */}
      <section className="zone surface-zone">
        <div className="sun"></div>
        <div className="waves"></div>
        
        {/* Surface Marine Life */}
        <div className="dolphin" style={{ top: '60%', left: '10%' }}></div>
        <div className="dolphin" style={{ top: '65%', left: '15%', animationDelay: '2s' }}></div>
        <div className="seagull" style={{ top: '20%', left: '70%' }}></div>
        <div className="seagull" style={{ top: '25%', left: '75%', animationDelay: '3s' }}></div>
        <div className="seagull" style={{ top: '30%', left: '80%', animationDelay: '1.5s' }}></div>
        
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
        {/* Twilight Marine Life */}
        <div className="tuna" style={{ top: '20%', left: '80%' }}></div>
        <div className="tuna" style={{ top: '25%', left: '85%', animationDelay: '2s' }}></div>
        <div className="swordfish" style={{ top: '70%', left: '10%' }}></div>
        <div className="small-fish-school" style={{ top: '40%', left: '5%' }}>
          <div className="small-fish"></div>
          <div className="small-fish"></div>
          <div className="small-fish"></div>
          <div className="small-fish"></div>
          <div className="small-fish"></div>
        </div>
        
        <div className="content">
          <h2 className="zone-title">EDUCATION</h2>
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
        </div>
      </section>

      {/* Midnight Zone - Experience */}
      <section className="zone midnight-zone">
        {/* Midnight Marine Life */}
        <div className="jellyfish" style={{ top: '15%', left: '15%' }}></div>
        <div className="jellyfish" style={{ top: '60%', right: '20%', animationDelay: '3s' }}></div>
        <div className="jellyfish" style={{ top: '80%', left: '70%', animationDelay: '5s' }}></div>
        <div className="squid" style={{ top: '40%', right: '10%' }}></div>
        <div className="lanternfish" style={{ top: '25%', left: '5%' }}></div>
        <div className="lanternfish" style={{ top: '70%', left: '10%', animationDelay: '4s' }}></div>
        
        <div className="content">
          <h2 className="zone-title"> EXPERIENCE</h2>
          
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
        </div>
      </section>

      {/* Abyssal Zone - Projects */}
      <section className="zone abyssal-zone">
        {/* Abyssal Marine Life */}
        <div className="anglerfish" style={{ top: '30%', right: '15%' }}></div>
        <div className="anglerfish" style={{ top: '65%', left: '10%', animationDelay: '4s' }}></div>
        <div className="giant-squid" style={{ top: '50%', left: '5%' }}></div>
        <div className="viperfish" style={{ top: '20%', left: '80%' }}></div>
        <div className="gulper-eel" style={{ top: '75%', right: '20%' }}></div>
        
        <div className="content">
          <h2 className="zone-title">PROJECTS</h2>
          
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
        </div>
      </section>

      {/* Hadal Zone - Skills */}
      <section className="zone hadal-zone">
        {/* Hadal Marine Life */}
        <div className="snailfish" style={{ top: '40%', left: '20%' }}></div>
        <div className="amphipod" style={{ top: '30%', right: '25%' }}></div>
        <div className="amphipod" style={{ top: '70%', left: '15%', animationDelay: '3s' }}></div>
        <div className="sea-cucumber" style={{ top: '85%', left: '40%' }}></div>
        
        <div className="content">
          <h2 className="zone-title">TECHNICAL SKILLS</h2>
          
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