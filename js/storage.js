const getName = document.querySelector('#name');
const getEmail = document.querySelector('#email');
const getText = document.querySelector('#text');

getName.addEventListener('change', () => { localStorage.setItem('name', document.getElementById('name').value); });

getEmail.addEventListener('change', () => { localStorage.setItem('email', document.getElementById('email').value); });

getText.addEventListener('change', () => { localStorage.setItem('text', document.getElementById('text').value); });

const localName = localStorage.getItem('name');
document.getElementById('name').value = localName;

const localEmail = localStorage.getItem('email');
document.getElementById('email').value = localEmail;

const localText = localStorage.getItem('text');
document.getElementById('text').value = localText;
