import { Menu, X } from "lucide-react";
import { useState } from "react";
import CTAButton from "./CTAButton";

function Header() {
  const pages = ["About", "Specialties", "What to expect", "Contact"];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-theme-beige fixed top-0 right-0 left-0 z-10 rounded-b-xl border-b border-slate-300 pb-4 md:pb-0">
      <div className="container-big container flex flex-row items-center justify-between">
        <div className="font-title text-theme-dark-green text-5xl font-light">
          Haven
        </div>

        {/* MD */}
        <div className="text-theme-dark-green md:text-md hidden flex-row items-center gap-2 font-mono text-sm uppercase md:flex lg:gap-6">
          {pages.map((p, idx) => {
            return (
              <div className="" key={idx}>
                {p}
              </div>
            );
          })}
          <CTAButton text={"Schedule a free call"} color={"green"} />
        </div>

        {/* Mobile Icon */}
        {!isMobileMenuOpen ? (
          <Menu
            className="flex min-w-6 md:hidden"
            width={25}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        ) : (
          <X
            className="flex min-w-6 md:hidden"
            width={25}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        )}
      </div>

      {/* Mobile menu */}
      <div className="flex flex-col gap-2 md:hidden">
        <div className="px-4">
          <CTAButton text={"Schedule a free call"} color={"green"} fullSize />
        </div>
        {isMobileMenuOpen && (
          <div className="text-theme-dark-green md:text-md flex flex-col items-center gap-2 font-mono text-sm uppercase md:hidden">
            {pages.map((p) => {
              return <div className="">{p}</div>;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
