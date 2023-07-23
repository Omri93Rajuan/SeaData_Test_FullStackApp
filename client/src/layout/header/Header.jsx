import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import sea from "../../assets/sea.mp4";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <video className="video" src={sea} autoPlay loop muted />

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
