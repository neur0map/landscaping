'use client';

import { AppBar, Box, Container, IconButton, Stack, Typography, useScrollTrigger } from '@mui/material';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const menuVariants = {
  initial: {
    opacity: 0,
    y: -20,
    height: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    height: 'auto',
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    height: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
      when: "afterChildren",
    }
  }
};

const menuItemVariants = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    }
  }
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Close menu when scrolling
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleScroll = () => {
      setMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  const handleMenuItemClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: trigger || mobileMenuOpen ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: trigger || mobileMenuOpen ? 'blur(10px)' : 'none',
        boxShadow: trigger || mobileMenuOpen ? 1 : 'none',
        color: trigger || mobileMenuOpen ? 'text.primary' : 'white',
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          py={2}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: 700,
              letterSpacing: '-0.5px',
              background: trigger || mobileMenuOpen ? 'none' : 'linear-gradient(45deg, #fff, #e0e0e0)',
              WebkitBackgroundClip: trigger || mobileMenuOpen ? 'none' : 'text',
              WebkitTextFillColor: trigger || mobileMenuOpen ? 'inherit' : 'transparent',
              zIndex: 2,
            }}
          >
            M.V. Landscaping
          </Typography>

          {/* Desktop Menu */}
          <Stack
            direction="row"
            spacing={4}
            alignItems="center"
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  position: 'relative',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <motion.div
                  style={{
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: 'currentColor',
                    transformOrigin: 'left',
                  }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </Stack>

          {/* Mobile Menu Button */}
          <motion.div
            className="menu-button"
            initial={false}
            animate={mobileMenuOpen ? "open" : "closed"}
            style={{
              width: 40,
              height: 40,
              display: { md: 'none' },
              position: 'relative',
              cursor: 'pointer',
              zIndex: 2,
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <motion.div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 24,
                height: 2,
                borderRadius: 1,
                backgroundColor: 'currentColor',
                transform: 'translate(-50%, -50%)',
              }}
              variants={{
                closed: { rotate: 0, y: -6 },
                open: { rotate: 45, y: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 24,
                height: 2,
                borderRadius: 1,
                backgroundColor: 'currentColor',
                transform: 'translate(-50%, -50%)',
              }}
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 24,
                height: 2,
                borderRadius: 1,
                backgroundColor: 'currentColor',
                transform: 'translate(-50%, -50%)',
              }}
              variants={{
                closed: { rotate: 0, y: 6 },
                open: { rotate: -45, y: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </Stack>

        {/* Mobile Menu Backdrop */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.3)',
                zIndex: 0,
              }}
              onClick={() => setMobileMenuOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence mode="wait">
          {mobileMenuOpen && (
            <motion.div
              className="mobile-menu"
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ 
                overflow: 'hidden',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                paddingTop: '80px',
                transformOrigin: 'top',
                zIndex: 1,
              }}
            >
              <Container maxWidth="lg">
                <Stack
                  spacing={3}
                  sx={{
                    py: 4,
                    display: { md: 'none' },
                  }}
                >
                  {navItems.map((item, i) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleMenuItemClick(item.href);
                      }}
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        fontSize: '1.25rem',
                        fontWeight: 500,
                      }}
                      variants={menuItemVariants}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </Stack>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </AppBar>
  );
} 