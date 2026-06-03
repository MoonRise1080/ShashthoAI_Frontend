// components/Button.jsx

export default function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full
        rounded-xl
        px-4
        py-3
        bg-blue-600
        hover:bg-blue-700
        transition
        text-white
        font-medium
        ${className}
      `}
    >
      {children}
    </button>
  );
}
