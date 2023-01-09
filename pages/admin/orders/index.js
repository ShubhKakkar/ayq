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
  const response = await fetch(`${process.env.NEXT_AUTH_URL}/api/orders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: context.req.headers.cookie,
    },
  });
  const orders = await response.json();
  return {
    props: {
      orders: orders,
    },
  };
}

const index = ({ orders }) => {
  const router = useRouter();

  const columns = [
    {
      name: "_id",
      selector: (row) => row._id,
    },
    {
      name: "user",
      selector: (row) => row.user,
      sortable: true,
    },
    {
      name: "checkout_id",
      selector: (row) => row.checkout_id,
    },
    {
      name: "amount",
      selector: (row) => row.amount,
      sortable: true,
    },
    {
      name: "customer_email",
      selector: (row) => row.cutomer_email,
      sortable: true,
    },
    {
      name: "customer_name",
      selector: (row) => row.customer_name,
      sortable: true,
    },
    {
      name: "paymentStatus",
      selector: (row) => row.paymentStatus,
    },
    {
      name: "images",
      selector: (row) => row.images,
    },{
      name: "created_at",
      selector: (row) => row.createdAt,
    }
  ];

  const ordersData = orders?.map((user) => {
    {
      return {
        _id: user?._id,
        user: user?.user,
        checkout_id: user?.checkout_id,
        amount: user?.amount,
        cutomer_email: user?.cutomer_email,
        customer_name: user?.customer_name,
        paymentStatus: user?.paymentStatus,
        images: <img src={user?.images[0]} alt="order" className="h-12 w-12 rounded object-cover" />,
        createdAt: moment(user?.createdAt).format("DD/MM/YYYY"),
        // makeAdmin: (
        //   <button
        //     onClick={() => {
        //       handleMakeAdmin(user?._id);
        //     }}
        //     className="text-orange-400 hover:text-orange-500 ease-in-out duration-300 hover:underline"
        //   >
        //     {!user.isAdmin ? "Make Admin" : "Make User"}
        //   </button>
        // ),
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
          exportData(ordersData);
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
        <title>AyQ-Admin/orders</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="AyQ Beverages-Admin/orders" />
      </Head>
      {filter && (
        <div className="my-4">
          <DataTable
            title={`Orders (${ordersData.length})`}
            columns={columns}
            data={ordersData}
            selectableRows
            expandableRows
            expandableRowsComponent={ExpandedComponent}
            responsive
            fixedHeader
            fixedHeaderScrollHeight="300px"
            highlightOnHover
            pointerOnHover
            actions={actionsMemo}
            customStyles={customStyles}
          />
        </div>
      )}
      <div className="my-4">
        <DataTable
          title={`Orders (${ordersData.length})`}
          columns={columns}
          data={ordersData}
          selectableRows
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
