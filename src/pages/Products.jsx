import CategoryFilter from "../components/CategoryFilter";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { getProducts } from "../services/productService";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);

        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">

        {/* Page Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">
            Explore Our Collection
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Products
          </h1>

          <p className="mt-2 text-gray-500">
            Find something you love from our collection.
          </p>
        </div>

{/* Search and Filter */}
<div className="mb-10 flex flex-col gap-4 sm:flex-row">

  {/* Search */}
  <input
    type="text"
    value={search}
    onChange={(event) => setSearch(event.target.value)}
    placeholder="Search products..."
    className="flex-1 rounded-xl border border-gray-200 bg-white px-5 py-3 outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
  />

  {/* Category */}
  <CategoryFilter
    categories={categories}
    category={category}
    setCategory={setCategory}
  />

</div>
        {/* Loading */}
        {loading && (
          <div className="py-20 text-center">
            <p className="text-lg text-gray-500">
              Loading products...
            </p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="rounded-xl bg-red-50 p-5 text-center text-red-600">
            {error}
          </div>
        )}

        {/* Products */}
        {!loading && !error && (
          <>
            {filteredProducts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <h2 className="text-2xl font-semibold text-gray-800">
                  No products found
                </h2>

                <p className="mt-2 text-gray-500">
                  Try a different search or category.
                </p>
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}