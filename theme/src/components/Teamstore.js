import React from "react"
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
} from "@material-ui/core"
import { getTextFromLanguage } from "../utils/utils"
import { Link } from "gatsby"

const Teamstore = ({ teamstore, urlPrefix, langCode }) => (
  <>
    <Grid style={{ marginBottom: 20 }} item xs={12} key={teamstore.id}>
      <Link
        to={
          `/${urlPrefix}/teamstore/` +
          getTextFromLanguage(teamstore.slugs, langCode)
        }
        style={{ textDecoration: "none" }}
      >
        <Card elevation={5} style={{ border: "0px solid transparent" }}>
          <CardActionArea>
            <img
              src={teamstore.logo}
              style={{
                height: 250,
                padding: "40px 20px 20px 20px ",
                width: "100%",
                objectFit: "contain",
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
                {getTextFromLanguage(teamstore.title.text, langCode)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  </>
)

export default Teamstore
