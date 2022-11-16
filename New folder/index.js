import Methods from './modules/utils.js';
import { DateTime } from './modules/Luxon.js';

const addTitle = document.querySelector('#addTitle');
const addAuthor = document.querySelector('#addAuthor');
const addForm = document.querySelector('#addBook');
const showCurrentTime = document.querySelector('.current-time');

const listMenu = document.querySelector('#list-section');
const addBookMenu = document.querySelector('#add-book-section');
const contactMenu = document.querySelector('#contact-section');
const listSection = document.querySelector('.main');
const addBookSection = document.querySelector('.formSection');
const contactSection = document.querySelector('.contact');

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  Methods.addBook(addTitle.value, addAuthor.value);

  addAuthor.value = '';
  addTitle.value = '';

  Methods.showBooks();
});

listMenu.addEventListener('click', (e) => {
  e.preventDefault();
  listSection.style.display = 'block';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'none';
});

addBookMenu.addEventListener('click', (e) => {
  e.preventDefault();
  addBookSection.style.display = 'block';
  listSection.style.display = 'none';
  contactSection.style.display = 'none';
});

contactMenu.addEventListener('click', (e) => {
  e.preventDefault();
  contactSection.style.display = 'block';
  listSection.style.display = 'none';
  addBookSection.style.display = 'none';
});

const showDateTime = () => {
  const time = DateTime.now();
  const curTime = time.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);

  showCurrentTime.textContent = curTime;
};

window.onload = () => {
  if (localStorage.getItem('storedBookData') !== null && localStorage.getItem('storedBookData') !== '[]') {
    Methods.showBooks();
    listSection.style.display = 'block';
    addBookSection.style.display = 'none';
    contactSection.style.display = 'none';
  }

  setInterval(showDateTime, 1000);
};
