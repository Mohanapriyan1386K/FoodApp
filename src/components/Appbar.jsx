import { AppBar, Toolbar, Button, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Routers/AuthContext";
import Buttons from "../components/Buttons";
import LoginIcon from "@mui/icons-material/Login";
import Avater from "./Avater";
import profile from "../assets/img/profile.jpg";
import RightDrawer from "./RightDrawer";

import React from "react";

function Appbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  const handleblog = () => {
    navigate("/blog");
  };

  const handleHome = () => {
    navigate("/home");
  };
  const handlepost = () => {
    navigate("/post");
  };

  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Box>
              <Avater src={profile} />
            </Box>

            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            >
              <Buttons
                variant=""
                onClick={handleHome}
                buttonname="Home"
                disableElevation={true}
              />
              <Buttons
                variant=""
                onClick={handleblog}
                buttonname="BLOG"
                disableElevation={true}
              />
              <Buttons variant="" onClick={handlepost} buttonname="POST" />
              <Buttons variant="" buttonname="SERVICE" />
              <Buttons variant="" buttonname="PRODUCT" />
            </Box>
            <Box display="flex">
              <Box sx={{ display: { md: "none" } }}>
                <RightDrawer />
              </Box>

              <Box  sx={{ display: { md: "block", sm: "none",xs:"none" } }}>
                <Buttons
                  onClick={handleLogout}
                  endicon={<LoginIcon />}
                  buttonname="LOGOUT"
                  backgroundColor="white"
                  color="black"
                ></Buttons>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Appbar;
