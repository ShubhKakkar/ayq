import Head from "next/head";
import React from "react";
import NewsLetter from "../components/NewsLetter";

// Components
import VideoBox from "../components/VideoBox";

const Process = () => {
  const url = "https://videos.ctfassets.net/8roil6amnkw9/6cNiuzHfmR8Un66ZysPI29/1fa433bdb9dce12ca7eea7fb9a0ad003/process-sizzle.minv2.mp4";
  const videoData = {
    url: url,
    text1: "How it's made",
    // text2: "it's made",
    // shopNow: "true",
    // shopUrl: "/",
  };
  return (
    <div>
      <Head>
        <title>AyQ-Process</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="AyQ Beverages-Process" />
      </Head>
      <section className="h-screen">
        <VideoBox data={videoData} />
      </section>
      {/* <h2>
        Welcome to the how it's made page of our sports energy beverage website!
      </h2>
      <p>
        At our company, we believe that nature has the power to nourish and
        sustain the body. That's why we've created a range of all-natural energy
        drinks made with the finest fruits and spices from around the world.
      </p>
      <p>
        Our unique formula is specifically designed to provide sustained energy
        and support recovery during and after physical activity. It's the
        perfect choice for athletes looking to stay hydrated and energized
        during training and competition.
      </p>
      <p>
        But how do we make our energy drinks? It all starts with sourcing the
        highest quality ingredients from the finest farms around the globe. We
        carefully select each fruit and spice for its unique flavor and
        nutritional benefits.
      </p> */}
      {/* <p>
        Once the ingredients are sourced, they are carefully blended to create
        the perfect balance of flavor and functionality. Our proprietary formula
        is the result of years of research and development, and we are
        constantly refining and improving it to ensure that it meets the needs
        of athletes everywhere.
      </p>
      <p>
        Finally, the finished product is packaged in eco-friendly materials and
        shipped to stores and online customers around the world.
      </p>
      <p>
        We hope you enjoy our energy drinks as much as we enjoy making them!
      </p> */}
      <section className="mx-auto">
        <NewsLetter />
      </section>
    </div>
  );
};

export default Process;
