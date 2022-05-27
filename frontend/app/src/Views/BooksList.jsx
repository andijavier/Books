import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBooksAsync,
  selectBooks,
  selectStatusBooks,
} from "../store/books";
import Card from "../components/Card";

function BookList() {
  const query = useLocation().search.split("=")[1];
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const statusbooks = useSelector(selectStatusBooks);

  useEffect(() => {
    dispatch(fetchBooksAsync(query));
  }, [query]);

  console.log(query);
  console.log(books);

  // if (hotelErr) {
  //   return <h4>{hotelErr.message}</h4>;
  // }

  return (
    <>
      <div>
        <h3>Search Result {query.split("%20").join(" ")}</h3>
        <div
          className="row"
          style={{ maxHeight: "70vh", overflowY: "scroll", flexWrap: "wrap" }}
        >
          {statusbooks ? (
            <h3>Loading...</h3>
          ) : (
            books?.map((data) => {
              return <Card key={data.id} recomData={data} />;
            })
          )}
        </div>
      </div>
    </>
  );
}

export default BookList;
