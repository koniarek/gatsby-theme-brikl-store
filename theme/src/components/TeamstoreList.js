import React from "react"
import { Grid } from "@material-ui/core"
import Teamstore from "./Teamstore"

const TeamstoreList = ({ teamstores, urlPrefix, langCode }) => {
  return (
    <>
      <Grid
        spacing={2}
        justify="center"
        direction="column"
        alignItems="center"
        container
        style={{ padding: 40 }}
      >
        {teamstores.map(teamstoreNode => {
          let teamstore = teamstoreNode.node

          return (
            <Teamstore
              teamstore={teamstore}
              urlPrefix={urlPrefix}
              langCode={langCode}
            />
          )
        })}
      </Grid>
    </>
  )
}

export default TeamstoreList
