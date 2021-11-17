import Link from "next/link";

const TwitList = ({ tuits }) => {
  const getDate = (date) => {
    const yearMonth = date.split("-");
    const dayAndTime = yearMonth[2].split("T");
    const time = dayAndTime[1].split(":");

    return `${dayAndTime[0]}-${yearMonth[1]}-${yearMonth[0]} at ${time[0]}:${time[1]}`;
  };

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
              <p>Date:{getDate(tuit.date)}</p>
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
