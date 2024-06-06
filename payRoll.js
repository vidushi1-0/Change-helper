let boxes = document.querySelectorAll(".common");
let given_amount = document.querySelector(".user-amount");
let checkBtn = document.querySelector(".btn");
let btn2 = document.querySelector(".btn2");
let blank = document.querySelectorAll(".blank");

let five_100 = document.getElementById("500");
let two_100 = document.getElementById("200");
let hund = document.getElementById("100");
let fifty = document.getElementById("50");
let twenty = document.getElementById("20");
let five = document.getElementById("5");
let one = document.getElementById("1");

const changes = [500 , 200 , 100 , 50 , 20 , 5 , 1];

btn2.addEventListener(("click") , (e) => {
    console.log("RESET");
    given_amount.value = "";
    blank.forEach((bl) => {
        bl.innerText = "0";
    })
})

checkBtn.addEventListener(("click") , (e) => {
    let amount = parseFloat(given_amount.value);

    for(let i=0; i<=changes.length; i++) {
        while(amount >= changes[i]) {
            console.log("change for this amount is : ",changes[i]);
            amount -= changes[i];
            
            if(changes[i] === 500) {
                five_100.innerText = parseFloat(five_100.innerText)+1;
            }

            else if(changes[i] === 200) {
                two_100.innerText = parseFloat(two_100.innerText)+1;
            }

            else if(changes[i] === 100) {
                hund.innerText = parseFloat(hund.innerText)+1;
            }

            else if(changes[i] === 50) {
                fifty.innerText = parseFloat(fifty.innerText)+1;
            }

            else if(changes[i] === 20) {
                twenty.innerText = parseFloat(twenty.innerText)+1;
            }

            else if(changes[i] === 5) {
                five.innerText = parseFloat(five.innerText)+1;
            }

            else if(changes[i] === 1) {
                one.innerText = parseFloat(one.innerText)+1;
            }
        }
    }
})

