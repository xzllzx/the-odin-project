let myLibrary = [];
let newBook;
let bookId = 0;

const shelf = document.querySelector(".shelf");
const addBookFormDiv = document.querySelector("#addBookFormDiv");
const addBookFormSubmit = document.querySelector(
  `#addBookFormDiv > form > .submit-div > button[type="submit"]`
);

function Book() {
  this.bookId = bookId;
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.read}`;
};

function addBookToLibrary(e) {
  // do stuff here
  // library is an array of Book objects
  let x = document.forms["addBookForm"];

  newBook = Object.create(Book.prototype);
  newBook.bookId = `book${++bookId}`;
  newBook.title = x["book_title"].value;
  newBook.author = x["book_author"].value;
  newBook.numPages = x["book_num_pages"].value;
  newBook.read = x["book_read"].checked;

  console.log(newBook.info());
  myLibrary.push(newBook);
  e.preventDefault();
}

function removeBookFromLibrary(e) {
  const parentId = e.target.parentNode.id;
  console.log(parentId);
  myLibrary = myLibrary.filter((book) => book.bookId != parentId);
  console.log(myLibrary);
  e.target.parentNode.remove();

  e.preventDefault();
}

function toggleBookRead(e) {
  const parentId = e.target.parentNode.id;
  console.log(parentId);
  let bookIndex = myLibrary.findIndex((book) => book.bookId == parentId);
  myLibrary[bookIndex].read = myLibrary[bookIndex].read ? false : true;

  if (myLibrary[bookIndex].read) {
    document.querySelector(`#${parentId} > p:last-of-type`).textContent =
      "Read";
    document.querySelector(`#${parentId} > button:first-of-type`).textContent =
      "Mark as unread";
    e.target.parentNode.classList.add("read");
  } else {
    document.querySelector(`#${parentId} > p:last-of-type`).textContent =
      "Not read yet";
    document.querySelector(`#${parentId} > button:first-of-type`).textContent =
      "Mark as read";
    e.target.parentNode.classList.remove("read");
  }
  e.preventDefault();
}

function displayBooks() {
  // loops through the array and displays each book on the page
  for (let book of myLibrary) {
    let newBookDiv = document.createElement("div");
    newBookDiv.className = "book";
    newBookDiv.id = book.bookId;

    if (shelf.querySelector(`#${newBookDiv.id}`) == null) {
      console.log(book);

      let newBookTitle = document.createElement("h1");
      newBookTitle.textContent = book.title;

      let newBookBy = document.createElement("p");
      newBookBy.textContent = "by";

      let newBookAuthor = document.createElement("h2");
      newBookAuthor.textContent = book.author;

      let newBookPages = document.createElement("p");
      newBookPages.textContent = `${book.numPages} pages`;

      let newBookRead = document.createElement("p");

      let readNewBook = document.createElement("button");
      readNewBook.className = "readBook";
      readNewBook.addEventListener("click", (e) => {
        toggleBookRead(e);
      });

      let removeNewBook = document.createElement("button");
      removeNewBook.className = "removeBook";
      removeNewBook.textContent = "Remove book";
      removeNewBook.addEventListener("click", (e) => {
        removeBookFromLibrary(e);
      });

      if (book.read) {
        newBookRead.textContent = "Read";
        readNewBook.textContent = "Mark as unread";
        newBookDiv.classList.add("read");
      } else {
        newBookRead.textContent = "Not read yet";
        readNewBook.textContent = "Mark as read";
      }

      newBookDiv.appendChild(newBookTitle);
      newBookDiv.appendChild(newBookBy);
      newBookDiv.appendChild(newBookAuthor);
      newBookDiv.appendChild(newBookPages);
      newBookDiv.appendChild(newBookRead);
      newBookDiv.appendChild(readNewBook);
      newBookDiv.appendChild(removeNewBook);
      shelf.appendChild(newBookDiv);
    }
  }
}

function initialSetup() {
  let initialBook = Object.create(Book.prototype);
  initialBook.bookId = "book0";
  initialBook.title = "The Way of Kings";
  initialBook.author = "Brandon Sanderson";
  initialBook.numPages = 1258;
  initialBook.read = true;
  myLibrary.push(initialBook);

  document.querySelector(".readBook").addEventListener("click", (e) => {
    toggleBookRead(e);
  });

  document.querySelector(".removeBook").addEventListener("click", (e) => {
    removeBookFromLibrary(e);
  });

  addBookFormSubmit.addEventListener("click", (e) => {
    addBookToLibrary(e);
    displayBooks();
  });
}

initialSetup();
