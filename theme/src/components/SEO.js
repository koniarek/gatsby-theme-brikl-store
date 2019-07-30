import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: { defaultTitle, titleTemplate, defaultDescription },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
      }
      return (
        <>
          <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
          </Helmet>
        </>
      )
    }}
  />
)
export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
      }
    }
  }
`

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}
SEO.defaultProps = {
  title: null,
  description: null,
}
