import React, { useState } from "react"
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

const ProductDetails = ({ product, langCode }) => {
  const [cartItems, setCartItems] = useState([])
  const [qty, setQty] = useState(1)

  const addToCart = item => {
    let items = cartItems
    if (window.localStorage.getItem("cart")) {
      items = JSON.parse(window.localStorage.getItem("cart"))
    }
    let existing = items.find(i => i.id === item.id)
    if (existing) {
      existing.qty = item.qty
      existing.name = item.name
    } else {
      items.push(item)
      window.localStorage.setItem("cart", JSON.stringify(items))
    }
  }

  const classes = useStyles({})
  try {
    return (
      <Grid style={{ alignSelf: "center" }} container>
        <Grid className={classes.container} container direction="row">
          <Typography style={{ paddingTop: 40 }} variant="h4" color="secondary">
            {getTextFromLanguage(product.title.text, langCode)}
          </Typography>
        </Grid>
        <Grid className={classes.container} container direction="row">
          <Typography variant="body1">
            {getTextFromLanguage(product.description.text, langCode)}
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
          <select
            value={qty}
            onChange={e => setQty(e.target.value)}
            aria-label="quantity"
          >
            <option value={1} label="1" />
            <option value={2} label="2" />
            <option value={3} label="3" />
            <option value={4} label="4" />
          </select>
          <Button
            variant="contained"
            aria-label="Add to cart"
            color="secondary"
            style={{ color: "#ffffff", padding: "10px 25px" }}
            onClick={() =>
              addToCart({
                id: product.id,
                name: getTextFromLanguage(product.title.text, langCode),
                price: product.price.value,
                qty: qty,
                thumbnail: product.media[0].image,
                currency: product.price.currency,
              })
            }
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
