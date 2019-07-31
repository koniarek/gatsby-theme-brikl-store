import React from "react"
import { Grid } from "@material-ui/core"
import Product from "./Product"

const FeaturedProducts = ({ products, urlPrefix, langCode }) => {
  return (
    <>
      <Grid
        justify="center"
        container
        spacing={3}
        style={{ padding: "12px 24px" }}
      >
        {products.slice(0, 3).map(productNode => {
          let product = productNode.node

          return (
            <Product
              product={product}
              urlPrefix={urlPrefix}
              langCode={langCode}
            />
          )
        })}
      </Grid>
    </>
  )
}

export default FeaturedProducts
