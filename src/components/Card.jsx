import Link from "./Link";

function Card({ title, thumbnail, links }) {
  return (
    <div className="group border-2 border-neutral-500 p-2 flex flex-col justify-between h-80 cardhover text-neutral-600">
      <p className="text-2xl font-bold">{title}</p>
      <div>
        {links &&
          links.map(function ({ label, redirectLink, icon }) {
            return (
              <Link icon={icon} key={label} redirectlink={redirectLink}>
                {label}{" "}
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Card;
