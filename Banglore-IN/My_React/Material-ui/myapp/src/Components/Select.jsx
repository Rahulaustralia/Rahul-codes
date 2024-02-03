import React from "react";
import Button from "@mui/material/Button";
const Select = () => {
  return (
    <div>
      <button>Normal React Button</button>
      <Button variant="text"> Text Button </Button>
      <Button color="secondary" variant="contained">
        Click Me{" "}
      </Button>
      <Button variant="outlined"> Button Outline </Button>
      <Button href="https://google.com">Google Link</Button>
      <Button disabled variant="contained">
        {" "}
        Disabled{" "}
      </Button>
    </div>
  );
};

export default Select;
