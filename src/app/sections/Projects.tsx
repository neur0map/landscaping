'use client';

import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Modal, IconButton } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { X, Expand } from 'lucide-react';
import { useState, useRef } from 'react';

const projectImages = {
  lawn_transformation: '/images/samples/IMG_6681.jpeg',
  garden_design: '/images/samples/IMG_6685.jpeg',
  hardscape: '/images/samples/IMG_6687.jpeg',
  backyard_makeover: '/images/samples/IMG_6689.jpeg',
  spring_cleanup: '/images/samples/IMG_6691.jpeg',
  landscape_design: '/images/samples/IMG_6695.jpeg',
  mulch_installation: '/images/samples/IMG_6699.jpeg',
  stone_work: '/images/samples/IMG_6701.jpeg',
  lawn_care: '/images/samples/IMG_6702.jpeg',
};

interface ProjectCardProps {
  project: {
    title: string;
    category: string;
    description: string;
  };
  image: string;
}

function ProjectCard({ project, image }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          scale,
          opacity,
        }}
      >
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 4,
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: (theme) => theme.shadows[8],
            },
          }}
        >
          <Box 
            sx={{ 
              overflow: 'hidden', 
              height: { xs: 280, sm: 320, md: 260 },
              cursor: 'pointer',
              position: 'relative',
            }}
            onClick={() => setModalOpen(true)}
          >
            <CardMedia
              component="img"
              image={image}
              alt={project.title}
              sx={{
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
              }}
            />
            <Box
              className="expand-overlay"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%)',
                opacity: { xs: 0.8, md: 0 },
                transition: 'all 0.3s ease',
              }}
            />
            <Box
              className="expand-hint"
              sx={{
                position: 'absolute',
                bottom: 16,
                right: 16,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                bgcolor: 'rgba(0, 0, 0, 0.6)',
                borderRadius: 2,
                px: 2,
                py: 1,
                transform: { xs: 'translateY(0)', md: 'translateY(20px)' },
                transition: 'transform 0.3s ease',
                zIndex: 1,
              }}
            >
              <Expand size={20} color="white" strokeWidth={1.5} />
              <Typography
                variant="button"
                sx={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  display: { xs: 'block', md: 'none' },
                }}
              >
                View Full
              </Typography>
            </Box>
          </Box>
          <CardContent sx={{ flexGrow: 1, p: 3 }}>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
              }}
            >
              {project.category}
            </Typography>
            <Typography variant="h5" gutterBottom fontWeight={600}>
              {project.title}
            </Typography>
            <Typography color="text.secondary">
              {project.description}
            </Typography>
          </CardContent>
        </Card>
      </motion.div>

      {/* Image Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            outline: 'none',
          }}
        >
          <IconButton
            onClick={() => setModalOpen(false)}
            sx={{
              position: 'absolute',
              top: -40,
              right: 0,
              color: 'white',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
          >
            <X />
          </IconButton>
          <motion.img
            src={image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: '8px',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          />
        </Box>
      </Modal>
    </>
  );
}

interface ProjectsProps {
  translations?: {
    title: string;
    subtitle: string;
    items: Record<string, {
      title: string;
      category: string;
      description: string;
    }>;
  };
}

export default function Projects({ translations }: ProjectsProps) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  if (!translations) return null;

  return (
    <Box
      ref={sectionRef}
      component="section"
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0) 100%)',
          y,
          opacity,
        }}
      />
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 1,
              background: 'linear-gradient(45deg, #1a237e, #0d47a1)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center',
            }}
          >
            {translations?.title || 'Our Work'}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: '800px', mx: 'auto' }}
          >
            {translations?.subtitle || 'Take a look at some of our recent landscaping projects'}
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {Object.entries(translations.items).map(([key, project]) => (
            <Grid item xs={12} sm={6} md={4} key={key}>
              <ProjectCard
                project={project}
                image={projectImages[key as keyof typeof projectImages]}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 