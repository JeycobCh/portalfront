import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const WelcomeSection = () => {
  return (
    <Box
      sx={{
        padding: '60px 0',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/path-to-banner.jpg")',
        backgroundSize: 'cover',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom>
          Bienvenido a Agromocan
        </Typography>
        <Typography variant="h5" paragraph>
          Japton te invita a formar parte de uno de los mayores proyectos agroindustriales de palta Hass en el Perú. Únete a nuestra misión de llevar la agricultura peruana al mundo.
        </Typography>
        <Button variant="contained" color="primary" size="large" href="#avances">
          Ver Avances del Proyecto
        </Button>
      </Container>
    </Box>
  );
};

export default WelcomeSection;
