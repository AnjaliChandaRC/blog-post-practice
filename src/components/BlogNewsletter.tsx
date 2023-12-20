import BlueBoxSubscribe from "../common/BlueBoxSubscribe";
import NewsletterPopularPost from "../common/NewsletterPopularPost";
import RecentPost from "./RecentPost";

const BlogNewsletter = () => {
  return (
    <>
      <div className="container pb-16 sm:pb-24 xl:pb-[147px] pt-7 sm:pt-10 lg:pt-[56px] px-4 sm:px-8 xl:px-5 mx-auto">
        <div className="lg:flex">
          <div className="xl:ps-[90px] mx-auto">
            <BlueBoxSubscribe />
          </div>
          <div className="sm:w-[400px] mx-auto sm:ps-3 lg:ps-0 sm:pt-5 lg:pt-0">
            <NewsletterPopularPost />
          </div>
          <div className="sm:w-[400px] mx-auto sm:ps-3 lg:ps-0 sm:pt-5 lg:pt-0">
            <RecentPost />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogNewsletter;
