import React from "react"
import { Grid, Typography, Button } from "@material-ui/core"
import { getTextFromLanguage } from "../utils/utils"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import CartIcon from "@material-ui/icons/ShoppingCart"

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      padding: "10px 20px 10px 0px",
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
  })
)

const ProductDetails = ({ product }) => {
  const classes = useStyles({})
  console.log(product)
  try {
    return (
      <Grid style={{ alignSelf: "center" }} container>
        <Grid className={classes.container} container direction="row">
          <Typography style={{ paddingTop: 40 }} variant="h4" color="secondary">
            {getTextFromLanguage(product.title.text, "en_UK")}
          </Typography>
        </Grid>
        <Grid className={classes.container} container direction="row">
          <Typography variant="body1">
            {getTextFromLanguage(product.description.text, "en_UK")}
          </Typography>
        </Grid>
        <Grid className={classes.container} container direction="row">
          <Typography variant="h5">
            {product.price.currency} ${product.price.value}
          </Typography>
        </Grid>
        <Grid
          style={{ marginBottom: 40 }}
          className={classes.container}
          container
          direction="row"
        >
          <Button
            variant="contained"
            color="secondary"
            style={{ color: "#ffffff", padding: "10px 25px" }}
          >
            Add to cart
            <CartIcon className={classes.rightIcon} />
          </Button>
        </Grid>
      </Grid>
    )
  } catch (error) {
    console.log("productDetail.error", error)
  }
}

export default ProductDetails
