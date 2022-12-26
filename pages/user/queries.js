import React from "react";

const queries = () => {
  return (
    <main>
      <section className="max-w-7xl mx-auto">
        <div className="h-[calc(100vh-80px)] bg-gray-100 grid place-items-center">
          <div className="h-48 w-[400px] border border-gray-300 p-4 rounded-lg bg-white relative">
            <h2 className="text-xl text-dark font-Roboto font-semibold inline">Have us call you</h2>
            <p className="font-Roboto text-sm text-dark mt-2">We'll first get a few details about your issue and then someone will call you right away.</p>
            <button className="absolute left-4 bottom-4 px-8 py-1 rounded shadow-lg border border-gray-300 text-sm font-Roboto font-medium hover:bg-gray-100 ease-in-out duration-300">Call me</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default queries;
