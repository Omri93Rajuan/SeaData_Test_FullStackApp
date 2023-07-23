import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import sea from "../../assets/sea.mp4";
const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <video className="video" src={sea} autoPlay loop muted />

        <AppBar position="static" sx={{ backgroundColor:"white"}}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textAlign: "center" }}
            >
              SeaData Test
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
