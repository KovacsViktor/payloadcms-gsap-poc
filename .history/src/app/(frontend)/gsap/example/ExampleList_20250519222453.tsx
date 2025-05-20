'use client';

import { styled } from '@mui/material/styles';
import { 
  Container, 
  Typography, 
  Box, 
  Paper,
  TypographyProps,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

const GradientBackground = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
  padding: theme.spacing(4),
  display: 'flex',
  alignItems: 'center',
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
  marginBottom: theme.spacing(6),
  background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
}));

const StyledList = styled(List)(({ theme }) => ({
  maxWidth: '600px',
  margin: '0 auto',
  '& .MuiListItemButton-root': {
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
    background: 'rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.1)',
      transform: 'translateX(10px)',
    },
  },
  '& .MuiListItemText-primary': {
    color: theme.palette.text.primary,
    fontSize: '1.1rem',
  },
}));

export default function ExampleList() {
  return (
    <GradientBackground>
      <Container maxWidth="lg">
        <ContentPaper>
          <StyledTitle component="h1">
            GSAP Showcases
          </StyledTitle>
          
          <StyledList>
            <ListItem disablePadding>
              <ListItemButton 
                component="a" 
                href="https://techredux.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemText primary="Tech Redux" />
              </ListItemButton>
            </ListItem>
            
            <ListItem disablePadding>
              <ListItemButton 
                component="a" 
                href="https://www.spicerack-sr.com/shisaku/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemText primary="Shisaku" />
              </ListItemButton>
            </ListItem>
          </StyledList>
        </ContentPaper>
      </Container>
    </GradientBackground>
  );
}