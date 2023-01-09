import React from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

const queries = () => {
  const { data: session } = useSession();
  const handleQuery = async () => {
    const query = await fetch("/api/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: session?.user._id,
        name: session?.user.name,
        email: session?.user.email,
      }),
    });
    const response = await query.json();
    if (!response.error) {
      toast.success("Query sumitted successfully");
    } else {
      toast.error(response.error);
    }
  };
  return (
    <main>
      <section className="md:max-w-7xl md:mx-auto">
        <div className="h-[calc(100vh-80px)] bg-gray-100 grid place-items-center px-4 md:px-0">
          <div className="h-48 md:w-[400px] border border-gray-300 p-4 rounded-lg bg-white relative">
            <h2 className="text-xl text-dark o font-semibold inline">
              Have us email you
            </h2>
            <p className="o text-sm text-dark mt-2">
              We'll first get a few details about your issue and then someone
              will call you right away.
            </p>
            <button
              className="absolute left-4 bottom-4 px-8 py-1 rounded shadow-lg border border-gray-300 text-sm o font-medium hover:bg-gray-100 ease-in-out duration-300"
              onClick={handleQuery}
            >
              Call me
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default queries;
