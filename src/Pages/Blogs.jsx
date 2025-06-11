import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import {
  Box,
  Container,
  createTheme,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import MenuBar from "../components/MenuBar";
import Content from "../components/Content";
import RightBar from "../components/RightBar";
import Add from "../components/Add";

function Blogs() {
  const [mode, setmode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth="xl">
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            marginTop={8}
          >
            <MenuBar theme={darkTheme} mode={mode} setmode={setmode} />
            <Content />
            <RightBar />
            <Add />
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Blogs;
