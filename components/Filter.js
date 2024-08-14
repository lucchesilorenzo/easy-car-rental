"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import FilterButton from "./FilterButton";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams?.get("price") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("price", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  const filterButtons = [
    {
      filter: "all",
      name: "All cars",
    },
    {
      filter: "0-30",
      name: "$0-30",
    },
    {
      filter: "30-60",
      name: "$30-60",
    },
    {
      filter: "60-100",
      name: "$60-100",
    },
    {
      filter: "100-150",
      name: "$100-150",
    },
  ];

  return (
    <div className="flex border border-stone-600 mt-10">
      {filterButtons.map((button) => (
        <FilterButton
          key={button.filter}
          filter={button.filter}
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          {button.name}
        </FilterButton>
      ))}
    </div>
  );
}

export default Filter;
