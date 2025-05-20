'use client';

import { useState, useRef } from 'react';
import ScrollSmoothVertical from "./ScrollSmoothVertical";
import ScrollSmoothHorizontal from "./ScrollHorizontal";
import { styled } from '@mui/material/styles';
import { Button, Box, Container } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import NextLink from 'next/link';

const StyledButton = styled(Button)(({ theme }) => ({
  transition: 'all 0.3s ease',
  minWidth: '40px',
  width: '40px',
  height: '40px',
  padding: 0,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  cursor: 'pointer',
  zIndex: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  width: '100%',
  overflow: 'hidden',
  borderRadius: theme.shape.borderRadius,
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  position: 'fixed',
  top: theme.spacing(2),
  left: theme.spacing(2),
  zIndex: 10,
}));

const IconWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2px',
});

const HorizontalIconWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2px',
});

export default function ScrollContent() {
  const [activeTab, setActiveTab] = useState('vertical');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Container maxWidth="lg">
      <ButtonContainer>
        <StyledButton 
          onClick={() => handleTabChange('vertical')}
          title="Vertical Scroll"
        >
          <IconWrapper>
            <KeyboardArrowUpIcon sx={{ fontSize: 20 }} />
            <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
          </IconWrapper>
        </StyledButton>
        <StyledButton 
          onClick={() => handleTabChange('horizontal')}
          title="Horizontal Scroll"
        >
          <HorizontalIconWrapper>
            <KeyboardArrowLeftIcon sx={{ fontSize: 20 }} />
            <KeyboardArrowRightIcon sx={{ fontSize: 20 }} />
          </HorizontalIconWrapper>
        </StyledButton>
      </ButtonContainer>
      <ContentContainer>
        {activeTab === "vertical" && <ScrollSmoothVertical />}
        {activeTab === "horizontal" && <ScrollSmoothHorizontal />}
      </ContentContainer>
      <NextLink href="/gsap/demo">
            <StyledButton variant="contained">
              Next {'>>'} Pla
            </StyledButton>
          </NextLink>
    </Container>
  );
} 