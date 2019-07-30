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

const ProductList = ({ products, langCode, urlPrefix }) => {
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
          Products
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
        justify="flex-start"
        container
        spacing={3}
        style={{ padding: "12px 24px" }}
      >
        {products.map(productNode => {
          let product = productNode.node

          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={product.id}>
              <Link
                to={
                  `${urlPrefix}/products/` +
                  getTextFromLanguage(product.slugs, langCode)
                }
                style={{ textDecoration: "none" }}
              >
                <Card
                  style={{
                    height: "100%",
                  }}
                >
                  <CardActionArea
                    style={{
                      height: "100%",
                    }}
                  >
                    <Grid
                      container
                      alignItems="space-between"
                      style={{ height: "100%", paddingBottom: 16 }}
                    >
                      <Grid item xs={12}>
                        <img
                          src={product.media[0].image}
                          style={{
                            height: 200,
                            width: "100%",
                            objectFit: "contain",
                          }}
                          alt="Thumbnail"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          style={{ padding: "8px 16px" }}
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          {getTextFromLanguage(product.title.text, langCode)}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          style={{ padding: "8px 16px" }}
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {getTextFromLanguage(
                            product.description.text,
                            langCode
                          )}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid
                          container
                          alignItems="flex-end"
                          style={{ height: "100%" }}
                        >
                          <Typography
                            style={{ padding: "8px 16px" }}
                            variant="h5"
                            component="h2"
                          >
                            ${product.price.value} {product.price.currency}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
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

export default ProductList
