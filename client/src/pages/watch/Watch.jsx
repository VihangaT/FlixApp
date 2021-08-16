import { ArrowBackIosOutlined } from "@material-ui/icons";
import { React } from "react";
import "./watch.scss";
import { Link, useLocation } from "react-router-dom";

const Watch = () => {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div>
      <div className="watch">
        <Link to="/">
          <div className="back">
            <ArrowBackIosOutlined />
            Home
          </div>
        </Link>
        <video className="video" autoPlay Progress controls src={movie.video} />
      </div>
    </div>
  );
};

export default Watch;
