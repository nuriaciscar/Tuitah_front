import HeaderNavMenu from "@/components/HeaderNavMenu/HeaderNavMenu";
import "../styles/global.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeaderNavMenu />
      <Component {...pageProps} />
    </>
  );
}
