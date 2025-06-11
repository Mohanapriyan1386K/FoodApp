import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Routers/AuthContext";
import { Button, Box } from "@mui/material";

const Home = () => {
  // const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // logout();
    navigate("/");
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
      
    </Box>
  );
};

export default Home;
