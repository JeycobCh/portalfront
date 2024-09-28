// src/pages/AdminDashboard.js

import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const AdminDashboard = () => {
  const [newClient, setNewClient] = useState({ email: '', name: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClient({ ...newClient, [name]: value });
  };

  const handleAddClient = () => {
    // Simulación de agregar cliente, aquí eventualmente harías una llamada a la API.
    alert(`Cliente ${newClient.name} con correo ${newClient.email} registrado.`);
    setNewClient({ email: '', name: '' });
  };

  // Simulación de clientes registrados
  const clients = [
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com', status: 'Activo' },
    { id: 2, name: 'María García', email: 'maria@example.com', status: 'Inactivo' },
  ];

  // Simulación de proyectos
  const projects = [
    { id: 1, name: 'Proyecto Agromocan', progress: '50%', status: 'En progreso' },
    { id: 2, name: 'Proyecto Romoca', progress: '100%', status: 'Completado' },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Panel de Administración
      </Typography>

      {/* Gestión de Clientes */}
      <Typography variant="h5" gutterBottom>
        Gestión de Clientes
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Registrar Nuevo Cliente</Typography>
              <TextField
                fullWidth
                label="Nombre"
                name="name"
                value={newClient.name}
                onChange={handleInputChange}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Correo Electrónico"
                name="email"
                value={newClient.email}
                onChange={handleInputChange}
                margin="normal"
              />
              <Button variant="contained" color="primary" onClick={handleAddClient}>
                Registrar Cliente
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Clientes Registrados</Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Nombre</TableCell>
                      <TableCell>Correo</TableCell>
                      <TableCell>Estado</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {clients.map((client) => (
                      <TableRow key={client.id}>
                        <TableCell>{client.id}</TableCell>
                        <TableCell>{client.name}</TableCell>
                        <TableCell>{client.email}</TableCell>
                        <TableCell>{client.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Gestión de Proyectos */}
      <Typography variant="h5" gutterBottom sx={{ marginTop: 3 }}>
        Gestión de Proyectos
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Proyectos Activos</Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Nombre del Proyecto</TableCell>
                      <TableCell>Progreso</TableCell>
                      <TableCell>Estado</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {projects.map((project) => (
                      <TableRow key={project.id}>
                        <TableCell>{project.id}</TableCell>
                        <TableCell>{project.name}</TableCell>
                        <TableCell>{project.progress}</TableCell>
                        <TableCell>{project.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Métricas del Proyecto */}
      <Typography variant="h5" gutterBottom sx={{ marginTop: 3 }}>
        Métricas de Avances
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Avance General del Proyecto</Typography>
              {/* Aquí podrías agregar gráficos más adelante con librerías como Chart.js */}
              <Typography variant="body1">Avance total: 50%</Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Más métricas se pueden agregar */}
      </Grid>
    </Container>
  );
};

export default AdminDashboard;
