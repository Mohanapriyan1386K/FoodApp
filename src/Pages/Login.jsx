import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Input from "../components/Input";
import Buttons from "../components/Buttons";
import { Container, Box, Typography } from "@mui/material";
import { useAuth } from "../Routers/AuthContext";
import TransitionsModal from "../components/TransitionsModal";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (email && password) {
      // TODO: Replace this with real API request
      const fakeToken = "dummy_token_123456"; // Simulated token from backend
      login(fakeToken); // Store token using AuthContext
      navigate("/home");
    } else {
      setModalOpen(true);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Box boxShadow="0px 0px 10px black" padding={5}>
          <Typography textAlign="center" variant="h5" marginBottom={2}>
            LOGIN
          </Typography>

          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            placeholder="Enter your email"
          />
          <Input
            type="password"
            value={password}a
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            placeholder="Enter your password"
          />

          <Box display="flex" justifyContent="center" marginTop={2}>
            <Buttons
              buttonname="LOGIN"
              backgroundColor="green"
              onClick={handleLogin}
            />
          </Box>

          <Typography textAlign="center" marginTop={3}>
            Don't have an account?{" "}
            <Link to="/signup" style={{ color: "#1976d2" }}>
              Sign up
            </Link>
          </Typography>
        </Box>
      </Box>

      {/* Modal for empty input warning */}
      <TransitionsModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
      />
    </Container>
  );
};

export default Login;
