function addItem() {
    const inputElement = document.getElementById('newItemText');
    const itemListElement = document.getElementById('items');

    //create new item

    const newItemElement = document.createElement('li');
    newItemElement.textContent = inputElement.value;

    //Append new element to dom

    itemListElement.appendChild(newItemElement);

    //Clear input element
    inputElement.value = '';
}