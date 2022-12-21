import Head from "next/head";
import Carousel from "../components/Carousel";
import NewsLetter from "../components/NewsLetter";

function HomePage() {
  return (
    <main>
      <Head>
        <title>AyQ-Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="AyQ Beverages-Home" />
      </Head>
      <section className="hero bg-[#e4e4e4] h-screen">
        <Carousel />
      </section>
      <section className="contact bg-dark h-[calc(100vh-80px)]">
        <NewsLetter />
      </section>
    </main>
  );
}

export default HomePage;
