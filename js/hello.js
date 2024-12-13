const categoryData = {
    meat: {
        title: "Meat",
        bgColor: "#A76361",
        ingredients: [
            { id: "10001", image: "/img/meats/beef.png", title: "Beef" },
            { id: "10002", image: "/img/meats/chicken.png", title: "Chicken" },
            { id: "10003", image: "/img/meats/lamb.png", title: "Lamb" },
            { id: "10004", image: "/img/meats/turkey.png", title: "Turkey" },
            { id: "10005", image: "/img/meats/veal.png", title: "Veal" },
            { id: "10006", image: "/img/meats/rabbit.png", title: "Rabbit" }
        ]
    },
    pasta: {
        title: "Pasta",
        bgColor: "#EACF91",
        ingredients: [
            { id: "20001", image: "/img/pasta/spaghetti.png", title: "Spaghetti" },
            { id: "20002", image: "/img/pasta/penne.png", title: "Penne" },
            { id: "20003", image: "/img/pasta/fusili.png", title: "Fusili" },
            { id: "20004", image: "/img/pasta/lasagna.png", title: "Lasagna" },
            { id: "20005", image: "/img/pasta/noodles.png", title: "Noodles" },
            { id: "20006", image: "/img/pasta/canneloni.png", title: "Canneloni" }
        ]
    },
    vegetables: {
        title: "Vegetables",
        bgColor: "#6FBA1A",
        ingredients: [
            { id: "30001", image: "/img/vegetables/tomatoes.png", title: "Tomatoes" },
            { id: "30002", image: "/img/vegetables/cucumber.png", title: "Cucumber" },
            { id: "30003", image: "/img/vegetables/carrot.png", title: "Carrot" },
            { id: "30004", image: "/img/vegetables/potatoes.png", title: "Potatoes" },
            { id: "30005", image: "/img/vegetables/brocolli.png", title: "Brocolli" },
            { id: "30006", image: "/img/vegetables/spinach.png", title: "Spinach" },
            { id: "30007", image: "/img/vegetables/zucchini.png", title: "Zucchini" },
            { id: "30008", image: "/img/vegetables/onions.png", title: "Onions" },
            { id: "30009", image: "/img/vegetables/garlic.png", title: "Garlic" }
        ]
    },
    fruits: {
        title: "Fruits",
        bgColor: "#FBCC1C",
        ingredients: [
            { id: "40001", image: "/img/fruits/apples.png", title: "Apples" },
            { id: "40002", image: "/img/fruits/bananas.png", title: "Bananas" },
            { id: "40003", image: "/img/fruits/orange.png", title: "Orange" },
            { id: "40004", image: "/img/fruits/pears.png", title: "Pears" },
            { id: "40005", image: "/img/fruits/strawberry.png", title: "Strawberries" },
            { id: "40006", image: "/img/fruits/grapes.png", title: "Grapes" },
            { id: "40007", image: "/img/fruits/lemon.png", title: "Lemon" },
            { id: "40008", image: "/img/fruits/mango.png", title: "Mango" }
        ]
    },
    legumes: {
        title: "Legumes",
        bgColor: "#B26C61",
        ingredients: [
            { id: "50001", image: "/img/legumes/beans.png", title: "Beans" },
            { id: "50002", image: "/img/legumes/chickpeas.png", title: "Chickpeas" },
            { id: "50003", image: "/img/legumes/lentils.png", title: "Lentils" },
            { id: "50004", image: "/img/legumes/peas.png", title: "Peas" },
            { id: "50005", image: "/img/legumes/soybeans.png", title: "Soybeans" }
        ]
    },
    seafood: {
        title: "Seafood",
        bgColor: "#E14B26",
        ingredients: [
            { id: "60001", image: "/img/seafood/salmon.png", title: "Salmon" },
            { id: "60002", image: "/img/seafood/tuna.png", title: "Tuna" },
            { id: "60003", image: "/img/seafood/shrimp.png", title: "Shrimp" },
            { id: "60004", image: "/img/seafood/mussels.png", title: "Mussels" },
            { id: "60005", image: "/img/seafood/fish.png", title: "Fish" },
            { id: "60006", image: "/img/seafood/octopus.png", title: "Octopus" }
        ]
    },
    nuts: {
        title: "NUTS",
        bgColor: "#F7B268",
        ingredients: [
            { id: "70001", image: "/img/nuts/almonds.png", title: "Almonds" },
            { id: "70002", image: "/img/nuts/walnuts.png", title: "Walnuts" },
            { id: "70003", image: "/img/nuts/cashews.png", title: "Cashews" },
            { id: "70004", image: "/img/nuts/raisins.png", title: "Raisins" },
            { id: "70005", image: "/img/nuts/driedappricotes.png", title: "Dried Apricots" },
            { id: "70006", image: "/img/nuts/dates.png", title: "Dates" }
        ]
    },
    eggs: {
        title: "Eggs",
        bgColor: "#D3AA81",
        ingredients: [
            { id: "80001", image: "/img/eggs/chicken.png", title: "Chicken Eggs" },
            { id: "80002", image: "/img/eggs/quail.png", title: "Quail Eggs" },
            { id: "80003", image: "/img/eggs/strauss.png", title: "Strauss Eggs" }
            
        ]
    },
    grains: {
        title: "GRAINS AND CEREALS",
        bgColor: "#E1A761",
        ingredients: [
            { id: "90001", image: "/img/grains/rice.png", title: "Rice" },
            { id: "90002", image: "/img/grains/oatmeal.png", title: "Oatmeal" },
            { id: "90003", image: "/img/grains/buckwheat.png", title: "Buckwheat" },
            { id: "90004", image: "/img/grains/quinoa.png", title: "Quinoa" },
            { id: "90005", image: "/img/grains/barley.png", title: "Barley" },
            { id: "90006", image: "/img/grains/bulgur.png", title: "Bulgur" }
        ]
    },
    dairy: {
        title: "DAIRY PRODUCTS",
        bgColor: "#F8DD96",
        ingredients: [
            { id: "91001", image: "/img/dairy/milk.png", title: "Milk" },
            { id: "91002", image: "/img/dairy/cream.png", title: "Cream" },
            { id: "91003", image: "/img/dairy/cheese.png", title: "Cheese" },
            { id: "91004", image: "/img/dairy/yogurt.png", title: "Yogurt" },
            { id: "91005", image: "/img/dairy/sourcream.png", title: "Sour cream" },
            { id: "91006", image: "/img/dairy/butter.png", title: "Butter" }
        ]
    },
    sauces: {
        title: "SAUCES AND OILS",
        bgColor: "#E8C708",
        ingredients: [
            { id: "92001", image: "/img/sauces/oliveoil.png", title: "Olive Oil" },
            { id: "92002", image: "/img/sauces/sunflower.png", title: "Sunflower" },
            { id: "92003", image: "/img/sauces/soysauce.png", title: "Soysauce" },
            { id: "92004", image: "/img/sauces/ketchup.png", title: "Ketchup" },
            { id: "92005", image: "/img/sauces/mayonnaise.png", title: "Mayonnaise" },
            { id: "92006", image: "/img/sauces/mustard.png", title: "Mustard" }  
        ]
    },
    baking: {
        title: "BAKING AND SWEETS",
        bgColor: "#B5B1AE",
        ingredients: [
            { id: "93001", image: "/img/baking/flour.png", title: "Flour" },
            { id: "93002", image: "/img/baking/sugar.png", title: "Sugar" },
            { id: "93003", image: "/img/baking/honey.png", title: "Honey" },
            { id: "93004", image: "/img/baking/chocolate.png", title: "Chocolate" },
            { id: "93005", image: "/img/baking/yeast.png", title: "Yeast" },
            { id: "93006", image: "/img/baking/vanilla.png", title: "Vanilla sugar" }
        ]
    },

    // Add more categories similarly
};

