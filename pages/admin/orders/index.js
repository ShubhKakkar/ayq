import React, { useState } from "react";
import moment from "moment";
import DataTable from "react-data-table-component";
import { getSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Papa from "papaparse";
import Head from "next/head";
import Link from "next/link";

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

const handleAccept = async() => {
  toast.success('Order accepted successfully');
}

const index = ({ orders }) => {
  const router = useRouter();

  const columns = [
    {
      name: "Accept",
      selector: (row) => row.accept,
    },
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
      name: "orders",
      selector: (row) => row.orders,
    },
    {
      name: "line1",
      selector: (row) => row.line1,
    },
    {
      name: "line2",
      selector: (row) => row.line2,
    },{
      name: "city",
      selector: (row) => row.city,
    },
    {
      name: "state",
      selector: (row) => row.state,
    },
    {
      name: "postal_code",
      selector: (row) => row.postal_code,
    },
    {
      name: "country",
      selector: (row) => row.country,
    },
    {
      name: "created_at",
      selector: (row) => row.createdAt,
    },
  ];

  const ordersData = orders?.map((order) => {
    {
      return {
        accept: <button className="primary-button" onClick={handleAccept}>Accept</button>,
        _id: order?._id,
        user: order?.user,
        checkout_id: order?.checkout_id,
        amount: order?.amount,
        cutomer_email: order?.cutomer_email,
        customer_name: order?.customer_name,
        paymentStatus: order?.paymentStatus,
        city: order?.customer_address.city,
        country: order?.customer_address.country,
        line1: order?.customer_address.line1,
        line2: order?.customer_address.line2,
        postal_code: order?.customer_address.postal_code,
        state: order?.customer_address.state,
        // images: (
        //   <img
        //     src={order?.images[0]}
        //     alt="order"
        //     className="h-12 w-12 rounded object-cover"
        //   />
        // ),
        orders: order?.orders.map((product, index) => {
          return (
            <div>
              <div className="flex items-center gap-2 p-1">
                <p className="text-xs">({product.quantity})</p>
                <Link href={`/products/${product.slug}`}>
                  <h3 className="text-xs text-orange-400 hover:text-orange-500 cursor-pointer ease-in-out duration-300">
                    {product.name}
                  </h3>
                </Link>
              </div>
            </div>
          );
        }),

        createdAt: moment(order?.createdAt).format("DD/MM/YYYY"),
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

  console.log(ordersData);

  // A super simple expandable component.
  function ExpandedComponent(props) {
    // props contain data for the expanded row
    const { data } = props;
    return (
      <pre>
        {JSON.stringify({
          _id: data?._id,
          user: data?.user,
          checkout_id: data?.checkout_id,
          amount: data?.amount,
          currency: data?.currency,
          customer_id: data?.customer_id,
          customer_line1: data?.line1,
          customer_line2: data?.line2,
          customer_postal_code: data?.postal_code,
          customer_city: data?.city,
          customer_state: data?.state,
          customer_country: data?.country
        })}
      </pre>
    );
  }

  return (
    <div className="min-h-screen md:max-w-7xl md:mx-auto pt-24 md:py-24 px-4 md:px-0">
      <Head>
        <title>AyQ-Admin/orders</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="AyQ Beverages-Admin/orders" />
      </Head>
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
          expandableRows
          expandableRowsComponent={ExpandedComponent}
        />
      </div>
    </div>
  );
};

export default index;
