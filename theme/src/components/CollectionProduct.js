import React from "react"
import { Link } from "gatsby"
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
} from "@material-ui/core"
import { getTextFromLanguage } from "../utils/utils"

const CollectionProducts = ({ products, pageContext, urlPrefix, langCode }) => (
  <>
    <Grid spacing={2} justify="center" container style={{ padding: 40 }}>
      <Typography
        style={{
          color: "#a6026a",
          padding: "10px 10px 20px 0px",
        }}
        component="h2"
        variant="h3"
      >
        {getTextFromLanguage(pageContext.collection.title.text, langCode)}
      </Typography>
      <Grid
        container
        direction="row"
        style={{
          position: "absolute",
          width: "40%",
          alignSelf: "flex-end",
          borderBottom: "8px solid #a6026a",
          borderBottomWidth: "8px",
        }}
      />
    </Grid>
    <Grid
      justify="center"
      container
      spacing={3}
      style={{ padding: "12px 24px" }}
    >
      {products.map(productData => {
        let product = productData.product

        // console.log(product)

        return (
          <Grid item xs={10} sm={6} md={4} lg={3} xl={3} key={product.id}>
            <Link
              to={
                `${urlPrefix}/products/` +
                getTextFromLanguage(product.slugs, langCode)
              }
              style={{ textDecoration: "none" }}
            >
              <Card style={{ height: "100%" }}>
                <CardActionArea>
                  <img
                    src={product.media[0].image}
                    style={{
                      height: 200,
                      width: "100%",
                      objectFit: "contain",
                    }}
                    alt="Thumbnail"
                  />

                  <CardContent>
                    <Typography
                      style={{ padding: 5 }}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {getTextFromLanguage(product.title.text, langCode)}
                    </Typography>
                    <Typography
                      style={{ padding: 5 }}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {getTextFromLanguage(product.description.text, langCode)}
                    </Typography>
                    <Typography
                      style={{ padding: 5 }}
                      variant="h5"
                      component="h2"
                    >
                      ${product.price.value} {product.price.currency}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        )
      })}
    </Grid>
  </>
)

export default CollectionProducts