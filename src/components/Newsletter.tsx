import BlueBoxSubscribe from "../common/BlueBoxSubscribe";
import NewsletterPopularPost from "../common/NewsletterPopularPost";

const Newsletter = () => {
  return (
    <>
      <div className="container xl:max-w-[1100px] pb-10 pt-14 sm:pt-[170px] px-4 sm:px-8 xl:px-0 mx-auto">
        <div className="sm:flex lg:pt-[95px]">
          <BlueBoxSubscribe/>
          <NewsletterPopularPost />
        </div>
      </div>
    </>
  );
};

export default Newsletter;
