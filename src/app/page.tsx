import { Box, CircularProgress } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Process from './sections/Process';
import Contact from './sections/Contact';
import WhyChooseUs from './sections/WhyChooseUs';
import { getTranslations } from './i18n/settings';
import { Suspense } from 'react';

function LoadingSpinner() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(8px)',
        zIndex: 9999,
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default async function Home() {
  const translations = await getTranslations();

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <Box component="main">
        <Hero translations={translations.hero} />
        <WhyChooseUs />
        <Services translations={translations.services} />
        <Projects translations={translations.projects} />
        <Process translations={translations.process} />
        <Contact translations={translations.contact} />
      </Box>
    </Suspense>
  );
}
