import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import Resume from "./pages/Resume"
import PortfolioWithSuspense from "./pages/Portfolio"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="resume" element={<Resume />} />
          <Route path="portfolio" element={<PortfolioWithSuspense />} />
        </Route>
      </Routes >
    </>
  );
}

export default App;
