import bannerImg from "../../../assets/banner.jpg"

const Banner = () => {
  return (
    <div className="max-w-screen-2xl lg:px-12 mx-auto">
      <img src={bannerImg} alt="" />
    </div>
  );
};

export default Banner;
