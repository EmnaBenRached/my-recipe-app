import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";

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
