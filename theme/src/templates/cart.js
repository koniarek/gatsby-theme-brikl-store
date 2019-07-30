import React from "react"
import Layout from "../components/Layout"
import { Grid, Typography, Container } from "@material-ui/core"
import CartProductList from "../components/CartProductList"
import SEO from "../components/SEO"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { getTextFromLanguage } from "../utils/utils"

const Cart = ({ pageContext }) => {
  let products = pageContext.shop.products.edges
  let langCode = pageContext.languages

  console.log(pageContext)

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
        <Grid item xs={12} style={{marginBottom: 24}}>
          <Typography variant="h3" align='center'>Your cart</Typography>
        </Grid>

        <Container maxWidth='md'>
{products.length > 0 ? (
        <Paper style={{width: '100%'}}>
      <Table size="small" >
        <TableHead>
          <TableRow>
            <TableCell align="center">Thumbnail</TableCell>
            <TableCell align="left">Product</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.splice(0,2).map(row => (
            <TableRow key={row.node.id}>
              <TableCell align="right" style={{width: 60}}>
              <img
                src={row.node.media[0].image}
                style={{
                  width: "100%",
                  objectFit: "contain",
                }}
                alt="Thumbnail"
              />
              </TableCell>
              <TableCell align="left" >
                {getTextFromLanguage(row.node.title.text, langCode)}
              </TableCell>
              <TableCell align="right" >
                ${row.node.price.value} {row.node.price.currency}
              </TableCell>
            </TableRow>
          ) )}
        </TableBody>
      </Table>
    </Paper>):  <span>fjkgjkdnj</span>}
  </Container>
      </Grid>
      <CartProductList />
    </Layout>
  )
}

export default Cart
