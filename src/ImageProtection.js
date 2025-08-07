import { useEffect } from 'react';

function ImageProtection() {
  useEffect(() => {
    // Prevent right-click context menu
    const preventContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // Prevent keyboard shortcuts for saving images
    const preventKeyboardShortcuts = (e) => {
      // Prevent Ctrl+S, Ctrl+Shift+S, Cmd+S, Cmd+Shift+S
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        showWarning('Saving is not allowed on this website.');
        return false;
      }
      
      // Prevent Ctrl+C, Cmd+C (copy)
      if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
        const selection = window.getSelection();
        if (selection.toString().includes('img') || selection.rangeCount > 0) {
          e.preventDefault();
          showWarning('Copying images is not allowed.');
          return false;
        }
      }
      
      // Prevent Print Screen
      if (e.key === 'PrintScreen') {
        e.preventDefault();
        showWarning('Screenshots are not allowed.');
        return false;
      }
    };

    // Prevent drag and drop
    const preventDragDrop = (e) => {
      e.preventDefault();
      return false;
    };

    // Prevent copy events
    const preventCopy = (e) => {
      e.preventDefault();
      showWarning('Copying content is not allowed.');
      return false;
    };

    // Show warning message
    const showWarning = (message) => {
      // Create warning element
      const warning = document.createElement('div');
      warning.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #f44336;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-family: 'Raleway', sans-serif;
        font-size: 14px;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: slideIn 0.3s ease-out;
      `;
      warning.textContent = message;
      
      // Add animation CSS
      const style = document.createElement('style');
      style.textContent = `
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `;
      document.head.appendChild(style);
      
      document.body.appendChild(warning);
      
      // Remove after 3 seconds
      setTimeout(() => {
        warning.style.animation = 'slideOut 0.3s ease-in';
        warning.style.animationFillMode = 'forwards';
        setTimeout(() => {
          if (warning.parentNode) {
            warning.parentNode.removeChild(warning);
          }
        }, 300);
      }, 3000);
    };

    // Add console warning
    const addConsoleWarning = () => {
      console.log('%c⚠️ WARNING ⚠️', 'color: #f44336; font-size: 20px; font-weight: bold;');
      console.log('%cThis website is protected against image downloading and copying.', 'color: #f44336; font-size: 14px;');
      console.log('%cAny attempts to save images will be logged.', 'color: #f44336; font-size: 14px;');
    };

    // Prevent developer tools (basic protection)
    const preventDevTools = () => {
      const devtools = {
        isOpen: false,
        orientation: null
      };
      
      const threshold = 160;
      
      setInterval(() => {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        
        if (widthThreshold || heightThreshold) {
          if (!devtools.isOpen) {
            devtools.isOpen = true;
            showWarning('Developer tools detected. Image protection is active.');
          }
        } else {
          devtools.isOpen = false;
        }
      }, 500);
    };

    // Add event listeners
    document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('keydown', preventKeyboardShortcuts);
    document.addEventListener('dragstart', preventDragDrop);
    document.addEventListener('copy', preventCopy);
    
    // Add protection to all images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('contextmenu', preventContextMenu);
      img.addEventListener('dragstart', preventDragDrop);
      img.addEventListener('copy', preventCopy);
    });

    // Initialize protections
    addConsoleWarning();
    preventDevTools();

    // Cleanup function
    return () => {
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('keydown', preventKeyboardShortcuts);
      document.removeEventListener('dragstart', preventDragDrop);
      document.removeEventListener('copy', preventCopy);
      
      images.forEach(img => {
        img.removeEventListener('contextmenu', preventContextMenu);
        img.removeEventListener('dragstart', preventDragDrop);
        img.removeEventListener('copy', preventCopy);
      });
    };
  }, []);

  return null; // This component doesn't render anything
}

export default ImageProtection; 