const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const recipesContainer = document.getElementById("recipesContainer");
const noResults = document.getElementById("noResults");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

const DEMO_RECIPES = [
  {
    id: "demo1",
    title: "Tiramisu",
    category: "Sweet",
    area: "Italian",
    thumb:
      "https://mediterraneantaste.com/wp-content/uploads/2023/11/tiramisu-4583.jpg",
    instructions:
      "Beat egg yolks with sugar → add mascarpone.Whisk egg whites until fluffy → fold into mascarpone mix.Dip ladyfingers in coffee and layer with cream.Repeat layers and dust with cocoa.Chill 4–5 hours before serving.",
    ingredients: ["200g ladyfinger biscuits","250g mascarpone cheese","2 eggs (separated)","3 tbsp sugar","1 cup strong coffee (cooled)","Cocoa powder"],
  },
  {
    id: "demo2",
    title: "Gulab Jamun",
    category: "Main",
    area: "Indian",
    thumb:
      "https://sharmanjainsweets.com/cdn/shop/articles/Untitled_design_eb07557c-e535-4bdf-9063-8a1f1cffa58c.png?v=1751535882",
    instructions:
      "Mix milk powder, maida, baking soda, and ghee.Add milk slowly to make a soft dough.Make small balls without cracks.Heat oil on low flame, fry balls till golden brown.Boil sugar, water, and cardamom for 8–10 mins to make syrup.Soak fried jamuns in warm syrup for at least 30 mins before serving.",
    ingredients: [
      "1 cup milk powder","¼ cup all-purpose flour (maida)","¼ tsp baking soda","2 tbsp ghee","Milk (as needed to make dough)","Oil or ghee (for frying)",
    ],
  },
  {
    id: "demo3",
    title: "Chocolate Pancakes",
    category: "Dessert",
    area: "Global",
    thumb:
      "https://www.chocolatesandchai.com/wp-content/uploads/2024/12/Chocolate-Pancakes-Featured.jpg",
    instructions:
      "Mix batter with cocoa, pan fry pancakes. Serve with chocolate syrup and berries.",
    ingredients: ["Flour", "Cocoa powder", "Milk", "Egg", "Sugar"],
  },
  {
    id: "demo4",
    title: "Flan (Caramel Custard)",
    category: "Main",
    area: "Mexican",
    thumb:
      "https://images.archanaskitchen.com/images/recipes/dessert-recipes/Creme_caramel_custard_pudding_caramel_custard_Recipe_shutterstock_170464598_0a0a249911.jpg",
    instructions:
      "Melt sugar in a pan till golden (caramel). Pour into a baking dish.Blend eggs, condensed milk, evaporated milk, and vanilla.Pour over caramel.Bake in a water bath at 180°C for 45–50 minutes.Cool, refrigerate, and serve chilled",
    ingredients: ["1 cup sugar","4 eggs","1 can sweetened condensed milk","1 can evaporated milk","1 tsp vanilla extract"],
  },
 
  {
    id: "demo6",
    title: "Mochi",
    category: "Main",
    area: "Japan",
    thumb:
      "https://qeleg.com/cdn/shop/articles/20240411054015-peach-mochi.webp?v=1712814467",
    instructions:
      "Mix flour, sugar, and water; steam 15 mins.Knead till smooth.Shape and fill with bean paste.Dust with cornstarch.",
    ingredients: ["1 cup glutinous rice flour","¾ cup water","¼ cup sugar","Cornstarch (for dusting)","Sweet bean paste (filling)"],
  },
  {
    id: "demo5",
    title: "Crème Brûlée",
    category: "sweet",
    area: "France",
    thumb:
      "https://i.ytimg.com/vi/9ADfEUDMGNw/maxresdefault.jpg",
    instructions:
      "Mix yolks, sugar, and vanilla.Heat cream, slowly mix with yolks.Pour into ramekins, bake in water bath (160°C, 35 mins).Cool, sprinkle sugar, caramelize with flame or broiler.",
    ingredients: [
      "2 cups cream","4 egg yolks","¼ cup sugar","1 tsp vanilla","Sugar (for topping)",
    ],
  },
  {
    id: "demo5",
    title: "Baklava",
    category: "Dessert",
    area: "Turkey",
    thumb: "https://idsb.tmgrup.com.tr/ly/uploads/images/2022/03/14/190495.jpg",
    instructions:
      "Layer phyllo sheets with butter and nuts. Cut into diamonds. Bake at 180°C till golden. Pour sugar syrup over hot baklava.",
    ingredients: ["1 pack phyllo pastry","2 cups chopped nuts","1 cup butter (melted)","1 cup sugar","1 cup water",
      "Lemon juice"
    ],
  },
    {
    id: "demo6",
    title: "Brigadeiro",
    category: "Dessert",
    area: "Brazil",
    thumb: "https://www.minischoggi.ch/img/cms/Blog/Brigadeiros/Brigadeiros.jpg",
    instructions:
      "Cook condensed milk, cocoa, and butter till thick. Cool, shape into balls, and roll in chocolate sprinkles.",
    ingredients: ["1 can condensed milk","2 tbsp cocoa powder","1 tbsp butter","Chocolate sprinkles"
    ],
  },
  {
    id: "demo9",
    title: "Pancakes",
    category: "Breakfast",
    area: "American",
    thumb:
      "https://supermancooks.com/wp-content/uploads/2023/03/chocolate-pancakes-featured.jpg",
    instructions:
      "Mix flour, milk, eggs, and sugar. Pan fry small portions until golden.",
    ingredients: ["Flour", "Milk", "Egg", "Sugar", "Butter"],
  },
   
  {
    id: "demo10",
    title: "Brownies",
    category: "Dessert",
    area: "USA",
    thumb: "https://bakingwithgranny.co.uk/wp-content/uploads/2017/01/brownies2.jpg",
    instructions:
      "Melt butter and mix with sugar and eggs. Add flour and cocoa powder. Bake at 180°C for 25 minutes.",
    ingredients: [
      "½ cup butter",
      "1 cup sugar",
      "2 eggs",
      "½ cup flour",
      "⅓ cup cocoa powder"
    ],
  },
    {
    id: "demo9",
    title: "Basbousa",
    category: "Dessert",
    area: "Egypt",
    thumb: "https://www.ruchikrandhap.com/wp-content/uploads/2014/12/CoconutBasbousa6-1.jpg",
    instructions:
      "Mix semolina, sugar, yogurt, butter, and baking powder. Spread in tray and bake till golden. Pour sugar syrup over hot cake.",
    ingredients: [
      "1 cup semolina",
      "½ cup sugar",
      "½ cup yogurt",
      "¼ cup butter",
      "1 tsp baking powder",
      "Sugar syrup"
    ],
  },
    {
    id: "demo7",
    title: "Mango Sticky Rice",
    category: "Dessert",
    area: "Thailand",
    thumb: "https://i.pinimg.com/736x/98/64/d7/9864d7f17189d0053e607c0c4072f330.jpg",
    instructions:
      "Steam rice till soft. Mix coconut milk, sugar, and salt; heat. Pour over rice, rest 10 mins. Serve with mango slices.",
    ingredients: [
      "1 cup glutinous rice",
      "1 cup coconut milk",
      "¼ cup sugar",
      "Pinch of salt",
      "Ripe mango slices"
    ],
  },
  {
    id: "demo17",
    title: "Chocolate Cake",
    category: "Dessert",
    area: "Global",
    thumb:
      "https://ocakes.in/storage/app/public/images/item/item-642f49f6dd33d.jpg",
    instructions: "Mix flour, cocoa, sugar, eggs, bake at 180°C until cooked.",
    ingredients: ["Flour", "Cocoa powder", "Sugar", "Eggs", "Butter"],
  },
   {
    id: "demo11",
    title: "Pavlova",
    category: "Dessert",
    area: "Australia",
    thumb: "https://www.sugarsaltmagic.com/wp-content/uploads/2024/11/The-Perfect-Pavlova-Recipe-2FEAT-500x375.jpg",
    instructions:
      "Beat egg whites till stiff, add sugar slowly, beat till glossy. Bake at low temperature until crisp outside and soft inside. Top with whipped cream and fruits.",
    ingredients: [
      "4 egg whites",
      "1 cup sugar",
      "1 tsp vinegar",
      "1 tsp cornstarch",
      "Whipped cream",
      "Fresh fruits"
    ],
  },
  {
    id: "demo12",
    title: "Churro Ice Cream Sandwich",
    category: "Dessert",
    area: "Spain",
    thumb: "https://cremefilledchurros.com/wp-content/uploads/2024/04/Ice-Cream-Churro-Sandwiches-500x500.webp",
    instructions:
      "Prepare churro dough, pipe into round shapes, and fry until golden.<br> Roll in cinnamon sugar. Sandwich ice cream between two churros and serve immediately.",
    ingredients: [
      "1 cup water",
      "2 tbsp butter",
      "1 cup flour",
      "2 tbsp sugar",
      "Oil (for frying)",
      "Cinnamon sugar",
      "Ice cream (for filling)"
    ],
  },
  {
    id: "demo13",
    title: "Apple Strudel",
    category: "Dessert",
    area: "Austria",
    thumb: "https://www.smalltownwoman.com/wp-content/uploads/2020/09/Apple-Strudel-Preset-Recipe-Card.jpg",
    instructions:
      "Fill thin pastry sheet with apple, sugar, cinnamon, and nuts. Roll tightly, brush with butter, and bake till golden brown.",
    ingredients: [
      "1 sheet puff pastry",
      "3 apples (sliced)",
      "¼ cup sugar",
      "1 tsp cinnamon",
      "¼ cup chopped nuts",
      "2 tbsp butter (melted)"
    ],
  },
  {
    id: "demo14",
    title: "Pastel de Nata",
    category: "Dessert",
    area: "Portugal",
    thumb: "https://liliebakery.fr/wp-content/uploads/2023/01/Recette-pasteis-de-nata-Lilie-Bakery.jpg",
    instructions:
      "Fill puff pastry shells with egg custard mixture. Bake at high temperature until golden and slightly burnt on top.",
    ingredients: [
      "1 sheet puff pastry",
      "4 egg yolks",
      "½ cup sugar",
      "1 cup milk",
      "2 tbsp flour",
      "1 tsp vanilla"
    ],
  },
  {
    id: "demo15",
    title: "Black Forest Cake",
    category: "Dessert",
    area: "Germany",
    thumb: "https://i0.wp.com/thecakes.in/the_cakes/uploads/2022/04/Yummy-Black-Forest-Cake.webp?fit=600%2C600&ssl=1",
    instructions:
      "Bake chocolate sponge layers. Fill with whipped cream and cherries. Layer and top with chocolate shavings.",
    ingredients: [
      "2 cups flour",
      "1 cup cocoa powder",
      "1½ cups sugar",
      "4 eggs",
      "1 cup whipped cream",
      "1 cup cherries",
      "Chocolate shavings"
    ],
  },
  {
    id: "demo16",
    title: "Egg Tart",
    category: "Dessert",
    area: "China",
    thumb: "https://www.allrecipes.com/thmb/03hs7X9jbF9FPlEMxlnVr1LtivU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/885307-076fd16842c44659bd778464357256ad.jpg",
    instructions:
      "Line tart molds with pastry. Pour in egg custard mixture. Bake at 200°C until golden and set.",
    ingredients: [
      "1 sheet puff pastry",
      "3 egg yolks",
      "1 cup milk",
      "½ cup sugar",
      "1 tsp vanilla"
    ],
  },
  {
    id: "demo17",
    title: "Medovik (Honey Cake)",
    category: "Dessert",
    area: "Russia",
    thumb: "https://i.etsystatic.com/41529586/r/il/2d94ec/6705122102/il_340x270.6705122102_n9bp.jpg",
    instructions:
      "Bake thin honey cake layers. Spread sour cream filling between layers. Chill for several hours before serving.",
    ingredients: [
      "3 cups flour",
      "3 tbsp honey",
      "3 eggs",
      "1 cup sugar",
      "1 cup sour cream"
    ],
  },
  {
    id: "demo18",
    title: "Dulce de Leche",
    category: "Dessert",
    area: "Argentina",
    thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2dFtls0Ijw1-3f_uu5WYAHt-aEPwDOk5qCQ&s",
    instructions:
      "Simmer sweetened milk on low flame for 1–2 hours until thick and golden. Stir often to avoid burning.",
    ingredients: [
      "1 can sweetened condensed milk"
    ],
  },
];

