import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Head>
        <title>RPS</title>
      </Head>

      <main>
        <h1 data-testid={"home-id"}>Rock Paper Scissors</h1>
        <Link href="/game" to="/game">
          Play!
        </Link>
      </main>
    </div>
  );
};

export default Home;
