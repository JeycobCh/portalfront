import React from 'react';
import { Grid, Card, CardContent, Typography, Container } from '@mui/material';
import ReceiptIcon from '@mui/icons-material/Receipt';  // Correcto uso del icono
import NatureIcon from '@mui/icons-material/Nature';
import WaterIcon from '@mui/icons-material/Water';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const ComoFormoParteSection = () => {
  const items = [
    { icon: <ReceiptIcon fontSize="large" />, title: "Adquiere tu Parcela", description: "Adquiere tu parcela productiva al contado o con nuestro financiamiento directo con escritura pública y respaldo notarial." },
    { icon: <NatureIcon fontSize="large" />, title: "Dueño de una Parcela", description: "Serás dueño de una parcela de 1000 m2 con 72 plantas de palta Hass implementadas con un sistema de riego tecnificado por goteo." },
    { icon: <WaterIcon fontSize="large" />, title: "Gestión de Producción", description: "Agromocan S.A.C. se encarga de la siembra, cosecha y la exportación de la producción de tu lote." },
    { icon: <MonetizationOnIcon fontSize="large" />, title: "Ganancias Anuales", description: "Recibirás ganancias anuales generadas con la exportación de las paltas, cubriendo los costos de mantenimiento a partir del 3er año." }
  ];

  return (
    <Container maxWidth="lg" sx={{ padding: '40px 0', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        ¿Cómo Formo Parte?
      </Typography>
      <Grid container spacing={4}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ padding: '20px' }}>
              {item.icon}
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">{item.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ComoFormoParteSection;
