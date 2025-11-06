import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "@/components";

export function BaseLayout() {
  return (
    <>
      <Navbar />
      <main className="w-full sm:w-[90%] h-[calc(100vh-53px)] overflow-y-scroll mx-auto flex flex-col gap-5 px-3 py-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
