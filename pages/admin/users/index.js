import React, { useState } from "react";
import moment from "moment";
import DataTable from "react-data-table-component";
import { getSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Papa from "papaparse";
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

const index = ({ users }) => {
  const router = useRouter();
  // makeAdmin
  const handleMakeAdmin = async (_id) => {
    const response = await fetch(`/api/users/${_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: _id,
      }),
    });
    const res = await response.json();
    if (!res.error) {
      toast.success("User role changed successully");
      router.push("/admin/users");
    } else {
      toast.error(res.error);
    }
  };

  // deleteUser
  const handleDeleteUser = async (_id) => {
    const response = await fetch(`/api/users/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    if (!res.error) {
      toast.success("User deleted successully");
      router.push("/admin/users");
    } else {
      toast.error(res.error);
    }
  };

  // A super simple expandable component.
  function ExpandedComponent(props) {
    // props contain data for the expanded row
    const { data } = props;

    return (
      <pre>
        {JSON.stringify({
          _id: data?._id,
          name: data?.name,
          email: data?._email,
          role: data?.role,
          JoinedAt: moment(data?.createdAt).format("DD/MM/YYYY"),
        })}
      </pre>
    );
  }

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
      name: "Role",
      selector: (row) => row.role,
      sortable: true,
    },
    {
      name: "Joined at",
      selector: (row) => row.joinedAt,
      sortable: true,
    },
    {
      name: "Make Admin",
      selector: (row) => row.makeAdmin,
      show: false,
    },
    {
      name: "Delete User",
      selector: (row) => row.deleteUser,
      show: false,
    },
  ];

  const usersData = users?.map((user) => {
    {
      return {
        _id: user?._id,
        name: user?.name,
        email: user?.email,
        role: user?.isAdmin ? "Admin" : "User",
        joinedAt: moment(user?.createdAt).format("DD/MM/YYYY"),
        makeAdmin: (
          <button
            onClick={() => {
              handleMakeAdmin(user?._id);
            }}
            className="text-orange-400 hover:text-orange-500 ease-in-out duration-300 hover:underline"
          >
            {!user.isAdmin ? "Make Admin" : "Make User"}
          </button>
        ),
        deleteUser: (
          <button
            onClick={() => {
              handleDeleteUser(user?._id);
            }}
            className="text-red-400 hover:text-red-500 ease-in-out duration-300 hover:underline"
          >
            Delete User
          </button>
        ),
      };
    }
  });

  async function exportData(data) {
    // Convert the data to CSV
    const csvData = Papa.unparse(data);

    // Download the CSV file
    const link = document.createElement("a");
    link.href = "data:text/csv;charset=utf-8," + encodeURI(csvData);
    link.download = "data.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const actionsMemo = React.useMemo(
    () => (
      <button
        className="text-sm bg-blue-500 hover:bg-blue-600 ease-in-out duration-300 p-2 text-white rounded shadow-lg"
        onClick={() => {
          exportData(usersData);
        }}
      >
        Export CSV
      </button>
    ),
    []
  );

  const [filter, setFilter] = useState();

  return (
    <div className="min-h-screen md:max-w-7xl md:mx-auto pt-24 md:py-24 px-4 md:px-0">
      <Head>
        <title>AyQ-Admin/users</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="AyQ Beverages-Admin/users" />
      </Head>
      {filter && (
        <div className="my-4">
          <DataTable
            title={`Users (${usersData.length})`}
            columns={columns}
            data={usersData}
            selectableRows
            expandableRows
            expandableRowsComponent={ExpandedComponent}
            responsive
            fixedHeader
            fixedHeaderScrollHeight="300px"
            highlightOnHover
            pointerOnHover
            actions={actionsMemo}
          />
        </div>
      )}
      <div className="my-4">
        <DataTable
          title={`Users (${usersData.length})`}
          columns={columns}
          data={usersData}
          selectableRows
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          responsive
          fixedHeader
          fixedHeaderScrollHeight="300px"
          highlightOnHover
          pointerOnHover
          actions={actionsMemo}
        />
      </div>
    </div>
  );
};

export default index;
