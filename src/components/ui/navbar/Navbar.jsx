"use client"
import { useState } from "react"
import NavLogo from "./Logo";
import NavLinksMenu from "./Navlinks";
import NavCTA from "./NavCTA";
import ResMenu from "./ResMenu";
import MobMenu from "./MobMenu";

const Navbar = () => {
  const [ isNavOpen , setNavOpen ] = useState(false);

  return <div className="fixed top-0 left-0 z-1 w-full h-20 flex justify-center items-center py-3 px-8">
    <div className="relative container h-full rounded-full flex justify-between items-center px-7 py-3 bg-glass-50 backdrop-blur-3xl text-white">
      <NavLogo />
      <NavLinksMenu />
      <NavCTA />
      <ResMenu isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
    </div>

    {/* Responsive Menu */}
    <MobMenu isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
  </div>
}

export default Navbar