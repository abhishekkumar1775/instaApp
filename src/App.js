import "./App.css";
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
