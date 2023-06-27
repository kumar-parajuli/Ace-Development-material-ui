import { Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { makeStyles, useTheme } from "@mui/styles";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import lightbulb from "../assets/bulb.svg";
import stopwatch from "../assets/stopwatch.svg";
import cash from "../assets/cash.svg";
import documentsAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data";
const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "5em",
  },
  mainContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingTop: "2em",
    paddingBottom: "10em",
  },
  itemContainer: {
    maxWidth: "40em",
  },
}));
export default function CustomSoftware(props) {
  const classes = useStyles();

  //lottie enemation//
  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item container direction="row">
        <Grid
          item
          className={classes.arrowContainer}
          style={{ marginRight: "1em", marginLeft: "-3.5em" }}
        >
          <IconButton
            style={{ backgroundColor: "transparent" }}
            component={Link}
            to="/services"
            onClick={() => props.setSelectedIndex(0)}
          >
            <img src={backArrow} alt="Back to servive page" />
          </IconButton>
        </Grid>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2">Custom Software Development</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Whether we’re replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography ariant="body1" paragraph>
              Using regular commercial software leaves you with a lot of stuff
              you don’t need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography ariant="body1" paragraph>
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography ariant="body1" paragraph>
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.arrowContainer}>
          <IconButton
            style={{ backgroundColor: "transparent" }}
            component={Link}
            to="/mobileapps"
            onClick={() => props.setSelectedIndex(2)}
          >
            <img
              src={forwardArrow}
              alt="Forward to ios/Android app Development page"
            />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        style={{ marginTop: "15em", marginBottm: "20em" }}
      >
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt="lightbulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          style={{ maxWidth: "40em" }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt="stopwatch" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          style={{ maxWidth: "40em" }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="cash" />
          </Grid>
        </Grid>
        <Grid item container direction="row">
          <Grid
            item
            container
            className={classes.itemContainer}
            style={{ marginTop: "15em", marginBottm: "20em" }}
          >
            <Grid item container direction="column" md>
              <Grid item>
                <Typography variant="h4">Digital Document & Data</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  Reduce Errors. Reduce Waste. Reduce Costs.
                </Typography>
                <Typography variant="body1" paragraph>
                  Billions are spent annually on the purchasing, printing, and
                  distribution of paper. On top of the massive environmental
                  impact this has, it causes harm to your bottom line as well
                </Typography>
                <Typography variant="body1" paragraph>
                  By utilizing digital forms and documents you can remove these
                  obsolete expenses, accelerate your
                </Typography>
                <Typography variant="body1" paragraph>
                  communication, and help the Earth.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md>
              <Lottie
                options={documentsOptions}
                style={{ maxHeight: "325", maxWidth: "275", minHeight: "275" }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            className={classes.itemContainer}
            style={{ marginTop: "15em", marginBottm: "20em" }}
          >
            <Grid item md>
              <Lottie
                options={scaleOptions}
                style={{ maxHeight: "260", maxWidth: "280" }}
              />
            </Grid>
            <Grid item container direction="column" md>
              <Grid item>
                <Typography variant="h4">Scale</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  Whether you’re a large brand, just getting started, or taking
                  off right now, our application architecture ensures pain-free
                  growth and reliability.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
