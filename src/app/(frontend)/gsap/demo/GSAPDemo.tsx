'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { styled } from '@mui/material/styles';
import { 
  Typography, 
  Box, 
  Button,
  Stack,
  List,
  ListItem,
  TypographyProps,
  Link,
} from '@mui/material';

const PlaygroundBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  padding: theme.spacing(4),
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  position: 'relative',
  overflow: 'hidden',
  minHeight: '400px',
}));

const DemoElement = styled(Box)(({ theme }) => ({
  width: '100px',
  height: '100px',
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  borderRadius: '8px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  cursor: 'pointer',
}));

const ControlPanel = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(2),
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1,
  background: 'rgba(0, 0, 0, 0.8)',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backdropFilter: 'blur(8px)',
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

const DemoContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '300px',
}));

const FeaturesContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
  variant: 'h6',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
}));

const FeatureList = styled(List)({
  listStyleType: 'none',
  padding: 0,
});

const FeatureItem = styled(ListItem)({
  padding: 0,
});

const FeatureText = styled(Typography)({
  fontSize: '1rem',
  lineHeight: 1.5,
});

const ControlStack = styled(Stack)({
  flexDirection: 'row',
  gap: '16px',
});

const ControlButton = styled(Button)<{ isplaying?: string }>(({ theme, isplaying }) => ({
  variant: 'contained',
  color: isplaying === 'true' ? 'secondary' : 'primary',
}));

export default function GSAPDemo() {
  const demoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useGSAP(() => {
    if (demoRef.current) {
      const demo = demoRef.current;
      
      const demoTL = gsap.timeline({ paused: true });
      
      demoTL
        .to(demo, {
          scale: 1.5,
          rotation: 360,
          duration: 1,
          ease: "power2.inOut"
        })
        .to(demo, {
          x: "200px",
          y: "-100px",
          duration: 1,
          ease: "bounce.out"
        })
        .to(demo, {
          scale: 0.5,
          rotation: -360,
          duration: 1,
          ease: "power2.inOut"
        })
        .to(demo, {
          x: "-200px",
          y: "100px",
          duration: 1,
          ease: "elastic.out(1, 0.3)"
        })
        .to(demo, {
          scale: 1,
          rotation: 0,
          x: 0,
          y: 0,
          duration: 1,
          ease: "power2.inOut"
        });

      (demoRef as any).current.timeline = demoTL;
    }
  }, []);

  const handlePlayDemo = () => {
    if ((demoRef as any).current?.timeline) {
      if (isPlaying) {
        (demoRef as any).current.timeline.reverse();
      } else {
        (demoRef as any).current.timeline.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <PlaygroundBox>
      <StyledTitle component="h2">
        Interactive GSAP Playground
      </StyledTitle>
      
      <DemoContainer>
        <DemoElement ref={demoRef} />
        <ControlPanel>
          <ControlStack>
            <ControlButton 
              onClick={handlePlayDemo}
              isplaying={isPlaying.toString()}
            >
              {isPlaying ? "Reverse" : "Play"} Demo
            </ControlButton>
          </ControlStack>
        </ControlPanel>
      </DemoContainer>

      <FeaturesContainer>
        <FeatureTitle>
          This demo showcases:
        </FeatureTitle>
        <FeatureList>
          <FeatureItem>
            <FeatureText>
              • Timeline sequencing with multiple animations
            </FeatureText>
          </FeatureItem>
          <FeatureItem>
            <FeatureText>
              • Different easing functions (power2, bounce, elastic)
            </FeatureText>
          </FeatureItem>
          <FeatureItem>
            <FeatureText>
              • Complex transforms (scale, rotation, position)
            </FeatureText>
          </FeatureItem>
          <FeatureItem>
            <FeatureText>
              • Play/Reverse control
            </FeatureText>
          </FeatureItem>
        </FeatureList>
      </FeaturesContainer>
    </PlaygroundBox>
  );
} 