import React from "react";

//React-Icons
import { ImQuotesRight } from "react-icons/im";

// Framer-Motion
import { motion } from "framer-motion";

const reviews = [
  {
    name: "HOLDEN CAULFIELD",
    work: "Senior Product Designer",
    profile:
      "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=689",
    description:
      "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
  {
    name: "HOLDEN CAULFIELD",
    work: "Senior Product Designer",
    profile:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    description:
      "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
  {
    name: "HOLDEN CAULFIELD",
    work: "Senior Product Designer",
    profile:
      "https://images.unsplash.com/photo-1627087820883-7a102b79179a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGFpdHxlbnwwfHwwfHw%3D&w=1000&q=80",
    description:
      "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  },
];

const Reviews = () => {
  return (
    <section className="md:max-w-7xl mx-auto">
      <div className="container mx-auto">
        <h2 className="bigTitle">
          Testimonials
        </h2>
        <p className="text-lg o font-medium leading-loose mt-4 pb-6 md:pb-24">
          Don't just take our word for it - check out what others have to say
          about our products. Our blog features reviews from athletes, coaches,
          and wellness enthusiasts who have tried our energy drinks and
          experienced their benefits firsthand.
        </p>
        <div className="md:flex justify-between gap-12">
          {reviews.map((review, index) => {
            return (
              <div key={index} className="relative mt-12 md:mb-6">
                <div className="h-full text-left">
                  <div className="flex items-center justify-between mb-8">
                    <img
                      alt="testimonial"
                      className="w-20 h-20 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src={review.profile}
                    />
                    <ImQuotesRight className="text-7xl text-gray-100" />
                  </div>
                  <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.3, ease:"easeInOut"}} className="text-md o font-medium leading-loose mt-4 bg-gray-100 p-4">
                    {review.description}
                  </motion.p>
                  <span className="inline-block h-1 w-10 rounded bg-orange-400 mt-6 mb-4"></span>
                  <h2 className="text-dark font-medium o title-font tracking-wider text-sm">
                    {review.name}
                  </h2>
                  <p className="text-gray-500 o">{review.work}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
