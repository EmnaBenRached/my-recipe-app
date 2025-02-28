import { Heart, HeartPulse, Soup } from "lucide-react";
import { useState } from "react";

const RecipeCard = ({ recipe, bg, badge }) => {
  const healthLabels = recipe.healthLabels;
  const [isFavourite, setIsFavourite] = useState(
    localStorage.getItem("favorites")?.includes(recipe.label)
  );

  const addRecipeToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isRecipeAlreadyInFavorites = favorites.some(
      (favorite) => favorite.recipe.label === recipe.label
    );
    if (isRecipeAlreadyInFavorites) {
      favorites = favorites.filter(
        (favorite) => favorite.recipe.label !== recipe.label
      );
      setIsFavourite(false);
    } else {
      favorites.push({ recipe });
      setIsFavourite(true);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };
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
          className="w-full h-full object-cover rounded-md cursor-pointer  "
        />
        <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
          <Soup size={16} />
          <span>{recipe.yield} Servings</span>
        </div>

        <div
          className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer "
          onClick={(e) => {
            e.preventDefault();
            addRecipeToFavorites();
          }}
        >
          {!isFavourite && (
            <Heart
              size={20}
              className="cursor-pointer hover:text-red-500 hover:fill-red-500"
            />
          )}

          {isFavourite && (
            <Heart size={20} className="text-red-500 fill-red-500" />
          )}
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
