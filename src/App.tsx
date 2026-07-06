import React, { useState } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import DsPlayground from './components/DsPlayground';
import Contact from './components/Contact';
import { Menu, X, ArrowUp, Briefcase, GraduationCap, Code2, Award, Mail, Phone, MapPin, Printer } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scrolling to show "back to top" button
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Background Grids & Blur Orbs */}
      <div className="bg-grid-overlay"></div>
      <div className="glow-orb-1"></div>
      <div className="glow-orb-2"></div>

      {/* Navigation Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(7, 11, 25, 0.75)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-color)',
        height: '70px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <a href="#home" style={{ 
            fontSize: '1.4rem', 
            fontWeight: 800, 
            color: 'var(--text-primary)', 
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}>
            <span style={{ 
              background: 'var(--gradient-cyan-blue)', 
              color: '#070b19', 
              padding: '0.1rem 0.5rem', 
              borderRadius: '6px',
              fontWeight: 800,
              fontSize: '1.1rem'
            }}>RS</span>
            <span className="text-gradient">Ravi Shankar</span>
          </a>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }} className="desktop-only">
            <a href="#home" style={navLinkStyle}>Home</a>
            <a href="#skills" style={navLinkStyle}>Skills</a>
            <a href="#projects" style={navLinkStyle}>Projects</a>
            <a href="#playground" style={navLinkStyle}>DS Playground</a>
            <a href="#certificates" style={navLinkStyle}>Certificates</a>
            <a href="#resume" style={navLinkStyle}>Resume</a>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>Hire Me</a>
          </nav>

          {/* Mobile Nav Toggle */}
          <button 
            onClick={toggleMobileMenu} 
            style={{ 
              display: 'none', 
              background: 'none', 
              border: 'none', 
              color: 'var(--text-primary)', 
              cursor: 'pointer' 
            }} 
            className="mobile-toggle-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          width: '100%',
          height: 'calc(100vh - 70px)',
          background: 'var(--bg-primary)',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          padding: '3rem 2rem',
          borderTop: '1px solid var(--border-color)'
        }}>
          <a href="#home" onClick={toggleMobileMenu} style={mobileNavLinkStyle}>Home</a>
          <a href="#skills" onClick={toggleMobileMenu} style={mobileNavLinkStyle}>Skills</a>
          <a href="#projects" onClick={toggleMobileMenu} style={mobileNavLinkStyle}>Projects</a>
          <a href="#playground" onClick={toggleMobileMenu} style={mobileNavLinkStyle}>DS Playground</a>
          <a href="#certificates" onClick={toggleMobileMenu} style={mobileNavLinkStyle}>Certificates</a>
          <a href="#resume" onClick={toggleMobileMenu} style={mobileNavLinkStyle}>Resume</a>
          <a href="#contact" onClick={toggleMobileMenu} className="btn btn-primary" style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}>
            Hire Me
          </a>
        </div>
      )}

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Skills />
        <Projects />
        <DsPlayground />
        <Certificates />

        {/* Dedicated Resume Section */}
        <section id="resume" className="section container">
          <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '0.5rem' }}>
              My <span className="text-gradient">Resume</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Detailed academic history and competencies. Print or view standard layout.
            </p>
          </div>

          <div className="glass-panel print-container" style={{ padding: '3rem' }}>
            {/* Resume Header */}
            <div style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)' }}>Vaila Ravi Shankar</h3>
                <p style={{ color: 'var(--accent-cyan)', fontSize: '1rem', fontWeight: 600, marginTop: '0.2rem' }}>Data Science Undergraduate & Developer</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.85rem', color: 'var(--text-secondary)', minWidth: '220px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Mail size={14} /> vailaravi2005@gmail.com</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Phone size={14} /> +91 93470 51424</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><MapPin size={14} /> Hyderabad, Telangana, India</span>
              </div>
            </div>

            {/* Resume Body */}
            <div className="grid-cols-2" style={{ alignItems: 'flex-start', gap: '3rem' }}>
              {/* Left Column (Education & Projects overview) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                
                {/* Education */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', color: 'var(--accent-purple)' }}>
                    <GraduationCap size={22} />
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Education</h4>
                  </div>
                  <div style={{ borderLeft: '2px solid var(--border-color)', paddingLeft: '1.25rem', marginLeft: '0.5rem' }}>
                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontWeight: 600, color: 'var(--text-primary)' }}>
                        <span>Anurag University</span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Hyderabad, TS</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontSize: '0.9rem', color: 'var(--accent-cyan)', margin: '0.2rem 0' }}>
                        <span>B.Tech in Data Science</span>
                        <span style={{ color: 'var(--text-muted)' }}>Aug. 2023 – May 2027</span>
                      </div>
                      <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-secondary)' }}>CGPA: 8.11</p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                        <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Statistics for Data Science, Database Management Systems (DBMS), Machine Learning Fundamentals, SQL.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Coursework details */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', color: 'var(--accent-cyan)' }}>
                    <Code2 size={22} />
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Core CS Concepts</h4>
                  </div>
                  <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem' }}>
                    <li>Object-Oriented Programming (OOP)</li>
                    <li>Data Structures & Algorithms (DSA)</li>
                    <li>Relational Database Management (RDBMS / SQL)</li>
                    <li>Exploratory Data Analysis (EDA) & Data Cleaning</li>
                    <li>Software Engineering & Version Control (Git)</li>
                  </ul>
                </div>

              </div>

              {/* Right Column (Skills Summary & Summary Statement) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                
                {/* Summary Statement */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', color: 'var(--accent-cyan)' }}>
                    <Briefcase size={22} />
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Profile</h4>
                  </div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    Data Science undergraduate with hands-on experience in Python, full-stack web development, and data analysis. Proficient in Python (Pandas, NumPy), React.js, and Git. Built end-to-end projects involving authentication, dynamic data, and search functionality. Currently deepening skills in machine learning and exploratory data analysis. Seeking entry-level roles in data analytics or software development.
                  </p>
                </div>

                {/* Skills Summary List */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', color: 'var(--accent-purple)' }}>
                    <Award size={22} />
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Competencies</h4>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>Languages:</strong>
                      <span style={{ color: 'var(--text-secondary)', marginLeft: '0.4rem' }}>Python, Java, C, JavaScript, SQL, HTML, CSS</span>
                    </div>
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>Data Science:</strong>
                      <span style={{ color: 'var(--text-secondary)', marginLeft: '0.4rem' }}>Pandas, NumPy, Matplotlib, Data Cleaning, EDA, Data Visualization</span>
                    </div>
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>Machine Learning:</strong>
                      <span style={{ color: 'var(--text-secondary)', marginLeft: '0.4rem' }}>Supervised & Unsupervised Learning, Feature Engineering, Model Evaluation</span>
                    </div>
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>Frameworks:</strong>
                      <span style={{ color: 'var(--text-secondary)', marginLeft: '0.4rem' }}>React.js, Next.js, TypeScript, React Native</span>
                    </div>
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>Tools:</strong>
                      <span style={{ color: 'var(--text-secondary)', marginLeft: '0.4rem' }}>Git, GitHub, VS Code, Jupyter Notebook</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div style={{ 
              marginTop: '3rem', 
              paddingTop: '1.5rem', 
              borderTop: '1px solid var(--border-color)', 
              display: 'flex', 
              justifyContent: 'center'
            }} className="no-print">
              <button 
                onClick={handlePrintResume} 
                className="btn btn-secondary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Printer size={16} /> Print/Save Resume PDF
              </button>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      {/* Footer */}
      <footer style={{
        background: 'rgba(5, 8, 17, 0.95)',
        borderTop: '1px solid var(--border-color)',
        padding: '3rem 0 2rem 0',
        fontSize: '0.9rem',
        color: 'var(--text-secondary)'
      }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://github.com/Ravi20051" target="_blank" rel="noreferrer" style={{ color: 'inherit' }} className="glow-hover">
              GitHub
            </a>
            <a href="mailto:vailaravi2005@gmail.com" style={{ color: 'inherit' }} className="glow-hover">
              Email
            </a>
            <a href="#home" style={{ color: 'inherit' }}>
              Back to Top
            </a>
          </div>
          <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} Vaila Ravi Shankar. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            background: 'var(--gradient-cyan-blue)',
            border: 'none',
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            color: '#070b19',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0, 242, 254, 0.3)',
            zIndex: 99,
            transition: 'transform var(--transition-fast)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Global Print Styling & Desktop Media Queries */}
      <style>{`
        /* Desktop styles overrides */
        @media (min-width: 969px) {
          .mobile-toggle-btn {
            display: none !important;
          }
        }
        @media (max-width: 968px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: block !important;
          }
        }
        
        /* Print Styles */
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          .no-print, header, footer, button, .bg-grid-overlay, [class*="glow-orb"] {
            display: none !important;
          }
          .print-container {
            border: none !important;
            box-shadow: none !important;
            background: transparent !important;
            padding: 0 !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            color: black !important;
          }
          .print-container * {
            color: black !important;
            text-shadow: none !important;
          }
          .text-gradient {
            background: none !important;
            -webkit-text-fill-color: black !important;
            color: black !important;
          }
        }
      `}</style>
    </div>
  );
}

const navLinkStyle: React.CSSProperties = {
  fontSize: '0.95rem',
  color: 'var(--text-secondary)',
  textDecoration: 'none',
  fontWeight: 500,
  transition: 'color var(--transition-fast)'
};

const mobileNavLinkStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  color: 'var(--text-primary)',
  textDecoration: 'none',
  fontWeight: 600
};
