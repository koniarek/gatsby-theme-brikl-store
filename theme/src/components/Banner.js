import React from "react"
import { Grid } from "@material-ui/core"
import BannerImage from "../images/BannerImage.jpg"
import { createStyles, makeStyles } from "@material-ui/core/styles"

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
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundOrigin: "border-box",
        height: "70vh",
        position: "relative",
      }}
      justify={"center"}
      alignItems={"center"}
    />
  )
}

export default Banner
