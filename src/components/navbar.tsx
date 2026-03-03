import { Link } from "react-router"

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-[1000] flex w-full items-center justify-between px-8 py-6 mix-blend-difference">
      <Link
        to="/"
        className="massive-text group text-2xl font-black tracking-tighter text-white"
      >
        DEVON{" "}
        <span className="text-neon-pink transition-colors group-hover:text-white">
          COLEBANK
        </span>
      </Link>

      <div className="hidden items-center gap-12 md:flex">
        {["About", "Services", "Portfolio"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="text-xs font-medium tracking-[0.2em] text-white/70 uppercase transition-colors hover:text-white"
          >
            {item}
          </Link>
        ))}
      </div>

      <Link to="/contact" className="btn-industrial">
        Contact
      </Link>
    </nav>
  )
}
