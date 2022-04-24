let boxs= document.getElementsByClassName('btn');
let disply= document.getElementsByClassName('disply');
let disply2= document.getElementById("disply");


let displyInput1="";
let displyInput2="";
let displyInput3="";

for (let i = 0; i < boxs.length; i++) {
    boxs[i].addEventListener('click', function(e){
        console.log(e.target.textContent);
    





        if (e.target.textContent==='CE') {
            clearScreen();
        
        }
        if (e.target.textContent!='+' && e.target.textContent!= 'CE') {
            displyInput1+=e.target.textContent;
            disply2.placeholder=displyInput1;
        }else if (e.target.textContent!= 'CE'){
            displyInput2+=e.target.textContent;
            disply2.placeholder=displyInput2;
        }
              
       

      

 
        if (e.target.classList=='box' && mouseDown===1) {
                e.target.style.backgroundColor='white';
              //
            }
    })
 }


 function clearScreen() {
    displyInput1="";
    displyInput2="";
    disply2.placeholder=displyInput1;
  }