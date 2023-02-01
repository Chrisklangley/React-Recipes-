import food from "../assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg";
import "./RecipeCard.css";

function RecipeCard({ recipes }) {
  console.log(recipes);
  return (
    <div className="main-recipe-containter">
      <div className="recipe-container">
        <img className="recipe-img" src={food} alt="Burger" />
        <div className="recipe-content">
          <h3 className="recipe-name">{recipes.recipe_name}</h3>
          <button>See More</button>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
