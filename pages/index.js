import Head from "next/head";
import Link from "next/link";

// Components
import Carousel from "../components/Carousel";
import NewsLetter from "../components/NewsLetter";
import VideoBox from "../components/VideoBox";

function HomePage({ products }) {
  const VideoData = {
    url: "https://uploads-ssl.webflow.com/5c0ebe0bc3abf564c79e6c17/5fa5930df47531366c08c392_Mobile-VB-_Homepage-Background-Video-transcode.mp4",
    text1: "The ultimate membership for an extraordinary life.",
    text2:
      "We help high performance people unlock the vast potential of their lives in the digital age. Welcome to concierge, reimagined.",
    text1Styles: "text-4xl font-medium text-white o",
    text2Styles: "text-md my-4 text-[#afaca8] font-medium o",
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
      <section className="content min-h-screen py-12 md:py-24 md:max-w-7xl md:mx-auto md:flex items-center md:gap-16 px-4">
        <div className="basis-1/2 h-full mb-12 md:mb-0">
          <h2 className="uppercase text-4xl md:text-7xl font-bold leading-snug font-Roboto">
            Boost your AYQ
          </h2>
          <p className="text-md md:text-lg font-medium leading-loose mt-4 mb-2 md:mb-0 text-justify">
            We're Kieran Powell and Emma Everett-Powell, a husband-and-wife duo
            focused on hydration. Being a professional athlete (Kieran is a West
            Indian cricketer) and a superstar sports agent (Emma's a badass), we
            understood the gap in the market. Over the years, we decided there
            had to be a drink that could replenish the body without skimping on
            flavor.
          </p>
          <p className="text-md md:text-lg font-medium leading-loose mt-4 mb-2 md:mb-0 text-justify">
            And so AyQ was born. Infused with incredible fruit and powerful
            spices, the canned beverage is as delicious as it is beneficial. Our
            water offers real flavor without overpowering the taste buds. Not
            only that, but our recipes are completely free from additives and
            artificial ingredients.
          </p>
          <p className="text-md md:text-lg font-medium leading-loose mt-4 mb-2 md:mb-0 text-justify">
            We created AyQ to unleash something deep within our consumers—to not
            only quench a person's thirst, but to inspire them. We're confident
            our Apple Cherry Cinnamon and Orange Mango Turmeric flavors will
            change your world.
          </p>
        </div>
        <div className="basis-1/2 h-24 md:min-h-screen grid place-items-center border">
          Image will come here
        </div>
      </section>
      <section className="w-full mx-auto md:max-w-7xl hidden md:block pb-24">
        <img
          src="https://res.cloudinary.com/dndkskewk/image/upload/q_70/v1678605585/uploads/eclor2x3xbizxlvtgwis.jpg"
          className="md:h-full w-full object-contain overflow-x-scroll"
        />
      </section>
      <section className="content md:h-screen bg-[#f4f4f4]">
        <div className="md:max-w-7xl md:mx-auto md:flex items-center md:gap-24 h-full px-4">
          <div className="h-full md:basis-1/2 md:py-24">
            <img
              src="https://res.cloudinary.com/dndkskewk/image/upload/q_70/v1678619436/uploads/eosyldknznxbzygsm4bn.png"
              className="h-72 md:h-full w-full object-cover"
            />
          </div>
          <div className="h-full md:basis-1/2 flex flex-col gap-4 py-12 md:py-24">
            <div>
              <h2 className="uppercase text-4xl md:text-7xl font-bold leading-snug font-Roboto mb-4">
                Every can of AYQ offers
              </h2>
              <p className="text-md md:text-lg font-medium leading-loose mt-4 mb-2 md:mb-0">
                • Trace minerals and added vitamins
              </p>
              <p className="text-md md:text-lg font-medium leading-loose mt-4 mb-2 md:mb-0">
                • BCAAs and electrolytes
              </p>
              <p className="text-md md:text-lg font-medium leading-loose mt-4 mb-2 md:mb-0">
                • Just 3 grams of sugar per 100 milliliters
              </p>
              <p className="text-md md:text-lg font-medium leading-loose mt-4 mb-2 md:mb-0">
                • No artificial ingredients whatsoever
              </p>
              <p className="text-md md:text-lg font-medium leading-loose mt-4 mb-2 md:mb-0">
                • Superior nutritional value to traditional energy drinks
              </p>
              <p className="text-md md:text-lg font-medium leading-loose mt-4 mb-4 md:mb-0">
                • 100% recyclable aluminum packaging
              </p>
              <Link
                className="inline-block rounded bg-orange-400 py-3 px-24 shadow outline-none hover:bg-orange-500 active:bg-orange-500 ease-in duration-300 text-white mt-8 text-lg"
                href="/products"
              >
                Get AYQ
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <NewsLetter />
      </section>
    </main>
  );
}

export default HomePage;
