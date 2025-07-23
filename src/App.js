import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Mail, Linkedin, ChevronRight, ArrowDown } from 'lucide-react';
import './App.css';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const featuredProjects = [
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="header-container">
          <h1 className="logo">Michael Lam</h1>
          <nav className="nav">
            <a href="/about" className="nav-link">About</a>
            <a href="/projects" className="nav-link">Projects</a>
            <a href="/contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h2 className="hero-title">
              Hello, I am
              <span className="hero-gradient">Michael Lam</span>
            </h2>
            <p className="hero-subtitle">
              Current Rensselaer Polytechnic Institute Student, passionate about Software Engineering!
            </p>
          </div>
          
          <div className="hero-buttons">
            <a href="/projects" className="btn-primary">
              View My Work <ChevronRight size={20} />
            </a>
            <a href="/contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/mik0lam" className="social-link">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/lammiko" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="mailto:lamm3@rpi.edu" className="social-link">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <ArrowDown size={24} />
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="featured-work">
        <div className="container">
          <div className="section-header">
            <h3 className="section-title">Featured Work</h3>
            <p className="section-subtitle">A glimpse of what I've been building</p>
          </div>
          
          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay"></div>
                </div>
                
                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="view-all">
            <a href="/projects" className="view-all-link">
              View All Projects <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <div className="container">
          <h3 className="section-title">What I've Worked With</h3>
          
          <div className="skills-grid">
            <div className="skill-item">
              <div className="skill-icon skill-icon-blue">
                <div className="skill-icon-inner"></div>
              </div>
              <h4 className="skill-title">Languages</h4>
              <p className="skill-description">Python, C++/C, Javascript/TypeScript, Java</p>
            </div>
            
            <div className="skill-item">
              <div className="skill-icon skill-icon-purple">
                <div className="skill-icon-inner"></div>
              </div>
              <h4 className="skill-title">Frontend</h4>
              <p className="skill-description">React, TypeScript, Next.js</p>
            </div>
            
            <div className="skill-item">
              <div className="skill-icon skill-icon-green">
                <div className="skill-icon-inner"></div>
              </div>
              <h4 className="skill-title">Backend</h4>
              <p className="skill-description">Node.js, Express, MongoDB, Firebase, PostgreSQL(SQL)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 Your Name. Built with React and deployed on Vercel.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;