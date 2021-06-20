'use strict';

let allProduct = [];
let tableHeader = ['ProductName', 'Category', 'Quantity', 'Price' , 'Remove'];
let myForm = document.getElementById('myForm');
let parent = document.getElementById('table');
let total = document.getElementById('total');


function FormProduct(name, category, quantity) {

    this.name = name;
    this.category = category;
    this.quantity = quantity;
    this.price =  generateRandomPrice(quantity);
    allProduct.push(this);
}

function renderFirstRow() {

    let fisrtRow = document.createElement('tr');


    for (let i = 0; i < tableHeader.length; i++) {

        let headerData = document.createElement('th');
        fisrtRow.appendChild(headerData);
        headerData.textContent = tableHeader[i];



    }
    parent.appendChild(fisrtRow);


}

function handelSubmit(event) {
    event.preventDefault();
    let itemName = event.target.ProductName.value;
    let itemCategory = event.target.productCategory.value;
    let itemQuantity = event.target.productQuantity.value;

    let newItem = new FormProduct(itemName, itemCategory, itemQuantity);
    

    localStorage.setItem('Products', JSON.stringify(allProduct));
    newItem.renderItem();




}

FormProduct.prototype.renderItem = function () {

    let itemsRow = document.createElement('tr');

    let itemName = document.createElement('td');
    itemName.textContent = this.name;

    let itemCategory = document.createElement('td');
    itemCategory.textContent = this.category;

    let itemQuantity = document.createElement('td');
    itemQuantity.textContent = this.quantity;

    let itemPrice = document.createElement('td');
    itemPrice.textContent = this.price;

    

    itemsRow.appendChild(itemName);
    itemsRow.appendChild(itemCategory);
    itemsRow.appendChild(itemQuantity);
    itemsRow.appendChild(itemPrice);
    parent.appendChild(itemsRow);


    let totalOfTotal = calculateTotal();
    total.textContent = totalOfTotal;


}






function keepItems() {


    if (localStorage.getItem('Products')) {

        allProduct = JSON.parse(localStorage.getItem('Products'));
    }
}



function renderAgain() {

    for (let i = 0; i < allProduct.length; i++) {

        let itemsRow = document.createElement('tr');

        let itemName = document.createElement('td');
        itemName.textContent = allProduct[i].name;

        let itemCategory = document.createElement('td');
        itemCategory.textContent = allProduct[i].category;

        let itemQuantity = document.createElement('td');
        itemQuantity.textContent = allProduct[i].quantity;

        let itemPrice = document.createElement('td');
        itemPrice.textContent = allProduct[i].price;

       
       


        itemsRow.appendChild(itemName);
        itemsRow.appendChild(itemCategory);
        itemsRow.appendChild(itemQuantity);
        itemsRow.appendChild(itemPrice);
        parent.appendChild(itemsRow);


    }
    let totalOfTotal = calculateTotal();
    total.textContent = totalOfTotal;




}

function generateRandomPrice(quantity){

    return Math.floor(Math.random() * (1000 - 500) + 500) * quantity;
}



function calculateTotal(){
    let total = 0 ;
    for(let i = 0 ; i < allProduct.length ; i++){
       total += allProduct[i].price;
    }

    return total;
}



myForm.addEventListener('submit', handelSubmit);









renderFirstRow();
keepItems();
renderAgain();
