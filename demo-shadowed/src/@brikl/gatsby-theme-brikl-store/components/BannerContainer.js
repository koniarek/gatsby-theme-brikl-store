import React from "react"
import Banner from "./Banner"

const BannerContainer = ({ urlPrefix }) => (
  <Banner
    urlPrefix={urlPrefix}
    title="Title"
    subTitle="Subtitle"
    button="let's goooo"
    backgroundColor={"#d4d4d4"}
    particles={false}
  />
)

export default BannerContainer
