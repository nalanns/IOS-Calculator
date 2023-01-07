let one = document.getElementsByClassName("btnOne")
let two = document.getElementsByClassName("btnTwo")
let three = document.getElementsByClassName("btnThree")
let four = document.getElementsByClassName("btnFour")
let five = document.getElementsByClassName("btnFive")
let six = document.getElementsByClassName("btnSix")
let seven = document.getElementsByClassName("btnSeven")
let eight = document.getElementsByClassName("btnEight")
let nine = document.getElementsByClassName("btnNine")
let zero = document.getElementsByClassName("btnZero")
let display = document.getElementsByClassName("display")[0]
let buttons = document.getElementsByClassName("buttons")
let buttons2 = document.getElementsByClassName("buttons")
let visible = document.getElementsByClassName("visible")
let process = document.getElementsByClassName("process")
let result = document.getElementsByClassName("result")[0]
let equal = document.getElementsByClassName("btnEqual")[0]

let number = 0
let islem = ""

// for (i = 0; i < visible.length; i++) {
//   console.log(visible[i].innerHTML);
//   visible[i].addEventListener("click", (e) => {
//     display.innerHTML += e.target.innerHTML;
//   });
// }


Array.from(process).forEach((e) => {
  e.addEventListener("click", (e) => {
    islem = e.target.innerHTML
    console.log(e.target.innerHTML)
      console.log(display.innerHTML);
      number =Number(display.innerHTML)
      result.innerHTML = display.innerHTML;
      display.innerHTML = "";
  });
});

console.log(equal);
console.log(process);

equal.addEventListener("click", (e) => {
    console.log(equal);
    if ( islem == "x"){
        result.innerHTML = number*Number(display.innerHTML)
        display.innerHTML = ""
        number = ""
    }
    else if( islem == "-"){
        result.innerHTML = number-Number(display.innerHTML)
        display.innerHTML = ""
        number = ""
    }
    else if ( islem == "+"){
        result.innerHTML = number+Number(display.innerHTML)
        display.innerHTML = ""
        number = ""
    }
    else if(islem == "÷"){
        result.innerHTML = number/Number(display.innerHTML)
        display.innerHTML = ""
        number = ""
    }
});


Array.from(visible).forEach((e) => {
    e.addEventListener("click", (e) => {
      display.innerHTML += e.target.innerHTML;
    });
  });
  

// buttons[0].addEventListener("click", (a) => {
//   console.log(a.target.innerHTML);
//   display.innerHTML = a.target.innerHTML;
// });
