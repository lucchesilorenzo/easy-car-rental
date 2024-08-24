"use client";

function FilterButton({ children, filter, handleFilter, activeFilter }) {
  return (
    <button
      className={`text-sm lg:text-md hover:bg-stone-100/30 px-3 py-1 lg:px-5 lg:py-2 ${
        activeFilter === filter ? "bg-stone-100/30" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default FilterButton;
