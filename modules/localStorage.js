export const tableData = {
  title: '',
  author: '',
};

export const titleInput = document.getElementById('title');
export const authorInput = document.getElementById('author');

titleInput.addEventListener('input', () => {
  tableData.title = titleInput.value;
  localStorage.setItem('tableData', JSON.stringify(tableData));
});

authorInput.addEventListener('input', () => {
  tableData.author = authorInput.value;
  localStorage.setItem('tableData', JSON.stringify(tableData));
});

if (localStorage.getItem('tableData')) {
  const formValue = localStorage.getItem('tableData');
  const formValueObj = JSON.parse(formValue);
  titleInput.value = formValueObj.title;
  authorInput.value = formValueObj.author;
}
