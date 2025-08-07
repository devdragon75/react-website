import React, { useRef, useEffect, useState } from 'react';

const FloatingBall = ({ size, color, initialX, initialY, index, delay, onBallMove, mousePos, isRepelling }) => {
  const [pos, setPos] = useState({ x: initialX, y: initialY });
  const [visible, setVisible] = useState(false);
  const ballRef = useRef();
  const velocityRef = useRef({ x: (Math.random() - 0.5) * 1.5, y: (Math.random() - 0.5) * 1.5 });

  // Show ball after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  // Simple animation loop with grab mode and collection
  useEffect(() => {
    if (!visible) return;
    
    let frame;
    function animate() {
      setPos(prev => {
        const { x, y } = prev;
        let { x: vx, y: vy } = velocityRef.current;
        
        // Repel effect - balls move away from center when repelling
        if (isRepelling) {
          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;
          const dx = x - centerX;
          const dy = y - centerY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 50) { // Only repel if close to center
            const repelStrength = 0.01; // Same intensity as attraction
            vx += dx * repelStrength;
            vy += dy * repelStrength;
          }
        } else {
          // Grab mode: attract to cursor if within 140px
          if (mousePos && mousePos.x && mousePos.y) {
            const dx = mousePos.x - (x + size / 2);
            const dy = mousePos.y - (y + size / 2);
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 140) {
              const attractionStrength = (140 - distance) / 140;
              vx += dx * attractionStrength * 0.02;
              vy += dy * attractionStrength * 0.02;
            }
          }
        }
        
        // Update position
        let newX = x + vx;
        let newY = y + vy;
        
        // Wrap around screen edges (only when not repelling)
        if (!isRepelling) {
          if (newX < -size) newX = window.innerWidth;
          if (newX > window.innerWidth) newX = -size;
          if (newY < -size) newY = window.innerHeight;
          if (newY > window.innerHeight) newY = -size;
        }
        
        const newPos = { x: newX, y: newY };
        
        // Notify parent component of ball position for line drawing
        if (onBallMove) {
          onBallMove(index, newPos, size, color);
        }
        
        return newPos;
      });
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [visible, size, index, onBallMove, mousePos, isRepelling, color]);

  return visible ? (
    <div
      ref={ballRef}
      style={{
        position: 'absolute',
        left: pos.x,
        top: pos.y,
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
        boxShadow: `0 4px 24px 0 ${color}44`,
        
        zIndex: 0,
        pointerEvents: 'none', // Disable mouse events for performance
      }}
      className="floating-ball"
    />
  ) : null;
};

export default FloatingBall; 