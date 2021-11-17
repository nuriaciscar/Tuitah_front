import Head from "next/head";
import styles from "./index.module.css";

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Twitter w8-ch2-david-nuria</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className={styles.title}>Welcome to TuITAH</h1>
    </main>
  </div>
);

export default Home;