// function createCard(recipe) {
//   const card = document.createElement("div");
//   card.className = "card";
//   card.tabIndex = 0;

//   card.innerHTML = `
//     <img src="${recipe.thumb}" alt="${recipe.title}">
//     <div class="card-content">
//       <h3>${recipe.title}</h3>
//       <p>${recipe.category} • ${recipe.area}</p>
//     </div>
//   `;

//   card.addEventListener("click", () => openModal(recipe));
//   card.addEventListener("keypress", (e) => {
//     if (e.key === "Enter") openModal(recipe);
//   });
  

//   return card;
// }

function createCard(recipe) {
  const card = document.createElement("div");
  card.className = "card";
  card.tabIndex = 0;

  card.innerHTML = `
    <img src="${recipe.thumb}" alt="${recipe.title}">
    <div class="card-content">
      <h3>${recipe.title}</h3>
      <p>${recipe.category} • ${recipe.area}</p>
      <button class="info-btn">Info</button>
    </div>
  `;

  // Info button → opens info.html with recipe data
  const infoBtn = card.querySelector(".info-btn");
  infoBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent modal from opening
    localStorage.setItem("selectedRecipe", JSON.stringify(recipe));
    window.open("info.html"); // opens new tab
  });

  

  // Click anywhere else → open modal
  card.addEventListener("click", () => openModal(recipe));
  card.addEventListener("keypress", (e) => {
    if (e.key === "Enter") openModal(recipe);
  });

  return card;
} 

