import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import RecipeCard from "./RecipeCard";
function SearchBar({ recipes }) {
  const [search, setSearch] = useState("");
  console.log(recipes);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  let matchingRecipes = recipes.filter((recipe) => {
    let title = recipe.recipe_name.toLowerCase();
    return title === search;
  });

  let searchContent = matchingRecipes.map((recipe) => {
    return <RecipeCard recipes={recipe} />;
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a Recipe"
          ></input>
        </span>
        <button>
          <IoSearch size="2em" color="#DA7635" />
        </button>
      </form>
      {searchContent}
    </div>
  );
}

export default SearchBar;
