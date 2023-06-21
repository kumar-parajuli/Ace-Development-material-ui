import React from "react";
import Lottie from "react-lottie";
import animationData from "../animations/landinganimation/data";
import { Button, Grid, Card, CardContent, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";
import CallToAction from "./Ui/CallToAction";

const LandingPage = () => {
  const buttonStyle = {
    backgroundColor: "#ff9800",
    color: "#ffflight",
    borderRadius: "50px",
    marginTop: "10px",
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
    marginTop: "10px",
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
    color: "#ff9800",
    fontWeight: 500,
    fontSize: "2rem",
  };

  //iso style
  const typographyStyle2 = {
    color: "#1565c0",
    marginLeft: "28rem",
    marginTop: "8rem",
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
  ///revolution card style///
  const revolutionCard = {
    border: 3,
    borderColor: "grey",
    position: "absolute",
    boxShadow: "10",
    borderRadius: "15px",
    padding: "10em",
    marginTop: "-13rem",
  };
  const revolutionStyle = {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  };
  const typographyStyle4 = {
    marginTop: "2rem",
    color: "#1565c0",
    fontFamily: "pacifico",
    fontWeight: 800,
    fontSize: "2.7rem",
  };

  //info style//
  const infoStyle = {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "80em",
    width: "85em%",
  };
  //about btn style//
  const aboutbtnStyle = {
    marginLeft: "5rem",
    color: "#fff",
    borderColor: "#fff",
    fontSize: "1.3rem",
    fontWeight: "1.8rem",
    marginTop: "0.5rem",
    textTransform: "none",
    borderRadius: "2rem",
  };

  const aboutStyle = {
    fontFamily: "pacifico",
    fontWeight: "bold",
    fontSize: "3em",
    alignItems: "center",
    marginLeft: "5rem",
    marginTop: "-6.5rem",
    color: "#fff",
  };

  //contact-style//
  const contactStyle = {
    fontFamily: "pacifico",
    fontWeight: "bold",
    fontSize: "3em",
    alignItems: "center",
    marginLeft: "60rem",
    marginTop: "10rem",
    color: "#fff",
  };
  //contactbns//
  const contactbtnStyle = {
    marginLeft: "49em",
    color: "#fff",
    borderColor: "#fff",
    fontSize: "1.3rem",

    fontWeight: "1.8rem",
    marginTop: "0.5rem",
    textTransform: "none",
    borderRadius: "2rem",
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
        <Grid item>
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
          </Grid>
        </Grid>
        <Grid item>
          {/*-----The Revolution Block-----*/}
          <Grid
            container
            style={{ height: "90em", marginTop: "4rem" }}
            alignItems="center"
            justifyContent="center"
          >
            <Card sx={{ borderColor: "grey.500" }} style={revolutionCard}>
              <CardContent>
                <Grid
                  container
                  direction="column"
                  style={{ textAlign: "center" }}
                >
                  <Grid item>
                    <Typography
                      style={typographyStyle4}
                      variant="h4"
                      gutterBottom
                    >
                      The Revolution
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography style={subStyle2} variant="body1">
                      Visionary insights coupled with cutting-edge technology is
                      a recipe for revolution.
                    </Typography>
                    <Button
                      style={buttonStyle2}
                      component={Link}
                      to="/revolution"
                      variant="outlined"
                    >
                      Learn More <ArrowForwardIcon />
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <div style={revolutionStyle} />
          </Grid>
        </Grid>
        <Grid item>
          {/*-----Information Block-----*/}
          <Grid
            container
            sx={{ height: "80em" }}
            alignItems="center"
            direction="row"
            style={infoStyle}
          >
            <Grid item container direction="row">
              <Grid item>
                <Grid container direction="column" sx={{ marginTop: "15rem" }}>
                  <Typography variant="h2" style={aboutStyle}>
                    About Us
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      marginLeft: "5rem",
                      color: "#fff",
                      fontWeight: "1.5rem",
                      fontSize: "1.5rem",
                    }}
                  >
                    Let's get personal.
                  </Typography>
                  <Grid item>
                    <Button
                      component={Link}
                      to="/about"
                      variant="outlined"
                      style={aboutbtnStyle}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ArrowForwardIcon width={10} height={10} fill="white" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container direction="column">
                  <Typography variant="h2" style={contactStyle}>
                    Contact Us
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      marginLeft: "66rem",
                      color: "#fff",
                      fontWeight: "1.5rem",
                      fontSize: "1.5rem",
                    }}
                  >
                    Say hello!{" "}
                    <span role="img" aria-label="waving hand">
                      👋🏻
                    </span>
                  </Typography>
                  <Grid item>
                    <Button
                      component={Link}
                      to="/about"
                      variant="outlined"
                      style={contactbtnStyle}
                    >
                      <span>Learn More</span>
                      <ArrowForwardIcon width={10} height={10} fill="white" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid items>
          <Grid>
            <CallToAction />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default LandingPage;
