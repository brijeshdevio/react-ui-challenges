import { CirclePlus, Copy, Sparkle } from "lucide-react";

export default function IosPopup() {
  return (
    <>
      <nav className="w-full bg-zinc-900">
        <div className="flex items-center justify-center p-3">
          <h2 className="text-xl font-iceberg-regular text-white">iOS Popup</h2>
        </div>
      </nav>
      <main className="w-full h-[calc(100vh-52px)] flex items-center justify-center">
        <section className="w-72 shadow-xl">
          <div className="bg-green-600 rounded-2xl overflow-hidden">
            <div className="flex flex-col gap-3 py-3 px-4 bg-zinc-900 rounded-2xl">
              <div className="flex items-center justify-between text-zinc-500">
                <span className="text-xs">Web Designer</span>
                <span className="flex items-center gap-1 text-xs">
                  <Sparkle size={15} />
                  07:15PM
                </span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://placehold.co/100x100?text=JD"
                  className="w-10 rounded-full"
                />
                <div>
                  <h1 className="text-sm text-white">Jonson Doe</h1>
                  <p className="flex items-center gap-1 text-xs text-zinc-500">
                    <span className="block w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    Available for work
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 text-xs">
                <button className="w-full flex items-center justify-center gap-1 text-zinc-200 bg-zinc-700 px-3 py-2 rounded">
                  <CirclePlus size={16} />
                  <span>Hire Me</span>
                </button>
                <button className="w-full flex items-center justify-center gap-1 text-zinc-200 bg-zinc-700 px-3 py-2 rounded">
                  <Copy size={16} />
                  Copy Email
                </button>
              </div>
            </div>
            <div className="text-center py-1">
              <span className="text-xs font-normal">
                Currently High Creativity
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
