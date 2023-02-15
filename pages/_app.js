import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../Components/Navbar";
import Script from "next/script";
import styled from "styled-components";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  if (Component.getLayOut) {
    return Component.getLayOut(
      <>
      <Head>
        <title>CreateMyCv</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  } else {
    return (
      <>
      <Head>
        <title>CreateMyCv</title>
        </Head>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
          crossorigin="anonymous"
        />
          <Navbar/>
          <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;

