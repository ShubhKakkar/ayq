import Head from "next/head";
import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

function StoreLocator({ stores }) {
  const coordinates = stores.map((store) => ({
    latitude: store.location.coordinates[1],
    longitude: store.location.coordinates[0],
  }));
  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 4,
  });
  const [selectedLocation, setSelectedLocation] = useState({});
  return (
    <>
      <div className="px-4 md:px-0 h-[50vh] w-full">
        <ReactMapGL
          mapStyle={"mapbox://styles/shubhamkakkar/clcpab2j3000b14n5pthfcrk6"}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          {...viewport}
          onMove={(e) => setViewport(e.viewport)}
        >
          {stores.map((store) => (
            <div key={store.location.coordinates[0]}>
              <Marker
                longitude={store.location.coordinates[0]}
                latitude={store.location.coordinates[1]}
                anchor="bottom"
              >
                <p
                  role="img"
                  onClick={() => {
                    setSelectedLocation(store);
                  }}
                  className="cursor-pointer text-2xl animate-bounce"
                  aria-label="push-pin"
                >
                  📍
                </p>
              </Marker>

              {/* Popup */}
              {selectedLocation === store ? (
                <Popup
                  onClose={() => {
                    setSelectedLocation({});
                  }}
                  closeOnClick={false}
                  latitude={store.location.coordinates[1]}
                  longitude={store.location.coordinates[0]}
                >
                  <div className="relative h-full w-full">
                    <p className="text-[12px] text-orange-400">email: {store.email}</p>
                    <p className="text-[10px] italic">{store.address}</p>
                    <p className="text-[10px] italic">{store.pin}</p>
                    <p className="text-[10px] flex gap-1">
                      <span>{store.location.coordinates[1]},</span>
                      <span>{store.location.coordinates[0]}</span>
                    </p>
                  </div>
                </Popup>
              ) : (
                false
              )}
            </div>
          ))}
        </ReactMapGL>
      </div>
    </>
  );
}

export default StoreLocator;
