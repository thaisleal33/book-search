import Layout from "./Layout";
import Search from "./pages/Search"
import About from "./pages/About";
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
