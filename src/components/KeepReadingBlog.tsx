import keepReadingOneImg from "../assets/png/keep-reading-1.png";
import keepReadingTwoImg from "../assets/png/keep-reading-2.png";
import authorImg from "../assets/png/author.png";

const KeepReadingBlog = () => {
  return (
    <>
      <div className="container xl:max-w-[1100px] pt-1 pb-12 px-4 sm:px-8 xl:px-36 mx-auto">
        <h5 className="text-3xl sm:text-4xl font-Merriweather text-light_brown font-bold">
          Keep reading
        </h5>
        <div className="sm:flex items-center pt-8">
          <img src={keepReadingOneImg} alt="keep-reading-1" />
          <div className="sm:ps-9">
            <h6 className="text-xl sm:text-2xl font-Merriweather text-light_brown font-bold pt-4 sm:pt-0">
              Why you don’t need more than 3 pieces of clothing
            </h6>
            <p className="text-dark_black text-lg font-Roboto pt-2">
              Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut
              amet nisl tortor arcu non id nulla mauris neque nisl magna.
            </p>
          </div>
        </div>
        <div className="sm:flex items-center pt-7">
          <img src={keepReadingTwoImg} alt="keep-reading-2" />
          <div className="sm:ps-9">
            <h6 className="text-xl sm:text-2xl font-Merriweather text-light_brown font-bold pt-4 sm:pt-0">
              Why you should cook with your family together everyday
            </h6>
            <p className="text-dark_black text-lg font-Roboto pt-2">
              Rutrum aliquet eros semper nunc. In adipiscing augue sagittis,
              fermentum donec nunc lacinia. Risus in egestas in orci quam.
            </p>
          </div>
        </div>
        <div className="p-5 sm:py-11 sm:px-9 mt-7 sm:mt-12 bg-white_off_2 rounded-[5px] border border-[#ddd]">
          <div className="sm:flex items-center">
            <img className="w-[150px] h-[150px]" src={authorImg} alt="author-img" />
            <div className="sm:ps-9 pt-5 sm:pt-0">
              <h6 className="text-xl sm:text-2xl font-Merriweather text-black">
                Written by George Costanza
              </h6>
              <p className="text-black text-lg font-Roboto pt-2">
                Volutpat cursus id id tincidunt duis id. Urna curabitur ultrices
                molestie bibendum. Purus orci nisl, commodo ipsum, ut urna,
                elementum. Nunc potenti lectus in erat ligula cras. Eget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeepReadingBlog;