let selectedIngredients = [];

document.addEventListener('DOMContentLoaded', () => {
    loadSelectedIngredients(); // Загружаем выбранные ингредиенты из LocalStorage
    highlightSelectedCards(); // Подсвечиваем выбранные карточки
    setupCardClickHandlers(); // Устанавливаем обработчики кликов на карточки
});


function addIngredientToList(ingredient) {
    if (!selectedIngredients.includes(ingredient.id)) {
        selectedIngredients.push(ingredient.id);
        saveSelectedIngredients();
        renderSelectedIngredients(); // Обновляем список на экране
    }
}

function deleteIngredient(id) {
    const index = selectedIngredients.indexOf(id);
    if (index !== -1) {
        selectedIngredients.splice(index, 1);
        saveSelectedIngredients();
        renderSelectedIngredients(); // Обновляем список на экране
    }
}



function saveSelectedIngredients() {
    localStorage.setItem('selectedIngredients', JSON.stringify(selectedIngredients));
}

function loadSelectedIngredients() {
    const storedIngredients = localStorage.getItem('selectedIngredients');
    if (storedIngredients) {
        selectedIngredients = JSON.parse(storedIngredients);
    }
    highlightSelectedCards(); // Подсвечиваем выбранные карточки после загрузки
}



function toggleCardSelection(cardElement, ingredient) {
    // Проверяем, есть ли такой id в массиве selectedIngredients
    const index = selectedIngredients.indexOf(ingredient.id);

    if (index !== -1) {
        // Если уже выбран, удаляем
        selectedIngredients.splice(index, 1);
        cardElement.classList.remove('selected');
    } else {
        // Если не выбран, добавляем
        selectedIngredients.push(ingredient.id);
        cardElement.classList.add('selected');
    }

    saveSelectedIngredients(); // Сохраняем изменения в LocalStorage
}





