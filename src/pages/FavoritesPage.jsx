import RecipeCard from "../components/RecipeCard";
import { getRandomColor } from "../lib/utils";

const FavoritesPage = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  return (
    <div className="bg-[#faf9fb] p-5 flex-1 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <p className="text-3xl font-bold md:text-5xl my-4">My Favorites</p>

        {favorites.length === 0 && (
          <div className="h-[80vh] flex flex-col items-center gap-4">
            <img src="/404.svg" alt="404" className="h-3/4"></img>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((favorite) => (
            <RecipeCard
              key={favorite.recipe.label}
              recipe={favorite.recipe}
              {...getRandomColor()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
