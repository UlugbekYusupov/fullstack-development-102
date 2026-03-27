// const input = document.getElementById("passwordInput")
// const checkBtn=document.getElementById("checkBtn")
// const result = document.getElementById("result")

// checkBtn.addEventListener('click', function(){
//     let hasNum = 0;
//     let hasUpCase = 0;
//     let hasSpChar = 0;
//     let has8Chars = 0

//     const specialChars = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/";
//     if (length(input.value) >= 8) has8Chars = 1
//     for (let char of input.value) {
//         if (char >= 'A' && char <= 'Z') hasUpCase = 1;
//         if (char >= '0' && char <= '9') hasNum = 1;
//         if (char in specialChars) hasSpChar = 1;
//     }
//     let st = has8Chars + hasNum + hasSpChar + hasUpCase
//     if (st == 4) {
//         result.textContent="Strong"
//         result.classList.add("strongPass")
//     }
//     else if (st < 2) {
//         result.textContent="Weak"
//         result.classList.add("weakPass")
//     }
//     else {
//         result.textContent="Medium"
//         result.classList.add("mediumPass")
//     }
// })


const input = document.getElementById("passwordInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", function () {
    let hasNum = 0;
    let hasUpCase = 0;
    let hasSpChar = 0;
    let has8Chars = 0;

    const specialChars = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/";

    if (input.value.length >= 8) has8Chars = 1;

    for (let char of input.value) {
        if (char >= "A" && char <= "Z") hasUpCase = 1;
        if (char >= "0" && char <= "9") hasNum = 1;
        if (specialChars.includes(char)) hasSpChar = 1;
    }

    let st = has8Chars + hasNum + hasSpChar + hasUpCase;

    result.classList.remove("strongPass", "mediumPass", "weakPass");

    if (st === 4) {
        result.innerHTML="<b>Strong</b>"
        result.classList.add("strongPass");
    } else if (st < 2) {
        result.innerHTML="<b>Weak</b>"
        result.classList.add("weakPass");
    } else {
        result.innerHTML="<b>Medium</b>"
        result.classList.add("mediumPass");
    }
});


