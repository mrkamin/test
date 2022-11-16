/* eslint-disable import/no-mutable-exports */

import displayEmpty from './empty.js';
import { newBooksSection } from './elements.js';

let booksStore = [];

// Create class declaration for bookss in booksStore
class Books {
  constructor(id, bookstitle, booksauthor) {
    this.id = id;
    this.bookstitle = bookstitle;
    this.booksauthor = booksauthor;
  }

   addBooks = () => {
     booksStore.push(this);
   };

  deleatBooks = () => {
    booksStore = booksStore.filter((books) => books.id !== this.id);
  };
}

// Function to add click event to remove button remove books from DOM
const addRemoveListener = (books) => {
  document.getElementById(`remove-${books.id}`).addEventListener('click', (e) => {
    e.preventDefault();
    books.deleatBooks();
    localStorage.setItem('booksStore', JSON.stringify(booksStore));
    if (!booksStore.length) {
      displayEmpty();
    }
    const booksID = document.getElementById(`books-${books.id}`);
    if (booksID.parentNode) {
      booksID.parentNode.removeChild(booksID);
    }
  });
};

// Function to append books to DOM
const appendBooks = (books) => {
  const booksElement = document.createElement('div');
  booksElement.id = `books-${books.id}`;
  booksElement.className = 'books';
  booksElement.innerHTML = `
    <p>${books.bookstitle} by ${books.booksauthor}</p>
    <button id="remove-${books.id}" class="remove"><i class="fa-solid fa-trash-can"></i></button>
  `;

  newBooksSection.appendChild(booksElement);
  if (booksStore.length === 1) {
    displayEmpty();
  }
};

// Check if local storage exists on page load and use data to add bookss to DOM

if (localStorage.getItem('booksStore')) {
  const booksStoreData = JSON.parse(localStorage.getItem('booksStore'));
  Array.from(booksStoreData).forEach((books) => {
    const newBooks = new Books(books.id, books.bookstitle, books.booksauthor);
    booksStore.push(newBooks);
    appendBooks(newBooks);
    addRemoveListener(newBooks);
  });
}

export {
  appendBooks, addRemoveListener, Books, booksStore,
};