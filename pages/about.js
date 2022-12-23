import Head from "next/head";
import React from "react";
import BlogWidget from "../components/BlogWidget";
import Content from "../components/Content";
import Reviews from "../components/Reviews";
import Services from "../components/Services";
import NewsLetter from "../components/NewsLetter";
import VideoBox from "../components/VideoBox";

const About = () => {
  const url = "/video/about-cover.mp4";
  const productHeroServiceData = [
    {
      icon: "https://cdn.shopify.com/s/files/1/1628/8781/files/Droplets_1000px_180x.png?v=1621883235",
      text: "Sustainably Sourced",
    },
    {
      icon: "https://cdn.shopify.com/s/files/1/1628/8781/files/ICON_Naturally_Occurring_Mineral_Content_180x.png?v=1628861791",
      text: "Naturally Occurring Minerals",
    },
    {
      icon: "https://cdn.shopify.com/s/files/1/1628/8781/files/Bcorp_1000px_180x.png?v=1621883267",
      text: "B-Corp Certified",
    },
    {
      icon: "https://cdn.shopify.com/s/files/1/1628/8781/files/NationalMinoritySupplierCouncil_1000px_180x.png?v=1621883277",
      text: "Minority-Owned",
    },
    {
      icon: "https://cdn.shopify.com/s/files/1/1628/8781/files/ICON_Recycleable1_180x.png?v=1629304600",
      text: "100% Recyclable",
    },
  ];
  const ourStory = {
    url: "https://www.celsius.com/wp-content/uploads/2020/02/Photo-1-e1583171907102.png",
    title: "Our Story",
    subTitle: "CLINICALLY PROVEN TO FUNCTION",
    description:
      "At our company, we believe that nature has the power to nourish and sustain the body. That's why we've created a range of all-natural energy drinks made with the finest fruits and spices from around the world. Our unique formula is specifically designed to provide sustained energy and support recovery during and after physical activity.",
    direction: "ltr",
  };
  const ourImpact = {
    url: "https://cdn.shopify.com/s/files/1/1628/8781/files/HOME_Cartons-100_1080x.jpg?v=1649180029",
    title: "Our Impact",
    subTitle: "CLINICALLY PROVEN TO FUNCTION",
    description:
      "Stay active and energized all day long with CELSIUS by your side. CELSIUS powers active lives every day with essential, functional energy. We're different from other energy drinks because we focus on movement. When combined with exercise, our formula is clinically proven to boost your metabolism and help you burn body fat. Whether you need an extra boost at the gym or a delicious pick-me-up to help you hustle through your workday, CELSIUS is here to help you stay active and focused on your goals. Made with only the best ingredients, CELSIUS has no artificial preservatives or flavors, no aspartame or high fructose corn syrup, and it's very low in sodium.",
    direction: "rtl",
  };
  const videoData = {
    url: url,
    text1: "Refreshingly",
    text2: "Relaxing",
    shopNow: "true",
    shopUrl: "/",
  };
  return (
    <main>
      <Head>
        <title>AyQ-About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="AyQ Beverages-About" />
      </Head>
      <section className="h-screen">
        <VideoBox data={videoData} />
      </section>
      <section className="max-w-7xl mx-auto">
        <img
          src="https://cdn.shopify.com/s/files/1/1628/8781/files/Bubbles_Cucumber_Hero_Centered_HiRes_800x.png?v=1670812072"
          alt="apple-cherry-cinnamon-can"
          className="h-[42vh] mx-auto relative left-3 -top-48"
        />
        <div className="relative -top-24">
          <Services data={productHeroServiceData} />
        </div>
      </section>
      <section className="max-w-7xl mx-auto">
        <Content data={ourStory} />
      </section>
      <section className="mx-auto py-24">
        <Content data={ourImpact} />
      </section>
      <section className="pb-24">
        <Reviews />
      </section>
      <section className="pb-24">
        <BlogWidget />
      </section>
      <section className="mx-auto pt-24">
        <NewsLetter />
      </section>
    </main>
  );
};

export default About;
