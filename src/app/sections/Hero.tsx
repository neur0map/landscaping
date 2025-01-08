'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

interface HeroProps {
  translations?: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

export default function Hero({ translations }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  if (!translations) return null;

  // Split title into words for animation
  const words = translations.title.split(' ');

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        pt: { xs: 8, md: 0 },
        overflow: 'hidden',
      }}
    >
      {/* Enhanced Parallax Background */}
      <MotionBox
        style={{ y }}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          background: 'linear-gradient(rgba(47, 53, 66, 0.5), rgba(47, 53, 66, 0.6)), url("/images/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.1)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(46, 125, 50, 0.2), rgba(76, 175, 80, 0.2))',
          },
        }}
      />

      {/* Content */}
      <Container maxWidth="lg">
        <MotionBox style={{ opacity }}>
          <Stack 
            spacing={{ xs: 3, md: 4 }} 
            maxWidth={{ xs: '100%', md: '800px' }}
            sx={{ 
              textAlign: { xs: 'left', md: 'left' },
              mx: 'auto',
              px: { xs: 2, sm: 4, md: 0 },
            }}
          >
            <Box>
              {words.map((word, i) => (
                <MotionTypography
                  key={i}
                  variant="h1"
                  sx={{
                    display: 'inline-block',
                    mr: '0.5rem',
                    mb: '0.5rem',
                    fontFamily: [
                      'SF Pro Display',
                      '-apple-system',
                      'BlinkMacSystemFont',
                      'Inter',
                      'sans-serif'
                    ].join(','),
                    fontSize: { xs: '3rem', sm: '4rem', md: '5.5rem' },
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: '-0.03em',
                    background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.9) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {word}
                </MotionTypography>
              ))}
            </Box>

            <MotionTypography
              variant="h5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              sx={{
                fontFamily: [
                  'SF Pro Display',
                  '-apple-system',
                  'BlinkMacSystemFont',
                  'Inter',
                  'sans-serif'
                ].join(','),
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                lineHeight: 1.4,
                letterSpacing: '-0.02em',
                opacity: 0.95,
                maxWidth: { xs: '100%', sm: '450px', md: '600px' },
                color: 'rgba(255, 255, 255, 0.95)',
                fontWeight: 400,
                textShadow: '0 2px 8px rgba(0,0,0,0.08)',
              }}
            >
              {translations.subtitle}
            </MotionTypography>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowRight />}
                href="#contact"
                sx={{
                  mt: { xs: 2, md: 4 },
                  background: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
                  color: 'white',
                  px: { xs: 4, md: 6 },
                  py: { xs: 1.5, md: 2 },
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                  borderRadius: '100px',
                  textTransform: 'none',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  boxShadow: '0 4px 14px rgba(46, 125, 50, 0.25)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #43A047 0%, #1B5E20 100%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(46, 125, 50, 0.3)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {translations.cta}
              </Button>
            </MotionBox>
          </Stack>
        </MotionBox>
      </Container>

      {/* Enhanced Scroll Indicator */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: { xs: 'none', md: 'block' },
        }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Box
            sx={{
              width: 30,
              height: 50,
              border: '2px solid rgba(255,255,255,0.3)',
              borderRadius: '15px',
              position: 'relative',
              backdropFilter: 'blur(4px)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '4px',
                height: '8px',
                backgroundColor: 'rgba(255,255,255,0.9)',
                borderRadius: '2px',
                boxShadow: '0 0 8px rgba(255,255,255,0.3)',
              },
            }}
          />
        </motion.div>
      </MotionBox>
    </Box>
  );
} 