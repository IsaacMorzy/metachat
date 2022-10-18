import Head from "next/head";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import Login from "../components/Login";

export default function Home() {
  const {isAuthenticated, logout} = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen ">
      <Head>
        <title>MetaChat</title>
        {/* <link rel="icon" type="" href="/favicon.ico"> */}
      </Head>
      <h1>Welcome to the Metaverse Dapp</h1>
      <button onClick={logout}> Logout </button>
    </div>
  );
}
