import { Button, Grid, Link } from "@mui/material";
import React from "react";
import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#1565c0",
    // height: "15rem",
    width: "100%",
    position: "relative",
  };
  const imgStyle = {
    width: "22em",
    verticalAlignment: "bottom",
  };
  const mainGrid = {
    position: "absolute",
    color: "#fff",
    marginLeft: "15rem",
    marginTop: "1rem",
  };
  const gridItemStyle = {
    margin: "3em",
    marginLeft: "8rem",
  };
  const itemLk = {
    color: "#fff",
    fontFamily: "Arial",
    fontSize: "0.90rem",
    fontWeight: "bold",
  };
  const itemStyle = {
    color: "#fff",
    fontFamily: "Arial",
    fontSize: "0.90rem",
    fontWeight: "bold",
    marginTop: "3rem",
    marginleft: "2rem",
  };
  const buttonStyle = {
    position: "absolute",
    marginTop: "9rem",
    marginLeft: "77rem",
    spacing: "8",
  };
  const gridStyle = {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
  };
  const iconStyle = {
    height: "4em",
    width: "3em",
    // marginLeft: "78rem",
  };
  const gridItem = {
    margin: "3em",
  };

  return (
    <footer style={footerStyle}>
      <Grid container display="flex" justifycontent="center" style={mainGrid}>
        <Grid item style={itemStyle} component={Link} to="/">
          Home
        </Grid>

        <Grid item style={gridItemStyle}>
          <Grid container direction="column" spacing={2}>
            <Grid item style={itemLink} component={Link} to="/services">
              Services
            </Grid>
            <Grid item style={itemLk}>
              Custom Software Development
            </Grid>
            <Grid item style={itemLk}>
              Mobile App Development
            </Grid>
            <Grid item style={itemLk}>
              Website Development
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={gridItemStyle}>
          <Grid container direction="column" spacing={2}>
            <Grid item style={itemLk}>
              The Revolution
            </Grid>
            <Grid item style={itemLk}>
              Vision
            </Grid>
            <Grid item style={itemLk}>
              Technology
            </Grid>
            <Grid item style={itemLk}>
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={gridItemStyle}>
          <Grid container direction="column" spacing={2}>
            <Grid item style={itemLk} component={Link} to="/about">
              About Us
            </Grid>
            <Grid item style={itemLk}>
              History
            </Grid>
            <Grid item style={itemLk}>
              Team
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={gridItemStyle}>
          <Grid container direction="column" spacing={2}>
            <Grid item>Contact Us</Grid>
          </Grid>
        </Grid>
      </Grid>
      <img
        style={imgStyle}
        alt="black docorative slash"
        src={footerAdornment}
      />
      {/* <Button justify="flex-end" spacing={2} style={buttonStyle}>
        <img
          src={facebook}
          rel="noopener noreferrer"
          target="_blank"
          component={Link}
          to="/"
        />
        <img
          src={twitter}
          rel="noopener noreferrer"
          target="_blank"
          component={Link}
          to="/"
        />
        <img
          src={instagram}
          rel="noopener noreferrer"
          target="_blank"
          component={Link}
          to="https://www.facebook.com/"
        />
      </Button> */}
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        spacing={2}
        style={gridStyle}
      >
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
          spacing={2}
        >
          <img alt="facebook logo" src={facebook} style={iconStyle} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="twitter logo" src={twitter} style={iconStyle} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="instagram logo" src={instagram} style={iconStyle} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
