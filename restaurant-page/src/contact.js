import locationPicture from "./restaurant-location.png";

function contactPage() {
  const contactPageDiv = document.createElement("div");
  contactPageDiv.classList.add("page");
  contactPageDiv.id = "contact";
  contactPageDiv.innerHTML = "This is the Contact Page";

  contactPageDiv.append(...contactDetails());
  contactPageDiv.appendChild(locationPic());

  return contactPageDiv;
}

function contactDetails() {
  const phone = document.createElement("div");
  phone.classList.add("contact-details");
  phone.id = "phone-number";
  phone.innerHTML = "📞 123 456 789";

  const address = document.createElement("div");
  address.classList.add("contact-details");
  address.id = "address";
  address.innerHTML = "🏠 Hollywood Boulevard 42, Los Angeles, USA";

  return [phone, address];
}

function locationPic() {
  const pictureContainer = document.createElement("div");
  pictureContainer.classList.add("picture-container");

  const mylocationPicture = new Image();
  mylocationPicture.src = locationPicture;
  mylocationPicture.classList.add("picture");
  mylocationPicture.id = "location-picture";
  pictureContainer.appendChild(mylocationPicture);

  return pictureContainer;
}

export { contactPage };
