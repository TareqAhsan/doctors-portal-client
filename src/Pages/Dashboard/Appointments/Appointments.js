import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
const Appointments = ({ date }) => {
  const [appointmentData, setAppointmentData] = useState();
  const { user, token } = useAuth();
  useEffect(() => {
    const url = `https://fast-everglades-35128.herokuapp.com/appointments/?email=${user?.email}&date=${date.toLocaleDateString()}`;
    axios(url, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((result) => {
      setAppointmentData(result.data);
    });
  }, [date, user.email, token]);
  return (
    <div>
      <h2>Appointments {appointmentData?.length}</h2>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>PatientName</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Service</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointmentData?.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.patientname}
                </TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.serviceName}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Appointments;
