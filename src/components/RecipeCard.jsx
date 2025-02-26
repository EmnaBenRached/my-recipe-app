import { Soup } from "lucide-react";

const RecipeCard = () => {
  return (
    <div className="flex flex-col rounded-md bg-orange-400 overflow-hidden p-3 relative">
      <a href="#" className="relative h-32">
        <img
          src="/1.jpg"
          alt="recipe"
          className="w-full h-full object-cover rounded-md cursor-pointer "
        />
        <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
          <Soup size={16} />
          <span>Vegetarian</span>
        </div>
      </a>
    </div>
  );
};

export default RecipeCard;
