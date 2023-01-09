import Head from "next/head";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { StoreContext } from "../../contexts/store";
import parse from "html-react-parser";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import moment from "moment";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const { slug } = context.params;
  let product;
  try {
    const res = await fetch(
      `${process.env.NEXT_AUTH_URL}/api/products/${slug}`
    );
    product = await res.json();
  } catch (err) {
    console.log(err);
  }
  if (!product) {
    return {
      redirect: {
        destination: "/products",
        permanent: false,
      },
    };
  }
  let reviews;
  try {
    const res = await fetch(
      `${process.env.NEXT_AUTH_URL}/api/reviews/${product._id}`
    );
    reviews = await res.json();
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      product,
      reviews,
    },
  };
}

function SingleProduct({ product, reviews }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [cart, addToCart, removeFromCart, clearCart] = useContext(StoreContext);
  const addCart = () => {
    const existItem = cart.find((item) => {
      return item.slug === product.slug;
    });
    if (existItem) {
      if (product.quantity + 1 > product.countInStock) {
        alert("Sorry. Product out of stock");
        return;
      }
      let quan = existItem.quantity + 1;
      product.quantity = quan;
    } else {
      product.quantity = 1;
    }
    addToCart({ ...product });
  };
  if (!product) {
    return <div>Product not found!</div>;
  }
  const productId = product._id;
  const userId = session?.user?._id;
  const name = session?.user?.name;
  const [rating, setRating] = useState(5);
  const [description, setDescription] = useState("");

  const handleReview = async () => {
    if (!rating) {
      toast.error("No rating specified");
      return;
    }
    if (!description) {
      toast.error("No description specified");
      return;
    }
    const response = await fetch("/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId,
        userId,
        name,
        rating,
        description,
      }),
    });
    const res = await response.json();
    if (!res.error) {
      setDescription("");
      toast.success("Review added successfully");
      router.push(`/products/${product.slug}`);
    } else {
      toast.error(res.error);
    }
  };

  return (
    <div className="px-4 md:px-0">
      <Head>
        <title>AyQ Beverages-{product.slug}</title>
        <meta
          name="description"
          content={`AyQ Beverages website ${product.slug} page`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="p-2">
          <Link href="/products">back to products</Link>
        </div>
        <div className="container md:px-5 py-6 md:py-12 mx-auto">
          <div className="lg:max-w-7xl mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full h-[75vh] object-cover object-center rounded"
              src={product.images[0]}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product.brand}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.name}
              </h1>
              <h2 className="text-xs title-font text-gray-500 tracking-widest my-2">
                Category: {product.category}
              </h2>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {[...Array(parseInt(product.rating))].map((rating, index) => {
                    return (
                      <svg
                        key={index}
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-orange-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    );
                  })}
                  {[...Array(5 - parseInt(product.rating))].map(
                    (rating, index) => {
                      return (
                        <svg
                          key={index}
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 text-orange-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                      );
                    }
                  )}
                  <span className="text-gray-600 ml-3">
                    {product.numReviews} Reviews
                  </span>
                </span>
              </div>
              <div className="leading-relaxed">
                {parse(product.description)}
              </div>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product.price}
                </span>
                {cart.find((item) => {
                  return item.slug === product.slug;
                }) ? (
                  <button
                    className="flex ml-auto text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded pointer-events-none ease-in duration-300"
                    onClick={addCart}
                  >
                    Addded to cart
                  </button>
                ) : (
                  <button
                    className="flex ml-auto text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded ease-in duration-300"
                    onClick={addCart}
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
          {session?.user && (
            <div className="md:max-w-7xl mx-auto">
              <h2 className="text-2xl mt-12 text-black">
                Write a customer Review
              </h2>
              <div className="py-4 mt-4">
                <div>
                  <h3>How much do you like this product?</h3>
                  <input
                    type="range"
                    min={1}
                    max={5}
                    className="focus:ring-0 pr-6 accent-orange-400"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                  />
                  <p>Rating: {rating}</p>
                </div>
                <div>
                  <textarea
                    value={description}
                    placeholder="Write description"
                    className="mt-6 w-full focus:ring-0 h-32"
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <button onClick={handleReview} className="primary-button mt-2">
                  Submit
                </button>
              </div>
              <div>
                {reviews?.map((review) => {
                  return (
                    <div key={review?._id} className="mt-4">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{review?.name}</h3>
                        <p className="text-xs relative top-[2px]">({moment.utc(review?.createdAt).format("DD-MM-YYYY")})</p>
                      </div>
                      <span className="flex items-center mt-1 mb-2">
                          {[...Array(parseInt(review?.rating))].map(
                            (rating, index) => {
                              return (
                                <svg
                                  key={index}
                                  fill="currentColor"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  className="w-4 h-4 text-orange-400"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                              );
                            }
                          )}
                          {[...Array(5 - parseInt(review?.rating))].map(
                            (rating, index) => {
                              return (
                                <svg
                                  key={index}
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  className="w-4 h-4 text-orange-500"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                              );
                            }
                          )}
                        </span>
                      <p className="text-sm">{review?.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default SingleProduct;
