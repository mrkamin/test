import { newSectionOne, newLoaderScreen } from './elements.js';
// Function to show loading screen
const newLoad = () => {
  newSectionOne.classList.add('hide');
  newLoaderScreen.classList.remove('hide');
  setTimeout(() => {
    newLoaderScreen.classList.add('hide');
    newSectionOne.classList.remove('hide');
  }, 1000);
};

export default newLoad;