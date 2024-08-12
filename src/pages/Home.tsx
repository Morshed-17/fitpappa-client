import CategoryContainer from "@/components/Category/CategoryContainer"
import Banner from "@/components/Hero/Banner"
import MasonaryImage from "@/components/Home/MasonaryImage"
import FeaturedProducts from "@/components/Product/FeaturedProducts"



const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner/>
      <CategoryContainer/>
      <FeaturedProducts/>
      <MasonaryImage/>
    </div>
  )
}

export default Home