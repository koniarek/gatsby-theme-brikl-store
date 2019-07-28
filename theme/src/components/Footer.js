import React from "react"
import { Grid, Container } from "@material-ui/core"

const Footer = () => {
  return (
    <Grid
      container
      style={{
        backgroundColor: "#635e69",
        minHeight: 200,
      }}
      justify={"center"}
      alignItems={"center"}
    >
      <Container maxWidth="lg">
        <Grid justify="center" container>
          <Grid item xl={12}>
            <h1>footer </h1>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  )
}

export default Footer
