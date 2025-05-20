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
  Divider,
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

const SpecialListItem = styled(ListItem)(({ theme }) => ({
  marginTop: theme.spacing(4),
  '& .MuiListItemButton-root': {
    background: 'linear-gradient(to right, rgba(96, 165, 250, 0.1), rgba(167, 139, 250, 0.1))',
    border: `1px solid ${theme.palette.divider}`,
    '&:hover': {
      background: 'linear-gradient(to right, rgba(96, 165, 250, 0.2), rgba(167, 139, 250, 0.2))',
    },
  },
  '& .MuiListItemText-primary': {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
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

            <ListItem disablePadding>
              <ListItemButton 
                component="a" 
                href="https://pikipottery.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemText primary="P.P" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton 
                component="a" 
                href="https://www.amanation-official.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemText primary="Amanation" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton 
                component="a" 
                href="https://quechua-lookbook.com/ss25/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemText primary="Decathlon" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton 
                component="a" 
                href="https://www.thekaplans.studio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemText primary="The Kaplans" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton 
                component="a" 
                href="https://www.dolsten.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemText primary="Dolsten" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton 
                component="a" 
                href="https://clementgrellier.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemText primary="Clement Grellier" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton 
                component="a" 
                href="https://www.siena.film/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemText primary="Senia Film" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton 
                component="a" 
                href="https://www.tomaskmet.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemText primary="Tomaskmet" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton 
                component="a" 
                href="https://v6.usestate.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemText primary="Ver. 6" />
              </ListItemButton>
            </ListItem>

            <Divider sx={{ my: 4, opacity: 0.2 }} />

            <SpecialListItem disablePadding>
              <ListItemButton 
                component="a" 
                href="https://gsap.com/showcase"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemText primary="much more " />
              </ListItemButton>
            </SpecialListItem>
          </StyledList>
        </ContentPaper>
      </Container>
    </GradientBackground>
  );
}