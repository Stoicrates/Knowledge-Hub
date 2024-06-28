import React from "react";

function Categories({cat}) {
  return (
    <div className="flex flex-row items-center gap-2 after:h-[2px] after:flex-1 after:bg-neutral-50">
      <p className="font-bold">{cat}</p>
    </div>
  );
}

export default Categories;
