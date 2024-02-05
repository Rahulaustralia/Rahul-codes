import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
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
      <div>
        <Typography variant="h1">h1 Heading</Typography>
        <Typography variant="h2">h2 Heading</Typography>
        <Typography variant="h3">h3 Heading</Typography>
        <Typography variant="h4">h4 Heading</Typography>
        <Typography variant="h5">h5 Heading</Typography>
        <Typography variant="h6">h6 Heading</Typography>

        <Typography variant="subtitle1">Sub title 1</Typography>
        <Typography variant="subtitle2">Sub title 2</Typography>

        <Typography variant="body1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet aperiam
          ullam, quidem enim iure cumque minus aliquam! Animi, sed laudantium?
          Vero in fugiat animi consectetur. Repudiandae recusandae nesciunt
          magni. Fugiat.
        </Typography>

        <Typography variant="body2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet aperiam
          ullam, quidem enim iure cumque minus aliquam! Animi, sed laudantium?
          Vero in fugiat animi consectetur. Repudiandae recusandae nesciunt
          magni. Fugiat.
        </Typography>
      </div>
    </div>
  );
};

export default Select;
