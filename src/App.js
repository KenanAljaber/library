import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import CreatePage from "./Pages/CreatePage";
import HomePage from "./Pages/HomePage";



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create-book" element={<CreatePage/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
