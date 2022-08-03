// traversing the dom 
var itemList=document.querySelector('#items');
//parent node


// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor="purple";
// console.log(itemList.parentNode.parentNode);

// parent element 

//  console.log(itemList.parentElement);
//  itemList.parentElement.style.backgroundColor="red";
//  console.log(itemList.parentElement.parentElement);

// childNode 
console.log(itemList.childNodes);
console.log(itemList.children[1]); 
itemList.children[1].style.backgroundColor='yellow';

//firstchild
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent="hello1";

//lastChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent="last hello";

//nextsibling
console.log(itemList.nextSibling);
//nextElementSibling 
console.log(itemList.nextElementSibling);
//previousSibling
console.log(itemList.previoussibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color="green";

//createElement
//create a div
var newDiv=document.createElement('div');
//add a class
newDiv.className="hello";
// add id 
newDiv.id='hello1'

//add attribute
newDiv.setAttribute('title','hellodiv');

// create a textnode 
var newDivText=document.createTextNode('hello world');
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
 
console.log(newDiv);
newDiv.style.fontSize='30px'
container.insertBefore(newDiv,h1);

//adding HEllo before itemListener
var parentNode=document.getElementById('header-title');
parentNode.innerHTML='HEllo '+ parentNode.innerHTML;

//adding HEllo before item1
var itemList1=document.querySelector('#items')
var item1=itemList1.firstElementChild.textContent;
itemList1.firstElementChild.textContent='HEllo'+itemList1.firstElementChild.textContent;