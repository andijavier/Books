import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchRecentAsync,
  selectRecents,
  selectStatusRecent,
} from "../store/recent";
import Card from "../components/Card";
import CardMUI from "../components/CardMUI";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recent = useSelector(selectRecents);
  const statusRecent = useSelector(selectStatusRecent);
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(fetchRecentAsync());
  }, []);

  function to() {
    navigate({
      pathname: "/search",
      search: `?query=${query.split(" ").join("%20")}`,
    });
  }

  console.log(statusRecent);
  console.log(recent);

  return (
    <>
      <div className="p-3 ">
        <div className="my-3 card shadow bg-body">
          <div
            className="card-body"
            style={{ backgroundColor: "#F0E3CA", padding: 30 }}
          >
            <form onSubmit={to}>
              <h5 className="card-title">What book do you look for ?</h5>
              <div
                style={{
                  flexDirection: "column",
                  justifyItems: "space-around",
                }}
              >
                <input
                  style={{
                    borderRadius: 15,
                    width: "95%",
                    paddingInline: "1rem",
                  }}
                  placeholder="Title, author, publisher"
                  type="text"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <p className="card-text">Find the book you are looking here</p>
              <button
                className="btn"
                type="submit"
                style={{
                  backgroundColor: "#FF8303",
                  color: "whitesmoke",
                  marginLeft: "80%",
                  borderRadius: 30,
                  fontSize: 15,
                  width: "10vw",
                }}
              >
                SEARCH
              </button>
            </form>
          </div>
        </div>
        <div className="my-3" style={{ overflow: "hidden" }}>
          <h2>Recently Opened Books</h2>
          <div
            className="row"
            style={{
              overflowX: "auto",
              flexWrap: "nowrap",
            }}
          >
            {statusRecent ? (
              <h3>Loading...</h3>
            ) : (
              recent.map((data) => {
                return <CardMUI key={data.id} recomData={data} />;
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
