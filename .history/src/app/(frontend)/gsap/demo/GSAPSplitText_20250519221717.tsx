'use client';

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { styled } from '@mui/material/styles';
import { 
  Typography, 
  Box, 
  TypographyProps,
  Button,
} from '@mui/material';

gsap.registerPlugin(useGSAP, SplitText);

const PlaygroundBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  padding: theme.spacing(4),
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  position: 'relative',
  overflow: 'hidden',
  minHeight: '400px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(4),
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

const Container = styled(Box)(({ theme }) => ({
  maxWidth: '80vw',
  textAlign: 'center',
}));

const SplitTextWrapper = styled(Typography)(({ theme }) => ({
  opacity: 0,
  textAlign: 'center',
  color: theme.palette.text.primary,
  fontSize: 'clamp(2rem, 6rem, 3vw)',
  letterSpacing: '0.05rem',
  willChange: 'transform',
  '& *': {
    willChange: 'transform',
  },
}));

const ReplayButton = styled(Button)(({ theme }) => ({
  display: 'inline-block',
  outline: 'none',
  padding: '12px 25px',
  background: 'transparent',
  border: `solid 4px ${theme.palette.text.primary}`,
  color: theme.palette.text.primary,
  textDecoration: 'none',
  borderRadius: '99px',
  textTransform: 'uppercase',
  fontWeight: 600,
  cursor: 'pointer',
  lineHeight: '18px',
  '&:hover': {
    background: 'rgba(0, 0, 0, 0.05)',
  },
}));

export default function GSAPSplitTextDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [splitInstance, setSplitInstance] = useState<SplitText | null>(null);
  const [tween, setTween] = useState<gsap.core.Tween | null>(null);

  const { contextSafe } = useGSAP({ scope: containerRef });

  // Initialize the split text and animation
  useGSAP(() => {
    if (textRef.current) {
      // Set initial opacity
      gsap.set(textRef.current, { opacity: 1 });

      // Create split text instance
      const split = SplitText.create(textRef.current, {
        type: "chars, words",
        mask: "chars"
      });
      setSplitInstance(split);

      // Create the animation
      const newTween = gsap.from(split.chars, {
        duration: 0.6,
        yPercent: "random([-150, 150])",
        xPercent: "random([-150, 150])",
        stagger: {
          from: "random",
          amount: 0.6,
        },
        ease: "power3.out"
      });
      setTween(newTween);
    }
  }, []);

  const handleReplay = contextSafe(() => {
    if (tween) {
      tween.timeScale(0.5).play(0);
    }
  });

  return (
    <PlaygroundBox ref={containerRef}>
      <StyledTitle component="h2">
        Split Text Animation
      </StyledTitle>
      
      <Container>
        <SplitTextWrapper ref={textRef} variant="h1">
          The text in this paragraph is split by chars and words. We have enabled masking on the chars so that we can animate the text to create a fun 'reveal' animation. Nice and easy!
        </SplitTextWrapper>
      </Container>

      <ReplayButton 
        onClick={handleReplay}
        variant="outlined"
      >
        Replay Slowly
      </ReplayButton>
    </PlaygroundBox>
  );
} 