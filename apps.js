import Store from './modules/store.js';
import UI from './modules/ui.js';
import { DateTime } from './modules/luxon.js';

const store = new Store();
const ui = new UI();

const updateTime = () => {
  let dt = DateTime.now();
  dt = dt.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  const date = document.querySelector('.date');
  date.innerHTML = dt;
};

class Book {
  constructor(title, author, id = Math.floor(Math.random() * 1000000000000000)) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

// EVENT TO DISPLAY BOOKS
document.addEventListener('DOMContentLoaded', ui.showBooks);
// EVENT TO ADD A BOOK
document.querySelector('#book-card').addEventListener('submit', (e) => {
  e.preventDefault();
  // get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  if (title !== '' && author !== '') {
    const book = new Book(title, author);
    // CALL THE OTHER CLASSES TO PASS AND DISPLAY THE BOOKS TO UI
    ui.addBookToList(book);
    ui.clearFields();
    store.addBooks(book);
  } else {
    // alert('Please fill inputs');
  }
});
// EVENT DELETE
document.querySelector('.bookDisplay').addEventListener('click', (e) => {
  if (e.target.className === 'remove') {
    const id = e.target.previousElementSibling.innerText;
    store.deleteBookStorage(id);
    ui.deleteBook(e.target);
  }
});

const list = document.getElementById('list');
const addNew = document.getElementById('new');
const contact = document.getElementById('contact');
const form = document.querySelector('#book-card');
const awesome = document.querySelector('.awesomeBooks');
const bookDisplay = document.querySelector('.bookDisplay');


const contactUs = document.querySelector('.contactUs');

list.addEventListener('click', () => {
  awesome.style.display = 'block';
  bookDisplay.style.display = 'block';
  form.style.display = 'none';
  contactUs.style.display = 'none';
});

addNew.addEventListener('click', () => {
  form.style.display = 'block';
  awesome.style.display = 'none';
  bookDisplay.style.display = 'none';
  contactUs.style.display = 'none';
});

contact.addEventListener('click', () => {
  contactUs.innerHTML = `
  <h2 class="contactUsHeader">Contact Information</h2>
  <p class="contactUsParagraph">Do you have any question, or you just want to say "Hi"?
      <br>
      You can reach out to us!
  </p>
  <div class="contactDiv">
      <ul class="contactUsUl">
          <li>- &nbsp; Our email address byiringiromoise53@gmail.com</li>
          <li>- &nbsp; Our email address mbyiringiro18@gmail.com </li>
          <li>- &nbsp; Our phone numbers +250781850775</li>
          <li>- &nbsp; Our house address 488+ kicukiro</li>
      </ul>
  </div>
  `;
  contactUs.style.display = 'block';
  form.style.display = 'none';
  awesome.style.display = 'none';
  bookDisplay.style.display = 'none';
});

setInterval(updateTime, 1000);
