import React from "react";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import baby from "../../../images/treatment.png";
import { Box } from "@mui/system";
const ExceptionalDental = () => {
  return (
    <Container sx={{ flexGrow: 1, my: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src={baby} alt="" style={{ height: "460px",width:'90%'}} />
        </Grid>
        <Grid item xs={12} md={6} sx={{display:'flex',alignItems:'center',textAlign:'left'}}>
          <Box>
            <Typography
              variant="h4"
              sx={{ fontWeight: 500 }}
              gutterBottom
              component="div"
            >
              Exceptional Dental <br />
              Care, on Your Terms
            </Typography>
            <Typography variant="body2" sx={{ color: "gray",my:5,fontSize:'18px' }} gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              deserunt? Ratione odio sit aliquid magnam, ullam perferendis
              molestiae eius omnis. Iste saepe quas hic minima eius placeat
              corporis omnis ex!
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#4EDAD9" }}>
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExceptionalDental;
