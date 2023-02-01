import React from "react";
import AdBanner from "./AdBanner";
import RecipeCard from "../RecipeCard";
import SearchBar from "../SearchBar";

import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const HomeScreen = () => {
  const [recipeData, setRecipeData] = useState([]);

  const getRecipes = useCallback(async () => {
    await axios
      .get("https://recipes.devmountain.com/recipes")
      .then((res) => {
        setRecipeData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  return (
    <div>
      <AdBanner />
      <SearchBar recipes={recipeData} />
      <RecipeCard />
    </div>
  );
};

export default HomeScreen;
