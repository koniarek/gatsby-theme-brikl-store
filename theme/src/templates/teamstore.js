import React from "react"
import Layout from "../components/Layout"
import TeamstoreProducts from "../components/TeamstoreProducts"
import { getTextFromLanguage } from "../utils/utils"
import SEO from "../components/SEO"
import TeamstoreLogo from "../components/TeamstoreLogo"
import TeamstoreIntroduction from "../components/TeamstoreIntroduction"

const TeamstoreTemplate = ({ pageContext }) => {
  const teamstore = pageContext.teamstore
  let langCode = pageContext.languages
  let urlPrefix = pageContext.urlPrefix.split("/")[0]
  console.log(teamstore)
  try {
    return (
      <Layout pageContext={pageContext}>
        <SEO title={`${getTextFromLanguage(teamstore.title.text, langCode)}`} />
        <TeamstoreLogo logo={teamstore.logo} />
        <TeamstoreIntroduction
          introduction={getTextFromLanguage(
            teamstore.introductionText.text,
            langCode
          )}
        />
        <TeamstoreProducts
          pageContext={pageContext}
          langCode={langCode}
          urlPrefix={urlPrefix}
          products={teamstore.products}
          teamstoreName={getTextFromLanguage(teamstore.slugs, langCode)}
        />
      </Layout>
    )
  } catch (error) {
    console.log(error)
  }
}

export default TeamstoreTemplate
