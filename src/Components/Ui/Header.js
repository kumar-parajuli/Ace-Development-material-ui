import { AppBar, Tab, Tabs, Toolbar, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const logoStyle = {
    height: "7rem",
  };
  const toolbarStyle = {
    backgroundColor: "#1565c0",
  };

  const tabsStyle = {
    marginLeft: "auto",
  };
  const tabStyle = {
    fontFamily: "Raleway",
    textTransform: "none",
    fontWeight: "600",
    fontSize: "1rem",
    color: "#fff",
    minWidth: "10",
    marginLeft: "25px",
  };
  const buttonStyle = {
    backgroundColor: "#ff9800",
    color: "#fff",
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    fontFamily: "pacifico",
    fontSize: "1rem",
    textTransform: "none",
  };

  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
    setValue(value);
  };

  return (
    <AppBar position="static">
      <Toolbar disableGutters style={toolbarStyle}>
        <img style={logoStyle} alt="company logo" src={logo} />
        <Tabs
          style={tabsStyle}
          value={value}
          onChange={handleChange}
          indicatorColor="#1565c0"
        >
          <Tab style={tabStyle} component={Link} to="/" label="Home" />
          <Tab
            style={tabStyle}
            component={Link}
            to="/services"
            label="Services"
          />
          <Tab
            style={tabStyle}
            component={Link}
            label="The Revolution"
            to="/revolution"
          />
          <Tab style={tabStyle} component={Link} to="/about" label="About us" />
          <Tab
            style={tabStyle}
            component={Link}
            label="Contact us"
            to="/contact"
          />
        </Tabs>
        <Button
          style={buttonStyle}
          component={Link}
          variant="contained"
          to="/estimate"
        >
          Free Estimate
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
