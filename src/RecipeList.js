import React from "react";
import RecipeDelete from "./RecipeDelete";
function RecipeList({ recipes, deleteRecipe }) {
  
  /*Function that maps the list of recipes given into a table row
  Renders the Recipe Delete Component as a button on the last column 
  The index of the list item is passed to mark the id of the button, 
  and the delete Recipe function is passes from the App parent to handle when delete button is clicked*/
  const recipeList = recipes.map(
    ({ name, cuisine, photo, ingredients, preparation }, index) => {
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>{cuisine}</td>
          <td>
            <img src={photo} alt={`${name}`} />
          </td>
          <td className="content_td">
            <p>{ingredients}</p>
          </td>
          <td className="content_td">
            <p>{preparation}</p>
          </td>
          <td>
            <RecipeDelete deleteRecipe={deleteRecipe} recipeIndex={index} />
          </td>
        </tr>
      );
    }
  );

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th className="wide_column">Ingredients</th>
            <th className="wide_column">Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{recipeList}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;

