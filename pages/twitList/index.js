import Link from "next/link";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

TimeAgo.addLocale(en);

const TwitList = ({ tuits }) => {
  return (
    <>
      <p className="twit-list"> Twits/</p>

      <ul className="card">
        {tuits.map((tuit) => (
          <li key={tuit.id} className="card_li">
            <Link href={{ pathname: "twitList/[id]", query: { id: tuit.id } }}>
              <p>{tuit.text}</p>
            </Link>
            <div className="card_li_info">
              <ReactTimeAgo date={Date.parse(tuit.date)} locale="en" />
              <p>Likes: {tuit.likes}</p>
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
