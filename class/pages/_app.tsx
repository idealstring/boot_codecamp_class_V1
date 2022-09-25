// import "../styles/globals.css";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

// //////////////////////firebase///////////////////////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZU7Qg6Xcz3Pu-bCcTcuNf6khYiKVesFk",
  authDomain: "codecamp09-idealstring.firebaseapp.com",
  projectId: "codecamp09-idealstring",
  storageBucket: "codecamp09-idealstring.appspot.com",
  messagingSenderId: "885464661436",
  appId: "1:885464661436:web:39d269ee36b1f584803fb9",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig); // 여기가 접속 정보임.
// //////////////////////firebase///////////////////////////

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ApolloSetting>
  );
}
export default MyApp;
