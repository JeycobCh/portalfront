// src/pages/ClientDashboard.js

import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, TextField } from '@mui/material';

const ClientDashboard = () => {
  // Simulación de avances del proyecto
  const projectUpdates = [
    { id: 1, title: 'Avance de Siembra', description: 'El 40% de las parcelas ya están sembradas.', date: '10/09/2024' },
    { id: 2, title: 'Instalación de Riego', description: 'Se completó el 100% del sistema de riego por goteo.', date: '01/09/2024' },
  ];

  const handleChangePassword = () => {
    alert('Funcionalidad para cambiar contraseña');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Panel del Cliente
      </Typography>

      {/* Avances del Proyecto */}
      <Typography variant="h5" gutterBottom>
        Avances del Proyecto
      </Typography>
      <Grid container spacing={3}>
        {projectUpdates.map((update) => (
          <Grid item xs={12} md={6} key={update.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{update.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {update.description}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  Fecha: {update.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Gestión de la Cuenta */}
      <Typography variant="h5" gutterBottom sx={{ marginTop: 3 }}>
        Gestiona tu Cuenta
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Cambiar Contraseña</Typography>
              <TextField
                fullWidth
                label="Nueva Contraseña"
                type="password"
                margin="normal"
              />
              <Button variant="contained" color="primary" onClick={handleChangePassword}>
                Cambiar Contraseña
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ClientDashboard;
