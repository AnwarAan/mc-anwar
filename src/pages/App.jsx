import { lazy } from "react";
import "./App.css";

const Header = lazy(() => import("../layout/Header"));
const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("..//pages/About/About"));
const Contact = lazy(() => import("..//pages/Contact/Contact"));
const Footer = lazy(() => import("../layout/Footer"));

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
