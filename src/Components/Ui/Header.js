import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  Button,
  MenuItem,
  Menu,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const logoStyle = {
    height: "7rem",
  };

  const logobtnStyle = {
    padding: "0",
  };
  const toolbarStyle = {
    backgroundColor: "#1565c0",
  };

  const tabsStyle = {
    marginLeft: "auto",
    backgroundColor: "#1565c0",
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
    color: "#ffflight",
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    fontFamily: "pacifico",
    fontSize: "1rem",
    textTransform: "none",
  };

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/revolution" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/about" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === "/estimate" && value !== 5) {
      setValue(5);
    }
  }, [value]);

  return (
    <AppBar position="static">
      <Toolbar disableGutters style={toolbarStyle}>
        <Button
          style={logobtnStyle}
          component={Link}
          to="/"
          onClick={() => setValue(0)}
        >
          <img style={logoStyle} alt="company logo" src={logo} />
        </Button>
        <Tabs
          style={tabsStyle}
          value={value}
          onChange={handleChange}
          indicatorColor="#1565c0"
        >
          <Tab style={tabStyle} component={Link} to="/" label="Home" />
          <Tab
            arial-owns={anchorEl ? "simple-mennu" : undefined}
            aria-haspopup={anchorEl ? "true" : undefined}
            style={tabStyle}
            component={Link}
            onClick={event => handleClick(event)}
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
        <Menu
          id="simple-menu"
          archorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Custom Software Development</MenuItem>
          <MenuItem onClick={handleClose}> Mobile App Development</MenuItem>
          <MenuItem onClick={handleClose}> Website Development</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
