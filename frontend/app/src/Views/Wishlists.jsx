import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Navbar from "../components/Navbar";
import CardMUI from "../components/CardMUI";
import {
  fetchWishlistsAsync,
  selectStatusWishlists,
  selectWishlists,
} from "../store/wishlists";

function Wishlists() {
  const dispatch = useDispatch();
  const books = useSelector(selectWishlists);
  const statusbooks = useSelector(selectStatusWishlists);

  useEffect(() => {
    dispatch(fetchWishlistsAsync());
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Box sx={{ width: "100%", minHeight: 829 }}>
          <Masonry columns={3} spacing={2}>
            {statusbooks ? (
              <h3 style={{ color: "white" }}>Loading...</h3>
            ) : (
              books?.map((data) => {
                return <CardMUI key={data.id} recomData={data} />;
              })
            )}
          </Masonry>
        </Box>
      </div>
    </>
  );
}

export default Wishlists;