// Пример привязки клика к карточкам
function setupCardClickHandlers() {
    const cards = document.querySelectorAll('.card'); // Выберите ваши карточки по классу
    cards.forEach(card => {
        const ingredient = {
            id: card.dataset.id, // Уникальный идентификатор карточки
            name: card.dataset.name // Название ингредиента
        };

        card.addEventListener('click', () => {
            toggleCardSelection(card, ingredient);
        });
    });
}
function highlightSelectedCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const ingredientId = card.dataset.id;

        // Проверяем, если id ингредиента в списке selectedIngredients
        if (selectedIngredients.includes(ingredientId)) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    });
}




function showCategoryContent(category, event) {
     // Step 1: Hide all categories
     const allCategories = document.querySelectorAll('.category-content');
     allCategories.forEach(category => {
         category.style.display = 'none'; // Hide all category content sections
     });

      // Step 2: Show the selected category content
    const categoryContentId = `${category}Content`;
    const categoryContent = document.getElementById(categoryContentId);
    if (categoryContent) {
        categoryContent.style.display = 'block'; // Show the clicked category content
    }

    console.log("Function triggered for category:", category);
    
    const data = categoryData[category];
    if (!data) {
        console.error("No data found for the selected category!");
        return;
    }
    const titleId = `${category}Title`;
    
    // Update title and background color
    const titleElement = document.getElementById(titleId);
    titleElement.textContent = data.title;
    titleElement.style.backgroundColor = data.bgColor;

    // Clear and populate cards
    const cardContainerID = `${category}-card-container`;
    const cardsContainer = document.getElementById(cardContainerID);
    cardsContainer.innerHTML = ""; // Clear existing cards

    data.ingredients.forEach(ingredient => {
        const card = document.createElement('div');
        card.classList.add('card');
        // Add data-id and data-name attributes to the card
        card.setAttribute('data-id', ingredient.id);
        card.setAttribute('data-name', ingredient.title);
        card.innerHTML = `
            <img src="${ingredient.image}" alt="${ingredient.title}">
            <p>${ingredient.title}</p>
        `;

            // Если ингредиент уже выбран, применяем стиль
        if (selectedIngredients.includes(ingredient.title)) {
            card.style.backgroundColor = 'lightgray';
        }

        card.addEventListener('click', () => {
            const ingredient = {
                id: card.dataset.id, // Get the unique identifier from the data-id attribute
                title: card.dataset.name // Get the title from the data-name attribute
            };
        
            // Check for valid ingredient object before passing it to toggleCardSelection
            if (ingredient && ingredient.id) {
                toggleCardSelection(card, ingredient);
            } else {
                console.error("Invalid ingredient data on card:", card);
            }
        });

        cardsContainer.appendChild(card);
    });
    highlightSelectedCards(); // Подсвечиваем выбранные карточки после загрузки

    // Reset all circles to default style
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        circle.style.borderColor = ""; 
        circle.style.backgroundColor = "";
    });

    // Highlight the clicked circle
    const clickedCircle = event.currentTarget.querySelector('.circle');
    if (clickedCircle) {
        clickedCircle.style.borderColor = "#04B400"; // Make it green
    }

    // Reset all text colors
    const allTextElements = document.querySelectorAll('.undertext');
    allTextElements.forEach(textElement => {
        textElement.style.color = ''; // Reset text color
    });

    // Change color of the clicked text
    const clickedText = event.currentTarget.querySelector('.undertext');
    clickedText.style.color = '#04B400';

    // Hide all content sections
    const contentSections = document.querySelectorAll('.category-content');
    contentSections.forEach(section => section.style.display = 'none');

    // Show the selected category content
    const contentId = `${category}Content`;
    const contentElement = document.getElementById(contentId);
    if (contentElement) contentElement.style.display = 'block';
}
document.addEventListener('DOMContentLoaded', () => {
    loadSelectedIngredients(); // Загрузить выбранные ингредиенты из LocalStorage
});

