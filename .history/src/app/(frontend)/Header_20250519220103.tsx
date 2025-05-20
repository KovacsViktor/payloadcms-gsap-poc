'use client';

import { styled } from '@mui/material/styles';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button,
  Box,
  Container,
  Menu,
  MenuItem,
} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

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

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    background: theme.palette.background.paper,
    backdropFilter: 'blur(8px)',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    marginTop: theme.spacing(1),
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)',
  },
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            <NavButton
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleClose}
            >
              GSAP
            </NavButton>
            
            <StyledMenu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                onMouseLeave: handleClose,
                onMouseEnter: handleMouseEnter,
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <Link href="/gsap/scroll" style={{ textDecoration: 'none', color: 'inherit' }}>
                <StyledMenuItem onClick={handleClose}>
                  GSAP Scroll Animations
                </StyledMenuItem>
              </Link>
              <Link href="/gsap/demo" style={{ textDecoration: 'none', color: 'inherit' }}>
                <StyledMenuItem onClick={handleClose}>
                  GSAP Playground
                </StyledMenuItem>
              </Link>
            </StyledMenu>
            
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