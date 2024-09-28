import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Importar ThemeProvider
import CssBaseline from '@mui/material/CssBaseline'; // Importar CssBaseline
import 'bootstrap/dist/css/bootstrap.min.css';

// Crear un tema (puedes personalizarlo más tarde)
const theme = createTheme({
  palette: {
    mode: 'light', // O 'dark' si prefieres
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// Reportar métricas
reportWebVitals();
