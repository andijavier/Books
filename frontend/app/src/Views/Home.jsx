import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function to() {
    navigate({
      pathname: "/search",
      search: `?query=${query.split(" ").join("%20")}`,
    });
  }

  return (
    <>
      <Navbar />
      <div className="container" style={{ heigth: "100%" }}>
        <div className="mt-5 card shadow bg-body">
          <div className="card-body" style={{ padding: 30 }}>
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
                    margin: "1rem 0 0.5rem 0",
                  }}
                  placeholder="Title, author, publisher"
                  type="text"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <p className="card-text">Find the book you are looking here</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
