import ProfilePicture from "./joe_biden.png";

function homePage() {
  const homePageDiv = document.createElement("div");
  homePageDiv.classList.add("page");
  homePageDiv.id = "home";
  homePageDiv.innerHTML = "The best McFortnite burgers in all the lands!";

  homePageDiv.appendChild(profilePic());

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

  return pictureContainer;
}

export { homePage };
