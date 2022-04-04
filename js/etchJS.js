



 


//    const container2 = document.querySelector('.body');
//    const content2 = document.createElement('button');
//    content2.classList.add('box');
//    content2.textContent = 'box';
//    container2.appendChild(content2);


for (let i1 = 0; i1 < 32; i1++) {
    for (let i = 0; i <60 ; i++) {
        const container = document.querySelector('.body');
        const content = document.createElement('button');
        content.classList.add('box');
        content.textContent = "";
        container.appendChild(content);
    
    
        // const container = document.querySelector('.container');
        // const content = document.createElement('button');
        // content.classList.add('box');
        // content.textContent = 'box'+(i+1);
        // container.appendChild(content);
    }
    const container = document.querySelector('.body');
    const content = document.createElement('br');
    content.classList.add('break');
    content.textContent = "";
    container.appendChild(content);
}





let x2= function(){
    while (mouseDown==1){
    console.log("holding down")
    x;
    }
}

    let boxs= document.getElementsByClassName('box');
    console.log(boxs)
 

    let mouseDown = 0;
    document.body.onmousedown = function() { 
      mouseDown=1;
      console.log("mounse down")
      
    }
    document.body.onmouseup = function() {
      mouseDown=0;
    }



 for (let i = 0; i < boxs.length; i++) {


  
    boxs[i].addEventListener('mouseover', function(e){
        console.log(mouseDown)


 
        if (e.target.classList=='box' && mouseDown===1) {
                e.target.style.backgroundColor='black';
              //
            }
    })
 }
 
let reset= document.querySelector('.reset');
 reset.addEventListener('click', function(e){
  for (let i = 0; i < boxs.length; i++) {
      boxs[i].style.backgroundColor='white';
  }
})