// 88888888


function renderRecipes(list) {
  recipesContainer.innerHTML = "";
  if (list.length === 0) {
    noResults.hidden = false;
    return;
  }
  noResults.hidden = true;
  list.forEach((r) => recipesContainer.appendChild(createCard(r)));
}

function openModal(recipe) {
  modalTitle.textContent = recipe.title;

  const ingredientsHTML = recipe.ingredients
    ? `<h4>Ingredients</h4><ul>${recipe.ingredients
        .map((i) => `<li>${i}</li>`)
        .join("")}</ul>`
    : "";

  modalBody.innerHTML = `
    <img src="${recipe.thumb}" alt="${recipe.title}" style="width:100%; border-radius:8px; margin-bottom:10px;">
    ${ingredientsHTML}
    <h4>Instructions</h4>
    <p>${recipe.instructions}</p>
  `;

  modal.setAttribute("aria-hidden", "false");
}

function closeModalFn() {
  modal.setAttribute("aria-hidden", "true");
  modalTitle.textContent = "";
  modalBody.innerHTML = "";
}

closeModal.addEventListener("click", closeModalFn);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModalFn();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModalFn();
});

function searchRecipes(query) {
  if (!query || query.trim().length < 1) {
    renderRecipes(DEMO_RECIPES);
    return;
  }

  const filtered = DEMO_RECIPES.filter((r) =>
    (r.title + r.category + r.area).toLowerCase().includes(query.toLowerCase())
  );

  renderRecipes(filtered);
}

function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

searchBtn.addEventListener("click", () =>
  searchRecipes(searchInput.value.trim())
);
searchInput.addEventListener(
  "input",
  debounce((e) => searchRecipes(e.target.value), 250)
);

window.addEventListener("load", () => renderRecipes(DEMO_RECIPES));


// 88888888888

