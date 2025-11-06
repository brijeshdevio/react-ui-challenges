import { Link } from "react-router-dom";
import { Flower, GithubIcon } from "lucide-react";

export function Navbar() {
  return (
    <nav className="w-full bg-zinc-900 border-b border-zinc-700">
      <div className="flex items-center justify-between mx-auto py-3 px-4 sm:px-10">
        <Link
          to="/"
          className="flex items-center gap-1 text-lg sm:text-xl text-zinc-200 font-iceberg-regular"
        >
          <Flower className="text-amber-500" />
          <span>ReactUIChallenges</span>
        </Link>

        <div>
          <Link
            to={"https://github.com/brijeshdevio"}
            target="_blank"
            className="text-zinc-200"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </nav>
  );
}
