import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Buttons";
import { Box, Container, Typography } from "@mui/material";

const Signup = () => {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Box sx={{boxShadow:"0px 0px 10px black", padding:8}} >
          <div className="max-w-md mx-auto p-4">
            <Typography textAlign="center" variant="h4">
              SIGNUP
            </Typography>
            <Input
              type="text"
              placeholder="  Enter User name"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              label="Username"
            />
            <Input
              type="email"
              placeholder=" Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
            />
            <Input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="password"
            />

            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              marginTop={3}
            >
              <Button
                text="Sign Up"
                onClick={() => alert("Account created!")}
                buttonname="SIGNUP"
                backgroundColor="RED"
              />
            </Box>

            <p className="mt-4">
              Already have an account?{" "}
              <Link to="/" className="text-blue-500">
                Login
              </Link>
            </p>
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
