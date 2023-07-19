import mcfortniteImage from "./mcfortnite.png";
import tallBurgerImage from "./tall-burger.jpg";

function menuPage() {
  const menuPageDiv = document.createElement("div");
  menuPageDiv.classList.add("page");
  menuPageDiv.id = "menu";

  addAllFood(menuPageDiv);

  return menuPageDiv;
}

function food(image, name, description) {
  const foodContainer = document.createElement("div");
  foodContainer.classList.add("food-container");
  foodContainer.id = name;

  const pictureContainer = document.createElement("div");
  pictureContainer.classList.add("picture-container");

  const myFoodPicture = new Image();
  myFoodPicture.src = image;
  myFoodPicture.classList.add("picture");
  myFoodPicture.id = "food-picture";
  pictureContainer.appendChild(myFoodPicture);

  const foodNameDiv = document.createElement("div");
  foodNameDiv.classList.add("food-name");
  foodNameDiv.innerHTML = name;

  const foodDescriptionDiv = document.createElement("div");
  foodDescriptionDiv.classList.add("food-description");
  foodDescriptionDiv.innerHTML = description;

  foodContainer.append(pictureContainer, foodNameDiv, foodDescriptionDiv);

  return foodContainer;
}

function addAllFood(div) {
  div.append(
    food(
      mcfortniteImage,
      "McFortnite Burger",
      "Hamburger, Salt, Pepper, Toothpicks, a crippling addiction to Fortnite, floss"
    )
  );

  div.append(food(tallBurgerImage, "Mini Burger", "For people on a diet"));

  div.append(
    food(
      mcfortniteImage,
      "McFortnite Burger",
      "Hamburger, Salt, Pepper, Toothpicks, a crippling addiction to Fortnite, floss"
    )
  );

  div.append(food(tallBurgerImage, "Mini Burger", "For people on a diet"));

  div.append(food(tallBurgerImage, "Mini Burger", "For people on a diet"));

  div.append(food(tallBurgerImage, "Mini Burger", "For people on a diet"));

  div.append(food(tallBurgerImage, "Mini Burger", "For people on a diet"));

  div.append(food(tallBurgerImage, "Mini Burger", "For people on a diet"));

  div.append(food(tallBurgerImage, "Mini Burger", "For people on a diet"));

  div.append(food(tallBurgerImage, "Mini Burger", "For people on a diet"));

  div.append(food(tallBurgerImage, "Mini Burger", "For people on a diet"));
}

export { menuPage };
