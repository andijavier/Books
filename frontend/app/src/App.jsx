import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import BookList from "./Views/BooksList";
import Wishlists from "./Views/Wishlists";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/wishlists" element={<Wishlists />} />
      </Routes>
      <Routes>
        <Route path="/search" element={<BookList />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
