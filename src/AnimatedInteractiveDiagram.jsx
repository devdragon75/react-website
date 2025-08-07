import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import svgPaths from "./svg-u0bsr44cgd.js";

// ===== ANIMATED CONNECTING LINES =====
function AnimatedLine({ start }) {
    return (
  
    <div
    className="absolute h-[625px] left-[238px] top-[99px] w-[989.063px]"
    data-name="line"
  >
    <div className="absolute bottom-[-0.069%] left-0 right-[-0.006%] top-[-0.045%]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 990 627"
      >
        <g id="line">
          {/* Animate each line with staggered delays */}
          <motion.path
            d={svgPaths.p1a2a5a80}
            id="Line 1"
            stroke="var(--stroke-0, black)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={start ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.path
            d={svgPaths.p16615e80}
            id="Line 2"
            stroke="var(--stroke-0, black)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={start ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.51 }}
          />
         
          <motion.line
            id="Line 7"
            stroke="var(--stroke-0, black)"
            x1="498.451"
            x2="353.451"
            y1="323.216"
            y2="626.216"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={start ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.52 }}
          />
          <motion.line
            id="Line 8"
            stroke="var(--stroke-0, black)"
            x1="500.483"
            x2="572.483"
            y1="320.871"
            y2="590.871"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={start ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.53 }}
          />
          <motion.line
            id="Line 9"
            stroke="var(--stroke-0, black)"
            x1="498.5"
            x2="495.5"
            y1="323.007"
            y2="101.007"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={start ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.54 }}
          />
          <motion.line
            id="Line 10"
            stroke="var(--stroke-0, black)"
            x1="500.521"
            x2="411.521"
            y1="324.144"
            y2="29.1444"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={start ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.55 }}
          />
          <motion.line
            id="Line 11"
            stroke="var(--stroke-0, black)"
            x1="495.632"
            x2="859.632"
            y1="324.339"
            y2="270.339"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={start ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.path
            d="M495 335H.5 446"
            id="Line 12"
            stroke="var(--stroke-0, black)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={start ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.56 }}
          />
          <motion.line
            id="Line 13"
            stroke="var(--stroke-0, black)"
            x1="495.632"
            x2="90.632"
            y1="324.339"
            y2="121.339"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={start ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.57 }}
          />
          <motion.line
            id="Line 14"
            stroke="var(--stroke-0, black)"
            x1="495.841"
            x2="898.968"
            y1="324.139"
            y2="121.139"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={start ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.58 }}
          />
          <motion.path
            d="M515 285L590.5 6"
            id="Line 15"
            stroke="var(--stroke-0, black)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={start ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.59 }}
          />
          <motion.path
            d="M495 325L120.5 546"
            id="Line 16"
            stroke="var(--stroke-0, black)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={start ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          />
          <motion.line
            id="Line 17"
            stroke="var(--stroke-0, black)"
            x1="495.632"
            x2="228.632"
            y1="324.339"
            y2="241.339"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={start ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.61 }}
          />
          <motion.path
            d="M465 305L750 456"
            id="Line 18"
            stroke="var(--stroke-0, black)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={start ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.62 }}
          />
          <motion.line
            id="Line 19"
            stroke="var(--stroke-0, black)"
            x1="495.632"
            x2="308.632"
            y1="324.339"
            y2="121.339"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={start ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.63 }}
          />
        </g>
      </svg>
    </div>
  </div>
);
}

