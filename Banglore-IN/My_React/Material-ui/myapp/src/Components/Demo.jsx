import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Fab from "@mui/material/Fab";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
// import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import Stack from "@mui/material/Stack";

const Demo = () => {
  return (
    <>
      <div>{/* <Typography variant="h1">h1 Heading</Typography> */}</div>
      <div>
        {/* // Button */}
        {/* The variant to use.

   variant='contained'
  | 'outlined'
  | 'text'
  | string 
    Default:'text'
  */}
        {/* // Size

 The size of the component. small is equivalent to the dense button styling.

  Type:'small'
   |    'medium'
   | 'large'
   | string

Default:'medium' */}
        {/* // Colors 
  :'inherit'
| 'primary'
| 'secondary'
| 'success'
| 'error'
| 'info'
| 'warning'
| string

Default:'primary' */}
        {/* // href="https://google.com" */}
        {/* // disabled */}
        {/* // startIcon & endIcon 

<Button variant="outlined" startIcon={<DeleteIcon />}>
  Delete
</Button> */}
        {/* <h4> IconButton </h4>
<IconButton aria-label="delete">
  <DeleteIcon />
</IconButton> */}
        {/* <h4> Custom Button </h4>
        <Button style={{ backgroundColor: "green" }} variant="contained">
          Click Me
        </Button> */}
        {/* <h4>Button Group </h4>

    <ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup> */}
        {/* <h4> Floating Action Button </h4>
        <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab> */}
      </div>
      <div>
        <Button variant="contained" color="error">
          Click me{" "}
        </Button>
        <Button variant="outlined" color="success">
          Outlined
        </Button>
        <Button variant="contained" color="error" size="large">
          Outlined
        </Button>
        <Button variant="contained" size="small" color="info">
          Outlined
        </Button>
        <Button
          variant="contained"
          color="warning"
          href="https://google.com"
          disabled
        >
          Google
        </Button>

        <h1> Button Group</h1>
        <Box>
          <ButtonGroup
            variant="contained"
            aria-label="Basic button group"
            orientation="vertical"
          >
            <Button style={{ padding: "20px" }}>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Box>

        <h1>Custom Button</h1>
        <Button style={{ color: "black", backgroundColor: "blue" }}>One</Button>
        <Button
          variant="contained"
          sx={{
            width: 300,
            color: "success",
          }}
        >
          One
        </Button>
        <h1> Icon Button </h1>
        <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" endIcon={<AddShoppingCartIcon />}>
          Add to Cart
        </Button>
        <h1> Fab Button </h1>
        <Fab> + </Fab>
        <Fab> R </Fab>
      </div>
      <div>
        <h1> Checkbox </h1>
        <Checkbox color="secondary" label="Check" />
        <Checkbox color="success" />
        <Checkbox color="secondary" label="Disabled" />
        <FormControlLabel required control={<Checkbox />} label="Required" />
      </div>
      <div>
        <h1>Radio Button</h1>
        <FormControl>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </FormControl>
      </div>
      <div>
        <h1> Reating </h1>
        <Rating name="read-only" defaultValue={2.5} precision={0.5} />
      </div>
      <div>
        {" "}
        <h1> Sliders </h1>
        <Box sx={{ width: 200 }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <VolumeDown />
            <Slider aria-label="Volume" />
            <VolumeUp />
          </Stack>
          <Slider disabled defaultValue={30} aria-label="Disabled slider" />
        </Box>
      </div>
      <Typography variant="h1"> Rahul</Typography>
      <Typography variant="body1"> Rahul</Typography>
    </>
  );
};

export default Demo;
