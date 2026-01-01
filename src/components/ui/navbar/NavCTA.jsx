const { navCTA } = require("@/constants/home")

const NavCTA = () => {
  return (
    <button className="hidden md:flex bg-white text-primary-900 font-medium px-7 py-2 border-[1] border-primary-900 rounded-full">
      {navCTA}
    </button>
  )
}

export default NavCTA