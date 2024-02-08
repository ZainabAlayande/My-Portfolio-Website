import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import ContactMe from "./pages/ContactMe";
import Portfolio from "./pages/Portfolio";
import "../src/App.css";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/zainab-alayande" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
