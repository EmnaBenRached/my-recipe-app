import { Heart, Home } from "lucide-react";
import { Link } from "react-router-dom";

const BarSide = () => {
  console.log("BarSide mounted");
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
};

export default BarSide;
const DesktopSidebar = () => {
  return (
    <div className="p-2 border-r min-h-screen w-28 block ">
      <div className="flex flex-col gap-8 sticky top-10 left-0">
        <div className="w-full">
          <img src="/logo.svg" alt="logo" className="block md:hidden" />
          <img src="/mobile-logo.svg" alt="logo" className="hidden md:block" />
        </div>
        <ul className="flex flex-col  md:items-start gap-8">
          <Link to={"/"} className="flex gap-1">
            <Home size={"24"} />
            <span className="font-bold block md:hidden">Home</span>
          </Link>
          <Link to={"/favorites"} className="flex gap-1">
            <Heart size={"24"} />
            <span className="font-bold block md:hidden">Favorites</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

const MobileSidebar = () => {
  return (
    <div
      className="flex justify-center gap-10 border-t fixed w-full
			bottom-0 left-0 bg-white z-10 p-2 sm:hidden
		"
    >
      <Link to={"/"}>
        <Home size={"24"} className="cursor-pointer" />
      </Link>
      <Link to={"/favorites"}>
        <Heart size={"24"} className="cursor-pointer" />
      </Link>
    </div>
  );
};
