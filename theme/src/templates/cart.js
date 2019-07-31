import React from "react"
import Layout from "../components/Layout"
import { Grid, Typography, Container } from "@material-ui/core"
import CartProductList from "../components/CartProductList"
import SEO from "../components/SEO"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

const Cart = ({ pageContext }) => {
  let storage = null
  try {
    if (window !== undefined) {
      storage = window.localStorage.getItem("cart")
    }
  } catch (error) {
    console.log(error)
  }

  let cartItems = storage ? JSON.parse(storage) : ""

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
        <Grid item xs={12} style={{ marginBottom: 24 }}>
          <Typography variant="h3" align="center">
            Your cart
          </Typography>
        </Grid>

        <Container maxWidth="md">
          {cartItems.length > 0 ? (
            <Paper style={{ width: "100%" }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Thumbnail</TableCell>
                    <TableCell align="left">Product</TableCell>
                    <TableCell align="left">Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map(item => {
                    return (
                      <TableRow key={item.id}>
                        <TableCell align="right" style={{ width: 60 }}>
                          <img
                            src={item.thumbnail}
                            style={{
                              width: "100%",
                              objectFit: "contain",
                            }}
                            alt="Thumbnail"
                          />
                        </TableCell>
                        <TableCell align="left">{item.name}</TableCell>
                        <TableCell align="left">{item.qty}</TableCell>
                        <TableCell align="right">
                          ${item.price * item.qty} USD
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </Paper>
          ) : (
            <Grid container justify="center">
              <Typography variant="h5">Your cart is empty :(</Typography>
            </Grid>
          )}
        </Container>
      </Grid>
      <CartProductList />
    </Layout>
  )
}

export default Cart
