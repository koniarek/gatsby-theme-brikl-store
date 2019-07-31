import React from "react"
import Collection from "@brikl/gatsby-theme-brikl-store/src/components/Collection"
import { getTextFromLanguage } from "@brikl/gatsby-theme-brikl-store/src/utils/utils"
import { Link } from "gatsby"
import { Grid } from "@material-ui/core"

const NewCollection = ({ collection, langCode, urlPrefix }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={collection.id}>
      {/* Uncomment to use default style */}
      {/* <Collection collection={collection} langCode={langCode} urlPrefix={urlPrefix} /> */}
      <h1>{getTextFromLanguage(collection.title.text, langCode)}</h1>
      <Link
        to={
          `${urlPrefix}/collections/` +
          getTextFromLanguage(collection.slugs, langCode)
        }
      >
        Go to collection
      </Link>
    </Grid>
  )
}

export default NewCollection
