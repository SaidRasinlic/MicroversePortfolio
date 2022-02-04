let getName = document.querySelector('#name');
let getEmail = document.querySelector('#email');
let getText = document.querySelector('#text');

getName.addEventListener('change', function() {
 localStorage.setItem('name', document.getElementById('name').value);
})

getEmail.addEventListener('change', function() { localStorage.setItem('email', document.getElementById('email').value);})

getText.addEventListener('change', function() { localStorage.setItem('text', document.getElementById('text').value);})

let localName = localStorage.getItem('name');
document.getElementById('name').value = localName;

let localEmail = localStorage.getItem('email');
document.getElementById('email').value = localEmail;

let localText = localStorage.getItem('text');
document.getElementById('text').value = localText;
