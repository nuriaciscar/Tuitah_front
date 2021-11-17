import { useRouter } from "next/router";

const Tuit = ({ tuit }) => {
  const router = useRouter();
  if (router.isFallback) {
    return "Loading...";
  }

  return (
    <>
      <h3>{tuit.text}</h3>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const response = await fetch("https://tuits.herokuapp.com/" + params.id);
  const tuit = await response.json();

  return {
    props: { tuit },
  };
};

export default Tuit;
