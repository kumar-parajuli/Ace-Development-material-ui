import React from "react";
import { makeStyles, useTheme } from "@mui/styles";
import { Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor:theme.palette.background.main,
  },
}));
export default function MobileApp() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
      <Button
        // sx={{ backgroundColor: (theme) => theme.palette.background.main }}
        variant="contained"
        className={classes.button}
      >
        Mobile App
      </Button>
    </div>
  );
}
