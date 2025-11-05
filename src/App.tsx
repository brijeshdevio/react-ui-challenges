import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "@/components/layout";
import { Home, IosPopup } from "@/pages";
import "@/App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ios-popup" element={<IosPopup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
