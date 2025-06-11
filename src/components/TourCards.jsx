import {
  Favorite,
  FavoriteBorder,
  Share,
  ShareLocation,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  requirePropFactory,
  Typography,
  Box,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { foods } from "../Services/Datas";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function TourCards() {
  const value = 3.5;
  return foods.map((item) => {
    return (
      <div>
        <Card sx={{ maxWidth:600, marginBottom: 2 ,boxShadow:"0px 0px 5px black" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <FavoriteBorder />
              </IconButton>
            }
            title={item.food_name}
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="250"
            image={item.url_image}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Favorite />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
            <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
              <Rating
                name="text-feedback"
                value={item.Ratings}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Box sx={{ ml: 2 }}>{labels[item.Ratings]}</Box>
            </Box>
          </CardActions>
        </Card>
      </div>
    );
  });
}

export default TourCards;
