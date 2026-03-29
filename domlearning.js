// const title = document.getElementById('main-heading');
// console.log(title);

// const listItems = document.getElementsByClassName('list-items')
// console.log(listItems);
 
// const listItems = document.getElementsByTagName('li')
// console.log(listItems);

// const container = document.querySelector('div');
// console.log(container);

// const title = document. querySelector('#main-heading');
// title.style.color = 'blue'; 
// console.log(title);

// const listItems = document.querySelectorAll('.list-items')
// for (i=0; i<listItems.length; i++){
//     listItems[i].style.fontSize = '1.5rem';
// }

// const firstlistitem = document.querySelector('.list-items')
// console.log(firstlistitem.innerText);
// console.log(firstlistitem.textContent);
// console.log(firstlistitem.innerHTML);

// const ul = document.querySelector('ul');   
// const li = document.createElement('li');
// ul.append(li);

// li.innerText = 'X-men';

// li.setAttribute('class', 'list-items');
// li.removeAttribute('class')

// li.classList.add('list-items') 
// // li.classList.remove('list-items')
// console.log(li.classList.contains('list-items'));

// li.remove();

// const title = document.querySelector('#main-heading');
// console. log(title.getAttribute('id'));

// Parent Node Traversal
// let ul = document.querySelector('ul');
// // console.log(ul.parentNode.parentNode);
// // console.log(ul.parentElement.parentElement);
// const html = document. documentElement;
// console.log(html.parentNode);

// let ul = document.querySelector('ul');
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);
// ul.childNodes[1].style.backgroundColor = 'blue'; 
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// Sibling Node Traversal
// let ul = document.querySelector('ul');
// const div = document.querySelector('div');
// console.log(div.childNodes);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);


// Event Listeners
// element.addEventListener("click", function);

// const buttonTwo = document.querySelector('.btn-2');

// function alertbtn(){
//     alert('I also really hate Javascript')
// }
// buttonTwo.addEventListener('click', alertbtn)

// const newbackgroundcolor = document.querySelector('.box-3');
// function changebgcolor () {
//     newbackgroundcolor.style.backgroundColor = 'navy';

// };
// newbackgroundcolor.addEventListener('mouseover', changebgcolor)



// const revealbtn = document.querySelector('.reveal-btn');
// const hiddenContent = document.querySelector('.hidden-content');
// function revealContent(){
//     if(hiddenContent.classList.contains('reveal-btn')){
//         hiddenContent.classList.remove('reveal-btn')
//     } else {hiddenContent.classList.add('reveal-btn')}
// };
// revealbtn.addEventListener('click', revealContent)



// window.addEventListener("click", function() {
//     console.log('Window');
// }, true);

// document.addEventListener("click", function() {
//     console.log('Document');
// }, true);

// document.querySelector(".div2").addEventListener("click", function() {
//     console.log('DIV 2');
// }, true);

// document.querySelector(".div1").addEventListener("click", function() {
//     console.log('DIV 1');
// }, true);

// document.querySelector("button").addEventListener("click", function(e) {
//     console.log(e.target.innerText = 'clicked!');
//     ;
// }, true);