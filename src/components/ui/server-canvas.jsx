import { useEffect, useRef } from 'react';

export default function ServerCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Tech matrix code snippets for background stream
    const techWords = [
      'SELECT *', 'FROM DATA', 'JOIN TABLES', 'WHERE ID=1', 'GROUP BY', 'DAX MEASURE', 'SUMX()', 'CALCULATE()',
      'EVALUATE', 'POWER BI', 'PYTHON', 'PANDAS.DF', 'ETL_PIPELINE', 'IMPORT SQL', 'PIVOT_TABLE', '01010110',
      'SQL_QUERY', 'METRICS', 'DATAFRAME', 'STAR_SCHEMA', 'TRANSFORM', 'AZURE', 'SNOWFLAKE'
    ];

    // Falling matrix streams (gentle, ambient speed)
    const fontSize = 13;
    const cols = Math.floor(width / 32);
    const drops = Array(cols).fill(0).map((_, i) => ({
      x: i * 32 + (Math.random() * 10 - 5),
      y: Math.random() * height,
      speed: 0.15 + Math.random() * 0.3,
      word: techWords[Math.floor(Math.random() * techWords.length)],
      opacity: 0.2 + Math.random() * 0.35,
      isAmber: Math.random() > 0.8
    }));

    // Server nodes network
    const nodeCount = Math.min(Math.floor(width / 18), 75);
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: 2 + Math.random() * 2.5,
      color: Math.random() > 0.3 ? '#38BDF8' : '#F59E0B'
    }));

    // Mouse tracking
    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Main render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Falling Matrix Data Streams
      ctx.font = '600 13px "IBM Plex Mono", monospace';
      drops.forEach(drop => {
        ctx.fillStyle = drop.isAmber
          ? `rgba(245, 158, 11, ${drop.opacity})`
          : `rgba(56, 189, 248, ${drop.opacity})`;
        
        ctx.fillText(drop.word, drop.x, drop.y);

        drop.y += drop.speed;
        if (drop.y > height + 30) {
          drop.y = -30;
          drop.x = Math.random() * width;
          drop.word = techWords[Math.floor(Math.random() * techWords.length)];
          drop.opacity = 0.25 + Math.random() * 0.4;
        }
      });

      // 2. Update & Draw Server Nodes & Connections
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        // Move node
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;

        if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
        if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

        // Draw node point
        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, nodeA.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeA.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = nodeA.color;
        ctx.fill();
        ctx.shadowBlur = 0; // reset

        // Connect nodes to each other
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeB.x - nodeA.x;
          const dy = nodeB.y - nodeA.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Pulsing data packet along connection
            if (dist > 30 && Math.random() < 0.005) {
              const progress = (Date.now() % 1500) / 1500;
              const px = nodeA.x + dx * progress;
              const py = nodeA.y + dy * progress;
              ctx.beginPath();
              ctx.arc(px, py, 2.5, 0, Math.PI * 2);
              ctx.fillStyle = '#F59E0B';
              ctx.fill();
            }
          }
        }

        // Connect node to mouse cursor
        const mdx = mouse.x - nodeA.x;
        const mdy = mouse.y - nodeA.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 200) {
          const malpha = (1 - mdist / 200) * 0.6;
          ctx.beginPath();
          ctx.moveTo(nodeA.x, nodeA.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(245, 158, 11, ${malpha})`;
          ctx.lineWidth = 1.4;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ opacity: 0.95 }}
    />
  );
}
