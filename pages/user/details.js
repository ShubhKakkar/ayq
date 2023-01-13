import { getSession } from "next-auth/react";
import Head from "next/head";
import React from "react";

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
  return (
    <div>
      <Head>
        <title>AyQ-Details</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="AyQ-Details" />
      </Head>
      details
    </div>
  );
};

export default details;
