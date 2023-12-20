import BlogHero from "../components/BlogHero";
import BlogNewsletter from "../components/BlogNewsletter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import KeepReadingBlog from "../components/KeepReadingBlog";

const BlogPost: React.FC = () => {
  return (
    <>
      <Header />
      <BlogHero />
      <KeepReadingBlog />
      <BlogNewsletter />
      <Footer />
    </>
  );
};

export default BlogPost;
