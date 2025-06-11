import React, { useState, useContext } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { FoodContext } from "../Services/Server";

const FoodForm = () => {
  const { addFood } = useContext(FoodContext);

  const [foodData, setFoodData] = useState({
    food_name: "",
    description: "",
    url_image: "",
    Ratings: 0,
  });

  const handleChange = (e) => {
    setFoodData({ ...foodData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addFood(foodData);
    setFoodData({ food_name: "", description: "", url_image: "", Ratings: 0 });
  };

  return (
    <Box  sx={{ maxWidth:400, m: 2 }}>
      <Box
       position="fixed"  
         sx={{width:{
          md:'400px',
          lg:"500px"
      },
      display:{
        sm:"none",
        xs:"none",
        md:"block"
      }    
      }} >
        <Typography variant="h6" gutterBottom>
          Add Food Review
        </Typography>
        <form onSubmit={handleSubmit}>  
          <TextField
            label="Food Name"
            name="food_name"
            fullWidth
            margin="normal"
            value={foodData.food_name}
            onChange={handleChange}
          />
          <TextField
            label="Description"
            name="description"
            fullWidth
            margin="normal"
            multiline
            rows={3}
            value={foodData.description}
            onChange={handleChange}
          />
          <TextField
            label="Image URL"
            name="url_image"
            fullWidth
            margin="normal"
            value={foodData.url_image}
            onChange={handleChange}
          />
          <TextField
            label="Ratings (0-5)"
            name="Ratings"
            type="number"
            inputProps={{ min: 0, max: 5, step: 0.5 }}
            fullWidth
            margin="normal"
            value={foodData.Ratings}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary">
            Add Food
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default FoodForm;
