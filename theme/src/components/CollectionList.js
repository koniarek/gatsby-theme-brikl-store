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
    <Grid container style={{ padding: "24px 24px 12px" }}>
      <Typography component="h2" variant="h5">
        Collections
      </Typography>
    </Grid>
    <Grid
      container
      spacing={2}
      style={{ padding: "12px 24px", marginBottom: 20 }}
    >
      {collections.map(collectionNode => {
        let collection = collectionNode.node

        return (
          <Grid item xs={6} sm={6} md={4} lg={3} xl={3} key={collection.id}>
            <Link
              to={"/en/" + getTextFromLanguage(collection.slugs, "en_UK")}
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
