import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import React, { useState } from "react";

// Framer-Motion
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session: session,
    },
  };
}

const details = () => {
  const { data: session } = useSession();
  const [email, setEmail] = useState(session?.user?.email);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleChangePassword = async () => {
    if (!email) {
      toast.error("No email");
      return;
    }
    if (!oldPassword) {
      toast.error("No old password");
      return;
    }
    if (!newPassword) {
      toast.error("No new password");
      return;
    }
    if (oldPassword === newPassword) {
      toast.error("New Password cannot be the same as the old one");
      return;
    }
    const response = await fetch("/api/auth/changePassword",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email : email,
        oldPassword: oldPassword,
        newPassword: newPassword
      }),
    });
    const res = await response.json();
    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success("Password changed successfully");
    }
  };
  return (
    <div className="py-24 min-h-[calc(100vh-80px)] px-4 md:px-0 md: mx-auto md:max-w-7xl">
      <Head>
        <title>AyQ-Details</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="AyQ-Details" />
      </Head>
      <motion.h1
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          type: "spring",
          stiffness: "100",
        }}
        className="text-3xl"
      >
        Change Password
      </motion.h1>
      <p className="mt-4 text-xl">No worries, we can change it in seconds</p>
      <div className="mt-4">
        <div className="mt-6">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            className="w-full md:w-1/2 hover:ring-0 focus:ring-0"
            readOnly
          />
        </div>
        <div className="mt-6">
          <input
            type="text"
            name="old_password"
            id="old_password"
            placeholder="Old Password"
            value={oldPassword}
            onChange={(e) => {
              setOldPassword(e.target.value);
            }}
            className="w-full md:w-1/2 hover:ring-0 focus:ring-0"
          />
        </div>
        <div className="mt-6">
          <input
            type="text"
            name="new_password"
            id="new_password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
            className="w-full md:w-1/2 hover:ring-0 focus:ring-0"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          className="mt-4 primary-button"
          onClick={handleChangePassword}
        >
          Change
        </motion.button>
      </div>
    </div>
  );
};

export default details;
