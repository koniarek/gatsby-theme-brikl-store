import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "@material-ui/styles"
import { theme } from "./Theme"
import "normalize.css"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Helmet>
      <title>Gatsby Theme</title>
    </Helmet>
    <Header />
    <div style={{ minHeight: "90vh" }}>{children}</div>
    <Footer />
  </ThemeProvider>
)

export default Layout
