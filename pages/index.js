import Head from "next/head";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import Login from "../components/Login";
import Header from "../components/Header";
import Messages from "../components/Messages";

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b
    from-black to-fuchsia-900 overflow-hidden">
      <Head>
        <title>MetaChat</title>
        {/* <link rel="icon" type="" href="/favicon.ico"> */}
      </Head>

        <div className="max-w-screen-2xl mx-auto">
          <Header />
          <Messages />
        
        </div>

    </div>
  );
}
