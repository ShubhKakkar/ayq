import React from "react";

const Accordian = ({ data }) => {
  return (
    <div className="mx-auto bg-white min-h-sceen">
      <div className="flex flex-col items-center">
        <h2 className="font-bold o text-5xl mt-5 tracking-tight">
          {data.title?data.title:""}
        </h2>
        <p className="uppercase text-lg font-bold text-neutral-500 mt-8 tracking-widest leading-loose">
          {data.subTitle?data.subTitle:""}
        </p>
      </div>
      <div className="grid divide-y divide-neutral-200 mx-auto mt-8 o">
        {data.details
          ? data.details.map((block, index) => {
              return (
                <div key={index} className="py-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>{block.q}</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                      {block.a}
                    </p>
                  </details>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default Accordian;
