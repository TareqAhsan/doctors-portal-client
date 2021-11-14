import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ book,date,setBookingSuccess }) => {
  const { name, time, space } = book;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 4 }}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{ color: "info.main", fontWeight: "600" }}
          >
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {space} space available
          </Typography>
          <Button onClick={handleOpen} variant="contained">
            Make Appointment
          </Button>
        </Paper>
      </Grid>
      <BookingModal
      date={date}
        open={open}
        book={book}
        handleOpen={handleOpen}
        handleClose={handleClose}
        setBookingSuccess={setBookingSuccess}
      ></BookingModal>
    </>
  );
};

export default Booking;
