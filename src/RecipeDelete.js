import React from "react";

const recipeDeleteButton = ({deleteRecipe, recipeIndex}) => {
     /*function that calls on function passed from parent component 
     Handles when delete button is clicked
     Gets the id of the target element and filters the recipe list by items that are not the same index as the id */
     const handleDeleteClick = ({target}) => {
        const indexToDelete = target.id
          deleteRecipe(indexToDelete)
     }
     return (
          <React.Fragment>
            <button name="delete" id={recipeIndex} onClick={handleDeleteClick}>Delete</button>
          </React.Fragment>
     )
}

export default recipeDeleteButton