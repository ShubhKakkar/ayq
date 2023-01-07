import Link from "next/link";
import React, { useState } from "react";
import { getSession, useSession } from "next-auth/react";
import { FaHeart, FaPen, FaUser } from "react-icons/fa";
import { GiSodaCan } from "react-icons/gi";
import moment from "moment";

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
  const response = await fetch(`${process.env.NEXT_AUTH_URL}/api/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: context.req.headers.cookie,
    },
  });
  const users = await response.json();
  return {
    props: {
      users: users,
    },
  };
}

const Dashboard = ({ users }) => {
  console.log(users);
  const { data: session } = useSession();
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
      links: [
        { name: "View All", url: "/admin/users" },
        { name: "Update", url: "/admin/users/update" },
      ],
    },
    ,
    {
      title: "Orders",
      links: [{ name: "All orders", url: "/admin/orders" }],
    },
    {
      title: "Newsletter",
      links: [{ name: "All requests", url: "/admin/newsletters" }],
    },
  ];
  return (
    <div className="pt-24 md:pt-24 flex min-h-screen">
      <div className="basis-1/5 shadow-inner py-4 px-8">
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
        <div className="flex items-center justify-between">
          <h1 className="uppercase text-3xl font-bold leading-snug">
            Dashboard
          </h1>
          <h3 className="text-sm font-semibold leading-snug text-gray-400">
            Welcome {session?.user.name}
          </h3>
        </div>
        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="basis-1/4 h-32 rounded-lg border border-gray-200 shadow-md grid place-items-center bg-white">
            <div className="flex items-center gap-4">
              <FaUser className="text-6xl text-[#00afb9] bg-[#e6f7f8] p-4 rounded-lg" />
              <div>
                <p className="text-2xl font-semibold">{users?.length}</p>
                <span className="text-sm text-gray-400 font-medium">Users</span>
              </div>
            </div>
          </div>
          <div className="basis-1/4 h-32 rounded-lg border border-gray-200 shadow-md grid place-items-center bg-white">
            <div className="flex items-center gap-4">
              <FaPen className="text-6xl text-[#ff8700] bg-[#fff3e6] p-4 rounded-lg" />
              <div>
                <p className="text-2xl font-semibold">150</p>
                <span className="text-sm text-gray-400 font-medium">Posts</span>
              </div>
            </div>
          </div>
          <div className="basis-1/4 h-32 rounded-lg border border-gray-200 shadow-md grid place-items-center bg-white">
            <div className="flex items-center gap-4">
              <FaHeart className="text-6xl text-[#ff4d6d] bg-[#ffedf0] p-4 rounded-lg" />
              <div>
                <p className="text-2xl font-semibold">4500</p>
                <span className="text-sm text-gray-400 font-medium">
                  Requests
                </span>
              </div>
            </div>
          </div>
          <div className="basis-1/4 h-32 rounded-lg border border-gray-200 shadow-md grid place-items-center bg-white">
            <div className="flex items-center gap-4">
              <GiSodaCan className="text-6xl text-[#1081e8] bg-[#e7f2fd] p-4 rounded-lg" />
              <div>
                <p className="text-2xl font-semibold">20</p>
                <span className="text-sm text-gray-400 font-medium">
                  Products
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4">
          <table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Joined At</th>
            </tr>
            </thead>
            <tbody>
              {
                users?.map(user => {
                  return <tr>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>{user?.isAdmin?"true":"false"}</td>
                    <td>{moment.utc(user?.createdAt).format("DD-MM-YYYY")}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
