import { Link } from "react-router-dom";
import bannerImg from "../../../assets/banner.jpg"

const Banner = () => {
  return (
    <div className="max-w-screen-2xl lg:px-12 mx-auto">
      <Link to="/products">
      <img src={bannerImg} alt="" /></Link>
    </div>
  );
};

export default Banner;
