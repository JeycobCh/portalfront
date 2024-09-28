import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import ClientDashboard from './pages/ClientDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import useAuth from './hooks/useAuth';

function App() {
  const { user } = useAuth();  // Aquí obtenemos el estado del usuario

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* Rutas protegidas */}
          <Route 
            path="/admin-dashboard" 
            element={
              <ProtectedRoute role="ADMIN" user={user}>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/client-dashboard" 
            element={
              <ProtectedRoute role="CLIENT" user={user}>
                <ClientDashboard />
              </ProtectedRoute>
            } 
          />
          
          {/* Si no coincide ninguna ruta, redirigir a HomePage */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
