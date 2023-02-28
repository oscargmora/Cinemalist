let overlay = document.getElementById("overlay");
let myForm = document.getElementById("myForm");

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

function addBookToLibrary() {
  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let pages = document.getElementById("pages");
  let read = document.getElementById("read");
  let book = new Book(title.value, author.value, pages.value, read.checked);
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
    let newTitle = document.createTextNode(myLibrary[i].title);
    let newAuthor = document.createTextNode(myLibrary[i].author);
    let newPages = document.createTextNode(`${myLibrary[i].pages} pages`);
    let newRead = document.createTextNode(myLibrary[i].read);
    newTitleCard.appendChild(newTitle);
    newAuthorCard.appendChild(newAuthor);
    newPagesCard.appendChild(newPages);
    newReadCard.appendChild(newRead);
    newBookCard.appendChild(newTitleCard);
    newBookCard.appendChild(newAuthorCard);
    newBookCard.appendChild(newPagesCard);
    newBookCard.appendChild(newReadCard);
    newTitleCard.classList.add("newTitleCard");
    newAuthorCard.classList.add("newAuthorCard");
    newPagesCard.classList.add("newPagesCard");
    newReadCard.classList.add("newReadCard");
    let currentBookCard = document.getElementById("book-card-container");
    currentBookCard.appendChild(newBookCard);
  }
}

/* Possible checkbox checkers
function readCheckbox() {
  read.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    newReadCard.textContent = "Read";
    newReadCard.classList.add("newReadCardGreen");
    newReadCard.classList.remove("NewReadCardRed")
    console.log("Checked");
  } else {
    newReadCard.textContent = "Not Read";
    newReadCard.classList.add("newReadCardRed");
    newReadCard.classList.remove("newReadCardGreen");
    console.log("Not Checked");
  }
})
}

if (myLibrary.find(e => e.read === false)) {
  newReadCard.textContent = "Not Read";
  newReadCard.classList.add("newReadCardRed");
  newReadCard.classList.remove("newReadCardGreen");
  console.log("Not Checked");
  } else {
    newReadCard.textContent = "Read";
    newReadCard.classList.add("newReadCardGreen");
    newReadCard.classList.remove("NewReadCardRed")
    console.log("Checked");
  }
  */