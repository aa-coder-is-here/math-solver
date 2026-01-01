import { Circle } from "@/components/ui/circle";
import HeroContentSection from "./HeroContentSection";


const HeroSection = () => {
  return (
    <div className="w-full h-screen bg-primary-900 relative overflow-x-hidden md:overflow-y-hidden md:pt-20 md:px-0 pt-32 px-8">
      {/* Top Left Circle Image */}
      <Circle positionClass="top-0 left-0" translate="minus" />

      {/* Wrapper Div */}
      <div className="container h-full mx-auto flex md:flex-row flex-col justify-center items-center py-12">
        {/* Content Side Part */}
        <HeroContentSection />

        {/* Image Side Part */}
        <div className="w-full h-1/2 md:w-1/2 md:h-full relative"></div>
      </div>

      {/* Bottom Right Circle Image */}
      <Circle positionClass="bottom-0 right-0" translate="plus" />
    </div>
  );
};

export default HeroSection;
