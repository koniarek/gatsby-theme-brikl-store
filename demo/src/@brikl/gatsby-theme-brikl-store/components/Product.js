import React from "react"
import Product from "@brikl/gatsby-theme-brikl-store/src/components/Product"
import { getTextFromLanguage } from "@brikl/gatsby-theme-brikl-store/src/utils/utils"
import { Link } from "gatsby"

const NewProduct = ({ product, langCode, urlPrefix }) => {
  return (
    <>
      {/* Uncomment to use default style */}
      {/* <Product product={product} langCode={langCode} urlPrefix={urlPrefix} /> */}
      <h1>product name: {getTextFromLanguage(product.title.text, langCode)}</h1>
      <h5>
        description: {getTextFromLanguage(product.description.text, langCode)}
      </h5>
      <h3>
        price: ${product.price.value} {product.price.currency}
      </h3>
      <Link
        to={
          `${urlPrefix}/products/` +
          getTextFromLanguage(product.slugs, langCode)
        }
      >
        Details
      </Link>
    </>
  )
}

export default NewProduct
