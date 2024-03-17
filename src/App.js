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
          <Route path="/zainab-alayande/blog" element={<Blog />} />
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
