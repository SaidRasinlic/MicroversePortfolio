function clearStorage() {
  localStorage.clear();
}

window.onload = function () {
  document.getElementById('clear-butt').onclick = clearStorage();
};

let name = '';
let email = '';
let text = '';
function updateStorage() {
  name = localStorage.getItem('name');
  email = localStorage.getItem('email');
  text = localStorage.getItem('text');

  document.getElementById('name').value = name;
  document.getElementById('email').value = email;
  document.getElementById('text').value = text;
}

function populateStorage() {
  localStorage.setItem('name', document.getElementById('name').value);
  localStorage.setItem('email', document.getElementById('email').value);
  localStorage.setItem('text', document.getElementById('text').value);

  updateStorage();
}

name.onchange = populateStorage;
email.onchange = populateStorage;
text.onchange = populateStorage;

if (!localStorage.getItem('name')) {
  populateStorage();
} else {
  updateStorage();
}
