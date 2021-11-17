import Link from "next/link";

const HeaderNavMenu = () => {
  return (
    <>
      <div className="header">
        <Link href="/" className="header__name">
          Home
        </Link>
        <Link href="/twitList" className="header__name">
          Twits list
        </Link>
        <Link href="/newTwit" className="header__name">
          New Twit
        </Link>
      </div>
      <p className="title">TWITAH</p>
    </>
  );
};

export default HeaderNavMenu;
