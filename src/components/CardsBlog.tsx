import { CardsData } from "../common/Helper";

const CardsBlog = () => {
  return (
    <>
      <div className="container xl:max-w-[1100px] pt-12 lg:pt-5 px-4 sm:px-8 xl:px-0 mx-auto">
        <div className="lg:flex justify-between flex-wrap">
          {CardsData.map((obj, index) => {
            return (
              <a href="/blog-post" key={index} className="lg:w-[47%]">
                <img
                  src={obj.img}
                  alt="card-img-1"
                  className="pt-12 lg:pt-16"
                />
                <div className="flex justify-between flex-col">
                  <div>
                    <button className="text-sm font-Roboto text-white_off_3 font-medium px-[17px] pt-[3px] pb-1 bg-light_blue rounded-[3px] mt-5">
                      {obj.btnText}
                    </button>
                    <h4 className="text-2xl	font-bold font-Merriweather text-black pt-3">
                      {obj.heading}
                    </h4>
                    <p className="text-sm font-Merriweather text-dark_gray pt-2">
                      {obj.time}
                    </p>
                    <p className="text-base font-Roboto text-light_black pt-2 lg:min-h-[104px]">
                      {obj.stanza}
                    </p>
                  </div>
                  <div className="flex items-center pt-3 lg:pt-10">
                    <img src={obj.img2} alt="author-img" />
                    <p className="text-sm font-bold font-Merriweather text-black ps-4">
                      {obj.authorName}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CardsBlog;
