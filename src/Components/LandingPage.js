import React from "react";
import Lottie from "react-lottie";
import animationData from "../animations/landinganimation/data";
import { Button, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";

const LandingPage = () => {
  const buttonStyle = {
    backgroundColor: "#ff9800",
    color: "#ffflight",
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    fontFamily: "pacifico",
    fontSize: "1rem",
    textTransform: "none",
    height: "50px",
    width: "145px",
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
  };
  const typographyStyle = {
    marginTop: "0.5em",
    color: "#1565c0",
    fontFamily: "Raleway",
    fontWeight: 800,
    fontSize: "2.7rem",
    marginLeft: "1rem",
  };
  const animation = {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",

    marginLeft: "10%",
  };

  const subStyle = {
    marginTop: "0.5rem",
    marginBottom: "1em",
    fontSize: "1.25rem",
    fontWeight: 300,
    marginLeft: "4rem",
  };
  const subStyle1 = {
    marginTop: "1rem",
    marginBottom: "1em",
    fontSize: "1.25rem",
    fontWeight: 300,
    marginLeft: "4rem",
  };
  const iconStyle = {
    marginTop: "-25rem",
    marginLeft: "40em",
    alignItems: "center",
  };
  const typographyStyle1 = {
    marginTop: "-5rem",
    color: "#1565c0",
    fontFamily: "Raleway",
    fontWeight: 800,
    fontSize: "2.7rem",
    marginLeft: "4rem",
  };
  const spanStyle = {
    fontFamily: "pacifico",
    Color: "#ff9800",
  };

  //iso style
  const typographyStyle2 = {
    color: "#1565c0",
    marginLeft: "28rem",
    marginTop: "8rem",
  };
  const subStyle2 = {
    marginBottom: "1em",
    color: "black",
    marginTop: "0.5rem",
    fontSize: "1.25rem",
    fontWeight: 300,
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
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Grid item>
              <Typography style={typographyStyle} align="center" variant="h2">
                Bringing west cost Technology <br /> to the Midwest
              </Typography>
              <Grid container>
                <Grid item>
                  <Button
                    style={buttonStyle}
                    component={Link}
                    variant="contained"
                    to="/estimate"
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    style={buttonStyle1}
                    component={Link}
                    to="/revolution"
                    variant="outlined"
                  >
                    Learn More <ArrowForwardIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={animation}>
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </Grid>
          </Grid>
        </Grid>

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
            <span style={spanStyle}>celebration.</span>
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
        {/* ...............// iOS/Android App Development................... */}
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Typography style={typographyStyle2} variant="h4" >
              iOS/Android App Development
              <Typography style={subStyle2} variant="body1">
                Extend Functionality. Extend Access. Increase Engagement.
              </Typography>
              <Typography style={subStyle2} variant="body1">
                Integrate your web experience or create a standalone app
                <span>with either mobile platform.</span>
              </Typography>
              <Button  style={buttonStyle2} component={Link} to="/revolution" variant="outlined">
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
        </Grid>
      </Grid>
    </>
  );
};

export default LandingPage;
