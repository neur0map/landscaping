'use client';

import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Clock, ThumbsUp, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '20+ Years Experience',
    description: 'Two decades of transforming landscapes and exceeding client expectations.',
  },
  {
    icon: Sparkles,
    title: 'Quality Service',
    description: 'Dedicated to delivering exceptional results with attention to every detail.',
  },
  {
    icon: ThumbsUp,
    title: 'Customer Satisfaction',
    description: 'Building lasting relationships through reliable service and communication.',
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const Icon = feature.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 3,
          height: '100%',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: (theme) => theme.shadows[4],
            borderColor: 'primary.main',
            '& .icon-wrapper': {
              background: (theme) => 
                `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              transform: 'scale(1.1)',
            },
            '& .icon': {
              color: 'white',
            },
          },
        }}
      >
        <Box
          className="icon-wrapper"
          sx={{
            width: 56,
            height: 56,
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: (theme) => theme.palette.background.paper,
            mb: 2,
            transition: 'all 0.3s ease',
          }}
        >
          <Icon 
            className="icon"
            size={28}
            style={{ 
              color: '#2E7D32',
              transition: 'all 0.3s ease',
            }}
          />
        </Box>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: 600,
            fontSize: '1.125rem',
          }}
        >
          {feature.title}
        </Typography>
        <Typography
          color="text.secondary"
          sx={{
            fontSize: '0.875rem',
            lineHeight: 1.6,
          }}
        >
          {feature.description}
        </Typography>
      </Paper>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(45deg, #2E7D32, #4CAF50)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Why Choose Us
            </Typography>
            <Typography 
              variant="h5" 
              color="text.secondary" 
              sx={{ 
                maxWidth: 600, 
                mx: 'auto',
                mb: 2,
              }}
            >
              Trusted landscaping expertise for over two decades
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={feature.title}>
              <FeatureCard feature={feature} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 