import { Heart, Home } from "lucide-react";
import { Link } from "react-router-dom";

const DesktopSidebar = () => {
  return (
    <div className="p-3 md:p-5 border-r min-h-screen w-24 md:w-64 hidden sm:block">
      <div className="flex flex-col gap-5 sticky top-5 left-0">
        <div className="w-full">
          <img src="/desktop-logo.svg" alt="logo" className="hidden md:block" />
          <img src="/mobile-logo.svg" alt="logo" className="block md:hidden" />
        </div>
        <ul className="flex flex-col items-center md:items-start gap-8">
          <Link to={"/"} className="flex gap-1">
            <Home size={"24"} />
            <span className="font-bold hidden md:block">Home</span>
          </Link>
          <Link to={"/favorites"} className="flex gap-1">
            <Heart size={"24"} />
            <span className="font-bold hidden md:block">Favorites</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default DesktopSidebar;
