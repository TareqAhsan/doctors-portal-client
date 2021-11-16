import React,{useState} from "react";
import Grid from "@mui/material/Grid";
import Booking from "../../Appointment/Booking/Booking";
import { Alert, Container, Typography } from "@mui/material";
const bookings = [
  {
    id: 1,
    name: "Teeth Orthodonics",
    time: "08.00 AM - 09.00 AM",
    price:20,
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "09.00 AM - 10.00 AM",
    price:15,
    space: 8,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "10.00 AM - 11.00 AM",
    price:17,
    space: 9,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "11.00 AM - 12.00 PM",
    price:19,
    space: 5,
  },
  {
    id: 5,
    name: "Pediatric Dental",
    time: "06.00 PM - 07.00 PM",
    price:25,
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgery",
    time: "07.00 PM - 08.00 PM",
    price:35,
    space: 10,
  },
];
const AvailableAppointments = ({ date, setDate }) => {
  const [bookingSuccess,setBookingSuccess] = useState(false)
  return (
    <Container>
      <Typography variant="h4" sx={{ color: "info.main", py: 3 ,fontWeight: "600"}}>
        Available appointments {date.toDateString()}
      </Typography>
      {bookingSuccess &&  <Alert severity="success">Appointment submitted successfully!</Alert>}
      <Grid container spacing={2}>
        {bookings.map((book) => (
          <Booking setBookingSuccess={setBookingSuccess} date={date} book={book} key={book.id}></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointments;
