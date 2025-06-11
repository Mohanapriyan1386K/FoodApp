import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Postcards from "../components/Postcards";
import FoodForm from "../components/FoodForm";

function Post() {
  return (
    <Container>
      <Stack direction="row" marginTop={10} gap={2}>
        <Postcards />
        <FoodForm />
      </Stack>
    </Container>
  );
}

export default Post;
