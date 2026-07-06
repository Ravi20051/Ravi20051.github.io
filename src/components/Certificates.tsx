import { Award, ExternalLink, Calendar, BookOpen } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  verifyUrl: string;
}

export default function Certificates() {
  const certificates: Certificate[] = [
    {
      title: 'Machine Learning Specialization',
      issuer: 'DeepLearning.AI & Stanford University',
      date: 'Feb. 2026',
      credentialId: 'ML-93817-2026',
      skills: ['Supervised Learning', 'Unsupervised Learning', 'Neural Networks', 'Feature Engineering'],
      verifyUrl: 'https://coursera.org/verify/specialization/ml-stanford'
    },
    {
      title: 'Python for Data Science, AI & Development',
      issuer: 'IBM',
      date: 'Nov. 2024',
      credentialId: 'PY-IBM-55422',
      skills: ['Python Programming', 'Pandas & NumPy', 'Data Analysis', 'APIs & Web Scraping'],
      verifyUrl: 'https://coursera.org/verify/ibm-python-ds'
    },
    {
      title: 'Meta Front-End Developer Professional Certificate',
      issuer: 'Meta',
      date: 'Aug. 2025',
      credentialId: 'META-FE-9831',
      skills: ['React.js', 'Next.js', 'JavaScript (ES6)', 'HTML & CSS Layouts'],
      verifyUrl: 'https://coursera.org/verify/meta-frontend'
    },
    {
      title: 'SQL for Data Science',
      issuer: 'University of California, Davis',
      date: 'May 2025',
      credentialId: 'SQL-UCD-04921',
      skills: ['SQL Queries', 'Relational Databases', 'Data Filtering', 'Joins & Subqueries'],
      verifyUrl: 'https://coursera.org/verify/ucdavis-sql-ds'
    }
  ];

  return (
    <section id="certificates" className="section container">
      <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '0.5rem' }}>
          Certifications & <span className="text-gradient">Credentials</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Key professional courses, training, and achievements that validate my technical expertise.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {certificates.map((cert, idx) => (
          <div 
            key={idx} 
            className="glass-panel" 
            style={{ 
              padding: '1.75rem', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            <div>
              {/* Header Icon & Date */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div style={{ 
                  background: 'rgba(192, 132, 252, 0.08)', 
                  border: '1px solid rgba(192, 132, 252, 0.2)',
                  padding: '0.5rem',
                  borderRadius: '10px',
                  color: 'var(--accent-purple)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Award size={20} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                  <Calendar size={12} />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Title & Issuer */}
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-primary)', lineHeight: '1.4' }}>
                {cert.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', marginBottom: '1.25rem', fontWeight: 600 }}>
                {cert.issuer}
              </p>

              {/* Credential ID */}
              {cert.credentialId && (
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1rem', fontFamily: 'monospace' }}>
                  ID: {cert.credentialId}
                </div>
              )}

              {/* Skills Pill Grid */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                {cert.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    style={{ 
                      fontSize: '0.75rem', 
                      padding: '0.15rem 0.5rem', 
                      borderRadius: '4px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.04)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Verification Link */}
            <a 
              href={cert.verifyUrl} 
              target="_blank" 
              rel="noreferrer" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.4rem', 
                textDecoration: 'none', 
                fontSize: '0.85rem', 
                fontWeight: 600,
                color: 'var(--text-primary)',
                borderTop: '1px solid var(--border-color)',
                paddingTop: '1rem',
                width: '100%',
                transition: 'color var(--transition-fast)'
              }}
              className="glow-hover"
            >
              <BookOpen size={14} style={{ color: 'var(--accent-cyan)' }} />
              <span>Verify Credential</span>
              <ExternalLink size={12} style={{ marginLeft: 'auto', opacity: 0.6 }} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
