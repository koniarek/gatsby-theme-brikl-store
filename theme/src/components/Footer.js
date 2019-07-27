import React from "react"
import { Grid, Container } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => createStyles({}))

const Footer = () => {
  const classes = useStyles({})

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
