import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const ProductTemplate = ({ pageContext }) => (
  <Layout>
    <Link to="/">Back</Link>
    <p>This is the single product page</p>
  </Layout>
)

export default ProductTemplate
