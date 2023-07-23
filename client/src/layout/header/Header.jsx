import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <video className="video" src={"https://res.cloudinary.com/dncufgdch/video/upload/v1690143871/avip0e7wjmqstef8ugev.mp4"} autoPlay loop muted />

        <AppBar position="static" sx={{ backgroundColor: "white" }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textAlign: "center" }}
              onClick={() => navigate("/")}
            >
              SeaData Test
            </Typography>
            <Link to={"/addUserPage"}  className="link" >
           Add new user
          </Link>
          </Toolbar>
         
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
