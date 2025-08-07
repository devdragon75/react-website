import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import FloatingBall from './FloatingBall';



function Hero({ heroFixed }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [ballsData, setBallsData] = useState([]);
  const [ballPositions, setBallPositions] = useState({});
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [scrollY, setScrollY] = useState(0);
  const [ballsVisible, setBallsVisible] = useState(true);
  const [underlineVisible, setUnderlineVisible] = useState(true);
  const [ballsRepelling, setBallsRepelling] = useState(false);
  const [hasAutoScrolled, setHasAutoScrolled] = useState(false);
  const [hasAutoScrolledUp, setHasAutoScrolledUp] = useState(false);
  
  // Optimized parallax calculations
  const textStyle = useMemo(() => ({
    opacity: Math.max(0, 1 - scrollY / 300),
    transform: `translateY(${-scrollY * 0.5}px) scale(${Math.max(0.8, 1 - scrollY / 1000)})`,
    transition: 'opacity 0.1s ease-out, transform 0.1s ease-out'
  }), [scrollY]);

  // Auto-scroll to animated diagram
  const handleAutoScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const triggerPosition = 300; // Adjust this value
    const upTriggerPosition = 400; // Trigger for upward scroll
    
    // Downward auto-scroll to animated diagram
    if (scrollY >= triggerPosition && scrollY < 400 && !hasAutoScrolled) {
      console.log('Downward auto-scroll triggered at:', scrollY);
      const diagramSection = document.querySelector('[data-section="animated-diagram"]');
      if (diagramSection) {
        setHasAutoScrolled(true);
        diagramSection.scrollIntoView({ 
          behavior: 'smooth', // Options: 'auto', 'smooth'
          block: 'start'
        });
        
        // Additional scroll to ensure full viewport
        setTimeout(() => {
          const diagramTop = diagramSection.offsetTop;
          const viewportHeight = window.innerHeight;
          const diagramHeight = diagramSection.offsetHeight;
          
          // Calculate position to center the diagram in viewport
          const centerPosition = diagramTop - (viewportHeight - diagramHeight) / 2;
          
          window.scrollTo({
            top: Math.max(0, centerPosition),
            behavior: 'smooth'
          });
        }, 100);
      } else {
        console.log('Diagram section not found');
      }
    } 
    // Upward auto-scroll to hero section
    else if (scrollY <= upTriggerPosition && !hasAutoScrolledUp) {
      console.log('Upward auto-scroll triggered at:', scrollY);
      const heroSection = document.querySelector('[data-section="hero"]');
      if (heroSection) {
        setHasAutoScrolledUp(true);
        heroSection.scrollIntoView({ 
          behavior: 'smooth', // Options: 'auto', 'smooth'
          block: 'start'
        });
      } else {
        console.log('Hero section not found');
      }
    } 
    // Reset states when in middle range
    else if (scrollY > 200 && scrollY < triggerPosition) {
      setHasAutoScrolled(false);
    } else if (scrollY > upTriggerPosition) {
      setHasAutoScrolledUp(false);
    }
  }, [hasAutoScrolled, hasAutoScrolledUp]);

  // Anime.js Animation for text
  useEffect(() => {
    let animationInitialized = false;
    
    const initAnimation = () => {
      if (window.anime && textRef.current && !animationInitialized) {
        try {
          animationInitialized = true;
          
          // Wrap every letter in a span for both text elements
          var textWrappers = document.querySelectorAll('.ml11 .letters');
          textWrappers.forEach(textWrapper => {
            if (textWrapper) {
              textWrapper.innerHTML = textWrapper.textContent.replace(/(.)/g, "<span class='letter'>$&</span>");
            }
          });

          window.anime.timeline({loop: false})
            .add({
              targets: '.ml11 .line',
              scaleY: [0,1],
              opacity: [0.5,1],
              easing: "easeOutExpo",
              duration: 900
            })
            .add({
              targets: '.ml11 .line',
              translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
              easing: "easeOutExpo",
              duration: 700,
              delay: 100
            }).add({
              targets: '.ml11 .letter',
              opacity: [0,1],
              easing: "easeOutExpo",
              duration: 600,
              offset: '-=775',
              delay: (el, i) => 34 * (i+1)
            }).add({
              targets: '.animate-underline-grow',
              width: ['0%', '100%'],
              easing: "easeOutExpo",
              duration: 700,
              offset: '-=600'
            });
        } catch (error) {
          console.log('Anime.js animation error:', error);
          animationInitialized = false;
        }
      }
    };

    const checkScripts = setInterval(() => {
      if (window.anime) {
        clearInterval(checkScripts);
        initAnimation();
      }
    }, 100);

    setTimeout(() => {
      if (window.anime && !animationInitialized) {
        initAnimation();
      }
    }, 1000);

    return () => {
      clearInterval(checkScripts);
      animationInitialized = false;
    };
  }, []);

  // Generate responsive balls and calculate center position
  useEffect(() => {
    const generateResponsiveBalls = () => {
      const width = window.innerWidth;
      let count, sizes;
      
      if (width < 640) { // Mobile
        count = 12;
        sizes = [16, 18, 20, 22, 24, 26, 28, 10, 22, 14, 16, 18, 10, 12, 14];
      } else if (width < 1024) { // Tablet
        count = 20;
        sizes = [24, 26, 28, 30, 32, 34, 26, 28, 20, 32, 24, 26, 18, 10, 32, 24, 16];
      } else { // Desktop
        count = 35;
        sizes = [20, 32, 25, 38, 20, 32, 15, 38, 10, 22, 35, 38, 20, 22, 25, 28, 20, 12, 35];
      }
      
      const colors = ['#1e293b', '#ea580c', '#0F2E4F', '#EB5A32', '#6B7280'];
      const balls = [];
      
      for (let i = 0; i < count; i++) {
        balls.push({
          size: sizes[Math.floor(Math.random() * sizes.length)],
          color: colors[Math.floor(Math.random() * colors.length)],
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          delay: 4 + (i * 0.2), // 4s initial delay + 0.2s between each ball
        });
      }
      
      setBallsData(balls);
    };

    const handleResize = () => {
      generateResponsiveBalls();
    };

    generateResponsiveBalls();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track ball positions for line drawing
  const handleBallMove = useCallback((index, position, size, color) => {
    setBallPositions(prev => ({
      ...prev,
      [index]: { ...position, size, color }
    }));
  }, []);

  // Draw lines between balls with grab mode
  const drawLines = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const balls = Object.values(ballPositions);
    const maxDistance = 150; // Same as particles.js line_linked distance
    const grabDistance = 140; // Grab mode distance
    
    // Find balls near the cursor
    const ballsNearCursor = balls.filter(ball => {
      const dx = mousePos.x - (ball.x + ball.size / 2);
      const dy = mousePos.y - (ball.y + ball.size / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance < grabDistance;
    });
    
    // Only draw lines if cursor is near balls
    if (ballsNearCursor.length > 0) {
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 1;
      
      // Only draw lines between balls that are near the cursor
      for (let i = 0; i < ballsNearCursor.length; i++) {
        for (let j = i + 1; j < ballsNearCursor.length; j++) {
          const ball1 = ballsNearCursor[i];
          const ball2 = ballsNearCursor[j];
          
          const dx = ball1.x - ball2.x;
          const dy = ball1.y - ball2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx.globalAlpha = opacity;
            
            ctx.beginPath();
            ctx.moveTo(ball1.x + ball1.size / 2, ball1.y + ball1.size / 2);
            ctx.lineTo(ball2.x + ball2.size / 2, ball2.y + ball2.size / 2);
            ctx.stroke();
          }
        }
      }
    }
  }, [ballPositions, mousePos]);

  // Animation loop for drawing lines
  useEffect(() => {
    const animate = () => {
      // Only draw lines if mouse is actually near balls
      const balls = Object.values(ballPositions);
      const ballsNearCursor = balls.filter(ball => {
        const dx = mousePos.x - (ball.x + ball.size / 2);
        const dy = mousePos.y - (ball.y + ball.size / 2);
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < 140;
      });
      
      if (ballsNearCursor.length > 0) {
        drawLines();
      } else {
        // Clear canvas when not hovering
        const canvas = canvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    if (Object.keys(ballPositions).length > 0) {
      animate();
    }
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [drawLines, ballPositions, mousePos]);

  // Set up canvas size
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
      return () => window.removeEventListener('resize', resizeCanvas);
    }
  }, []);

  // Mouse tracking for grab mode
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Scroll tracking for parallax effect
  useEffect(() => {
    let ticking = false;
    let underlineTimeout = null;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Only update if scroll position actually changed
          if (currentScrollY !== scrollY) {
            setScrollY(currentScrollY);
          }
          
          // Hide balls when scrolling past Hero section (around 100vh)
          const heroHeight = window.innerHeight;
          const shouldShowBalls = currentScrollY <= heroHeight * 0.8;
          
          if (shouldShowBalls !== ballsVisible) {
            setBallsVisible(shouldShowBalls);
          }
          
          // Trigger ball repel when scrolling up from collection point
          const shouldRepelBalls = currentScrollY < 400 && ballsRepelling; // Start repelling when scrolling back up
          if (shouldRepelBalls !== ballsRepelling) {
            setBallsRepelling(shouldRepelBalls);
          }
          
          // Control underline visibility - clear any existing timeout
          if (underlineTimeout) {
            clearTimeout(underlineTimeout);
            underlineTimeout = null;
          }
          
          const shouldShowUnderline = currentScrollY <= 100; // Increased from 50 to 100
          console.log('Scroll check:', { currentScrollY, shouldShowUnderline, underlineVisible });
          
          if (shouldShowUnderline && !underlineVisible) {
            // Show underline with delay when scrolling back up
            console.log('Setting timeout to show underline');
            underlineTimeout = setTimeout(() => {
              console.log('Showing underline after delay');
              setUnderlineVisible(true);
            }, 1000); // Increased from 500ms to 1000ms (1 second)
          } else if (!shouldShowUnderline && underlineVisible) {
            // Hide underline instantly when scrolling down
            console.log('Hiding underline instantly');
            setUnderlineVisible(false);
          }
          
          // Immediate show if very close to top
          if (currentScrollY <= 20 && !underlineVisible) {
            console.log('Immediately showing underline (very close to top)');
            setUnderlineVisible(true);
          }
          
          // Handle auto-scroll to animated diagram
          handleAutoScroll();
          
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (underlineTimeout) {
        clearTimeout(underlineTimeout);
      }
    };
  }, [scrollY, ballsVisible, underlineVisible, ballsRepelling, handleAutoScroll]);


  return (
    <section
      className="flex flex-col items-center justify-center overflow-hidden relative mx-auto pt-20 sm:pt-24 md:pt-30 bg-white px-4"
      style={{
        width: '100vw',
        height: '100vh',
        minWidth: 0,
        minHeight: 0,
      }}
      data-section="hero"
    >
      {/* Main Text */}
      <div 
        className="relative z-30 text-center max-w-full " 
        ref={textRef}
        style={textStyle}
      >
        <h1
          className="ml11 text-4xl sm:text-6xl md:text-7xl lg:text-7xl text-black leading-tight animate-text-fallback px-4"
          style={{ fontFamily: "Raleway, serif", fontWeight: "light" }}
        >
          
          <span className="letters">Let's Connect The Dotts</span>
        </h1>
        <div 
          className="h-1 bg-orange-500 mx-auto mt-3 animate-underline-grow"
          style={{
            opacity: underlineVisible ? 1 : 0,
            transition: 'opacity 0.1s ease-out',
            zIndex: 31,
            position: 'relative',
            width: '0%',
            maxWidth: '80%'
          }}
        ></div>
        <h1
          className="ml11 text-4xl sm:text-6xl md:text-7xl lg:text-7xl text-black leading-tight animate-text-fallback px-4"
          style={{ fontFamily: "Raleway, serif", fontWeight: "bold" }}
        >
          <span className="letters" style={{ fontWeight: "bold" }}>Together!</span>
        
        </h1>
      </div>

      {/* Floating Balls */}
      <div 
        className="fixed w-full h-full z-10" 
        ref={containerRef}
        style={{
          width: '100vw',
          height: '100vh',
          minWidth: 0,
          minHeight: 0,
          top: 0,
          left: 0,
          opacity: ballsVisible ? 1 : 0,
          transition: 'opacity 0.5s ease-out',
          pointerEvents: ballsVisible ? 'auto' : 'none',
        }}
      >
          {/* Canvas for drawing lines */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 5 }}
          />
          {ballsData.map((ball, index) => (
            <div
              key={index}
              style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}
            >
              <FloatingBall
                size={ball.size}
                color={ball.color}
                initialX={ball.x}
                initialY={ball.y}
                index={index}
                delay={ball.delay}
                onBallMove={handleBallMove}
                mousePos={mousePos}
                isRepelling={ballsRepelling}
              />
            </div>
          ))}
      </div>
    </section>
  );
}

export default Hero; 