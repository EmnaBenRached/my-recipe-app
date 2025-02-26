import { Search } from "lucide-react";
import RecipeCard from "../components/RecipeCard";

const HomePage = () => {
  return (
    <div className="bg-[#faf9fb] p-5 flex-1">
      <div className="max-w-scrren-lg mx-auto">
        <form>
          <label className="input shadow-md flex items-center gap-2 ">
            <Search size={"24"} />
            <input
              type="text"
              placeholder="What do you want to cook today?"
              className="text-sm md:text-md grow "
            />
          </label>
        </form>

        <h1 className="font-bold text-3xl md:text-5xl">Recommended Recipes</h1>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight ">
          {" "}
          Popular choices
        </p>

        <div className="grid  gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
