import React from "react";

const Services = ({ data }) => {
  return (
    <div className="flex flex-row flex-wrap md:flex-nowrap items-top justify-between gap-2 md:gap-0 gap-y-8 md:gap-y-0">
      {data.map((service, index) => {
        return (
          <div key={index} className="text-center w-1/3 md:w-48">
            <img
              src={service.icon ? service.icon : ""}
              alt="Sustainably Sourced"
              className="h-24 mx-auto mb-4"
            />
            <p className="text-[#214c73] font-bold uppercase text-xs md:text-sm">
              {service.text ? service.text : ""}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
