'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { styled } from '@mui/material/styles';
import { 
  Container, 
  Typography, 
  Box, 
  Paper,
  TypographyProps,
  Button,
} from '@mui/material';
import Link from 'next/link';
gsap.registerPlugin(useGSAP, ScrollTrigger);

const GradientBackground = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
  padding: theme.spacing(4),
}));

const ContentPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'transparent',
  boxShadow: 'none',
}));

const StyledTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: theme.spacing(3),
  background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

const StyledParagraph = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  lineHeight: 1.75,
  color: theme.palette.text.secondary,
}));

const NextLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(4),
  textDecoration: 'none',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
  color: 'white',
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  '&:hover': {
    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
  },
}));

export default function GSAPContent() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    // Initial animations
    const tl = gsap.timeline();
    
    tl.from(titleRef.current, {
      duration: 1,
      y: -50,
      opacity: 0,
      ease: "power3.out"
    })
    .from(contentRef.current, {
      duration: 1,
      y: 30,
      opacity: 0,
      ease: "power3.out"
    }, "-=0.5");
  }, []);

  return (
    <GradientBackground>
      <Container maxWidth="lg">
        <ContentPaper>
          <StyledTitle 
            component="h1" 
            ref={titleRef}
          >
            GSAP - GreenSock Animation Platform
          </StyledTitle>
          
          <ContentBox ref={contentRef}>
            <StyledParagraph>
              GSAP (GreenSock Animation Platform) is a powerful, flexible, and widely-used JavaScript animation library designed to make creating web animations simple and efficient. With GSAP, you can easily build complex, smooth, and responsive animations for HTML, CSS, SVG, canvas, or even JavaScript objects.
            </StyledParagraph>
            
            <StyledParagraph>
              Developers, designers, and companies worldwide rely on GSAP because it offers an easy-to-use syntax, exceptional performance, and advanced timing controls. Whether you need simple effects or intricate, multi-step animation sequences, GSAP provides a fast, reliable, and broadly supported solution.
            </StyledParagraph>
            
            <StyledParagraph>
              The main goal of the GreenSock Animation Platform is to make animation creation not only easy but also enjoyable, without compromising on performance or browser compatibility.
            </StyledParagraph>
          </ContentBox>

          <FeaturesList />

          <NextLink href="/gsap-scroll">
            <StyledButton variant="contained">
              Next {'>>'} Scroll Animations
            </StyledButton>
          </NextLink>
        </ContentPaper>
      </Container>
    </GradientBackground>
  );
} 