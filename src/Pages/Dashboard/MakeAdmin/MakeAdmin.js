import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import { Button } from "@mui/material";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState();
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();
  const handleBlur = (e) => {
    setEmail(e.target.value);
    //    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    const user = { email };
    console.log(user);
    axios
      .put("https://fast-everglades-35128.herokuapp.com/users/admin", user, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        if (result.data.modifiedCount) {
          console.log(result.data);
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          onBlur={handleBlur}
          name="email"
          type="email"
          label="Enter Email"
          variant="standard"
        />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Admin Added SuccessFully</Alert>}
    </div>
  );
};

export default MakeAdmin;
