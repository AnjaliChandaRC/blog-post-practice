const Footer = () => {
  return (
    <>
      <div className="bg-white_off_2" id="about">
        <div className="container xl:max-w-[1100px] py-9 px-4 sm:px-8 xl:px-0 mx-auto text-center">
          <div>
            <ul className="flex justify-center items-center">
              <li className="text-sm font-Merriweather text-brown transition-all duration-300 ease-in-out hover:text-black">
                <a href="#about">About</a>
              </li>
              <li className="text-sm font-Merriweather text-brown px-6 transition-all duration-300 ease-in-out hover:text-black">
                <a href="#privacy-policy">Privacy Policy</a>
              </li>
              <li className="text-sm font-Merriweather text-brown transition-all duration-300 ease-in-out hover:text-black">
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <p className="pt-6 text-sm font-Merriweather text-dark_brown font-bold">
              Copyright © 2021 Food Ninja Blog. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
