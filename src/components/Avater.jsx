import { Avatar } from "@mui/material";
import React from "react";

function Avater({src, width ,heigh}) {
  return (
    <Avatar
      alt="Remy Sharp"
      src={src}
      sx={{ width ,heigh }}
    />
  );
}

export default Avater;
