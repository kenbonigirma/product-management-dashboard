import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useWishlist } from "../context/WishlistContext";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          My Wishlist ❤️
        </h1>

        {wishlist.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            <p className="text-lg text-gray-500">
              Your wishlist is empty.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-40 w-full object-contain"
                />

                <h2 className="mt-4 font-semibold text-gray-900">
                  {product.title}
                </h2>

                <p className="mt-2 font-bold text-purple-600">
                  ${product.price}
                </p>

                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="mt-4 w-full rounded-xl bg-red-100 px-4 py-2 font-semibold text-red-600 hover:bg-red-200"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

