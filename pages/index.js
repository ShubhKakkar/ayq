import Head from "next/head";

// Components
import Carousel from "../components/Carousel";
import NewsLetter from "../components/NewsLetter";
import VideoBox from "../components/VideoBox";

function HomePage() {
  const VideoData = {
    url: "https://uploads-ssl.webflow.com/5c0ebe0bc3abf564c79e6c17/5fa5930df47531366c08c392_Mobile-VB-_Homepage-Background-Video-transcode.mp4",
    text1: "The ultimate membership for an extraordinary life.",
    text2:"We help high performance people unlock the vast potential of their lives in the digital age. Welcome to concierge, reimagined.",
    text1Styles:"text-4xl font-medium text-white font-Roboto",
    text2Styles:"text-md my-4 text-[#afaca8] font-medium font-Roboto",
    shopNow: "true",
    shopUrl: "/",
    overlay: true,
  };
  return (
    <main>
      <Head>
        <title>AyQ-Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="AyQ Beverages-Home" />
      </Head>
      <section className="hidden md:block hero bg-[#e4e4e4] h-[50vh] md:h-screen">
        <Carousel />
      </section>
      <section className="md:hidden hero bg-[#e4e4e4] h-screen md:h-screen">
        <VideoBox data={VideoData} />
      </section>
      <section>
        <NewsLetter />
      </section>
    </main>
  );
}

export default HomePage;
