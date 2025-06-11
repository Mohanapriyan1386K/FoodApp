import React from "react";
import Box from "@mui/material/Box";
import { ImageList, ImageListItem, Typography } from "@mui/material";
import { foods } from "../Services/Datas";

export default function RightBar() {
  console.log(foods);
  return (
    <Box flex={1} sx={{padding:2 ,display:{xs:"none",md:"block"  }}}>
      <Box position="fixed">
        <Typography align="center" sx={{ marginTop: 2 }}>
          PHOTO GALARY
        </Typography>
        <ImageList sx={{  objectFit:"cover",  width:{
          md:"250px",
          lg:"300px"
        }, height: 500 }} cols={3} rowHeight={164}>
          {foods.map((foods) => (
            <ImageListItem key={foods.id}>
              <img
                srcSet={`${foods.url_image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={foods.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}
