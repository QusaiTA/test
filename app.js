'use strict';
let ii=0;

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

    let deleteTd = document.createElement('td');
    deleteTd.id=ii++;
    

        
    deleteTd.textContent = 'X';
        

 

    

    itemsRow.appendChild(itemName);
    itemsRow.appendChild(itemCategory);
    itemsRow.appendChild(itemQuantity);
    itemsRow.appendChild(itemPrice);
    itemsRow.appendChild(deleteTd);
    parent.appendChild(itemsRow);


    let totalOfTotal = calculateTotal();
    total.textContent = totalOfTotal;


}
myForm.addEventListener('submit', handelSubmit);

function handelSubmit(event) {
    event.preventDefault();
    let itemName = event.target.ProductName.value;
    let itemCategory = event.target.productCategory.value;
    let itemQuantity = event.target.productQuantity.value;

    let newItem = new FormProduct(itemName, itemCategory, itemQuantity);
    

    localStorage.setItem('Products', JSON.stringify(allProduct));
    newItem.renderItem();
    // myForm.reset();




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

        let deleteTd = document.createElement('td');
        deleteTd.id = i;
        
        deleteTd.textContent = 'X';
        
        

       
       


        itemsRow.appendChild(itemName);
        itemsRow.appendChild(itemCategory);
        itemsRow.appendChild(itemQuantity);
        itemsRow.appendChild(itemPrice);
        itemsRow.appendChild(deleteTd);
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


// function removeItem (id){
//     // Swal.fire('Item Removed from the Cart!')
  
//     allProduct.splice(id,1);
    
//     // updateCounter();
  
   
//   }

  parent.addEventListener('click', removeItemFromCart);

  function removeItemFromCart(event) {
    parent.textContent = '';  
    alert('hi');
    console.log(event.target.id);
    if (event.target.textContent = 'X' ) {
    //   removeItem(event.target.id);
    allProduct.splice(event.target.id,1);

     
      console.log(event.target.textContent); 


      }


      localStorage.setItem('Products',JSON.stringify(allProduct));
      allProduct = JSON.parse(localStorage.getItem('Products'));
       
      renderFirstRow();
      renderAgain();
        
    }














renderFirstRow();
keepItems();
renderAgain();
