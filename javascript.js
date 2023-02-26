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
  let book = new Book(title.value, author.value, pages.value, read.value);
  myLibrary.push(book);
  console.log(myLibrary);
}

function submitForm() {
  event.preventDefault();
  closeForm();
  addBookToLibrary();
  displayLibrary();
  document.getElementById("form-container").reset();
}

function displayLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    let newBookCard = document.createElement("div");
    newBookCard.classList.add("newBookCard");
    let newTitleCard = document.createElement("div");
    newTitleCard.classList.add("newTitleCard");
    let newAuthorCard = document.createElement("div");
    newTitleCard.classList.add("newAuthorCard");
    let newPagesCard = document.createElement("div");
    newTitleCard.classList.add("newPagesCard");
    let newReadCard = document.createElement("div");
    newTitleCard.classList.add("newReadCard");
    let newTitle = document.createTextNode(myLibrary[i].title);
    let newAuthor = document.createTextNode(myLibrary[i].author);
    let newPages = document.createTextNode(myLibrary[i].pages);
    let newRead = document.createTextNode(myLibrary[i].read);
    newTitleCard.appendChild(newTitle);
    newAuthorCard.appendChild(newAuthor);
    newPagesCard.appendChild(newPages);
    newReadCard.appendChild(newRead);
    newBookCard.appendChild(newTitleCard);
    newBookCard.appendChild(newAuthorCard);
    newBookCard.appendChild(newPagesCard);
    newBookCard.appendChild(newReadCard);
    let currentBookCard = document.getElementById("book-card-container");
    currentBookCard.appendChild(newBookCard);
  }
}