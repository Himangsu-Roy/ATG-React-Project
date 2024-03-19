import "./App.scss";
import EndBanner from "./components/endBanner/EndBanner";
import Feature from "./components/feature/Feature";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <Testimonial />
      <EndBanner/>
    </>
  );
}

export default App;
