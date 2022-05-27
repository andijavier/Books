import React from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();
  const recomData = props.recomData;

  function toDetail() {
    navigate({ to: "/detail/" + recomData.id });
  }

  return (
    <>
      <div
        className="card m-1 btn"
        style={{ width: "20vw", backgroundColor: "#A35709" }}
        onClick={toDetail}
      >
        <img
          src={recomData.volumeInfo.imageLinks.thumbnail}
          className="card-img-top"
          alt="..."
          style={{ width: "100%", height: "15vh" }}
        />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "whitesmoke" }}>
            {recomData.volumeInfo.title}
          </h5>
          <h6 className="card-title" style={{ color: "whitesmoke" }}>
            {recomData.volumeInfo.authors
              ? recomData.volumeInfo.authors?.join(", ")
              : "Unknown"}
          </h6>
          <h6 className="card-title" style={{ color: "whitesmoke" }}>
            Published by : {recomData.volumeInfo.publisher}
          </h6>
        </div>
      </div>
    </>
  );
}

export default Card;
