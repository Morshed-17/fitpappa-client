import CategoryContainer from "@/components/pages/Home/CategoryContainer"
import Banner from "@/components/pages/Home/Banner"
import Benefits from "@/components/pages/Home/Benefits"
import MasonaryImage from "@/components/pages/Home/MasonaryImage"
import FeaturedProducts from "@/components/pages/Home/FeaturedProducts"




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