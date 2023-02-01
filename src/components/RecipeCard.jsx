import "./RecipeCard.css";

function RecipeCard({ recipe }) {
  console.log(recipe.recipe_name);
  return (
    <div className="main-recipe-containter">
      <div className="recipe-container">
        <img className="recipe-img" src={recipe.image_url} alt="Burger" />
        <div className="recipe-content">
          <h3 className="recipe-name">{recipe.recipe_name}</h3>
          <button>See More</button>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
