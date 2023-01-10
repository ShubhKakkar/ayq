import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Social Icons
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const NewsLetter = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const emailRef = useRef();
  const links = [
    {
      title: "Ambassadors",
      url: "/",
    },
    {
      title: "FAQ",
      url: "/",
    },
    {
      title: "Blog",
      url: "/blogs",
    },
    {
      title: "Accessibility Statment",
      url: "/",
    },
  ];
  const handleNewsLetter = async () => {
    const data = {
      shared_email: emailRef.current.value,
      name: session?.user?.name,
      email: session?.user?.email,
      user: session?.user?._id,
    };
    const joinNewsLetter = await fetch(`/api/newsletter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await joinNewsLetter.json();
    if (!res.error) {
      emailRef.current.value = "";
      toast.success("Successfully joined the newsletter");
    } else {
      toast.error(res.error);
    }
  };
  return (
    <div className="bg-dark md:h-[calc(100vh-80px)]">
      <div className="p-4 pt-[60px] md:py-[120px] md:h-full md:max-w-7xl mx-auto">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="uppercase text-md text-orange-400 o font-[600] text-left md:text-center tracking-widest"
          >
            JOIN THE CELSIUS NEWS LETTER
          </motion.p>
          <motion.p
            initial={{ scale: 0.5, opacity:0 }}
            whileInView={{ scale: 1, opacity:1 }}
            transition={{ duration: 0.5, type:"spring", bounceStiffness:0.5, bounce:0.5, damping:20 }}
            className="text-white text-2xl md:text-4xl md:px-24 o font-bold my-4 text-left md:text-center mx-auto leading-snug md:leading-tight"
          >
            SIGN UP TO GET FIRST ACCESS AND UPDATES ABOUT PRODUCTS, EVENTS AND
            MORE.
          </motion.p>
        </div>
        <div className="text-left md:text-center my-6 md:my-12">
          <input
            type="text"
            placeholder="Enter Email"
            className="bg-transparent border-white border-2 p-3 text-md tracking-widest placeholder:uppercase pl-8 text-white w-3/4 md:w-[30vw] focus:outline-none placeholder:text-white lowercase"
            defaultValue={session?.user?.email}
            ref={emailRef}
          />
          <button
            className="bg-orange-400 ml-1 px-1 md:ml-2 py-4 md:py-3 md:p-2 md:px-6 text-white text-sm md:text-lg tracking-widest uppercase font-bold o relative bottom-[0px] hover:bg-orange-500 ease-in-out duration-300 border-[1px] md:border-2 border-orange-400 hover:border-orange-500"
            onClick={() => {
              if (session) {
                handleNewsLetter();
              } else {
                router.push("/auth/signin");
              }
            }}
          >
            Submit
          </button>
        </div>
        <div>
          <div className="text-left md:text-center md:my-12 border-2 border-white md:h-24 flex flex-col p-4 md:p-0 gap-8 md:gap-0 md:flex-row md:items-center">
            <div className="basis-2/5 h-full flex gap-16 md:gap-0 items-center justify-around border-r border-white">
              <FaFacebookF className="text-3xl text-white hover:text-orange-400 ease-in-out duration-300" />
              <FaInstagram className="text-3xl text-white hover:text-orange-400 ease-in-out duration-300" />
              <FaTwitter className="text-3xl text-white hover:text-orange-400 ease-in-out duration-300" />
              <FaYoutube className="text-3xl text-white hover:text-orange-400 ease-in-out duration-300" />
            </div>
            <div className="basis-3/5 h-full flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center justify-around">
              {links.map((link, index) => {
                return (
                  <Link
                    key={index}
                    href={link.url}
                    className="text-sm o font-semibold tracking-widest text-white uppercase cursor-pointer hover:text-orange-400 ease-in-out duration-300"
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
