'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { useGSAP } from "@gsap/react";
import { styled } from '@mui/material/styles';
import { 
  Typography, 
  Box, 
  TypographyProps,
} from '@mui/material';

gsap.registerPlugin(useGSAP, Draggable, InertiaPlugin);

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

const Container = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '90%',
  height: '300px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  borderRadius: theme.shape.borderRadius,
  background: 'rgba(0, 0, 0, 0.05)',
  marginBottom: theme.spacing(4),
}));

const Wrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Flair = styled(Box)({
  cursor: 'pointer',
  width: '70px',
  height: '70px',
  maxHeight: '15vh',
  maxWidth: '15vh',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
  '&.dragging': {
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
    transform: 'scale(1.1)',
    zIndex: 1,
  }
});

const Flair1 = styled(Flair)({
  background: 'linear-gradient(45deg, #FF6B6B, #FF8E8E)',
  borderRadius: '8px',
});

const Flair3b = styled(Flair)({
  backgroundImage: 'url(https://assets.codepen.io/16327/ui-flair-2.png)',
});

const Flair4b = styled(Flair)({
  backgroundImage: 'url(https://assets.codepen.io/16327/ui-flair-4.png)',
});

const FlairThrow = styled(Flair)({
  background: 'linear-gradient(45deg, #6C5CE7, #A8A4FF)',
  borderRadius: '8px',
});

const Subtitle = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  left: 0,
  right: 0,
  bottom: theme.spacing(2),
  textAlign: 'center',
  pointerEvents: 'none',
  color: theme.palette.text.secondary,
}));

export default function GSAPDraggable() {
  const containerRef = useRef<HTMLDivElement>(null);
  const flair1Ref = useRef<HTMLDivElement>(null);
  const flair3bRef = useRef<HTMLDivElement>(null);
  const flair4bRef = useRef<HTMLDivElement>(null);
  const flairThrowRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const initDraggables = contextSafe(() => {
    if (!containerRef.current || !flair1Ref.current || !flair3bRef.current || 
        !flair4bRef.current || !flairThrowRef.current) return;

    const commonConfig = {
      onDragStart: function(this: Draggable) {
        gsap.to(this.target, {
          scale: 1.1,
          boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
          duration: 0.3,
          ease: "power2.out"
        });
      },
      onDragEnd: function(this: Draggable) {
        gsap.to(this.target, {
          scale: 1,
          boxShadow: 'none',
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    Draggable.create(flair1Ref.current, {
      type: "x",
      bounds: containerRef.current,
      ...commonConfig
    });

    Draggable.create(flair3bRef.current, {
      type: "rotation",
      inertia: true,
      ...commonConfig
    });

    Draggable.create(flair4bRef.current, {
      bounds: containerRef.current,
      inertia: true,
      ...commonConfig
    });

    // Throwing functionality
    Draggable.create(flairThrowRef.current, {
      type: "x,y",
      bounds: containerRef.current,
      inertia: true,
      throwProps: true,
      ...commonConfig,
      onDragEnd: function(this: Draggable) {
        // Add a slight rotation based on throw velocity
        const velocity = gsap.getProperty(this.target, "velocity");
        const rotation = (velocity as number) * 0.1;
        gsap.to(this.target, {
          rotation: `+=${rotation}`,
          scale: 1,
          boxShadow: 'none',
          duration: 0.5,
          ease: "power2.out"
        });
      }
    });
  });

  useGSAP(() => {
    initDraggables();
  }, []);

  return (
    <PlaygroundBox>
      <StyledTitle component="h2">
        Interactive Draggable Elements
      </StyledTitle>
      
      <Container ref={containerRef}>
        <Wrapper>
          <Flair1 ref={flair1Ref} />
        </Wrapper>
        <Wrapper>
          <Flair3b ref={flair3bRef} />
        </Wrapper>
        <Wrapper>
          <Flair4b ref={flair4bRef} />
        </Wrapper>
        <Wrapper>
          <FlairThrow ref={flairThrowRef} />
        </Wrapper>
        <Subtitle variant="h6">
          Spin us, Drag us...
        </Subtitle>
      </Container>
    </PlaygroundBox>
  );
} 