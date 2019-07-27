import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { AppBar, Toolbar, IconButton, Grid } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import LogoBrikL from "../images/LogoBrikL.svg"
import Drawer from "@material-ui/core/Drawer"
import { Link } from "gatsby"

const useStyles = makeStyles(theme =>
  createStyles({
    grow: {
      flexGrow: 1,
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
      color: "#FFF",
      textDecoration: "none",
      padding: 20,
    },
    sectionDesktop: {
      display: "none",
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

const Header = () => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
  })

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
    <Grid container direction="column">
      <Link>Home</Link>
      <Link>Products</Link>
      <Link>Collections</Link>
      <Link>Teamstores</Link>
      <Link>Cart</Link>
    </Grid>
  )

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="primary">
        <Toolbar style={{ padding: 8 }}>
          <img
            src={LogoBrikL}
            alt="BrikL Logo"
            style={{ padding: 10, height: 45, objectFit: "contain" }}
          />

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link className={classes.link}>Home</Link>
            <Link className={classes.link}>Products</Link>
            <Link className={classes.link}>Collections</Link>
            <Link className={classes.link}>Teamstores</Link>
            <Link className={classes.link}>Cart</Link>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton onClick={toggleDrawer("top", true)}>
              <MenuIcon style={{ color: "#FFF" }} />
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
