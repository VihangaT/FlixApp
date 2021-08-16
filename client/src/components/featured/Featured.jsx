import { PlayArrow, InfoOutlined } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Featured.scss";

export default function Featured({ type }) {
  const [content, setContent] = useState({});
  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDk1ODEzNWJiYTAyMjYwNDA2ZjYwOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyODk1MDYxMCwiZXhwIjoxNjI5MzgyNjEwfQ.8Vmwb54RhkaH04vhQ8JPGGS6zuAtpdCdP-mARyu_lvk",
            // +
            // JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        console.log("featured:" + res.data[0]
        );
        setContent(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomContent();
  }, [type]);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img width="100%" src={content.img} alt="" />
      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// export default Featured
