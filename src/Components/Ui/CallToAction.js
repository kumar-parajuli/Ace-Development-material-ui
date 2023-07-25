import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { makeStyles, useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";
import ButtonArrow from "./ButtonArrow";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: "80",
    width: "205",
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginLeft: "2em",
    marginRight: "5em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },

    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

export default function CallToAction(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      alignItems="center"
      justifyContent={matchesSm ? "center" : "space-between"}
      direction={matchesSm ? "column" : "row"}
      className={classes.background}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSm ? 0 : "5em",
          textAlign: matchesSm ? "center" : "inherit",
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software. <br />
              Revolutionary Results.
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: "1.5rem",
              }}
            >
              Take advantage of the 21st Century.
            </Typography>
            <Grid
              container
              item
              justifyContent={matchesSm ? "center" : undefined}
            >
              <Button
                // className={classes.learnButton}
                sx={{
                  ...theme.typography.learnButton,
                  fontSize: "0.7rem",
                  height: 35,
                  padding: 5,
                  [theme.breakpoints.down("sm")]: {
                    marginBottom: "2em",
                  },
                }}
                component={Link}
                to="/revolution"
                variant="outlined"
                onClick={() => props.setValue(2)}
              >
                <span style={{ marginRight: "5" }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Button
          component={Link}
          variant="contained"
          to="/estimate"
          // className={classes.estimateButton}
          onClick={() => props.setValue(5)}
          sx={{
            ...theme.typography.estimate,
            borderRadius: 50,
            height: "80",
            width: "205",
            backgroundColor: theme.palette.common.orange,
            fontSize: "1.5rem",
            marginLeft: "2em",
            marginRight: "5em",
            "&:hover": {
              backgroundColor: theme.palette.secondary.light,
            },

            [theme.breakpoints.down("sm")]: {
              marginLeft: 0,
              marginRight: 0,
            },
          }}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
}
