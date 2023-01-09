import Link from "next/link";
import React, { useState } from "react";
import { getSession, useSession } from "next-auth/react";
import { FaHeart, FaPen, FaUser } from "react-icons/fa";
import { GiSodaCan } from "react-icons/gi";
import DataTable from "react-data-table-component";
import moment from "moment";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Head from "next/head";

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session || !session.user.isAdmin) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const response = await fetch(`${process.env.NEXT_AUTH_URL}/api/count`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: context.req.headers.cookie,
    },
  });
  const {
    userCount,
    productCount,
    orderCount,
    newsLetterCount,
    postCount,
    queries,
  } = await response.json();
  return {
    props: {
      userCount,
      productCount,
      orderCount,
      newsLetterCount,
      postCount,
      queries,
    },
  };
}

const Dashboard = ({
  userCount,
  productCount,
  orderCount,
  newsLetterCount,
  postCount,
  queries,
}) => {
  const { data: session } = useSession();
  const router = useRouter();
  const columns = [
    {
      name: "_id",
      selector: (row) => row._id,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Created at",
      selector: (row) => row.createdAt,
      sortable: true,
    },
    {
      name: "Delete Query",
      selector: (row) => row.deleteQuery,
      show: false,
    },
  ];

  // deleteQuery
const handleDeleteQuery = async (_id) => {
  const response = await fetch(`/api/query/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await response.json();
  if (!res.error) {
    toast.success("Query deleted successully");
    router.push("/admin");
  } else {
    toast.error(res.error);
  }
};

  const queryData = queries?.map((query) => {
    {
      return {
        _id: query?._id,
        name: query?.name,
        email: query?.email,
        createdAt: moment(query?.createdAt).format("DD/MM/YYYY"),
        deleteQuery: (
          <button
            onClick={() => {
              handleDeleteQuery(query?._id);
            }}
            className="text-orange-400 hover:text-orange-500 ease-in-out duration-300 hover:underline"
          >
            Delete Query
          </button>
        ),
      };
    }
  });
  const menu = [
    {
      title: "Blog",
      links: [
        { name: "Create", url: "/admin/blog/create" },
        { name: "All", url: "/admin/blog" },
      ],
    },
    {
      title: "Products",
      links: [
        { name: "Create", url: "/admin/products/create" },
        { name: "All", url: "/admin/products" },
      ],
    },
    {
      title: "Users",
      links: [{ name: "All users", url: "/admin/users" }],
    },
    ,
    {
      title: "Orders",
      links: [{ name: "All orders", url: "/admin/orders" }],
    },
    {
      title: "Newsletter",
      links: [{ name: "All requests", url: "/admin/newsletter" }],
    },
  ];

  return (
    <div className="pt-24 md:pt-24 md:flex min-h-screen">
      <Head>
        <title>AyQ-Admin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="AyQ Beverages-Admin" />
      </Head>
      <div className="basis-1/5 shadow-inner py-4 px-4 md:px-8">
        <p className="my-2 text-2xl font-semibold text-center text-[#1081e8]">
          Admin
        </p>
        <ul className="flex flex-col gap-4 mt-5">
          {menu.map((item) => {
            return (
              <div key={item.name}>
                <li className="hover:bg-[#1081e8] hover:text-white text-gray-400 ease-in-out duration-300 p-4 rounded-lg border border-gray-200 grid place-items-center font-medium cursor-pointer rounded-b-none">
                  {item.title}
                </li>
                <div className="pl-4 bg-gray-100 rounded-b-lg p-2 flex flex-col gap-4 border border-gray-200 ease-in-out duration-300 cursor-pointer">
                  {item.links.map((link) => {
                    return (
                      <Link
                        href={link.url}
                        className="hover:underline cursor-pointer"
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="basis-4/5 p-4 bg-[#f8f8f8]">
        <div className="md:flex items-center justify-between">
          <h1 className="hidden md:block uppercase text-3xl font-bold leading-snug">
            Dashboard
          </h1>
          <h3 className="hidden md:block text-sm font-semibold leading-snug text-gray-400">
            Welcome {session?.user.name}
          </h3>
        </div>
        <div className="mt-4 md:flex items-center justify-between gap-4">
          <div className="basis-1/4 h-32 rounded-lg border border-gray-200 shadow-md grid place-items-center bg-white mb-4 md:mb-0">
            <div className="flex items-center gap-4">
              <FaUser className="text-6xl text-[#00afb9] bg-[#e6f7f8] p-4 rounded-lg" />
              <div>
                <p className="text-2xl font-semibold">
                  {userCount ? userCount : ""}
                </p>
                <span className="text-sm text-gray-400 font-medium">Users</span>
              </div>
            </div>
          </div>
          <div className="basis-1/4 h-32 rounded-lg border border-gray-200 shadow-md grid place-items-center bg-white mb-4 md:mb-0">
            <div className="flex items-center gap-4">
              <FaPen className="text-6xl text-[#ff8700] bg-[#fff3e6] p-4 rounded-lg" />
              <div>
                <p className="text-2xl font-semibold">
                  {postCount ? postCount : ""}
                </p>
                <span className="text-sm text-gray-400 font-medium">Posts</span>
              </div>
            </div>
          </div>
          <div className="basis-1/4 h-32 rounded-lg border border-gray-200 shadow-md grid place-items-center bg-white mb-4 md:mb-0">
            <div className="flex items-center gap-4">
              <FaHeart className="text-6xl text-[#ff4d6d] bg-[#ffedf0] p-4 rounded-lg" />
              <div>
                <p className="text-2xl font-semibold">
                  {newsLetterCount ? newsLetterCount : ""}
                </p>
                <span className="text-sm text-gray-400 font-medium">
                  Requests
                </span>
              </div>
            </div>
          </div>
          <div className="basis-1/4 h-32 rounded-lg border border-gray-200 shadow-md grid place-items-center bg-white mb-4 md:mb-0">
            <div className="flex items-center gap-4">
              <GiSodaCan className="text-6xl text-[#1081e8] bg-[#e7f2fd] p-4 rounded-lg" />
              <div>
                <p className="text-2xl font-semibold">
                  {productCount ? productCount : ""}
                </p>
                <span className="text-sm text-gray-400 font-medium">
                  Products
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <DataTable
            title={`Queries (${queryData.length})`}
            columns={columns}
            data={queryData}
            selectableRows
            responsive
            fixedHeader
            fixedHeaderScrollHeight="300px"
            highlightOnHover
            pointerOnHover
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
