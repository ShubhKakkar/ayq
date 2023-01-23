import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Head from "next/head";
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

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
  const { slug } = context.params;
  let product;
  try {
    const res = await fetch(
      `${process.env.NEXT_AUTH_URL}/api/products/${slug}`
    );
    product = await res.json();
  } catch (err) {
    toast.log(err);
  }
  if (!product) {
    return {
      redirect: {
        destination: "/admin/products",
        permanent: false,
      },
    };
  }
  return {
    props: {
      product,
    },
  };
}

const UpdateProduct = ({ product }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const editor = useRef();
  const [name, setName] = useState(product?.name);
  const [slug, setSlug] = useState(product?.slug);
  const [category, setCategory] = useState(product?.category);
  const [images, setImages] = useState(product?.images);
  const [price, setPrice] = useState(product?.price);
  const [brand, setBrand] = useState(product?.brand);
  const [rating, setRating] = useState(product?.rating);
  const [countInStock, setCountInStock] = useState(product?.countInStock);
  const [description, setDescription] = useState(product?.description);
  const [previewImage, setPreviewImage] = useState("");
  const [loading, setLoading] = useState(false);

  function convertToSlug(text) {
    return text.toLowerCase().replace(/\s+/g, "-");
  }

  const handleProductUpdation = async () => {
    setLoading(true);
    if (!name) {
      toast.error("Please enter a title");
      return null;
    }

    if (!category) {
      toast.error("Please select a category");
      return null;
    }

    if (!images) {
      toast.error("Please select an image");
      return null;
    }

    if (!price) {
      toast.error("Please enter a price");
      return null;
    }

    if (!brand) {
      toast.error("Please enter the brand name");
      return null;
    }

    if (!rating) {
      toast.error("Please enter the rating");
      return null;
    }

    if (!rating) {
      toast.error("Please enter the count in stock");
      return null;
    }

    const slugData = slug || convertToSlug(name);

    const categoryData = category.split(/[, ]/).shift();

    const uploadImage = async (image) => {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "uploads");
      data.append("cloud_name", "dndkskewk");
      const ret = await fetch(
        "https://api.cloudinary.com/v1_1/dndkskewk/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const response = await ret.json();
      return response.url;
    };

    const url = await uploadImage(images);

    const response = await fetch(`/api/products/${product._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: product._id,
        name,
        slug: slugData,
        category: categoryData,
        images: url,
        price,
        brand,
        rating,
        countInStock,
        description: description,
      }),
    });
    const res = await response.json();
    setLoading(false);
    if (!res.error) {
      toast.success("Product updated successfully");
      router.push("/admin/products");
    } else {
      toast.error(res.error);
    }
  };

  const handleDeleteProduct = async () => {
    const response = await fetch(`/api/products/${product.slug}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        slug: product.slug,
      }),
    });
    const res = await response.json();
    if (!res.error) {
      toast.success("Post deleted successfully");
      router.push("/admin/products");
    } else {
      toast.error(res.error.message);
    }
  };

  return (
    <div className="pt-24 md:pt-24 min-h-screen mx-auto md:max-w-7xl px-4 md:px-0 md:flex items-start gap-4">
      <Head>
        <title>AyQ-Admin/products</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="AyQ Beverages-Admin/Products" />
      </Head>
      <div className="basis-1/2">
        <h1 className="text-3xl">Update Product</h1>
        <div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="title"
              className="block w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="slug"
              className="block w-full"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="category"
              className="block w-full"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <input
              type="file"
              id="image"
              placeholder="images"
              className="block w-full"
              accept="images/*"
              // value={thumbnail}
              onChange={(e) => {
                setImages(e.target.files[0]);
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onloadend = () => {
                  setPreviewImage(reader.result);
                };
                reader.readAsDataURL(file);
              }}
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="price"
              className="block w-full"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="brand"
              className="block w-full"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <input
              type="number"
              placeholder="count in stock"
              className="block w-full"
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <JoditEditor
              ref={editor}
              value={description}
              tabIndex={1}
              onChange={(description) => setDescription(description)}
              fullWidth
              multiline
              rows={5}
              className="editor-main"
              margin="normal"
            />
          </div>
          <div className="mt-4 mb-4 md:mb-0 flex items-center gap-2">
            <button
              className={loading ? "loading-button" : "primary-button"}
              onClick={handleProductUpdation}
            >
              Submit
            </button>
            <button
              className="text-white py-2 px-4 rounded bg-red-400 hover:bg-red-500 ease-in-out duration-300"
              onClick={handleDeleteProduct}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="basis-1/2">
        <img
          src={previewImage || images[0]}
          alt="product"
          className="h-full w-full bg-auto object-cover card mt-4 md:mt-0"
        />
      </div>
    </div>
  );
};

export default UpdateProduct;
