import ProfilePicture from "./joe_biden.png";

function homePage() {
  const homePageDiv = document.createElement("div");
  homePageDiv.classList.add("page");
  homePageDiv.id = "home";
  homePageDiv.innerHTML = "The best McFortnite burgers in all the lands!";

  homePageDiv.appendChild(profilePic());
  homePageDiv.appendChild(reviewDiv());

  return homePageDiv;
}

function profilePic() {
  const pictureContainer = document.createElement("div");
  pictureContainer.classList.add("picture-container");

  const myProfilePicture = new Image();
  myProfilePicture.src = ProfilePicture;
  myProfilePicture.classList.add("picture");
  myProfilePicture.id = "profile-picture";
  pictureContainer.appendChild(myProfilePicture);

  const chefDescription = document.createElement("div");
  chefDescription.id = "chef-description";
  chefDescription.innerHTML = "Chef Mario";
  pictureContainer.appendChild(chefDescription);

  return pictureContainer;
}

function reviewDiv() {
  const reviewDiv = document.createElement("div");
  reviewDiv.id = "home-review";
  reviewDiv.innerHTML = `"Greatest McFortnite I've ever tasted" - Mr Bean`;

  return reviewDiv;
}

export { homePage };
