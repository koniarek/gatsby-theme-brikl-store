import React from "react"
import { Link } from "gatsby"
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Paper,
} from "@material-ui/core"
import { getTextFromLanguage } from "../utils/utils"

const CollectionProducts = ({ products, pageContext }) => (
  <>
    <Grid justify="center" style={{ padding: "24px 24px 12px" }} container>
      <Paper
        style={{
          width: "80% ",
          justifyContent: "center",
          textAlign: "center",
          padding: 20,
          backgroundColor: "#940159",
        }}
        elevation={1}
      >
        <Typography style={{ color: "#ffffff" }} component="h2" variant="h2">
          {getTextFromLanguage(pageContext.collection.title.text, "en_UK")}
        </Typography>
      </Paper>
    </Grid>
    <Grid
      justify="center"
      container
      spacing={3}
      style={{ padding: "12px 24px" }}
    >
      {products.map(productData => {
        let product = productData.product

        console.log(product)

        return (
          <Grid item xs={10} sm={6} md={4} lg={3} xl={3} key={product.id}>
            <Link
              to={"/en/" + getTextFromLanguage(product.slugs, "en_UK")}
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
                      {getTextFromLanguage(product.title.text, "en_UK")}
                    </Typography>
                    <Typography
                      style={{ padding: 5 }}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {getTextFromLanguage(product.description.text, "en_UK")}
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
