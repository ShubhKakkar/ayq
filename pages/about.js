import Head from "next/head";
import React from "react";
import BlogWidget from "../components/BlogWidget";
import Content from "../components/Content";
import Reviews from "../components/Reviews";
import Services from "../components/Services";
import NewsLetter from "../components/NewsLetter";
import VideoBox from "../components/VideoBox";

// Framer-Motion
import { motion, useMotionValue, useTransform } from "framer-motion";
import { toast } from "react-toastify";

export async function getServerSideProps() {
  let blog;
  try {
    const res = await fetch(`${process.env.NEXT_AUTH_URL}/api/blog`);
    blog = await res.json();
  } catch (err) {
    toast.error(err);
  }
  return {
    props: {
      blog: blog,
    },
  };
}

const About = ({ blog }) => {
  const url = "/video/about-cover.mp4";
  const productHeroServiceData = [
    {
      icon: "https://res.cloudinary.com/dndkskewk/image/upload/v1678554913/uploads/z9ywwhdjav8gbnq3pnu9.avif",
      text: "Sustainably Sourced",
    },
    {
      icon: "https://res.cloudinary.com/dndkskewk/image/upload/v1678554913/uploads/nq3wzfr6wq60are4smmf.avif",
      text: "Naturally Occurring Minerals",
    },
    {
      icon: "https://res.cloudinary.com/dndkskewk/image/upload/v1678554913/uploads/hwpzkx18ixdq9hezrqth.avif",
      text: "Athelete Approved",
    },
    {
      icon: "https://res.cloudinary.com/dndkskewk/image/upload/v1678554913/uploads/oojscaxxgd4tnhchy7b6.avif",
      text: "Nutritious",
    },
    {
      icon: "https://res.cloudinary.com/dndkskewk/image/upload/v1678554913/uploads/ppgzjnnzhgg5zg8vomsb.avif",
      text: "100% Recyclable",
    },
  ];
  const ourStory = {
    url: "https://www.celsius.com/wp-content/uploads/2020/02/Photo-1-e1583171907102.png",
    title: "Our origin story",
    // subTitle: "CLINICALLY PROVEN TO FUNCTION",
    direction: "ltr",
  };
  const ourImpact = {
    url: "https://cdn.shopify.com/s/files/1/1628/8781/files/HOME_Cartons-100_1080x.jpg?v=1649180029",
    title: "Our Impact",
    subTitle: "Where flavor meets function",
    direction: "rtl",
  };
  const videoData = {
    url: url,
    text1: "Spiced Water",
    shopNow: "true",
    shopUrl: "/",
  };
  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 150], [1.5, 0.5]);
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
      <section className="p-4 md:p-0 md:max-w-7xl md:mx-auto">
        <motion.img
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          whileTap={{ cursor: "grabbing" }}
          style={{
            x: x,
            scale: scale,
            cursor: "grab",
          }}
          src="https://res.cloudinary.com/dndkskewk/image/upload/v1678555477/uploads/pnp74tgksqojn0cuzzdf.png"
          alt="apple-cherry-cinnamon-can"
          className="h-[42vh] mx-auto -mt-56 md:-mt-0 relative z-10 md:left-3 md:-top-48"
        />
        <div className="relative md:-top-24">
          <Services data={productHeroServiceData} />
        </div>
      </section>
      <section className="p-4 md:p-0 mx-auto py-6 md:py-0">
        <Content data={ourStory}>
          <p className="mb-4">
            We're Kieran Powell and Emma Everett-Powell: a professional West
            Indies cricket player and sports agent, and the founders of AyQ.
          </p>
          <p>
            While traveling in Asia, we developed a love of spices like
            turmeric, cayenne, and cinnamon. We then set out to take that
            passion and put it into a refreshing beverage that everyone can
            enjoy. Infused with fruit and spices, you've never seen flavored
            water like this before.
          </p>
        </Content>
      </section>
      <section className="p-4 md:p-0 py-6 md:py-24 md:max-w-7xl md:mx-auto">
        <Content data={ourImpact}>
          <p className="mb-4">
            Stay energized with a can of AyQ. Created by athletes for everyone.
          </p>
          <p className="mb-4">
            Our flavored water gives consumers the functional, replenishing
            boost they need to stay hydrated and thrive. Our formula is made
            with natural ingredients, real fruit, and delightful spices—and it's
            packed with trace minerals, vitamins, and electrolytes that will
            help you recover faster.
          </p>
          <p>Oh, and did we mention our 100% recyclable packaging?</p>
        </Content>
      </section>
      <section className="p-4 md:p-0 md:pb-24">
        <Reviews />
      </section>
      <section className="md:pb-24 p-4 md:p-0">
        <BlogWidget blog={blog} />
      </section>
      <section className="mx-auto">
        <NewsLetter />
      </section>
    </main>
  );
};

export default About;
