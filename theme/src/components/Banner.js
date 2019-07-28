import React from "react"
import { Grid } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import Particles from "./Particles"

const useStyles = makeStyles(theme =>
  createStyles({
    banner: {
      [theme.breakpoints.down("sm")]: {
        backgroundPosition: "0px 0px",
      },
    },
  })
)

const Banner = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.banner}
      style={{
        height: "70vh",
        position: "relative",
      }}
      justify={"center"}
      alignItems={"center"}
    >
      <Particles />
    </Grid>
  )
}

export default Banner
