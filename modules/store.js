export default class Store {
    getBooks = () => {
      let book;
      if (localStorage.getItem('bookListss') === null) {
        book = [];
      } else {
        book = JSON.parse(localStorage.getItem('bookListss'));
      }
      return book;
    }

    addBooks = (book) => {
      const books = this.getBooks();
      books.push(book);
      localStorage.setItem('bookListss', JSON.stringify(books));
    }

    deleteBookStorage = (id) => {
      let books = this.getBooks();
      id = parseInt(id, 10);
      books = books.filter((book) => book.id !== id);
      localStorage.setItem('bookListss', JSON.stringify(books));
    }
}