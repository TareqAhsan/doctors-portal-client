import React from "react";
import bg from "../../../images/appointment-bg.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
const AppointmentBg = {
  background: `url(${bg})`,
  backgroundColor: "rgba(33, 34, 89 ,0.8)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 120,
};
const Contact = () => {
  return (
    <Box sx={{ flexGrow: 1,p:2 }} style={AppointmentBg}>
      <Typography
        sx={{ color: "#4EDAD9", my: 4 }}
        variant="h6"
        gutterBottom
        component="div"
      >
        contact us
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontWeight: 400 }}
        gutterBottom
        component="div"
      >
        Always Connect with us
      </Typography>
      <form action="">
        <Box>
          <TextField
            sx={{
              background: "white",
              width: "70%",
              m: 1,
              borderRadius: "5px",
            }}
            id="filled-size-normal"
            defaultValue="Your Email"
            variant="filled"
          />
          <TextField
            sx={{
              background: "white",
              width: "70%",
              m: 1,
              borderRadius: "5px",
            }}
            id="filled-size-normal"
            defaultValue="subject"
            variant="filled"
          />
          <TextField
            sx={{
              background: "white",
              width: "70%",
              m: 1,
              borderRadius: "5px",
            }}
            id="filled-size-normal"
            defaultValue="message"
            variant="filled"
          />
        </Box>
        <Button
        sx={{my:4}}
          variant="contained"
          type="submit"
          style={{ backgroundColor: "#4EDAD9"}}
        >
          submit
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
