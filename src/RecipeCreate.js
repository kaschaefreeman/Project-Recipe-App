import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  //set object of empty form values to be called as forms initial state
  const initialRecipeFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [recipeFormData, setRecipeFormData] = useState({
    ...initialRecipeFormData,
  });

  /*Callback function that hooks into the state of the form data
  sets object of form data to add the keys of input box's name with value of inputs value
  Function called on change of form values*/
  const handleRecipeFormChanges = ({ target }) => {
    setRecipeFormData({
      ...recipeFormData,
      [target.name]: target.value,
    });
  };

  /*Callback function that handles when create button is clicked
  It logs the form data set on changes, 
  calls on function on App that sets the recipe list to have form data added to the end,
  then resets the form to it's initial state*/
  const handleRecipeFormSubmit = (event) => {
    event.preventDefault();
    console.log(recipeFormData);
    createRecipe(recipeFormData);
    setRecipeFormData({ ...initialRecipeFormData });
  };

  return (
    <form name="create" onSubmit={handleRecipeFormSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={recipeFormData.name}
                onChange={handleRecipeFormChanges}
                required
              />
            </td>
            <td>
              <input
                type="text"
                name="cuisine"
                id="cuisine"
                placeholder="Cuisine"
                value={recipeFormData.cuisine}
                onChange={handleRecipeFormChanges}
                required
              />
            </td>
            <td>
              <input
                type="text"
                name="photo"
                id="photo"
                placeholder="URL"
                value={recipeFormData.photo}
                onChange={handleRecipeFormChanges}
                required
              />
            </td>
            <td className="wide_column">
              <textarea
                name="ingredients"
                id="ingredients"
                placeholder="Ingredients"
                rows="2"
                value={recipeFormData.ingredients}
                onChange={handleRecipeFormChanges}
                required
              ></textarea>
            </td>
            <td className="wide_column">
              <textarea
                type="textarea"
                name="preparation"
                id="preparation"
                placeholder="Preparation"
                rows="2"
                value={recipeFormData.preparation}
                onChange={handleRecipeFormChanges}
                required
              ></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
