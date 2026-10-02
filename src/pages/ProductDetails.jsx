import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getProducts } from "../services/productService";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
const { addToCart } = useCart();
const { id } = useParams();
const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const [added, setAdded] = useState(false);
  useEffect(() => {
    async function loadProduct() {
      try {
        const products = await getProducts();

        const foundProduct = products.find(
          (item) => item.id === Number(id)
        );

        setProduct(foundProduct);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  if (loading) {
    return <p className="p-10 text-center">Loading product...</p>;
  }

  if (!product) {
    return <p className="p-10 text-center">Product not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 rounded-2xl bg-white p-8 shadow-sm md:grid-cols-2">
          <div className="flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="h-96 w-full object-contain"
            />
          </div>

          <div>
            <p className="mb-3 text-sm capitalize text-purple-600">
              {product.category}
            </p>

            <h1 className="text-3xl font-bold text-gray-900">
              {product.title}
            </h1>

            <p className="mt-4 text-2xl font-bold text-purple-600">
              ${product.price}
            </p>

            <p className="mt-6 leading-7 text-gray-600">
              {product.description}
            </p>

<button
  onClick={() => {
    addToCart(product);
    setAdded(true);
  }}
  className="mt-8 rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700"
>
  {added ? "Added to Cart ✓" : "Add to Cart"}
</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}