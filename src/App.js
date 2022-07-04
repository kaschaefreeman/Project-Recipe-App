import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  /*helper function that hooks into the useState of recipes. 
  It sets the recipe list to have a new recipe added to the end
  Function is called on in the Recipe Create Component*/
  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  /*helper function that into the useState of recipes. 
  It takes filters the list of recipes to exlude the list item by index given
  Function is called on in the Recipe Delete Component rendered by the Recipe List component*/
  const deleteRecipe = (indexToDelete) => {
    const filteredList = recipes.filter(
      (recipe, index) => index !== Number(indexToDelete)
    );
    setRecipes(filteredList);
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate createRecipe={addRecipe} />
    </div>
  );
}

export default App;
