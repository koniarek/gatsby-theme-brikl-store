import React from "react"
import { Grid } from "@material-ui/core"
import Product from "./Product"

const TeamstoreProducts = ({
  products,
  urlPrefix,
  langCode,
  teamstoreName,
}) => (
  <>
    <Grid
      justify="center"
      container
      spacing={3}
      style={{ padding: "12px 24px" }}
    >
      {products.edges.map(productData => {
        let product = productData.node.product

        return (
          <Product
            product={product}
            urlPrefix={urlPrefix}
            langCode={langCode}
            isTeamstore={true}
            teamstoreName={teamstoreName}
          />
        )
      })}
    </Grid>
  </>
)

export default TeamstoreProducts
