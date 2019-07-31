import React from "react"
import Layout from "../components/Layout"
import TeamstoreList from "../components/TeamstoreList"
import { Container } from "@material-ui/core"
import SEO from "../components/SEO"
import PageTitle from "../components/PageTitle"

const TeamstoresTemplate = ({ pageContext }) => {
  const teamstores = pageContext.shop.salesChannels.edges
  let langCode = pageContext.languages
  let urlPrefix = pageContext.urlPrefix.split("/")[0]

  return (
    <Layout pageContext={pageContext}>
      <SEO title="Teamstores" />
      <PageTitle title="Teamstores" />
      <Container maxWidth="lg">
        <TeamstoreList
          langCode={langCode}
          urlPrefix={urlPrefix}
          teamstores={teamstores}
        />
      </Container>
    </Layout>
  )
}

export default TeamstoresTemplate