function loadSelectedIngredients() {
    const storedIngredients = localStorage.getItem('selectedIngredients');
    if (storedIngredients) {
        selectedIngredients = JSON.parse(storedIngredients);
        renderSelectedIngredients(); // Отобразить добавленные ингредиенты
    }
}

function renderSelectedIngredients() {
    const ingredientsList = document.querySelector('.ingredients-list');
    console.log(ingredientsList)
    if (ingredientsList) {
        ingredientsList.innerHTML = ''; // Очищаем список
        console.log('Rendering ingredients...');
        selectedIngredients.forEach(id => {
            console.log(`Processing ingredient with id: ${id}`);
            const ingredient = findIngredientById(id);
            if (ingredient) {
                console.log(`Found ingredient: ${ingredient.title}`);
                const ingredientItem = document.createElement('div');
                ingredientItem.className = 'ingredient-item';

                const ingredientName = document.createElement('span');
                ingredientName.textContent = ingredient.title;
                ingredientName.className = 'ingredient-name';

                const svgLineContainer = document.createElement('div');
                svgLineContainer.className = 'svg-line-container';

                const svgLine = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svgLine.setAttribute("width", "100%");
                svgLine.setAttribute("height", "2");
                svgLine.setAttribute("viewBox", "0 0 901 2");
                svgLine.setAttribute("fill", "none");

                const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                line.setAttribute("x1", "0.987305");
                line.setAttribute("y1", "1.03271");
                line.setAttribute("x2", "900.987");
                line.setAttribute("y2", "1.03271");
                line.setAttribute("stroke", "black");
                line.setAttribute("stroke-dasharray", "10 10");

                svgLine.appendChild(line);

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.className = 'delete-button';
                deleteButton.onclick = () => {
                    deleteIngredient(id);
                };

                svgLineContainer.appendChild(svgLine);
                ingredientItem.appendChild(ingredientName);
                ingredientItem.appendChild(svgLineContainer);
                ingredientItem.appendChild(deleteButton);

                ingredientsList.appendChild(ingredientItem);
            } else {
                console.error(`Ingredient with id ${id} not found.`);
            }
        });
    } else {
        console.error('The ingredients list container was not found.');
    }
}



function findIngredientById(id) {
    // Используем Object.keys() для перебора категорий
    for (const category of Object.keys(categoryData)) {
        // Ищем ингредиент в каждой категории по id
        const ingredient = categoryData[category].ingredients.find(item => item.id === id);
        if (ingredient) {
            return ingredient;
        }
    }
    return null; // Если ингредиент не найден
}

async function searchByIngredients(ingredients) {
    try {
      const response = await fetch('http://localhost:8000/r', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input:ingredients }),
      });
      console.log(response)
  
      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }
  
      const data = await response.json();
    //   const sampleData = [
    //     { name: "Leek and Mushroom Quiche", matchingPercentage: 100 },
    //     { name: "Cheesy Rosemary Meatball Bake", matchingPercentage: 100 }
    // ];
        localStorage.setItem('receiveddata', JSON.stringify(data));
    
      redirectToPage('/templates/recipeList.html') // Handle/display the recipe data

    } catch (error) {
      console.error('Error searching recipes:', error);
    }
  }
  


function redirectToPage(url) {
    window.location.href = url; // Redirect to the URL passed as an argument
}

