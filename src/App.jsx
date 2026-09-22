import ProductCard from "./components/ProductCard";

const testProduct = {
  title: "Test Sneakers",
  category: "shoes",
  price: 49.99,
  description: "A comfy pair of test sneakers for trying things out.",
  image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
};

export default function App() {
  return (
    <div className="p-8">
      <ProductCard product={testProduct} />
    </div>
  );
}