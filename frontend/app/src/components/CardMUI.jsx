import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  addWishlistsAsync,
  fetchWishlistsAsync,
  selectWishlists,
} from "../store/wishlists";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardMUI(props) {
  const dispatch = useDispatch();
  const wishlists = useSelector(selectWishlists);
  const recomData = props.recomData;
  const [expanded, setExpanded] = React.useState(false);

  useEffect(() => {
    dispatch(fetchWishlistsAsync());
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const isAlreadyExist = () => {
    let exist = false;
    wishlists.forEach((el) => {
      if (recomData.id === el.id) {
        exist = true;
      }
    });
    return exist;
  };

  const addToWishLists = () => {
    dispatch(
      addWishlistsAsync({ id: recomData.id, volumeInfo: recomData.volumeInfo })
    );
    dispatch(fetchWishlistsAsync());
  };

  return (
    <Card className="card m-1 btn" sx={{ maxWidth: 345 }}>
      <CardHeader
        title={recomData.volumeInfo.title}
        subheader={recomData.volumeInfo.publisher}
      />
      <CardMedia
        component="img"
        height="full"
        image={recomData.volumeInfo.imageLinks.thumbnail}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {recomData.volumeInfo.authors
            ? recomData.volumeInfo.authors?.join(", ")
            : "Not Available"}
        </Typography>
        <Rating
          name="read-only"
          value={
            recomData.volumeInfo.averageRating
              ? recomData.volumeInfo.averageRating
              : 0
          }
          readOnly
        />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={addToWishLists} aria-label="add to favorites">
          <FavoriteIcon style={{ color: isAlreadyExist() ? "red" : "gray" }} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            {recomData.volumeInfo.description
              ? recomData.volumeInfo.description
              : "Not Available"}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
