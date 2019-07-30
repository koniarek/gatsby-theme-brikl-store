import React from "react"
import { Link } from "gatsby"
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
} from "@material-ui/core"
import { getTextFromLanguage } from "../utils/utils"

const CollectionList = ({ collections }) => (
  <>
    <Grid spacing={2} justify="center" container style={{ padding: 40 }}>
      <Typography
        style={{
          color: "#a6026a",
          padding: "10px 10px 20px 0px",
        }}
        component="h2"
        variant="h3"
      >
        Collections
      </Typography>
      <Grid
        container
        direction="row"
        style={{
          position: "absolute",
          width: "40%",
          alignSelf: "flex-end",
          borderBottom: "8px solid #a6026a",
          borderBottomWidth: "8px",
        }}
      />
    </Grid>
    <Grid
      container
      spacing={2}
      justify="center"
      style={{ padding: "12px 24px", marginBottom: 20 }}
    >
      {collections.map(collectionNode => {
        let collection = collectionNode.node

        return (
          <Grid item xs={6} sm={6} md={4} lg={3} xl={3} key={collection.id}>
            <Link
              to={
                "/en/collections/" +
                getTextFromLanguage(collection.slugs, "en_UK")
              }
              style={{ textDecoration: "none" }}
            >
              <Card elevation={0} style={{ border: "0px solid transparent" }}>
                <CardActionArea>
                  <img
                    src={collection.thumbnail}
                    style={{
                      height: 250,
                      width: "100%",
                      objectFit: "cover",
                      borderBottomLeftRadius: 7,
                      borderBottomRightRadius: 7,
                    }}
                    alt="Thumbnail"
                  />

                  <CardContent>
                    <Typography
                      align="center"
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {getTextFromLanguage(collection.title.text, "en_UK")}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        )
      })}
    </Grid>
  </>
)

export default CollectionList
