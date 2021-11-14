import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import Service from "../Service/Service";

const services = [
  {
    name: "fluoride treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate suscipit laudantium eaQuiperspiciatis consequatur deleniti corrupti optio aperiam sed? Omnis id quaerat nobis, quae error doloribus quidemvero",
    img: Fluoride,
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate suscipit laudantium eaQuiperspiciatis consequatur deleniti corrupti optio aperiam sed? Omnis id quaerat nobis, quae error doloribus quidemvero",
    img: cavity,
  },
  {
    name: "Teeth Whitening",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate suscipit laudantium eaQuiperspiciatis consequatur deleniti corrupti optio aperiam sed? Omnis id quaerat nobis, quae error doloribus quidemvero",
    img: whitening,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          variant="h6"
          sx={{ fontWeight: 500, color: "success.main", m: 2 }}
        >
          OUR SERVICES
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 600, m: 5 }}>
          SERVICES WE PROVIDE
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
