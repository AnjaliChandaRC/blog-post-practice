import { SearchIcons } from "../common/Icons";

const Hero = () => {
  return (
    <>
      <div className="container xl:max-w-[1100px] pt-[95px] px-4 sm:px-8 xl:px-0 mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl	font-black font-Merriweather text-blue">
          The Food Ninja Blog
        </h1>
        <p className="text-base sm:text-xl font-Roboto text-gray pt-3">
          A blog about food, experiences, and recipes.
        </p>
        <form className="flex justify-between items-center sm:w-[430px] h-[58px] rounded-md border border-[#DDD] bg-white_off py-5  px-4 sm:px-[28px] mx-auto mt-10 sm:mt-14">
          <input
            type="text"
            id="search"
            placeholder="Search for articles"
            className="w-full focus:outline-none text-lg font-Merriweather text-light_gray placeholder:text-light_gray pe-3"
          />
          <label htmlFor="search" className="cursor-pointer">
            <SearchIcons />
          </label>
        </form>
      </div>
    </>
  );
};

export default Hero;
