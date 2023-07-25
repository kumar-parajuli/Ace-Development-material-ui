import React from "react";
import Lottie from "react-lottie";
import animationData from "../animations/landinganimation/data";
import { Button, Grid, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { makeStyles, useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import ButtonArrow from "../Components/Ui/ButtonArrow";

import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";
import CallToAction from "./Ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: "50px",

    height: "45px",
    width: "145px",
    marginRight: "40px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: "45px",
    width: "145px",
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: "35px",
    padding: "5px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",

    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));
export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid
      container
      direction="column"
      sx={{
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
          marginTop: "3em",
        },
        [theme.breakpoints.down("xs")]: {
          marginTop: "2em",
        },
      }}
      // className={classes.mainContainer}
    >
      <Grid item>
        {/*-----Hero Block-----*/}
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid
            sm
            item
            // className={classes.heroTextContainer}
            sx={{
              minWidth: "21.5em",
              marginLeft: "1em",
              [theme.breakpoints.down("xs")]: {
                marginLeft: 0,
              },
            }}
          >
            <Typography variant="h2" align="center">
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid
              container
              spacing="2em"
              justifyContent="center"
              // className={classes.buttonContainer}
              sx={{ marginTop: "1em" }}
            >
              <Grid item>
                <Button
                  component={Link}
                  to="/estimate"
                  variant="contained"
                  // className={classes.estimateButton}
                  sx={{
                    ...theme.typography.estimate,
                    backgroundColor: theme.palette.common.orange,
                    borderRadius: "50px",

                    height: "45px",
                    width: "145px",
                    marginRight: "40px",
                    "&:hover": {
                      backgroundColor: theme.palette.secondary.light,
                    },
                  }}
                  color="secondary"
                  onClick={() => props.setValue(5)}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  to="/revolution"
                  sx={{
                    ...theme.typography.learnButton,
                    fontSize: "0.9rem",
                    height: "45px",
                    width: "145px",
                  }}
                  // className={classes.learnButtonHero}
                  variant="outlined"
                  onClick={() => props.setValue(2)}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            sm
            item
            // className={classes.animation}
            sx={{
              maxWidth: "50em",
              minWidth: "21em",
              marginTop: "2em",
              marginLeft: "10%",
              [theme.breakpoints.down("sm")]: {
                maxWidth: "30em",
              },
            }}
          >
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Custom Software Block-----*/}
        <Grid
          container
          direction="row"
          justifyContent={matchesSM ? "center" : undefined}
          // className={classes.serviceContainer}
          sx={{
            marginTop: "12em",
            [theme.breakpoints.down("sm")]: {
              padding: 25,
            },
          }}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography
              variant="subtitle1"
              // className={classes.subtitle}
              sx={{ marginBottom: "1em" }}
            >
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span
                //  className={classes.specialText}
                sx={{
                  fontFamily: "Pacifico",

                  color: theme.palette.common.orange,
                }}
              >
                celebration.
              </span>
            </Typography>
            <Button
              component={Link}
              to="/customsoftware"
              variant="outlined"
              // className={classes.learnButton}
              sx={{
                ...theme.typography.learnButton,
                fontSize: "0.7rem",
                height: "35px",
                padding: "5px",
                [theme.breakpoints.down("sm")]: {
                  marginBottom: "2em",
                },
              }}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              // className={classes.icon}
              sx={{
                marginLeft: "2em",
                [theme.breakpoints.down("xs")]: {
                  marginLeft: 0,
                },
              }}
              alt="custom software icon"
              src={customSoftwareIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----iOS/Android Block-----*/}
        <Grid
          container
          direction="row"
          justifyContent={matchesSM ? "center" : "flex-end"}
          // className={classes.serviceContainer}
          sx={{
            marginTop: "12em",
            [theme.breakpoints.down("sm")]: {
              padding: 25,
            },
          }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography
              variant="subtitle1"
              // className={classes.subtitle}
              sx={{ marginBottom: "1em" }}
            >
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />}with either mobile platform.
            </Typography>
            <Button
              component={Link}
              to="/mobileapps"
              variant="outlined"
              // className={classes.learnButton}
              sx={{
                ...theme.typography.learnButton,
                fontSize: "0.7rem",
                height: "35px",
                padding: "5px",
                [theme.breakpoints.down("sm")]: {
                  marginBottom: "2em",
                },
              }}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              // className={classes.icon}
              sx={{
                marginLeft: "2em",
                [theme.breakpoints.down("xs")]: {
                  marginLeft: 0,
                },
              }}
              alt="mobile phone icon"
              src={mobileAppsIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {" "}
        {/*-----Websites Block-----*/}
        <Grid
          container
          direction="row"
          justifyContent={matchesSM ? "center" : undefined}
          // className={classes.serviceContainer}
          sx={{
            marginTop: "12em",
            [theme.breakpoints.down("sm")]: {
              padding: 25,
            },
          }}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography
              variant="subtitle1"
              // className={classes.subtitle}
              sx={{ marginBottom: "1em" }}
            >
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              component={Link}
              to="/websites"
              variant="outlined"
              // className={classes.learnButton}
              sx={{
                ...theme.typography.learnButton,
                fontSize: "0.7rem",
                height: "35px",
                padding: "5px",
                [theme.breakpoints.down("sm")]: {
                  marginBottom: "2em",
                },
              }}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(3);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              // className={classes.icon}
              sx={{
                marginLeft: "2em",
                [theme.breakpoints.down("xs")]: {
                  marginLeft: 0,
                },
              }}
              alt="website icon"
              src={websitesIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----The Revolution Block-----*/}
        <Grid
          container
          style={{ height: "100em", marginTop: "12em" }}
          alignItems="center"
          justifyContent="center"
        >
          <Card
            //  className={classes.revolutionCard}
            sx={{
              position: "absolute",
              boxShadow: theme.shadows[10],
              borderRadius: 15,
              padding: "10em",
              [theme.breakpoints.down("sm")]: {
                paddingTop: "8em",
                paddingBottom: "8em",
                paddingLeft: 0,
                paddingRight: 0,
                borderRadius: 0,
                width: "100%",
              },
            }}
          >
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution.
                  </Typography>
                  <Button
                    component={Link}
                    to="/revolution"
                    // className={classes.learnButtonHero}

                    sx={{
                      ...theme.typography.learnButton,
                      fontSize: "0.9rem",
                      height: "45px",
                      width: "145px",
                    }}
                    variant="outlined"
                    onClick={() => props.setValue(2)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div
            sx={{
              backgroundImage: `url(${revolutionBackground})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
            }}
            // className={classes.revolutionBackground}
          />
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Information Block-----*/}
        <Grid
          container
          style={{ height: "80em" }}
          alignItems="center"
          direction="row"
          // className={classes.infoBackground}
          sx={{
            backgroundImage: `url(${infoBackground})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100%",
            width: "100%",
          }}
        >
          <Grid
            item
            container
            style={{
              textAlign: matchesXS ? "center" : "inherit",
            }}
            direction={matchesXS ? "column" : "row"}
          >
            <Grid
              item
              sm
              style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em" }}
            >
              <Grid
                container
                style={{ marginBottom: matchesXS ? "10em" : 0 }}
                direction="column"
              >
                <Typography variant="h2" style={{ color: "white" }}>
                  About Us
                </Typography>
                <Typography variant="subtitle2">Let's get personal.</Typography>
                <Grid item>
                  <Button
                    component={Link}
                    to="/about"
                    variant="outlined"
                    style={{ color: "white", borderColor: "white" }}
                    // className={classes.learnButton}
                    sx={{
                      ...theme.typography.learnButton,
                      fontSize: "0.7rem",
                      height: "35px",
                      padding: "5px",
                      [theme.breakpoints.down("sm")]: {
                        marginBottom: "2em",
                      },
                    }}
                    onClick={() => props.setValue(3)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                textAlign: matchesXS ? "center" : "right",
              }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">
                  Say hello!{" "}
                  <span role="img" aria-label="waving hand">
                    👋🏻
                  </span>
                </Typography>
                <Grid item>
                  <Button
                    component={Link}
                    to="/contact"
                    variant="outlined"
                    style={{ color: "white", borderColor: "white" }}
                    // className={classes.learnButton}
                    sx={{
                      ...theme.typography.learnButton,
                      fontSize: "0.7rem",
                      height: "35px",
                      padding: "5px",
                      [theme.breakpoints.down("sm")]: {
                        marginBottom: "2em",
                      },
                    }}
                    onClick={() => props.setValue(4)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Call To Action Block-----*/}
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
