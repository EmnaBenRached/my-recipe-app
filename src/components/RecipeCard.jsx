import { Heart, HeartPulse, Soup } from "lucide-react";

const RecipeCard = () => {
  return (
    <div className="flex flex-col rounded-md overflow-hidden p-3 relative bg-[#ecf7d4]">
      <a href="#" className="relative h-32">
        <img
          src="/1.jpg"
          alt="recipe"
          className="w-full h-full object-cover rounded-md cursor-pointer "
        />
        <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
          <Soup size={16} />
          <span>Serving</span>
        </div>

        <div className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer ">
          <Heart
            size={20}
            className="cursor-pointer hover:text-red-500 hover:fill-red-500"
          />
        </div>
      </a>
      <div className="flex mt-1 ">
        <p className="font-bold tracking-wide">Roasted Chiken Recipe</p>
      </div>
      <p className="my-2  "> Turkish kitchen</p>
      <div className="flex mt-auto gap-2 ">
        <div className="flex bg-[#d6f497] items-center p-1  rounded-md  ">
          <HeartPulse size={16} />
          <span className="text-sm tracking-tighter font-semibold">
            Gluten-free
          </span>
        </div>
        <div className="flex bg-[#d6f497] items-center p-1  rounded-md  ">
          <HeartPulse size={16} />
          <span className="text-sm tracking-tighter font-semibold">
            Heart-healthy
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
