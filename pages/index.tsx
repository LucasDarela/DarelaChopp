import Head from "next/head";
import Landing from "../components/Landing";
import Diferentials from "../components/Diferentials";
import Chopes from "../components/Chopes";
import Featured from '../components/Featured'


// interface Props {
//   categories: Category[];
//   products: Product[];
// }

const Home = ({}) => {

  return (
    <div className="">
        <Head>
          <title>Darela Chopp</title>
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