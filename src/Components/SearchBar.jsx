// components/SearchBar.jsx

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search conversations..."
      value={value}
      onChange={onChange}
      className="
        w-full
        rounded-xl
        border
        border-gray-700
        bg-gray-900
        p-3
        text-white
        outline-none
      "
    />
  );
}
