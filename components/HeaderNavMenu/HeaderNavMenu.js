import Link from "next/link";

const HeaderNavMenu = () => {
  return (
    <>
      <h1>Twitter</h1>
      <Link href="/"> Home </Link>
      <Link href="/newTwit"> New Twit </Link>
      <Link href="/twitList"> Twits list </Link>
    </>
  );
};

export default HeaderNavMenu;
