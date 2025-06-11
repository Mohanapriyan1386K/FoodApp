import React, { useContext } from "react";
import { Favorite, FavoriteBorder, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Box,
  Container,
} from "@mui/material";
import { red } from "@mui/material/colors";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { FoodContext } from "../Services/Server";

function Postcards() {
  const { foods } = useContext(FoodContext);

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

  return (
    <div>
      <Container>


      <Box flex={2} sx={{
      }}   >
        {foods && foods.length > 0 ? (
          foods.map((item, index) => (
            <Card 
              key={index}
              sx={{
                maxWidth:{
                  md:"500px",
                  lg:"600px",
                  xl:"700px",
                },
                marginBottom: 2,
                boxShadow: "0px 0px 5px black",
              }}
            >
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {item.food_name.charAt(0).toUpperCase()}
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
                alt={item.food_name}
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
          ))
        ) : (
          <Typography variant="h6" sx={{ m: 2 }}>
            No food items available.
          </Typography>
        )}
      </Box>
      </Container>

    </div>
  );
}

export default Postcards;
