'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";
import { styled } from '@mui/material/styles';
import { 
  Typography, 
  Box, 
  TypographyProps,
  Button,
  Stack,
  Slider,
} from '@mui/material';

gsap.registerPlugin(useGSAP, MotionPathPlugin);

const PlaygroundBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  padding: theme.spacing(4),
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  position: 'relative',
  overflow: 'hidden',
  minHeight: '400px',
}));

const StyledTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
}));

const SVGContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '500px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  marginBottom: theme.spacing(4),
  background: '#2a2a2a',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
}));

const ControlPanel = styled(Stack)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(2),
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1,
  background: 'rgba(0, 0, 0, 0.8)',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backdropFilter: 'blur(8px)',
  width: '80%',
  maxWidth: '400px',
}));

const MotionButton = styled(Button)(({ theme }) => ({
  minWidth: '120px',
  background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
  },
}));

const SVGWrapper = styled('svg')({
  width: '100%',
  height: '100%',
  '& path': {
    fill: 'none',
    stroke: '#60a5fa',
    strokeWidth: 2,
  },
  '& circle': {
    fill: '#a78bfa',
  },
});

export default function GSAPMotionPath() {
  const svgRef = useRef<SVGSVGElement>(null);
  const objectRef = useRef<SVGCircleElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  const { contextSafe } = useGSAP({ scope: svgRef });

  // Initialize the circle's position and create the animation
  useGSAP(() => {
    if (pathRef.current && objectRef.current) {
      animationRef.current = gsap.to(objectRef.current, {
        duration: 5,
        motionPath: {
          path: pathRef.current,
          align: pathRef.current,
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
        ease: "none",
        paused: true,
        onUpdate: () => {
          setProgress(gsap.getProperty(objectRef.current, "motionPath") as number * 100);
        }
      });
    }
  }, []);

  const animateAlongPath = contextSafe(() => {
    if (!isPlaying && animationRef.current) {
      animationRef.current.play();
      setIsPlaying(true);
    } else if (animationRef.current) {
      animationRef.current.pause();
      setIsPlaying(false);
    }
  });

  const handleSliderChange = contextSafe((event: Event, newValue: number | number[]) => {
    if (animationRef.current && typeof newValue === 'number') {
      animationRef.current.pause();
      setIsPlaying(false);
      animationRef.current.progress(newValue / 100);
      setProgress(newValue);
    }
  });

  return (
    <PlaygroundBox>
      <StyledTitle component="h2">
        Motion Path Animation
      </StyledTitle>
      
      <SVGContainer>
        <SVGWrapper ref={svgRef}>
          <path 
            ref={pathRef}
            d="M100,200 C100,100 300,100 300,200 C300,300 500,300 500,200 C500,100 700,100 700,200" 
          />
          <circle ref={objectRef} r="10" />
        </SVGWrapper>

        <ControlPanel direction="column" spacing={2}>
          <MotionButton 
            onClick={animateAlongPath}
            variant="contained"
          >
            {isPlaying ? "Stop" : "Start"} Motion
          </MotionButton>
          <Slider
            value={progress}
            onChange={handleSliderChange}
            aria-label="Motion Progress"
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `${Math.round(value)}%`}
          />
        </ControlPanel>
      </SVGContainer>
    </PlaygroundBox>
  );
} 