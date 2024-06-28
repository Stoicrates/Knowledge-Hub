import React from "react";

function Comet() {
  return (
    <div className="absolute -top-20 -right-20 opacity-90">
      <picture>
        <source
          srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/2604_fe0f/512.webp"
          type="image/webp"
        ></source>
        <img
          src="https://fonts.gstatic.com/s/e/notoemoji/latest/2604_fe0f/512.gif"
          alt="☄"
          width="420"
          height="420"
        ></img>
      </picture>
    </div>
  );
}

export default Comet;
