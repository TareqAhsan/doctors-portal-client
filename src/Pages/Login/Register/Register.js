import React from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { NavLink ,useHistory} from "react-router-dom";
import loginimg from "../../../images/login.png";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [LoginData, setLoginData] = useState();
  const history = useHistory()
  const { register, isloading, error, user } = useAuth();
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...LoginData };
    newLoginData[field] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
  };
  const handleSubmit = (e) => {
    if (LoginData.password !== LoginData.password2) {
      alert("password did not match");
    }
    register(LoginData.email, LoginData.password,LoginData.name,history);
    e.preventDefault();
  };
 
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ mt: 8 }}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          {!isloading && (
            <form onSubmit={handleSubmit}>
              <TextField
                onBlur={handleBlur}
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="your name"
                type="text"
                name="name"
                variant="standard"
              />
              <TextField
                onBlur={handleBlur}
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="your email"
                type="email"
                name="email"
                variant="standard"
              />
              <TextField
                onBlur={handleBlur}
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="your password"
                type="password"
                name="password"
                variant="standard"
              />
              <TextField
                onBlur={handleBlur}
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="re type"
                type="password"
                name="password2"
                variant="standard"
              />
              <Button
                sx={{ width: "75%", m: 1 }}
                variant="contained"
                type="submit"
              >
                Register
              </Button>
              <NavLink to="/login">
                <Button sx={{ width: "75%", m: 1 }} variant="text">
                  Already registered? Please login
                </Button>
              </NavLink>
            </form>
          )}
          {isloading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">user successfully created !</Alert>
          )}
          {error && (
            <Alert severity="error">
              {error}
            </Alert>
          )}
            {/* <Button onClick={handleGoogle} variant="contained">
                  sign in using Google
                </Button> */}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={loginimg} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
