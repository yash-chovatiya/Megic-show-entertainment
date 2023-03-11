import React, { useState, useEffect } from "react";
import "./watchmovie.css";
import { useParams } from "react-router-dom";
import { homeData } from "../../dummyData";
import TopBar from "../topbar/Topbar";

const SinglePage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = homeData.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <>
      <TopBar />
      {item ? (
        <>
          <section className="singlePage">
            <div className="singleHeading">
              <h1>{item.name} </h1> <span> | {item.time} | </span>{" "}
              <span> HD </span>
            </div>
            <div className="container">
              <video src={item.video} controls></video>
              <div className="para">
                <h3>Date : {item.date}</h3>
                <p>{item.desc}</p>
              </div>
              <div className="cast">
                <h4>
                  <span>Starring </span>
                  {item.starring}
                </h4>
                <h4>
                  <span>Genres </span>
                  {item.genres}
                </h4>
                <h4>
                  <span>Tags </span>
                  {item.tags}
                </h4>
              </div>
            </div>
          </section>
        </>
      ) : (
        "no"
      )}
    </>
  );
};

export default SinglePage;
