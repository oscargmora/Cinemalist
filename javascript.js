let overlay = document.getElementById("overlay");
let myForm = document.getElementById("myForm");
let container = document.getElementById("book-card-container");

let myLibrary = [];

function resetBooksGrid() {
  container.innerHTML = "";
}

class Book {
  constructor(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    id = `${Date.now()}`;
    this.id = id;
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

//Gets form inputs to store book into the array
function addBookToLibrary() {
  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let pages = document.getElementById("pages");
  let read = document.getElementById("read");
  book = new Book(title.value, author.value, pages.value, read.checked);
  myLibrary.push(book);
}

//Create book cards
function displayLibrary() {
  resetBooksGrid();
  for (let i = 0; i < myLibrary.length; i++) {
    let newBookCard = document.createElement("div");
    let newTitleCard = document.createElement("h1");
    let newAuthorCard = document.createElement("p");
    let newPagesCard = document.createElement("p");
    let newReadCard = document.createElement("button");
    let newRemoveCard = document.createElement("button");

    newBookCard.classList.add("newBookCard");
    newTitleCard.classList.add("newTitleCard");
    newAuthorCard.classList.add("newAuthorCard");
    newPagesCard.classList.add("newPagesCard");
    newReadCard.classList.add("newReadCard");
    newRemoveCard.classList.add("newRemoveCard");
    newRemoveCard.setAttribute("data-id", myLibrary[i].id);

    newReadCard.addEventListener("click", changeReadStatus);
    newRemoveCard.addEventListener("click", removeBook);

    let newTitle = document.createTextNode(myLibrary[i].title);
    let newAuthor = document.createTextNode(myLibrary[i].author);
    let newPages = document.createTextNode(`${myLibrary[i].pages} Hours`);
    let newRemove = document.createTextNode("Remove");
    
    //Change id of read button depending on whether or not the checkbox was checked in the form
    if (myLibrary[i].read === true) {
      newReadCard.textContent = "Watched";
      newReadCard.removeAttribute("id");
      newReadCard.setAttribute("id", "newReadCardGreen");
    } else {
      newReadCard.textContent = "Not Watched";
      newReadCard.removeAttribute("id");
      newReadCard.setAttribute("id", "newReadCardRed");
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

    container.appendChild(newBookCard);
    
    //Changes read status whenever read button is pressed
    function changeReadStatus(e) {
      if (e.target.innerText == 'Watched') {
          e.target.textContent = "Not Watched";
          e.target.removeAttribute("id");
          e.target.setAttribute("id", "newReadCardRed");
          myLibrary[i].read = false;
      } else if (e.target.innerText == 'Not Watched') {
          e.target.textContent = "Watched";
          e.target.removeAttribute("id");
          e.target.setAttribute("id", "newReadCardGreen");
          myLibrary[i].read = true;
      }
    }
  };
}

const submitForm = (e) => {
  e.preventDefault();
  closeForm();
  addBookToLibrary();
  displayLibrary();
  document.getElementById("form-container").reset();
}

myForm.onsubmit = submitForm;

function removeBook(e) {
      let objectID = e.target.getAttribute("data-id");
      myLibrary = myLibrary.filter((Book) => Book.id != objectID);
      displayLibrary();
}