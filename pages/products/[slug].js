import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";

// React0-Icons
import { AiOutlinePlus } from "react-icons/ai";

// Components
import NewsLetter from "../../components/NewsLetter";

const SingleProduct = (req) => {
  const router = useRouter();
  const { slug } = router.query;
  const details = {
    calories: 60,
    totalFat: 0,
    cholestrol: 0,
    protein: "12gm",
    carbs: "25gm",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quo placeat, qui nisi, dignissimos ad ipsum accusamus ratione sapiente libero blanditiis doloremque quidem recusandae, corporis ipsa suscipit in laudantium eos officiis quisquam? Odit et voluptas, similique at repellat non officia aperiam aliquid eum, quas tempora assumenda repellendus eos ullam recusandae?",
  };
  const ingredients = [
    {
      name: "GREEN TEA EXTRACT",
      description:
        "The extract used contains a specific ratio of EGCG (epigallocatechin gallate) —the compound that scientists have found boosts your metabolism and helps your body burn more calories.",
      src: "https://www.celsius.com/wp-content/uploads/2020/04/celsius-ingredients-green-tea.svg",
    },
    {
      name: "GUARANA SEED EXTRACT",
      description:
        "Unlike most guarana drinks, CELSIUS uses the seeds (instead of the roots), which contain over twice the amount of caffeine than the average coffee bean.",
      src: "https://www.celsius.com/wp-content/uploads/2020/04/celsius-ingredients-guarana-seed-extract.svg",
    },
    {
      name: "GINGER ROOT",
      description:
        "Ginger root has a wonderful spicy flavor, and it's known to help support the process of thermogenesis as well as create a positive effect on digestive systems.",
      src: "https://www.celsius.com/wp-content/uploads/2020/04/celsius-ingredients-ginger.svg",
    },
    {
      name: "VITAMIN B",
      description:
        "B-Vitamins are essential for energy production and they help regulate cell health as well as metabolism. They also help support your adrenal glands to help you recover from fatigue.",
      src: "https://www.celsius.com/wp-content/uploads/2020/03/Avocado-Icon.svg",
    },
    {
      name: "VITAMIN C",
      description:
        "Also known as an ascorbic acid, vitamin C is an essential nutrient that aids the immune system and helps with tissue repair and the enzymatic production of certain neurotransmitters.",
      src: "https://www.celsius.com/wp-content/uploads/2020/03/Orange-Icon.svg",
    },
    {
      name: "CHROMIUM",
      description:
        "Known to help control hunger, chromium is an essential trace mineral that normalizes blood sugar levels and helps enhance the metabolism of proteins, carbohydrates, and lipids.",
      src: "https://www.celsius.com/wp-content/uploads/2020/03/Chromium-Icon.svg",
    },
  ];
  const objectRef = useRef(null);
  return (
    <div>
      <Head>
        <title>AyQ-{slug}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="AyQ Beverages-All Products" />
      </Head>
      <section className="min-h-screen md:max-w-7xl md:py-24 mx-auto px-4 md:px-0">
        <h2 className="text-3xl md:text-9xl o text-center tracking-widest my-12">
          AyQ
        </h2>
        <div className="md:flex items-start justify-between">
          <div className="basis-1/3">
            <h2 className="text-5xl md:text-6xl o font-semibold leading-tight tracking-wider">
              SPARKLING LEMON LIME
            </h2>
            <p className="text-md md:text-lg o font-medium leading-loose mt-4 text-[#aeb0b3]">
              When life gives you lemons …add a little twist. Introducing our
              newest Sparkling flavor, Lemon Lime! This crisp and refreshing
              flavor combines the perfect balance of citrusy sweet lemons and
              juicy, zesty limes. With just the right blend of tart and sweet,
              Lemon Lime has the perfect balance of flavor and energy to quench
              your tastebuds.
            </p>
            <div className="flex gap-1">
              <button className="bg-orange-400 hover:bg-orange-500 ease-in-out duration-300 px-8 py-3 font-bold text-lg tracking-widest text-white uppercase mt-12 o">
                Buy Now
              </button>
              <button className="bg-orange-400 hover:bg-orange-500 ease-in-out duration-300 px-6 py-3 font-bold text-lg tracking-widest text-white uppercase mt-12 o">
                <AiOutlinePlus />
              </button>
            </div>
          </div>
          <div className="h-96 my-12 md:my-0 md:h-[600px] flex md:block basis-1/3 relative">
            <img
              src="https://www.celsius.com/wp-content/uploads/2022/12/Celsius_LemonLime_Front.png"
              alt={slug}
              className="h-full w-full object-contain mx-auto md:-mt-20 transition duration-300 ease-in-out hover:opacity-0 relative z-10"
              ref={objectRef}
            />
            <img
              src="https://www.celsius.com/wp-content/uploads/2022/12/Celsius_LemonLime_Supplements.png"
              alt={slug}
              className="h-full w-full object-contain md:absolute top-0 left-0 md:-mt-20"
            />
          </div>
          <div className="basis-1/3">
            <p className="font-bold text-md tracking-widest uppercase o">
              Explore all 16 Flavours
            </p>
            <div className="mt-6 mb-12 md:mb-0">
              <p className="text-xs md:text-sm text-[#aeb0b3] tracking-widest uppercase o leading-loose">
                {details.details}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen max-w-7xl md:pb-24 mx-auto px-4 md:px-0">
        <h2 className="text-3xl md:text-6xl o font-semibold leading-tight tracking-wider uppercase">
          INGREDIENTS
        </h2>
        <div className="md:flex items-center justify-between relative flex-wrap gap-4 mt-12">
          {
            ingredients.map((ingredient, index) => {
              return <div className="md:w-1/3 md:flex items-center mb-12 md:mb-4 md:my-4" key={index}>
              <div>
                <h2 className="o font-semibold text-md md:text-xl tracking-widest mb-2">
                  {ingredient.name}
                </h2>
                <p className="text-xs text-[#aeb0b3] tracking-widest uppercase o leading-loose">
                  {
                    ingredient.description
                  }
                </p>
              </div>
              <div className="h-full w-full">
                <img
                  src={ingredient.src}
                  alt="ingredient"
                  className="w-[30%] md:w-[80%] object-contain md:ml-6 mt-4 md:mt-0"
                />
              </div>
              </div>
            })
          }
        </div>
      </section>
      <section>
        <NewsLetter />
      </section>
    </div>
  );
};

export default SingleProduct;
