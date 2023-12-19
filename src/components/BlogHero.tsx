import authorImg from "../assets/png/author-img.png";
import blogImg from "../assets/png/blog-img-1.png";

const BlogHero = () => {
  return (
    <>
      <div className="container xl:max-w-[1100px] pt-10 lg:pt-[99px] px-4 sm:px-8 xl:px-36 mx-auto">
        <button className="text-sm font-Roboto text-white_off_3 font-medium px-[17px] pt-[3px] pb-1 bg-light_blue rounded-[3px]">
          Food Theory
        </button>
        <h4 className="text-6xl	font-bold font-Merriweather text-black pt-2">
          What I Learned About Life and Food Backpacking Around Greece
        </h4>
        <p className="text-sm font-Merriweather text-dark_gray">
          Aug 1, 2021 • 7 min read
        </p>
        <img src={blogImg} alt="blog-img-1" className="pt-4" />
        <div className="flex items-center pt-3 lg:pt-5">
          <img src={authorImg} alt="author-img" />
          <p className="text-sm font-bold font-Merriweather text-black ps-4">
            George Costanza
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogHero;
