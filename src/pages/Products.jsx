import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="p-6">Loading...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-600">{error}</p>;
  }
  const categories = [...new Set(products.map((product) => product.category))];
  const filteredProducts = products.filter((product) => {
  const matchesSearch = product.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesCategory =
    selectedCategory === "all" || product.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

  return (
    <main className="p-6">
      <h1 className="mb-6 text-3xl font-bold">Products</h1>
      <input
  type="text"
  placeholder="Search products..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="mb-6 w-full rounded border p-2"
 />
 <select
  value={selectedCategory}
  onChange={(e) => setSelectedCategory(e.target.value)}
  className="mb-6 rounded border p-2"
>
  <option value="all">All Categories</option>

  {categories.map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ))}
</select>

     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {filteredProducts.length > 0 ? (
    filteredProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))
  ) : (
    <p>No products found.</p>
  )}
</div>
    </main>
  );
}