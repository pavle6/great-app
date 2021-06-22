import "./App.scss";
import TopNavigation from "./components/TopNavigation";
import NavBar from "./components/NavBar";
import Slider from "./components/Slider";
import About from "./components/About";
import OurWork from "./components/OurWork";
import OurHistory from "./components/OurHistory";
import Creativity from "./components/Creativity";
import Computer from "./components/Computer";
import Numbers from "./components/Numbers";
import Action from "./components/Action";

function App() {
  return (
    <div className="App">
      <header className="header">
        <TopNavigation></TopNavigation>
      </header>
      <section className="nav-bar">
        <NavBar></NavBar>
      </section>
      <section className="slider">
        <Slider></Slider>
      </section>
      <section className="about" id="about">
        <About></About>
      </section>
      <section className="our-work" id="services">
        <OurWork></OurWork>
      </section>
      <section className="our-history">
        <OurHistory></OurHistory>
      </section>
      <section className="creativity">
        <Creativity></Creativity>
      </section>
      <section className="computer" id="blog">
        <Computer></Computer>
      </section>
      <section className="numbers">
        <Numbers></Numbers>
      </section>
      <section className="action">
        <Action></Action>
      </section>
    </div>
  );
}

export default App;
