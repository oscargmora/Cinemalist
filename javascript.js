let overlay = document.getElementById("overlay");
let myForm = document.getElementById("myForm");
let check = false;

let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function openForm() {
  myForm.style.display = "block";
  overlay.classList.add("active");
}

function closeForm() {
  myForm.style.display = "none";
  overlay.classList.remove("active");
}

window.onclick = function (event) {
  if (event.target == overlay) {
    closeForm();
  }
}

function readCheckbox() {
  for (i = 0; i <= myLibrary.length; ++i) {
    if (read.checked === true) {
      check = true;
    } else {
      check = false;
    }
  }
}

function addBookToLibrary() {
  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let pages = document.getElementById("pages");
  let read = document.getElementById("read");
  let book = new Book(title.value, author.value, pages.value, read.checked);
  readCheckbox();
  myLibrary.push(book);
  console.log(myLibrary);
}


const submitForm = (e) => {
  e.preventDefault();
  closeForm();
  addBookToLibrary();
  displayLibrary();
  document.getElementById("form-container").reset();
}

myForm.onsubmit = submitForm;

function displayLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    let newBookCard = document.createElement("div");
    newBookCard.classList.add("newBookCard");
    let newTitleCard = document.createElement("h1");
    let newAuthorCard = document.createElement("p");
    let newPagesCard = document.createElement("p");
    let newReadCard = document.createElement("button");
    let newRemoveCard = document.createElement("button");
    let newTitle = document.createTextNode(myLibrary[i].title);
    let newAuthor = document.createTextNode(myLibrary[i].author);
    let newPages = document.createTextNode(`${myLibrary[i].pages} pages`);
    let newRemove = document.createTextNode("Remove");
    if (check === true) {
      newReadCard.textContent = "Read";
      newReadCard.classList.add("newReadCardGreen");
      newReadCard.classList.remove("NewReadCardRed")
    } else {
      newReadCard.textContent = "Not Read";
      newReadCard.classList.add("newReadCardRed");
      newReadCard.classList.remove("newReadCardGreen");
    };
    newTitleCard.appendChild(newTitle);
    newAuthorCard.appendChild(newAuthor);
    newPagesCard.appendChild(newPages);
    newRemoveCard.appendChild(newRemove);
    newBookCard.appendChild(newTitleCard);
    newBookCard.appendChild(newAuthorCard);
    newBookCard.appendChild(newPagesCard);
    newBookCard.appendChild(newReadCard);
    newBookCard.appendChild(newRemoveCard);
    newTitleCard.classList.add("newTitleCard");
    newAuthorCard.classList.add("newAuthorCard");
    newPagesCard.classList.add("newPagesCard");
    newReadCard.classList.add("newReadCard");
    newRemoveCard.classList.add("newRemoveCard");
    let currentBookCard = document.getElementById("book-card-container");
    currentBookCard.appendChild(newBookCard);
  }
}

//$("#book-card-container").on("click", ".newReadCard", changeReadStatus());

function changeReadStatus() {
  if (check === true) {
    newReadCard.textContent = "Not Read";
    newReadCard.classList.add("newReadCardRed");
    newReadCard.classList.remove("newReadCardGreen");
  } else if (check === false) {
    newReadCard.textContent = "Read";
    newReadCard.classList.add("newReadCardGreen");
    newReadCard.classList.remove("NewReadCardRed");   
  }
}