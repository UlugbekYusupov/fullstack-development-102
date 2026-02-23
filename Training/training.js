let people = document.getElementById("peopleCount");
let count = 0;

function increase() {
    count += 1;
    people.innerText = count;
}

function decrease() {
    if (count <= 0) {
        count = 0
    }
    else {
    count -= 1;
    }

    people.innerText = count;
}

function refresh () {
    count = 0
    people.innerText = 0
}

