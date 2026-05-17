import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';

type NodePoint = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const particles = useMemo(
    () =>
      Array.from({ length: 48 }, (_, index) => ({
        id: index,
        left: (index * 19 + 13) % 100,
        top: (index * 31 + 7) % 100,
        delay: (index % 9) * 0.45,
        duration: 12 + (index % 7),
      })),
    [],
  );

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      setPointer({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('pointermove', onPointerMove);
    return () => window.removeEventListener('pointermove', onPointerMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let animationFrame = 0;
    const nodes: NodePoint[] = Array.from({ length: 64 }, (_, index) => ({
      x: (index * 157) % window.innerWidth,
      y: (index * 83) % window.innerHeight,
      vx: ((index % 5) - 2) * 0.08,
      vy: ((index % 7) - 3) * 0.07,
      radius: 1.1 + (index % 3) * 0.55,
    }));

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      context.clearRect(0, 0, width, height);

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        context.beginPath();
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        context.fillStyle = 'rgba(34, 211, 238, 0.46)';
        context.fill();
      }

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance < 150) {
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.strokeStyle = `rgba(125, 211, 252, ${0.18 - distance / 1000})`;
            context.lineWidth = 0.8;
            context.stroke();
          }
        }
      }

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      className="animated-background"
      aria-hidden="true"
      style={
        {
          '--pointer-x': `${pointer.x}%`,
          '--pointer-y': `${pointer.y}%`,
        } as CSSProperties
      }
    >
      <canvas ref={canvasRef} className="neural-canvas" />
      <div className="grid-scan" />
      <div className="pointer-glow" />
      <div className="particle-field">
        {particles.map((particle) => (
          <span
            key={particle.id}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
