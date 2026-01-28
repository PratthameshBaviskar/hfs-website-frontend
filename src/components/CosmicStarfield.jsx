import React, { useEffect, useRef } from 'react';

/**
 * CosmicStarfield
 * Renders a premium, multi-layered starfield with:
 * - 3 Depth Layers (Background, Mid, Foreground)
 * - Gentle twinkling
 * - Refined shooting star logic (elegant & rare)
 * - Scroll parallax
 */
const CosmicStarfield = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const requestRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width, height;

        // Configuration
        const LAYERS = [
            { count: 120, speed: 0.05, size: 0.8, alphaBase: 0.2 }, // Background (Static-ish)
            { count: 60, speed: 0.10, size: 1.2, alphaBase: 0.4 }, // Mid (Twinkling)
            { count: 20, speed: 0.15, size: 2.0, alphaBase: 0.7 }  // Foreground (Bright)
        ];

        const stars = [];
        let shootingStar = null;
        let shootingStarTimer = 0;
        let nextShootingStarInterval = 240; // Start sooner (4s @ 60fps)

        const initStars = () => {
            stars.length = 0;
            LAYERS.forEach(layer => {
                for (let i = 0; i < layer.count; i++) {
                    stars.push({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        radius: Math.random() * layer.size + 0.5,
                        baseAlpha: layer.alphaBase,
                        alpha: layer.alphaBase,
                        twinkleSpeed: Math.random() * 0.01,
                        twinkleDir: 1,
                        parallaxFactor: layer.speed
                    });
                }
            });
        };

        const handleResize = () => {
            if (canvas.parentElement) {
                width = canvas.parentElement.offsetWidth;
                height = canvas.parentElement.offsetHeight;
                canvas.width = width;
                canvas.height = height;
                initStars();
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        const render = () => {
            // Optimization: Only clear if necessary, or use a trailing effect (optional, strictly clearing here for clean look)
            ctx.clearRect(0, 0, width, height);

            const scrollY = window.scrollY; // Capture once per frame

            // DRAW STARS
            stars.forEach(star => {
                // Twinkle Logic
                if (star.twinkleSpeed > 0) {
                    star.alpha += star.twinkleSpeed * star.twinkleDir;
                    if (star.alpha > star.baseAlpha + 0.3 || star.alpha < star.baseAlpha - 0.1) {
                        star.twinkleDir *= -1;
                    }
                }

                // Parallax Y Calculation
                // Stars move slower than content -> shift them DOWN relative to canvas top
                // (Since section is moving UP, staying put or moving down makes them "lag")
                const parallaxY = scrollY * star.parallaxFactor;
                const drawY = (star.y + parallaxY) % height;
                // Wrap vertically smoothly or just clamp? Wrapping is better for infinite feel.

                ctx.beginPath();
                ctx.arc(star.x, drawY, star.radius, 0, Math.PI * 2);

                // Soft Glow for larger stars
                if (star.radius > 1.5) {
                    ctx.shadowBlur = 4;
                    ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
                } else {
                    ctx.shadowBlur = 0;
                }

                ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, star.alpha)})`;
                ctx.fill();
            });

            // Reset Shadow for next ops
            ctx.shadowBlur = 0;

            // SHOOTING STAR LOGIC
            shootingStarTimer++;
            if (shootingStarTimer > nextShootingStarInterval && !shootingStar) {
                shootingStar = {
                    x: Math.random() * width * 0.7, // Start mostly left
                    y: Math.random() * (height * 0.5), // Top half
                    vx: (Math.random() * 10 + 10), // VERY FAST horizontal
                    vy: (Math.random() * 5 + 3), // Moderate vertical (Diagonal)
                    length: Math.random() * 150 + 150, // Long elegant trails
                    life: 1.0,
                    decay: 0.008 // Slower fade for visibility
                };
                shootingStarTimer = 0;
                nextShootingStarInterval = Math.random() * 120 + 240; // Frequent: 4-6 seconds
            }

            if (shootingStar) {
                shootingStar.x += shootingStar.vx;
                shootingStar.y += shootingStar.vy;
                shootingStar.life -= shootingStar.decay;

                if (shootingStar.life <= 0 || shootingStar.x > width || shootingStar.y > height) {
                    shootingStar = null;
                } else {
                    // Draw Elegant Trail (Brighter & Thicker)
                    const tailX = shootingStar.x - shootingStar.vx * (shootingStar.length / 12);
                    const tailY = shootingStar.y - shootingStar.vy * (shootingStar.length / 12);

                    const grad = ctx.createLinearGradient(shootingStar.x, shootingStar.y, tailX, tailY);
                    grad.addColorStop(0, `rgba(200, 240, 255, ${shootingStar.life})`); // Icy Cyan Head
                    grad.addColorStop(1, `rgba(200, 240, 255, 0)`);

                    ctx.beginPath();
                    ctx.moveTo(shootingStar.x, shootingStar.y);
                    ctx.lineTo(tailX, tailY);
                    ctx.strokeStyle = grad;
                    ctx.lineWidth = 3; // Thick visible trail
                    ctx.lineCap = 'round';
                    ctx.stroke();

                    // Head Glow
                    ctx.beginPath();
                    ctx.arc(shootingStar.x, shootingStar.y, 3, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${shootingStar.life})`;
                    ctx.shadowBlur = 8;
                    ctx.shadowColor = "rgba(200, 240, 255, 0.8)";
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
            }

            requestRef.current = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return (
        <div ref={containerRef} className="cosmic-starfield-canvas">
            <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
        </div>
    );
};

export default CosmicStarfield;
