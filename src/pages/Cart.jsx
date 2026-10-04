import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            <p className="text-lg text-gray-500">
              Your cart is empty.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-5 rounded-2xl bg-white p-6 shadow-sm sm:flex-row sm:items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-32 w-32 object-contain"
                />

                <div className="flex-1">
                  <h2 className="font-semibold text-gray-900">
                    {item.title}
                  </h2>

                  <p className="mt-2 font-bold text-purple-600">
                    ${item.price}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="rounded-lg bg-gray-200 px-3 py-1 font-bold"
                    >
                      -
                    </button>

                    <span className="font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="rounded-lg bg-gray-200 px-3 py-1 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="rounded-xl bg-red-100 px-4 py-2 font-semibold text-red-600 hover:bg-red-200"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="rounded-2xl bg-white p-6 text-right shadow-sm">
              <p className="text-lg text-gray-600">
                Total
              </p>

              <p className="mt-1 text-3xl font-bold text-purple-600">
                ${total.toFixed(2)}
              </p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}