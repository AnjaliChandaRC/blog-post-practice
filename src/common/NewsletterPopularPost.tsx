const NewsletterPopularPost = () => {
  return (
    <>
      <div className="lg:ps-20 pt-8 sm:pt-0">
        <p className="text-sm font-Roboto text-black font-medium">
          POPULAR POSTS
        </p>
        <p className="text-sm font-Merriweather text-black transition-all duration-300 ease-in-out cursor-pointer hover:underline pt-3 sm:pt-[27px]">
          How To Have Your Cake and Eat It Too: The{" "}
          <br className="hidden xl:block" /> Way of The Chicken Man
        </p>
        <p className="text-sm font-Merriweather text-black transition-all duration-300 ease-in-out cursor-pointer hover:underline pt-3 sm:pt-[22px]">
          My Grandma’s 30-year-old Recipe
        </p>
        <p className="text-sm font-Merriweather text-black transition-all duration-300 ease-in-out cursor-pointer hover:underline pt-3 sm:pt-[22px]">
          What I learned about cooking from Ratatoulie
        </p>
      </div>
    </>
  );
};

export default NewsletterPopularPost;
