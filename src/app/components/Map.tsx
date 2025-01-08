'use client';

import { Skeleton } from '@mui/material';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Dynamically import the map component with no SSR
const MapComponent = dynamic(
  () => import('./MapComponent'),
  { 
    ssr: false,
    loading: () => (
      <Skeleton 
        variant="rectangular" 
        width="100%" 
        height={300}
        sx={{ borderRadius: 2 }}
      />
    )
  }
);

export default function Map() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Skeleton 
        variant="rectangular" 
        width="100%" 
        height={300}
        sx={{ borderRadius: 2 }}
      />
    );
  }

  return <MapComponent />;
} 