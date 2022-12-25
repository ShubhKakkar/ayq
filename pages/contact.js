import Head from "next/head";
import React from "react";
import Content from "../components/Content";
import Accordian from "../components/Accordian";
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
      "Stay active and energized all day long with CELSIUS by your side. CELSIUS powers active lives every day with essential, functional energy. We're different from other energy drinks because we focus on movement. When combined with exercise, our formula is clinically proven to boost your metabolism and help you burn body fat.",
    direction: "rtl",
    buttonText: "Become a partner",
  };
  const videoData = {
    url: "https://cdn.shopify.com/videos/c/o/v/988fc2c1ac884b18954c29e8f0ad0281.mp4",
    shopNow: true,
    subText: "Death Clock II",
    subDescription:
      "Introducing a watch for the 0.1% from Liquid Death and Nixon.",
    subButtonText1: "Watch commercial",
    subButtonText2: "Buy Now",
    subButton1Url: "/",
    subButton2Url: "/",
  };
  const businessPartnerProgram = {
    url: "https://cdn.shopify.com/videos/c/o/v/5a72317edb7541c5a718738fb23c918c.mp4",
    shopNow: true,
    subText: "Sell AYQ",
    subDescription:
      "Own a business? Want to carry AyQ? Join the AyQ Business partner program.",
    subButtonText1: "Hell Yes",
    subButton1Url: "/",
    subButton2Url: "/",
    overlay: true,
  };
  const influencerPartnerProgram = {
    url: "https://cdn.shopify.com/videos/c/o/v/e748ba3cc415443a9f66f685dbf182d1.mp4",
    shopNow: true,
    subText: "MARTHA STEWART'S DISMEMBERED MOMENTS CANDLE",
    subDescription:
      "We partnered with Martha Stewart to make a life-sized severed hand candle.",
    subButtonText1: "Watch Now",
    subButton1Url: "/",
    subButton2Url: "/",
    overlay: true,
  };
  const AccordianData = {
    title: "FAQ",
    subTitle: "FREQUENTY ASKED QUESTIONS",
    details: [
      {
        q: "What is a SAAS platform?",
        a: "SAAS platform is a cloud-based software service that allows users to access and use a variety of tools and functionality.",
      },
      {
        q: "How does billing work?",
        a: "We offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.",
      },
      {
        q: "Can I get a refund for my subscription?",
        a: "We offers a 30-day money-back guarantee for most of its subscription plans. If you are not satisfied with your subscription within the first 30 days, you can request a full refund. Refunds for subscriptions that have been active for longer than 30 days may be considered on a case-by-case basis.",
      },
      {
        q: "How do I cancel my subscription?",
        a: "To cancel your We subscription, you can log in to your account and navigate to the subscription management page. From there, you should be able to cancel your subscription and stop future billing.",
      },
      {
        q: "Can I try this platform for free?",
        a: "We offers a free trial of its platform for a limited time. During the trial period, you will have access to a limited set of features and functionality, but you will not be charged.",
      },
      {
        q: "How do I access documentation?",
        a: "Documentation is available on the company's website and can be accessed by logging in to your account. The documentation provides detailed information on how to use the , as well as code examples and other resources.",
      },
      {
        q: "How do I contact support?",
        a: "If you need help with the platform or have any other questions, you can contact the company's support team by submitting a support request through the website or by emailing support@We.com.",
      },
      {
        q: "Do you offer any discounts or promotions?",
        a: "We may offer discounts or promotions from time to time. To stay up-to-date on the latest deals and special offers, you can sign up for the company's newsletter or follow it on social media.",
      },
      {
        q: "How do we compare to other similar services?",
        a: "This platform is a highly reliable and feature-rich service that offers a wide range of tools and functionality. It is competitively priced and offers a variety of billing options to suit different needs and budgets.",
      },
    ],
  };
  return (
    <div>
      <Head>
        <title>AyQ-Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="AyQ Beverages-About" />
      </Head>
      <section>
        <VideoBox data={videoData} />
      </section>
      <section className="max-w-7xl mx-auto py-24">
        <StoreLocator />
      </section>
      <section className="max-w-7xl mx-auto pb-24">
        <Content data={businessPartnerProgramData} />
      </section>
      <section className="max-w-7xl mx-auto pb-24">
        <VideoBox data={businessPartnerProgram} />
      </section>
      <section className="max-w-7xl mx-auto pb-24">
        <Content data={influencerPartnerProgramData} />
      </section>
      <section className="max-w-7xl mx-auto pb-24">
        <VideoBox data={influencerPartnerProgram} />
      </section>
      <section className="max-w-7xl mx-auto pb-24">
        <Accordian data={AccordianData} />
      </section>
      <section className="mx-auto">
        <NewsLetter />
      </section>
    </div>
  );
};

export default Contact;
