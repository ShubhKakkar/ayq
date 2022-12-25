import React from "react";
import ProductCard from "./ProductCard";

const ProductCarousel = () => {
  const CarouselData = [
    {
      _id: 1,
      banner:
        "https://images-eu.ssl-images-amazon.com/images/I/51kjXHh4X5L._AC_UL160_SR160,160_.jpg",
      title:
        "Godox X1-T-N TTL Wireless Flash Trigger Transmitter for Nikon Cameras (Black) Godox X1-T-N TTL Wireless Flash Trigger Transmitter for Nikon Cameras (Black)",
      price: 3965,
      buttonText: "Buy Now",
    },
    {
      _id: 1,
      banner:
        "https://images-eu.ssl-images-amazon.com/images/I/51kjXHh4X5L._AC_UL160_SR160,160_.jpg",
      title:
        "Godox X1-T-N TTL Wireless Flash Trigger Transmitter for Nikon Cameras (Black) Godox X1-T-N TTL Wireless Flash Trigger Transmitter for Nikon Cameras (Black)",
      price: 3965,
      buttonText: "Buy Now",
    },
    {
      _id: 1,
      banner:
        "https://images-eu.ssl-images-amazon.com/images/I/51kjXHh4X5L._AC_UL160_SR160,160_.jpg",
      title:
        "Godox X1-T-N TTL Wireless Flash Trigger Transmitter for Nikon Cameras (Black) Godox X1-T-N TTL Wireless Flash Trigger Transmitter for Nikon Cameras (Black)",
      price: 3965,
      buttonText: "Buy Now",
    },
    {
      _id: 1,
      banner:
        "https://images-eu.ssl-images-amazon.com/images/I/51kjXHh4X5L._AC_UL160_SR160,160_.jpg",
      title:
        "Godox X1-T-N TTL Wireless Flash Trigger Transmitter for Nikon Cameras (Black) Godox X1-T-N TTL Wireless Flash Trigger Transmitter for Nikon Cameras (Black)",
      price: 3965,
      buttonText: "Buy Now",
    },
    {
      _id: 1,
      banner:
        "https://images-eu.ssl-images-amazon.com/images/I/51kjXHh4X5L._AC_UL160_SR160,160_.jpg",
      title:
        "Godox X1-T-N TTL Wireless Flash Trigger Transmitter for Nikon Cameras (Black) Godox X1-T-N TTL Wireless Flash Trigger Transmitter for Nikon Cameras (Black)",
      price: 3965,
      buttonText: "Buy Now",
    },
    {
      _id: 1,
      banner:
        "https://images-eu.ssl-images-amazon.com/images/I/51kjXHh4X5L._AC_UL160_SR160,160_.jpg",
      title:
        "Godox X1-T-N TTL Wireless Flash Trigger Transmitter for Nikon Cameras (Black) Godox X1-T-N TTL Wireless Flash Trigger Transmitter for Nikon Cameras (Black)",
      price: 3965,
      buttonText: "Buy Now",
    },
    {
      _id: 1,
      banner:
        "https://images-eu.ssl-images-amazon.com/images/I/51kjXHh4X5L._AC_UL160_SR160,160_.jpg",
      title:
        "Godox X1-T-N TTL Wireless Flash Trigger Transmitter for Nikon Cameras (Black) Godox X1-T-N TTL Wireless Flash Trigger Transmitter for Nikon Cameras (Black)",
      price: 3965,
      buttonText: "Buy Now",
    },
  ];
  return (
    <div className="flex items-center gap-4 overflow-x-scroll product__scrollbar">
      {CarouselData.map((product) => {
        return (
          <div key={product._id}>
            <ProductCard data={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductCarousel;
