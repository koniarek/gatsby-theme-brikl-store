import React from "react"
import Layout from "../components/layout"
import { Grid, Typography } from "@material-ui/core"
import CartProductList from "../components/cartproductlist"
import SEO from "../components/seo"

const Cart = ({ pageContext }) => {
  return (
    <Layout pageContext={pageContext}>
      <SEO title="Cart" />
      <Grid
        container
        style={{ padding: 20 }}
        alignContent="center"
        justify="center"
        direction="column"
        spacing={2}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography variant="h3">Cart</Typography>
        </Grid>
      </Grid>
      <CartProductList />
    </Layout>
  )
}

export default Cart
