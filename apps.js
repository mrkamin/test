import userId from './modules/user-id.js';
import newLoad from './modules/loader.js';
import {
  newNewBtn, newContactBtn, newListBtn, newForm, newListSection, newAddSection, newContactSection, newSectionOne, newTime,
} from './modules/elements.js';
import {
  booksStore, Books, addRemoveListener, appendBooks,
} from './modules/class.js';
import { DateTime } from './modules/luxon.js';

const now = DateTime.now();
newTime.innerHTML = now;

// Add event listener to new button to show form
newNewBtn.addEventListener('click', () => {
  newLoad();

  if (newListSection.classList.contains('show')) {
    newListSection.classList.replace('show', 'hide');
    newListBtn.classList.remove('active');
    newAddSection.classList.replace('hide', 'show');
    newSectionOne.style.height = '90vh';
    newSectionOne.classList.replace('list-back', 'add-back');
    newNewBtn.classList.add('active');
  } else {
    newContactSection.classList.replace('show', 'hide');
    newContactBtn.classList.remove('active');
    newAddSection.classList.replace('hide', 'show');
    newSectionOne.style.height = '90vh';
    newSectionOne.classList.replace('contact-back', 'add-back');
    newNewBtn.classList.add('active');
  }
});

// Add event listener to contact button to show contact-info
newContactBtn.addEventListener('click', () => {
  newLoad();

  if (newListSection.classList.contains('show')) {
    newListSection.classList.replace('show', 'hide');
    newListBtn.classList.remove('active');
    newContactSection.classList.replace('hide', 'show');
    newSectionOne.style.height = '90vh';
    newSectionOne.classList.replace('list-back', 'contact-back');
    newContactBtn.classList.add('active');
  } else {
    newAddSection.classList.replace('show', 'hide');
    newNewBtn.classList.remove('active');
    newContactSection.classList.replace('hide', 'show');
    newSectionOne.style.height = '90vh';
    newSectionOne.classList.replace('add-back', 'contact-back');
    newContactBtn.classList.add('active');
  }
});

// Add event listener to list button to show booksStore
newListBtn.addEventListener('click', () => {
  newLoad();

  if (newAddSection.classList.contains('show')) {
    newAddSection.classList.replace('show', 'hide');
    newNewBtn.classList.remove('active');
    newListSection.classList.replace('hide', 'show');
    newSectionOne.style.height = '';
    newSectionOne.classList.replace('add-back', 'list-back');
    newSectionOne.style.paddingBottom = '150px';
    newListBtn.classList.add('active');
  } else {
    newContactSection.classList.replace('show', 'hide');
    newContactBtn.classList.remove('active');
    newListSection.classList.replace('hide', 'show');
    newSectionOne.style.paddingBottom = '150px';
    newSectionOne.classList.replace('contact-back', 'list-back');
    newListBtn.classList.add('active');
  }
});

// Add submit event listener to form to add book to local storage and DOM
newForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const booksTitle = document.getElementById('bookstitle');
  const booksAuthor = document.getElementById('booksauthor');
  const books = new Books(userId(), booksTitle.value, booksAuthor.value);
  books.addBooks();
  localStorage.setItem('booksStore', JSON.stringify(booksStore));
  appendBooks(books);
  addRemoveListener(books);
  localStorage.removeItem('tableData');
  booksAuthor.value = '';
  booksTitle.value = '';

  newLoad();
  if (newAddSection.classList.contains('show')) {
    newAddSection.classList.replace('show', 'hide');
    newNewBtn.classList.remove('active');
    newListSection.classList.replace('hide', 'show');
    newSectionOne.style.paddingBottom = '150px';
    newListBtn.classList.add('active');
  } else {
    newContactSection.classList.replace('show', 'hide');
    newContactBtn.classList.remove('active');
    newListSection.classList.replace('hide', 'show');
    newSectionOne.style.paddingBottom = '150px';
    newListBtn.classList.add('active');
  }
});
