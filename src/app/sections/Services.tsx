'use client';

import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { 
  Scissors, 
  Leaf, 
  TreePine,
  Sprout,
  Layers,
  Mountain,
  Tractor,
  Trash2
} from 'lucide-react';

const icons = {
  lawn_mowing: Scissors,
  cleanups: Leaf,
  pruning: TreePine,
  planting: Sprout,
  mulching: Layers,
  materials: Mountain,
  dethatching: Tractor,
  junk_removal: Trash2,
};

const iconColors = {
  lawn_mowing: '#22c55e',
  cleanups: '#f97316',
  pruning: '#15803d',
  planting: '#0ea5e9',
  mulching: '#854d0e',
  materials: '#6b7280',
  dethatching: '#16a34a',
  junk_removal: '#dc2626',
};

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
  };
  icon: keyof typeof icons;
}

function ServiceCard({ service, icon }: ServiceCardProps) {
  const theme = useTheme();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const Icon = icons[icon];
  const color = iconColors[icon];

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(
    320px circle at \${mouseX}px \${mouseY}px,
    ${color}15,
    transparent 80%
  )`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Box
        onMouseMove={onMouseMove}
        sx={{
          position: 'relative',
          borderRadius: 4,
          p: 4,
          height: '100%',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          border: '1px solid',
          borderColor: 'divider',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: theme.shadows[8],
          },
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background,
          }}
        />
        <Box sx={{ position: 'relative' }}>
          <Icon
            size={48}
            style={{ color, marginBottom: '1rem' }}
          />
          <Typography variant="h5" gutterBottom fontWeight={600}>
            {service.title}
          </Typography>
          <Typography color="text.secondary">
            {service.description}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
}

interface ServicesProps {
  translations?: {
    title: string;
    subtitle: string;
    items: Record<string, { title: string; description: string }>;
  };
}

export default function Services({ translations }: ServicesProps) {
  if (!translations) return null;

  return (
    <Box
      id="services"
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

        <Grid container spacing={4}>
          {Object.entries(translations.items).map(([key, service]) => (
            <Grid item xs={12} sm={6} md={4} key={key}>
              <ServiceCard 
                service={service}
                icon={key as keyof typeof icons}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 