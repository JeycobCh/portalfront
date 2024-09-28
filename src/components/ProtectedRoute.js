// src/components/ProtectedRoute.js

const ProtectedRoute = ({ children }) => {
  // Aquí simplemente permitimos el acceso sin autenticación
  return children; // Permite a cualquier usuario acceder a la ruta
};

export default ProtectedRoute;
