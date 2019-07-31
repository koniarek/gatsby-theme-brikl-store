import React from "react"
import Banner from "./Banner"

const BannerContainer = ({ urlPrefix }) => (
  <Banner
    urlPrefix={urlPrefix}
    title="DESIGNED WITH TEAMS IN MIND"
    subTitle="GET 20% OFF FROM YOUR FIRST PURCHASE"
    button="SHOP NOW"
    backgroundColor=""
    particles={true}
  />
)

export default BannerContainer
