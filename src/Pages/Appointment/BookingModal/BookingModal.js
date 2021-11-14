import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ open, handleClose, book, date, setBookingSuccess }) => {
  const { name, time } = book;
  const { user } = useAuth();
  const initialInfo = {
    patientname: user.displayName,
    email: user.email,
    phone: "",
  };
  const [bookinfo, setBookinfo] = useState(initialInfo);

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookinfo };
    newInfo[field] = value;
    console.log(newInfo);
    setBookinfo(newInfo);
  };
  const handleSubmit = (e) => {
    console.log("clicked");
    const appointment = {
      ...bookinfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString(),
    };
    axios
      .post(
        "https://fast-everglades-35128.herokuapp.com/appointments",
        appointment
      )
      .then((result) => {
        if (result.data.insertedId) {
          setBookingSuccess(true);
          handleClose();
        }
      });
    e.preventDefault();
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue={time}
              size="small"
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue={user?.email}
              name="email"
              onBlur={handleBlur}
              size="small"
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue={user?.displayName}
              name="patientname"
              onBlur={handleBlur}
              size="small"
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue="Your Phone No"
              name="phone"
              onBlur={handleBlur}
              size="small"
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue={date.toLocaleDateString()}
              size="small"
            />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;
