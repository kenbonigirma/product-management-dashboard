export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      placeholder="Search products..."
      className="flex-1 rounded-xl border border-gray-200 bg-white px-5 py-3 outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
    />
  );
}