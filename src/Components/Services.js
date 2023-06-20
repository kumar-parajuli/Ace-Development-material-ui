import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";

const Services = () => {
  const typographyStyle2 = {
    color: "#1565c0",
    marginLeft: "28rem",
    marginTop: "7rem",
    fontFamily: "Raleway",
    fontWeight: 800,
    fontSize: "2.7rem",
  };
  const subStyle2 = {
    marginBottom: "1em",
    color: "black",
    marginTop: "0.5rem",
    fontSize: "1.5rem",
    fontWeight: 400,
  };
  const buttonStyle2 = {
    color: "#1565c0",
    backgroundColor: "#fff",
    borderRadius: "100px",
    fontSize: "1rem",
    textTransform: "none",
    height: "50px",
    width: "145px",
  };

  const iconStyle2 = {
    marginTop: "14rem",
  };

  ///website style....//
  const typographyStyle3 = {
    marginTop: "6rem",
    color: "#1565c0",
    fontFamily: "pacifico",
    fontWeight: 800,
    fontSize: "2.7rem",
    marginLeft: "4rem",
  };

  const iconStyle3 = {
    marginTop: "10rem",
    marginLeft: "3rem",
  };

  const subStyle = {
    marginTop: "0.5rem",
    marginBottom: "1em",
    fontSize: "1.5rem",
    fontWeight: 400,
    marginLeft: "4rem",
  };
  const subStyle1 = {
    marginTop: "1rem",
    marginBottom: "1em",
    fontSize: "1.5rem",
    fontWeight: 400,
    marginLeft: "4rem",
  };
  const iconStyle = {
    marginTop: "-25rem",
    marginLeft: "47em",
    alignItems: "center",
  };
  const typographyStyle1 = {
    marginTop: "6rem",
    color: "#1565c0",
    fontFamily: "Raleway",
    fontWeight: 800,
    fontSize: "2.7rem",
    marginLeft: "4rem",
  };
  const buttonStyle1 = {
    color: "#1565c0",
    backgroundColor: "#fff",
    borderRadius: "100px",
    fontSize: "1rem",
    textTransform: "none",
    height: "50px",
    width: "145px",
    marginLeft: "4rem",
    marginTop: "10px",
  };

  return (
    <Grid item>
      <Typography
        variant="h2"
        color=" #1565c0"
        marginTop="4rem"
        fontFamily="Raleway"
        fontWeight="800"
        fontSize="3.7rem"
        marginLeft="4rem"
      >
        Services
      </Typography>
      {/* ...............// iOS/Android App Development................... */}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Typography style={typographyStyle2} variant="h4">
          iOS/Android App Development
          <Typography style={subStyle2} variant="body1">
            Extend Functionality. Extend Access. Increase Engagement.
          </Typography>
          <Typography style={subStyle2} variant="body1">
            Integrate your web experience or create a standalone app
            <span>with either mobile platform.</span>
          </Typography>
          <Button
            style={buttonStyle2}
            component={Link}
            to="/revolution"
            variant="outlined"
          >
            Learn More <ArrowForwardIcon />
          </Button>
        </Typography>
        <Grid item>
          <img
            style={iconStyle2}
            justifyContent="flex-end"
            alignItems="center"
            alt="mobile phone icon"
            src={mobileAppsIcon}
          />
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Websites Block-----*/}
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          //  alignItems="center"
        >
          <Typography style={typographyStyle3} variant="h4">
            Website Development
            <Typography style={subStyle2} variant="body1">
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography style={subStyle2} variant="body1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              style={buttonStyle2}
              component={Link}
              to="/revolution"
              variant="outlined"
            >
              Learn More <ArrowForwardIcon />
            </Button>
          </Typography>
          <Grid item>
            <img
              style={iconStyle3}
              justifyContent="flex-start"
              alignItems="center"
              alt="website icon"
              src={websitesIcon}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          marginRight="4rem"
          alignItems="center"
        >
          {/* .........................//Custom Software Development....................................... */}
          <Grid item>
            <Typography style={typographyStyle1} variant="h4">
              Custom Software Development
            </Typography>
            <Typography style={subStyle} variant="body1">
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography style={subStyle1} variant="body1">
              Complete digital solutions, from investigation to{" "}
              <span
                style={{
                  fontFamily: "pacifico",
                  color: "#ff9800",
                  fontWeight: 500,
                  fontSize: "2rem",
                }}
              >
                celebration.
              </span>
            </Typography>
            <Button
              style={buttonStyle1}
              component={Link}
              to="/revolution"
              variant="outlined"
            >
              Learn More <ArrowForwardIcon />
            </Button>
            <Grid item>
              <img
                style={iconStyle}
                alignItems="center"
                alt="custom software icon"
                src={customSoftwareIcon}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
