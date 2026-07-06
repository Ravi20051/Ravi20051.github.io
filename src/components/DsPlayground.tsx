import React, { useState, useRef } from 'react';
import { Activity, Trash2, Plus, Info } from 'lucide-react';

interface Point {
  x: number;
  y: number;
}

export default function DsPlayground() {
  const [points, setPoints] = useState<Point[]>([
    { x: 100, y: 250 },
    { x: 180, y: 210 },
    { x: 260, y: 160 },
    { x: 320, y: 150 },
    { x: 400, y: 90 },
  ]);

  const svgRef = useRef<SVGSVGElement | null>(null);

  const handleSvgClick = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPoints(prev => [...prev, { x, y }]);
  };

  const clearPoints = () => {
    setPoints([]);
  };

  const addPresetPoints = () => {
    // Generates points with a positive correlation + some noise
    const preset: Point[] = [];
    for (let i = 1; i <= 6; i++) {
      const x = 50 + i * 65;
      const noise = (Math.random() - 0.5) * 45;
      const y = 300 - (i * 35) + noise;
      preset.push({ x, y });
    }
    setPoints(preset);
  };

  // Linear regression calculation: y = mx + b
  let m = 0;
  let b = 0;
  let r2 = 0;
  let hasLine = false;

  if (points.length >= 2) {
    const n = points.length;
    let sumX = 0;
    let sumY = 0;
    let sumXY = 0;
    let sumXX = 0;
    let sumYY = 0;

    points.forEach(p => {
      sumX += p.x;
      sumY += p.y;
      sumXY += p.x * p.y;
      sumXX += p.x * p.x;
      sumYY += p.y * p.y;
    });

    const num = n * sumXY - sumX * sumY;
    const den = n * sumXX - sumX * sumX;

    if (den !== 0) {
      m = num / den;
      b = (sumY - m * sumX) / n;
      hasLine = true;

      // Calculate R^2 (coefficient of determination)
      const avgY = sumY / n;
      let ssTot = 0;
      let ssRes = 0;

      points.forEach(p => {
        const predY = m * p.x + b;
        ssTot += Math.pow(p.y - avgY, 2);
        ssRes += Math.pow(p.y - predY, 2);
      });

      if (ssTot === 0) {
        r2 = 1.0;
      } else {
        r2 = 1 - ssRes / ssTot;
      }
    }
  }

  // Generate SVG coordinates for drawing the regression line
  const linePoints = () => {
    if (!hasLine) return null;
    const x1 = 10;
    const y1 = m * x1 + b;
    const x2 = 490;
    const y2 = m * x2 + b;
    return { x1, y1, x2, y2 };
  };

  const lineCoords = linePoints();

  return (
    <section id="playground" className="section container">
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '0.5rem' }}>
          Data Science <span className="text-gradient">Playground</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto' }}>
          Interactive Machine Learning Demo. Click inside the scatter plot area to add your own data points and see the Least-Squares Linear Regression line compute in real time.
        </p>
      </div>

      <div className="grid-cols-2" style={{ alignItems: 'stretch' }}>
        
        {/* Interactive Plot Area */}
        <div className="glass-panel" style={{ 
          padding: '1.5rem', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1rem',
          minHeight: '400px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              Plot Area (Click to Add Points)
            </span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                onClick={addPresetPoints}
                className="btn btn-secondary"
                style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', borderRadius: '6px' }}
              >
                <Plus size={14} /> Add Trend Data
              </button>
              <button 
                onClick={clearPoints}
                className="btn btn-secondary"
                style={{ 
                  padding: '0.4rem 0.8rem', 
                  fontSize: '0.8rem', 
                  borderRadius: '6px',
                  color: 'rgba(239, 68, 68, 0.9)',
                  borderColor: 'rgba(239, 68, 68, 0.15)'
                }}
              >
                <Trash2 size={14} /> Clear
              </button>
            </div>
          </div>

          <div style={{ 
            position: 'relative', 
            background: '#040712', 
            border: '1px solid rgba(255,255,255,0.04)',
            borderRadius: '12px',
            overflow: 'hidden',
            flexGrow: 1,
            aspectRatio: '500/350',
            cursor: 'crosshair'
          }}>
            {/* Grid overlay */}
            <svg 
              ref={svgRef}
              onClick={handleSvgClick}
              width="100%" 
              height="100%" 
              viewBox="0 0 500 350"
              style={{ display: 'block' }}
            >
              {/* Grid Lines */}
              <defs>
                <pattern id="plot-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#plot-grid)" />

              {/* Axes lines */}
              <line x1="20" y1="330" x2="480" y2="330" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <line x1="20" y1="20" x2="20" y2="330" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

              {/* Regression Line */}
              {hasLine && lineCoords && (
                <line 
                  x1={lineCoords.x1} 
                  y1={lineCoords.y1} 
                  x2={lineCoords.x2} 
                  y2={lineCoords.y2} 
                  stroke="var(--accent-cyan)" 
                  strokeWidth="3.5" 
                  strokeDasharray="4"
                  style={{ filter: 'drop-shadow(0 0 4px rgba(0, 242, 254, 0.4))' }}
                />
              )}

              {/* Scatter Points */}
              {points.map((p, idx) => (
                <circle 
                  key={idx}
                  cx={p.x} 
                  cy={p.y} 
                  r="7" 
                  fill="var(--accent-purple)" 
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  style={{ 
                    transition: 'all 0.15s ease',
                    filter: 'drop-shadow(0 0 5px rgba(192, 132, 252, 0.5))'
                  }}
                />
              ))}
            </svg>

            {points.length === 0 && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '2rem',
                pointerEvents: 'none',
                color: 'var(--text-muted)'
              }}>
                <p>Click inside this grid to place data points.<br />Add at least 2 points to generate the regression line.</p>
              </div>
            )}
          </div>
        </div>

        {/* Calculations / Stats Dashboard */}
        <div className="glass-panel" style={{ 
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '1.5rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem', color: 'var(--accent-purple)' }}>
              <Activity size={22} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Regression Metrics</h3>
            </div>

            {/* Metric widgets */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-color)', padding: '1rem', borderRadius: '8px' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>
                  Total Samples (n)
                </span>
                <span style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {points.length}
                </span>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-color)', padding: '1rem', borderRadius: '8px' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>
                  R² Score
                </span>
                <span style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: 700, 
                  color: !hasLine ? 'var(--text-muted)' : r2 > 0.7 ? 'var(--accent-green)' : r2 > 0.4 ? 'var(--accent-cyan)' : 'orange'
                }}>
                  {hasLine ? r2.toFixed(4) : 'N/A'}
                </span>
              </div>
            </div>

            {/* Regression Equation */}
            <div style={{ 
              background: 'rgba(0, 242, 254, 0.03)', 
              border: '1px solid rgba(0, 242, 254, 0.12)', 
              padding: '1.25rem', 
              borderRadius: '8px', 
              marginBottom: '1.5rem',
              fontFamily: 'monospace',
              fontSize: '1rem',
              textAlign: 'center'
            }}>
              <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.3rem', fontFamily: 'var(--font-body)' }}>
                Regression Equation
              </span>
              <strong style={{ color: 'var(--accent-cyan)', fontSize: '1.15rem' }}>
                {hasLine ? `y = ${m.toFixed(2)}x ${b >= 0 ? '+' : '-'} ${Math.abs(b).toFixed(2)}` : 'y = mx + b'}
              </strong>
            </div>

            {/* Brief Explanation */}
            <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <Info size={16} style={{ color: 'var(--accent-purple)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <p style={{ margin: 0, lineHeight: 1.4 }}>
                  <strong>How it works:</strong> The simulator fits a straight line that minimizes the sum of squared vertical distances (residuals) from the points. The <strong>R² score</strong> indicates how well the variation in $y$ is explained by $x$. Closer to 1 means a stronger linear relationship.
                </p>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Designed using <strong>Least-Squares Estimation (LSE)</strong> in pure React & JavaScript.
          </div>

        </div>

      </div>
    </section>
  );
}
