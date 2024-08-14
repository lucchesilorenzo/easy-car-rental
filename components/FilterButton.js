"use client";

function FilterButton({ children, filter, handleFilter, activeFilter }) {
  return (
    <button
      className={`hover:bg-stone-100/30 px-5 py-2 ${
        activeFilter === filter ? "bg-stone-100/30" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default FilterButton;
