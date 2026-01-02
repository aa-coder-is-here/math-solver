import Navbar from "@/components/ui/navbar/Navbar"
import HeroSection from "@/components/home/hero/Hero"
import NewTool from "@/components/home/new-tool/NewTool"

const Home = () => {
  return (
    <div className="font-mon w-full h-full relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <NewTool />
    </div>
  )
}

export default Home