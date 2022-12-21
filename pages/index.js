import Head from "next/head";
import Carousel from "../components/Carousel";
import Contact from "../components/Contact";

function HomePage() {
  return (
    <main>
      <Head>
        <title>AyQ-Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="AyQ Beverages-Home" />
      </Head>
      <section className="hero bg-[#e4e4e4] h-[calc(100vh-80px)]">
        <Carousel />
        <Contact />
      </section>
    </main>
  );
}

export default HomePage;
