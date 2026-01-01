import Navbar from "@/components/ui/navbar/Navbar"
import HeroSection from "@/components/home/Hero/Hero"

const Home = () => {
  return (
    <div className="font-mon w-full h-full relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default Home