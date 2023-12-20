import loader from "../assets/svg/preloader-img.svg";

const PreLoader = () => {
  return (
    <>
      <div className="loader-fullscreen">
        <img className="loader-img" src={loader} alt="loaderImg" />
      </div>
    </>
  );
};

export default PreLoader;
