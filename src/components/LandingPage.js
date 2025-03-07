import {
  Box,
  Button,
  Card, CardContent,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fade,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Slide,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [showScrollIcon, setShowScrollIcon] = useState(true);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIcon(false);
      } else {
        setShowScrollIcon(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFeatures = () => {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Fixed Navbar */}
      <Box 
        sx={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
        }}
      >
        <Container maxWidth="lg">
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              py: 2,
            }}
          >
            {/* Logo Section */}
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                cursor: 'pointer'
              }}
              onClick={() => navigate('/')}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 700,
                  color: '#1A365D',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                📝 NoteSync
              </Typography>
            </Box>

            {/* Navigation Links */}
            <Box 
              sx={{ 
                display: 'flex',
                gap: 4,
                alignItems: 'center'
              }}
            >
              <Typography 
                sx={{ 
                  cursor: 'pointer',
                  color: '#4A5568',
                  fontFamily: '"Inter", sans-serif',
                  '&:hover': { color: '#1A365D' }
                }}
                onClick={scrollToFeatures}
              >
                Features
              </Typography>
              <Typography 
                sx={{ 
                  cursor: 'pointer',
                  color: '#4A5568',
                  fontFamily: '"Inter", sans-serif',
                  '&:hover': { color: '#1A365D' }
                }}
                onClick={() => setShowAbout(true)}
              >
                About
              </Typography>
             
            </Box>

            {/* Auth Buttons */}
            <Box 
              sx={{ 
                display: 'flex',
                gap: 2,
                alignItems: 'center'
              }}
            >
              <Button 
                variant="text"
                onClick={() => navigate('/auth')}
                sx={{ 
                  color: '#4A5568',
                  fontFamily: '"Inter", sans-serif',
                  textTransform: 'none',
                  '&:hover': { color: '#1A365D' }
                }}
              >
                Sign In
              </Button>
              <Button 
                variant="contained"
                onClick={() => navigate('/auth')}
                sx={{ 
                  background: 'linear-gradient(135deg, #4299E1 0%, #38B2AC 100%)',
                  color: 'white',
                  fontFamily: '"Inter", sans-serif',
                  textTransform: 'none',
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #3182CE 0%, #319795 100%)',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 8px rgba(66, 153, 225, 0.2)'
                  }
                }}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box 
        sx={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #E8F0FF 0%, #F5F7FA 100%)',
          color: '#2D3748',
          position: 'relative',
          padding: 4,
          fontFamily: '"Poppins", sans-serif',
          mt: 8
        }}
      >
        <Slide direction="down" in={true} timeout={1000}>
          <Box sx={{ textAlign: 'center', maxWidth: '800px' }}>
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom
              sx={{ 
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                color: '#1A365D',
                mb: 3,
                letterSpacing: '-0.02em'
              }}
            >
              Welcome to the Notes Management System
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ mb: 4, opacity: 0.9 }}
            >
              Organize your thoughts, boost your productivity, and never forget important ideas again.
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              onClick={() => navigate('/auth')}
              sx={{ 
                px: 4, 
                py: 1.5, 
                borderRadius: 2,
                fontSize: '1.1rem',
                background: 'linear-gradient(135deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)',
                color: 'white',
                '&:hover': {
                  background: 'linear-gradient(135deg, #FF3CAC 20%, #784BA0 60%, #2B86C5 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 15px rgba(0,0,0,0.2)'
                }
              }}
            >
              Get Started Now
            </Button>
          </Box>
        </Slide>
        
        <Fade in={showScrollIcon} timeout={1000}>
          <IconButton 
            sx={{ 
              position: 'absolute', 
              bottom: 20, 
              color: 'white',
              animation: 'bounce 2s infinite'
            }}
            onClick={scrollToFeatures}
          >
            <Typography variant="h4">↓</Typography>
          </IconButton>
        </Fade>
      </Box>

      {/* Features Section */}
      <Box 
        id="features"
        sx={{ 
          py: 8, 
          px: 2,
          background: 'linear-gradient(135deg, #F8FAFC 0%, #EDF2F7 100%)',
          color: '#2D3748'
        }}
      >
        <Container maxWidth="lg">
          <Fade in={true} timeout={1000}>
            <Typography 
              variant="h3" 
              component="h2" 
              align="center" 
              gutterBottom
              sx={{ 
                mb: 6, 
                fontWeight: 700,
                color: '#1A365D',
                fontFamily: '"Poppins", sans-serif',
                fontSize: { xs: '2rem', md: '2.75rem' },
                letterSpacing: '-0.02em'
              }}
            >
              Powerful Features
            </Typography>
          </Fade>
          
          <Grid container spacing={4}>
            {[
              { 
                icon: '☁️', 
                title: 'AWS Cloud Storage', 
                description: 'Securely upload and store your notes in AWS cloud storage with enterprise-level security and reliability.',
                gradient: 'linear-gradient(135deg, #63B3ED 0%, #4299E1 100%)',
                shadowColor: 'rgba(99, 179, 237, 0.3)'
              },
              { 
                icon: '��', 
                title: 'Smart Search & Download', 
                description: 'Instantly search through your notes and download them directly from AWS cloud storage.',
                gradient: 'linear-gradient(135deg, #9F7AEA 0%, #805AD5 100%)',
                shadowColor: 'rgba(159, 122, 234, 0.3)'
              },
              { 
                icon: '🤖', 
                title: 'AI-Powered Chatbot', 
                description: 'Interact with our intelligent chatbot for quick answers and assistance with your notes.',
                gradient: 'linear-gradient(135deg, #4FD1C5 0%, #38B2AC 100%)',
                shadowColor: 'rgba(79, 209, 197, 0.3)'
              }
            ].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Fade in={true} timeout={1000 + (index * 500)}>
                  <Card 
                    elevation={0}
                    sx={{ 
                      height: '100%',
                      background: 'white',
                      borderRadius: '16px',
                      border: '1px solid rgba(226, 232, 240, 0.8)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: `0 20px 30px ${feature.shadowColor}`
                      }
                    }}
                  >
                    <CardContent 
                      sx={{ 
                        flexGrow: 1, 
                        textAlign: 'center', 
                        p: 4
                      }}
                    >
                      <Box 
                        sx={{ 
                          mb: 3, 
                          fontSize: '4rem',
                          background: feature.gradient,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography 
                        variant="h5" 
                        component="h3" 
                        gutterBottom
                        sx={{ 
                          fontWeight: 600,
                          fontFamily: '"Poppins", sans-serif',
                          mb: 2,
                          color: '#2D3748',
                          letterSpacing: '-0.01em'
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: '#4A5568',
                          lineHeight: 1.7,
                          fontFamily: '"Inter", sans-serif',
                          fontSize: '1rem'
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box 
        sx={{ 
          py: 8,
          background: 'linear-gradient(135deg, #EBF4FF 0%, #E6FFFA 100%)',
          color: '#2D3748',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Slide direction="up" in={true} timeout={1000}>
            <Box>
              <Typography 
                variant="h4" 
                gutterBottom
                sx={{ 
                  fontWeight: 600,
                  fontFamily: '"Poppins", sans-serif',
                  letterSpacing: '-0.02em',
                  color: '#1A365D'
                }}
              >
                Ready to organize your notes?
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Join thousands of users who have transformed their note-taking experience.
              </Typography>
              <Button 
                variant="contained" 
                size="large"
                onClick={() => navigate('/auth')}
                sx={{ 
                  px: 4, 
                  py: 1.5, 
                  borderRadius: 2,
                  fontSize: '1.1rem',
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 500,
                  background: 'linear-gradient(135deg, #4299E1 0%, #38B2AC 100%)',
                  color: 'white',
                  textTransform: 'none',
                  boxShadow: '0 4px 6px rgba(66, 153, 225, 0.2)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #3182CE 0%, #319795 100%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 15px rgba(66, 153, 225, 0.3)'
                  }
                }}
              >
                Get Started Now
              </Button>
            </Box>
          </Slide>
        </Container>
      </Box>

      {/* Footer */}
      <Box 
        sx={{ 
          py: 4,
          backgroundColor: '#F8FAFC',
          color: '#4A5568',
          borderTop: '1px solid #E2E8F0',
          fontFamily: '"Inter", sans-serif'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="space-between" alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="body2">
                © 2023 Notes Management System. All rights reserved.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              <Typography variant="body2">
                Privacy Policy | Terms of Service | Contact Us
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CSS for bounce animation */}
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }
      `}</style>

      {/* About Dialog */}
      <Dialog 
        open={showAbout} 
        onClose={() => setShowAbout(false)}
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: 2,
            p: 3
          }
        }}
      >
        <DialogTitle 
          sx={{ 
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 600,
            color: '#1A365D',
            fontSize: '1.75rem'
          }}
        >
          About NoteSync
        </DialogTitle>
        <DialogContent>
          <Typography 
            sx={{ 
              fontFamily: '"Inter", sans-serif',
              color: '#4A5568',
              lineHeight: 1.8,
              mb: 3
            }}
          >
            NoteSync is a cutting-edge notes management system designed to revolutionize how you organize and access your information. Our platform leverages the power of AWS cloud storage to provide secure, reliable, and accessible note-taking solutions.
          </Typography>
          
          <Typography 
            variant="h6"
            sx={{ 
              fontFamily: '"Poppins", sans-serif',
              color: '#2D3748',
              mb: 2,
              fontWeight: 600
            }}
          >
            Our Mission
          </Typography>
          <Typography 
            sx={{ 
              fontFamily: '"Inter", sans-serif',
              color: '#4A5568',
              lineHeight: 1.8,
              mb: 3
            }}
          >
            We strive to provide a seamless and intuitive note-taking experience that helps students, professionals, and creative minds capture, organize, and access their ideas effortlessly. Our commitment to innovation and user experience drives us to continuously improve and enhance our platform.
          </Typography>

          <Typography 
            variant="h6"
            sx={{ 
              fontFamily: '"Poppins", sans-serif',
              color: '#2D3748',
              mb: 2,
              fontWeight: 600
            }}
          >
            Technology Stack
          </Typography>
          <List sx={{ mb: 3 }}>
            {[
              'Frontend: React.js with Material-UI for a modern, responsive interface',
              'Backend: Node.js and Express for robust server-side operations',
              'Database: MongoDB for flexible and scalable data storage',
              'Cloud Storage: AWS S3 for secure file storage and management',
              'Authentication: JWT-based secure user authentication',
              'AI Integration: Advanced chatbot powered by machine learning'
            ].map((tech, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <Box sx={{ color: '#4299E1', fontSize: '1.2rem' }}>⚡</Box>
                </ListItemIcon>
                <ListItemText 
                  primary={tech} 
                  sx={{ 
                    '& .MuiListItemText-primary': { 
                      fontFamily: '"Inter", sans-serif',
                      color: '#4A5568'
                    }
                  }}
                />
              </ListItem>
            ))}
          </List>

          <Typography 
            variant="h6"
            sx={{ 
              fontFamily: '"Poppins", sans-serif',
              color: '#2D3748',
              mb: 2,
              fontWeight: 600
            }}
          >
            Key Benefits
          </Typography>
          <List>
            {[
              'Secure cloud storage powered by AWS with automatic backups',
              'Advanced search capabilities with tags and categories',
              'AI-powered chatbot for smart note organization and retrieval',
              'Cross-platform accessibility across all devices',
              'Real-time synchronization and collaboration features',
              'Markdown support for rich text formatting',
              'Customizable templates and organization systems'
            ].map((benefit, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <Box sx={{ color: '#4299E1', fontSize: '1.2rem' }}>✓</Box>
                </ListItemIcon>
                <ListItemText 
                  primary={benefit} 
                  sx={{ 
                    '& .MuiListItemText-primary': { 
                      fontFamily: '"Inter", sans-serif',
                      color: '#4A5568'
                    }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => setShowAbout(false)}
            sx={{ 
              background: 'linear-gradient(135deg, #4299E1 0%, #38B2AC 100%)',
              color: 'white',
              fontFamily: '"Inter", sans-serif',
              textTransform: 'none',
              px: 3,
              py: 1,
              borderRadius: 2,
              '&:hover': {
                background: 'linear-gradient(135deg, #3182CE 0%, #319795 100%)',
              }
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default LandingPage;
