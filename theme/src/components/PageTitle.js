import React from "react"
import { Typography, Grid } from "@material-ui/core"

const PageTitle = ({ title }) => (
  <Grid spacing={2} justify="center" container style={{ padding: 40 }}>
    <Typography
      style={{
        color: "#a6026a",
        padding: "10px 10px 20px 0px",
      }}
      component="h2"
      variant="h3"
    >
      {title}
    </Typography>
    <Grid
      container
      direction="row"
      style={{
        position: "absolute",
        width: "40%",
        alignSelf: "flex-end",
        borderBottom: "8px solid #a6026a",
        borderBottomWidth: "8px",
      }}
    />
  </Grid>
)

export default PageTitle
