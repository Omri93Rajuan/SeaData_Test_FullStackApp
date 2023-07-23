import React from "react";
import Paper from "@mui/material/Paper";
import {Typography } from "@mui/material";

const Footer = () => {
  return (
    <Paper sx={{backgroundColor:"#03588C"}}>

      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, textAlign: "center",color:"white" }}
      >
        Created by Omri Rajuan
      </Typography>
    </Paper>
  );
};

export default Footer;
