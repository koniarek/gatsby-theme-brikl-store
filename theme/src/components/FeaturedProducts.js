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

const FeaturedProducts = ({ products, urlPrefix, langCode }) => {
  return (
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
          Featured
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
        spacing={2}
        style={{ padding: "12px 24px" }}
      >
        {products.slice(0, 3).map(productNode => {
          let product = productNode.node

          return (
            <Grid item xs={10} sm={6} md={4} lg={4} xl={3} key={product.id}>
              <Link
                to={
                  `/${urlPrefix}/products/` +
                  getTextFromLanguage(product.slugs, langCode)
                }
                style={{ textDecoration: "none" }}
              >
                <Card
                  style={{
                    height: "100%",
                    padding: "0px 5px 0px 5px",
                    margin: "0px 5px 0px 5px",
                  }}
                >
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
                        {getTextFromLanguage(
                          product.description.text,
                          langCode
                        )}
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
}

export default FeaturedProducts