// ===== CENTRAL ANIMATED DOT =====
  const AnimatedCentreDot = React.forwardRef(({ start: _start }, ref) => {
      // Center dot stays in original position
      const position = { x: 0, y: 0 };
      const scale = 1;
  
    return (
      <motion.div
          ref={ref}
          className="absolute left-[665px] size-[138px] top-[350px] cursor-pointer"
        data-name="centre dot"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transition: 'transform 0.3s ease-out'
          }}
        initial={{ scale: 0, opacity: 0 }}
        animate={_start ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 138 138"
        >
          <g id="centre dot">
            <circle
              cx="69"
              cy="69"
              fill="var(--fill-0, #D9D9D9)"
              id="Ellipse 3"
              r="68.5"
              stroke="var(--stroke-0, black)"
            />
            <motion.path
              d={svgPaths.p23a42800}
              fill="var(--fill-0, #f05a27)"
              id="Ellipse 1"
              stroke="var(--stroke-0, black)"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.3, delay: 1 }}
            />
          </g>
        </svg>
        {/* Pulsing effect */}
        
      </motion.div>
    );
  }
  );
  
  // ===== SCATTERED ANIMATED DOTS =====
  function AnimatedDotts({ start }) {
    const dotVariants = {
      hidden: { scale: 0, opacity: 0 },
      visible: (i) => ({
        scale: 1,
        opacity: 1,
        transition: {
          delay: 1.6 + i * 0.05, // Faster timing - reduced from 4.2 + i * 0.1
          duration: 0.5, // Faster duration
          type: "spring",
          stiffness: 500
        }
      })
    };
  
    return (
      <div
        className="absolute h-[751px] left-[138px] top-[14px] w-[1189px]"
        data-name="dotts"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1189 751"
        >
          <g id="dotts">
            <motion.circle
              cx="1020"
              cy="185"
              fill="var(--fill-0, #f05a27)"
              id="Ellipse 7"
              r="55"
              custom={0}
              variants={dotVariants}
              initial="hidden"
              animate={start ? "visible" : "hidden"}
              whileHover={start ? { scale: 1.2, fill: "#FF8A6B" } : {}}
            />
            <motion.g 
              id="Vector"
              custom={1}
              variants={dotVariants}
              initial="hidden"
              animate={start ? "visible" : "hidden"}
            >
              <path d={svgPaths.p1524a800} fill="var(--fill-0, #9DACA9)" />
              <path d={svgPaths.p8a84500} fill="var(--fill-0, #9DACA9)" />
            </motion.g>
            <motion.ellipse
              cx="1002"
              cy="629"
              fill="var(--fill-0, #f05a27)"
              id="Ellipse 9"
              rx="40"
              ry="39"
              custom={2}
              variants={dotVariants}
              initial="hidden"
              animate={start ? "visible" : "hidden"}
              whileHover={start ? { scale: 1.2, fill: "#FF8A6B" } : {}}
            />
            <motion.ellipse
              cx="442.5"
              cy="728"
              fill="var(--fill-0, #f05a27)"
              id="Ellipse 21"
              rx="23.5"
              ry="23"
              custom={3}
              variants={dotVariants}
              initial="hidden"
              animate={start ? "visible" : "hidden"}
              whileHover={start ? { scale: 1.2, fill: "#FF8A6B" } : {}}
            />
            <motion.ellipse
              cx="676"
              cy="688.5"
              fill="var(--fill-0, #D9D9D9)"
              fillOpacity="0.89"
              id="Ellipse 22"
              rx="17"
              ry="16.5"
              custom={4}
              variants={dotVariants}
              initial="hidden"
              animate={start ? "visible" : "hidden"}
              whileHover={start ? { scale: 1.2 } : {}}
            />
            <motion.g 
              id="Vector_2"
              custom={5}
              variants={dotVariants}
              initial="hidden"
              animate={start ? "visible" : "hidden"}
            >
              <path d={svgPaths.p4a228c0} fill="var(--fill-0, #f05a27)" />
              <path d={svgPaths.p2634200} fill="var(--fill-0, #f05a27)" />
            </motion.g>
            <motion.circle
              cx="992"
              cy="348"
              fill="var(--fill-0, #566D6F)"
              id="Ellipse 11"
              r="37"
              custom={6}
              variants={dotVariants}
              initial="hidden"
              animate={start ? "visible" : "hidden"}
              whileHover={start ? { scale: 1.2, fill: "#6A7D7F" } : {}}
            />
            <motion.g 
              id="Vector_3"
              custom={7}
              variants={dotVariants}
              initial="hidden"
              animate={start ? "visible" : "hidden"}
            >
              <path d={svgPaths.pf5fb600} fill="var(--fill-0, #9DACA9)" />
              <path d={svgPaths.p30ba1f00} fill="var(--fill-0, #9DACA9)" />
            </motion.g>
            <motion.g 
              id="Vector_4"
              custom={8}
              variants={dotVariants}
              initial="hidden"
              animate={start ? "visible" : "hidden"}
            >
              <path d={svgPaths.p3db64b00} fill="var(--fill-0, #f05a27" />
              <path d={svgPaths.p1da9380} fill="var(--fill-0, #f05a27)" />
            </motion.g>
            <motion.circle
              cx="380.5"
              cy="175.5"
              fill="var(--fill-0, #f05a27)"
              id="Ellipse 16"
              r="33.5"
              custom={9}
              variants={dotVariants}
              initial="hidden"
              animate={start ? "visible" : "hidden"}
              whileHover={start ? { scale: 1.2, fill: "#FF8A6B" } : {}}
            />
            <motion.circle
              cx="291.5"
              cy="310.5"
              fill="var(--fill-0, #D9D9D9)"
              fillOpacity="0.89"
              id="Ellipse 20"
              r="33.5"
              custom={10}
              variants={dotVariants}
              initial="hidden"
              animate={start ? "visible" : "hidden"}
              whileHover={start ? { scale: 1.2 } : {}}
            />
            <motion.g 
              id="Vector_5"
              custom={11}
              variants={dotVariants}
              initial="hidden"
              animate={start ? "visible" : "hidden"}
            >
              <path d={svgPaths.p1abfa300} fill="var(--fill-0, #D4DDD8)" />
              <path d={svgPaths.p2916c880} fill="var(--fill-0, #D4DDD8)" />
            </motion.g>
            <motion.g 
              id="Vector_6"
              custom={12}
              variants={dotVariants}
              initial="hidden"
              animate={start ? "visible" : "hidden"}
            >
              <path d={svgPaths.p2565aff0} fill="var(--fill-0, #9DACA9)" />
              <path d={svgPaths.p20e8c880} fill="var(--fill-0, #9DACA9)" />
            </motion.g>
            <motion.circle
              cx="166.5"
              cy="185.5"
              fill="var(--fill-0, #f05a27)"
              id="Ellipse 17"
              r="46.5"
              custom={13}
              variants={dotVariants}
              initial="hidden"
              animate={start ? "visible" : "hidden"}
              whileHover={start ? { scale: 1.2, fill: "#FF8A6B" } : {}}
            />
            <motion.g 
              id="Vector_7"
              custom={14}
              variants={dotVariants}
              initial="hidden"
              animate={start ? "visible" : "hidden"}
            >
              <path d={svgPaths.p256b5300} fill="var(--fill-0, #9DACA9)" />
              <path d={svgPaths.p10bd5800} fill="var(--fill-0, #9DACA9)" />
            </motion.g>
            <motion.g 
              id="Vector_8"
              custom={15}
              variants={dotVariants}
              initial="hidden"
              animate={start ? "visible" : "hidden"}
            >
              <path d={svgPaths.p946c780} fill="var(--fill-0, #f05a27)" />
              <path d={svgPaths.p419f700} fill="var(--fill-0, #f05a27)" />
            </motion.g>
          </g>
        </svg>
      </div>
    );
  }
  
  // ===== LOADING ANIMATION =====
  function AnimatedLoading({ start }) {
    return (
      <div
        className="absolute h-[395px] left-[537px] top-[221px] w-[393.961px]"
        data-name="loading"
      >
        <div className="absolute bottom-[-0.127%] left-[-0.126%] right-[-0.127%] top-[-0.127%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 396 397"
          >
            <g id="loading">
              <motion.path
                d={svgPaths.p1fcb9b40}
                id="Ellipse 6"
                stroke="var(--stroke-0, black)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={start ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 2, delay:0.5 }}
              />
              <motion.circle
                cx="195.461"
                cy="199.626"
                id="Ellipse 2"
                r="86"
                stroke="var(--stroke-0, black)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={start ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 2, delay: 0.5 }}
              />
              <motion.path
                d={svgPaths.p3438062f}
                id="Ellipse 21"
                stroke="var(--stroke-0, black)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={start ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 2, delay: 0.5 }}
              />
              <motion.path
                d={svgPaths.p3b02ac80}
                id="Ellipse 22"
                stroke="var(--stroke-0, black)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={start ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 2, delay: 0.5 }}
              />
              <motion.path
                d={svgPaths.p9854d00}
                id="Ellipse 4"
                stroke="var(--stroke-0, black)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={start ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 2, delay: 0.5 }}
              />
              <motion.path
                d={svgPaths.p232c7f00}
                id="Ellipse 5"
                stroke="var(--stroke-0, black)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={start ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 2, delay: 0.5 }}
              />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  
  // ===== ANIMATED TEXT LABELS =====
  function AnimatedText({ children, delay, className, start }) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={start ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ 
          duration: start ? 0.8 : 0.1, 
          delay: start ? delay : 0,
          ease: start ? "easeOut" : "easeIn"
        }}
        whileHover={{ scale: 1.05, y: -2 }}
      >
        {children}
      </motion.div>
    );
  }
  
  // ===== ANIMATED ICONS =====
  function AnimatedIcon({ children, delay, className, start }) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, scale: 0 }}
        animate={start ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ 
          duration: 0.6,
          delay: start ? delay : 0,
          ease: "easeOut"
        }}
        whileHover={{ 
          scale: 1.1,
          transition: { duration: 0.2 }
        }}
      >
        {children}
      </motion.div>
    );
  }
  
  
  
  export default function App() {
    const [animationStarted, setAnimationStarted] = useState(false);
    const [centerDotAnimated, setCenterDotAnimated] = useState(false);
    const [diagramScale, setDiagramScale] = useState(0.1);
    
    // Responsive scaling based on screen size
    useEffect(() => {
      const updateScale = () => {
        const width = window.innerWidth;
        if (width < 640) {
          setDiagramScale(0.3); // Mobile: 40%
        } else if (width <= 768) {
          setDiagramScale(0.5); // Small: 20%
        } else if (width <= 1024) {
          setDiagramScale(0.67); // Medium: 10%
        } else {
          setDiagramScale(0.9); // Large: 90%
        }
      };

      updateScale();
      window.addEventListener('resize', updateScale);
      return () => window.removeEventListener('resize', updateScale);
    }, []);

    // Responsive translateX based on screen size
    const getTranslateX = () => {
      const width = window.innerWidth;
      if (width <= 640) {
        return -160; // Mobile: more to the left
      } else if (width <= 768) {
        return -200; // Small: moderate left
      } else if (width <= 1024) {
        return -229; // Medium: slight left
      } else {
        return -130; // Large: original position
      }
    };
    
    // Scroll-based animation for all elements
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const triggerScrollAmount = 600; // Adjust this value as needed
        
        if (scrollY >= triggerScrollAmount && !centerDotAnimated) {
          setCenterDotAnimated(true);
          setAnimationStarted(true);
        } else if (scrollY < triggerScrollAmount && centerDotAnimated) {
          setCenterDotAnimated(false);
          setAnimationStarted(false);
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, [centerDotAnimated]);
    
    // Reset animation when component unmounts
    useEffect(() => {
      return () => {
        setAnimationStarted(false);
        setCenterDotAnimated(false);
      };
    }, []);
  
    return (
      <div 
        className="h-screen flex items-center justify-center" 
        style={{ 
          marginTop: '0'
        }} 
        data-section="animated-diagram"
      >
        {/* Container for consistent alignment */}
        <div className="relative w-full max-w-7xl mx-auto h-full flex items-center justify-center">
          {/* Main animation container - optimized for scroll */}
          <div 
            className="relative w-full h-full flex items-center justify-center"
            style={{ 
              transform: `translateX(${getTranslateX()}px) scale(${diagramScale})`,
              zIndex: 10,
              maxWidth: '100vw',
              maxHeight: '100vh'
            }}
          >
            {/* Main diagram elements */}
            <div className="relative w-full h-full">
              <AnimatedLine start={animationStarted} />
              <AnimatedCentreDot start={centerDotAnimated} />
              <AnimatedDotts start={animationStarted} />
              <AnimatedLoading start={animationStarted} />
            
              {/* Text Labels */}
            <AnimatedText
                delay={3}
                className="absolute font-['FFF Tusj'] h-[73px] leading-[0] left-[142px] not-italic text-[#566d6f] text-[52px] text-left top-[507px] w-[272px]"
                start={animationStarted}
            >
              <p className="block leading-[normal]" style={{ fontFamily: "FFF Tusj, serif" }}>Creative</p>
            </AnimatedText>
            
            <AnimatedText
                delay={3}
                className="absolute font-['FFF Tusj'] h-[83px] leading-[0] left-[455px] not-italic text-[#566d6f] text-[52px] text-left top-[635px] w-[272px]"
                start={animationStarted}
            >
              <p className="block leading-[normal]" style={{ fontFamily: "FFF Tusj, serif" }}>Event</p>
            </AnimatedText>
            
            <AnimatedText
                delay={3}
                className="absolute font-['FFF Tusj'] h-[73px] leading-[0] left-[304px] not-italic text-[#566d6f] text-[52px] text-left top-[69px] w-[272px]"
                start={animationStarted}
            >
              <p className="block leading-[normal]" style={{ fontFamily: "FFF Tusj, serif" }}>AudioVisual</p>
            </AnimatedText>
            
            <AnimatedText
                delay={3}
                className="absolute font-['FFF Tusj'] h-[73px] leading-[0] left-[947px] not-italic text-[#566d6f] text-[52px] text-left top-[57px] w-[174px]"
                start={animationStarted}
            >
              <p className="block leading-[normal]" style={{ fontFamily: "FFF Tusj, serif" }}>Digital</p>
            </AnimatedText>
            
            <AnimatedText
                delay={3}
                className="absolute font-['FFF Tusj'] h-[73px] leading-[0] left-[1180px] not-italic text-[#566d6f] text-[52px] text-left top-[254px] w-[225px]"
                start={animationStarted}
            >
              <p className="block leading-[normal]" style={{ fontFamily: "FFF Tusj, serif" }}>Travel</p>
            </AnimatedText>
            
            <AnimatedText
                delay={3.0}
                className="absolute font-['FFF Tusj'] h-[73px] leading-[0] left-[1160px] not-italic text-[#566d6f] text-[52px] text-left top-[376px] w-[225px]"
                start={animationStarted}
            >
              <p className="block leading-[normal]" style={{ fontFamily: "FFF Tusj, serif" }}>Exhibition</p>
            </AnimatedText>
            
            <AnimatedText
                delay={3}
                className="absolute font-['FFF Tusj'] h-[73px] leading-[0] left-[869px] not-italic text-[#566d6f] text-[52px] text-left top-[618px] w-[225px]"
                start={animationStarted}
            >
              <p className="block leading-[normal]" style={{ fontFamily: "FFF Tusj, serif" }}>Idea</p>
            </AnimatedText>
            
              {/* Icons */}
            <AnimatedIcon
                delay={2.7}
                className="absolute left-[586px] size-[117px] top-[10px]"
                start={animationStarted}
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 117 117"
              >
                <g id="icon15">
                  <path
                    d={svgPaths.p1e881800}
                    fill="var(--fill-0, #566D6F)"
                    id="Vector"
                  />
                </g>
              </svg>
            </AnimatedIcon>
            
            <AnimatedIcon
                delay={2.7}
                className="absolute left-[485px] size-[67px] top-[156px]"
                start={animationStarted}
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 67 67"
              >
                <g id="icon14">
                  <path
                    d={svgPaths.p21317500}
                    fill="var(--fill-0, white)"
                    id="Vector"
                  />
                </g>
              </svg>
            </AnimatedIcon>
      
            <AnimatedIcon
                delay={2.7}
                className="absolute left-[806px] size-[63px] top-[25px]"
                start={animationStarted}
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 63 63"
              >
                <g id="icon13">
                  <path
                    d={svgPaths.p3e415b00}
                    fill="var(--fill-0, white)"
                    id="Vector"
                  />
                </g>
              </svg>
            </AnimatedIcon>
      
            <AnimatedIcon
                delay={2.7}
                className="absolute left-[924px] size-[65px] top-[151px]"
                start={animationStarted}
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 65 65"
              >
                  <g id="ICON12">
                  <path
                    d={svgPaths.p2aa72800}
                    fill="var(--fill-0, white)"
                    id="Vector"
                  />
                </g>
              </svg>
            </AnimatedIcon>
      
            <AnimatedIcon
                delay={2.7}
                className="absolute left-[1112px] size-[91px] top-[155px]"
                start={animationStarted}
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 91 91"
              >
                  <g id="ICON11">
                    <path
                      d={svgPaths.p5b08c80}
                      fill="var(--fill-0, white)"
                      id="Vector"
                    />
                </g>
              </svg>
            </AnimatedIcon>
      
            <AnimatedIcon
                delay={2.7}
                className="absolute left-[1103px] overflow-clip size-14 top-[333px]"
                start={animationStarted}
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 50 50"
              >
                <g id="Group">
                  <path
                    d={svgPaths.p2b7ce680}
                    id="Vector"
                    stroke="var(--stroke-0, white)"
                    strokeLinejoin="round"
                    strokeWidth="5"
                  />
                  <path
                    d={svgPaths.p1c188d00}
                    id="Vector_2"
                    stroke="var(--stroke-0, white)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="5"
                  />
                </g>
              </svg>
            </AnimatedIcon>
      
            <AnimatedIcon
                delay={2.7}
                className="absolute left-[1110px] size-[59px] top-[613px]"
                start={animationStarted}
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 59 59"
              >
                <g id="ICON9">
                  <path
                    d={svgPaths.p21a47a80}
                    fill="var(--fill-0, white)"
                    id="Vector"
                  />
                </g>
              </svg>
            </AnimatedIcon>
      
            <AnimatedIcon
                delay={2.7}
                className="absolute left-[965px] overflow-clip size-[68px] top-[523px]"
                start={animationStarted}
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 60 64"
              >
                <g id="Group">
                  <g id="Vector"></g>
                  <g id="Vector_2">
                    <path d={svgPaths.p13fde400} fill="var(--fill-0, white)" />
                  </g>
                </g>
              </svg>
            </AnimatedIcon>
      
            <AnimatedIcon
                delay={2.7}
                className="absolute flex h-[120.497px] items-center justify-center left-[280px] top-[246px] w-[120.497px]"
                start={animationStarted}
            >
              <div className="flex-none rotate-[194.328deg] scale-y-[-100%]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 250 110"
                >
                  <g id="ICON7">
                    <path
                      d={svgPaths.p1896ef00}
                      fill="var(--fill-0, #566D6F)"
                      id="Vector"
                    />
                  </g>
                </svg>
              </div>
            </AnimatedIcon>
      
            <AnimatedIcon
                delay={2.7}
                className="absolute left-[695px] size-[134px] top-[377px]"
                start={animationStarted}
            >
              <div className="absolute bottom-[-2.07%] left-0 right-0 top-0">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 134 137"
                >
                    <g id="ICON6">
                      <path
                        d={svgPaths.p37508d00}
                        fill="var(--fill-0, white)"
                        fillOpacity="0.62"
                      />
                    </g>
                </svg>
              </div>
            </AnimatedIcon>
      
            <AnimatedIcon
                delay={2.7}
                className="absolute left-[1237px] size-20 top-[453px]"
                start={animationStarted}
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 80 80"
              >
                <g id="ICON5">
                  <path
                    d={svgPaths.p3e347400}
                    fill="var(--fill-0, white)"
                    id="Vector"
                  />
                </g>
              </svg>
            </AnimatedIcon>
      
            <AnimatedIcon
                delay={2.7}
                className="absolute left-[709px] size-[60px] top-[117px]"
                start={animationStarted}
            >
              <div className="overflow-clip relative size-[60px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 56 56"
                >
                  <g id="Group">
                    <path
                      d={svgPaths.p211f3280}
                      id="Vector"
                      stroke="var(--stroke-0, white)"
                      strokeLinecap="round"
                      strokeWidth="5"
                    />
                    <path
                      d={svgPaths.p25838580}
                      id="Vector_2"
                      stroke="var(--stroke-0, white)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="5"
                    />
                  </g>
                </svg>
              </div>
            </AnimatedIcon>
      
            
      
            <AnimatedIcon
                delay={2.7}
                className="absolute left-[270px] size-[67px] top-[166px]"
                start={animationStarted}
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 67 67"
              >
                <g id="ICON 2">
                  <path
                    d={svgPaths.p193a7b80}
                    fill="var(--fill-0, white)"
                    id="Vector"
                  />
                </g>
              </svg>
            </AnimatedIcon>
      
            <AnimatedIcon
                delay={2.7}
                className="absolute h-[55.439px] left-[326px] top-[617px] w-[67.704px]"
                start={animationStarted}
            >
              <div className="absolute bottom-[-0.902%] left-[-0.739%] right-[-0.739%] top-[-1.177%]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 70 57"
                >
                  <g id="ICON 1">
                    <path
                      d={svgPaths.p3a14200}
                      id="Vector"
                      stroke="var(--stroke-0, white)"
                    />
                  </g>
                </svg>
              </div>
            </AnimatedIcon>
      
            <AnimatedIcon
                delay={2.7}
                className="absolute left-[149px] size-[78px] top-[369px]"
                start={animationStarted}
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 78 78"
              >
                  <g id="majesticons:hand-pointer-event-line">
                  <path
                    d={svgPaths.p16fcbcc0}
                    id="Vector"
                    stroke="var(--stroke-0, #566D6F)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="5"
                  />
                </g>
              </svg>
            </AnimatedIcon>
            </div>
          </div>
        </div>
      </div>
    );
  }