'use client';

import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

interface ProcessStepProps {
  step: {
    title: string;
    description: string;
  };
  index: number;
}

function ProcessStep({ step, index }: ProcessStepProps) {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Box
        sx={{
          position: 'relative',
          p: 4,
          borderRadius: 4,
          border: '1px solid',
          borderColor: 'divider',
          background: 'white',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: theme.shadows[8],
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: -20,
            left: -20,
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #2E7D32, #4CAF50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            boxShadow: theme.shadows[4],
          }}
        >
          {index + 1}
        </Box>
        <Typography variant="h5" gutterBottom fontWeight={600}>
          {step.title}
        </Typography>
        <Typography color="text.secondary">
          {step.description}
        </Typography>
      </Box>
    </motion.div>
  );
}

interface ProcessProps {
  translations?: {
    title: string;
    subtitle: string;
    steps: Record<string, {
      title: string;
      description: string;
    }>;
  };
}

export default function Process({ translations }: ProcessProps) {
  if (!translations) return null;

  return (
    <Box
      id="process"
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
              {translations.title}
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              {translations.subtitle}
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={6}>
          {Object.entries(translations.steps).map(([key, step], index) => (
            <Grid item xs={12} md={6} key={key}>
              <ProcessStep step={step} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 