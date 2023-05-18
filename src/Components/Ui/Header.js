import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  Button,
  MenuItem,
  Menu,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

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
    // opacity: "0.7",
    // "&:hover": {
    //   opacity: "1",
    // },
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
  const paperStyle = {
    backgroundColor: "#1565c0",
    color: "#fff",
    borderRadius: "1px",
    height: "10rem",
  };
  const MenuStyle = {
    opacity: "0.7",
    "&:hover": {
      opacity: "1",
    },
  };

  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleMenuItemsClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  const menuOption = [
    { name: "services", Link: "/services" },
    { name: "Custom Software Development", Link: "/Customsoftware" },
    { name: "Mobile App Development", Link: "/mobileapps" },
    { name: "Website Development", Link: "/websites" },
  ];

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
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/services":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case "/customsoftware":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case "/mobileapps":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case "/websites":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case "/revolution":
        if (value !== 2) {
          setValue(2);
        }
        break;

      case "/about":
        if (value !== 3) {
          setValue(3);
        }
        break;

      case "/contact":
        if (value !== 4) {
          setValue(4);
        }
        break;

      case "/estimate":
        if (value !== 5) {
          setValue(5);
        }
        break;

      default:
        break;
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
            onMouseOver={(event) => handleClick(event)}
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
          // style={menuStyle}
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose }}
        >
          {/* <MenuItem
            onClick={() => {
              handleClose();
              setValue(1);
            }}
            component={Link}
            to="services"
          >
            Services
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              setValue(1);
            }}
            component={Link}
            to="/Custom Software Development"
          >
            Custom Software Development
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              setValue(1);
            }}
            component={Link}
            to="/Mobile App Development"
          >
            Mobile App Development
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              setValue(1);
            }}
            component={Link}
            to="/Website Development"
          >
            Website Development
          </MenuItem> */}

          {/* ********* */}
          {/* //using map filter// */}

          {menuOption.map((option, i) => (
            <MenuItem
              key={option}
              component={Link}
              to={option.Link}
              onClick={(event) => {
                handleMenuItemsClick(event, i);
                setValue(1);
                handleClose();
              }}
              selected={i === selectedIndex && value === 1}
            >
              {option.name}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
