let title = document.getElementById("main-heading")

const list = document.getElementsByClassName('list-items')

const container = document.querySelectorAll('div')
const ul = document.querySelector('ul')
const li = document.createElement('li')

// console.log(ul.parentElement);
// console.log(ul.parentNode);


title.style.color = "white";

for (i=0;i<list.length;i++){
    list[i].style.fontSize = '2rem'
}

const first_item = document.querySelector('.list-items')

ul.append(li)

li.innerHTML = "Spider-Man"
li.setAttribute('id','main-heading')
// li.removeAttribute('id')
li.classList.add('list-items')
li.remove()

console.log(first_item.innerHTML);
// console.log(first_item.textContent);
// console.log(first_item.innerText);
