import React, { useState } from "react";
import { Button, Input, TextField } from "@mui/material";
const AddDoctor = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);
    fetch("https://fast-everglades-35128.herokuapp.com/doctors", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("added successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <h1>This is Doctor </h1>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setName(e.target.value)}
          sx={{ width: "50%" }}
          label="name"
          variant="standard"
          required
        />
        <br />
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          sx={{ width: "50%" }}
          label="Email"
          type="email"
          variant="standard"
        />
        <br />
        <Input
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
        />
        <br />
        <Button variant="contained" type="submit">
          Upload
        </Button>
      </form>
    </div>
  );
};

export default AddDoctor;
<h1>This is Doctor </h1>;
