const theme = document.querySelector('#theme');
const body=document.querySelector("body")
// Set default mode to dark
body.classList.add("light")
let mode = 'dark';

// Listen for a click event on toggle switch
theme.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    body.setAttribute('class', 'light');
    theme.src=theme.dataset.sun;
    theme.dataset.status="sun";
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    body.setAttribute('class', 'dark');
    theme.src=theme.dataset.moon;
    theme.dataset.status="moon";
  }
});