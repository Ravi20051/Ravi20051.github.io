import { ExternalLink, Smartphone, Calendar, Layers } from 'lucide-react';

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.2 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

interface Project {
  title: string;
  role: string;
  timeline: string;
  tech: string[];
  bullets: string[];
  type: 'web' | 'mobile' | 'ml';
  githubLink: string;
  demoLink?: string;
  additionalLinks?: { label: string; url: string }[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'MediConnect',
      role: 'Mobile EHR & Machine Learning Developer',
      timeline: 'Jan. 2026 – Apr. 2026',
      tech: ['React Native', 'Python', 'scikit-learn', 'Machine Learning', 'EHR Systems'],
      bullets: [
        'Built Machine Learning modules for maternal health risk prediction, immunization default prediction, and disease outbreak detection to support ASHA workers.',
        'Developed a React Native mobile EHR app enabling real-time patient data capture for frontline health workers in low-resource settings.'
      ],
      type: 'mobile',
      githubLink: 'https://github.com/Ravi20051/MediConnect'
    },
    {
      title: 'Internship & Placement Management System',
      role: 'Full-Stack Developer',
      timeline: 'Jan. 2025 – Mar. 2025',
      tech: ['React.js', 'Tailwind CSS', 'Java', 'Spring Boot', 'SQL'],
      bullets: [
        'Built a full-stack placement platform with role-based auth for students, admins, and recruiters.',
        'Implemented dynamic job postings with real-time search.'
      ],
      type: 'web',
      githubLink: 'https://github.com/Ravi20051/mini_project.',
      additionalLinks: [
        { label: 'Frontend Code', url: 'https://github.com/Ravi20051/mini_project./tree/main/internwait-frontend' },
        { label: 'Backend Code', url: 'https://github.com/Ravi20051/mini_project./tree/main/internwait-backend' }
      ]
    }
  ];

  return (
    <section id="projects" className="section container">
      <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '0.5rem' }}>
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          A showcase of full-stack web platforms and data-driven healthcare intelligence tools that I built.
        </p>
      </div>

      <div className="grid-cols-2">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="glass-panel" 
            style={{ 
              padding: '2rem', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background design accents */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: project.type === 'mobile' ? 'rgba(192, 132, 252, 0.05)' : 'rgba(0, 242, 254, 0.05)',
              filter: 'blur(20px)',
              pointerEvents: 'none'
            }} />

            <div>
              {/* Header Info */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  color: project.type === 'mobile' ? 'var(--accent-purple)' : 'var(--accent-cyan)'
                }}>
                  {project.type === 'mobile' ? <Smartphone size={22} /> : <Layers size={22} />}
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {project.type === 'mobile' ? 'Mobile + AI' : 'Web Application'}
                  </span>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  <Calendar size={14} />
                  <span>{project.timeline}</span>
                </div>
              </div>

              {/* Title & Role */}
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                {project.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', fontWeight: 500 }}>
                {project.role}
              </p>

              {/* Tech Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {project.tech.map((t, tIdx) => (
                  <span 
                    key={tIdx} 
                    style={{ 
                      fontSize: '0.8rem', 
                      padding: '0.2rem 0.6rem', 
                      borderRadius: '50px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Bullet Points */}
              <ul style={{ 
                listStyleType: 'none', 
                paddingLeft: 0, 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '0.75rem',
                marginBottom: '2rem'
              }}>
                {project.bullets.map((bullet, bIdx) => (
                  <li 
                    key={bIdx} 
                    style={{ 
                      fontSize: '0.95rem', 
                      color: 'var(--text-secondary)',
                      position: 'relative',
                      paddingLeft: '1.25rem',
                      lineHeight: '1.5'
                    }}
                  >
                    <span style={{ 
                      position: 'absolute', 
                      left: 0, 
                      top: '0.55rem', 
                      width: '6px', 
                      height: '6px', 
                      borderRadius: '50%',
                      backgroundColor: project.type === 'mobile' ? 'var(--accent-purple)' : 'var(--accent-cyan)'
                    }} />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            {/* Links/Actions Footer */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '0.75rem', 
              borderTop: '1px solid var(--border-color)', 
              paddingTop: '1.25rem' 
            }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.4rem', 
                    textDecoration: 'none', 
                    fontSize: '0.9rem', 
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    transition: 'color var(--transition-fast)'
                  }}
                  className="glow-hover"
                >
                  <GithubIcon size={16} />
                  <span>Code Repository</span>
                </a>
                {project.demoLink && (
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.4rem', 
                      textDecoration: 'none', 
                      fontSize: '0.9rem', 
                      fontWeight: 600,
                      color: 'var(--accent-cyan)'
                    }}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
              {project.additionalLinks && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.25rem' }}>
                  {project.additionalLinks.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        textDecoration: 'none',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        color: 'var(--accent-cyan)',
                        background: 'rgba(0, 242, 254, 0.04)',
                        border: '1px solid rgba(0, 242, 254, 0.15)',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '6px',
                        transition: 'all var(--transition-fast)'
                      }}
                      className="glow-hover"
                    >
                      <GithubIcon size={12} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
