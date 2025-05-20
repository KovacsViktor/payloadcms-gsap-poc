'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { styled } from '@mui/material/styles';
import { 
  Typography, 
  Box, 
  TypographyProps,
} from '@mui/material';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const PlaygroundBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  padding: theme.spacing(4),
  background: '#1a1721',
  borderRadius: theme.shape.borderRadius,
  position: 'relative',
  overflow: 'hidden',
  minHeight: '100vh',
  color: 'white',
  marginBottom: theme.spacing(8),
}));

const StyledTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  position: 'absolute',
  top: '50vh',
  fontFamily: 'termina, sans-serif',
  fontWeight: 900,
  fontSize: '8vw',
  textAlign: 'center',
  width: '100%',
  transform: 'translateY(-100%)',
  color: 'white',
  WebkitTextStroke: '1.5px white',
  zIndex: -2,
}));

const OutlineText = styled(StyledTitle)({
  color: 'transparent',
  WebkitTextStroke: '1.5px white',
  zIndex: 2,
});

const FilterText = styled(StyledTitle)({
  mixBlendMode: 'screen',
  color: '#804691',
  zIndex: 2,
});

const Wrapper = styled(Box)({
  overflow: 'hidden',
  position: 'relative',
  height: '100%',
  width: '100%',
});

const Content = styled(Box)({
  overflow: 'visible',
  width: '100%',
});

const ImagesGrid = styled(Box)({
  paddingTop: '60vh',
  position: 'relative',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  minHeight: '150vh',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(20, 2%)',
  gridTemplateRows: 'repeat(30, 3%)',
  justifyContent: 'center',
  justifyItems: 'center',
  alignItems: 'center',
  zIndex: 1,
});

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  '&:nth-of-type(1)': { gridArea: '1/1/6/8' },
  '&:nth-of-type(2)': { gridArea: '3/12/8/20' },
  '&:nth-of-type(3)': { gridArea: '9/5/13/15' },
  '&:nth-of-type(4)': { gridArea: '14/1/18/8' },
  '&:nth-of-type(5)': { gridArea: '16/12/20/19' },
  '&:nth-of-type(6)': { gridArea: '20/2/25/9' },
  '&:nth-of-type(7)': { gridArea: '22/11/24/20' },
  '&:nth-of-type(8)': { gridArea: '26/5/30/15' },
});

const images = [
  { src: "https://images.unsplash.com/photo-1556856425-366d6618905d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5lb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60", speed: 0.8 },
  { src: "https://images.unsplash.com/photo-1520271348391-049dd132bb7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", speed: 0.9 },
  { src: "https://images.unsplash.com/photo-1609166214994-502d326bafee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", speed: 1 },
  { src: "https://images.unsplash.com/photo-1589882265634-84f7eb9a3414?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=434&q=80", speed: 1.1 },
  { src: "https://images.unsplash.com/photo-1514689832698-319d3bcac5d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=434&q=80", speed: 0.9 },
  { src: "https://images.unsplash.com/photo-1535207010348-71e47296838a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", speed: 1.2 },
  { src: "https://images.unsplash.com/photo-1588007375246-3ee823ef4851?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG5lb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60", speed: 0.8 },
  { src: "https://images.unsplash.com/photo-1571450669798-fcb4c543f6a4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG5lb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60", speed: 1 },
];

export default function GSAPScrollSmoothVertical() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const smootherRef = useRef<ScrollSmoother | null>(null);

  const { contextSafe } = useGSAP({ scope: wrapperRef });

  const createSmoother = contextSafe(() => {
    const skewSetter = gsap.quickTo("img", "skewY");
    const clamp = gsap.utils.clamp(-20, 20);

    // Create ScrollSmoother instance
    smootherRef.current = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1.5,
      effects: true,
      onUpdate: self => skewSetter(clamp(self.getVelocity() / -50)),
      onStop: () => skewSetter(0)
    });
  });

  useEffect(() => {
    createSmoother();
  }, []);

  return (
    <PlaygroundBox>
      <StyledTitle>Scrolly Images</StyledTitle>
      <OutlineText aria-hidden="true">Scrolly Images</OutlineText>
      <FilterText aria-hidden="true">Scrolly Images</FilterText>

      <Wrapper ref={wrapperRef}>
        <Content ref={contentRef}>
          <ImagesGrid>
            {images.map((image, index) => (
              <StyledImage
                key={index}
                src={image.src}
                data-speed={image.speed}
                alt={`Scrolling image ${index + 1}`}
              />
            ))}
          </ImagesGrid>
        </Content>
      </Wrapper>
    </PlaygroundBox>
  );
} 