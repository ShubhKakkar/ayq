import React from "react";

//React-Icons
import { ImQuotesRight } from "react-icons/im";

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
    <section className="max-w-7xl mx-auto">
      <div className="container py-24 mx-auto">
        <div className="flex flex-wrap">
          {reviews.map((review, index) => {
            return (
              <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4 relative">
                <div className="h-full text-left">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src={review.profile}
                  />
                  <div>
                    {/* <ImQuotesRight className="text-7xl text-dark absolute top-4 right-10 opacity-30"/> */}
                  </div>
                  <p className="text-md font-Roboto font-medium leading-loose mt-4">
                    {review.description}
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-orange-400 mt-6 mb-4"></span>
                  <h2 className="text-dark font-medium font-Roboto title-font tracking-wider text-sm">
                    {review.name}
                  </h2>
                  <p className="text-gray-500 font-Roboto">{review.work}</p>
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
