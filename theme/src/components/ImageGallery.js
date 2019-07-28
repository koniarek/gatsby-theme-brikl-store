import React, { useState } from "react"
import { Grid } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    selectedImage: {
      height: "100%",
      width: "100%",
      objectFit: "contain",
      borderRadius: 7,
    },
    container: {
      border: "1px solid #d4d4d4",
      marginTop: 40,
      borderRadius: 7,
    },
    imageListContainer: {
      border: "1px solid #d4d4d4",
      margin: "20px 10px 20px 0px",
      borderRadius: 7,
      padding: 15,
    },
    imageListImage: {
      maxHeight: "100%",
      maxWidth: "100%",
      objectFit: "contain",
      cursor: "pointer",
    },
  })
)

const ImageGallery = ({ media }) => {
  const classes = useStyles({})
  let defaultMedia = media[0].image ? media[0].image : ""

  const [selectedMedia, setSelectedMedia] = useState(defaultMedia)

  return (
    <Grid container>
      <Grid container direction="row" className={classes.container}>
        <img
          src={selectedMedia}
          alt="Product"
          className={classes.selectedImage}
        />
      </Grid>
      {media.map(image => (
        <Grid key={image.id} item lg={3} className={classes.imageListContainer}>
          <img
            src={image.image}
            onClick={() => setSelectedMedia(image.image)}
            className={classes.imageListImage}
            alt="Product List"
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default ImageGallery
