export default function CategoryFilter({
  categories,
  category,
  setCategory,
}) {
  return (
    <select
      value={category}
      onChange={(event) => setCategory(event.target.value)}
      className="rounded-xl border border-gray-200 bg-white px-5 py-3 outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
    >
      {categories.map((item) => (
        <option key={item} value={item}>
          {item === "all" ? "All Categories" : item}
        </option>
      ))}
    </select>
  );
}