import React from "react"
import { Grid, Typography } from "@material-ui/core"

const TeamstoreIntroduction = ({ introduction }) => (
  <Grid style={{ paddingBottom: 40 }} container justify="center">
    <Typography variant="h4">{introduction}</Typography>
  </Grid>
)

export default TeamstoreIntroduction
