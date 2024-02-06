import React from "react";

const Demo = () => {
  return (
    <>
      <div>{/* <Typography variant="h1">h1 Heading</Typography> */}</div>
      <div>
        // Button
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
    </>
  );
};

export default Demo;
