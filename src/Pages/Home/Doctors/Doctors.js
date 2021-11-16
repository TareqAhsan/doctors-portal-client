import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Card, CardMedia } from "@mui/material";
import axios from "axios";
const Doctors = () => {
  const [doctors, setDoctors] = useState();
  useEffect(() => {
    axios("https://fast-everglades-35128.herokuapp.com/doctors").then(
      (result) => setDoctors(result.data)
    );
  }, []);
  return (
    <div>
      <Typography gutterBottom variant="h3" sx={{ py: 4 }} component="div">
        Our doctors
      </Typography>
      <Container>
        <Grid container spacing={2}>
          {doctors?.map((doctor) => (
            <Grid key={doctor._id} item xs={12} md={6} lg={4}>
              <Card sx={{ maxWidth: 310 }}>
                <CardMedia
                  sx={{ width: "100%" }}
                  component="img"
                  height="190"
                  image={`data:image/jpeg;base64,${doctor.image}`}
                  alt="green iguana"
                />
                <Typography gutterBottom variant="h5" component="div">
                  {doctor.name}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Doctors;
