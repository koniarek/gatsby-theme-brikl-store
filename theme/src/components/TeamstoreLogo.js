import React from "react"
import { Grid } from "@material-ui/core"

const TeamstoreLogo = ({ logo }) => (
  <Grid container justify="center">
    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <img
        style={{
          height: 200,
          width: "100%",
          objectFit: "contain",
        }}
        src={logo}
        alt="logo"
      />
    </Grid>
  </Grid>
)

export default TeamstoreLogo
