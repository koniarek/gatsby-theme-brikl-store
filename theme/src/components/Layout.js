import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "@material-ui/styles"
import { theme } from "./Theme"

const Layout = ({ children, pageContext }) => {
  let languages = pageContext.shop.languages
  let urlPrefix = pageContext.urlPrefix
    ? pageContext.urlPrefix.split("/")[0]
    : "en"
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Gatsby Theme</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap" rel="stylesheet"/>
      </Helmet>

      <div style={{ overflow: "hidden" }}>
        <Header languages={languages} defaultLanguage={urlPrefix} />
        <div style={{ minHeight: "90vh", overflowY: 'scroll' }}>{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Layout
