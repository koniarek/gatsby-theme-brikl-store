import React from "react"
import { Test } from "./Footer"
import Header from "gatsby-theme-brikl-store/src/components/Header"

export default ({ children, pageContext }) => {
  let languages = pageContext.shop.languages
  let urlPrefix = pageContext.urlPrefix
    ? pageContext.urlPrefix.split("/")[0]
    : "en"
  console.log(pageContext)
  return (
    <>
      <Header languages={languages} defaultLanguage={urlPrefix} />
      {children}
      <Test />
    </>
  )
}
