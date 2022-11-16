import { newLibEmpty } from './elements.js';

// Function to show / hide empty library message
export default function displayEmpty() {
  newLibEmpty.classList.toggle('hide');
}