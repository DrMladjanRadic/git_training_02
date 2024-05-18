var listItems = document.querySelectorAll('li');

for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', event => fillName(event) );
}

function fillName(event) {
    document.getElementById('nameToShow').innerText = event.target.innerText;
}