import React from "react"
import Product from "./Product"

const ProductList = ({ products, langCode, urlPrefix }) => {
  return products.map(productNode => {
    let product = productNode.node
    return (
      <Product product={product} langCode={langCode} urlPrefix={urlPrefix} />
    )
  })
}

export default ProductList
