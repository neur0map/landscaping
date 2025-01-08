'use client';

import { Box } from '@mui/material';
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const center = [41.8240, -71.4128];
const riCenter = [41.5801, -71.4774];
// Centered on Taunton, MA
const maCenter = [41.9001, -71.0898];

// Both circles around 25km radius for similar coverage
const serviceRadius = 25000; // in meters

export default function MapComponent() {
  const handleMapClick = () => {
    // Open Google Maps centered between RI and MA
    window.open(`https://www.google.com/maps/@${center[0]},${center[1]},9z`, '_blank');
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '300px',
        borderRadius: 2,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'divider',
        cursor: 'pointer',
        '& .leaflet-container': {
          width: '100%',
          height: '100%',
          font: 'inherit',
        },
        '& .leaflet-control-attribution': {
          fontSize: '10px',
        },
        '& .leaflet-popup-content-wrapper': {
          borderRadius: '8px',
          padding: '0',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        },
        '& .leaflet-popup-content': {
          margin: '10px 14px',
          fontSize: '14px',
          fontWeight: 500,
        },
        '& .leaflet-popup-tip-container': {
          marginTop: '-1px',
        },
        '& .leaflet-control-zoom': {
          border: 'none',
          '& a': {
            color: '#666',
            backgroundColor: '#fff',
            borderRadius: '4px !important',
            margin: '0 0 5px 0',
            width: '32px',
            height: '32px',
            lineHeight: '32px',
            border: '1px solid rgba(0,0,0,0.1)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            '&:hover': {
              backgroundColor: '#f8f8f8',
            },
          },
        },
      }}
      onClick={handleMapClick}
    >
      <MapContainer
        center={center}
        zoom={9}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
        zoomControl={true}
      >
        <TileLayer
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        />
        <Circle
          center={riCenter}
          pathOptions={{ 
            fillColor: '#4CAF50',
            fillOpacity: 0.15,
            color: '#4CAF50',
            weight: 2,
          }}
          radius={serviceRadius}
        >
          <Popup>
            <Box sx={{ cursor: 'pointer' }} onClick={(e) => {
              e.stopPropagation();
              window.open(`https://www.google.com/maps/@${riCenter[0]},${riCenter[1]},11z`, '_blank');
            }}>
              <strong>Rhode Island Service Area</strong>
              <br />
              <small style={{ color: '#666' }}>Click to open in Google Maps</small>
            </Box>
          </Popup>
        </Circle>
        <Circle
          center={maCenter}
          pathOptions={{ 
            fillColor: '#2E7D32',
            fillOpacity: 0.15,
            color: '#2E7D32',
            weight: 2,
          }}
          radius={serviceRadius}
        >
          <Popup>
            <Box sx={{ cursor: 'pointer' }} onClick={(e) => {
              e.stopPropagation();
              window.open(`https://www.google.com/maps/@${maCenter[0]},${maCenter[1]},11z`, '_blank');
            }}>
              <strong>Massachusetts Service Area</strong>
              <br />
              <small style={{ color: '#666' }}>Click to open in Google Maps</small>
            </Box>
          </Popup>
        </Circle>
      </MapContainer>
    </Box>
  );
} 