import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import BookDetail from "./Pages/BookDetail";
import CreatePage from "./Pages/CreatePage";
import HomePage from "./Pages/HomePage";
import Store from "./Store/store";



function App() {
  return (
    <div className="App">
      <Store>
      <Router>
        <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create-book" element={<CreatePage/>}/>
        <Route path="book/:bookId" element={<BookDetail/>}/>
      </Routes>
      </Router>
      </Store>
    </div>
  );
}

export default App;
