import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "@material-ui/styles"
import { theme } from "./Theme"

const Layout = ({ children, pageContext }) => {
  let languages = pageContext.shop.languages
  let urlPrefix = pageContext.urlPrefix.split("/")[0]
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Gatsby Theme</title>
      </Helmet>

      <>
        <Header languages={languages} defaultLanguage={urlPrefix} />
        <div style={{ minHeight: "90vh" }}>{children}</div>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default Layout
