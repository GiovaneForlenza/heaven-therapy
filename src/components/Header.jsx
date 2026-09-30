function Header() {
  const pages = ["About", "Specialties", "What to expect", "Contact"];
  return (
    <div className="bg-beige">
      <div className="container-big flex flex-row items-center justify-between">
        <div className="font-title text-dark-green text-5xl font-light">
          Haven
        </div>
        <div className="text-dark-green flex flex-row items-center gap-6 font-mono">
          {pages.map((p) => {
            return <div className="">{p}</div>;
          })}
          <button className="bg-main-green rounded-full border px-5 py-2 font-mono font-semibold text-white">
            Schedule a free call
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
