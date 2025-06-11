import { Button } from "@mui/material";

const Buttons = ({
  onClick,
  buttonname,
  backgroundColor,
  color,
  variant = "contained",
  disableElevation,
  starticon,
  endicon,
  width,
}) => {
  return (
    <Button
      disableElevation={disableElevation}
      startIcon={starticon}
      endIcon={endicon}
      variant={variant}
      onClick={onClick}
      width={width}
      sx={{ backgroundColor, color }}
    >
      {buttonname}
    </Button>
  );
};

export default Buttons;
