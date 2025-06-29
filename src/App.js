import "./App.css";
import Navbar from "./page/Navbar";
import Home from "./page/Home";
import Intro from "./page/Intro";
import Solarc from "./page/Solarc";
import Hard from "./page/Hard.js";
import Test from "./page/Test.js";
import Budget from "./page/Budget.js";
import Team from "./page/Team.js";
import Links from "./page/links.js";
function App() {
  return (
    <div className="App">
      <Navbar />

      <section id="home">
        <Home />
      </section>
      <section id="intro">
        <Intro />
      </section>
      <section id="solarc">
        <Solarc />
      </section>
      <section id="hard">
        <Hard />
      </section>
      <section id="test">
        <Test />
      </section>
      <section id="budget">
        <Budget />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="links">
        <Links />
      </section>
    </div>
  );
}

export default App;
