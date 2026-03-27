const secondBtn = document.getElementById('btn-2')
const thirdbutton = document.getElementById('btn-3')
function alerbtn(){
    alert("I like python!");
};

secondBtn.addEventListener('click',alerbtn)

const bgcolor = document.getElementById('box-3')

function changebgcolor(){
    bgcolor.style.backgroundColor = 'blue'
}

bgcolor.addEventListener('mouseover', changebgcolor)

function logg(){
    thirdbutton.innerHTML = 'cliced'
}
thirdbutton.addEventListener('click',logg)