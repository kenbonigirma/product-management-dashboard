export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col rounded-lg border bg-white p-4 shadow-sm transition hover:shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain"
      />
      <h3 className="mt-3 line-clamp-2 font-semibold">{product.title}</h3>
      <p className="text-sm capitalize text-gray-500">{product.category}</p>
      <p className="mt-1 font-bold text-blue-600">${product.price}</p>
      <p className="mb-4 mt-2 line-clamp-3 text-sm text-gray-600">
        {product.description}
      </p>
      <button className="mt-auto rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        View Details
      </button>
    </div>
  );
}