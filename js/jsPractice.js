
// const btn= document.querySelector("#btnClass");
// console.log(btn)
// btn.addEventListener("click", updateBtn);



// function updateBtn() {
//     if (btn.textContent==='click me') {
//         btn.textContent= 'dont touch me'
//     } else if (btn.textContent==='dont touch me') {
//         btn.textContent= 'click me'
//     }
//     console.log("i was callled");
// }


// function add7(num){
//     return num+7
// }

// console.log(add7(1));

// function times(num) {
//     return num*2;
// }
// console.log(times(1));

// function firstCap(string1) {
  
//     return string1[0].toUpperCase()+string1.slice(1);
// }

// console.log(firstCap("helloworld"));



// function lastCap(input) {

//     let lastNum= input.length;
  
//     let lastIndex=input[lastNum-1].toUpperCase();
  
//     return input.substring(0,lastNum-1)+lastIndex;
// }
// console.log(lastCap("marry"));

// let answer = parseInt(prompt("To access this site you need to enter password"));


const h12= document.querySelector('#h1');
const div2= document.createElement('div');
div2.classList.add('tacos');
div2.textContent='Hey im red';

h12.appendChild(div2);

