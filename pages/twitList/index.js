import Link from "next/link";

const TwitList = ({ tuits }) => {
  return (
    <>
      <h2> Twit List :</h2>
      <ul>
        {tuits.map((tuit) => (
          <li key={tuit.id}>
            <Link href={{ pathname: "twitList/[id]", query: { id: tuit.id } }}>
              <h3>{tuit.text}</h3>
            </Link>
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
