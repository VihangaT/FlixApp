import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { React, useState, useEffect } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDk1ODEzNWJiYTAyMjYwNDA2ZjYwOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyODk1MDYxMCwiZXhwIjoxNjI5MzgyNjEwfQ.8Vmwb54RhkaH04vhQ8JPGGS6zuAtpdCdP-mARyu_lvk" 
                // +
                // JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list)=>(
          <List list={list} key={list._id}/>
      ))}
    </div>
  );
};

export default Home;
