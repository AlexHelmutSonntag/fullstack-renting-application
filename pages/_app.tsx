import "../styles/App.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { CookiesProvider } from "react-cookie";
import kaifstoreTheme from "../theme/kaifstoreTheme";
import { createTheme, ThemeProvider } from "@mui/material";
import Head from "next/head";
import axios from "axios";
import React from "react";
import { SWRConfig } from "swr";

const fetcher = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};

function MyApp({ Component, pageProps }: AppProps) {
  // const { data, error } = useSWR('api/');
  const theme = createTheme(kaifstoreTheme);

  return (
    <>
      <Head>
        <title>Renting App</title>
      </Head>
      <SWRConfig
        value={{
          fetcher,
          dedupingInterval: 10000,
        }}
      >
        <CookiesProvider>
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </CookiesProvider>
      </SWRConfig>
    </>
  );
}
export default MyApp;
