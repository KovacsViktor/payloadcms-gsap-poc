'use client';

import { useEffect, useRef, useState } from 'react';
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
  CircularProgress,
  Alert,
} from '@mui/material';
import Link from 'next/link';
import FeaturesList from './FeaturesList';
import { getGSAPContent } from './api/GSAPContentApi';

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Types
interface GSAPContentData {
  title: string;
  paragraphs: string[];
}

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

const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '50vh',
}));

export default function GSAPContent() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const [content, setContent] = useState<GSAPContentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch content
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await getGSAPContent();
        if (data) {
          setContent(data);
        } else {
          setError('No content found. Please add content through the admin panel.');
        }
      } catch (err) {
        setError('Failed to load content. Please try again later.');
        console.error('Error fetching GSAP content:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  useGSAP(() => {
    if (!loading && !error) {
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
    }
  }, [loading, error]);

  if (loading) {
    return (
      <GradientBackground>
        <LoadingContainer>
          <CircularProgress />
        </LoadingContainer>
      </GradientBackground>
    );
  }

  if (error) {
    return (
      <GradientBackground>
        <Container maxWidth="lg">
          <Alert severity="error" sx={{ mt: 4 }}>
            {error}
          </Alert>
        </Container>
      </GradientBackground>
    );
  }

  return (
    <GradientBackground>
      <Container maxWidth="lg">
        <ContentPaper>
          <StyledTitle 
            component="h1" 
            ref={titleRef}
          >
            {content?.title}
          </StyledTitle>
          
          <ContentBox ref={contentRef}>
            {content?.paragraphs.map((paragraph, index) => (
              <StyledParagraph key={index}>
                {paragraph}
              </StyledParagraph>
            ))}
          </ContentBox>

          <FeaturesList />

          <NextLink href="/gsap/scroll">
            <StyledButton variant="contained">
              Next {'>>'} Scroll Animations
            </StyledButton>
          </NextLink>
        </ContentPaper>
      </Container>
    </GradientBackground>
  );
} 