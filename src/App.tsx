import "./App.css";
import CardsBlog from "./components/CardsBlog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CardsBlog />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
