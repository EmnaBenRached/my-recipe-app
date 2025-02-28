import { Search } from "lucide-react";
import RecipeCard from "../components/RecipeCard";
import { useEffect, useState } from "react";
import { getRandomColor } from "../lib/utils";

const APP_ID = "5c790098";
const APP_Key = "c721effb649a772446fb4afd6eceb8fb";
const HomePage = () => {
  //useState est un hook , recipes contient la valeur d etat par defaut c est un tableau vide
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setRecipes([]);

    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_Key}&q=${searchQuery}&type=public`,
        {
          headers: {
            "Edamam-Account-User": "5c790098",
          },
        }
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  //useEffect fonctionne apres le premier render, avec empty array elle s execute une seule fois
  useEffect(() => {
    fetchRecipes("chicken");
  }, []);

  const handleSearchRecipe = (e) => {
    e.preventDefault(); // prevent the form from submitting
    const searchQuery = e.target[0].value;
    fetchRecipes(searchQuery);
  };

  return (
    <div className="bg-[#faf9fb] p-5 flex-1">
      <div className="max-w-scrren-lg mx-auto">
        <form onSubmit={handleSearchRecipe}>
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
          {loading &&
            [...Array(9)].map((_, i) => (
              <div key={i} className="flex w-52 flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            ))}

          {!loading &&
            recipes.map(({ recipe }, index) => (
              <RecipeCard key={index} recipe={recipe} {...getRandomColor()} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
