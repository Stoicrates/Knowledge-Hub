function Link({ children, icon, redirectlink }) {
  return (
    <a
      target="blank"
      href={redirectlink}
      download
      className="flex items-center gap-2 py-0.5 linkhover"
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}

export default Link;
