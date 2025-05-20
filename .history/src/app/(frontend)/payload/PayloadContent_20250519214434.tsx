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
import Link from 'next/link';

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

export default function PayloadContent() {
  return (
    <GradientBackground>
      <Container maxWidth="lg">
        <ContentPaper>
          <StyledTitle component="h1">
            Payload CMS
          </StyledTitle>
          
          <StyledList>
            <ListItem disablePadding>
              <ListItemButton 
                component="a" 
                href="https://payloadcms.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemText primary="Payload Website" />
              </ListItemButton>
            </ListItem>
            
            <ListItem disablePadding>
              <ListItemButton 
                component="a" 
                href="https://payloadcms.com/posts/blog/the-ultimate-guide-to-using-nextjs-with-payload"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemText primary="The Ultimate Guide To Using Next.js with Payload" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton 
                component="a" 
                href="https://www.youtube.com/watch?v=ftohATkHBi0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemText primary="Payload Introduction" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton 
                component="a" 
                href="https://www.youtube.com/@payloadcms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemText primary="Payload YouTube Channel" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton 
                component="a" 
                href="https://discord.com/invite/r6sCXqVk3v"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemText primary="Payload Discord Community" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton 
                component="a" 
                href="https://github.com/payloadcms/payload"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemText primary="Payload GitHub Repository" />
              </ListItemButton>
            </ListItem>
          </StyledList>
        </ContentPaper>
      </Container>
    </GradientBackground>
  );
}
