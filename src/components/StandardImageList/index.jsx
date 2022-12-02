import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";

export default function StandardImageList() {
  return (
    <>
    <Typography align="center" variant="h5">📸Galeria de Imagenes📷</Typography>
      <ImageList
        sx={{
          height: 1,
          width: 1,
          maxHeight: { xs: 1, md: 1 },
          maxWidth: { xs: 1, md: 1 },
        }}
        cols={3}
        rowHeight={164}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              style={{borderRadius:7}}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      {/* <Grid container>
        <Grid item sx={12} md={6}>
          <Box component="img"
        </Grid>
        <Grid item sx={12} md={6}>
          asd
        </Grid>
        <Grid item sx={12} md={4}>
          asd
        </Grid>
        <Grid item sx={12} md={8}>
          asd
        </Grid>
      </Grid> */}
    </>
  );
}

const itemData = [
  {
    img: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/OMMU2C3O4JDOBFFQ456PXNF3EU.jpg",
    title: "Stadium",
  },
  {
    img: "https://images.adsttc.com/media/images/5674/1563/e58e/ce41/7600/0021/newsletter/rm.jpg?1450448222",
    title: "Burger",
  },
  {
    img: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2016/01/07/14521592226941.jpg",
    title: "Camera",
  },
  {
    img: "https://cloudfront-eu-central-1.images.arcpublishing.com/larazon/PJV7JNU54JAALMRHYRF3BMDALU.JPG",
    title: "Coffee",
  },
  {
    img: "https://www.publico.es/files/article_main/uploads/2015/11/07/563e4637a3cbb.jpg",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://cdn.resfu.com/media/img_news/afp_en_09d0b1428cf86b25f2ab486aec03d23864fe6b51.jpg?size=1000x&lossy=1",
    title: "Basketball",
  },
  {
    img: "https://c8.alamy.com/comp/M5M6P0/cristiano-ronaldo-real-madrid-celebrates-his-goal-which-made-it-1-M5M6P0.jpg",
    title: "Fern",
  },
  {
    img: "https://ep00.epimg.net/elpais/imagenes/2018/07/06/album/1530871946_866906_1530874894_album_normal.jpg",
    title: "Mushrooms",
  },

];
