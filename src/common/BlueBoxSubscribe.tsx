const BlueBoxSubscribe = () => {
  return (
    <>
      <div className="sm:w-[382px] sm:h-[372px] bg-light_blue rounded-[5px] py-[38px] px-4 sm:px-11 mx-auto lg:mx-0">
        <h2 className="text-2xl font-black font-Merriweather text-white text-center">
          Subscribe To <br className="hidden sm:block" />
           Our Newsletter
        </h2>
        <p className="text-base sm:text-lg font-Roboto text-light_black2 font-medium pt-4 text-center">
          Get weekly food news, articles, and videos delivered to your inbox.
        </p>
        <form className="pt-7">
          <input
            required
            type="email"
            placeholder="Email"
            className="text-base sm:text-lg font-Roboto text-gray font-medium py-3 px-4 w-full sm:w-[288px] sm:h-[52px] rounded-[3px] placeholder:text-gray focus:outline-none"
          />
          <button className="text-base sm:text-lg font-Roboto text-white font-medium pt-[7px] pb-3 px-[18px] bg-blue rounded-[3px] mt-6 transition-all duration-300 ease-in-out common_btn2">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default BlueBoxSubscribe;
