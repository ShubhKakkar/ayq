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
  const response = await fetch(`${process.env.NEXT_AUTH_URL}/api/newsletter`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: context.req.headers.cookie,
    },
  });
  const requests = await response.json();
  return {
    props: {
      requests: requests,
    },
  };
}

const index = ({ requests }) => {
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
      name: "email",
      selector: (row) => row.email,
    },
    {
      name: "shared_email",
      selector: (row) => row.shared_email,
      sortable: true,
    },
    {
      name: "name",
      selector: (row) => row.name,
      sortable: true,
    },{
      name: "created_at",
      selector: (row) => row.createdAt,
    }
  ];

  const requestsData = requests?.map((user) => {
    {
      return {
        _id: user?._id,
        user: user?.user,
        email: user?.email,
        shared_email: user?.shared_email,
        name: user?.name,
        createdAt: moment(user?.createdAt).format("DD/MM/YYYY"),
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
          exportData(requestsData);
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
        <title>AyQ-Admin/Newsletter</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="AyQ Beverages-Admin/Newletter" />
      </Head>
      {filter && (
        <div className="my-4">
          <DataTable
            title={`Orders (${requestsData.length})`}
            columns={columns}
            data={requestsData}
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
          title={`Requests (${requestsData.length})`}
          columns={columns}
          data={requestsData}
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
