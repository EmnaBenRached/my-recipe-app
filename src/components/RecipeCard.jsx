import { Heart, HeartPulse, Soup } from "lucide-react";

const RecipeCard = ({ recipe, bg, badge }) => {
  const healthLabels = recipe.healthLabels;
  return (
    <div
      className={`flex flex-col rounded-md overflow-hidden p-3 relative ${bg}`}
    >
      <a
        href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
        target="_blank"
        className="relative h-32"
      >
        <img
          src={recipe.image}
          alt="recipe"
          className="w-full h-full object-cover rounded-md cursor-pointer "
        />
        <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
          <Soup size={16} />
          <span>{recipe.yield}</span>
        </div>

        <div className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer ">
          <Heart
            size={20}
            className="cursor-pointer hover:text-red-500 hover:fill-red-500"
          />
        </div>
      </a>
      <div className="flex mt-1 ">
        <p className="font-bold tracking-wide">{recipe.label}</p>
      </div>
      <p className="my-2  ">
        {" "}
        {recipe.cuisineType[0].charAt(0).toUpperCase() +
          recipe.cuisineType[0].slice(1)}
      </p>
      <div className="flex mt-auto gap-2 ">
        {healthLabels.slice(0, 2).map((label, index) => (
          <div
            key={index}
            className={`flex ${badge} items-center p-1  rounded-md `}
          >
            <HeartPulse size={16} />
            <span className="text-sm tracking-tighter font-semibold">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCard;
