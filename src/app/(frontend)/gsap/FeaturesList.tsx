'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { styled } from '@mui/material/styles';
import { 
  Typography, 
  Box, 
  List,
  ListItem,
  Link,
  TypographyProps,
} from '@mui/material';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const StyledTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
}));

const StyledList = styled(List)(({ theme }) => ({
  listStyleType: 'none',
  padding: 0,
  margin: 0,
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1, 0),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(1),
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(0.5),
}));

const FeatureDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
}));

const features = [
  {
    title: "High-Performance Animations",
    description: "Create smooth, fast, and optimized animations for DOM, SVG, canvas, or JavaScript objects with minimal performance impact."
  },
  {
    title: "Tweening",
    description: "Animate properties of elements or objects from one state to another with precise control over timing, easing, and interpolation. Learn more about GSAP's tweening capabilities in the official documentation."
  },
  {
    title: "Timeline Control",
    description: "Create complex animation sequences with precise control using GSAP's Timeline features, including labels, position parameters, and nested timelines. Learn more about GSAP's timeline capabilities in the official documentation."
  },
  {
    title: "Easing Functions",
    description: "Access a comprehensive library of easing functions and create custom ones for natural, physics-based, or custom motion effects. Learn more about GSAP's easing functions in the official documentation."
  },
  {
    title: "Cross-Browser Compatibility",
    description: "Ensure consistent animation performance and results across all major browsers, including legacy support and mobile devices."
  },
  {
    title: "Plugin Ecosystem",
    description: "Extend core functionality with official plugins (ScrollTrigger, Draggable, MorphSVG, SplitText) and community-created plugins. Learn more about GSAP's plugin system in the official documentation."
  },
  {
    title: "SVG and CSS Animation",
    description: "Animate SVG shapes, paths, and CSS properties with precise control, including complex SVG morphing and CSS transforms. Explore powerful SVG plugins like DrawSVG, MorphSVG, and MotionPath for advanced animations."
  },
  {
    title: "Scroll-Based Animation",
    description: "Create sophisticated scroll-triggered animations with ScrollTrigger plugin, including pinning, parallax, and scroll-based progress. Explore powerful scroll plugins for enhanced scrolling experiences."
  },
  {
    title: "Draggable Elements",
    description: "Create interactive, draggable elements with advanced features like inertia, snapping, and touch/mouse event handling. Learn more about GSAP's Draggable plugin for creating interactive drag experiences."
  },
  {
    title: "Motion Paths",
    description: "Animate objects along complex paths with precise control over orientation, alignment, and path manipulation."
  },
  {
    title: "Staggered Animations",
    description: "Create dynamic, sequential animations with advanced staggering options, including grid-based and random patterns."
  },
  {
    title: "Animation Control",
    description: "Fine-tune animations with precise control over playback, including play, pause, reverse, restart, and seek functionality."
  },
  {
    title: "Event System",
    description: "Hook into animation lifecycle events with a comprehensive event system for start, update, complete, and custom events."
  },
  {
    title: "Keyframes Animation",
    description: "Create complex, multi-step animations with keyframe syntax, supporting both simple and advanced keyframe configurations."
  },
  {
    title: "Customizable and Extensible",
    description: "Extend GSAP's capabilities through custom plugins, utility functions, and integration with other libraries and frameworks."
  },
  {
    title: "Performance Optimization",
    description: "Leverage GSAP's built-in performance features like auto-killing, lazy rendering, and GPU acceleration for optimal performance."
  },
  {
    title: "Responsive Animations",
    description: "Create responsive animations that adapt to different screen sizes and orientations with built-in responsive tools."
  },
  {
    title: "Debugging Tools",
    description: "Utilize GSAP's debugging features, including timeline visualization, performance monitoring, and error handling."
  }
];

export default function FeaturesList() {
  const featureRefs = useRef<(HTMLLIElement | null)[]>([]);

  useGSAP(() => {
    featureRefs.current.forEach((feature, index) => {
      if (!feature) return;

      gsap.from(feature, {
        scrollTrigger: {
          trigger: feature,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: index * 0.1
      });
    });
  }, []);

  return (
    <Box sx={{ mt: 6 }}>
      <StyledTitle component="h2">
        Core Features and Capabilities
      </StyledTitle>
      
      <StyledList>
        {features.map((feature, index) => (
          <StyledListItem 
            key={feature.title}
            ref={(el) => {
              featureRefs.current[index] = el;
            }}
          >
            <FeatureTitle>
              {feature.title === "Easing Functions" ? (
                <>
                  Easing Functions - <Link href="https://gsap.com/docs/v3/Eases/" target="_blank" rel="noopener noreferrer">Documentation</Link>
                </>
              ) : feature.title === "Tweening" ? (
                <>
                  Tweening - <Link href="https://gsap.com/docs/v3/GSAP/Tween" target="_blank" rel="noopener noreferrer">Documentation</Link>
                </>
              ) : feature.title === "Timeline Control" ? (
                <>
                  Timeline Control - <Link href="https://gsap.com/docs/v3/GSAP/Timeline/" target="_blank" rel="noopener noreferrer">Documentation</Link>
                </>
              ) : feature.title === "Plugin Ecosystem" ? (
                <>
                  Plugin Ecosystem - <Link href="https://gsap.com/docs/v3/Plugins/" target="_blank" rel="noopener noreferrer">Documentation</Link>
                </>
              ) : feature.title === "SVG and CSS Animation" ? (
                <>
                  SVG and CSS Animation - <Link href="https://gsap.com/docs/v3/Plugins/DrawSVGPlugin" target="_blank" rel="noopener noreferrer">DrawSVG</Link> • <Link href="https://gsap.com/docs/v3/Plugins/MorphSVGPlugin" target="_blank" rel="noopener noreferrer">MorphSVG</Link> • <Link href="https://gsap.com/docs/v3/Plugins/MotionPathPlugin" target="_blank" rel="noopener noreferrer">MotionPath</Link> • <Link href="https://gsap.com/docs/v3/Plugins/MotionPathHelper" target="_blank" rel="noopener noreferrer">MotionPathHelper</Link>
                </>
              ) : feature.title === "Scroll-Based Animation" ? (
                <>
                  Scroll-Based Animation - <Link href="https://gsap.com/docs/v3/Plugins/ScrollTrigger" target="_blank" rel="noopener noreferrer">ScrollTrigger</Link> • <Link href="https://gsap.com/docs/v3/Plugins/ScrollToPlugin" target="_blank" rel="noopener noreferrer">ScrollTo</Link> • <Link href="https://gsap.com/docs/v3/Plugins/ScrollSmoother" target="_blank" rel="noopener noreferrer">ScrollSmoother</Link>
                </>
              ) : feature.title === "Draggable Elements" ? (
                <>
                  Draggable Elements - <Link href="https://gsap.com/docs/v3/Plugins/Draggable" target="_blank" rel="noopener noreferrer">Documentation</Link>
                </>
              ) : (
                feature.title
              )}
            </FeatureTitle>
            <FeatureDescription>
              {feature.description}
            </FeatureDescription>
          </StyledListItem>
        ))}
      </StyledList>
    </Box>
  );
} 