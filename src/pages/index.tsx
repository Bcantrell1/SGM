import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../components/home/HomePage";

const Home: NextPage = () => {

  return (
		<>
			<Head>
				<title>
					Samson`s Grounds Maintenance | Landscape | Tucson, AZ
				</title>
				<meta name="description" content="Samson`s Grounds Maintenance. Tucson, AZ's leader for artificial turf, masonry work, and landscape!" />
			</Head>
			<HomePage/>
		</>
  );
};

export default Home;