// let message;


// let name2= 'nat', 
// age=45,
// message2='gimmie all your money'; 

// // alert(name2)

// // let $=1;
// // let _=2;
// // alert($+_)

// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";


// //left off here

// //https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-1#numbers



// const lotsOfDecimal = 1.766584958675746364;
// lotsOfDecimal;
// const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
// twoDecimalPlaces;

// console.log(twoDecimalPlaces)


// if (1===2) {
//     console.log("its true");
// } else {
//     console.log("its false");
// }

const btn= document.querySelector("#btnClass");
console.log(btn)
btn.addEventListener("click", updateBtn);



function updateBtn() {
    if (btn.textContent==='click me') {
        btn.textContent= 'dont touch me'
    } else if (btn.textContent==='dont touch me') {
        btn.textContent= 'click me'
    }
    console.log("i was callled")
}

