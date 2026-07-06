import { Award } from 'lucide-react';

export default function Certificates() {
  return (
    <section id="certificates" className="section container">
      <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '0.5rem' }}>
          Certifications & <span className="text-gradient">Credentials</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', marginBottom: '1.5rem' }}>
          My verified professional achievements and certifications, displayed directly below for easy viewing.
        </p>
      </div>

      {/* Embedded PDF Viewer Container */}
      <div 
        className="glass-panel" 
        style={{ 
          padding: '1rem', 
          width: '100%', 
          maxWidth: '960px', 
          margin: '0 auto', 
          height: '75vh', 
          minHeight: '600px',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 10px 40px rgba(0, 242, 254, 0.08)',
          border: '1px solid var(--border-color)',
          background: 'var(--bg-secondary)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1rem 1rem 1rem',
          borderBottom: '1px solid var(--border-color)',
          color: 'var(--accent-cyan)',
          fontWeight: 600,
          fontSize: '0.9rem'
        }}>
          <Award size={18} />
          <span>Verified Certificate Book (All Certificates)</span>
        </div>
        <div style={{ flex: 1, borderRadius: '8px', overflow: 'hidden', background: '#f5f5f7', marginTop: '0.75rem' }}>
          <iframe 
            src={`${import.meta.env.BASE_URL}all_certificates.pdf?v=2`} 
            title="All Certificates"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              display: 'block'
            }}
          />
        </div>
      </div>
    </section>
  );
}
