import React from "react";
import ProductLogo from "./ProductLogo";

function Footer() {
  return (
    <div className="h-auto bg-neutral-900 p-10 items-center">
      <div className="flex flex-col max-w-7xl mx-auto gap-10">
        <ProductLogo />
        <div className=" text-neutral-500">
          <p>Created and Maintained By Arya Saca</p>
          <p>Lead of Product</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
