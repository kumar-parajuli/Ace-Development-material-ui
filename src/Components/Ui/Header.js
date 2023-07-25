import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Button,
  MenuItem,
  Menu,
  IconButton,
  ListItemText,
  List,
  ListItem,
  Paper,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { makeStyles, useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { paperClasses } from "@mui/material/Paper";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    marginLeft: "-0.5em",

    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  logoContainer: {
    // padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  // tabContainer: {
  //   marginLeft: "auto",
  // },
  // navTab: {
  //    ...theme.typography.tab,
  //   minWidth: "10px",
  //   marginRight: "25px",
  // },
  button: {
    // ...theme.typography.estimate,
    // marginLeft: "50px",
    // marginRight: "25px",
    // height: "3em",
    // width: "9em",
    // borderRadius: "50px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    // backgroundColor:theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    // ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  // drawerIcon: {
  //   height:"50px",
  //   width:"50px",
  // },

  drawerIconContainer: {
    // marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  // drawer: {
  //   backgroundColor: theme.palette.common.blue,
  // },
  drawerItem: {
    ...theme.typography.tab,
    opacity: 0.7,
  },
  // drawerItemEstimate: {
  //   backgroundColor: theme.palette.common.orange,
  // },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  // const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  // const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, newvalue) => {
    props.setValue(newvalue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemsClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  //for mapmenu//
  const menuOptions = [
    { name: "services", Link: "/services", activeIndex: 1, selectedIndex: 0 },
    {
      name: "Custom Software Development",
      Link: "/Customsoftware",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "Mobile App Development",
      Link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Website Development",
      Link: "/websites",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  //map for drawer routes//
  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (event) => handleClick(event),
    },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];

  useEffect(() => {
    //clean up code using map method//

    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case "/estimate":
          props.setValue(5);
          break;
        default:
          break;
      }
    });
  }, [props.value, menuOptions, props.selectedIndex, routes, props]);

  //   if (window.location.pathname === "/" && value !== 0) {
  //     setValue(0);
  //   } else if (window.location.pathname === "/services" && value !== 1) {
  //     setValue(1);
  //   } else if (window.location.pathname === "/revolution" && value !== 2) {
  //     setValue(2);
  //   } else if (window.location.pathname === "/about" && value !== 3) {
  //     setValue(3);
  //   } else if (window.location.pathname === "/contact" && value !== 4) {
  //     setValue(4);
  //   } else if (window.location.pathname === "/estimate" && value !== 5) {
  //     setValue(5);
  //   }
  //   switch (window.location.pathname) {
  //     case "/":
  //       if (value !== 0) {
  //         setValue(0);
  //       }
  //       break;
  //     case "/services":
  //       if (value !== 1) {
  //         setValue(1);
  //         setSelectedIndex(0);
  //       }
  //       break;
  //     case "/customsoftware":
  //       if (value !== 1) {
  //         setValue(1);
  //         setSelectedIndex(1);
  //       }
  //       break;
  //     case "/mobileapps":
  //       if (value !== 1) {
  //         setValue(1);
  //         setSelectedIndex(2);
  //       }
  //       break;
  //     case "/websites":
  //       if (value !== 1) {
  //         setValue(1);
  //         setSelectedIndex(3);
  //       }
  //       break;
  //     case "/revolution":
  //       if (value !== 2) {
  //         setValue(2);
  //       }
  //       break;

  //     case "/about":
  //       if (value !== 3) {
  //         setValue(3);
  //       }
  //       break;

  //     case "/contact":
  //       if (value !== 4) {
  //         setValue(4);
  //       }
  //       break;

  //     case "/estimate":
  //       if (value !== 5) {
  //         setValue(5);
  //       }
  //       break;

  //     default:
  //       break;
  //   }
  // }, [value]);

  const tabs = (
    <React.Fragment>
      <Tabs
        // className={classes.tabContainer}
        sx={{ marginLeft: "auto" }}
        value={props.value}
        onChange={handleChange}
        indicatorColor="primary"
      >
        {/* using map method for tabs route */}
        {routes.map((route, index) => (
          <Tab
            key={`$(route)${index}`}
            className={classes.navTab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
            sx={{
              ...theme.typography.tab,
              minWidth: "10px",
              marginRight: "25px",
            }}
          />
        ))}

        {/* <Tab className={classes.tab} component={Link} to="/" label="Home" />
        <Tab
          arial-owns={anchorEl ? "simple-mennu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          className={classes.tab}
          component={Link}
          onMouseOver={(event) => handleClick(event)}
          to="/services"
          label="Services"
        />


        <Tab
          className={classes.tab}
          component={Link}
          label="The Revolution"
          to="/revolution"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/about"
          label="About us"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/contact"
          label="Contact us"
        /> */}
      </Tabs>
      <Button
        component={Link}
        variant="contained"
        to="/estimate"
        color="secondary"
        className={classes.button}
        sx={{
          ...theme.typography.estimate,
          marginLeft: "50px",
          marginRight: "25px",
          height: "45px",

          borderRadius: "50px",
        }}
        onClick={() => props.setValue(5)}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        PaperProps={{
          sx: { backgroundColor: theme.palette.common.blue },
        }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {/* <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to="services"
                classes={{ root: classes.menuItems }}
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
                classes={{ root: classes.menuItems }}
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
                classes={{ root: classes.menuItems }}
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
                classes={{ root: classes.menuItems }}
              >
                Website Development
              </MenuItem> */}

        {/* ********* */}
        {/* //using map filter// */}

        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            to={option.Link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemsClick(event, i);
              props.setValue(1);
              handleClose();
            }}
            selected={i === props.selectedIndex && props.value === 1}
            sx={{ ...theme.typography.tab }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  //drawer//
  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
        //next method//
        PaperProps={{
          sx: { backgroundColor: theme.palette.common.blue },
        }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              divider
              key={`$(route)${route.activeIndex}`}
              button
              component={Link}
              to={route.link}
              selected={props.value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                setOpenDrawer(false);
                props.setValue(route.activeIndex);
              }}
            >
              <ListItemText
                // classesName={classes.drawerItem}
                sx={{ ...theme.typography.tab, opacity: 0.7 }}
                disableTypography
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          {/* <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            divider
            button
            component={Link}
            to="/"
            selected={value === 0}
          >
            <ListItemText
              className={
                value === 0
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            divider
            button
            component={Link}
            to="/services"
            selected={value === 1}
          >
            <ListItemText
              className={
                value === 1
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Services
            </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            divider
            button
            component={Link}
            to="/revolution"
            selected={value === 2}
          >
            <ListItemText
              className={
                value === 2
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              The Revolution
            </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            divider
            button
            component={Link}
            to="/about"
            selected={value === 3}
          >
            <ListItemText
              className={
                value === 3
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              About Us
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
            divider
            button
            component={Link}
            to="/contact"
            selected={value === 4}
          >
            <ListItemText
              className={
                value === 4
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Contact
            </ListItemText>
          </ListItem> */}
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(5);
            }}
            divider
            button
            component={Link}
            // className={[classes.drawerItemEstimate]}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            sx={{ backgroundColor: theme.palette.common.orange }}
            to="/estimate"
            selected={props.value === 5}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        sx={{ marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon sx={{ height: "50px", width: "50px" }} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar
          position="fixed"
          className={classes.appbar}
          sx={{ zIndex: theme.zIndex.modal + 1 }}
        >
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              disableRipple
              sx={{ padding: 0 }}
              className={classes.logoContainer}
              onClick={() => props.setValue(0)}
            >
              <img alt="company logo" className={classes.logo} src={logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
