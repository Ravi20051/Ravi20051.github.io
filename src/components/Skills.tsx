import React, { useState } from 'react';
import { Database, Layout, Code, Wrench, CheckCircle } from 'lucide-react';

interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate' | 'Familiar';
  percentage: number;
}

interface SkillGroup {
  category: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export default function Skills() {
  const skillGroups: SkillGroup[] = [
    {
      category: 'Data Science & ML',
      icon: <Database size={20} />,
      skills: [
        { name: 'Pandas & NumPy', level: 'Advanced', percentage: 90 },
        { name: 'Data Cleaning & EDA', level: 'Advanced', percentage: 88 },
        { name: 'Matplotlib & Visualization', level: 'Advanced', percentage: 85 },
        { name: 'Supervised Learning', level: 'Advanced', percentage: 82 },
        { name: 'Unsupervised Learning', level: 'Intermediate', percentage: 75 },
        { name: 'Feature Engineering', level: 'Advanced', percentage: 80 },
        { name: 'Model Evaluation', level: 'Advanced', percentage: 80 },
        { name: 'Data Analytics', level: 'Advanced', percentage: 85 },
      ]
    },
    {
      category: 'Web Development',
      icon: <Layout size={20} />,
      skills: [
        { name: 'React.js', level: 'Advanced', percentage: 90 },
        { name: 'Next.js', level: 'Advanced', percentage: 85 },
        { name: 'TypeScript', level: 'Advanced', percentage: 80 },
        { name: 'JavaScript', level: 'Advanced', percentage: 88 },
        { name: 'HTML & CSS', level: 'Advanced', percentage: 92 },
        { name: 'SQL', level: 'Advanced', percentage: 84 },
      ]
    },
    {
      category: 'Core CS & Languages',
      icon: <Code size={20} />,
      skills: [
        { name: 'Python', level: 'Advanced', percentage: 92 },
        { name: 'Java', level: 'Intermediate', percentage: 75 },
        { name: 'C Language', level: 'Intermediate', percentage: 70 },
        { name: 'Data Structures & Algorithms', level: 'Advanced', percentage: 82 },
        { name: 'Object-Oriented Programming (OOP)', level: 'Advanced', percentage: 85 },
        { name: 'DBMS / Database Management', level: 'Advanced', percentage: 80 },
      ]
    },
    {
      category: 'Developer Tools & Concepts',
      icon: <Wrench size={20} />,
      skills: [
        { name: 'Git & GitHub', level: 'Advanced', percentage: 88 },
        { name: 'VS Code', level: 'Advanced', percentage: 90 },
        { name: 'Jupyter Notebook', level: 'Advanced', percentage: 88 },
        { name: 'Problem-solving', level: 'Advanced', percentage: 85 },
        { name: 'Debugging', level: 'Advanced', percentage: 87 },
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="section container">
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '0.5rem' }}>
          My <span className="text-gradient">Technical Skills</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          A breakdown of my technical expertise, ranging from data science and machine learning to modern web technologies.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Category Tabs */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '0.75rem',
          borderBottom: '1px solid var(--border-color)',
          paddingBottom: '1rem'
        }}>
          {skillGroups.map((group, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.6rem 1.2rem',
                borderRadius: '8px',
                border: '1px solid ' + (activeTab === idx ? 'var(--accent-cyan)' : 'transparent'),
                background: activeTab === idx ? 'rgba(0, 242, 254, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                color: activeTab === idx ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              {group.icon}
              {group.category}
            </button>
          ))}
        </div>

        {/* Selected Category Skill Grid */}
        <div className="glass-panel" style={{ padding: '2.5rem', minHeight: '320px' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            marginBottom: '2rem',
            color: 'var(--accent-cyan)' 
          }}>
            {skillGroups[activeTab].icon}
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{skillGroups[activeTab].category}</h3>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '1.5rem 2.5rem' 
          }}>
            {skillGroups[activeTab].skills.map((skill, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 500, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                    {skill.name}
                  </span>
                  <span style={{ 
                    fontSize: '0.8rem', 
                    fontWeight: 600, 
                    color: 'var(--accent-purple)', 
                    background: 'rgba(192, 132, 252, 0.1)', 
                    padding: '0.1rem 0.5rem', 
                    borderRadius: '4px' 
                  }}>
                    {skill.level}
                  </span>
                </div>
                {/* Visual meter bar */}
                <div style={{ 
                  width: '100%', 
                  height: '6px', 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                  borderRadius: '10px',
                  overflow: 'hidden'
                }}>
                  <div style={{ 
                    width: `${skill.percentage}%`, 
                    height: '100%', 
                    background: activeTab === 0 || activeTab === 3 ? 'var(--gradient-purple-blue)' : 'var(--gradient-cyan-blue)',
                    borderRadius: '10px',
                    transition: 'width 1s ease-out'
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Highlights info box */}
        <div className="glass-panel" style={{ 
          padding: '1.5rem', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem',
          background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.02) 0%, rgba(192, 132, 252, 0.02) 100%)' 
        }}>
          <CheckCircle size={24} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
            <strong>Coursework & Learning:</strong> Completed intensive study in Data Structures & Algorithms, Statistics, DBMS, Machine Learning, and Web Development. Proficient in applying these concepts to practical, real-world projects.
          </p>
        </div>
      </div>
    </section>
  );
}
