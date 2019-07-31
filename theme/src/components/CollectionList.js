import React from "react"
import { Grid } from "@material-ui/core"
import Collection from "./Collection"

const CollectionList = ({ collections, urlPrefix, langCode }) => {
  return (
    <>
      <Grid spacing={2} justify="center" container style={{ padding: 40 }}>
        {collections.map(collectionNode => {
          let collection = collectionNode.node

          return (
            <Collection
              collection={collection}
              urlPrefix={urlPrefix}
              langCode={langCode}
            />
          )
        })}
      </Grid>
    </>
  )
}

export default CollectionList
