import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  const titles = [
    "Data Science Undergraduate",
    "Full-Stack Web Developer",
    "Machine Learning Enthusiast"
  ];
  
  const [titleIdx, setTitleIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: any;
    const fullText = titles[titleIdx];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(prev => prev.slice(0, -1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setTitleIdx(prev => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIdx]);

  return (
    <section id="home" className="section container" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px' }}>
          
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            padding: '0.4rem 1rem', 
            borderRadius: '50px',
            background: 'rgba(0, 242, 254, 0.05)',
            border: '1px solid rgba(0, 242, 254, 0.15)',
            color: 'var(--accent-cyan)',
            fontSize: '0.85rem',
            fontWeight: 600,
            width: 'fit-content'
          }}>
            <span style={{ 
              width: '8px', 
              height: '8px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--accent-cyan)',
              boxShadow: '0 0 8px var(--accent-cyan)',
              display: 'inline-block'
            }}></span>
            Open for opportunities
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1, fontWeight: 800 }}>
            Hi, I'm <span className="text-gradient">Vaila Ravi Shankar</span>
          </h1>

          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'var(--text-primary)', fontWeight: 600, minHeight: '3.5rem' }}>
            A <span className="cursor-blink" style={{ color: 'var(--accent-cyan)' }}>{currentText}</span>
          </h2>

          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', color: 'var(--text-secondary)', maxWidth: '680px', lineHeight: '1.7' }}>
            Data Science undergraduate at Anurag University with hands-on experience in Python, full-stack web development, and data analysis. I love building end-to-end applications that bridge the gap between complex data analysis and elegant, intuitive interfaces.
          </p>

          {/* Quick Contact Badges */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '1rem', 
            margin: '1rem 0 2rem 0',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem'
          }}>
            <a href="mailto:vailaravi2005@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'inherit', textDecoration: 'none' }} className="glow-hover">
              <Mail size={16} style={{ color: 'var(--accent-cyan)' }} />
              vailaravi2005@gmail.com
            </a>
            <a href="tel:+919347051424" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'inherit', textDecoration: 'none' }}>
              <Phone size={16} style={{ color: 'var(--accent-cyan)' }} />
              +91 93470 51424
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={16} style={{ color: 'var(--accent-cyan)' }} />
              Hyderabad, India
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Connect
            </a>
            <a 
              href="#resume" 
              className="btn btn-secondary" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              onClick={(e) => {
                e.preventDefault();
                const resumeSec = document.getElementById('resume');
                if (resumeSec) {
                  resumeSec.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Resume / CV <Download size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
