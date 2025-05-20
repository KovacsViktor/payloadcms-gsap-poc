'use client';

import { styled } from '@mui/material/styles';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button,
  Box,
  Container,
} from '@mui/material';
import Link from 'next/link';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'transparent',
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
  backdropFilter: 'blur(8px)',
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(2, 0),
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  textDecoration: 'none',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '1rem',
  marginLeft: theme.spacing(2),
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)',
  },
}));

export default function Header() {
  return (
    <StyledAppBar position="sticky">
      <Container maxWidth="lg">
        <StyledToolbar>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Logo>
              Cybernexa
            </Logo>
          </Link>
          
          <Box>
            <Link href="/gsap" style={{ textDecoration: 'none' }}>
              <NavButton>
                GSAP
              </NavButton>
            </Link>
            
            <Link href="/payload" style={{ textDecoration: 'none' }}>
              <NavButton>
                Payload
              </NavButton>
            </Link>
          </Box>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
}