import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Home() {
  const categories = [
    {
      title: "Buttons",
      description:
        "All button design challenges — from basics to advanced styles.",
      path: "/buttons",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Cards",
      description: "Profile, product, and glassmorphic card challenges.",
      path: "/cards",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Modals",
      description: "Modal animations, blur effects, and smooth transitions.",
      path: "/modals",
      color: "from-emerald-500 to-teal-400",
    },
    {
      title: "Inputs",
      description: "Creative form inputs and validation states.",
      path: "/inputs",
      color: "from-orange-500 to-yellow-400",
    },
    {
      title: "Layouts",
      description: "Flex and grid layout practice sections.",
      path: "/layouts",
      color: "from-indigo-500 to-sky-400",
    },
  ];

  return (
    <>
      <header className="text-center">
        <h1 className="text-4xl font-bold text-amber-500 mb-2">
          React UI Challenges
        </h1>
        <p className="text-zinc-400 text-lg">
          Design. Build. Polish. Level up your React + Tailwind UI skills.
        </p>
      </header>
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white shadow-md rounded-2xl overflow-hidden border border-zinc-200"
            >
              <div className={`h-3 w-full bg-gradient-to-r ${cat.color}`} />
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-xl font-semibold text-zinc-800 mb-2">
                    {cat.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <Link
                  to={cat.path}
                  className="mt-5 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-zinc-800 to-zinc-900 text-white text-sm font-medium hover:from-zinc-700 hover:to-zinc-800 transition"
                >
                  Explore {cat.title}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
