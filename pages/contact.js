import Head from "next/head";
import React from "react";
import Content from "../components/Content";
import FAQ from "../components/FAQ";
import NewsLetter from "../components/NewsLetter";
import VideoBox from "../components/VideoBox";
import StoreLocator from "../components/StoreLocator";

const Contact = () => {
  const businessPartnerProgramData = {
    url: "https://images.unsplash.com/photo-1595779993443-9f7c8710f85e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    title: "Business Partner",
    subTitle: "Become our business partner",
    description:
      "At our company, we believe that nature has the power to nourish and sustain the body. That's why we've created a range of all-natural energy drinks made with the finest fruits and spices from around the world. Our unique formula is specifically designed to provide sustained energy and support recovery during and after physical activity.",
    direction: "ltr",
    buttonText: "Become a Partner",
  };
  const influencerPartnerProgramData = {
    url: "https://images.unsplash.com/photo-1629114685997-cc8f00ca3051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    title: "Influencer Partner",
    subTitle: "Become our influencer partner",
    description:
      "Stay active and energized all day long with CELSIUS by your side. CELSIUS powers active lives every day with essential, functional energy. We're different from other energy drinks because we focus on movement. When combined with exercise, our formula is clinically proven to boost your metabolism and help you burn body fat. Whether you need an extra boost at the gym or a delicious pick-me-up to help you hustle through your workday, CELSIUS is here to help you stay active and focused on your goals. Made with only the best ingredients, CELSIUS has no artificial preservatives or flavors, no aspartame or high fructose corn syrup, and it's very low in sodium.",
    direction: "rtl",
    buttonText: "Become a partner",
  };
  return (
    <div>
      <Head>
        <title>AyQ-Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="AyQ Beverages-About" />
      </Head>
      <section>
        <VideoBox
          url="https://cdn.shopify.com/videos/c/o/v/988fc2c1ac884b18954c29e8f0ad0281.mp4"
          // text1="Death Clock"
          shopNow={true}
          subText="Death Clock"
          subDescription="Introducing a watch for the 0.1%
          from Liquid Death and Nixon."
        />
      </section>
      <section>
        <StoreLocator />
      </section>
      <section className="max-w-7xl mx-auto py-24">
        <Content data={businessPartnerProgramData} />
      </section>
      <section className="max-w-7xl mx-auto mb-24 py-24">
        <Content data={influencerPartnerProgramData} />
      </section>
      <section className="max-w-7xl mx-auto mb-24 py-24">
        <FAQ />
      </section>
      <section className="mx-auto">
        <NewsLetter />
      </section>
    </div>
  );
};

export default Contact;
