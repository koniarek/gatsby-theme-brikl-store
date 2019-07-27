import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => createStyles({}))

const HeroImage = () => {
  const classes = useStyles({})

  return (
    <Grid item xs={12} sm={4} md={4}>
      <Grid
        container
        justify={"center"}
        alignItems={"center"}
        direction="column"
        style={{ padding: 32 }}
      >
        <img
          src={
            "https://cdn.dribbble.com/users/1128531/screenshots/4961572/cover.jpg"
          }
          alt="bro"
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
        />
        <Typography
          component={"h1"}
          variant={"h5"}
          style={{
            padding: 32,
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#000",
            lineHeight: "46px",
            textTransform: "uppercase",
          }}
        >
          Step
        </Typography>
      </Grid>
    </Grid>
  )
}

export default HeroImage
