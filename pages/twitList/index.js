/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import axios from "axios";
import { useState } from "react";

TimeAgo.addLocale(en);
const TwitList = ({ tuits }) => {
  const [tuitList, setTuitList] = useState([...tuits]);

  const deleteTuit = async (id) => {
    await axios.delete(`https://tuits.herokuapp.com/tuits/${id}`);
    setTuitList(tuitList.filter((tuit) => tuit.id !== id));
  };
  return (
    <>
      <p className="twit-list"> Twits/</p>

      <ul className="card">
        {tuitList.map((tuit) => (
          <li key={tuit.id} className="card_li">
            <Link href={{ pathname: "twitList/[id]", query: { id: tuit.id } }}>
              <p>{tuit.text}</p>
            </Link>
            <div className="card_li_info">
              <ReactTimeAgo date={Date.parse(tuit.date)} locale="en" />
              <div className="card_li_info_likes">
                <p>Likes: {tuit.likes}</p>
                <button onClick={() => deleteTuit(tuit.id)}>DELETE</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TwitList;

export const getServerSideProps = async () => {
  const response = await fetch("https://tuits.herokuapp.com/tuits");
  const tuits = await response.json();

  return {
    props: { tuits },
  };
};
