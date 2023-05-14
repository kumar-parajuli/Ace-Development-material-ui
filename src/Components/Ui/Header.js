import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.svg";

const Header = () => {
  const logoStyle = {
    height: "7rem",
  };
  const toolbarStyle = {};

  return (
    <AppBar position="static">
      <Toolbar disableGutters style={toolbarStyle}>
        <img style={logoStyle} alt="company logo" src={logo} />
        {/* <Typography variant="h3">Ace Development</Typography> */}
        <Tabs>
          <Tab label="Home" />
          <Tab label="Services" />
          <Tab label="The Revlution" />
          <Tab label="About us" />
          <Tab label="Contact us" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
