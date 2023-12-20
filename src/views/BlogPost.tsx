import BackToTop from "../common/BackToTopButton";
import BlogHero from "../components/BlogHero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import KeepReadingBlog from "../components/KeepReadingBlog";
import Newsletter from "../components/Newsletter";

const BlogPost: React.FC = () => {
  return (
    <>
      <Header />
      <BlogHero />
      <KeepReadingBlog />
      <Newsletter />
      <Footer />
      <BackToTop />
    </>
  );
};

export default BlogPost;
