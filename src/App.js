import "./assets/scss/root.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Numbers from "./components/numbers";
import Career from "./components/career";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Numbers />
      <Career />
    </div>
  );
}

export default App;
