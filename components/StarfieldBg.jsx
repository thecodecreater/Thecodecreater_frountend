import { useRef, useEffect } from 'react';

export default function StarfieldBg({ starColor = 'rgba(255,255,255,0.85)', starCount = 80 }) {
  const canvasRef = useRef();
  const stars = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Create stars
    stars.current = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.3,
      speed: Math.random() * 0.3 + 0.1,
      alpha: Math.random() * 0.5 + 0.5,
    }));

    let animationId;
    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (let star of stars.current) {
        ctx.save();
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = starColor;
        ctx.shadowColor = starColor;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
        // Move star
        star.y += star.speed;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
          star.r = Math.random() * 1.2 + 0.3;
          star.alpha = Math.random() * 0.5 + 0.5;
        }
      }
      animationId = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [starColor, starCount]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.7,
      }}
      aria-hidden="true"
    />
  );
}
