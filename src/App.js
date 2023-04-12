import "./assets/scss/root.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Landing from "./pages/landing";
import Register from "./pages/register";
import Login from "./pages/login";
import Jobs from "./pages/Jobs";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/jobs" element={<Jobs />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
