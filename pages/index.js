import Head from "next/head";
import styles from "./index.module.css";
import Link from "next/link";

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Twitter w8-ch2-david-nuria</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <p className="welcome">
        <Link href="/twitList">WELCOME</Link>
      </p>
    </main>
  </div>
);

export default Home;
