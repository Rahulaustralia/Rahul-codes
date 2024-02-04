import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const Select = () => {
  return (
    <div>
      <button>Normal React Button</button>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text Button</Button>
        <Button color="secondary" variant="contained">
          Click Me
        </Button>
        <Button variant="outlined"> Button Outline </Button>
        <Button href="https://google.com">Google Link</Button>
        <Button disabled variant="contained">
          Disabled
        </Button>
      </Stack>
      <Box sx={{ hight: "200px", border: "2px solid blue" }}>
        <h1> Rahul </h1>
      </Box>
      {/* Stack */}
    </div>
  );
};

export default Select;
