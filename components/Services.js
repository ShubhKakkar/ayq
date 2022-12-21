import React from "react";

const Services = ({ data }) => {
  return (
    <div className="flex items-top justify-between">
      {data.map((service, index) => {
        return (
          <div key={index} className="text-center w-48">
            <img
              src={service.icon ? service.icon : ""}
              alt="Sustainably Sourced"
              className="h-24 mx-auto mb-4"
            />
            <p className="text-[#214c73] font-bold uppercase text-sm">
              {service.text ? service.text : ""}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
