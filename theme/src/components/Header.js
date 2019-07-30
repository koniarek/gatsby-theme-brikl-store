import React, { useState } from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { AppBar, Toolbar, IconButton, Grid } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import CartIcon from "@material-ui/icons/ShoppingCart"
import BriklBlack from "../images/BrikLBlack.png"
import Drawer from "@material-ui/core/Drawer"
import { Link } from "gatsby"
import LangSwitch from "./langswitch"

const useStyles = makeStyles(theme =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    link: {
      color: "#a6026a",
      textDecoration: "none",
      padding: 20,
      fontWeight: 400,
      fontFamily: "Arial",
    },
    sectionDesktop: {
      display: "none",
      alignItems: "center",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  })
)

const Header = ({ languages, defaultLanguage }) => {
  const classes = useStyles()
  const [state, setState] = useState({
    top: false,
  })

  const [lang, setLang] = useState(defaultLanguage.split("_")[0])

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const fullList = side => (
    <Grid
      style={{ textAlign: "center" }}
      container
      justify="center"
      direction="column"
    >
      <Link
        style={{ borderBottom: "1px solid #d4d4d4" }}
        to={`${lang}/`}
        className={classes.link}
        aria-label="Home"
      >
        Home
      </Link>
      <Link
        style={{ borderBottom: "1px solid #d4d4d4" }}
        to={`${lang}/products`}
        className={classes.link}
        aria-label="Products"
      >
        Products
      </Link>
      <Link
        style={{ borderBottom: "1px solid #d4d4d4" }}
        to={`${lang}/collections`}
        className={classes.link}
        aria-label="Collections"
      >
        Collections
      </Link>
      {/* <Link>Teamstores</Link> */}
      <Link aria-label="Cart" to={`${lang}/cart`} className={classes.link}>
        Cart
      </Link>
    </Grid>
  )

  return (
    <div className={classes.grow}>
      <AppBar elevation={0} position="static" color="primary">
        <Toolbar style={{ padding: 8 }}>
          <Link to={`${lang}/`}>
            <img
              src={BriklBlack}
              alt="BrikL Logo"
              style={{
                padding: "10px 10px 10px 25px",
                height: 60,
                objectFit: "contain",
              }}
            />
          </Link>

          <div className={classes.grow} />
          <Grid container justify="flex-end" className={classes.sectionDesktop}>
            <Link aria-label="Home" to={`${lang}/`} className={classes.link}>
              Home
            </Link>
            <Link
              aria-label="Products"
              to={`${lang}/products`}
              className={classes.link}
            >
              Products
            </Link>
            <Link
              aria-label="Collections"
              to={`${lang}/collections`}
              className={classes.link}
            >
              Collections
            </Link>
            {/* <Link className={classes.link}>Teamstores</Link> */}
            <LangSwitch
              selectedLanguage={lang}
              languages={languages}
              setLanguage={setLang}
            />
            <Link
              aria-label="Cart"
              to={`${lang}/cart`}
              className={classes.link}
            >
              <IconButton aria-label="Cart">
                <CartIcon style={{ color: "#a6026a" }} />
              </IconButton>
            </Link>
          </Grid>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="Expand menu"
              onClick={toggleDrawer("top", true)}
            >
              <MenuIcon style={{ color: "#a6026a" }} />
            </IconButton>
          </div>
          <Drawer
            anchor="top"
            open={state.top}
            onClose={toggleDrawer("top", false)}
          >
            {fullList("top")}
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
