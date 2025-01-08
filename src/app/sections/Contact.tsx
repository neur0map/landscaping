'use client';

import { Box, Container, Grid, Typography, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import Map from '../components/Map';

interface ContactInfoProps {
  icon: React.ElementType;
  title: string;
  content: string;
}

function ContactInfo({ icon: Icon, title, content }: ContactInfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          p: 2,
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: (theme) => theme.shadows[4],
            borderColor: 'primary.main',
          },
        }}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
            color: 'white',
          }}
        >
          <Icon size={24} />
        </Box>
        <Box>
          <Typography variant="subtitle1" fontWeight={600}>
            {title}
          </Typography>
          <Typography color="text.secondary">
            {content}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
}

interface ContactProps {
  translations?: {
    title: string;
    subtitle: string;
    form: {
      first_name: string;
      last_name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
    };
    info: {
      phone: { title: string; content: string };
      email: { title: string; content: string };
      address: { title: string; content: string };
    };
  };
}

export default function Contact({ translations }: ContactProps) {
  if (!translations) return null;

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
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
                background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
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
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Box
                component="form"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label={translations.form.first_name}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label={translations.form.last_name}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <TextField
                  fullWidth
                  label={translations.form.email}
                  variant="outlined"
                  type="email"
                />
                <TextField
                  fullWidth
                  label={translations.form.phone}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label={translations.form.message}
                  variant="outlined"
                  multiline
                  rows={4}
                />
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                    '&:hover': {
                      background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                    },
                  }}
                >
                  {translations.form.submit}
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <ContactInfo
                icon={Phone}
                title={translations.info.phone.title}
                content={translations.info.phone.content}
              />
              <ContactInfo
                icon={Mail}
                title={translations.info.email.title}
                content={translations.info.email.content}
              />
              <ContactInfo
                icon={MapPin}
                title={translations.info.address.title}
                content={translations.info.address.content}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Map />
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 