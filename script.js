const Add_Recip = document.querySelector("#Add_Recip");

Add_Recip.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const nameRecipe = formData.get("nameRecipe");
  const recipeImage = formData.get("recipeImage");
  const food_type = formData.get("food_type");
  const ingredientReq = formData.get("ingredientReq");
  const prepareStep = formData.get("prepareStep");
  const movie = {
    nameRecipe,
    recipeImage,
    food_type,
    ingredientReq,
    prepareStep,
  };

  // append movie to html list
  //   addToMovieList(movie);
  console.log(movie);
  // rest form
  event.target.reset();
});
