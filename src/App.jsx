import React from "react";
import AppRoutes from "./Routers/AppRoutes";
import { AuthProvider } from "./Routers/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
