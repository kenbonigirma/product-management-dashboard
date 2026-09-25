import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data.slice(0, 4));
      } catch (error) {
        console.error(error);
      }
    }

    loadProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
   <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 px-6 py-24 text-center text-white">
<p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-purple-100">
  Welcome to Nexus Store
</p>

<h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
  Discover What You Love
</h1>

 <p className="mx-auto mt-6 max-w-2xl text-lg text-purple-100">
  Explore our collection and find products that fit your style and needs.
 </p>
        <Link
          to="/products"
className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-semibold text-purple-700 shadow-lg transition hover:bg-purple-50"        >
          Shop Now
        </Link>
      </section>

      {/* Store Introduction */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
          About Nexus Store
        </p>

        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Everything You Need, All in One Place
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-gray-600">
          Explore our collection of products and find something that
          matches what you're looking for.
        </p>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Our Collection
            </p>

            <h2 className="mt-1 text-3xl font-bold text-gray-900">
              Featured Products
            </h2>
          </div>

          <Link
            to="/products"
            className="hidden font-semibold text-blue-600 hover:text-blue-700 sm:block"
          >
            View All →
          </Link>
        </div>

        {products.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            Loading products...
          </p>
        )}

        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/products"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            View All Products →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">
          Ready to Explore?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-gray-300">
          Browse our full collection and discover your next favorite product.
        </p>

        <Link
          to="/products"
          className="mt-7 inline-block rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Explore Products
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 px-6 py-6 text-center text-sm text-gray-400">
        <p>© 2026 Nexus Store. All rights reserved.</p>
      </footer>
    </div>
  );
}