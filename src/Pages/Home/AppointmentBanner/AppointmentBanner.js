import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import './AppointmentBanner.css';
import { Button, Typography } from "@mui/material";

const AppointmentBg = {
  background: `url(${bg})`,
  backgroundColor: "rgba(33, 34, 89 ,0.8)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 120,
};
const AppointmentBanner = () => {
  return (
    <Box sx={{ flexGrow: 1,p:4}} style={AppointmentBg}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            className="custom-image"
            src={doctor}
            style={{ width: "400px", marginTop: "-120px" }}
            alt=""
          />
        </Grid>
        <Grid item xs={12} md={6}  sx={{ display: 'flex',alignItems: 'center',justifyContent: 'flex-start',textAlign:'left'}}>
          <Box>
            <Typography variant="h6" style={{ color: "#4EDAD9" }} sx={{mb:5}}>
              Appointment
            </Typography>
            <Typography variant="h4">Make An Appointment</Typography>
            <Typography
              variant="h6"
              style={{ color: "white", fontWeight: "300", fontSize: "16px" }}
              sx={{my:4}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cum
              neque a sint facere animi consectetur, aspernatur error dolor
              commodi?
            </Typography>
            <Button variant="contained" style={{backgroundColor:'#4EDAD9'}}>Make appointment</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
