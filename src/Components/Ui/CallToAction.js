import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";

const CallToAction = () => {
  //button style//
  const btnStyle = {
    color: "#1565c0",
    marginTop: "10px",
    borderRadius: "100px",
    fontSize: "1rem",
    textTransform: "none",
    height: "50px",
    width: "145px",
    marginLeft: "4rem",
  };
  const btnStyle1 = {
    backgroundColor: "#ff9800",
    color: "#ffflight",
    borderRadius: "50px",
    marginTop: "-25rem",

    marginRight: "4em",
    fontFamily: "pacifico",
    fontSize: "1.8rem",
    fontWeight: "900",
    textTransform: "none",
    height: "3em",
    width: "8em",
  };
  const typStyle = {
    color: "#1565c0",
    fontFamily: "pacifico",
    fontWeight: "bold",
    fontSize: "5rem",
    marginTop: "23rem",
    marginLeft: "4rem",
  };

  const bgStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    // [theme.breakpoints.down("md")]: {
    //   backgroundImage: `url(${mobileBackground})`,
    //   backgroundAttachment: "inherit",
    // },
  };
  return (
    <Grid container direction="row" style={bgStyle}>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography style={typStyle}>
              Simple Software. <br />
              Revolutionary Results.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginLeft: "4rem",
                fontSize: "2rem",
                fontWeight: "200",
                color: "#fff",
              }}
            >
              Take advantage of the 21st Century.
            </Typography>
            <Button
              style={btnStyle}
              component={Link}
              to="/revolution"
              variant="outlined"
            >
              Learn More <ArrowForwardIcon />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        marginTop="-20rem"
      >
        <Grid item>
          <Button
            style={btnStyle1}
            component={Link}
            variant="contained"
            to="/estimate"
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
