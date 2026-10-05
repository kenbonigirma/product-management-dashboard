import { useWishlist } from "../context/WishlistContext";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="mb-6 text-3xl font-bold">My Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="rounded-lg border bg-white p-4 shadow-sm"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-40 w-full object-contain"
              />

              <h2 className="mt-3 font-semibold">{product.title}</h2>

              <p className="mt-1 font-bold text-purple-600">
                ${product.price}
              </p>

              <button
                onClick={() => removeFromWishlist(product.id)}
                className="mt-4 w-full rounded-xl bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}