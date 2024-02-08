import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import CircularProgress from "@mui/material/CircularProgress";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../Theme";

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

      <h1>Rating </h1>
      <Rating />
      <br />
      <h1> Slider </h1>
      <Slider />
      <br />
      <h1>TextField</h1>
      <TextField label="Name" />

      <h1> Avatar </h1>
      <Avatar
        alt="Travis Howard"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPFGo-rTmyK6FmGCVAuJJg8Q_zQ7IrUVlqgg&usqp=CAU"
      />

      <h1> Badge </h1>
      <Badge
        badgeContent={10}
        color="primary"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <h1> Progress Bar </h1>
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>

        <MailIcon color="action" />
      </Badge>
      <Box sx={{ hight: "200px", border: "2px solid blue" }}>
        <h1> Rahul </h1>
      </Box>
      {/* Stack */}

      <h1> Skeleton </h1>

      <Box width={200} height={400}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width="300px" height="200px" />
        <Skeleton variant="text" />
      </Box>

      <Stack
        direction="row"
        style={{ padding: "20px", marginLeft: "180px" }}
        spacing={10}
      >
        <Skeleton variant="rectangular" width="300px" height="200px" />
        <Skeleton variant="rectangular" width="300px" height="200px" />
        <Skeleton variant="rectangular" width="300px" height="200px" />
      </Stack>

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
      <h1> Grid </h1>

      {/* <Grid container spacing={2}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="yellow" p={5} textAlign="center">
            Center1
          </Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="blue" p={5} textAlign="center">
            Center2
          </Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="red" p={5} textAlign="center">
            Center3
          </Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="green" p={5} textAlign="center">
            Center4
          </Box>
        </Grid>
      </Grid> */}

      <Grid container spacing={2}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="yellow" p={5} textAlign="center">
            <Grid container>
              <Grid item xs={12}>
                <Box bgcolor="red" p={5} textAlign="center">
                  1-1
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box bgcolor="green" p={5} textAlign="center">
                  1-2
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box bgcolor="orange" p={5} textAlign="center">
                  1-3
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="blue" p={5} textAlign="center">
            Center2
          </Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="red" p={5} textAlign="center">
            Center3
          </Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="green" p={5} textAlign="center">
            Center4
          </Box>
        </Grid>
      </Grid>

      <div style={{ marginBottom: "50px" }}></div>
      <div>
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="Ram">
            Button Outline
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Select;
