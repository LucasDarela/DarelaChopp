import Head from "next/head";
import Landing from "../components/Landing";
import Chopes from "../components/Chopes";

const Home = ({ }) => {
  return (
    <div className="">
      <Head>
        <title>Darela Chopp Express</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <Chopes />

      {/* <Diferentials />
        <Featured /> */}
    </div>
  );
};

export default Home;