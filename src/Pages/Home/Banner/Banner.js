import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Container, Typography } from "@mui/material";
import { textAlign } from "@mui/system";

const backgroundImage = {
  background: `url(${bg})`,
};

const varticalCenter = {
  display: "flex",
  height: "450px",
  alignItems: "center",
};

const Banner = () => {
  return (
    <Container sx={{ flexGrow: 1 }} style={backgroundImage}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} style={{...varticalCenter,textAlign:'left'}}>
          <Box>
            <Typography variant="h3">
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography sx={{ color: "gray" ,my:3}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim,
              necessitatibus!
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#4EDAD9" }}>
              Get Appointment
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={varticalCenter}>
          <img src={chair} style={{ width: "350px" }} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
