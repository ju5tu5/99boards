// Variabelen declareren
let header = document.querySelector('body > header')
let searchButton = document.querySelector('body > header > button')

// Event listeners
searchButton.addEventListener('click', toggleSearchHandler)

// Functies voor afhandeling
function toggleSearchHandler() {
  header.classList.toggle('show-search')
  searchButton.classList.toggle('close')
}

// //declaratie van dom elementen
// var zoekveld = document.querySelector('body > header')
// var zoekbutton = document.querySelector('body > header > button')

// //actie !
// zoekbutton.addEventListener('click', function () {
//   zoekveld.classList.toggle('show-search')
//   zoekbutton.classList.toggle('close')
// })
