const recipes = [
  {
    id: 1,
    title: "Vegan Lentil Soup",
    image: "./images/avocado.jpg",
    readyInMinutes: 30,
    servings: 4,
    sourceUrl: "https://example.com/vegan-lentil-soup",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
      "red lentils",
      "carrots",
      "onion",
      "garlic",
      "tomato paste",
      "cumin",
      "paprika",
      "vegetable broth",
      "olive oil",
      "salt"
    ],
    pricePerServing: 2.5,
    popularity: 85
  },
  {
    id: 2,
    title: "Vegetarian Pesto Pasta",
    image: "./images/avocado.jpg",
    readyInMinutes: 25,
    servings: 2,
    sourceUrl: "https://example.com/vegetarian-pesto-pasta",
    diets: ["vegetarian"],
    cuisine: "Italian",
    ingredients: [
      "pasta",
      "basil",
      "parmesan cheese",
      "garlic",
      "pine nuts",
      "olive oil",
      "salt",
      "black pepper"
    ],
    pricePerServing: 3.0,
    popularity: 92
  },
  {
    id: 3,
    title: "Gluten-Free Chicken Stir-Fry",
    image: "./images/avocado.jpg",
    readyInMinutes: 20,
    servings: 3,
    sourceUrl: "https://example.com/gluten-free-chicken-stir-fry",
    diets: ["gluten-free"],
    cuisine: "Asian",
    ingredients: [
      "chicken breast",
      "broccoli",
      "bell pepper",
      "carrot",
      "soy sauce (gluten-free)",
      "ginger",
      "garlic",
      "sesame oil",
      "cornstarch",
      "green onion",
      "sesame seeds",
      "rice"
    ],
    pricePerServing: 4.0,
    popularity: 78
  },
  {
    id: 4,
    title: "Dairy-Free Tacos",
    image: "./images/avocado.jpg",
    readyInMinutes: 15,
    servings: 2,
    sourceUrl: "https://example.com/dairy-free-tacos",
    diets: ["dairy-free"],
    cuisine: "Mexican",
    ingredients: [
      "corn tortillas",
      "ground beef",
      "taco seasoning",
      "lettuce",
      "tomato",
      "avocado"
    ],
    pricePerServing: 2.8,
    popularity: 88
  },
  {
    id: 5,
    title: "Middle Eastern Hummus",
    image: "./images/avocado.jpg",
    readyInMinutes: 10,
    servings: 4,
    sourceUrl: "https://example.com/middle-eastern-hummus",
    diets: ["vegan", "gluten-free"],
    cuisine: "Middle Eastern",
    ingredients: [
      "chickpeas",
      "tahini",
      "garlic",
      "lemon juice",
      "olive oil"
    ],
    pricePerServing: 1.5,
    popularity: 95
  },
  {
    id: 6,
    title: "Quick Avocado Toast",
    image: "./images/avocado.jpg",
    readyInMinutes: 5,
    servings: 1,
    sourceUrl: "images/avocado.jpg",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
      "bread",
      "avocado",
      "lemon juice",
      "salt"
    ],
    pricePerServing: 2.0,
    popularity: 90
  },
  {
    id: 7,
    title: "Beef Stew",
    image: "./images/avocado.jpg",
    readyInMinutes: 90,
    servings: 5,
    sourceUrl: "https://example.com/beef-stew",
    diets: [""],
    cuisine: "European",
    ingredients: [
      "beef chunks",
      "potatoes",
      "carrots",
      "onion",
      "garlic",
      "tomato paste",
      "beef broth",
      "red wine",
      "bay leaves",
      "thyme",
      "salt",
      "black pepper",
      "butter",
      "flour",
      "celery",
      "mushrooms"
    ],
    pricePerServing: 5.5,
    popularity: 80
  }
]

document.addEventListener("DOMContentLoaded", () => {
  
  const recipesContainer = document.querySelector("main");
  const filterInputs = document.querySelectorAll(".filter-input");
  const sortInputs = document.querySelectorAll(".sort-input");
  const random = document.getElementById("random");
 

  // Render recipes
  const renderRecipes = (recipes) => {
    recipesContainer.innerHTML = "";

    if (recipes.length === 0) {
      recipesContainer.innerHTML = "<p>No recipes found.</p>";
      return;
    }

    recipes.forEach((recipe) => {
      const recipeCard = document.createElement("div");
      recipeCard.classList.add("recipe-card");

      recipeCard.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}">
        <h2>${recipe.title}</h2>
        <p>Ready in ${recipe.readyInMinutes} minutes</p>
        <p>Servings: ${recipe.servings}</p>
        <a href="${recipe.sourceUrl}" target="_blank">View Recipe</a>
      `;

      recipesContainer.appendChild(recipeCard);
    });
  };

  // filtering and sorting
  const filterAndSortRecipes = () => {
    let filteredRecipes = [...recipes];

    // Get selected filters
    const selectedCuisineInput = document.querySelector("input[name=cuisine]:checked");
    const selectedCuisine = selectedCuisineInput ? selectedCuisineInput.value.toLowerCase() : "all";

    if (selectedCuisine !== "all") {
        filteredRecipes = filteredRecipes.filter(recipe => 
            recipe.cuisine.toLowerCase() === selectedCuisine
        );
    }

    // Sorting logic
    const selectedSortInput = document.querySelector("input[name=sort]:checked");
    const selectedSort = selectedSortInput ? selectedSortInput.value : "none";

    if (selectedSort === "popularity") {
        filteredRecipes.sort((a, b) => b.popularity - a.popularity);
    } else if (selectedSort === "price") {
        filteredRecipes.sort((a, b) => a.pricePerServing - b.pricePerServing);
    } else if (selectedSort === "time") {
        filteredRecipes.sort((a, b) => a.readyInMinutes - b.readyInMinutes);
    }

    renderRecipes(filteredRecipes);
};

  filterInputs.forEach(input => input.addEventListener("change", filterAndSortRecipes));
  sortInputs.forEach(input => input.addEventListener("change", filterAndSortRecipes));

  const showRandomRecipe = () => {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomRecipe = recipes[randomIndex];
    renderRecipes([randomRecipe]);
  };
  random.addEventListener("click", showRandomRecipe);
});


