import React from "react"
import Product from "./Product"
import { Grid } from "@material-ui/core"

const ProductList = ({ products, langCode, urlPrefix }) => {
  return (
    <Grid
      style={{ padding: 20 }}
      container
      justify="center"
      direction="row"
      spacing={3}
    >
      {products.map(productNode => {
        let product = productNode.node
        return (
          <Product
            product={product}
            langCode={langCode}
            urlPrefix={urlPrefix}
          />
        )
      })}
    </Grid>
  )
}

export default ProductList
