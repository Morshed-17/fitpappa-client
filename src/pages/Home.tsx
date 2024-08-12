import CategoryContainer from "@/components/Category/CategoryContainer"
import Banner from "@/components/Home/Banner"
import Benefits from "@/components/Home/Benefits"
import MasonaryImage from "@/components/Home/MasonaryImage"
import FeaturedProducts from "@/components/Product/FeaturedProducts"



const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner/>
      <CategoryContainer/>
      <FeaturedProducts/>
      <Benefits/>
      <MasonaryImage/>
    </div>
  )
}

export default Home