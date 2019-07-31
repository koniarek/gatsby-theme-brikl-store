import React from "react"
import { Grid } from "@material-ui/core"
import Product from "./Product"

const CollectionProducts = ({ products, urlPrefix, langCode }) => (
  <>
    <Grid
      justify="center"
      container
      spacing={3}
      style={{ padding: "12px 24px" }}
    >
      {products.map(productData => {
        let product = productData.product

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

export default CollectionProducts
