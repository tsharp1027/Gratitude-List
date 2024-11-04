// get value of input
function createList() {
    const typeOfGratitude = document.getElementById("typeOfGratitude").value;
// create a new list item if there's input
if (typeOfGratitude){
    const list = document.querySelector('#gratitude-list ul');
    const newItemLast = document.createElement('li');
    const newTextLast = document.createTextNode(typeOfGratitude);
    newItemLast.appendChild(newTextLast);
    list.appendChild(newItemLast);
// clear input field after adding to list
    document.getElementById("typeOfGratitude").value = '';} 
}