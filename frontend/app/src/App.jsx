import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Views/Home";
import BookList from "./Views/BooksList";

function App() {
  return (
    <Router>
      <div className="container p-3">
        <div className="row justify-center mt-4">
          <nav>
            <h3>
              <Link
                className="m-3 nav col-md-5"
                style={{ color: "#1B1A17", cursor: "pointer" }}
                to="/"
              >
                BooksFind
              </Link>
            </h3>
          </nav>
        </div>
        <Routes>
          <Route path="/search" element={<BookList />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
