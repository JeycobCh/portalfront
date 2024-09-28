import React from 'react';
import { Grid, Typography, Card, CardMedia, CardContent, Container } from '@mui/material';

// Datos simulados de avances
const avances = [
  {
    tipo: 'imagen',
    url: 'https://example.com/image1.jpg',
    titulo: 'Avance de Riego',
    descripcion: 'Implementación del sistema de riego tecnificado en 50 hectáreas.'
  },
  {
    tipo: 'video',
    url: 'https://example.com/video1.mp4',
    titulo: 'Proceso de Siembra',
    descripcion: 'Video que muestra el proceso de siembra en las parcelas de Agromocan.'
  },
  {
    tipo: 'imagen',
    url: 'https://example.com/image2.jpg',
    titulo: 'Cosecha Exitosa',
    descripcion: 'Primera cosecha de palta Hass lista para exportación.'
  }
];

const AvancesSection = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: '40px 0' }} id="avances">
      <Typography variant="h4" gutterBottom textAlign="center">
        Avances del Proyecto
      </Typography>
      <Grid container spacing={4}>
        {avances.map((avance, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component={avance.tipo === 'video' ? 'video' : 'img'}
                image={avance.url}
                title={avance.titulo}
                controls={avance.tipo === 'video'}
                sx={{ height: 200 }}
              />
              <CardContent>
                <Typography variant="h6">
                  {avance.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {avance.descripcion}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AvancesSection;
