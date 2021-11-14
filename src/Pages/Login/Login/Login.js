import { Button, Container, Grid, TextField, Typography ,CircularProgress ,Alert} from "@mui/material";
import React, { useState } from "react";
import { NavLink,useHistory,useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import loginimg from "../../../images/login.png";
const Login = () => {
  const [LoginData, setLoginData] = useState({});
  const { user, error, loginUser, isloading ,googlesignin} = useAuth();
  let history = useHistory();
  let location = useLocation();
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...LoginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleSubmit = (e) => {
    loginUser(LoginData.email, LoginData.password,location,history);
    alert("hello");
    e.preventDefault();
  };
  const handleGoogle = ()=>{
    googlesignin(location,history)
  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ mt: 8 }}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                onBlur={handleChange}
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="your email"
                name="email"
                variant="standard"
              />
              <TextField
                onBlur={handleChange}
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="your password"
                type="password"
                name="password"
                variant="standard"
              />
              <Button
                sx={{ width: "75%", m: 1 }}
                variant="contained"
                type="submit"
              >
                Login
              </Button>
              <NavLink to="/register">
                <Button sx={{ width: "75%", m: 1 }} variant="text">
                  Are you new user ? Please Register
                </Button>
              </NavLink>
            </form>
            <Button onClick={handleGoogle} variant="contained">
                  sign in using Google
                </Button>
          {isloading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">user Login successfully!</Alert>
          )}
          {error && <Alert severity="error">{error}</Alert>}
         
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={loginimg} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
