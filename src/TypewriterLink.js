import React, { useState, useRef } from 'react';

function TypewriterLink({ text, href }) {
  const [displayed, setDisplayed] = useState(text);
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    setHovered(true);
    setDisplayed('');
    let i = 0;
    const type = () => {
      setDisplayed(text.slice(0, i + 1));
      if (i < text.length - 1) {
        i++;
        timeoutRef.current = setTimeout(type, 50);
      }
    };
    type();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setDisplayed(text);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleClick = (e) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <a
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        textDecoration: 'none',
        color: hovered ? '#f05a27' : '#222',
        fontWeight: 600,
        fontSize: '1.2rem',
        transition: 'color 0.2s',
        minWidth: `${text.length}ch`,
        display: 'inline-block',
      }}
    >
      {displayed}
    </a>
  );
}

export default TypewriterLink; 