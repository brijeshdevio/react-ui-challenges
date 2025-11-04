import { Link, NavLink } from "react-router-dom";

function ItemLink({
  to,
  text,
  target = "",
}: {
  to: string;
  text: string;
  target?: string;
}) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "text-blue-600" : "")}
        target={target}
      >
        {text}
      </NavLink>
    </li>
  );
}

export default function Navbar() {
  return (
    <nav className="w-full bg-slate-200">
      <div className="w-full sm:w-[90%] flex items-center justify-between mx-auto p-3">
        <Link to="/" className="text-2xl font-bold">
          ReactUIChallenges
        </Link>
        <div>
          <ul>
            <ItemLink
              to="https://github.com/brijeshdevio"
              text="github.com/brijeshdevio"
              target="_blank"
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}
