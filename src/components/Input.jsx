import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Input = ({ type, value, onChange, label, placeholder, color, multiline, width,margin,height,row }) => {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        color={color}
        placeholder={placeholder}
        value={value}
        multiline={multiline}
        type={type}
        onChange={onChange}
        label={label}
        variant="outlined"
        rows={row}
        sx={{ width: width || "25ch", m:1,height:height }}
      />
    </Box>
  );
};

export default Input;
