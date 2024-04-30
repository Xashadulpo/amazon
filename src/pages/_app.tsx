import store from "@/app/store";
import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { NextAuthProvider } from "../components/Provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    
      <NextAuthProvider>
        <Provider store={store}>
          <Header />
          <Component {...pageProps} />
        </Provider>
      </NextAuthProvider>
    </>
  );
}
