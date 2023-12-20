import { useEffect, useState } from "react";
import BackToTop from "../common/BackToTopButton";
import CardsBlog from "../components/CardsBlog";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import Preloader from "../common/PreLoader";
const Main: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // FOR FULL SCREEN LOADING
  useEffect(() => {
    document.body.classList.add("overflow-hidden-while-loading");
    setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("overflow-hidden-while-loading");
    }, 4000);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {loading && <Preloader />}
      <Header />
      <Hero />
      <CardsBlog />
      <Newsletter />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Main;
