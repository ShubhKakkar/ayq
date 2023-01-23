import Head from "next/head";
import React, { useRef } from "react";
import { getSession } from "next-auth/react";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";
import moment from "moment";
import Papa from "papaparse";
import { useRouter } from "next/router";

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
  let stores;
  try {
    const res = await fetch(`${process.env.NEXT_AUTH_URL}/api/store/findAll`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: context.req.headers.cookie,
      },
    });
    stores = await res.json();
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      stores,
    },
  };
}

const Store = ({ stores }) => {
  const router = useRouter();
  const emailRef = useRef();
  const addressRef = useRef();
  const pinRef = useRef();
  const latitudeRef = useRef();
  const longiudeRef = useRef();

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
          exportData(storesData);
        }}
      >
        Export CSV
      </button>
    ),
    []
  );

  const handleDeleteStore = async (_id) => {
    const res = await fetch(`/api/store/${_id}`, {
      method: "DELETE",
    });
    const response = await res.json();
    if (response.error) {
      toast.error(response.error);
      return;
    } else {
      toast.success("Store deleted successfully");
      router.push('/admin/store');
    }
  };

  const columns = [
    {
      name: "_id",
      selector: (row) => row._id,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Address",
      selector: (row) => row.address,
    },
    {
      name: "Pin",
      selector: (row) => row.pin,
    },
    {
      name: "Latitude",
      selector: (row) => row.latitude,
    },
    {
      name: "Longitude",
      selector: (row) => row.longitude,
    },
    {
      name: "Created at",
      selector: (row) => row.createdAt,
      sortable: true,
    },
    {
      name: "Delete Store",
      selector: (row) => row.deleteStore,
      show: false,
    },
  ];

  const storesData = stores?.map((store) => {
    {
      return {
        _id: store?._id,
        email: store?.email,
        address: store?.address,
        pin: store?.pin,
        latitude: store?.location.coordinates[1],
        longitude: store?.location.coordinates[0],
        createdAt: moment(store?.createdAt).format("DD/MM/YYYY"),
        deleteStore: (
          <button
            onClick={() => {
              handleDeleteStore(store?._id);
            }}
            className="text-red-400 hover:text-red-500 ease-in-out duration-300 hover:underline"
          >
            Delete Store
          </button>
        ),
      };
    }
  });

  const handleStoreCreation = async () => {
    const email = emailRef.current.value;
    const address = addressRef.current.value;
    const pin = pinRef.current.value;
    const latitude = latitudeRef.current.value;
    const longitude = longiudeRef.current.value;
    if (!email || !address || !pin || !latitude || !longitude) {
      toast.error("Information incomplete");
      return;
    }
    const response = await fetch("/api/store/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        address,
        pin,
        latitude,
        longitude,
      }),
    });
    const res = await response.json();
    if (!res.error) {
      toast.success("New store created successfully");
      router.push('/admin/store');
    } else {
      toast.error(res.error);
    }
  };
  return (
    <div className="pt-24 px-4 md:px-0 max-w-7xl mx-auto min-h-[calc(100vh-80px)]">
      <Head>
        <title>AyQ-Admin/store</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="AyQ Beverages-Admin/store" />
      </Head>
      <div>
        <h2 className="text-3xl">Store</h2>
        <div className="mt-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="my-2">
              <input
                type="email"
                name="email"
                ref={emailRef}
                id="email"
                placeholder="email"
                className="hover:ring-0 w-full"
              />
            </div>
            <div className="my-2">
              <input
                type="text"
                name="address"
                ref={addressRef}
                id="address"
                placeholder="address"
                className="hover:ring-0 w-full"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="my-2">
              <input
                type="pin"
                name="pin"
                ref={pinRef}
                id="pin"
                placeholder="pin"
                className="hover:ring-0 w-full"
              />
            </div>
            <div className="my-2">
              <input
                type="latitude"
                name="latitude"
                ref={latitudeRef}
                id="latitude"
                placeholder="latitude"
                className="hover:ring-0 w-full"
              />
            </div>
            <div className="my-2">
              <input
                type="longitude"
                name="longitude"
                ref={longiudeRef}
                id="longitude"
                placeholder="longitude"
                className="hover:ring-0 w-full"
              />
            </div>
          </div>
          <button className="mt-2 primary-button" onClick={handleStoreCreation}>
            Create
          </button>
        </div>
        <div className="my-8">
          <DataTable
            title={`Stores (${storesData.length})`}
            columns={columns}
            data={storesData}
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
    </div>
  );
};

export default Store;
