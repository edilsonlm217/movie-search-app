import "../styles/globals.css";
import dotenv from "dotenv";
dotenv.config();
import type { AppProps } from "next/app";
import { FlexBox, FlexBoxDirection } from "@ui5/webcomponents-react";
import { MovieProvider } from "../contexts/MovieContext";

import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "../styles/_app.module.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MovieProvider>
      <FlexBox
        id="app-container"
        className={styles.appContainer}
        direction={FlexBoxDirection.Column}
      >
        <Header id="app-header" />

        <FlexBox
          id="app-content"
          className={styles.contentContainer}
          direction={FlexBoxDirection.Column}
        >
          <Component {...pageProps} />
        </FlexBox>

        <Footer id="app-footer" />
      </FlexBox>
    </MovieProvider>
  );
}
