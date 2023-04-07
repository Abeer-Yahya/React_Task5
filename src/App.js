import "./assets/scss/root.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Numbers from "./components/numbers";
import Career from "./components/career";
import Contact from "./components/contact";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Numbers />
      <Career />
      <Contact />
    </div>
  );
}

export default App;
