let boxs= document.getElementsByClassName('btn');
let disply= document.getElementsByClassName('disply');
let disply2= document.getElementById("disply");


let displyInput1="";
let displyInput2="";
let displyInput3="";
let operation="";
let opIndex=0;
for (let i = 0; i < boxs.length; i++) {
    boxs[i].addEventListener('click', function(e){

        // if(displyInput2!=null){
        //     opIndex=2;
      if (e.target.textContent==="") {
          return;
      }
      
         switch (e.target.textContent) {
        case "+":
            operation="+";
            opIndex=1;
            break;
        case "-":
            operation="-";
            opIndex=1;
            break;
        case "/":
            operation="/";
            opIndex=1;
            break;
        case "x":
            operation="x";
            opIndex=1;
            break;
       
      }



          
        if (e.target.textContent==="="){
            //displyInput1 operation on displyInput2
            output();
            return;
        }
        console.log(opIndex)
        if (opIndex===0) {
            displyInput1+=e.target.textContent;
            disply2.placeholder=displyInput1;
        }else if(opIndex===1){
            displyInput2=e.target.textContent;
            disply2.placeholder=displyInput2;
            opIndex=2;
            return;
        }else if(opIndex===2){
            displyInput3+=e.target.textContent;
            disply2.placeholder=displyInput3;
        }


        if (e.target.textContent==='CE')clearScreen();
    
        
      
     
       

        // if (e.target.textContent!='+' && e.target.textContent!= 'CE') {
        //     displyInput1+=e.target.textContent;
        //     disply2.placeholder=displyInput1;
        // }else if (e.target.textContent!= 'CE'){
        //     displyInput2+=e.target.textContent;
        //     disply2.placeholder=displyInput2;
        // }

      
      
       

    })
 }


 function clearScreen() {
    displyInput1="";
    displyInput2="";
    displyInput3="";
    disply2.placeholder=0;
  }


  function addChar(x){
    displyInput1+=x;
  }

  function output(){
     
    console.log(displyInput1)
    console.log(displyInput3)
      let num1=Number(displyInput1);
      let num2=  Number(displyInput3);
      let op=Number(operation);
      clearScreen();

    console.log(displyInput2)
      switch (operation) {
        case "+":
            disply2.placeholder=num1+num2;
            break;
        case "-":
            disply2.placeholder=num1-num2;
            break;
        case "/":
            disply2.placeholder=num1/num2;
            break;
        case "x":
            disply2.placeholder=num1*num2;
            break;
          default: disply2.placeholder="error";
              break;
      }

      
      opIndex=0;

  }