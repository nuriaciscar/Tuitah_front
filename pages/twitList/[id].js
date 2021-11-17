import { useRouter } from "next/router";

const Tuit = ({ tuit }) => {
  const router = useRouter();
  if (router.isFallback) {
    return "Loading...";
  }

  return (
    <>
      <li key={tuit.id} className="card_li">
        <p>{tuit.text}</p>
        <p>Likes: {tuit.likes}</p>
      </li>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const response = await fetch("https://tuits.herokuapp.com/tuits" + params.id);
  const tuit = await response.json();

  return {
    props: { tuit },
  };
};

export default Tuit;
