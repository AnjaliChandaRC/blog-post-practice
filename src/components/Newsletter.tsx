import { useLocation } from "react-router-dom";
import BlueBoxSubscribe from "../common/BlueBoxSubscribe";
import NewsletterPopularPost from "../common/NewsletterPopularPost";
import RecentPost from "./RecentPost";

const Newsletter = () => {
  const path = useLocation();
  return (
    <>
      {/* <div className="container xl:max-w-[1100px] pb-10 pt-[95px] lg:pt-[170px] px-4 sm:px-8 xl:px-0 mx-auto">
        <div className="sm:flex xl:pt-[95px]">
          <BlueBoxSubscribe/>
          <NewsletterPopularPost />
        </div>
      </div> */}
      <div
        className={`${
          path.pathname === "/"
            ? "pt-20 sm:pt-32 xl:pt-[266px]"
            : "pt-7 sm:pt-10 lg:pt-[56px]"
        } container pb-[50px] px-4 sm:px-8 xl:px-0 mx-auto`}
      >
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

export default Newsletter;
