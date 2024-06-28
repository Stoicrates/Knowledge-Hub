import React from "react";

function ProductLogo() {
  return (
    <div className="flex flex-row gap-4">
      <picture>
        <source
          srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4ab/512.webp"
          type="image/webp"
        ></source>
        <img
          src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4ab/512.gif"
          alt="💫"
          width="42"
          height="42"
        ></img>
      </picture>
      <span className="text-4xl text-neutral-50 font-bold">ProductVerse</span>
    </div>
  );
}

export default ProductLogo;
